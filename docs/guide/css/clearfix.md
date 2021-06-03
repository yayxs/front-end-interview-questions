---
title: 什么时候清除浮动？如何清除浮动？原理是什么
---

# 什么时候清除浮动 如何清除浮动 原理是什么

使用float会使节点脱流导致父节点高度坍塌，如果没有其他的元素撑起父元素的，若不对父节点显式声明高度则很有必要给父节点清除浮动。定义以下clearfix用于清除浮动，给父节点添加即可

```css
.clearfix::after {
    /* 默认是inline的 */
    display: block;
    /* 不要显示 */
    visibility: hidden;
    /* 保证这个元素两侧没有浮动元素 */
    clear: both;
    /* 高度设为0 */
    height: 0;
    font-size: 0;
    content: "";
}
```

**需要注意的是**

1. 在企业开发中我们一般使用通用的`mixin`
2. display 也可以是 table