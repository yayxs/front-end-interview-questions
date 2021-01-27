---
title: HTTP
---


## 当在网页浏览器的地址栏输入`url`后，发生了什么？

## 经典的五层模型

- 分层管理：应用层、传输层、网络层、数据链路层

  - 应用层：决定向用户提供应用服务时的通信活动 FTP DNS HTTP
  - 传输层：网络俩你接种两台计算机之间的数据传输 TCP UDP
  - 网络层：处理网络上的数据包 
  - 数据链路层：链接网络的硬件部分

  ![](https://cdn.jsdelivr.net/gh/yayxs/Pics/dontKownJS/Snipaste_2020-11-29_12-51-54.png)

## `http`的发展

| 版本     | 特点                                                         | 年份      |
| -------- | ------------------------------------------------------------ | --------- |
| HTTP/0.9 | 1.只有一个GET 2 .没有HEADER 3.关闭TCP链接                    | 1990      |
| HTTP/1.0 | 1.增加了命令 2.多字符集支持                                  | 1996年5月 |
| HTTP/1.1 | 1.增加持久连接2. pipeline 3. 增加host                        | 1997年1月 |
| HTTP2    | 1.二进制传输 2，多个请求不再按顺序来 3. 头信息压缩以及推送提高效率的功能 |           |

## `TCP`三次握手

为了准确无误传送数据，TCP采用**三次握手** ,网络传输的原因，数据包丢失了，服务端不知道是否接收信息

![](D:\gh-code\frontend-thick-talk\assets\images\http\Snipaste_2020-11-29_13-04-37.png)





## `GTE` vs `POST`

### 标准参考

W3school:http://www.w3school.com.cn/tags/html_ref_httpmethods.asp
| 项目             | GET                                                          | POST                                                         |
| ---------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 后退按钮/刷新    | 无害                                                         | 数据会被重新提交（浏览器应该告知用户数据会被重新提交）。     |
| 书签             | 可收藏为书签                                                 | 不可收藏为书签                                               |
| 缓存             | 能被缓存                                                     | 不能缓存                                                     |
| 编码类型         | application/x-www-form-urlencoded                            | application/x-www-form-urlencoded 或 multipart/form-data。为二进制数据使用多重编码。 |
| 历史             | 参数保留在浏览器历史中。                                     | 参数保留在浏览器历史中。                                     |
| 对数据长度的限制 | 是的。当发送数据时，GET 方法向 URL 添加数据；URL 的长度是受限制的（URL 的最大长度是 2048 个字符）。 | 无限制                                                       |
| 对数据类型的限制 | 只允许 ASCII 字符。                                          | 没有限制。也允许二进制数据。                                 |
| 安全性           | 与 POST 相比，GET 的安全性较差，因为所发送的数据是 URL 的一部分。在发送密码或其他敏感信息时绝不要使用 GET ！ | POST 比 GET 更安全，因为参数不会被保存在浏览器历史或 web 服务器日志中。 |
| 可见性           | 数据在 URL 中对所有人都是可见的。                            | 数据不会显示在 URL 中。                                      |

### 副作用和幂等的概念
副作用指对服务器上的资源做改变，搜索是无副作用的，注册是副作用的。

幂等指发送 M 和 N 次请求（两者不相同且都大于 1），服务器上资源的状态一致，比如注册 10 个和 11 个帐号是不幂等的，对文章进行更改 10 次和 11 次是幂等的。因为前者是多了一个账号（资源），后者只是更新同一个资源。

在规范的应用场景上说，Get 多用于无副作用，幂等的场景，例如搜索关键字。Post 多用于副作用，不幂等的场景，例如注册。
### 技术上的不同

 - Get 请求能缓存，Post 不能
 - Post 相对 Get 安全一点点，因为Get 请求都包含在 URL 里（当然你想写到 body 里也是可以的），且会被浏览器保存历史纪录。Post 不会，但是在抓包的情况下都是一样的。
 - URL有长度限制，会影响 Get 请求，但是这个长度限制是浏览器规定的，不是 RFC 规定的
 - Post 支持更多的编码类型且不对数据类型限制


### 报文上的区别
**结论：GET 和 POST 方法没有实质区别，只是报文格式不同。**

GET 和 POST 只是 HTTP 协议中两种请求方式，而 HTTP 协议是基于 TCP/IP 的应用层协议，无论 GET 还是 POST，用的都是同一个传输层协议，所以在传输上，没有区别。

报文格式上，不带参数时，最大区别就是第一行方法名不同

POST方法请求报文第一行是这样的```POST /products/create HTTP/1.1```

GET方法请求报文第一行是这样的 ```GET /products?name=zs&age=18 HTTP/1.1```

是的，不带参数时他们的区别就仅仅是报文的前几个字符不同而已

带参数时报文的区别呢？ 在约定中，GET 方法的参数应该放在 url 中，POST 方法参数应该放在 body 中

举个例子，如果参数是 ```pname='小米9', pprice=3500```


GET 请求方法的报文如下：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190523105759400.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3l5eHN3dw==,size_16,color_FFFFFF,t_70)

