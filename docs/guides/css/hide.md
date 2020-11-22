---
title: 隐藏页面中的元素有哪些方式?
---

# opacity: 0、visibility: hidden、display: none 隐藏页面中的元素有哪些方式
::: tip

1. opacity: 0、visibility: hidden、display: none
2. 隐藏页面中 的元素有哪些 方式

:::

在正常文档流排版过程中，经常会使用display:none和visibility:hidden控制节点的隐藏，

```
visibility:hidden 节点不可见 但是占据空间
display:none      节点不可见 不占据空间
opacity:0         节点不可见 占据空间
position:relative; z-index:-1 节点不可见但占据空间，不可点击
```