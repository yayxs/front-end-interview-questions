---
title: 严格模式的约束
---

1. 函数不能以 eval 或 arguments 作为名称；
2. 函数的参数不能叫 eval 或 arguments；
3. 两个命名参数不能叫同一个名称
4. 严格模式禁止自动或隐式地创建全局变量
5. 如果使用严格模式（strict mode），那么全局对象将无法使用默认绑定，因此 this 会绑定
到 undefined
 ```js
function foo() {
"use strict";
console.log( this.a );
}
var a = 2;
foo(); // TypeError: this is undefined
 ```