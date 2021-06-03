---
title: 谈谈你对`vue`生命周期的理解
---

# 谈谈你对`vue`生命周期的理解

## 什么是 Vue 的声明周期

## 生命周期钩子的作用

## 第一次页面加载触发哪几个生命周期钩子

## 异步请求适合在哪个生命周期调用

## 生命周期钩子能否使用箭头函数

## beforeUpdate 生命周期钩子能否进行数据的修改？

```js
new Vue({
  el: '#app',
  data: data,
  beforeCreate() {
    console.log(`beforeCreate`)
  },
  created() {
    console.log(`created`)
  },
  beforeMount() {
    console.log(`beforeMount`)
  },
  mounted() {
    console.log(`mounted`)
  },
  beforeUpdate() {
    console.log(`beforeUpdate`)
  },
  updated() {
    console.log(`updated`)
  },
  beforeDestroy() {
    console.log(`beforeDestroy`)
  },
  destroyed() {
    console.log(`destroyed`)
  },
})
```

## 第一次页面加载的时候触发哪几个生命周期钩子

```
beforeCreate created beforeMount mounted

```

```js
callHook(vm, 'beforeCreate')
initInjections(vm) // resolve injections before data/props
initState(vm)
initProvide(vm) // resolve provide after data/props
callHook(vm, 'created')
```

|              |                                                               |     |
| ------------ | ------------------------------------------------------------- | --- |
| beforeCreate | props、methods、data、computed、watch、inject、provide 不可用 |     |
| created      | 可以使用，但是还没有挂载的操作 没有\$el                       |     |
|              |                                                               |     |
