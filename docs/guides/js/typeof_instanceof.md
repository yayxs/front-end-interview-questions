---
title: typeof 和 instance of 检测数据类型有什么区别？
---

::: tip
typeof 是否能正确判断类型？instanceof 能正确判断对象的原理是什么？
:::

## typeof

 - typeof 操作符适合用来判断一个变量是否是原始类型，确切的说是判断一个变量是不是 `数值` `字符串` `布尔值` `undefined` 的最好方式

```js
// 基本的数据 类型
const isNumber = 1;
const isStr = "I am string";
const isBool = true;
const isUndefined = undefined;

const isSymbol = Symbol();

const isArr = [0, 1, 2];
const isObj = {
  name: "i am obj",
};
const isNull = null;
const isFunc = () => {};


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

### 总结
对象和数组或者null 返回的都是object 检测不成功

```
　typeof操作符在用于检测函数时也会返回"function"。当在Safari（直到Safari 5）和Chrome（直到Chrome 7）中用于检测正则表达式时，由于实现细节的原因，typeof也会返回"function"。ECMA-262规定，任何实现内部[[Call]]方法的对象都应该在typeof检测时返回"function"。因为上述浏览器中的正则表达式实现了这个方法，所以typeof对正则表达式也返回"function"。在IE和Firefox中，typeof对正则表达式返回"object"。
```

## instanceof 

上述的操作方式整体来说对对象作用不大ECMAScript提供了instanceof操作符,如果变量是给定引用类型由其原型链决定


### instanceof 实现的原理是什么 

### instanceof内部机制是怎样的

### 手写instanceof