---
title: 谈谈你对`vue`生命周期的理解
---

# 谈谈你对`vue`生命周期的理解

## 什么是 Vue 的声明周期
## 生命周期钩子的作用
## 第一次页面加载触发哪几个生命周期钩子
## 异步请求适合在哪个生命周期调用
##  生命周期钩子能否使用箭头函数

## beforeUpdate 生命周期钩子能否进行数据的修改？

```js
new Vue({
  el: "#app",
  data: data,
  beforeCreate() {
    console.log(`beforeCreate`);
  },
  created() {
    console.log(`created`);
  },
  beforeMount() {
    console.log(`beforeMount`);
  },
  mounted() {
    console.log(`mounted`);
  },
  beforeUpdate() {
    console.log(`beforeUpdate`);
  },
  updated() {
    console.log(`updated`);
  },
  beforeDestroy() {
    console.log(`beforeDestroy`);
  },
  destroyed() {
    console.log(`destroyed`);
  },
});
```

## 第一次页面加载的时候触发哪几个生命周期钩子

```
beforeCreate created beforeMount mounted

```

### 谈谈你对`vue`生命周期的理解

首先要了解声明周期的合并策略,

```
let res = (是否有childVal,判断组件的选项中是否有对应名字声明周期钩子)?如果有判断是否有parentVal?如果有将二者合并一个数据：如果没有判断childVal 是不是一个数组?如果childVal是一个数组直接返回:如果不是作为数组的元素然后返回：如果没有childVal直接返回parentVal
```

```js
function mergeHook(
  parentVal: ?Array<Function>,
  childVal: ?Function | ?Array<Function>
): ?Array<Function> {
  const res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
      ? childVal
      : [childVal]
    : parentVal;
  return res ? dedupeHooks(res) : res;
}
```

```js
export const LIFECYCLE_HOOKS = [
  "beforeCreate",
  "created",
  "beforeMount",
  "mounted",
  "beforeUpdate",
  "updated",
  "beforeDestroy",
  "destroyed",
  "activated",
  "deactivated",
  "errorCaptured",
  "serverPrefetch",
];
```



## 04-vue 生命周期进阶

### 基本流程

![](https://cn.vuejs.org/images/lifecycle.png)



- new vue 创建实例
- 初始化事件 生命周期
- **beforeCreate**
- 初始化 注入校验
- **created**
- 是否指定 el
  - 否： 调用 vm.$mount(el)
  - 是：是否指定template
    - 否 将el 外部的html 作为template 编译
    - 是 将 template 编译到render
- **beforeMount**
- 创建vm.$el 并用其替换el
- **mounted**
- 挂载完毕
- 当data 修改的时候：
  - **beforeUpdate**
  - **updated**
- 调用vm.$destroy()
- **beforeDestroy**
- 解除绑定 销毁子组件 事件监听
- 销毁完毕
- **destroyed**

### 加载渲染的过程

![](https://raw.githubusercontent.com/yayxs/Pics/master/20200421213852.png)

**父组件挂载完毕肯定是等里面的子组件都挂载完毕后才算父组件挂载完毕了，所以父组件的mounted在最后。**

### 子组件更新过程

子组件更新过程(子组件更新影响到父组件的情况)：`父beforeUpdate -> 子beforeUpdate->子updated -> 父updted`
子组件更新过程(子组件更新不影响父组件的情况)：`子beforeUpdate -> 子updated`

### 父组件更新过程

![20200421221422](https://raw.githubusercontent.com/yayxs/Pics/master/img/20200421221422.png)

**eactivated函数的触发时间是在视图更新时触发。因为当视图更新时才能知道keep-alive组件被停用了。**

父组件更新过程(父组件影响子组件的情况)：`父beforeUpdate -> 子beforeUpdate->子updated -> 父updted`
父组件更新过程(父组件不影响子组件的情况)：`父beforeUpdate -> 父updated`

### 销毁过程

父beforeDestroy->子beforeDestroy->子destroyed->父destroyed

#### 小补充

| deactivated | keep-alive 组件停用时调用。 |
| ----------- | --------------------------- |
| activated   | keep-alive 组件激活时调用。 |

### 总结

Vue父子组件生命周期钩子的执行顺序遵循：从外到内，然后再从内到外，不管嵌套几层深，也遵循这个规律


## 05-双向绑定和 vuex 是否冲突

```js
 const store = new Vuex.Store({
        state: {
          obj: {
            message: "hello",
          },
        },
        mutations: {
          increment(state) {},
        },
      });
      var vm = new Vue({
        el: "#app",
        store,
        data() {
          return {};
        },
        computed: {
          message() {
            return this.$store.state.obj.message;
          },

          //   ...mapState({
          //     message: (state) => state.obj.message,
          //   }),
        },
        methods: {
          updateMessage(e) {
            this.$store.commit("updateMessage", e.target.value);
          },
        },
      });
```

>
>
>vue.js:634 [Vue warn]: Computed property "message" was assigned to but it has no setter.
>
>(found in <Anonymous>)

- [参考vue的文档](https://vuex.vuejs.org/zh/guide/forms.html)