POST 请求方法的报文如下：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190523105047882.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3l5eHN3dw==,size_16,color_FFFFFF,t_70)

**现在我们知道了两种方法本质上是 TCP 连接，没有差别，也就是说，如果我不按规范来也是可以的。我们可以在 URL 上写参数，然后方法使用 POST；也可以在 Body 写参数，然后方法使用 GET。当然，这需要服务端支持。**

- get 用于向服务器查询某些信息。必要时，需要在GET请求的URL后面添加查询字符串参数

```js
https://jsonplaceholder.typicode.com/posts?_offset=1&_limit=2
```
- post 用于向服务器发送应该保存的数据。每个POST请求都应该在请求体中携带提交的数据，而GET请求则不然

## fetch api

## `WebSocket`和`Ajax`的区别是什么，怎么实现

### Ajax

异步js与xml 有效利用js和dom 局部web页面的替换异步通信手段，只更新部分页面 **XMLHttpRequest**  存在大量请求发生

### websocket

实现的一套新协议以及api,作为html5的一部分，可以互相发送数据，发起方还是客户端

- 推送功能 服务器直接发送数据
- 减少通信量 一直保持连接状态 减少开销 通信量减少‘
- `Upgrade ` websocket 

## websocket 的应用场景有哪些

Web Socket（套接字）的目标是通过一个长时连接实现与服务器全双工、双向的通信。不能再使用http://或https://，而要使用ws://和wss://。前者是不安全的连接，后者是安全连接

## 谈谈你对`IP`的理解

ip协议 位于网络层（IP地址和MAC地址）

- ip地址可以变化
- mac基本不会改变

## 谈谈你对`TCP`的理解

tcp 位于传输层，提供字节流服务，采用三次握手策略，采用 `syn`和`ack` 标志 。主要确保数据传输的可靠性

## 谈谈对`http`的理解及基本结构

肯定是从客户端开始建立通信,是不保存的协议，**无状态的 ** **不做持久化处理**  **持久连接** （为了减少重复连接断开的开销）

### 缺点

- 通信使用明文 不加密 内容可能被窃听
- 不验证通信方身份
- 无法证明报文的完整性
- 存在安全漏洞

## `DNS`解析

和`http`一样位于应用层，提供域名到ip的解析服务，从域名到ip,从ip到域名

## `http`与`https`协议的基本概念、区别、工作原理

通过通信加密，`http` 协议中是没有什么加密机制 的，与`SSL` 建立通信组合使用 便有个一个`https`

- http超文本传输协议
- https 超文本传输安全协议
  - 因为和ssl通信，会适当变慢，加密解密消耗资源
  - 购买证书要花钱

ssl提供加密处理，证书手段，第三方机构颁发 md5 SHA-1 散列校验，https不是一个新的协议

`ssl` 是应用最为广泛的安全技术

## HTTP2 和 HTTP1 有什么区别

- http2.0 一直正在推进
  - 速度体验
  - 多路复用
  - TLS义务化
  - 协商
  - 客户端
  - 流量控制
  - websocket

## TCP和UDP的区别

## `HTTPS`是如何进行加密的 谈谈`https`的原理？为什么 https 能保证安全？

**加密处理和认证** 添加了加密以及认证机制的http称为 https 。SSL采用公开秘钥加密

### 非对称加密

一把私有秘钥 一把公开密钥

### CA机构

- 提出公开秘钥的申请
- 分配给一个公开的秘钥
- 服务器送给客户端
- 客户端拿到数字证书（证书）

### https安全通信



## CDN 原理

## 讲讲 http 的缓存机制吧，强缓存，协商缓存？

## web worker

## `URL` vs `URI`

