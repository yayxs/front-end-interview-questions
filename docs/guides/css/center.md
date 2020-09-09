---
title: 水平垂直居中
---

垂直居中分为水平居中、和垂直居中、完全居中（水平垂直都居中）

## 水平居中

1. 行内元素可以通过 `text-align: center;` 来实现,适用于内联、内联块、内联表、内联 Flex

```html
<nav class="parent">
  <a href="#0">一</a>
  <a href="#0">二</a>
  <a href="#0">三</a>
  <a href="#0">四</a>
</nav>
```

```css
nav {
  text-align: center;
}
```

2. 块级元素可以通过 `margin: 0 auto;`
   (在现代浏览器中实现水平居中，可以使用 display: flex; justify-content: center;不过，在 IE8-9 这样的不支持弹性盒布局的旧式浏览器中，上述代码并不会生效。此时要实现在父元素中居中，可使用 margin: 0 auto)

3. 绝对定位 absolute+移动 transform 的方式
4. 绝对定位 absolute+margin 负边距的方案

## 垂直居中

1. 子元素是单行文本的话直接

## 水平和垂直居中

### 元素的宽度和高度 固定

> 绝对定位在 50%处，然后通过 margin 调整位置，浏览器兼容性良好

```html
<div class="parent">
  <div class="child"></div>
</div>
```

```css
.parent {
  position: relative;
}
.child {
  width: 100px;
  height: 100px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -50px 0 0 -50px;
}
```

或者

```css
.child {
  width: 100px;
  height: 100px;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
```

### 元素的宽度和高度 未知

```html

```

```css
.parent {
  position: relative;
}
.child {
  width: 100px;
  height: 100px;
  position: absolute;
  left: 50%;
  top: 50%;
  /* margin: -50px 0 0 -50px; */
  transform: translate(-50%, -50%);
}
```

### 可以使用网格

```html
<div class="parent">
  <div class="child">child</div>
</div>
```

```css
body,
html {
  height: 100%;
  display: grid;
}
.parent {
  margin: auto;
}
```


### table布局