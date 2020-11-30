---
title: 手写实现promise
---

# 手写实现 Promise

::: tip
Promise 构造函数是同步还是异步执行，then 中的方法呢 ?promise 如何实现 then 处理 ?
:::

大家都在说`promise` ，面试的时候也基本是必问的问题，一般知识点的话，一些网上的参考文章是不会过时的，比如像一些配置性的文章大家可能喜欢看最近的文章。我们将从**基本概念** **原理** **面试** 去看这些问题。首先要说的就是`promise` .一般我们就是读文档，从简单到难。

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

> promise A+ 规范

关于`promise` 一般会从三个角度出发

- 直接是概念
- 给一段代码输出


# 异步解决方案良药Promise

## promise

目前比较流行的异步解决方案，本质上是一个构造函数

### 1、状态

promise有三种状态，初始的状态都是pedding，包括成功的状态失败的状态还有等待的状态

- promise.all()所有的promise对象成功才会触发成功的状态，否则失败状态
- promise.race()任意一个子promise的状态触发后

### 2、出现的原因

我们来通过一个例子来说明一下异步调用的问题

```
let url1 = 'http://xxx.xxx.1';
$.ajax({
    url:url1,
    error:function (error) {},
    success:function (data1) {
        console.log(data1);
    }
});

```

那当我们发出多个请求的时候就只能以嵌套的方式来解决

```
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



### 3、主要的问题

- 代码臃肿。
- 可读性差。
- 耦合度过高，可维护性差。
- 代码复用性差。
- 容易滋生 bug。
- 只能在回调里处理异常。

### 4 、Promise 的使用

### 构造函数

Promise 是一个构造函数，使用 new 操作符返回一个 promise 对象

构造函数接收一个 excutor 函数作为参数

excutor 函数有两个函数类型的参数 resolve 和 reject


