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
