---
title: http/tcp/ip
---


## 当在网页浏览器的地址栏输入`url`后，发生了什么？

## 经典的五层模型

- 分层管理：应用层、传输层、网络层、数据链路层

  - 应用层决定向用户提供应用服务时的通信
  - 传输层 网络俩你接种两台计算机之间的数据传输
  - 网络层 处理网络上的数据包 
  - 数据链路层 链接网络的硬件部分

  ![](https://cdn.jsdelivr.net/gh/yayxs/Pics/dontKownJS/Snipaste_2020-11-29_12-51-54.png)

## http的发展

| 版本     | 特点                                                         | 年份      |
| -------- | ------------------------------------------------------------ | --------- |
| HTTP/0.9 | 1.只有一个GET 2 .没有HEADER 3.关闭TCP链接                    | 1990      |
| HTTP/1.0 | 1.增加了命令 2.多字符集支持                                  | 1996年5月 |
| HTTP/1.1 | 1.增加持久连接2. pipeline 3. 增加host                        | 1997年1月 |
| HTTP2    | 1.二进制传输 2，多个请求不再按顺序来 3. 头信息压缩以及推送提高效率的功能 |           |

## `TCP`三次握手

为了准确无误传送数据，TCP采用**三次握手** ,网络传输的原因，数据包丢失了，服务端不知道是否接收信息

![](D:\gh-code\frontend-thick-talk\assets\images\http\Snipaste_2020-11-29_13-04-37.png)



## HTTP头部



## GET与Post的区别

### get
用于向服务器查询某些信息。必要时，需要在GET请求的URL后面添加查询字符串参数
```js
https://jsonplaceholder.typicode.com/posts?_offset=1&_limit=2
```
### post

用于向服务器发送应该保存的数据。每个POST请求都应该在请求体中携带提交的数据，而GET请求则不然
## fetch api


## websocket和 ajax 的区别是什么，怎么实现，websocket 的应用场景有哪些

Web Socket（套接字）的目标是通过一个长时连接实现与服务器全双工、双向的通信。不能再使用http://或https://，而要使用ws://和wss://。前者是不安全的连接，后者是安全连接

- 谈谈你对 TCP 的理解

- http 与 https 协议的基本概念、区别、工作原理
- 讲讲 http 的基本结构？
- HTTP2 和 HTTP1 有什么区别
- http 常见的状态码

  
- 谈谈你对 TCP 的理解;
- TCP和UDP的区别
- HTTP 的请求报文由哪几部分组成
- HTTP 常见请求/响应头及其含义
- HTTPS 是如何进行加密的 谈谈 https 的原理？为什么 https 能保证安全？
- CDN 原理
- DNS 解析

- 讲讲 http 的缓存机制吧，强缓存，协商缓存？
- web worker
