---
title: 如何正确的判断this的指向? 箭头函数的 this 是什么？
---

`this` 实际上是在函数调用时发生的绑定，指向什么完全取决于函数在哪里被调用。而 this 和执行上下文中是绑定的 每个执行上下文都有一个 this

this 的分类同样有 3 种 全局执行上下文中的 this 函数中的 this 和 eval 中的 this。重点分析 全局执行上下文中的 this 和函数执行上下文

- 在全局环境中调用一个函数，函数内部的 this 指向的是全局变量 window
- 通过一个对象来调用其内部的一个方法，该方法的执行上下文中的 this 指向对象本身

## 全局上下文中的 this

```js
// 全局上下文中的this是指向window 对象
console.log(this)
```

## 函数执行上下文中的 this

```js
function foo() {
  console.log(this)
  // console.log(this.a)
}

var a = 2

foo()
```

> 总结：在默认情况下调用一个函数 其执行上下文中的 this 也是指向 window 对象
>
> **那么能否设置当前执行上下文中的 this 指向其他对象呢？**

## 指向对象本身

> 使用对象来调用其内部的一个方法，该方法的 this 是指向对象本身的。

```js
function foo() {
  console.log(`指向对象obj`, this)
  console.log(this.a)
}
var obj = {
  a: 2,
  foo: foo,
}
obj.foo() // 2
```

1. 由 new 调用？绑定到新创建的对象。
2. 由 call 或者 apply（或者 bind）调用？绑定到指定的对象。
3. 由上下文对象调用？绑定到那个上下文对象。
4. 默认：在严格模式下绑定到 undefined，否则绑定到全局对象。

```js
function baz() {
  // 当前调用栈是：baz
  // 因此，当前调用位置是全局作用域
  console.log('baz')
  bar() // <-- bar 的调用位置
}

function bar() {
  // 当前调用栈是 baz -> bar
  // 因此，当前调用位置在 baz 中
  console.log('bar')
  foo() // <-- foo 的调用位置
}
function foo() {
  // 当前调用栈是 baz -> bar -> foo
  // 因此，当前调用位置在 bar 中
  console.log('foo')
}

baz() // <-- baz 的调用位置
```

## 设计的缺陷

- 嵌套的函数中的 this 不会从外层中继承
- 普通函数中的 this 默认指向全局对象 window

## 箭头函数的 this 是什么？

ES6 中的箭头函数并不会创建其自身的执行上下文，所以箭头函数中的 this 取决于它的外部函数。
