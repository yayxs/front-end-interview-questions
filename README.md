## :blue_book: 目录


### CSS

<details>
<summary>查看目录</summary>

- 浮动元素和绝对定位元素的区别和应用?
- 上下 margin 重合的问题
- \*\*png、jpg、gif 这些图片格式解释一下，分别什么时候用。有没有了解过 webp？
- 如何实现左侧宽度固定，右侧宽度自适应的布局
- position 跟 display、overflow、float 这些特性相互叠加后会怎么样？
- css3 的新特性有哪些
- CSS 中的 `vertical-align` 有哪些值？它在什么情况下才能生效？
- ::after 和:after 的区别
- CSS 有哪些样式可以给子元素继承!
- “品”字布局如何设计
- 使用过 css 预处理器吗
- 在网页中的应该使用奇数还是偶数的字体？为什么呢
- 什么是响应式 什么是自适应
- 你对 line-height 是如何理解的？
- 如何设计一个 4 列等宽布局，各列之间的边距是 10px（考虑浏览器的兼容性）？
- CSS 如何实现三列布局，左侧和右侧固定宽度，中间自适应宽度？

</details>

### DOM

<details>
<summary>查看目录</summary>

- 事件类型
- 说说`DOM` 中的事件流
- Node 节点获取及增删查改
- 讲讲事件冒泡和事件捕获
- 什么是事件代理
- 知道什么是事件委托吗

</details>

### JavaScript

<details>
<summary>查看目录</summary>

- 如何让 (a == 1 && a == 2 && a == 3) 的值为 true？
- prototype 和 `__proto__` 区别是什么？
- 谈谈你对原型的理解？
- 什么是原型链？【原型链解决的是什么问题？】
- 立即执行函数

- 闭包及作用闭包有哪些使用场景？优缺点是很什么
- new 运算符 new 的原理是什么？通过 new 的方式创建对象和通过字面量创建有什么区别
- 箭头函数
- ES5/ES6 的继承 分别有哪些优缺点？
- 类型的转化
- this 如何正确的判断 this 的指向? 箭头函数的 this 是什么？
- `sort` 函数
- 函数科里化
- ['1', '2', '3'].map(parseInt)
- [[3,2,1].reduce(Math.pow), [].reduce(Math.pow)]
- Set、Map、WeakSet 和 WeakMap 的区别

- 可迭代对象有哪些特点
- 垃圾回收与内存泄漏

</details>

### jQuery

<details>
<summary>查看目录</summary>

- 手写插件

</details>

### Vue

<details>
<summary>查看目录</summary>

- 什么是 MVVM？谈谈你的理解
- 谈谈你对`vue`生命周期的理解
  (1)什么是 Vue 的声明周期
  (2)生命周期钩子的作用
  (3)第一次页面加载触发哪几个生命周期钩子
  (4)异步请求适合在哪个生命周期调用
- 请你谈谈`Vue` 组件中的`Data`
  (1)组件中 data 为什么是一个函数？
  (2)函数为什么返回一个对象，如果返回的不是个纯对象 Vue 是怎么做的？你有没有试过直接返回一个字符串或者其他类型
  (3)data 中的 key 与 props 或者 methods 中冲突 vue 是怎么做的
  (4)为什么初始化阶段才进行`data` 数据的合并？(这里指合并策略)
- 请你谈谈 Vue 数据响应原理
  (1) Vue 框架怎么实现对象和数组的监听？
  (2)直接给一个数组项赋值，Vue 能检测到变化吗？在 Vue 中怎么检测数组的变化
- Vue 内部是如何构建一个渲染函数的 `render` `template` `el` 的优先级如何
- 谈谈 Vue 中的 Transition 动画
- 你了解 Vue 中的`选项合并策略`嘛，请谈谈
- 说说 Vue 中`$nextTick`的实现原理 它的执行时机是什么时候 和 DOM 的渲染有什么关系
- vue 修饰符
- Vue 中的 key 有什么作用？

