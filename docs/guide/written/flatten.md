---
title: 手写实现数组扁平化
---

# 请实现一个 flattenDeep 函数，把嵌套的数组扁平化

1. 怎样用最普通的方法解决数组扁平化问题
2. ES6 里面是否有一些高级的方法能够直接实现

```js
// 把多维嵌套的数组拍平
var arr = [1, [2, [3, 4，5]]];

console.log(flatten(arr)); // [1, 2, 3, 4，5]

```

### 方案一：采用递归的方式

```js
let arr = [1, [2, [3, 4, [5]]]];
// console.log(flattenDeep(arr)); // 输出 [1,2,3,4,5]

function flattenDeep(arr) {
  let result = []; // 结果数组

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // 如果当前的元素依然是数组
      // 把数组的结果通过数组的 concat 方法拼接到最后要返回的 result 数组
      result = result.concat(flattenDeep(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(flattenDeep(arr));
```

### 方案二、利用 reduce 函数迭代

```js
let arr = [1, [2, [3, 4, [5]]]];

function flatten(arr) {
  return arr.reduce((prev, next) => {
    return prev.concat(Array.isArray(next) ? flatten(next) : next);
  }, []);
}

console.log(flatten(arr)); // [ 1, 2, 3, 4, 5 ]
```

### 方案三、采用 ES6 语法 扩展运算符实现

```js
function secflattenDeep(arr) {
  // let result = []

  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}
```

### 方案四 split 和 toString 共同处理

```js
function flatten(arr) {
  return arr.toString().split(",");
}
console.log(flatten(arr)); //
```
