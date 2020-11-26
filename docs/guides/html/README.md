---
title: HTML 常考面试题汇总
---

# HTML 常考面试题汇总

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>我是第一个html</title>
  </head>
  <body></body>
</html>
```

## `<!DOCTYPE html>`的作用与意义是什么？

前提需要了解盒模型，保证文档正常的读取

 - 让浏览器以标准模式渲染
 - 让浏览器知道元素的合法性

## `<img />` 中 `alt` 和 `title` 的区别及作用

- alt 替换资源 当图片没有显示 显示 alt 的替换文本
  - 用户有视力障碍
  - 浏览器不支持该图片类型
  - 用户关闭的图片显示以减少数据的传输
- title 就是标签上的属性了，放在图片上显示的内容
  - 图片标题并不必须要包含有意义的信息，通常来说，将这样的支持信息放到主要文本中而不是附着于图片会更好。

## `href`和`src`有什么区别

- `href` 属性也可以称为目标
- `src` 属性包含了指向我们想要引入的图片的路径，可以是相对路径或绝对URL，就像 `a`元素的 `href` 属性一样。

## `HTML`的常见元素以及分类

- 标签head 区的元素：不会在页面直接显示 包含`title标题` `一些元数据`
- body 中的元素 
  - `<p>段落` `列表<ul> <ol> <li>` `<a>` `描述列表<dl> dt dd` `日期时间 <time>` `br` `hr`
  - `main` 每个页面上只能用一次
  - `article` 包围的内容即一篇文章，与页面其它部分无关
  - `section` 更适用于组织页面使其按功能
  - `aside`  `header` `footer` `nav`

## `html`中的`空元素`有哪些

- 不包含任何内容的元素称为空元素。比如 `<img />`元素

## `HTML`的常见的块级元素与内联元素

- 按照默认的样式分类

  - 块级元素 block: p nav
    - `div` 是一个块级无语义元素，应仅用于找不到更好的块级元素时，或者不想增加特定的意义时。
  - 行内元素  inline: a em strong

  - 内联块级元素 inline-block
    - `span`  是一个内联的（inline）无语义元素

## `元数据meta`有哪些属性，作用是什么

- `charset` 字符集 通常情况下使用 utf-8 保证编码的问题
- `name ` 指定meta元素的类型，说明钙元素包含什么类型的信息
- `content` 实际元数据内容


```html
<!--文档中字符编码-->
<meta charset="utf-8">
<!--主要I是强制让文档的宽度与设备宽度保持1:1，最大宽度1.0，禁止屏幕缩放。-->
<meta content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no" name="viewport">
<!--这个也是iphone私有标签，允许全屏浏览。-->
<meta content="yes" name="apple-mobile-web-app-capable">
<!--iphone的私有标签，iphone顶端状态条的样式。-->
<meta content="black" name="apple-mobile-web-app-status-bar-style">
<!--禁止数字自动识别为电话号码，这个比较有用，因为一串数字在iphone上会显示成蓝色，样式加成别的颜色也是不生效的。-->
<meta content="telephone=no" name="format-detection">
<!--禁止email识别-->
<meta content="email=no" name="format-detection">

