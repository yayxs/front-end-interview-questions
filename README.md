## HTML

- [HTML 头部高频面试题及参考答案](https://github.com/yayxs/top-fe-iqa/issues/20)

## CSS

- [画一条 0.5px 的线](https://github.com/yayxs/top-fe-iqa/issues/21)
- [css 中动画常考面试题](https://github.com/yayxs/top-fe-iqa/issues/22)
- [请说说 css 的选择器以及选择器优先级](https://github.com/yayxs/top-fe-iqa/issues/18)
- [是否了解盒模型 介绍一下标准的 CSS 盒子模型 与低版本的 IE 盒子模型有什么不同](https://github.com/yayxs/top-fe-iqa/issues/19)
- [谈谈你对 base64 的理解以及使用场景](https://github.com/yayxs/top-fe-iqa/issues/23)
- [你知道什么是 `BFC` 吗 BFC 的布局规则是什么？如何创建 BFC？](https://github.com/yayxs/top-fe-iqa/issues/24)
- [你是否使用过 calc() 函数](https://github.com/yayxs/top-fe-iqa/issues/25)
- [css 布局方式水平垂直布局的实现](https://github.com/yayxs/top-fe-iqa/issues/26)

## JavaScript 基础知识

- [值类型与引用类型的区别](https://github.com/yayxs/top-fe-iqa/issues/41)
- [JavaScript 中的深拷贝实现](https://github.com/yayxs/top-fe-iqa/issues/45)
- [do you really know JavaScript](http://javascript-puzzlers.herokuapp.com/)
- [['1', '2', '3'].map(parseInt)](https://github.com/yayxs/top-fe-iqa/issues/37)
- [使用 sort 对数组进行排序[3,15,8,29,102,22]](https://github.com/yayxs/top-fe-iqa/issues/38)
- [判断数组的方法?如何检测数组](https://github.com/yayxs/top-fe-iqa/issues/40)

## 手写实现（手写代码）

- [JavaScrip 头部高频手写实现面试题目汇总](https://github.com/yayxs/top-fe-iqa/issues/5)
- [手写实现数组去重的 12 种方法](https://github.com/yayxs/top-fe-iqa/issues/3)
- [手写实现通用的类型检测方法](https://github.com/yayxs/top-fe-iqa/issues/48)
- [手写实现 4 种数组扁平化方式](https://github.com/yayxs/top-fe-iqa/issues/51)

## 笔试题收藏

### 考点：数据类型

```js
let a = {
  name: "aname",
  age: 20,
};

function change(o) {
  o.age = 24; // a = { name:'aname',age:24}
  o = {
    name: "oname",
    age: 30,
  };
  return o; // 新的内存
}
let b = change(a); // 注意这里没有new，后面new相关会有专门文章讲解
console.log(b.age); // 第一个console 30
console.log(a.age); // 24
```
