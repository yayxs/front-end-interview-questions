---
title: null和undefined有什么区别
---

# null和undefined有什么区别

## null

它构成了一个独立的类型，只包含 null 值，null 本身也是基本类型。不是对对象的引用 也不是null指针
```
null 有时会被当作一种对象类型，但是这其实只是语言本身的一个 bug，即对 null 执行
typeof null 时会返回字符串 "object"。
```
但是仅仅代表 `无` `空 ` `未知`
在定义将来要保存对象值的变量时，建议使用null来初始化，不要使用其他值。
## undefined


虽然null == undefined是true（因为这两个值类似），但null === undefined是false，因为它们不是相同的数据类型。

特殊值 null 和 undefined 比较特殊。它们没有对象包装器，所以它们没有方法和属性。并且它们也没有相应的原型。


```
 - undefined 未初始化变量
 - null == undefined true
 - 用途完全不一样
```

```js
console.log(null ==undefined)  // true

```