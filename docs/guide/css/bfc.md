---
title: 你知道什么是 `BFC` 吗 BFC 的布局规则是什么？如何创建 BFC？
---

# 你知道什么是 `BFC` 吗 BFC 的布局规则是什么？如何创建 BFC？

::: tip

1. 谈谈对 BFC 的理解 你知道什么是 `BFC` 吗
2. BFC 的布局规则是什么？
3. 如何创建 BFC？触发条件是什么
4. 作用与场景是什么

:::

## 对块级上下文的理解

- Block
- Formatting Context

`块级格式化上下文` `页面中独立的渲染区域` `决定内部` `与外部无关` `相互隔离`
决定渲染区域里节点的排版、关系和相互作用的渲染规则

```
上下文	缩写	版本	声明
块格式化上下文	BFC	2	块级盒子容器
行内格式化上下文	IFC	2	行内盒子容器
弹性格式化上下文	FFC	3	弹性盒子容器
格栅格式化上下文	GFC	3	格栅盒子容器
```

## BFC的布局规则

>BFC是页面上一个独立且隔离的渲染区域，容器里的子节点不会在布局上影响到外面的节点，反之亦然。

 - 子节点的垂直方向距离由margin决定，相邻节点的margin会发生重叠，以最大margin为合并值
 - BFC区域不会与同级浮动区域重叠

## 触发条件是什么

- 根元素 html
- 绝对定位的节点 position:absolute/fixed
- 浮动的节点 float:left/right
- 非溢出可见节点 overflow !visible
- 被定义成块级的非块级节点 display 表格布局或者弹性布局 inline-block（行内块）、table-cell（表格单元格）、table-caption（表格标题）

等等……

## 作用与场景

- 防止`margin` 发生重叠（相邻元素的外边距重叠问题）

我们先看一般的情况下,上下元素都有`margin` 的情况下，会出现重叠的情况,实际只有 50px，所谓的塌陷其实是两个BFC的相邻盒或父子盒相互作用时产生的效果，两个盒子会取相邻边最大margin作为相邻边的共用margin。

```css
.box1 {
  margin-bottom: 50px;
}
.box2 {
  margin-top: 50px;
}
```

- 防止浮动节点被覆盖

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

- 清除浮动

```css
overflow: auto;
/* 或者 */
display: flow-root;


```
**或者开发中常用的清除浮动的方式**
[https://fett.netlify.app/guides/css/css_mixin.html](https://fett.netlify.app/guides/css/css_mixin.html)