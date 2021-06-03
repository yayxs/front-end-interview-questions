---
title: 立即执行函数表达式
---

这种模式很常见，几年前社区给它规定了一个术语：IIFE，代表立即执行函数表达式（Immediately Invoked Function Expression）；

```js
var a = 2;
(function foo() {
  var a = 3;
  console.log(a); // 3
})();
console.log(a); // 2
```
