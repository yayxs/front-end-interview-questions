---
title: for..of, for..in和 forEach,map 的区别
---

# for..of, for..in和 forEach,map 的区别

## for in

`for-in`语句是一种严格的迭代语句，用于枚举对象中的非符号键属性,**如果for-in循环要迭代的变量是null或undefined，则不执行循环体。**,循环会遍历 所有属性，不仅仅是这些数字属性

```js
for (const key in window) {
  document.write(`${key}-------`);
}
```


## for-of
for-of语句是一种严格的迭代语句，用于遍历可迭代对象的元素，不能获取当前元素的索引，只是获取元素值，但大多数情况是够用的。而且这样写更短,通常情况下用于处理数组
```js
for(let val of arr){ // ele是元素


}
```

## forEach

arr.forEach 方法允许为数组的每个元素都运行一个函数。

## map

它对数组的每个元素都调用函数，并返回结果数组。