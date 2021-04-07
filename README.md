## 前言

经历了几版本的迭代 **目前仍在更新中 并且会一直更新** 2021 基于大前端的面试题目切入 ！！ 深挖核心原理！！

- 在录制视频的时候，为了更好的演示讲解的代码，我想到的方式是起一个前端的静态服务然后读取`SRC` 下的代码案例

  ```js
  const express = require('express')
  const path = require('path')
  const app = express()
  const serveIndex = require('serve-index')
  app.use(serveIndex('./src')) // 进行浏览目录
  // 利用express.static中间件来托管静态资源。
  app.use(express.static(path.join(__dirname, 'src')))
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
  })
  app.listen(2021, () => {
    console.log(`http://localhost:2021`)
  })
  ```

- 提供线上的文档 [TOP-FE-IQA](https://top-fe-iqa.netlify.app/)
  - 需要注意的是这份线上的文档目前是基于`VuePress` 可能更新不及时（酌情参考）
  - 线上文档后续会重构一版本

## 视频录制进度

如果你希望看视频版本的话，请点击下方的视频连接会跳转到对应的**B 站的技能点讲解分享**

> 前端不要玩那么花里胡哨的东西，白天不见夜里见的**浏览器** 你不掌握一切瞎扯淡！！

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

---

为了能更好的索引 我会定时不定时的把我整理的文档放到下边，包括 `HTML` `CSS` `JavaScript` 等等 还有一些框架 工程化 ……

## HTML

> 关于 HTML 很纯粹的话也没什么好考察的，多半是结合`JS` 这部分我会参考权威书籍以及 MDN 文档

- [HTML 头部高频面试题及参考答案](https://github.com/yayxs/top-fe-iqa/issues/20)

- `<script>` 标签的`async` 与`defer` 有什么区别
- `XHTML` 与`HTML` 的区别
- 有几种文档模式（文档类型）

## CSS

- [画一条 0.5px 的线](https://github.com/yayxs/top-fe-iqa/issues/21)
- [css 中动画常考面试题](https://github.com/yayxs/top-fe-iqa/issues/22)
- [请说说 css 的选择器以及选择器优先级](https://github.com/yayxs/top-fe-iqa/issues/18)
- [是否了解盒模型 介绍一下标准的 CSS 盒子模型 与低版本的 IE 盒子模型有什么不同](https://github.com/yayxs/top-fe-iqa/issues/19)
- [谈谈你对 base64 的理解以及使用场景](https://github.com/yayxs/top-fe-iqa/issues/23)
- [你知道什么是 `BFC` 吗 BFC 的布局规则是什么？如何创建 BFC？](https://github.com/yayxs/top-fe-iqa/issues/24)
- [你是否使用过 calc() 函数](https://github.com/yayxs/top-fe-iqa/issues/25)
- [css 布局方式水平垂直布局的实现](https://github.com/yayxs/top-fe-iqa/issues/26)

## JavaScript 核心体系

- [值类型与引用类型的区别](https://github.com/yayxs/top-fe-iqa/issues/41)
- [JavaScript 中的深拷贝实现](https://github.com/yayxs/top-fe-iqa/issues/45)
- [do you really know JavaScript](http://javascript-puzzlers.herokuapp.com/)
- [['1', '2', '3'].map(parseInt)](https://github.com/yayxs/top-fe-iqa/issues/37)
- [使用 sort 对数组进行排序[3,15,8,29,102,22]](https://github.com/yayxs/top-fe-iqa/issues/38)
- [判断数组的方法?如何检测数组](https://github.com/yayxs/top-fe-iqa/issues/40)
- [请你谈谈作用域与作用域链](https://github.com/yayxs/top-fe-iqa/issues/52)
- [循环体与闭包结合：for 循环中的 var 声明]()

## 手写实现（手写代码）

- [JavaScrip 头部高频手写实现面试题目汇总](https://github.com/yayxs/top-fe-iqa/issues/5)
- [手写实现数组去重的 12 种方法](https://github.com/yayxs/top-fe-iqa/issues/3)
- [手写实现通用的类型检测方法](https://github.com/yayxs/top-fe-iqa/issues/48)
- [手写实现 4 种数组扁平化方式](https://github.com/yayxs/top-fe-iqa/issues/51)

## 浏览器

- 为什么很多站点第二次打开速度会很快？
- 什么是 DNS 缓存

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

## 联系我

> 关于我，前端厚说，不仅仅前端！！虽然长的丑，但是想的美！！

<image src="./assets/images/info.png"></image>
