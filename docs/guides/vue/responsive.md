
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

vue中依赖收集大体分两个时机，一个是属性值被改变的时候 还有就是 $set 或者 Vue.set 给数据添加新属性的时候，由于`js` 语言的限制  在没有`Proxy` 之前 Vue 没办法拦截到给对象添加的新属性。所以vue 暴露出 $set 以及 Vue.set 等方法让我们有能力在 给对象添加新属性的时候触发依赖

#### 对于纯对象与数组的影响式 有什么不同

 (2)响应式数据之数组的处理
  处理数组的方式与纯对象不同 数组是一个特殊的数据结构 有很多实例方法 这些方法会改变数组的值（变异方法）像 push pop shift unshift splice reverse 重点关注**增加元素的操作** 因为新增的元素不是响应式的 所以需要获取到新增的元素 并把他们变成响应式的才行。核心思路就是

总结：对于纯对象只需要逐个将对象的属性重新定义访问器属性，当某一属性的值也是个对象的时候就对其进行递归定义，对于数组的处理通过拦截数组的变异方法（push shift reverse等）直接通过 arr[0] = xxx 这种方式是触发不了响应 因为数组的索引不是“访问器” 属性。正是因为数组的索引不是访问器属性 所以当有观察者依赖数组的某一个元素的时候 触发不了元素的 get 函数 ，那自然而然收集不到依赖

#### 在Vue2中是怎么拦截对象或数组添加的元素或属性

通过官方 api 的讲解 我们可以通过 Vue.set 以及 Vue.delete 来解决这个问题