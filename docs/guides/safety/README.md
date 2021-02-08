---
title: 前端安全
---

## CORS 跨源资源共享

跨源资源共享（CORS，Cross-Origin Resource Sharing）定义了浏览器与服务器如何实现跨源通信

```
origin: http://127.0.0.1:5500
```

Access-Control-Allow-Origin: origin: http://127.0.0.1:5500

```
Access-Control-Allow-Origin: http://www.nczonline.net

Access-Control-Max-Age: 1728000 // 最长时间：代表时间内不需要发送预请求（时间段内的操作是ok的）
```

- 请求是已经发送了的

### 预请求验证

- 请求头的限制

- 获取服务端的认可

```
Access-Control-Allow-Methods: POST, GET // 允许的方法 
Access-Control-Allow-Headers: NCZ  // 允许的头
```

浏览器的限制保证服务端的安全性

## CSRF 跨站点请求伪造

在未授权系统可以访问某个资源时，可以将其视为跨站点请求伪造（CSRF，cross-site request forgery）攻击。未授权系统会按照处理请求的服务器的要求伪装自己。Ajax 应用程序，无论大小，都会受到 CSRF 攻击的影响，包括无害的漏洞验证攻击和恶意的数据盗窃或数据破坏攻击。

## XSS 漏洞

## JSONP 的原理是什么？

JSONP 是“JSON with padding”的简写，是在 Web 服务上流行的一种 JSON 变体。JSONP 看起来跟 JSON 一样，只是会被包在一个函数调用里
**原理**JSONP 调用是通过动态创建`<script>`元素并为 src 属性指定跨域 URL 实现的。此时的`<script>`与`<img>`元素类似，能够不受限制地从其他域加载资源。因为 JSONP 是有效的 JavaScript，所以 JSONP 响应在被加载完成之后会立即执行
