---
title: 手写实现promise
---

# 手写实现promise

- 问题一 `Promise`构造函数是同步还是异步执行
- 问题二：`then`中的方法呢 ?
- 问题三：`promise`如何实现`then`处理 ?

## 回调的问题

- 代码臃肿。
- 可读性差。
- 耦合度过高，可维护性差。
- 代码复用性差。
- 容易滋生 bug。
- 只能在回调里处理异常。

```js
let url1 = 'http://xxx.xxx.1';
let url2 = 'http://xxx.xxx.2';
let url3 = 'http://xxx.xxx.3';
$.ajax({
    url:url1,
    error:function (error) {},
    success:function (data1) {
        console.log(data1);
        $.ajax({
            url:url2,
            data:data1,
            error:function (error) {},
            success:function (data2) {
                console.log(data2);
                $.ajax({
                    url:url3,
                    data,
                    error:function (error) {},
                    success:function (data3) {
                        console.log(data3);
                    }
                });
            }
        });
    }
});
```

大家都在说`promise` ，面试的时候也基本是必问的问题，一般知识点的话，一些网上的参考文章是不会过时的，比如像一些配置性的文章大家可能喜欢看最近的文章。我们将从**基本概念** **原理** **面试** 去看这些问题。首先要说的就是`promise` 一般我们就是读文档，从简单到难。

> Promise 是个对象

```js
Promise instanceof Object;
true;
```

> 代表一个异步操作的最终完成或者失败

假设现在我们需要这样一件事情：**创建一个音频文件，这就需要我们准备两个回调函数，一是成功的时候调用，二是失败的时候调用**

![image-20200610213825567](https://raw.githubusercontent.com/yayxs/Pics/master/image-20200610213825567.png)

那这样我们就需要准备两个回调函数，有了`promise` 之后，我们就可以这样

```js
const promise = createAudioFileAsync(audioSettings);
promise.then(successCallback, failureCallback);
```

>对象的构造器语法

```js
const p = new Promise((resolve,reject)=>{
    
})
```

传给`peomise` 的函数会自动执行

```js
const p = new Promise(() => {
  console.log('函数立即执行');
});
```

`Promise`是一个构造函数，使用`new`操作符返回一个`promise`对象构造函数接收一个`excutor`函数作为参数，excutor 函数有两个函数类型的参数 resolve 和 reject，这两个函数都是`js` 尝试去调用的

返回的这个`p` 有内部两个属性，起初的时候是 `pending` `undefined`

```js
[[PromiseState]]: "pending"
[[PromiseResult]]: undefined
```







