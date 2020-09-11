---
title: class style 动态绑定
---

`vue` 中如何动态的绑定 样式 也就是所谓的 `class` 与 `style` 最直观的就是 文档中的描述
[Class 与 Style 绑定](https://cn.vuejs.org/v2/guide/class-and-style.html)

```html
<section class=""></section>
<section style=""></section>
```

计算得来的结果不仅是字符串 也可以是对象 | 数组

## class 绑定

### 对象的形式

我们可以把对象提到 js 中

```html
<!-- 以对象的方式 -->
<section class="container" :class="{active:isActive,'text-err':textErr}">
  class绑定
</section>
```

```js
return {
  isActive: true,
  textErr: true,
};
```

```css
.container {
  width: 100px;
  height: 50px;
}
.active {
  border: 1px solid red;
}
.text-err {
  color: pink;
}
```

### 数组的形式

```html
<section class="container" :class="[firClass,secClass]">
  class绑定
</section>
```

```js
return {
  firClass: "active",
  textErr: "text-err",
};
```

或者说对象的形式和数组的形式结合在一起

```html
<section class="container" :class="[{active:isActive},secClass]">
  class绑定
</section>
```

其中数组第 1 项 将是动态的添加或者不添加 但是 `secClass` 这个始终是添加的

---

还有一种形式就是 `style` 内联样式了

## style 绑定

### 对象的形式

```html
<section :style="{color:activeColor,fontSize:fontSize+'px'}">style绑定</section>
```

```js
return {
  activeColor: "red",
  fontSize: "30",
};
```

但是习惯上我们通常绑定个样式对象

```js
return {
  styleObj: {
    color: "pink",
    fontSize: "20px",
  },
};
```

```html
<section :style="styleObj">style绑定</section>
```

### 数组形式

```html
<div v-bind:style="[baseStyles, overridingStyles]"></div>
```
