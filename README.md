## 开篇词

你如果细心的话(可以 fork)，发现这是依赖`VuePress` 搭建的知识文档。此仓库包含**三个部分（视频+文档+案例代码）**。为什么会有这个项目，是因为我觉得基于每个前端面试题目去看原理。这也许是`破局`的较好的方式。
我是`小洋同学` 目前就职于 xx 上市公司。不管是`一年` 或者`三年` 甚至`校招`。扪心自问，自己的知识体系是不是`一碰就碎 异常的脆弱` 建立自己的知识宇宙 本身就是一个相当漫长的过程。在这条路上 希望我们一起前行。这条战线是相当长的，需要我们阅读大量的优质经典`纸质书` + `优秀电子书` `源码` `真题` `面经` 然后进行`filter` 并且需要我们甄别（有的伙伴甚至都完不成这个过程）

争做一个有主观见解的开发者而不是一个背面试题的机器。在`内卷如此严重` `焦虑各种贩卖`的环境下 ，希望你**保持乐观积极，不要落伍 吃老本就很可怕了**

- 在录制视频的时候，为了更好的演示案例代码，我想到的方式是起一个前端的静态服务然后读取`SRC` 下的代码案例

  ```js
  // server.js
  app.listen(2021, () => {
    console.log(`http://localhost:2021`)
  })
  ```

- 提供线上的文档 [TOP-FE-IQA](https://top-fe-iqa.netlify.app/)

  - 需要注意的是这份线上的文档目前是基于`VuePress` 可能更新不及时（酌情参考）
  - 线上文档后续会重构一版本
  - 我最近把一些 2020 年整理的注释了，等视频更新到了时候，就会放开

## 视频录制进度

如果你希望看视频版本的话，请点击下方的视频连接会跳转到对应的**B 站的技能点讲解分享**

> 前端不要玩那么花里胡哨的东西，你知道为啥**浏览器** 是我除了`JS` 最先录制的视频。你不掌握一切瞎扯淡！！那么浏览器的定位是什么，其实是`JavaScript` 的运行环境，那么和它同样角色的还有什么——NodeJS

- [前端厚说-浏览器工作渲染原理视频合集](https://www.bilibili.com/video/BV1cf4y1t76Y)
  - [为什么需要了解甚至熟悉浏览器的渲染原理](https://www.bilibili.com/video/BV1Cf4y1z7o5)
  - [浏览器内核与浏览器渲染引擎工作原理](https://www.bilibili.com/video/BV1Zz4y127av)
  - [浏览器架构发展史](https://www.bilibili.com/video/BV1yv411h77G)
  - [浏览器新打开的每个 Tab 页是一个进程吗](https://www.bilibili.com/video/BV1cB4y1P7j1)
  - [浏览器细节性的渲染流程（上）](https://www.bilibili.com/video/BV1Q54y187zx)
  - [浏览器渲染流程，简单说说重绘回流（下）](https://www.bilibili.com/video/BV1QZ4y1F7FQ)

> 如果说你让我推荐个当下最该学 最应该学的方向 我会毫无疑问提交你`JavaScript` 但是 `JS`语言层面的细节你真的都清晰 执行上下文？ 闭包？ 作用域？

- [前端厚说-JavaScript 语言本身的细节](https://www.bilibili.com/video/BV1Db4y1S7Qw)
  - [前端面试大纲简览 2021 从面试点出发击破热门考点](https://www.bilibili.com/video/BV1mv4y1f7XJ)
  - [JavaScript 变量会有哪些面试考点？](https://www.bilibili.com/video/BV135411H7SH)
  - [JavaScript 中的执行上下文与代码的执行过程如何](https://www.bilibili.com/video/BV1hf4y1W7MK)
  - [执行上下文与 this 的关系]()

---

**为了能更好的索引 我会定时不定时的把我整理的文档放到下边，包括 `HTML` `CSS` `JavaScript` 等等 还有一些框架 工程化 ……**

**前端 coder 如何有序的进阶** ： 笔者认为 ： 你要掌握专业知识（HTML+ CSS + JavaScript + 浏览器）我们先重点看这部分。稍后可能才是能力进阶（所谓的框架原理 + 工程能力 + 开发技巧 + 思维）
最后你要能独立开发项目（出色的技术选型方案 + 项目设计 + 性能优化）

## HTML

> 关于 HTML 很纯粹的话也没什么好考察的，多半是结合`JS` 这部分我会参考权威书籍以及 MDN 文档

- [HTML 头部高频面试题及参考答案](https://github.com/yayxs/top-fe-iqa/issues/20)

- [`<script>` 标签的`async` 与`defer` 有什么区别](https://github.com/yayxs/top-fe-iqa/issues/62)
- [`DOMContentLoaded`与`load`有什么不同呢]()
- `XHTML` 与`HTML` 的区别
- 有几种文档模式（文档类型）
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

## CSS

> CSS 主要考察的大致两个方面 页面布局的原理 + 页面布局的技巧
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

## JavaScript 核心体系

- [不精确的计算之为什么 0.1 + 0.2 != 0.3]()
- [==和===区别]()
- [null 和 undefined 有什么区别]()
- [值类型与引用类型的区别](https://github.com/yayxs/top-fe-iqa/issues/41)
- [JavaScript 的数据类型有哪些,存储有什么区别]()
- [typeof 和 instanceof 检测数据类型有什么区别？]()
- [重中之重：JS 中的执行上下文](https://github.com/yayxs/top-fe-iqa/issues/67)
- [JS 中的变量提升现象 Hoisting](https://github.com/yayxs/top-fe-iqa/issues/68)
- [ES6 块级作用域?var、let 和 const 区别的实现原理](https://github.com/yayxs/top-fe-iqa/issues/69)
- [作用域?作用域链?](https://github.com/yayxs/top-fe-iqa/issues/52)
- [闭包及作用闭包有哪些使用场景？你如何理解 JavaScript 中的闭包？优缺点是什么](https://github.com/yayxs/top-fe-iqa/issues/65)
- [循环体与闭包结合：for 循环中的 var 声明](https://github.com/yayxs/top-fe-iqa/issues/66)
- [this 指向？设置 this 指向？箭头函数中 this? this 设计缺陷](https://github.com/yayxs/top-fe-iqa/issues/63)
- [new 操作符原理？内部机制？手写实现？](https://github.com/yayxs/top-fe-iqa/issues/64)
- [使用 sort 对数组进行排序[3,15,8,29,102,22]](https://github.com/yayxs/top-fe-iqa/issues/38)
- [判断数组的方法?如何检测数组](https://github.com/yayxs/top-fe-iqa/issues/40)
- [JS 创建对象的方式]()
- [JavaScript 中的深拷贝实现](https://github.com/yayxs/top-fe-iqa/issues/45)
- [for..of, for..in 和 forEach,map 的区别]()

---

- [do you really know JavaScript](http://javascript-puzzlers.herokuapp.com/)
- [['1', '2', '3'].map(parseInt)](https://github.com/yayxs/top-fe-iqa/issues/37)
- 函数科里化
- ES5/ES6 的继承 分别有哪些优缺点？
- 如何让 (a == 1 && a == 2 && a == 3) 的值为 true？

## 手写实现（手写代码）

- [JavaScrip 头部高频手写实现面试题目汇总](https://github.com/yayxs/top-fe-iqa/issues/5)
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

## 计算机网络

- 当在网页浏览器的地址栏输入`url`后，发生了什么
- 什么是三次握手
- HTTPS 链接的创建过程 以及为什么 HTTPS 就是安全的
- 什么是长链接 为什么需要长链接
- HTTP2 的信道复用为什么能提高性能
- 浏览器输入 URL 后 HTTP 承担的角色是什么
- `URI` `URL` `URN` 的区别
- 收到 IP 数据包解析以后，它怎么知道这个分组应该投递到上层的哪一个协议（UDP 或 TCP）
- 你怎么理解`HTTP`和`TCP`的关系

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

## 框架（宏观）

- React 和 Vue 的区别？
- 能对比一下 Create React App 和 Vue CLI 吗？
- 了解 MVC / MVP / MVVM 的区别吗？

## 移动端

- 触摸事件
- 移动端的兼容问题
- 移动端 300ms 延迟
- 移动端 rem
- 移动端 1px