- `url`统一资源定位符 指定文档所在地址的URL **网页地址** 输入的网页地址
- `uri` 统一资源标识符
  - u 协议方案 ftp http mailto telnet file
- **url是uri的子集**

```
https://www.baidu.com/s?ie=utf-8&wd=vue&tn=40025628_10_hao_pg
```

- https:// 协议方案名
- www.baidu.com 服务器地址
- 443 服务器端口号

- wd= 查询字符串

## 谈谈`http ` 的`报文`

用于http协议交互的信息被称为http报文，大体分为`请求行` `状态行` `首部字段` `其他`

### 内容编码

常见的内容编码 

- gzip
- compress
- deflate
- identity

### `mime`机制

- multipart/form-data  表单文件上传使用
- multipart/byteranges 状态码 206

使用对象的集合时候需要在首部字段增加`Content-type`

## `HTTP`的请求报文由哪几部分组成

- 请求方法
- 请求的URI
- http的版本号
- 可选的请求首部字段
- 内容实体

```
GET https://jsonplaceholder.typicode.com/posts?_offset=1&_limit=2 HTTP/1.1
User-Agent:Fiddler Everywhere
Host:jsonplaceholder.typicode.com
Content-Type:text/plain

```

## `HTTP`的响应报文由哪几部分组成

- http的版本号 状态码 原因短语
- 响应的日期
- 首部字段
- 资源实体的主题

```
[
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  }
]
```

基本是由 协议版本 状态码 原因短语 可选的响应首部字段 主体

```
HTTP/1.1 200 OK
Date: Tue, 15 Dec 2020 02:38:10 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 600
Connection: keep-alive
Set-Cookie: __cfduid=df6eaa5fb405d992b43fb3487389a612c1607999890; expires=Thu, 14-Jan-21 02:38:10 GMT; path=/; domain=.typicode.com; HttpOnly; SameSite=Lax
X-Powered-By: Express
X-Ratelimit-Limit: 1000
X-Ratelimit-Remaining: 999
X-Ratelimit-Reset: 1607999936
Vary: Origin, Accept-Encoding
Access-Control-Allow-Credentials: true
Cache-Control: max-age=43200
Pragma: no-cache
Expires: -1
X-Total-Count: 100
Access-Control-Expose-Headers: X-Total-Count
X-Content-Type-Options: nosniff
Etag: W/"258-/AdFG/pwMUveUGKZ3vuwGAJYftA"
Via: 1.1 vegur
CF-Cache-Status: MISS
Accept-Ranges: bytes
cf-request-id: 0705dc3aa600004162e00fb000000001
Expect-CT: max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"
Report-To: {"endpoints":[{"url":"https:\/\/a.nel.cloudflare.com\/report?s=LF6llou9w6BCDOdXnG%2Bu%2FTBQIwoXHRLIaYfrZi46L27KPx%2Br8dWsOVqInaI%2F5Guytck02ilIv5E%2BgT5g1o1zL%2FMQtQCR4SNSjAsYgdkSnDXEmpsbEWMnTFQu5Eqf"}],"group":"cf-nel","max_age":604800}
NEL: {"report_to":"cf-nel","max_age":604800}
Server: cloudflare
CF-RAY: 601cc9710ca44162-HAM

[
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  }
]
```



## HTTP头部

## `HTTP`请求方法
HTTP 定义了一组请求方法, 以表明要对给定资源执行的操作。指示针对给定资源要执行的期望动作. 虽然他们也可以是名词, 但这些请求方法有时被称为HTTP动词. 每一个请求方法都实现了不同的语义, 但一些共同的特征由一组共享：: 例如一个请求方法可以是 safe, idempotent, 或 cacheable.
| 方法名称 | 用法                                                         |
| -------- | ------------------------------------------------------------ |
| GET      | GET方法请求一个指定资源的表示形式. 使用GET的请求应该只被用于获取数据. |
| HEAD     | HEAD方法请求一个与GET请求的响应相同的响应，但没有响应体.     |
| POST     | 用于将实体提交到指定的资源，通常导致在服务器上的状态变化或副作用. |
| PUT      | PUT方法用请求有效载荷替换目标资源的所有当前表示。            |
| DELETE   | DELETE方法删除指定的资源。                                   |
| CONNECT  | CONNECT方法建立一个到由目标资源标识的服务器的隧道。          |
| OPTIONS  | OPTIONS方法用于描述目标资源的通信选项。                      |
| TRACE    | TRACE方法沿着到目标资源的路径执行一个消息环回测试。          |
| PATCH    | PATCH方法用于对资源应用部分修改。                            |

