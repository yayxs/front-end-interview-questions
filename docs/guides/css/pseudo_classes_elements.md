---
title: 伪类和伪元素的区别是什么呢 ？css3 新增的伪类有哪些
---

# 伪类和伪元素的区别 css3 新增的伪类有哪些 

**首先伪类和伪元素都是选择器** 诸如 标签 类选择器等等

 - 伪元素：页面里不存在的元素在代码里没有明确的声明 :before和:after（CSS2就已经存在）也可以写作 ::before/::after  两个冒号的形式（兼容低版本的建议使用单个冒号历史遗留的问题）

 - 伪类：指的是一种状态选择器 比如鼠标划过DOM的状态 :hover :focus和:checked，状态下的演示


## ::after 和:after 的区别

两个冒号的形式（兼容低版本的建议使用单个冒号历史遗留的问题）

```html
<p class="p-box">
    <span>:before</span>
    CSS
    <span>:after</span>
</p>
```
一般情况下`伪元素`配合 content 来使用
```scss
.p-box{
  &::before{
    content: 'before';
  }
  &::after{
    content: 'after';
  }
}
```