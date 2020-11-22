---
title: css reset 和 normalize.css 有什么区别
---

# css reset 和 normalize.css 有什么区别

默认样式是有一定的意义，比如下拉框，表单，和标题等等；**但是** 默认样式依然带来问题，定制的成本会比较高 

 - li 的 list-style

在实践中总结的出很多套方案

## resrt
是直接重置，例如我们在开发中使用的 

```css
*{
  padding:0;
  margin:0
}
```
##  normalize.css 
出发点并不是去掉浏览器默认样式 而是兼容不同的表现 保留一些元素的 padding margin