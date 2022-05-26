## 开篇词

你如果细心的话(可以 fork)，发现这是依赖`VuePress` 搭建的知识文档。此仓库包含**三个部分（视频+文档+案例代码）**。为什么会有这个项目，是因为我觉得基于每个前端面试题目去看原理。这也许是`破局`的较好的方式。
我是`小洋同学` 目前就职于 xx 上市公司。不管是`一年` 或者`三年` 甚至`校招`。扪心自问，自己的知识体系是不是`一碰就碎 异常的脆弱` 建立自己的知识宇宙 本身就是一个相当漫长的过程。在这条路上 希望我们一起前行。这条战线是相当长的，需要我们阅读大量的优质经典`纸质书` + `优秀电子书` `源码` `真题` `面经` 然后进行`filter` 并且需要我们甄别（有的伙伴甚至都完不成这个过程）

争做一个有主观见解的开发者而不是一个背面试题的机器。在`内卷如此严重` `焦虑各种贩卖`的环境下 ，希望你**保持乐观积极，不要落伍 吃老本就很可怕了**

- 在录制视频的时候，为了更好的演示案例代码，我想到的方式是起一个前端的静态服务然后读取`SRC` 下的代码案例

  ```js
  // server.js
  app.listen(2021, () => {
    console.log(`http://localhost:2021`);
  });
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
