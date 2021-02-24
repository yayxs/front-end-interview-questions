## HTML

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
- [循环体与闭包结合：for循环中的var声明]()
## 手写实现（手写代码）

- [JavaScrip 头部高频手写实现面试题目汇总](https://github.com/yayxs/top-fe-iqa/issues/5)
- [手写实现数组去重的 12 种方法](https://github.com/yayxs/top-fe-iqa/issues/3)
- [手写实现通用的类型检测方法](https://github.com/yayxs/top-fe-iqa/issues/48)
- [手写实现 4 种数组扁平化方式](https://github.com/yayxs/top-fe-iqa/issues/51)

## 计算机网络

- 当在网页浏览器的地址栏输入`url`后，发生了什么
- 什么是三次握手
- HTTPS 链接的创建过程 以及为什么 HTTPS 就是安全的
- 什么是长链接 为什么需要长链接
- HTTP2 的信道复用为什么能提高性能
- 浏览器输入 URL 后 HTTP 承担的角色是什么
- `URI` `URL` `URN` 的区别
- 收到 IP 数据包解析以后，它怎么知道这个分组应该投递到上层的哪一个协议（UDP 或 TCP）

## 算法与数据结构

- 数据结构中稳定的排序算法 不稳定的排序算法
- 时间复杂度 与空间复杂度代表什么

## 笔试题收藏

### 考点：数据类型

```js
let a = {
  name: 'aname',
  age: 20,
}

function change(o) {
  o.age = 24 // a = { name:'aname',age:24}
  o = {
    name: 'oname',
    age: 30,
  }
  return o // 新的内存
}
let b = change(a) // 注意这里没有new，后面new相关会有专门文章讲解
console.log(b.age) // 第一个console 30
console.log(a.age) // 24
```

# Vue

- 谈谈对 vue 的认识 与其他框架的区别
- new Vue 的时候 Vue 做了什么
- vue 常见的指令有哪些
- v-if v-show
- v-for v-if 的优先级
- v-model 的原理
- 编译器的与否有什么影响
- template render 函数 el 挂载的优先级
- 什么是 MVVM 模型
- data 为甚是一个函数
- vue 的生命周期
