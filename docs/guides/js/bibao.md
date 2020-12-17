---
title: 闭包及作用闭包有哪些使用场景？优缺点是什么
---

```js
function foo() {
  var a = 2;
  function bar() {
    console.log(a); // 2
  }
  bar(); // bar()涵盖foo()作用域的闭包
}
foo();

```

```js

function foo(){
    var a = 2
    function bar(){
        console.log(a)
    }
    return bar
}

var baz = foo()

baz()
```

>在定时器、事件监听器、
Ajax 请求、跨窗口通信、Web Workers 或者任何其他的异步（或者同步）任务中，只要使
用了回调函数，实际上就是在使用闭包！

## 应用场景 

模块，当函数可以记住并访问所在的词法作用域，即使函数是在当前词法作用域之外执行，这时
就产生了闭包。