---
title: 什么时候清除浮动 如何清除浮动 原理是什么
---

# 什么时候清除浮动 如何清除浮动 原理是什么

使用float会使节点脱流导致父节点高度坍塌，若不对父节点显式声明高度则很有必要给父节点清除浮动。定义以下clearfix用于清除浮动，给父节点添加即可

```css
.clearfix::after {
    display: block;
    visibility: hidden;
    clear: both;
    height: 0;
    font-size: 0;
    content: "";
}
```