---
title: 闭包及作用闭包有哪些使用场景？优缺点是什么
---

是指内部函数总是可以访问其所在外部函数中声明的变量和参数，即使外部函数被返回了

```js
function foo() {
  var a = 2
  function bar() {
    console.log(a) // 2
  }
  bar() // bar()涵盖foo()作用域的闭包
}
foo()
```

**在 JavaScript 中，根据词法作用域的规则，内部函数总是可以访问其外部函数中声明的变量，当通过调用一个外部函数返回一个内部函数后，即使该外部函数已经执行结束了，但是内部函数引用外部函数的变量依然保存在内存中，我们就把这些变量的集合称为闭包。比如外部函数是 foo，那么这些变量的集合就称为 foo 函数的闭包。**

```js
function foo() {
  var a = 2
  function bar() {
    console.log(a)
  }
  return bar
}

var baz = foo()

baz()
```

> 在定时器、事件监听器、
> Ajax 请求、跨窗口通信、Web Workers 或者任何其他的异步（或者同步）任务中，只要使
> 用了回调函数，实际上就是在使用闭包！

## 应用场景

模块，当函数可以记住并访问所在的词法作用域，即使函数是在当前词法作用域之外执行，这时
就产生了闭包。

```js
function foo() {
  var a = 1,
    b = 2

  function add() {
    return a + b + c
  }
  return add
}

var c = 3

var globalFoo = foo()

console.log(globalFoo())
```

## 缺点

闭包使用不当不造成内存泄漏，

- 引用闭包的函数是全局变量 闭包一直存在直到页面关闭 闭包以后不再使用的话 就会内存泄漏
- 引用闭包的函数是局部变量 等函数销毁后在下次 JS 引擎垃圾回收时候 被回收掉