- vue 是如何实现数据的双向绑定
- v-show 与 v-if 有什么区别？
- v-model 的原理？
- Class 与 Style 如何动态绑定？
- vue 的`单向数据流`

- 虚拟 DOM 原理以及优缺点
- computed watch methods 三者的应用场景与区别以及实现原理
- 对比一下 `Object.defineProperty` 与`proxy`
- 使用 JavaScript Proxy 实现简单的数据绑定
- Vue 是如何实现数据双向绑定的？

- vue-router 的路由模式有几种
- 能说下 vue-router 中常用的 hash 和 history 路由模式实现原理吗？
- vuex 的设计思想
- 单页面（SPA）应用的优缺点
- 谈谈你对 keep-alive 的了解？vue 里的 keep-alive 是怎么实现的
- 谈谈 Vue SSR 吗？说说 SSR？
- Vue 怎么用 vm.\$set() 解决对象新增属性不能响应的问题 ？
- 你有对 Vue 项目进行哪些优化？可以从几方面入手
- 谈谈`vue 3.0`
- `$route`和`$router`的区别
- scoped 属性作用
- `Vue-Router`的两种模式主要依赖什么实现的
- Vue CLI 有哪些特性？
- 如何新增自定义指令
- vue 的数据劫持在不同的版本里是如何处理的？
- 了解 Element UI 组件的框架设计吗？
- 如何自动屏蔽 Input 的自动密码填充？

</details>

### React

<details>
<summary>查看目录</summary>

