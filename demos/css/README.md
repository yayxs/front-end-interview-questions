# 元素的水平垂直居中
## 1、利用table标签，自带的功能
```
<style>
        .parent{
            border: 1px solid red;
            height: 500px
        }
        .child{
            border: 1px solid black
        }
    </style>
<body>
    <!--  -->
    <table class="parent">
        <tr>
            <td class="child">
                测试 测试 测试 测试 测试 测试 测试 测试 测试 测试 测试 测试 测试 测试 测试 测试 测试 测试 测试
                测试 测试 测试 测试 测试 测试 测试 测试 测试 测试 测试 测试 测试 测试 测试 测试 测试 测试 测试
            </td>
        </tr>
    </table>
</body>

```
### 效果

![clipboard.png](/img/bVbuK9O)

## 2、 margin-left: -50px; margin-top: -50px
```
  <style>
        .parent{
            position: relative;
            background-color: yellow;
            width: 500px;
            height: 200px
        }
        .child{
            width: 100px;
            height: 100px;
            background-color: #fff;
            position:absolute;
            top:50%;
            left: 50%;
            margin-left: -50px;
            margin-top: -50px

        }
    </style>

```
### 效果

![clipboard.png](/img/bVbuK96)
## 3、  transform: translate(-50%,-50%)
```
<style>
        .parent{
            width: 500px;
            height: 300px;
            border: solid 1px red;
            position: relative;
            
        }
        .child{
            width: 200px;
            height: 100px;
            border: 1px solid black;
            position:absolute;
            top:50%;
            left:50%;
            transform: translate(-50%,-50%)
        }
    </style>
    ```
### 效果

![clipboard.png](/img/bVbuLba)
## 4、 margin: auto;
```
<style>
        .p{
            width: 300px;
            height: 200px;
            border: 1px solid red;
            position: relative;
        }
        .c{
            width: 80px;
            height: 40px;
            background-color: #dedede;
            position:absolute;
            margin: auto;
            top:0;
            bottom:0;
            left: 0;
            right: 0
        }
    </style>
```
### 效果

![clipboard.png](/img/bVbuLbp)
## 5、弹性盒
```
<style>
        .p{
            border: 1px solid red;
            width: 400px;
            height: 500px;
            display: flex;
            justify-content: center;
            align-items: center
        }
        .c{
            width: 100px;
            height: 100px;
            background-color: red;
        }
    </style>
```
### 效果

![clipboard.png](/img/bVbuLbC)

##  html5\CSS3有哪些新特性、移除了那些元素？如何处理HTML5新标签的浏览器兼容问题？如何区分 HTML和 HTML5？

HTML5 现在已经不是 SGML 的子集，主要是关于图像，位置，存储，地理定位等功能的增加。

- 绘画 canvas 元素
  用于媒介回放的 video 和 audio 元素
  本地离线存储 localStorage 长期存储数据，浏览器关闭后数据不丢失；
  sessionStorage 的数据在浏览器关闭后自动删除
  语意化更好的内容元素，比如 article、footer、header、nav、section
  表单控件，calendar、date、time、email、url、search
  CSS3实现圆角，阴影，对文字加特效，增加了更多的CSS选择器  多背景 rgba
  新的技术webworker, websockt, Geolocation
  移除的元素
  纯表现的元素：basefont，big，center，font, s，strike，tt，u；
  对可用性产生负面影响的元素：frame，frameset，noframes；
- 是IE8/IE7/IE6支持通过document.createElement方法产生的标签，
  可以利用这一特性让这些浏览器支持HTML5新标签，
  浏览器支持新标签后，还需要添加标签默认的样式：
- 当然最好的方式是直接使用成熟的框架、使用最多的是html5shim框架
  
  
```
- <!--[if lt IE 9]>

<script> src="http://html5shim.googlecode.com/svn/trunk/html5.js"</script>

<![endif]-->

```