## `cookie`状态管理

正是因为`http` 是无状态的，存储的是会话信息，**通过在请求和响应* ** 的报文中

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9cb657f0572242659bba67b4b75fe16b~tplv-k3u1fbpfcp-zoom-1.image)

不难发现`cookie` 的组成就是有图片中展示的 几种参数构成的![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/abd5b6d7797e4850a41807197fbf1f4d~tplv-k3u1fbpfcp-zoom-1.image)

```
Set-Cookie: __cfduid=df6eaa5fb405d992b43fb3487389a612c1607999890; expires=Thu, 14-Jan-21 
```

通知客户端保存`Cookie`

| 首部字段名 | 说明                           | 首部类型     |
| ---------- | ------------------------------ | ------------ |
| Set-Cookie | 开始状态管理所使用的Cookie信息 | 响应首部字段 |
| Cookie     | 服务器接收到的Cookie信息       | 请求首部字段 |
|            |                                |              |

**Set-Cookie** 字段的属性

​	

| 属性         | 说明                         |
| ------------ | ---------------------------- |
| NAME=VALUE   | 名称值                       |
| expires=DATE | 有效期                       |
| path=PATH    | 文件目录作为Cookie的适用对象 |
| domain=域名  |                              |
| Secure       |                              |
| HttpOnly     | 加以限制                     |

**缺点**

1. 特定域限制

2. 浏览器会限制

3. 不会占用太多磁盘空间

4. 总数大多有限制，超出的话删除之前的，或者随机删除

5. 大小限制 4096 字节

6. 数据不是保存在安全的环境中

## `http`常见的状态码

>状态码当客户端向服务器发请求，描述返回的请求结果，实际使用的只有14种左右

|      |              |                    |
| ---- | ------------ | ------------------ |
| 1xx  | 信息状态     | 接收的请求正在处理 |
| 2xx  | 成功状态     | 正常处理完毕       |
| 3xx  | 重定向状态   | 附加操作           |
| 4xx  | 客户端错误   | 服务器无法处理请求 |
| 5xx  | 服务器端错误 | 服务器处理请求出错 |

- 100 "continue"
- 101 "switching protocols"
- 102 "processing"

---



- 200 "ok"  服务器daunt正常处理
- 201 "created"
- 202 "accepted"
- 203 "non-authoritative information"
- 204 "no content" 响应报文没有主体，浏览器的页面不更新
- 205 "reset content"
- 206 "partial content" 指定范围的实体内容
- 207 "multi-status"
- 208 "already reported"
- 226 "im used"

---

浏览器需要执行某些特殊的处理

- 300 "multiple choices"
- 301 "moved permanently" 永久性重定向 被分配新的URI
- 302 "found" 临时性重定向 希望用户本次能使用新的URI访问 **不是被永久的移动**
- 303 "see other" 客户端应该是`get` 方法获取资源
- 304 "not modified" **和重定向没啥关系** 附带条件请求
- 305 "use proxy"
- 307 "temporary redirect" 临时重定向 不会从POS变成GET
- 308 "permanent redirect"

---

客户端错误

- 400 "bad request" 语法错误，需要修改请求的内容
- 401 "unauthorized" 需要认证信息
- 402 "payment required"
- 403 "forbidden" 被服务器拒绝 未获得文件系统的访问授权
- 404 "not found" 没有找打请求资源
- 405 "method not allowed"
- 406 "not acceptable"
- 407 "proxy authentication required"
- 408 "request timeout"
- 409 "conflict"
- 410 "gone"
- 411 "length required"
- 412 "precondition failed"
- 413 "payload too large"
- 414 "uri too long"
- 415 "unsupported media type"
- 416 "range not satisfiable"
- 417 "expectation failed"
- 418 "I'm a teapot"
- 422 "unprocessable entity"
- 423 "locked"
- 424 "failed dependency"
- 426 "upgrade required"
- 428 "precondition required"
- 429 "too many requests"
- 431 "request header fields too large"

---

服务器错误

- 500 "internal server error" 存在bug 服务端执行时错误
- 501 "not implemented"
- 502 "bad gateway"
- 503 "service unavailable" 停机维护
- 504 "gateway timeout"
- 505 "http version not supported"
- 506 "variant also negotiates"
- 507 "insufficient storage"
- 508 "loop detected"
- 510 "not extended"
- 511 "network authentication required"

