---
title: computed watch methods 三者的应用场景与区别以及实现原理?
---

## 计算属性 computed

计算属性是基于它们的响应式依赖进行缓存的,依赖的是**响应式数据** 一般的数据不行

- 应用场景就是 计算一个值比较费劲
- 使用方法简单
- 缓存一定程度上可以提升性能

## 方法 methods

调用方法将总会再次执行函数。

## watch

- 使用场景：在某个数据变化的时候做事情
- 使用方法如下

```js
 baseData:'', // 一种是基本的数据类型
 params:{
        arr:[1],
  },
```

```
watch:{
   baseData(val){
     console.log(val)
   },
   params:{
     handler(newVal,oldVal){
       console.log(newVal)
       console.log(oldVal)
     },
    //  deep:true, 深度监听数组对象等数据类型
     immediate: true // 一上来就执行
   }
  },
```

其中注意两个词

- immediate: true 一上来就会执行
- deep 其中 deep 是深度监听 给对象的所有属性都增加监听器 ，但是性能开销大
  - 当用户指定了 watch 中的 deep 属性为 true 时，如果当前监控的值是数组类型。会对对象中的每 一项进行求值，此时会将当前 watcher 存入到对应属性的依赖中，这样数组中对象发生变化时也 会通知数据更新

可以通过

```
  "obj.a": {
      handler(newName, oldName) {
        console.log(newName);
        console.log(oldName);
      },
      immediate: true,
    },
```
