> 下文的`JavaScript` 与 `js` `JS` 代表一回事；`HTML` 与`html` 代表一回事

**为了能更好的索引 我会定时不定时的把我整理的文档放到下边，包括 `HTML` `CSS` `JavaScript` 等等 还有一些框架 工程化 ……**

**前端 coder 如何有序的进阶** ： 笔者认为 ： 你要掌握专业知识（HTML+ CSS + JavaScript + 浏览器）我们先重点看这部分。稍后可能才是能力进阶（所谓的框架原理 + 工程能力 + 开发技巧 + 思维）
最后你要能独立开发项目（出色的技术选型方案 + 项目设计 + 性能优化）

## `HTML`

> `html` 的内容大多是掺杂在讲述`JS` 书籍和资料文章中被顺带提及 例如 《高程 4》中的 “HTML 中的 JavaScript” 、《DOM 编程艺术》中的“HTML5” 章节等等
> 关于 HTML 也有很多考察点，多半是结合`JS` 这部分我会参考权威书籍以及 MDN 文档

- [HTML 头部高频面试题小汇总](https://github.com/yayxs/top-fe-iqa/issues/20)
- 聊一聊`HTML`中的`<script>` 标签

  - [`<script>` 标签的`async` 与`defer` 有什么区别](https://github.com/yayxs/top-fe-iqa/issues/62)

- [`DOMContentLoaded`与`load`有什么不同]()
- [`XHTML` 与`HTML` 的区别](https://github.com/yayxs/front-end-interview-questions/issues/93)
- [是否了解文档模式（文档类型）](https://github.com/yayxs/front-end-interview-questions/issues/94)
- 谈谈你对同源策略的理解以及什么是`CORS`
- `JSONP`的原理是什么
- `DOM` 操作能否带来性能问题
- 页面渲染 1 万个 DOM 元素 如何提升页面性能
- 事件委托到父节点或者`document` 中 哪个更好
- 为什么需要`虚拟DOM`
- 为什么要用`JS` 描述 DOM 结构
- 简单描述虚拟 DOM 的实现原理
- 事件类型
- 说说`DOM` 中的事件流
- Node 节点获取及增删查改
- 讲讲事件冒泡和事件捕获
- 什么是事件代理
- 知道什么是事件委托吗

## `CSS`

> `CSS` 主要考察的大致两个方面 页面布局的原理 + 页面布局的技巧
>
> - 页面布局原理：盒子模型 + 文档流 + 浮动布局
> - 页面布局技巧： 传统布局 + Flex 布局 + Grid 布局

- [画一条 0.5px 的线](https://github.com/yayxs/top-fe-iqa/issues/21)
- [css 中动画常考面试题](https://github.com/yayxs/top-fe-iqa/issues/22)
- [请说说 css 的选择器以及选择器优先级](https://github.com/yayxs/top-fe-iqa/issues/18)
- [我们常说的盒模型是指什么](https://github.com/yayxs/top-fe-iqa/issues/19)
- [谈谈你对 base64 的理解以及使用场景](https://github.com/yayxs/top-fe-iqa/issues/23)
- [你知道什么是 `BFC` 吗 BFC 的布局规则是什么？如何创建 BFC？](https://github.com/yayxs/top-fe-iqa/issues/24)
- [你是否使用过 calc() 函数](https://github.com/yayxs/top-fe-iqa/issues/25)
- [元素居中布局的几种实现方式](https://github.com/yayxs/top-fe-iqa/issues/26)
- 什么是文档流
- 浮动元素为啥无法撑开父元素 如何解决
- 对 Flex 布局和 Grid 布局的理解和使用
- CSS 动画和 JavaScript 动画相比 有什么优缺点
- 如何实现左侧宽度固定，右侧宽度自适应的布局
- css3 的新特性有哪些
- 使用过 css 预处理器吗
- 如何设计一个 4 列等宽布局，各列之间的边距是 10px（考虑浏览器的兼容性）？
- CSS 如何实现三列布局，左侧和右侧固定宽度，中间自适应宽度？

## `JavaScript`基础

- [do you really know JavaScript](http://javascript-puzzlers.herokuapp.com/)
- 谈谈你心中的`JavaScript`
- 说一下严格模式`strict mode`
- 操作符

  - 你知道哪些操作符
  - 按位与 vs 按位或
  - [==和===区别]()
  - +操作符的执行流程是怎样的
- `var` vs `let` vs `const`
  - [var、let 和 const 区别的实现原理](https://github.com/yayxs/top-fe-iqa/issues/69)
- 数据类型
  - 数据类型有：JavaScript 的数据类型有哪些
  - 数据类型存储：数据类型的存储之间有什么区别
  - 数据类型检测：`typeof` 和 `instanceof`检测数据类型有什么区别
  - 数据类型对比：null 和 undefined 有什么区别
  - 数据类型对比：[值类型与引用类型的区别](https://github.com/yayxs/top-fe-iqa/issues/41)
  - 数据类型转换：
    - 转布尔值
  - 浮点数：为什么 0.1 + 0.2 !== 0.3
- 变量

  - 谈谈原始值 vs 引用值的区别
  - 函数中的参数是按照什么方式传递的
- 对象：

  - `JS` 如何创建一个对象 创建对象的方式
  - 检测某属性是否在对象上
  - 如何判断当前对象是否是另一个对象的原型
- `for-in` vs `for-of` vs `forEach` vs `map` 的区别
- [闭包及作用闭包有哪些使用场景？你如何理解 JavaScript 中的闭包？优缺点是什么](https://github.com/yayxs/top-fe-iqa/issues/65)
- [循环体与闭包结合：for 循环中的 var 声明](https://github.com/yayxs/top-fe-iqa/issues/66)
- [this 指向？设置 this 指向？箭头函数中 this? this 设计缺陷](https://github.com/yayxs/top-fe-iqa/issues/63)
- [使用 sort 对数组进行排序[3,15,8,29,102,22]](https://github.com/yayxs/top-fe-iqa/issues/38)
- [判断数组的方法?如何检测数组](https://github.com/yayxs/top-fe-iqa/issues/40)
- [如何实现一个深浅拷贝？拷贝一个很多嵌套的对象怎么实现 写成什么样的深拷贝代码才能算合格？](https://github.com/yayxs/top-fe-iqa/issues/45)
- [['1', '2', '3'].map(parseInt)](https://github.com/yayxs/top-fe-iqa/issues/37)
- 函数科里化
- 如何让 (a == 1 && a == 2 && a == 3) 的值为 true？

## `JavaScript`进阶

- [JS 中的变量提升现象 Hoisting](https://github.com/yayxs/top-fe-iqa/issues/68)
- 作用域

  - 怎么理解作用域
  - [ES6 块级作用域?]()
  - [作用域链 scope chain](https://github.com/yayxs/top-fe-iqa/issues/52)
- 什么是暂时性死区
- [new 操作符原理](https://github.com/yayxs/top-fe-iqa/issues/64)
  - new 内部机制是怎样的？
  - 是否了解构造函数模式
  - 能否自己实现一个 new 操作符
- [你对执行上下文的理解](https://github.com/yayxs/top-fe-iqa/issues/67)
- 垃圾回收机制与内存

  - 垃圾回收机制的了解
  - JavaScript 的数据是如何回收的
  - 对内存泄漏的理解？
- 说说`JS`中的原型链
  - 原型链继承
  - 属性查找机制
- 谈谈`jS`中是怎么实现继承的
  - `ES5/ES6` 的继承分别有哪些优缺点？
  - 继承到底有多少种实现方式呢
  - `extends `关键字是用哪种继承方式实现的呢


## `JavaScript`异步

- 说说你对`await` 操作符的理解，平常工作是怎么应用的
- 同步编程和异步编程的区别在哪里？
- JS 编程中为什么需要异步？
- JS 异步编程方式发展历程
- - 常见的异步任务有哪些
- 回调地狱缺点？有哪些方法可以解决？
- `Promise`构造函数是同步还是异步执行
- setTimeout,Promise,Async/Await 的区别
- Promise 的缺点
- Promise 内部究竟有几种状态？
- Promise 是怎么解决回调地狱问题的？
- Promise 到底解决了什么痛点？这样的痛点还可以如何解决
- `React`中的`setState`是同步的还是异步的？什么时候同步什么时候异步?(实践题目)

## `JavaScript` 手写

- [JavaScrip 头部高频手写实现面试题目汇总](https://github.com/yayxs/top-fe-iqa/issues/5)
- 尝试自己实现`instanceof` 操作符
- 尝试自己实现`Object.assign()`
- 序列化对象
  - 手写实现`JSON.parse()`
  - 手写实现`JSON.stringify()`
- [手写实现数组去重的 12 种方法](https://github.com/yayxs/top-fe-iqa/issues/3)
- [手写实现通用的类型检测方法](https://github.com/yayxs/top-fe-iqa/issues/48)
- [手写实现 4 种数组扁平化方式](https://github.com/yayxs/top-fe-iqa/issues/51)

## 浏览器

- 为什么很多站点第二次打开速度会很快？
- 什么是 DNS 缓存
- 浏览器在进行页面布局过程中会做些什么
- 重绘和重排会导致什么问题
- 如何实现浏览器内多个标签页之间的通信?
- 常见的浏览器兼容性问题 -本地存储 cookie 与 token
- 了解 SameSite 属性吗

## `Node.js`

- 谈谈对`RESTful` 的理解

## 计算机网络

> 一名程序员，无论是应对日常开发、日常排查，还是解决突发的网络问题（网络调试、网络优化）都离不开计算机网络。而要想成为优秀的工程师、架构师，朝着更高阶、更高薪的岗位去晋升，补足编程必备基础知识——计算机网络是绕不过去的一关。

- 当在网页浏览器的地址栏输入`url`后，发生了什么
- 三次握手？TCP 为什么要 3 次握手？
- HTTPS 协议的 TTFB 传输时间
- HTTPS 链接的创建过程 以及为什么 HTTPS 就是安全的
- 什么是长链接 为什么需要长链接
- HTTP2 的信道复用为什么能提高性能
- 浏览器输入 URL 后 HTTP 承担的角色是什么
- `URI` `URL` `URN` 的区别
- 收到 IP 数据包解析以后，它怎么知道这个分组应该投递到上层的哪一个协议（UDP 或 TCP）
- 你怎么理解`HTTP`和`TCP`的关系
- `telnet` 调试远程服务
- 用 `Whireshark`抓包定位网络故障

## 算法与数据结构

- 数据结构中稳定的排序算法 不稳定的排序算法
- 时间复杂度 与空间复杂度代表什么

## Webpack

- 介绍下 webpack 热更新原理，是如何做到在不刷新浏览器的前提下更新页面的
- 介绍`webpack` 的实现原理
- Webpack 的 loader 和 plugins 的区别
- 谈谈`babel` 的原理是什么
- 你有使用过`webpack` 吗?简单说说你的看法
- 你有没有脱离脚手架，从基本搭建一个工程化的项目？
- `webpack` 的`loader` 与 `plugin` 有什么区别？谁先执行
- 介绍下 `webpack` 热更新原理，是如何做到在不刷新浏览器的前提下更新页面的？说说其原理
- 介绍`webpack` 的实现原理

- `webpack` 打包`react` 项目怎么减少`生成js` 的大小
- `webpack` 怎么处理模块化？模块化机制是怎么样的？
- 你还了解其他的打包工具吗？比如 `rollup`、`grunt`、`gulp` 它们有什么异同点、优劣势
- 有哪些常见的`loader`
- 有哪些常见的`Plugin`
- 简单说说 webpack 的构建流程是什么?
- 是否写过 Loader 和 Plugin？描述一下编写 loader 或 plugin 的思路？

- `webpack`怎么配置单页应用？怎么配置多页应用？
- `webpack`的打包原理是怎么样的
- 分别介绍 `bundle` `chunk` `module`是什么?
- `webpack`中 babel 的原理以及实现
- 代码分割的本质是什么？

## Vue

> 讲道理，其实`Vue` 的官方文档写的真的非常好！！ 如果你什么都没开始，就一定把 Vue 的文档教程、以及 API 都好好**研读研读** 我是在看了`Vue生态的` 的文档（`VueCLI` `VUE2` `Vuex` `VueRouter` `VueLoader` ）然后基于`vue2的源码` 给大家整理了如下的面试题目
> 绝对不是口水话 目前的状态是视频还没开始录制 文字版已经在写了 如下的链接还不能点
> 不过你可以看看都是有哪些 耳熟能详的问题 当然了这只是一小部分

- [属性 data 的值为什么必须是函数](https://github.com/yayxs/top-fe-iqa/issues/55)
- [返回不是纯对象 vue 是怎么做的](https://github.com/yayxs/top-fe-iqa/issues/56)
- [为什么在初始化阶段才去进行合并处理](https://github.com/yayxs/top-fe-iqa/issues/57)
- [生命周期的合并策略是怎么进行的](https://github.com/yayxs/top-fe-iqa/issues/58)
- [`beforeCreate Hook`被调用的时候有哪些特点]()
- [谈谈 vue 的样式绑定](https://github.com/yayxs/top-fe-iqa/issues/59)
- [我们为什么可以在任何组件的模板中我们都可以直接使用 `<transition/>` 组件或者 `<keep-alive/>`等内置组件]()
- [vue 的数据双向绑定和 vuex 是否冲突](https://github.com/yayxs/top-fe-iqa/issues/60)
- [谈谈 Vue 的生命周期钩子的理解](https://github.com/yayxs/top-fe-iqa/issues/61)
- 谈谈对 vue 的认识 与其他框架的区别
- new Vue 的时候 Vue 做了什么
- vue 常见的指令有哪些
- v-if v-show
- v-for v-if 的优先级
- v-model 的原理
- 编译器的与否有什么影响
- template render 函数 el 挂载的优先级
- 什么是 MVVM 模型
- 什么是 MVVM？谈谈你的理解

- 请你谈谈 Vue 数据响应原理
- Vue 内部是如何构建一个渲染函数的 `render` `template` `el` 的优先级如何
- 谈谈 Vue 中的 Transition 动画
- 你了解 Vue 中的`选项合并策略`嘛，请谈谈

- Vue 中 `<transition name="fade"><p v-if="seen">现在你看到我了</p></transition>` 组件是如何实现的？

- vue 是如何实现数据的双向绑定
- vue 的`单向数据流`

- 虚拟 DOM 原理以及优缺点
- Vue 是如何实现数据双向绑定的？

- vue-router 的路由模式有几种
- 能说下 vue-router 中常用的 hash 和 history 路由模式实现原理吗？
- vuex 的设计思想
- 单页面（SPA）应用的优缺点
- 谈谈你对 keep-alive 的了解？vue 里的 keep-alive 是怎么实现的
- 谈谈 Vue SSR 吗？说说 SSR？
- 谈谈`vue 3.0`
- `$route`和`$router`的区别
- scoped 属性作用
- `Vue-Router`的两种模式主要依赖什么实现的
- Vue CLI 有哪些特性？
- 如何新增自定义指令
- vue 的数据劫持在不同的版本里是如何处理的？
- 了解 Element UI 组件的框架设计吗？
- 如何自动屏蔽 Input 的自动密码填充？

## React

- [列表组件中的 key]()
- 为什么使用框架而不是原生
- 虚拟 DOM 的优劣如何
- 虚拟 DOM 的实现原理
- React 最新的生命周期是怎样的?
- React 的请求应该放在哪个生命周期中?
- Ajax 请求放在 `componentDidMount` 里进行处理还是放在`componentWillMount` 里进行处理比较合适？
- react-router 里的 `<Link>` 标签和 `<a>` 标签有什么区别
- react 与`vue` 的区别
- React 高阶组件的作用有哪些
- 简述下 flux 的思想
- redux 的工作流程?
- react-redux 是如何工作的?
- redux 与 mobx 的区别?
- redux 中如何进行异步操作?
- React 组件通信如何实现?
- React 如何进行组件/逻辑复用?
- mixin、hoc、render props、react-hooks 的优劣如何？
- 你是如何理解 fiber 的?
- 有没有使用过 React Hooks？使用 React Hooks 的同时为什么需要使用高阶组件？
- 受控组件以及非受控组件的区别
- react-router 里的 `<Link>` 标签和 `<a>` 标签有什么区别

## 框架宏观了解

- React 和 Vue 的区别？
- 能对比一下 Create React App 和 Vue CLI 吗？
- 了解 MVC / MVP / MVVM 的区别吗？

## 移动端

- 触摸事件
- 移动端的兼容问题
- 移动端 300ms 延迟
- 移动端 rem
- 移动端 1px
