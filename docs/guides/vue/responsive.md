
### 请你谈谈 Vue 的数据响应原理

首先看一个例子,当我们修改a 的时候 `vm.$watch` 的第二个参数就会执行输出

```js
let vm = new Vue({
  el: "#app",
  data: {
    a: 1,
  },
});
/**
 * 参数一 观测的字段
 * 参数二 参数发生变化的时候，执行的函数
 */
vm.$watch("a", () => {
  console.log("修改了 a");
});
```
我们自己简单的实现

```js
 // 定义一个变量
      const data = {
        a: 1,
      };

      // 定义全局的变量
      let target = null; // 全局变量
      function $watch(prop, fn) {
        target = fn;
        data[prop]; // 读取字段
      }
      // 首先定义一个框
      let dep = [];
      Object.defineProperty(data, "a", {
        set() {
          for (let i = 0; i < dep.length; i++) {
            dep[i](); // 属性被设置时候 将篮子里的所有 依赖执行
          }
        },
        get() {
          // 当属性被读取的时候
          dep.push(target);
        },
      });
      $watch("a", () => {
        console.log("第一个依赖");
      });
      $watch("a", () => {
        console.log("第二个依赖");
      });
```
假使有个数据对象，在被观测之后，便是

```js
const data = {
  a:{
    b:1
  }

}


const data = {
  // 属性 a 通过 setter/getter 通过闭包引用着 dep 和 childOb
  a: {
    // 属性 b 通过 setter/getter 通过闭包引用着 dep 和 childOb
    b: 1
    __ob__: {a, dep, vmCount}
  }
  __ob__: {data, dep, vmCount}
}
```

#### Vue 中依赖收集的触发时机是一定的吗





#### 在Vue2中是怎么拦截对象或数组添加的元素或属性

通过官方 api 的讲解 我们可以通过 Vue.set 以及 Vue.delete 来解决这个问题