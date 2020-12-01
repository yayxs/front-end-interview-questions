---
title: 手写实现数组扁平化
---

# 请实现一个 flattenDeep 函数，把嵌套的数组扁平化


### 方案一：采用递归的方式

```js
let arr = [1, [2, [3, 4, [5]]]];
// console.log(flattenDeep(arr)); // 输出 [1,2,3,4,5]

function flattenDeep(arr) {
  let result = []; // 结果数组

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // 如果当前的元素依然是数组
      result = result.concat(flattenDeep(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(flattenDeep(arr));
```

### 方案二、采用 ES6 语法

```js
function secflattenDeep(arr) {
  // let result = []

  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}
```