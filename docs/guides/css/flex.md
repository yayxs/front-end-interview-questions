---
title: flex
---

::: tip

1. flex 的值

:::

```html
<div class="box">
  <div class="box1">1</div>
  <div class="box2">2</div>
  <div class="box3">3</div>
</div>
```


```css
 /* flex-direction:row;
        flex-wrap: wrap; */
        flex-flow: row wrap;
```

外层的盒子有那么几个值

 - flex-wrap
 - flex-direction
 - flex-flow  // 上边两个缩写
 - justify-content 
 - align-items // 
 - align-content 

内层的盒子

 - order 排序
 - flex-grow 0 放大
 - flex-shrink 1 缩小
 - flex-basis auto
 - flex 上边三个的缩写 默认不放大不缩小
 