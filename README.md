## pdf 大纲

![](https://ftp.bmp.ovh/imgs/2019/11/b9334bab49fa3323.png)

## JavaScript

### call-apply-bind

> call apply bind 用法区别小结

## 摘要

故事开头，恰逢其时，就行系统的总结下 `call` `apply` `bind` ，这也是面试官经常问的

```
你知道this指向的问题吗，简单说说你的理解？
--------------------------------------------------
我……
```

简介的贴上一段小程序的代码

```js
 /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
      console.log("接收url中的参数",options)
      AuthApis.voteItemListRouter(
          options
      ).then((res) =>{
          console.log(res.data.voteContent)
          let voteItemListvote = res.data
          let voteItemListdetail = res.data.voteContent
          console.log("data",voteItemListvote)
          this.setData({
              voteItemvote:voteItemListvote,
              voteItemList: voteItemListdetail
          })
          console.log('test1',voteItemListdetail,voteItemListvote)
          console.log('test2',voteItemvote,voteItemList)
      })
  },
```

如上的代码看起来也没有什么问题，控制台输出便有点问题，也趁此机会总结一下三者的区别

#### 实现效果

- call 改变 this 指向；自动执行函数；参数列表形式传入

```js
// 定义上下文
let ctx = {
  name: `yayxs`
};
// 定义函数
const fn = function(age, sex) {
  console.log(`${this.name}-${age}-${sex}`);
};

// 调用函数
fn(18, `男`);
```

- apply 改变 this 指向；自动执行函数；参数数组形式传入

```js
const fnCall = function(age, sex) {
  console.log(`call-${this.name}-${age}-${sex}`);
};

// fnCall(18, `男`); // call-undefined-18-男

fnCall.call(ctx, 18, `男`); // call-yayxs-18-男

// 总结：改变this指向，执行函数，参数列表传入
```

- bind 返回一个改变了的 this 指向的函数；参数列表形式传入

```js
const fnBind = function(age, sex) {
  console.log(`bind-${this.name}-${age}-${sex}`);
};

fnBind.bind(ctx); // 没有输出

const res = fnBind.bind(ctx);

console.log(res); // [Function: bound fnBind]

res(18, "男"); // bind-yayxs-18-男
```

#### 手写代码

倘若自己手写代码实现`call` 与 `apply`

1. 获取被绑定的函数
2. 被绑定的函数追加到劫持替换的对象
3. 被绑定的函数追加到劫持替换的对象

-手写 `call`

```js
Function.prototype.myCall = function(ctx, ...params) {
  // console.log(ctx); { name: 'yayxs' }
  // console.log(...params); 18 男
  if (typeof ctx === "object") {
    ctx = ctx || window;
  } else {
    ctx = null;
  }

  // 临时方法名
  let funcName = Symbol();

  // console.log(funcName);
  ctx[funcName] = this;
  // console.log(this); [Function: testFn]

  ctx[funcName](...params);
  delete ctx[funcName];
};
```

## 最后总结

总体来说,`call` `apply` `bind` 三个函数的作用都是用来改变`this`的指向。目前的 js 还存在回调函数这一现象，尤其在框架中一些`异步回调`也是十分的常见，难免`this`会迷失方向。三者既有不同也有相似

| 方法名 |      作用      | 是否自动执行 | 参数列表 |
| :----: | :------------: | :----------: | :------: |
|  call  | 改变 this 指向 |   自动执行   | 一般列表 |
| apply  | 改变 this 指向 |   自动执行   | 数组形式 |
|  bind  | 改变 this 指向 | 返回一个函数 | 一般列表 |

## 参考阅读

- [call、apply、bind 使用与内部实现](https://juejin.im/post/5dc920ebf265da4cfd296a7b)

- [bind、call、apply 用法及区别](https://juejin.im/post/5e4c0b856fb9a07ccb7e8eca#heading-47)
