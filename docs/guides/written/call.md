---
title: 手写实现call与apply
---

# 手写实现 call 与 apply

## 前言

函数可以被传递、用作对象等让我们先看一段代码,函数虽然将调用传递给原始的方法，但是上下文`this` 却会存在不见的地方，这也就引出我们的`call()`方法,`call` 是什么黑魔法，不过是一个**内置函数方法**，使用的方式是 `add.call()`,并且`add`函数自动执行输出结果,先来看一段代码
```js
function foo() {
  console.log(this) // 指向的就是 obj 在调用的时候把this绑定到了 obj上
  console.log(this.a);
}
var obj = {
  a: 2,
};
foo.call(obj); // 2

```
```js
function foo() {
  console.log(this); // Number {123}
}

foo.call(123);

```



```js
// 参数context 指定的this值
// arg1 参数一
// arg2 参数二
func.call(context, arg1, arg2, ...)
```

```js
function add(a, b) {
  console.log("add函数中this", this);
  console.log(a + b);
}
add(1, 2); // this指向window
add.call({ name: "yayxs" }, 1, 2); // this指向传入的 {name:'yayxs'}
```

## 实现第一版 call

这时候我们把传入的对象抽离出来

```js
let o = {
  name: "yayxs",
};

function sayName() {
  console.log(this.name);
}

sayName.call(o); // yayxs
```

```js

Function.prototype.myCall = function(ctx) {
    console.log(this) // 其中this 就是sayName 这个函数
    console.log(ctx) //  {name: "yayxs"}
    ctx.tempFunc = this
    ctx.tempFunc()
    delete ctx.tempFunc
};

sayName.myCall(o,'参数一','参数二') // 理论上输出 yayxs
```
## 实现第二版 call

我们上述的`myCall` 传入的参数一和参数二并没有参与感，再完善一下

```js
Function.prototype.myCall = function(ctx) {
    console.log(this) // 其中this 就是sayName 这个函数
    console.log(ctx) //  {name: "yayxs"}
    console.log('arguments',arguments)
    let tempArgs = [];// 用来存放参数
    for(let i=1,len=arguments.length;i<len;i++){
        console.log(arguments[i]) // 第一遍循环体 输出参数一 第二遍循环体 参数二
        tempArgs.push('arguments[' + i + ']');
    }
    console.log(tempArgs);
    ctx.tempFunc = this
    // ctx.tempFunc()
    let evalScript = 'ctx.tempFunc(' + tempArgs +')'
    eval(evalScript);
    delete ctx.tempFunc
};
```


## 手动实现 apply

```js

// ---------------- 实现myApply
Function.prototype.myApply = function(ctx,arr){
  ctx.tempFunc = this
  let result
  if(!arr){
    result = ctx.tempFunc() // 直接执行
  }else{
    let args = []
    for (let i = 0, len = arr.length; i < len; i++) {
      args.push('arr[' + i + ']');
  }
    result = eval('ctx.tempFunc(' + args + ')')
  }
  delete ctx.tempFunc
  return result 
}
```

## 总结

总体来说,`call` `apply` 函数的作用都是用来改变`this`的指向。目前的 js 还存在回调函数这一现象，尤其在框架中一些`异步回调`也是十分的常见，难免`this`会迷失方向既有不同也有相似，倘若自己手写代码实现`call` 与 `apply`

1. 获取被绑定的函数
2. 被绑定的函数追加到劫持替换的对象
3. 被绑定的函数追加到劫持替换的对象

| 方法名 |      作用      | 是否自动执行 | 参数列表 |
| :----: | :------------: | :----------: | :------: |
|  call  | 改变 this 指向 | 自动执行函数 | 一般列表 |
| apply  | 改变 this 指向 | 自动执行函数 | 数组形式 |

