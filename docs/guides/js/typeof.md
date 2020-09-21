---
title: typeof 和 instance of 检测数据类型有什么区别？
---

```js
// 判断数据类型
const isNumber = 1;
const isStr = "I am string";
const isBool = true;
const isArr = [0, 1, 2];
const isObj = {
  name: "i am obj",
};
const isNull = null;
const isUndefined = undefined;
const isFunc = () => {};
const isSymbol = Symbol();

const targetArr = [
  isNumber,
  isStr,
  isBool,
  isArr,
  isObj,
  isNull,
  isUndefined,
  isSymbol,
  isFunc,
];
for (let i = 0, len = targetArr.length; i < len; i++) {
  console.log(targetArr[i], typeof targetArr[i]);
}
```

之所以类型是松散的，需要一种方式来检测当前数据类型

| Tables             |   desc    |    other |
| ------------------ | :-------: | -------: |
| 1                  |  number   | 检测成功 |
| I am string        |  string   | 检测成功 |
| true               |  boolean  | 检测成功 |
| {name: "i am obj"} |  object   | 检测成功 |
| undefined          | undefined | 检测成功 |
| Symbol()           |  symbol   | 检测成功 |
| () => {}           | function  | 检测成功 |
| [0,2,2]            |  object   |     失败 |
| null               |  object   |     失败 |


**调用typeof null返回的是"object"。这是因为特殊值null被认为是一个对空对象的引用。**