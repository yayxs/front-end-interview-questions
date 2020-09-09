---
title: BFC
---

::: tip

1. 谈谈对 BFC 的理解
2. 你知道什么是 `BFC` 吗
3. BFC 的布局规则是什么？
4. 如何创建 BFC？
5. 触发条件是什么
6. 作用是什么

:::

## 是什么

- Block
- Formatting Context

`块级格式化上下文` `页面中独立的渲染区域` `决定内部` `与外部无关` `相互隔离`

## 触发

- 根元素 html
- position:fixed/absolute
- float 不为 none
- overflow 不为 visible
- display 表格布局或者弹性布局 inline-block（行内块）、table-cell（表格单元格）、table-caption（表格标题）

## 作用

- 防止`margin` 发生重叠（相邻元素的外边距重叠问题）

我们先看一般的情况下,上下元素都有`margin` 的情况下，会出现重叠的情况,实际只有 50px

```css
.box1 {
  margin-bottom: 50px;
}
.box2 {
  margin-top: 50px;
}
```

- 防止元素高度塌陷问题

```css
.parent {
  width: 100px;
  /* 当父元素不写高度的时候会发生高度塌陷 */
  /* height: 100px; */
  border: 1px solid #ccc;
}

.float {
  float: left;
  width: 50px;
  height: 50px;
  background-color: #eee;
}
```

- 清除浮动(BFC 可以包含浮动的元素)

```css
overflow: auto;
/* 或者 */
display: flow-root;
```
