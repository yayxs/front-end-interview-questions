---
title: for..of, for..in和 forEach,map 的区别
---

# for..of, for..in 和 forEach,map 的区别

## for 循环

这个是最最基础的操作。我们可以通过循环数组的下标，来依次访问每个值：

```js
// 获取数组的长度
const len = arr.length;
for (let i = 0; i < len; i++) {
  // 输出数组的元素值，输出当前索引
  console.log(arr[i], i);
}
```

## for in

`for-in`语句是一种严格的迭代语句，用于枚举对象中的非符号键属性,**如果 for-in 循环要迭代的变量是 null 或 undefined，则不执行循环体。**,循环会遍历 所有属性，不仅仅是这些数字属性

```js
for (const key in window) {
  document.write(`${key}-------`);
}
```

## for-of

for-of 语句是一种严格的迭代语句，用于遍历可迭代对象的元素，不能获取当前元素的索引，只是获取元素值，但大多数情况是够用的。而且这样写更短,通常情况下用于处理数组

```js
for (let val of arr) {
  // ele是元素
}
```

## forEach

通过取 forEach 方法中传入函数的第一个入参和第二个入参，我们也可以取到数组每个元素的值及其对应索引：

```js
arr.forEach((item, index) => {
  // 输出数组的元素值，输出当前索引
  console.log(item, index);
});
```

## map

map 方法在调用形式上与 forEach 无异，区别在于 map 方法会根据你传入的函数逻辑对数组中每个元素进行处理、进而返回一个全新的数组。
所以其实 map 做的事情不仅仅是遍历，而是在遍历的基础上“再加工”。当我们需要对数组内容做批量修改、同时修改的逻辑又高度一致时，就可以调用 map 来达到我们的目的：

```js
const newArr = arr.map((item, index) => {
  // 输出数组的元素值，输出当前索引
  console.log(item, index);
  // 在当前元素值的基础上加1
  return item + 1;
});
```

> 个人推荐如果没有特殊的需要，那么统一使用 for 循环来实现遍历。因为从性能上看，for 循环遍历起来是最快的。
