---
title: 手写实现深浅拷贝（深浅克隆）
---

# 手写实现深浅拷贝（深浅克隆）

## 背景

> 深浅拷贝 是面试中的`明星话题`

**首先明确一点我们接下来探讨的都是引用类型，一般我们拷贝的也就是像数组对象这种较为复杂的数据类型**

什么是引用类型，我下边举个例子，也就是说 你和弟弟都是家里的人 一旦你弟弟 改变了你家的布局，那么你俩拿钥匙回到家看到的是一样的，都是改变后的样子 也就是说 你俩是一家人（这里就不用女朋友举例了）

如何切断数据，就是重新拷贝一份 

- 浅拷贝就是表面的拷贝

- 深拷贝就是无限层级的拷贝下去

## 浅拷贝

浅拷贝:创建一个新对象，有旧对象原始属性值（基本类型，拷贝的是基本类型；引用类型，便是内存地址）一份精确拷贝
其中一个对象地址改变，相互影响（也就是说虽然拷贝过了，但是还是会相互影响的）

>自己创建一个新的对象 来接收你要重新复制或引用的对象值 如果对象属性是基本的数据类型 复制的就是基本类型的值给新对象 如果是引用的类型 复制的就是内存地址
>
>现在有两个对象，其中一个对象改变了内存的地址 影响另一个
>
>

```js
let obj1 = {
  name: '张三',
  age: 18,
}
let obj2 = obj1
obj2.name = '李四'

console.log(obj1.name) // 此时第一个对象的name属性就被改掉了
```

我们发现，我们通过一个简单的 `赋值操作来完成这一操作` 那我们是不是也可以通过一个简单的函数来实现，那就是

```js
const shallow = (target) => {
  let obj = {}
  for (let prop in target) {
    obj[prop] = target[prop]
  }
}
```

从数组来看的话

```js
let targetArr = [
  { name: 'oldName' },
  '1',
  '1',
  1,
  1,
  true,
  true,
  undefined,
  undefined,
  null,
  null,
]

let resultArr = targetArr.concat()
resultArr[0]['name'] = 'newName'

console.log('old', targetArr) // 此时 targetArr 的第一个元素的 name 也被修改了
console.log('new', resultArr)
```

### 具体实现

```js
function firstShallowClone(target) {
  if (typeof target !== 'object') return
  let result = Array.isArray(target) ? [] : {}
  for (let k in target) {
    if (target.hasOwnProperty(k)) {
      result[k] = target[k]
    }
  }
  return result
}
```

### 方法一

`Object.assign` ES6 定义了 `Object.assign(..) `方法来实现浅复制 用于JS对象的合并多个用途 

>参数一 目标 
>
>参数二 来源对象
>
>参数三 来源对象
>
>

```js
let dest = {
  user: 'yayxs',
}
Object.assign(dest, { name: 'yayxs' }, { age: 12 })
console.log(dest)
```



- 它不会拷贝对象的继承属性
- 它不会拷贝对象的不可枚举的属性；
- 可以拷贝 Symbol 类型的属性。

### 方法二 

通过`扩展运算符`



## 深拷贝

深拷贝的核心思路便是 拷贝加递归 也就是说当对象的某一个属性还是个对象的时候，我们需要对之进一步拷贝,从内存完整拷贝，在堆中重新开启区间，对象地址改变不会影响

>对于复杂的引用类型 其在堆中内存中 完全开辟了一块内存地址 将原有的对象完全复制过来存放
>
>

### 第一个深拷贝：通过`JSON`的两个 API

- JSON.parse() 方法用来解析 JSON 字符串，构造由字符串描述的 JavaScript 值或对象
- JSON.stringify() 方法将一个 JavaScript 值（对象或者数组）转换为一个 JSON 字符串

实现 JavaScript 中的深拷贝，有一种非常取巧的方式 —— JSON.stringify,

```js
let obj = {
  name: 'yayxs',
  fav: [
    {
      type: 'play',
    },
  ],
  friend: {
    name: 'wanghuahua',
  },
}

const objStr = JSON.stringify(obj) // deepClone.js:16 {"name":"yayxs","fav":[{"type":"play"}],"friend":{"name":"wanghuahua"}}
const objCopy = JSON.parse(objStr)

objCopy.fav.splice(0, 1)

console.log(obj['fav']) // [{}]
console.log(objCopy['fav']) //[]
```

但是如果单个元素是函数的话，我们来试一下

```js
let fnArr = [
  () => {
    console.log(1)
  },
  () => {
    console.log(2)
  },
]

console.log(JSON.parse(JSON.stringify(fnArr))) // [null, null]
```

### 第二个深拷贝：递归拷贝

判断一下属性值的类型，当目前属性值的类型是个对象的时候，然后递归克隆，

```js
function firstDeepClone(target) {
  //  如果是 值类型 或 null，则直接return
  if (typeof target !== 'object' || target === null) {
    return target
  }
  // 结果对象
  let res = target instanceof Array ? [] : {}
  for (let key in res) {
    if (obj.hasOwnProperty(key)) {
      // 首先判断当前key 所对应的属性值是否是个引用类型
      if (typeof obj[key] === 'object') {
        res[key] = firstDeepClone(obj[key])
      } else {
        res[key] = obj[key]
      }
    }
  }
}
```
