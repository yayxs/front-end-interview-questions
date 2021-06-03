---
title: new Vue的时候发生了什么
---

当调用 new Vue 的时候传入`options` 会执行 `this._init` 即是`Vue.prototype._init`

```js
function Vue(options) {
  if (process.env.NODE_ENV !== 'production' && !(this instanceof Vue)) {
    // Vue is a constructor and should be called with the `new` keyword
    warn('启动安全模式，应该使用new 关键字来调用Vue')
  }
  // init方法的调用
  this._init(options) // 执行 new Vue 的时候  this._init()方法被执行
}
```

那我们是如何使用的呢，一个简单的案例

```html
<div id="app">{{test}}</div>
```

```js
<script src="./vue.js"></script>
```

```js
var vm = new Vue({
  el: '#app',
  data: {
    test: 1,
  },
})
```

执行 new Vue()时，会调用 `._init` 方法，该方法实现了一系列初始化操作，
它将 data 对象中的所有的 property 加入到 Vue 的响应式系统中。当这些 property 的值发生改变时，视图将会产生“响应”，**即匹配更新为新的值**

我们查看 Vue 的文档会发现 [Vue.config.performance](https://cn.vuejs.org/v2/api/#performance)

官方文档描述的性能追踪就是在**组件初始化的** `_init` 方法中实现的

```js
let startTag, endTag
/* istanbul ignore if */
if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
  startTag = `vue-perf-start:${vm._uid}`
  endTag = `vue-perf-end:${vm._uid}`
  mark(startTag)
}

// 中间的代码省略...

/* istanbul ignore if */
if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
  vm._name = formatComponentName(vm, false)
  mark(endTag)
  measure(`vue ${vm._name} init`, startTag, endTag)
}
```

接着是 声明一个 是否是 Vue 实例的标记 `_isVue`

```js
vm._isVue = true // 作用：为了避免被响应式的系统观测到
```

包括整个生命周期的流程以及响应式系统流程的启动等。

```js
initLifecycle(vm)
initEvents(vm)
initRender(vm)
callHook(vm, 'beforeCreate')
initInjections(vm) // resolve injections before data/props
initState(vm)
initProvide(vm) // resolve provide after data/props
callHook(vm, 'created')
```

在各项工作进行之前还有一点就是

```js
// 在vm实例上增加 $options 属性
// https://cn.vuejs.org/v2/api/#vm-options
// 重点查看属性合并的方法
vm.$options = mergeOptions(
  resolveConstructorOptions(vm.constructor),
  options || {},
  vm
)
```
