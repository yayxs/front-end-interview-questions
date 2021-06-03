---
title: 手写实现数组去重的方法
---

# 手写实现数组去重的方法

要想搞明白数组去重的各种方案，第一步要做的事就是什么是重复的元素，先来看一段代码结果

```js
/**
 * 谈到数组去重，几乎是面试必备的一道开胃菜
 * 要想数组去重，第一件事就是有一个数组
 */
// 首先第一步
console.log(1 === 1); // true
console.log("1" === "1"); // true
console.log("true" === "true"); // true
console.log(false === false); // true
console.log(undefined === undefined); // true
console.log(null === null); // true

console.log(NaN === NaN); // false
console.log({} === {}); // false
console.log([] === []); // false
```

接着第二步：准备含有重复元素的目标数组

```js
let targetArr = ["1", "1", 1, 1, true, true, undefined, undefined, null, null];

console.log(targetArr);
```

第三步：写去重方法,这时候才是正是写方法的时候

```js
/**
 * desc 第一种方案 双层for循环
 */
function unique1(arr) {
  let result = []; // 结果数组
  for (let i = 0, len = arr.length; i < len; i++) {
    for (var j = 0, resLen = result.length; j < resLen; j++) {
      if (arr[i] === result[j]) {
        break;
      }
    }

    if (j === result.length) {
      result.push(arr[i]);
    }
  }
  return result;
}
```

```js
/**
 * desc 第二种方案 indexOf
 */

const unique2 = (arr) => {
  let result = [];
  for (let i = 0, len = arr.length; i < len; i++) {
    if (result.indexOf(arr[i]) === -1) {
      // 在结果数组中没有找到元素
      result.push(arr[i]);
    }
  }
  return result;
};
```

```js
/**
 * desc 第三种方案 先给数组排序结合 sort函数
 */

const unique3 = (target) => {
  target.sort();
  let result = [target[0]]; // 取出第一个元素

  for (let i = 1; i < target.length; i++) {
    target[i] !== target[i - 1] && result.push(target[i]); // 当前项和它的前一项不同的时候，才添加进结果数组
  }
  return result;
};
```

```js
/**
 * desc 第四种方案 使用filter 函数结合 indexof
 */

const unique4 = (target) => {
  return target.filter((item, index) => {
    return target.indexOf(item) === index; // 数组的下标与检索的下标一致
  });
};
```

```js
/**
 * desc 第五种方案 使用对象的键值对 结合obj.hasOwnProperty()
 */

const unique5 = (target) => {
  let obj = {}; // 初始化一个空的对象
  let result = new Array();
  result = target.filter((item, index) =>
    // typeof item + item 主要是考虑到 对象的key 数值1 会被搞成 '1'
    obj.hasOwnProperty(typeof item + item)
      ? false
      : (obj[typeof item + item] = true)
  );
  return result;
};
```

```js
/**
 * desc 第六种方案 使用ES6的新语法Set
 *
 */
const unique6 = (target) => {
  // Set 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。
  let x = new Set(target); // Set { '1', 1, true, null }

  return [...x]; // 转为数组
};
```

```js
/**
 * desc 第七种方案 使用ES6的Array.from
 *
 */
const unique7 = (target) => {
  // Set 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。
  let x = new Set(target); // Set { '1', 1, true, null }

  return Array.from(x); // 转为数组
};
```

```js
/**
 * desc 第八种方案 使用哈希表
 *
 */

const unique8 = (target) => {
  let result = []; // 结果数组
  let hash = {};
  for (let ele of target) {
    if (!hash[ele]) {
      // hash 中没有数组中的元素
      result.push(ele); // 把元素放进去
      hash[ele] = true; // hash中已经存在了标记为true 下次循环就不会接着往结果数组中放相同的元素了
    }
  }
  return result;
};
```

```js
/**
 * desc 第九种方案 使用Map 类型
 * 缺点 hash中存在相同的 key 就不往下找了， 但 '1' 和 1 是不同的元素
 * 请同学自行测试吧哈哈~
 */

const unique9 = (target) => {
  let map = new Map(); // 初始化 map
  let result = new Array(); // 初始化 数组
  for (let i = 0; i < target.length; i++) {
    if (map.has(target[i])) {
      map.set(target[i], true);
    } else {
      map.set(target[i], false);
      result.push(target[i]);
    }
  }
  return result;
};
```

```js
/**
 * desc 第十种方案 双层for循环变体
 *
 *
 */

const unique10 = (target) => {
  //   let result = [];

  for (let i = 0; i < target.length; i++) {
    for (let j = i + 1; j < target.length; j++) {
      if (target[i] === target[j]) {
        // 如果两项元素相同的话，则从目标元素中删除一个
        target.splice(j, 1);
        // splice 会改变原数组，所以相关的长度都要减去一
        i--;
        j--;
      }
    }
  }

  return target;
};
```

```js
/**
 * desc 第十一种方案 数据的遍历结合includes
 *
 *
 */

const unique11 = (target) => {
  let result = [];
  for (let ele of target) {
    // 其中 ele 是每一目标元素中每一元素
    !result.includes(ele) && result.push(ele); // 如果结果数组中没有ele就添加进去
  }
  return result;
};
```

```js
/**
 * desc 第十二种方案 数据reduce
 *
 *
 */

const unique12 = (target) => {
  return target.reduce((previousValue, currentValue, currentIndex) => {
    return previousValue.includes(currentValue)
      ? previousValue
      : [...previousValue, currentValue];
  }, []);
};
```

```js
console.log(unique1(targetArr)); // ["1", 1, true, undefined, null]
console.log(unique2(targetArr)); // ["1", 1, true, undefined, null]
console.log(unique3(targetArr)); // ["1", 1, null, true, undefined]
console.log(unique4(targetArr)); // ["1", 1, null, true, undefined]
console.log(unique5(targetArr)); // ["1", 1, null, true, undefined]
```
