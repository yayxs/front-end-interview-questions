---
title: for循环中的var声明
---

我们在 for 循环的头部直接定义了变量 i，通常是因为只想在 for 循环内部的上下文中使
用 i，而忽略了 i 会被绑定在外部作用域（函数或全局）中的事实。

```js
function foo() {
  for (var i = 0; i < 7; i++) {}
  console.log(i);
}
foo();
```

## 问题

迭代变量 i 会渗透到循环体的外部,在循环的外部打印 i 的值此时是 5,打印`window.i` 是 5 这种情况理论上是应该避免的.可以使用`块作用域` 而 js 中的几种方式是 `with` `try/catch`

## with

它不仅是一个难于理解的结构，同时也是块作用域的一
个例子（块作用域的一种形式），用 with 从对象中创建出的作用域仅在 with 声明中而非外
部作用域中有效。

```js
console.log(i); // 5
console.log(window.i); // 5
```

## 方案一 改为 let

这样迭代变量的作用域 仅在 for 循环内部块（类似于函数作用域的效果）,let 关键字可以将变量绑定到所在的任意作用域中（通常是 { .. } 内部）。换句话说，let
为其声明的变量隐式地了所在的块作用域。for 循环头部的 let 不仅将 i 绑定到了 for 循环的块中，事实上它将其重新绑定到了循环
的每一个迭代中，确保使用上一个循环迭代结束时的值重新进行赋值。

```js
for (let i = 0; i < 5; ++i) {
  setTimeout(() => {
    console.log(i); // 0 1 2 3 4
  }, i * 5);
}
console.log(window.i); // undefined
console.log(i); // Uncaught ReferenceError: i is not defined
```

```js
for (var i = 0; i < 5; ++i) {
  let _i = i;
  setTimeout(() => {
    console.log(_i); // 0 1 2 3 4
  }, i * 5);
}
console.log(window.i); // 5
console.log(i); // 5
```

## 构建闭包环境

IIFE 会通过声明并立即执行一个函数来创建作用域

```js
for (var i = 1; i < =5; ++i) {
 (
   function(){
     var j = i
     setTimeout(function timer(){
       console.log(j)
     },j*1000)
   }
 )()
}
console.log(window.i); // 5
console.log(i); // 5
```

## `try/catch`作用域机制

非常少有人会注意到 JavaScript 的 ES3 规范中规定 try/catch 的 catch 分句会创建一个块作
用域，其中声明的变量仅在 catch 内部有效。

```js
for (var i = 0; i < 5; ++i) {
  try {
    throw new Error(i);
  } catch (error) {
    let _i = Number(error.message);
    setTimeout(() => {
      console.log(_i);
    }, _i * 5);
  }
}
console.log(window.i); // 5
console.log(i); // 5
```

## 方案四 利用`setTimeout函数`的第三个参数

- 参数一 函数或者字符串
- 参数二 毫秒数
  这个参数会被当成 timer 函数的参数传入

```js
for (var i = 0; i < 5; i++) {
  setTimeout(
    (j) => {
      console.log(j);
    },
    i * 5,
    i
  );
}
console.log(window.i); // 5
console.log(i); // 5
```
