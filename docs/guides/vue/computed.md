### computed watch methods 三者的应用场景与区别以及实现原理?

#### 首先说`watch监听`

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

#### `其次是计算属性`

**根据依赖的数据进行动态计算，有缓存**

- 应用场景就是 计算一个值比较费劲
- 使用方法简单

**[:top: 返回顶部](#blue_book-目录)** **[:top: 返回 Vue](#vue)** **[ :point_right: 你怎么看 ](https://github.com/yayxs/top-fe-iqa/issues/1)**

#### `最后是方法`