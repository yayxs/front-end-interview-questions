---
# 主题列表：juejin, github, smartblue, cyanosis, channing-cyan, fancy, hydrogen, condensed-night-purple, greenwillow, v-green
# 贡献主题：https://github.com/xitu/juejin-markdown-themes
theme: juejin
highlight:
---
>- 以下的所有原文收录在仓库:  [https://github.com/yayxs/top-fe-iqa](https://github.com/yayxs/top-fe-iqa)
>- 首次发布时间：2020年11月23日
>- 更新时间：待定
>- 建议阅读地址： [……/css/box_model.html……](https://top-fe-iqa.netlify.app/guides/css/box_model.html)
>- 建议阅读时长：时不时地翻翻看
>- 建议阅读对象：初中级前端工程师、CSS爱好者

## 前言

过了今年的`金三银四` `金九银十` ，明年的黄金时机又快要到来，是否已经按捺不住躁动的心。简言之，面试从什么时候开始准备都不算早！这算是笔者正式以**前端厚说**的角色发稿。先说几点小tip：

1. 以下的面试题并不保证完全恰当得体，有错误或者不准确的地方，请积极指正，以免误导社区小伙伴
2. 并不代表所有的`CSS` 知识点，不过确实是很具有代表性的题目
3. 更新后会及时文首的更新时间，以下的内容不定期发生**增加**或者**修改**
## 1、是否了解`盒模型`，介绍一下标准的 CSS 盒子模型与低版本的 IE 盒子模型有什么不同`box-sizing`常用的属性有哪些? 分别有啥作用?


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


## 2、你知道什么是 `BFC` 吗？`BFC`的布局规则是什么？如何创建 BFC？

>1. 谈谈对 BFC 的理解 你知道什么是 `BFC` 吗
>2. BFC 的布局规则是什么？
>3. 如何创建 BFC？触发条件是什么
>4. 作用与场景是什么

### 对块级上下文的理解

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

### BFC的布局规则

>BFC是页面上一个独立且隔离的渲染区域，容器里的子节点不会在布局上影响到外面的节点，反之亦然。

 - 子节点的垂直方向距离由margin决定，相邻节点的margin会发生重叠，以最大margin为合并值
 - BFC区域不会与同级浮动区域重叠

### 触发条件是什么

- 根元素 html
- 绝对定位的节点 position:absolute/fixed
- 浮动的节点 float:left/right
- 非溢出可见节点 overflow !visible
- 被定义成块级的非块级节点 display 表格布局或者弹性布局 inline-block（行内块）、table-cell（表格单元格）、table-caption（表格标题）

等等……

### 作用与场景

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

## 3、请说说`css`的选择器以及选择器优先级

### 前言

选择器的基本规则大致是是以下的方式，基本的作用就是选择 `html` 元素

```
选择器{
  属性 值;
  属性 值
}
```

需要注意的是，浏览器去找元素的时候，是`从右往左` 的方式

```css
div .box a {

}
```

`!important > 内联样式 = 外联样式 > ID选择器 > 类选择器 = 伪类选择器 = 属性选择器 > 元素选择器 = 伪元素选择器 > 通配选择器 = 后代选择器 = 兄弟选择器`

这里会牵扯一个权重的问题 直观来看

```
 10000：!important
 1000：内联样式、外联样式
 100：ID选择器
 10：类选择器、伪类选择器、属性选择器
 1：元素选择器、伪元素选择器
 0：通配选择器、后代选择器、兄弟选择器
```

### 选择器

#### 选择器的基本分类

 - 元素选择器
 - 伪元素选择器 ::before 不会dom树中
 - 类元素选择器
 - 属性选择器 [type=radio]
 - 伪类选择器 :hover
 - iD 选择器 页面中一般是唯一的
 - 组合选择器
 - 否定的选择器 反向选择
 - 通用选择器

> 基本的选择器

| 选择器 | 别名       | 使用 |
| ------ | ---------- | ---- |
| \*     | 通配符     | \*{} |
| tag    | 标签选择器 | p{}  |
| .class | 类         | .{}  |
| #id    | id 选择器  | #{}  |

> 伪元素

| 选择器   | 别名         | 使用 |
| -------- | ------------ | ---- |
| ::before | 在元素前插入 |      |
| ::after  | 在元素后插入 |      |

> 层次选择器

| 选择器      | 别名       | 使用 |
| ----------- | ---------- | ---- |
| elem1+elem2 | 相邻的同胞 |      |
| elem1~elem2 | 通用的同胞 |      |



### 选择器的权重

优先级高的层叠优先级较低 的样式，其实是比较复杂的问题

|     选择器     |  权重位  |
| :------------: | :------: |
|      行内      |  +1000   |
|       id       |  +0100   |
| 类选择器、属性 |  +0010   |
|  元素、伪元素  |  + 0001  |
|       \*       |  +0000   |
|      继承      | 没有权重 |

通过 `color: powderblue !important;` 提高自己的权重（其优先级是最高的），那相同的权重后写的生效

## 4、什么时候`清除浮动`？如何清除浮动？其原理是什么

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

## 5、谈谈你对`base64`的理解以及使用场景

1. 用于减少http的请求数
2. 适用于小图片
3. 体积会增大


## 6、居中布局：居中浮动元素？居中绝对定位的`div`

垂直居中分为水平居中、和垂直居中、完全居中（水平垂直都居中），不必要死记硬背接下来的实现方式

### 水平居中

1. 行内元素可以通过在其父节点声明 `text-align: center;` 来实现,适用于内联、内联块、内联表、内联 Flex
2. 块级元素可以通过 `margin: 0 auto;` + `宽度width`
   (在现代浏览器中实现水平居中，可以使用 display: flex; justify-content: center;不过，在 IE8-9 这样的不支持弹性盒布局的旧式浏览器中，上述代码并不会生效。此时要实现在父元素中居中，可使用 margin: 0 auto)

- 节点不是块级元素需声明 display:block
- 若节点宽度已隐式声明则无需显式声明 width

3. 绝对定位 absolute+移动 transform 的方式
4. 绝对定位 absolute+margin 负边距的方案
5. display:flex + justify-content:center

### 垂直居中

1. 子元素是单行文本的话直接 `line-height` 等于父节点的高度
2. display:flex + align-items:center
3. 绝对定位 absolute+移动 transform 的方式
4. 绝对定位 absolute+margin 负边距的方案

### 水平和垂直居中

#### 元素的宽度和高度 固定

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

#### 元素的宽度和高度 未知

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

#### 强大的 flex 布局结合 margin

```css
.parent {
  display: flex;
  div {
    margin: auto;
  }
}
```


## 7、`display`有哪些值，以及作用?

 - 节点标记为块级元素 block、list-item、table、flex或grid 参与块格式化上下文
 - 节点标记为行内元素 inline、inline-block、inline-table、inline-flex或inline-grid 参与行内格式化上下文

## 8、隐藏页面中的元素有哪些方式

```
1. opacity: 0、visibility: hidden、display: none
2. 隐藏页面中 的元素有哪些 方式
```

在正常文档流排版过程中，经常会使用display:none和visibility:hidden控制节点的隐藏，

```
visibility:hidden 节点不可见 但是占据空间
display:none      节点不可见 不占据空间
opacity:0         节点不可见 占据空间
position:relative; z-index:-1 节点不可见但占据空间，不可点击
```

## 9、`img`下的间隙3px的原理

img 按照基线对齐（按照 inline） 遵守垂直对齐，可以按照底线对齐 `vertical-align:bottom`

既然是按照inline的方式对齐，可以改为 `block` 的对齐方式

## 10、`css reset`和 `normalize.css`有什么区别

默认样式是有一定的意义，比如下拉框，表单，和标题等等；**但是** 默认样式依然带来问题，定制的成本会比较高 

 - li 的 list-style 就是一种标签的默认样式

在实践中总结的出很多套方案

### css reset

是直接重置，例如我们在开发中使用的 

```css
*{
  padding:0;
  margin:0
}
```

###  normalize.css 

出发点并不是去掉浏览器默认样式 而是兼容不同的表现 保留一些元素的 padding margin

## 11、请你说说css的定位position


### 了解定位（positioning）

#### 定位的基本思想：

它允许你定义元素框相对于其正常位置应该出现的位置，或者相对于父元素、另一个元素甚至浏览器窗口本身的位置。


#### CSS 定位机制（3种）

关于CSS的定位机制，相比会有小伙伴不太清楚，平常也没有留意过，那么CSS有三种基本的定位机制

- 普通流
- 浮动
- 绝对定位

CSS position 属性之属性值的含义

| 属性值   | 含义                                                                                                         | 描述                                                               |
| -------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
| Static   | 元素框正常生成。块级元素生成一个矩形框，作为文档流的一部分，行内元素则会创建一个或多个行框，置于其父元素中。 | 默认值。没有定位，元素出现在正常的流中                             |
| Relative | 元素框偏移某个距离。元素仍保持其未定位前的形状，它原本所占的空间仍保留。                                     | 生成相对定位的元素，相对于其正常位置进行定位。                     |
| Absolute | 元素框从文档流完全删除，并相对于其包含块定位。                                                               | 生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。 |
| fixed    | 元素框的表现类似于将 position 设置为 absolute，不过其包含块是视窗本身                                        | 生成绝对定位的元素，相对于浏览器窗口进行定位。                     |
| inherit  |                                                                                                              | 规定应该从父元素继承 position 属性的值。                           |





## 12、`伪类`和`伪元素`的区别? `css3`新增的伪类有哪些? 

**首先伪类和伪元素都是选择器** 诸如 标签 类选择器等等

 - 伪元素：页面里不存在的元素在代码里没有明确的声明 :before和:after（CSS2就已经存在）也可以写作 ::before/::after  两个冒号的形式（兼容低版本的建议使用单个冒号历史遗留的问题）

 - 伪类：指的是一种状态选择器 比如鼠标划过DOM的状态 :hover :focus和:checked，状态下的演示


### `::after` 和`:after` 的区别

两个冒号的形式（兼容低版本的建议使用单个冒号历史遗留的问题）

```html
<p class="p-box">
    <span>:before</span>
    CSS
    <span>:after</span>
</p>
```

一般情况下`伪元素`配合 content 来使用

```scss
.p-box{
  &::before{
    content: 'before';
  }
  &::after{
    content: 'after';
  }
}
```

## 13、请利用纯css画一个三角形，原理是什么？

原理就是边框的衔接部分是斜角的方式，正是因为此，我们可以做很多有意思的事情，这也是面试中经常考查看的手写`css`问题，我们明白了原理简单的自己尝试下吧
```css
.test {
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 100px solid red;
}
```
## 14、CSS 中的 `vertical-align` 有哪些值？它在什么情况下才能生效？

默认字体是按照基线对齐，vertical-align 是字体的对齐

 - 可以是像素值 px
 - 可是是 top
 - middle
 - bottom

## 15、`z-index`有什么需要注意的地方?


position和z-index的结合使用可生成层叠上下文，一直认为z-index只是定义一个节点在三维空间Z轴的层叠顺序，值越高离屏幕观察者就越近。其实这个认识不全面，还需注意以下两点。

 - z-index只在声明定位的节点上起效
 - 节点在Z轴的层叠顺序依据z-index、层叠上下文和层叠等级共同决定


## 16、 请你谈谈`css`中的单位有哪些？以及它们区别？

```
单位	定义				类型	描述
px	像素				绝对单位	-
cm	厘米				绝对单位	-
%	百分比				相对单位	相对父节点
em	M的宽度				相对单位	相对当前节点字体
rem	M的宽度				相对单位	相对根结点字体
vh	视窗高度				相对单位	相对视窗
```

>分辨率1920×1080意味着水平方向含有1920个像素数，垂直方向含有1080个像素数

### em/rem区别

em和rem是移动端布局上常用的长度单位，两者的后缀都一致。rem全称是root em，意思是相对根节点作为参考的长度单位。

em：当前节点字体宽度，准确来说是一个M的宽度 相对父节点
rem：默认字体宽度，准确来说是一个M的宽度 相对根节点 默认是16px
在我们写样式修饰的时候，长度单位像PX、EM、REM是我们常用的。那么它们有什么不同的地方呢？
### 1、PX 
像素。相对长度单位，相对于显示器的屏幕分辨率的大小

- IE无法调整那些使用px作为单位的字体大小
- 国外大部分的网站能够调整的原因在于其使用了em或者rem作为字体大小

### 2、em

em相对长度单位 相对于当前对象内的文本字体大小尺寸

- 参考物是父元素的font-size
- 当前父元素没有设置字体尺寸 ，相对于浏览器的默认字体大小
- em的值不是固定的
- em会继承父级元素的字体大小

### 3、rem

rem是css3新增的一个相对单位，rem是相对于HTML根元素的字体大小的长度单位

- 优点 只需要设置根目录的大小就可以把整个页面的的比例调好
- 兼容性 ie8 更早的版本

### 4、vw、vh

vw、vh、vmax、vmin 这四个单位基于视口

vw是相对视口的宽度而定的 长度等于视口宽度的1/100

vh是相对视口（viewport）的高度而定的，长度等于视口高度的1/100

### 5、%（百分比）

一般来说就是相对于父元素

1、对于普通定位元素就是我们理解的父元素

2、对于position: absolute;的元素是相对于已定位的父元素

3、对于position: fixed;的元素是相对于ViewPort（可视窗口）

### 6、vm

css3新单位，相对于视口的宽度或高度中较小的那个

其中最小的那个被均分为100单位的vm

比如：浏览器高度900px，宽度1200px，取最小的浏览器高度，1 vm = 900px/100 = 9 px

缺点：兼容性差

## 后语

还没自我介绍，为了不打断点进此文章小伙伴的兴趣，我把介绍放在文末。我是`洋小洋同学`，目前正在积极分享前端的个人小拙见。如果你对`css` 感兴趣，也欢迎你多多关注我接下来的分享吧，你能把这篇文章收藏或者分享给身边人那就再好不过了

### Key words
> Front-end interview questions and better answers
> 前端面试 CSS front end 常考
> 三角形 css单位

