---
title: computed,watch,methods 三者的应用场景与区别以及实现原理?
---

## 计算属性 computed

计算属性是基于它们的响应式依赖进行缓存的,依赖的是**响应式数据** 一般的数据不行

- 应用场景就是 计算一个值比较费劲
- 使用方法简单
- 缓存一定程度上可以提升性能

## 方法 methods

调用方法将总会再次执行函数。

## watch
Vue 实例将会在实例化时调用 $watch()，遍历 watch 对象的每一个 property。一个对象，键是需要观察的表达式，值是对应回调函数
用于观察一个表达式或computed函数在Vue.js实例上的变化。回调函数调用时，会从参数得到新数据（new value）和旧数据（old value）。表达式只接受以点分隔的路径，例如a.b.c。如果是一个比较复杂的表达式，可以用函数代替表达式。
```html
<div id="app">
  123 {{ $data }}

  <button @click="() => (a += 1)">a+1</button>
</div>

<script src="../js/vue.js"></script>
<script>
  const vm = new Vue({
    el: "#app",
    data: {
      a: 1,
      b: { c: 2, d: 3 },
      e: {
        f: {
          g: 4,
        },
      },
      h: [],
    },
  });

  vm.$watch("a", function(newVal, oldVal) {
    // 做点什么
    console.log("new: %s, old: %s", newVal, oldVal);
  });
</script>

```

其中注意两个词

- immediate: true 一上来就会执行(在选项参数中指定immediate: true，将立即以表达式的当前值触发回调)
```js
```
  "obj.a": {
      handler(newName, oldName) {
        console.log(newName);
        console.log(oldName);
      },
      immediate: true,
    },
```
```
- deep 其中 deep 是深度监听 给对象的所有属性都增加监听器 ，但是性能开销大,当用户指定了 watch 中的 deep 属性为 true 时，如果当前监控的值是数组类型。会对对象中的每 一项进行求值，此时会将当前 watcher 存入到对应属性的依赖中，这样数组中对象发生变化时也 会通知数据更新(这里需要注意的是，监听数组的变动不需要这么做)

```js
 e: {
      handler: function(val, oldVal) {
        this.h.push("😄");
        console.log("new: %s, old: %s", val, oldVal);
      },
      deep: true
    },
```

