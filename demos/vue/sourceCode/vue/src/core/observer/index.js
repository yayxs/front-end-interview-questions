/* @flow */

import Dep from './dep'
import VNode from '../vdom/vnode'
import { arrayMethods } from './array'
import {
  def,
  warn,
  hasOwn,
  hasProto,
  isObject,
  isPlainObject,
  isPrimitive,
  isUndef,
  isValidArrayIndex,
  isServerRendering
} from '../util/index'

const arrayKeys = Object.getOwnPropertyNames(arrayMethods)

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
export let shouldObserve: boolean = true

export function toggleObserving (value: boolean) {
  shouldObserve = value
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
export class Observer {
  value: any;
  dep: Dep;
  vmCount: number; // number of vms that have this object as root $data

  constructor (value: any) {
    this.value = value  // value 引用实例对象
    this.dep = new Dep() // 保存 Dep 实例对象
    this.vmCount = 0 //
    def(value, '__ob__', this)
    if (Array.isArray(value)) {
      // 是数组
      if (hasProto) {
        protoAugment(value, arrayMethods)
      } else {
        copyAugment(value, arrayMethods, arrayKeys)
      }
      this.observeArray(value)
    } else {
      // 纯对象的时候
      this.walk(value)
    }
  }

  /**
   * Walk through all properties and convert them into
   * getter/setters. This method should only be called when
   * value type is Object.
   */
  walk (obj: Object) {
    // 获取对象的所有可枚举的属性
    const keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i++) {
      //
      defineReactive(obj, keys[i])
    }
  }

  /**
   * Observe a list of Array items.
   */
  observeArray (items: Array<any>) {
    for (let i = 0, l = items.length; i < l; i++) {
      observe(items[i])
    }
  }
}

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src: Object) {
  /* eslint-disable no-proto */
  target.__proto__ = src
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target: Object, src: Object, keys: Array<string>) {
  for (let i = 0, l = keys.length; i < l; i++) {
    const key = keys[i]
    def(target, key, src[key])
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
/**
 * 参数一 要观测的数据
 * 参数 布尔值 被观测的数据是否是跟级数据
 */
export function observe (value: any, asRootData: ?boolean): Observer | void {
  // 一上来就是一个判断
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  let ob: Observer | void
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    /**
     * 进行观测的条件
     * 1 shouldObserve 是true 类似一个开关 可以是真也可以是假 控制是否要对数据进行观测
     * 2 isServerRendering() 是否是服务端渲染 不是服务端渲染的时候才会进行数据的观测
     * 3 数据是数组或者纯对象才进行观测
     */
    ob = new Observer(value)
  }
  if (asRootData && ob) {
    ob.vmCount++
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 * 将数据对象的数据属性转为访问器属性 为了数据设置一对  gettter 、 setter
 * const data = {
  a: 1,
  __ob__: {
    value: data,
    dep: dep实例对象, // new Dep() , 包含 Dep 实例对象
    vmCount: 0
  }
}
 */
export function defineReactive (
  obj: Object,
  key: string,
  val: any,
  customSetter?: ?Function,
  shallow?: boolean
) {
  const dep = new Dep() // Dep 的实例对象
  // 获取字段的已有属性描述对象
  const property = Object.getOwnPropertyDescriptor(obj, key)
  // 如果是不可配置的属性直接返回
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  const getter = property && property.get // 保存 get 函数
  const setter = property && property.set // 保存 set 函数
  // if 中的条件是为了保证数据响应式的统一性
  if ((!getter || setter) && arguments.length === 2) { // 传两个参数
    val = obj[key]
  }

  let childOb = !shallow && observe(val)
  /**
   * 核心操作
   */
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    // 当属性被读取的时候也正是 vue 依赖收集的时机
    get: function reactiveGetter () {
      /**
       *首先判断是否存在 getter (属性原有的get 函数)
       存在的话直接调用
       */
      const value = getter ? getter.call(obj) : val
      // Dep.target 中保存的就是要被收集的依赖
      if (Dep.target) {
        dep.depend() // 依赖被收集了
        if (childOb) {
          childOb.dep.depend()
          if (Array.isArray(value)) {
            // 如果是读取的属性值是数组的话 需要调用dependArray
            dependArray(value)
          }
        }
      }
      return value // 正确的返回值 value
    },
    // set中就是触发依赖，也就是当属性被修改的时候怎么能够触发
    // 主要做两件事 一是 正确为属性设置新的值 二是触发响应的依赖
    set: function reactiveSetter (newVal) {
      const value = getter ? getter.call(obj) : val
      /* eslint-disable no-self-compare */
      // 对比新的值和旧值 只有在变化的情况下才会进行
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (process.env.NODE_ENV !== 'production' && customSetter) {
        customSetter()
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) return
      if (setter) {
        setter.call(obj, newVal)
      } else {
        val = newVal
      }
      // 设置了新的值之后要对新值进行观测
      childOb = !shallow && observe(newVal)
      dep.notify()
    }
  })
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 * 接收三个参数
 * 参数一 将要被添加属性的对象
 * 参数二 要添加属性的key
 * 参数三 要添加的属性的val
 */
export function set (target: Array<any> | Object, key: any, val: any): any {
  if (process.env.NODE_ENV !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    // 如果 set 函数的第一个参数是undefined 或者是 null 或者是 原始的类型在非生产环境下警告
    // 理论上是只能为数组或者对象添加属性
    warn(`Cannot set reactive property on undefined, null, or primitive value: ${(target: any)}`)
  }
  // 如果target 是一个数组 并且key 是一个有效的数组索引
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key)
    target.splice(key, 1, val) // 将指定位置的元素替换为新值
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val
    return val
  }
  const ob = (target: any).__ob__
  if (target._isVue || (ob && ob.vmCount)) {
    process.env.NODE_ENV !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    )
    return val
  }
  if (!ob) {
    target[key] = val
    return val
  }
  defineReactive(ob.value, key, val)
  ob.dep.notify()
  return val
}

/**
 * Delete a property and trigger change if necessary.
 * 参数一 要被删除属性的目标对象
 * 参数二 要删除属性的键名
 */
export function del (target: Array<any> | Object, key: any) {
  if (process.env.NODE_ENV !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(`Cannot delete reactive property on undefined, null, or primitive value: ${(target: any)}`)
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1)
    return
  }
  const ob = (target: any).__ob__
  if (target._isVue || (ob && ob.vmCount)) {
    process.env.NODE_ENV !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    )
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key]
  if (!ob) {
    return
  }
  ob.dep.notify()
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value: Array<any>) {
  for (let e, i = 0, l = value.length; i < l; i++) {
    e = value[i]
    e && e.__ob__ && e.__ob__.dep.depend()
    if (Array.isArray(e)) {
      dependArray(e)
    }
  }
}
