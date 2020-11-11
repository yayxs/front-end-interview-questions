---
title: 判断数组的方法?如何检测数组
---

## instanceof 操作符

```js
if (value instanceof Array) {
  // 操作数组
}
```

> 缺点 使用 instanceof 的问题是假定只有一个全局执行上下文。如果网页里有多个框架，则可能涉及两个不同的全局执行上下文，因此就会有两个不同版本的 Array 构造函数。如果要把数组从一个框架传给另一个框架，则这个数组的构造函数将有别于在第二个框架内本地创建的数组。

## Array.isArray()

```js
if (Array.isArray(value)) {
  // 操作数组
}
```

> ECMAScript 提供了 Array.isArray()方法。这个方法的目的就是确定一个值是否为数组，而不用管它是在哪个全局执行上下文中创建的。