## 代理

- 缓存代理 代理服务器或客户端本地磁盘内保存的资源副本，节省通信流量通信时间
- 透明代理

## http首部

首部分为请求首部和响应首部，并且部分首部两种通用，接下来我们就来学习一部分的常用首部。

### 通用首部字段

**请求报文** 和 **响应报文** 都会使用的首部

| 字段名            | 说明                                     |
| ----------------- | ---------------------------------------- |
| Cache-Control     | 控制缓存的行为                           |
| Connection        | 浏览器想要优先使用的连接类型，连接的管理 |
| Date              | 创建报文日期时间                         |
| Pragma            | 报文指令                                 |
| Via               | 代理服务器相关信息                       |
| Transfer-Encoding | 传输编码方式                             |
| Upgrade           | 要求客户端升级协议                       |
| Warning           | 在内容中可能存在错误，错误通知           |
- cache-control 操作缓存的工作机制

  ```
  Cache-Control: no-cache
  Cache-Control: private,max-age=0,no-cache
  ```

  | 指令     | 参数 | 说明            |
  | -------- | ---- | --------------- |
  | no-cache |      | 再次验证        |
  | no-store | 无   |                 |
  | max-age  |      | 响应的最大age值 |

- connection 控制不再转发给代理 管理持久连接

  |            |            |                                                |
  | ---------- | ---------- | ---------------------------------------------- |
  | Connection | Keep-Alive | 在旧版的http协议上维持持久连接，增加Keep-Alive |
  |            |            |                                                |
  |            |            |                                                |

- Date

  ```
  Date: Tue, 15 Dec 2020 05:32:53 GMT
  ```

  

### 请求首部字段

请求首部字段是从客户端发送请求报文中所使用的字段

| 请求首部            | 作用                                           |
| ------------------- | ---------------------------------------------- |
| Accept              | 能正确接收的媒体类型，用户代理可处理的媒体类型 |
| Accept-Charset      | 能正确接收的字符集                             |
| Accept-Encoding     | 能正确接收的编码格式列表                       |
| Accept-Language     | 能正确接收的语言列表                           |
| Expect              | 期待服务端的指定行为                           |
| From                | 请求方邮箱地址                                 |
| Host                | 服务器的域名                                   |
| If-Match            | 两端资源标记比较                               |
| If-Modified-Since   | 本地资源未修改返回 304（比较时间）             |
| If-None-Match       | 本地资源未修改返回 304（比较标记）             |
| User-Agent          | HTTP客户端程序的信息                           |
| Max-Forwards        | 限制可被代理及网关转发的次数                   |
| Proxy-Authorization | 向代理服务器发送验证信息                       |
| Range               | 请求某个内容的一部分                           |
| Referer             | 表示浏览器所访问的前一个页面                   |
| TE                  | 传输编码方式                                   |
- Accept

  ```
  Accept: application/json, text/plain, */*
  - 文本文件
  text/html text/plain text/css application/xhtml+xml application/xml
  - 图片文件
  image/jpeg image/gif imag/png
  - 视频文件
  video/mpeg video/quicktime
  - 二进制文件
  application、octet-stream application/zip
  ```

  

### 响应首部字段

| 响应首部           | 作用                       |
| ------------------ | -------------------------- |
| Accept-Ranges      | 是否支持某些种类的范围     |
| Age                | 资源在代理缓存中存在的时间 |
| ETag               | 资源标识                   |
| Location           | 客户端重定向到某个 URL     |
| Proxy-Authenticate | 向代理服务器发送验证信息   |
| Server             | 服务器名字                 |
| WWW-Authenticate   | 获取资源需要的验证信息     |
### 实体首部字段

| 实体首部         | 作用                           |
| ---------------- | ------------------------------ |
| Allow            | 资源的正确请求方式             |
| Content-Encoding | 内容的编码格式                 |
| Content-Language | 内容使用的语言                 |
| Content-Length   | request body 长度              |
| Content-Location | 返回数据的备用地址             |
| Content-MD5      | Base64加密格式的内容 MD5检验值 |
| Content-Range    | 内容的位置范围                 |
| Content-Type     | 内容的媒体类型,对象类型                 |
| Expires          | 内容的过期时间                 |
| Last_modified    | 内容的最后修改时间             |

## `http`认证方式

- BASIC基本认证
- DIGEST摘要认证
- SSL客户端认证
- FormBase基于表单认证