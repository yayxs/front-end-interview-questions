---
title: 是否了解盒模型 介绍一下标准的 CSS 盒子模型 与低版本的 IE 盒子模型有什么不同 box-sizing常用的属性有哪些? 分别有啥作用?
---

# 是否了解盒模型 介绍一下标准的 CSS 盒子模型 与低版本的 IE 盒子模型有什么不同

简言之，设置的宽高并一定是真实占用的宽高大小

 - 盒子模型是CSS布局中的核心概念 一个box 等于 **自身+内边距+边框+外边距**
 - CSS3中有一个属性 `box-sizing`
    - border-box 指的是怪异盒模型 W3C规范的标准
    - content-box 指的是标准盒模型 IE盒子模型 IExplore制定的标准
 - 在IExplore中，若HTML文档缺失<!doctype html>声明则会触发怪异盒模型
 
```css
*{
    box-sizing: border-box;
}
```