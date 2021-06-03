---
title: Link 与 @import导入css的区别
---

# `Link` 与 `@import` 导入`css`的区别

- link属于html标签，除了可以引入css文件以外，还可以引入其他文件。@import属于css范畴，只能引入css文件
- link引入的css文件和html同时加载，而@import引入的css文件要在页面加载完成后才进行加载
- link标签所有浏览器都支持，@import在IE5及以下版本浏览器不支持
- link标签支持js操作DOM，@import不支持