---
title: setTimeout,Promise,Async/Await的区别
---


# `setTimeout` `Promise` `Async/Await` 的区别

`Async/await`是以更舒适的方式使用`promise`的一种特殊语法，同时它也非常易于理解和使用。

### async

```js
async function foo() {
  return 1;
}

foo().then(res=>{console.log(res)})
```

## await

1. 如果我们尝试在非 async 函数中使用 await 的话，就会报语法错误
2. await 不能在顶层代码运行