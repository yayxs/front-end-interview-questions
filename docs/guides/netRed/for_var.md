---
title: 网红经典面试题：for循环中的var声明
---



```js
for (var i = 0; i < 5; ++i) {
  // 循环逻辑
  setTimeout(() => {
    console.log(i); // 5 5 5 5 5
    // 迭代变量保存的是导致循环退出的值：5。在之后执行超时逻辑时，所有的i都是同一个变量，因而输出的都是同一个5
  }, i * 5);
}
console.log(i); // 5
```

## 问题

迭代变量 i 会渗透到循环体的外部,在循环的外部打印 i 的值此时是 5,打印`window.i` 是 5

```js
console.log(i); // 5
console.log(window.i) // 5
```

## 方案一 改为 let

这样迭代变量的作用域 仅在 for 循环内部块（类似于函数作用域的效果）

```js
  for (let i = 0; i < 5; ++i) {
        setTimeout(() => {
          console.log(i); // 0 1 2 3 4
         
        }, i * 5);
      }
      console.log(window.i) // undefined
      console.log(i); // Uncaught ReferenceError: i is not defined
```

```js
 for (var i = 0; i < 5; ++i) {
        let _i = i
        setTimeout(() => {
          console.log(_i); // 0 1 2 3 4
         
        }, i * 5);
      }
      console.log(window.i) // 5
      console.log(i); // 5
```
## 方案二 构建闭包环境

```js
 for (var i = 0; i < 5; ++i) {
        ;(i=>{
          setTimeout(()=>{
            console.log(i) // 0 1 2 3 4
          },i*5)
        })(i)
      }
      console.log(window.i) // 5
      console.log(i); // 5
```

## 方案三 try catch 作用域机制

```js

  for (var i = 0; i < 5; ++i) {
        try {
          throw new Error(i);
        } catch (error) {
          let _i = Number(error.message)
          setTimeout(()=>{
            console.log(_i)
          },_i*5)
        }
      }
      console.log(window.i) // 5
      console.log(i); // 5
```

## 方案四 利用 setTimeout 函数的第三个参数

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