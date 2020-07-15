# 【那你能帮帮我吗】call bind apply

## 前言

> 函数可以被传递、用作对象等

让我们先看一段代码

```js
// 函数终将展示姓名
function showName(x) {
  return x;
}

// 既然每次返回的是同一结果 考虑缓存
// 其中cacheName 便是`装饰着`
function cacheName(func) {
  let cache = new Map();
  return function (x) {
    if (cache.has(x)) {
      console.log(`had`);
      // 已经包含姓名
      return cache.get(x); // 从缓存中读取
    }
    // 然后调用函数func
    let res = func(x);
    // 进行缓存
    cache.set(x, res);
    return res;
  };
}

let fn = cacheName(showName);

console.log(fn(1));
console.log(fn(1)); // 当这个调用的时候才会执行 console.log(`had`)
```

作为对象的方法,

```js
let obj = {
  oneNum() {
    return 1;
  },
  addOne(x) {
    return x + this.oneNum(); // 这显然是没问题的
  },
};
console.log(obj.addOne(12));
```

但是当我们把对象的方法按照上述进行缓存的时候

```js
let obj = {
  oneNum() {
    return 1;
  },
  addOne(x) {
    return x + this.oneNum();
  },
};

obj.addOne = cacheName(obj.addOne);
console.log(obj.addOne(2)); // index.js:107 Uncaught TypeError: this.oneNum is not a function
```

函数虽然将调用传递给原始的方法，但是上下文`this` 却不见了，这也就引出我们的`call`

## call

`call` 是什么黑魔法，**内置函数方法**

```js
func.call(context, arg1, arg2, ...)
```

```js
function add(a, b) {
  console.log(a + b);
  console.log(this);
}
add(1, 2); // console.log(this) 执行结果是 window
add.call({ name: "yayxs" }, 1, 2); // console.log(this) 执行结果是 {name:'yayxs'}
```

并且函数自动执行

```js
function sayHi() {
  console.log(this.name);
}
let user = { name: "pop" };
let admin = { name: "root" };
sayHi.call(user);
sayHi.call(admin);
```

这时候我们再来看之前提到的问题，也就是缓存的问题

```js
console.log(this); // 其中 this 就是指的obj 这样在addOne在调用的时候就能够访问 this.oneNum()
let res = func.call(this, x);
```

### apply 改变 this 指向；自动执行函数；参数数组形式传入

```js
const fnCall = function (age, sex) {
  console.log(`call-${this.name}-${age}-${sex}`);
};

// fnCall(18, `男`); // call-undefined-18-男

fnCall.call(ctx, 18, `男`); // call-yayxs-18-男

// 总结：改变this指向，执行函数，参数列表传入
```

### bind 返回一个改变了的 this 指向的函数；参数列表形式传入

```js
const fnBind = function (age, sex) {
  console.log(`bind-${this.name}-${age}-${sex}`);
};

fnBind.bind(ctx); // 没有输出

const res = fnBind.bind(ctx);

console.log(res); // [Function: bound fnBind]

res(18, "男"); // bind-yayxs-18-男
```

## apply

## 手写代码

倘若自己手写代码实现`call` 与 `apply`

1. 获取被绑定的函数
2. 被绑定的函数追加到劫持替换的对象
3. 被绑定的函数追加到劫持替换的对象

### 手写 `call`

```js
Function.prototype.myCall = function (ctx, ...params) {
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

## 总结

总体来说,`call` `apply` `bind` 三个函数的作用都是用来改变`this`的指向。目前的 js 还存在回调函数这一现象，尤其在框架中一些`异步回调`也是十分的常见，难免`this`会迷失方向。三者既有不同也有相似

| 方法名 |      作用      | 是否自动执行 | 参数列表 |
| :----: | :------------: | :----------: | :------: |
|  call  | 改变 this 指向 |   自动执行   | 一般列表 |
| apply  | 改变 this 指向 |   自动执行   | 数组形式 |
|  bind  | 改变 this 指向 | 返回一个函数 | 一般列表 |

## 参考阅读

- [call、apply、bind 使用与内部实现](https://juejin.im/post/5dc920ebf265da4cfd296a7b)

- [bind、call、apply 用法及区别](https://juejin.im/post/5e4c0b856fb9a07ccb7e8eca#heading-47)
