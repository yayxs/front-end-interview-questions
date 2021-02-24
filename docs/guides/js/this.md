---
title: 如何正确的判断this的指向? 箭头函数的 this 是什么？
---

`this` 实际上是在函数调用时发生的绑定，指向什么完全取决于函数在哪里被调用

```js

function baz() {
  // 当前调用栈是：baz
  // 因此，当前调用位置是全局作用域
  console.log('baz');
  bar(); // <-- bar 的调用位置
}

function bar() {
  // 当前调用栈是 baz -> bar
  // 因此，当前调用位置在 baz 中
  console.log('bar');
  foo(); // <-- foo 的调用位置
}
function foo() {
  // 当前调用栈是 baz -> bar -> foo
  // 因此，当前调用位置在 bar 中
  console.log('foo');
}


baz(); // <-- baz 的调用位置

```

## this指向全局window

```js
function foo() {
  console.log(`this指向window`,this)
  console.log(this.a);
}

var a = 2;

foo(); // 2

```

## 指向对象obj


```js

function foo() {
  console.log(`指向对象obj`,this);
  console.log(this.a);
}
var obj = {
  a: 2,
  foo: foo,
};
obj.foo(); // 2

```

1. 由 new 调用？绑定到新创建的对象。
2. 由 call 或者 apply（或者 bind）调用？绑定到指定的对象。
3. 由上下文对象调用？绑定到那个上下文对象。
4. 默认：在严格模式下绑定到 undefined，否则绑定到全局对象。

