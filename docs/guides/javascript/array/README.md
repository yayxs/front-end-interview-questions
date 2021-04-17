---
title: 深入理解JS数组
---

## 数组的含义

> 数组（英语：Array），是由相同类型的元素（element）的集合所组成的数据结构，分配一块连续的内存来存储.它能存储有序的集合

![20200426202840](https://raw.githubusercontent.com/yayxs/Pics/master/img/20200426202840.png)

**以上是 js 数组在内存中大致位置** ，或者

> Chrome 浏览器 JS 引擎 V8 中，数组有两种存储模式，一种是类似 C 语言中的线性结构存储（索引值连续，且都是正整数的情况下），一种是采用 Hash 结构存储（索引值为负数，数组稀疏，间隔比较大）

为什么这么说，因为在`js` 中 数组的存储

```js
// The JSArray describes JavaScript Arrays
//  Such an array can be in one of two modes:
//    - fast, backing storage is a FixedArray and length <= elements.length();
// 存储结构是 FixedArray ，并且数组长度 <= elements.length() ，push 或 pop 时可能会伴随着动态扩容或减容

//       Please note: push and pop can be used to grow and shrink the array.
//    - slow, backing storage is a HashTable with numbers as keys
// 存储结构是 HashTable（哈希表），并且数组下标作为 key
class JSArray: public JSObject {
 public:
  // [length]: The length property.
  DECL_ACCESSORS(length, Object)

  // ...

  // Number of element slots to pre-allocate for an empty array.
  static const int kPreallocatedArrayElements = 4;
};
```

意思是说，我们可以看到 `JSArray` 是继承自 `JSObject` 的，所以在 JavaScript 中，数组可以是一个特殊的对象，内部也是以 key-value 形式存储数据，所以 JavaScript 中的数组可以存放不同类型的值。

> JavaScript 中， `JSArray` 继承自 `JSObject` ，或者说它就是一个特殊的对象，内部是以 key-value 形式存储数据，所以 JavaScript 中的数组可以存放不同类型的值。它有两种存储方式，快数组与慢数组，初始化空数组时，使用快数组，快数组使用连续的内存空间，当数组长度达到最大时，`JSArray` 会进行动态的扩容，以存储更多的元素，相对慢数组，性能要好得多。当数组中 `hole` 太多时，会转变成慢数组，即以哈希表的方式（ key-value 的形式）存储数据，以节省内存空间。

## `数组`的优点及特性

### 优点

- 随机访问：可以通过下标随机访问数组中的任意位置上的数据

**根据下标随机访问的时间复杂度为 O(1)**

### 特性

- 数组插入

我们已经知道数组是一段连续储存的内存，当我们要将新元素插入到数组 k 的位置时呢?这个时候需要将 k 索引处之后的所有元素往后挪一位,并将 k 索引的位置插入新元素.

![20200426203256](https://raw.githubusercontent.com/yayxs/Pics/master/img/20200426203256.png)

- 删除

删除操作其实与插入很类似,同样我要删除数组之内的 k 索引位置的元素,我们就需要将其删除后,为了保持内存的连续性,需要将 k 之后的元素通通向前移动一位,这个情况的时间复杂度也是 O(n).

- 查找

比如我们要查找一个数组中是否存在一个为 2 的元素,那么计算机需要如何操作呢?

如果是人的话,在少量数据的情况下我们自然可以一眼找到是否有 2 的元素,而计算机不是,计算机需要从索引 0 开始往下匹配,直到匹配到 2 的元素为止

- 读取

我们已经强调过数组的特点是拥有**相同的数据类型**和一块**连续的线性内存**,那么正是基于以上的特点,数组的读取性能非常的卓越,时间复杂度为 O(1),相比于链表、二叉树等数据结构,它的优势非常明显.

那么数组是如何做到这么低的时间复杂度呢?

假设我们的数组内存起始地址为`start`,而元素类型的长度为`size`,数组索引为`i`,那么我们很容易得到这个数组内存地址的寻址公式:

```js
arr[i]_address = start + size * i
```

比如我们要读取`arr[3]`的值,那么只需要把`3`代入寻址公式,计算机就可以一步查询到对应的元素,因此数组读取的时间复杂度只有 O(1).

## 数组的构造器有哪几种

- new Array()

```js
let arr = [];
```

- Array.of

```js
console.log(Array.of(8.0));
console.log(Array(8.0));
console.log(Array.of(8.0, 5)); // [8,5]
console.log(Array(8.0, 5)); // [8,5]
console.log(Array("8"));
console.log(Array.of("8"));
```

- Array.from

就是从一个类似数组的可迭代对象中创建一个新的数组实例。其实就是，只要一个对象有迭代器，Array.from 就能把它变成一个数组（注意：是返回新的数组，不改变原对象）。

## `数组`是如何存储的

跟其他语言中的数组一样，ECMAScript 数组也是一组有序的数据，但跟其他语言不同的是，数组中每个槽位可以存储任意类型的数据。这意味着可以创建一个数组，它的第一个元素是字符串，第二个元素是数值，第三个是对象。ECMAScript 数组也是动态大小的，会随着数据添加而自动增长。

```js
const arr = [];
```

- 其中常量`arr` 是存放在栈空间，存放的实际是 地址（一个指向 [] 的指针）

- 当存放一种类型的时候比如

  ```
  const arr = [1,2,3]
  ```

这时候是**连续的内存**

- 但如果我们定义了不同类型的元素

  ```
  const arr = ['str', 1, {a:1}]
  ```

  它对应的就是一段非连续的内存。此时，JS 数组不再具有数组的特征，其底层使用哈希映射分配内存空间，是由对象链表来实现的。

## 改变自身的方法

> pop push reverse shift sort unshift splice

- push

```js
```

- pop

```js
let arr = ["张三", "李四", "王二", "麻子"];

let item = arr.pop();

console.log(item); // '麻子'
console.log(arr); // [ '张三', '李四', '王二' ]
```

- unshift

```js
["第零个元素", "第一个元素", "第二个元素", "第三个元素"];
4;
```

- shift

```js
["第二个元素", "第三个元素"];
("第一个元素");
```

- toString

```js
["第一个元素", "第二个元素", "第三个元素"];
//   第一个元素,第二个元素,第三个元素
```

- splice

```js
let arr = ["第一个元素", "第二个元素", "第三个元素"];
let result;
result = arr.splice(arr.length - 1, 1, "替换掉第三个元素");
// ["第一个元素", "第二个元素", "替换掉第三个元素"]
// 原始的数组的length 3
// api过后 ["第三个元素"]
```

- slice 返回新数组副本

```js
let arr = ["第一个元素", "第二个元素", "第三个元素"];
let result;
result = arr.slice(0, 3); //['第一个元素','第二个元素','第三个元素']
result = arr.slice(); // ['第一个元素','第二个元素','第三个元素']
console.log("原始的数组", arr); // ['第一个元素','第二个元素','第三个元素']
console.log("api过后", result); // ['第一个元素','第二个元素','第三个元素']
```

- concat()

```js
const zero = 0;
const right = [1, 2, 3];
const left = [-3, -2, -1];

let nums = left.concat(zero, right);
console.log(nums); // [-3, -2, -1, 0,1,  2,  3]
console.log(left); // [-3, -2, -1]
```

- indexof

```js
let arr = ["第一个元素", "第二个元素", "第三个元素"];
let result;

result = arr.indexOf("第三个元素");

console.log("原始的数组", arr); // ["第一个元素", "第二个元素", "第三个元素"]

console.log("api过后", result); // 索引 2
```

- includes

```js
let arr = ["第一个元素", "第二个元素", "第三个元素"];
let result;

result = arr.includes("第三个元素");

console.log("原始的数组", arr); // ["第一个元素", "第二个元素", "第三个元素"]

console.log("api过后", result); // true
```

## 数组中增加元素的方式

- unshift

```js
const oldArr = [1, 2];

const res = oldArr.unshift(0);
console.log(oldArr); // [0,1,2]

console.log(res); // 3
```

- push

```js
const oldArr = [1, 2];

const res = oldArr.push(3);
console.log(oldArr); // [1,2,3]

console.log(res); // 3
```

- splice

```js
const oldArr = [1, 2];

const res = oldArr.splice(0, 0, 3);

console.log(oldArr); // [3,1,2]
console.log(res); // []
```

## 计算两个数组的交集

## 类数组（伪数组）和数组的区别是什么？

在浏览器和其它环境中有一种称为“类数组”的对象，它们 看似是数组。也就是说，它们有 length 和索引属性，但是也可能有其它的非数字的属性和方法，这通常是我们不需要的。for..in 循环会把它们都列出来。所以如果我们需要处理类数组对象，这些“额外”的属性就会存在问题。

### 类（伪）数组（arraylike）

- 就是像数组的对象（某些对象看起来像但不是）

- **通过索引属性访问元素**

- **拥有 length** 属性的对象

- underscore 中的定义

  ```js
  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  var getLength = property("length");
  var isArrayLike = function(collection) {
    var length = getLength(collection);
    return (
      typeof length == "number" && length >= 0 && length <= MAX_ARRAY_INDEX
    ); // 其中 JavaScript 中能精确表示的最大数字
  };
  ```

- **没有数组的方法**（push forEach）

```js
arrayLike.push("sex"); // 01.js:20 Uncaught TypeError: arrayLike.push is not a function
```

#### 形式

```js
console.log(array[0]); // name
console.log(arrayLike[0]); // name

array[0] = "new name";
arrayLike[0] = "new name";
console.log(array[0]); // new name
console.log(arrayLike[0]); // new name
```

#### 间接调用

```js
Array.prototype.slice.call(arrayLike, 0); // ["name", "age", "sex"]
```

## 判断一个变量是否为数组

也就是说怎么判断一个`JavaScript` 元素是个数组，这也是面试常问的问题。

但是数组是基于对象的，不构成单独的语言类型

### `instanceof操作符`

```js
if (value instanceof Array) {
  // 操作数组
}
```

> 缺点 使用 instanceof 的问题是假定只有一个全局执行上下文。如果网页里有多个框架，则可能涉及两个不同的全局执行上下文，因此就会有两个不同版本的 Array 构造函数。如果要把数组从一个框架传给另一个框架，则这个数组的构造函数将有别于在第二个框架内本地创建的数组。

### `Array.isArray`

```js
console.log(typeof []); // object
console.log(typeof {}); // object
```

```js
if (Array.isArray(value)) {
  // 说明value是一个数组
}
```

> ECMAScript 提供了 Array.isArray()方法。这个方法的目的就是确定一个值是否为数组，而不用管它是在哪个全局执行上下文中创建的。

**缺点** ：浏览器的支持不一

```js
if (!Array.isArray) {
  Array.isArray = function(arg) {
    return Object.prototype.toString.call(arg) === "[object Array]";
  };
}
```

## `Object.prototype.toString`

```js
let obj = {};

console.log(obj.__proto__.toString() === "[object Object]"); //true
```

这样我们可以

```js
// 方便起见，将 toString 方法复制到一个变量中
let objectToString = Object.prototype.toString;

// 它是什么类型的？
let arr = [];

console.log(objectToString.call(arr));
```

至于为什么我们需要使用`call` 来绑定 this，是因为 **`toString` 的算法会检查 `this`，并返回相应的结果**

### 相关代码

```js
// 判断是否是数组
const arr = ["hello", "yayxs"];
// console.log(arr.toString()) hello,yayxs
// 常用于判断浏览器内置对象
let res1 = Object.prototype.toString.call(arr);
console.log(res1); // [object Array]

/**
 * String
 * Number
 * Symbol
 * Null
 * Undefi
 * Func
 * Obj
 */
// 定义一个函数用来判断数据类型

function isWhatType(target) {
  return Object.prototype.toString.call(target);
}

let targets = [
  "yayxs",
  18,
  Symbol(18),
  null,
  undefined,
  function() {},
  {
    name: "yayxs",
  },
];

console.log(targets);

const res = targets.map((target) => {
  return isWhatType(target);
});

console.log(res);
/**
 * [
 *'[object String]',
 *'[object Number]',
 *'[object Symbol]',
 *'[object Null]',
 *'[object Undefined]',
 *'[object Function]',
 *'[object Object]'
 *]
 */
// 第二种方式通过判断对象的原型链中能不能找到
let res3 = [] instanceof Array;
console.log(res3); // true
```

所以，如果我们想要获取内建对象的类型，并希望把该信息以字符串的形式返回，而不只是检查类型的话，我们可以用 `{}.toString.call` 替代 `instanceof`。

## 数组里面有 10 万个数据，取第一个元素和第 10 万个元素的时间相差多少

## 谈谈数组中的`push`方法

### 数组中的`length`属性

准确来说，它实际上不是数组里元素的个数，而是最大的数字索引值加一。

```js
let voidArr = [];

voidArr[200] = "200";

console.log(voidArr.length); // 201
```

### 数组的`push`

- [mdn 关于数组 push](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

> `push` 方法具有通用性。该方法和 [`call()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call) 或 [`apply()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) 一起使用时，可应用在类似数组的对象上。`push` 方法根据 `length` 属性来决定从哪里开始插入给定的值。如果 `length` 不能被转成一个数值，则插入的元素索引为 0，包括 `length` 不存在时。当 `length` 不存在时，将会创建它。

> 唯一的原生类数组（array-like）对象是 [`Strings`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)，尽管如此，它们并不适用该方法，因为字符串是不可改变的。

**大白话**

其实 push 的时候会首先查询数组（伪数组）的 length 属性，接着在数组的最后一个添加上新的元素即 arr[length]

```js
var testObj = {
  "2": 3,
  "3": 4,
  length: 2,
  push: Array.prototype.push,
};

testObj.push(1);
console.log(testObj); //// {2: 1, 3: 4, length: 3, push: ƒ}
testObj.push(2);
console.log(testObj); //{2: 1, 3: 2, length: 4, push: ƒ}
```

- 第一点就是每次 push 后 length 会加 1

![00.png](https://i.loli.net/2020/04/20/FthL2egVXTCy6vk.png)

### 'splice': Array.prototype.splice

- [在对象上加 splice](https://github.com/ChromeDevTools/devtools-frontend/blob/master/front_end/event_listeners/EventListenersUtils.js#L330)

```js
/**
 * @param {?Object} obj
 * @return {boolean}
 */
function isArrayLike(obj) {
  if (!obj || typeof obj !== "object") {
    return false;
  }
  try {
    if (typeof obj.splice === "function") {
      const len = obj.length;
      return (
        typeof len === "number" && len >>> 0 === len && (len > 0 || 1 / len > 0)
      );
    }
  } catch (e) {}
  return false;
}
```

**为什么对象添加了 splice 属性后并没有调用就会变成类数组对象这个问题，这是控制台中 DevTools 猜测类数组的一个方式**

- 存在且是对象
- 对象上的`splice` 属性是函数类型
- 对象上有 `length` 属性且为正整数
