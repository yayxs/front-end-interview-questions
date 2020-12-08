---
title: 前端安全
---

## CORS跨源资源共享
跨源资源共享（CORS，Cross-Origin Resource Sharing）定义了浏览器与服务器如何实现跨源通信
```
origin: http://127.0.0.1:5500
```
Access-Control-Allow-Origin: origin: http://127.0.0.1:5500

```
Access-Control-Allow-Origin: http://www.nczonline.net
Access-Control-Allow-Methods: POST, GET
Access-Control-Allow-Headers: NCZ
Access-Control-Max-Age: 1728000
```

## CSRF跨站点请求伪造

在未授权系统可以访问某个资源时，可以将其视为跨站点请求伪造（CSRF，cross-site request forgery）攻击。未授权系统会按照处理请求的服务器的要求伪装自己。Ajax应用程序，无论大小，都会受到CSRF攻击的影响，包括无害的漏洞验证攻击和恶意的数据盗窃或数据破坏攻击。
## XSS 漏洞

## JSONP 的原理是什么？
JSONP是“JSON with padding”的简写，是在Web服务上流行的一种JSON变体。JSONP看起来跟JSON一样，只是会被包在一个函数调用里
**原理**JSONP调用是通过动态创建`<script>`元素并为src属性指定跨域URL实现的。此时的`<script>`与`<img>`元素类似，能够不受限制地从其他域加载资源。因为JSONP是有效的JavaScript，所以JSONP响应在被加载完成之后会立即执行