```

## 关于`HTML` 的语义化

我们可以通过 [https://h5o.github.io/](https://h5o.github.io/) 来查看文档的结构。较好的语义化内容，能够更好的便于搜索引擎爬取

 - 开发者容易理解
 - 机器容易理解（搜索、读屏、软件）
 - 有助于SEO

## `<em>` 和`<i>` 有什么区别

 - em 是语义化的标签,意义清楚的语义元素
 - i 纯样式的问题 仅仅影响表象而且没有语义，被称为**表象元素**

## 是否用过`a`的`download属性`

- 使用 download 属性来提供一个默认的保存文件名

  ```html
  <a href="https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=zh-CN"
     download="firefox-latest-64bit-installer.exe">
    下载最新的 Firefox 中文版 - Windows（64位）
  </a>
  ```

## 是否使用过`<video>` 有哪些常见的属性

- `src` 展示视频的地址,指向网页中的视频资源

- `controls` 视频展示浏览器自带的控件界面，一般情况下我们是使用自己自定义的控件

- controlslist 当浏览器显示自己的控件集(例如，当指定了Controls属性时)，Controlslist属性将帮助浏览器选择在媒体元素上显示的控件。

- object-position 调整视频元素内部的位置

- buffered 这个属性可以读取到哪段时间范围内的媒体被缓存了

- poster 一个海报帧的URL，用于在用户播放或者跳帧之前展示

- preload 用户需要这个视频优先加载；换句话说就是提示：如果需要的话，可以下载整个视频，即使用户并不一定会用它。

- muted 布尔属性，指明了视频里的音频的默认设置。设置后，音频会初始化为静音。

## `HTML4/4.01` 与 `XHTML(XML)`和 `HTML5` 有什么区别，如何区分 HTML 和 HTML5？

| HTML           | HTML4            | XHTML                   | HTML             |
| -------------- | ---------------- | ----------------------- | ---------------- |
| 超文本标记语言 | 标签可以不结束   | 可扩展超文本  属于XML   | 宽松些           |
| 混乱松散       | 属性不用带引号   | 标签必须结束            | 不属于之前的规范 |
| 属于SGML       | 标签属性可以大写 | 属性带引号 标签属性小写 |                  |

## 说说`HTML5`在标签、属性、存储、API 上的新特性，移除了那些元素？

> HTML5 现在已经不是 SGML 的子集，主要是关于图像，位置，存储，地理定位等功能的增加。

### 标签方面

- 新增区块标签 `section` `article` `nav` `aside` ，语意化更好的内容元素
  - header footer 头尾
  - section（零碎的块） article（较为完整的块） 区域
  - nav 主要用于导航
  - aside 侧边栏（不很重要的内容）
  - em strong 强调
  - i icon 
- 表单增强日期 时间 搜索 表单验证 自动聚焦 表单控件，calendar、date、time、email、url、search
- 绘画 canvas 元素
- 用于媒介回放的 video 和 audio 元素

### 存储方面

- 本地离线存储 localStorage 长期存储数据，浏览器关闭后数据不丢失；
- sessionStorage 的数据在浏览器关闭后自动删除

**关于存储的这部分建议参考** []()

### 新的api
 - 离线
 - 音视频
 - 图形 svg canvans
 - 实时通信
 - 设备的能力 获取陀螺仪的状态等等

### 移除的元素

- 纯表现的元素：basefont，big，center，font, s，strike，tt，u；
- 对可用性产生负面影响的元素：frame，frameset，noframes；

## `form`表单的属性有哪些？作用是什么

```html
<form action="" method="post"></form>
```
### 属性

- action 提交的地址
- method 通过什么方式提交
- enctype
### 作用

 - 直接提交表单
 - 便于浏览器保存表单
 - 使用 submit reset 按钮
 - 第三方的库可以整体提取值
 - 第三方库可以进行表单的验证



## 如何处理 HTML5 新标签的浏览器兼容问题？

- IE8/IE7/IE6 支持通过 document.createElement 方法产生的标签，可以利用这一特性让这些浏览器支持 HTML5 新标签，
- 浏览器支持新标签后，还需要添加标签默认的样式：
- 当然最好的方式是直接使用成熟的框架、使用最多的是 html5shim 框架

## `HTML`的嵌套关系是如何确定的，哪些嵌套关系是不可能发生

 - 块级元素可以包含行内元素
 - 行内元素一般不能包含块级元素 a元素是可以包含 div
 - 块级元素不一定能包含块级元素


## 哪些元素可以自闭和
 - 表单元素`input` `图片元素<img>`  `<br>` `<hr>` `meta` `link`

## `HTML`和`DOM`的关系是什么

 - DOM是HTML 解析而来的
 - HTML 是`死`的
 - JS维护的是DOM

## `property特性` 和`attribute属性` 的区别是什么

 - attribute 属性
   - 通过 getAttribute 来获取 是写死的 
 - property  特性

