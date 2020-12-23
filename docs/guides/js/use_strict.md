---
title: 严格模式的约束,现代模式
---


`use strict`当它处于脚本文件的顶部时，则整个脚本文件都将以“现代”模式进行工作。一旦进入严格模式没有回头路了

```js
(function() {
  "use strict";

  // ...你的代码...

})();
```



没有类似于 "no use strict" 这样的指令可以使程序返回默认模式。

一旦进入了严格模式，就没有回头路了。
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
6. 严格模式下，函数只能声明在当前作用域的顶层

```js
// 不报错
'use strict';
if (true) {
  function f() {}
}

// 报错
'use strict';
if (true)
  function f() {}
```

7. 

```js
"use strict";

num = 5; // 错误：num 未定义
```