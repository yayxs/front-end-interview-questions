---
title: 严格模式对函数有哪些限制
---

```js
index.html:11 Uncaught SyntaxError: Unexpected eval or arguments in strict mode
```
函数不能以eval或arguments作为名称；
函数的参数不能叫eval或arguments；
两个命名参数不能叫同一个名称