- [列表组件中的 key](#列表组件中的`key`)
- setState 到底是异步还是同步?
- 为什么使用框架而不是原生
- 虚拟 DOM 的优劣如何
- 虚拟 DOM 的实现原理
- React 最新的生命周期是怎样的?
- React 的请求应该放在哪个生命周期中?
- Ajax 请求放在 `componentDidMount` 里进行处理还是放在`componentWillMount` 里进行处理比较合适？
- React 中 setState 什么时候是同步的，什么时候是异步的
- react-router 里的 `<Link>` 标签和 `<a>` 标签有什么区别
- react 与`vue` 的区别
- React 高阶组件的作用有哪些
- 简述下 flux 的思想
- redux 的工作流程?
- react-redux 是如何工作的?
- redux 与 mobx 的区别?
- redux 中如何进行异步操作?
- React 组件通信如何实现?
- React 有哪些优化性能是手段? 语法层面呢？
- React 如何进行组件/逻辑复用?
- mixin、hoc、render props、react-hooks 的优劣如何？
- 你是如何理解 fiber 的?
- 有没有使用过 React Hooks？使用 React Hooks 的同时为什么需要使用高阶组件？
- 受控组件以及非受控组件的区别

</details>

### Flutter

<details>
<summary>查看目录</summary>

- [列表组件中的](#列表组件中的`key`)

- React 中 setState 什么时候是同步的，什么时候是异步的

- react-router 里的 `<Link>` 标签和 `<a>` 标签有什么区别

</details>

### TypeScript

<details>
<summary>查看目录</summary>
- 谈你对 TypeScript 的理解？

- 比较一下 TypeScript 和 JavaScript，在什么情况下你觉得需要 TypeScript ?

</details>

### Node

<details>
<summary>查看目录</summary>

- 谈谈 node 中的事件循环 浏览器和 Node.js 的事件循环机制有什么区别？

</details>

### Babel

<details>
<summary>查看目录</summary>

- 谈谈`babel` 的原理是什么

</details>

### 框架

<details>
<summary>查看目录</summary>

- React 和 Vue 的区别？
- 能对比一下 Create React App 和 Vue CLI 吗？
- 了解 MVC / MVP / MVVM 的区别吗？
  </details>

### 测试

<details>
<summary>查看目录</summary>

- 平常开发的过程中有写过单元测试或者 e2e 测试么？
- 自动化测试主要是做什么？

</details>

### Webpack

<details>
<summary>查看目录</summary>

- 介绍下 webpack 热更新原理，是如何做到在不刷新浏览器的前提下更新页面的
- 介绍`webpack` 的实现原理
- Webpack 的 loader 和 plugins 的区别
- Webpack 构建速度优化有哪些方案？

</details>

### 浏览器

<details>
<summary>查看目录</summary>

- 输入`URL` 发生了什么
- 常见的浏览器内核
- 常见的兼容性问题
- 重绘与回流
- 本地存储 cookie 与 token
- session、cookie、localStorage 的区别 了解 SameSite 属性吗
- 如何实现浏览器内多个标签页之间的通信?
- JSONP 的原理是什么？

</details>

### 移动端

<details>
<summary>查看目录</summary>

- 触摸事件

- 移动端的兼容问题

- 移动端 300ms 延迟

- 移动端 rem

- 移动端 1px

</details>

###

### 服务端

### 模块化

<details>
<summary>查看目录</summary>

- 模块化发展历史

</details>

### 异步编程

<details>
<summary>查看目录</summary>

- setTimeout、Promise、Async/Await 的区别

- 模拟实现一个 Promise.finally

- Promise 构造函数是同步还是异步执行，then 中的方法呢 ?promise 如何实现 then 处理 ?

- Promise 和 setTimeout 的区别 ?

- 如何实现 Promise.all ?

- EventLoop

- async await 函数

</details>

### 性能优化

<details>
<summary>查看目录</summary>

- 能说说首屏加载优化有哪些方案么
- 首屏和白屏的时间如何计算
- 什么是 GPU 加速，如何使用 GPU 加速，GPU 加速的缺点
- 异步加载 JS 脚本的方式有哪些？
- css 有哪些提高性能的方法
- 了解 CSS 3 动画的硬件加速么？在重绘和重流方面有什么需要注意的点？
- 了解 SPA 的懒加载么？

</details>

### 安全问题

<details>
<summary>查看目录</summary>

- CSRF 攻击
- XSS 漏洞
- CORS（跨域资款共享）
-

</details>

### 计算机网络

<details>
<summary>查看目录</summary>

- http 与 https 协议
- 讲讲 http 的基本结构？
- HTTP2 和 HTTP1 有什么区别
- http 常见的状态码
- `GET` 与`Post` 的区别
- TCP 三次握手四次挥手
- 谈谈你对 TCP 的理解;
- HTTP 的请求报文由哪几部分组成
- HTTP 常见请求/响应头及其含义
- HTTPS 是如何进行加密的 谈谈 https 的原理？为什么 https 能保证安全？
- CDN 原理
- DNS 解析
- websocket 和 ajax 的区别是什么，websocket 的应用场景有哪些
- 讲讲 http 的缓存机制吧，强缓存，协商缓存？

</details>

### 设计模式

<details>
<summary>查看目录</summary>

- 常见的设计模式有哪些？
- 计模式中观察者模式和发布 / 订阅模式有哪些区别？

</details>

### 手写代码

<details>
<summary>查看目录</summary>



- [↓ 手写`new`操作符](#2-手写-javascript-new)

* 手写`JSON.parse`

- 手写继承

- 手写函数柯里化

- 手写`Promise`



</details>

### 笔试

<details>
<summary>查看目录</summary>

- 请写出下面代码的运行结果

  ```js
  async function async1() {
    console.log("async1 start");
    await async2();
    console.log("async1 end");
  }
  async function async2() {
    console.log("async2");
  }
  console.log("script start");
  setTimeout(function() {
    console.log("setTimeout");
  }, 0);
  async1();
  new Promise(function(resolve) {
    console.log("promise1");
    resolve();
  }).then(function() {
    console.log("promise2");
  });
  console.log("script end");
  ```


* 简单实现一个发布者订阅机制

</details>

<!-- <div align="center">
    <img width="360px" height="160px" src="https://github.com/yayxs/top-fe-iqa/blob/master/assets/images/contact.jpg"></img>
</div> -->
