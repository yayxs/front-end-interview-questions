[TOC]

## 前言

这次分享的前端相关的小知识点：整体分为**六**几大类

- 前端浏览器相关

> Q1:   **浏览器到底是怎么渲染的** ？ **映射为前端常见的面试题是：当用户心情愉悦的打开浏览器时（输入URL） 发生了什么**

----



- 框架-Vue相关

> Q1:  **在Vue框架中，为什么尽量不要修改props**

> Q2: **如果不小心更改了，vue是怎么做的**

> Q3: **vue的双向绑定和vuex是否冲突**

> Q4: **vue的父组件和子组件的生命周期钩子执行的顺序**

---



- 原生JavaScript相关

> Q1:**使用sort() 对数组进行排序 - 【3,15,8,29,102,22】**

> Q2: **输出代码看结果** **为什么**

```js
var obj = {
    '2': 3,
    '3': 4,
    'length': 2,
    'splice': Array.prototype.splice,
    'push': Array.prototype.push
}
obj.push(1)
obj.push(2)
console.log(obj)


```

-----



- ES6新语法特性 - 箭头函数

> Q1：**箭头函数与普通函数（function）的区别是什么？**
>
> Q2: **构造函数（function）可以使用 new 生成实例，那么箭头函数可以吗？为什么**



----



- API性能

> Q1:**`a.b.c.d` 和 `a['b']['c']['d']`，哪个性能更高？**

> Q2:**数组里面有10万个数据，取第一个元素和第10万个元素的时间相差多少**

----



- 数据结构算法相关

> Q1: **已知数据格式，实现一个函数 fn 找出链条中所有的父级 id**



## 准备

- vue 的源码

```js
yarn add vue
```



- 一个测试小项目

## 00-已知数据格式，实现一个函数 fn 找出链条中所有的父级 id

![](https://raw.githubusercontent.com/yayxs/Pics/master/code.png)

> 有两种数据结构类似于数组， 

> 但在添加和删除元素时更为可控。它们就是栈和队列

### 栈 LIFO

**栈是一种遵从后进先出（LIFO）原则的有序集合。新添加的或待删除的元素都保存在栈的同一端，称作栈顶，另一端就叫栈底。在栈里，新元素都靠近栈顶，旧元素都接近栈底**

![](https://raw.githubusercontent.com/yayxs/Pics/master/Snipaste_2020-04-18_12-09-07.png)

- push(element(s))：添加一个（或几个）新元素到栈顶。 

- pop()：移除栈顶的元素，同时返回被移除的元素。 

- peek()：返回栈顶的元素，不对栈做任何修改（这个方法不会移除栈顶的 

元素，仅仅返回它）。 

- isEmpty()：如果栈里没有任何元素就返回true，否则返回false。 

- clear()：移除栈里的所有元素。 

- size()：返回栈里的元素个数。这个方法和数组的length属性很类似。

### 队列 FIFO

![](https://raw.githubusercontent.com/yayxs/Pics/master/Snipaste_2020-04-18_11-59-03.png)

- enqueue(element(s))：向队列尾部添加一个（或多个）新的项
- dequeue()：移除队列的第一（即排在队列最前面的）项，并返回被移除的元素
- front()：返回队列中第一个元素——最先被添加，也将是最先被移除的 元素。队列不做任何变动（不移除元素，只返回元素信息——与Stack类的 peek方法非常类似）
- isEmpty()：如果队列中不包含任何元素，返回true，否则返回false
- size()：返回队列包含的元素个数，与数组的length属性类似

### 广度优先搜索BFS

**广度优先搜索算法会从指定的第一个顶点开始遍历图，先访问其所有的相邻 点，就像一次访问图的一层。**

![Snipaste_2020-04-18_12-40-22.png](https://i.loli.net/2020/04/20/gw6WR1MC3bSloZN.png)

### 深度优先搜索DFS

**深度优先搜索算法将会从第一个指定的顶点开始遍历图，沿着路径直到这条路 径最后一个顶点被访问了，接着原路回退并探索下一条路径。换句话说，它是先深 度后广度地访问顶点**

![Snipaste_2020-04-18_12-43-19.png](https://i.loli.net/2020/04/20/lFRpSfsUI3niqGD.png)

| 算法         | 数据结构 |                      | 描述                                                         |
| ------------ | -------- | -------------------- | ------------------------------------------------------------ |
| 深度优先搜索 | 栈       | Depth-First Search   | 通过将顶点存入栈中，顶点是沿着路径被探索,存在新的相邻的顶点访问 |
| 广度优先搜索 | 队列     | Breadth-First Search | 通过将顶点存入队列中 最先入队列的顶点先被探索                |

那么整体来说分为两种方案：

- 方案一就是利用栈这种数据结构

**基于递归的DFS，本身就是一种调用栈，在每个调用栈中，保存当前栈元素，再根据给定的value作对比决定继续递归查找还是中断递归。注意递归的中断逻辑，和每个调用栈元素的保存**

其过程简要来说是对每一个可能的分支路径深入到不能再深入为止，而且每个节点只能访问一次

```js
function dfs(target, id) {
  let stack = [...target];

  do {
    console.table(stack)
    const current = stack.pop();
  //  console.log(current)  // 2 21 212 211 1 12 121 11 112 111
    if (current.id === id) {
      return current;
    }
    if (current.children) {
      let nextNode = current.children;
      let nextNodeAddPreId = nextNode.map((item) => ({
        ...item,
        containsThePreviousLevelId: `${
          current.containsThePreviousLevelId || current.id
        } ${item.id}`,
      }));
      // console.log(...nextNodeAddPreId)
      stack.push(...nextNodeAddPreId);
     
    }
  } while (stack.length);
}
```



- 方案二就是利用队列这种数据结构







## 01-输出以下代码执行的结果并解释为什么

```js
var obj = {
    '2': 3,
    '3': 4,
    'length': 2,
    'splice': Array.prototype.splice,
    'push': Array.prototype.push
}
obj.push(1)
obj.push(2)
console.log(obj)
```

### 类（伪）数组（arraylike）

- 就是像数组的对象（某些对象看起来像但不是）

- **通过索引属性访问元素**

- **拥有 length** 属性的对象

- underscore 中的定义

  ```js
  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  var getLength = property('length');
  var isArrayLike = function(collection) {
    var length = getLength(collection);
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX; // 其中 JavaScript 中能精确表示的最大数字
  };
  ```

- **没有数组的方法**（push forEach）

```js
arrayLike.push('sex') // 01.js:20 Uncaught TypeError: arrayLike.push is not a function
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

#### 转为真正的数组

```js
Array.from(arrayLike); 
```

### 数组的push

- [mdn关于数组push](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

>`push` 方法具有通用性。该方法和 [`call()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call) 或 [`apply()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) 一起使用时，可应用在类似数组的对象上。`push` 方法根据 `length` 属性来决定从哪里开始插入给定的值。如果 `length` 不能被转成一个数值，则插入的元素索引为 0，包括 `length` 不存在时。当 `length` 不存在时，将会创建它。

> 唯一的原生类数组（array-like）对象是 [`Strings`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)，尽管如此，它们并不适用该方法，因为字符串是不可改变的。

**大白话**

其实push的时候会首先查询数组（伪数组）的 length 属性，接着在数组的最后一个添加上新的元素即 arr[length]

```js
var testObj = {
  "2": 3,
  "3": 4,
  length: 2,
  push: Array.prototype.push,
};


testObj.push(1) 
console.log(testObj) //// {2: 1, 3: 4, length: 3, push: ƒ}
testObj.push(2)
console.log(testObj) //{2: 1, 3: 2, length: 4, push: ƒ}
```

- 第一点就是每次 push  后 length 会加1

![00.png](https://i.loli.net/2020/04/20/FthL2egVXTCy6vk.png)

### 'splice': Array.prototype.splice



- [在对象上加splice](https://github.com/ChromeDevTools/devtools-frontend/blob/master/front_end/event_listeners/EventListenersUtils.js#L330)

```js
 /**
     * @param {?Object} obj
     * @return {boolean}
     */
    function isArrayLike(obj) {
      if (!obj || typeof obj !== 'object') {
        return false;
      }
      try {
        if (typeof obj.splice === 'function') {
          const len = obj.length;
          return typeof len === 'number' && (len >>> 0 === len && (len > 0 || 1 / len > 0));
        }
      } catch (e) {
      }
      return false;
    }
```

**为什么对象添加了splice属性后并没有调用就会变成类数组对象这个问题，这是控制台中 DevTools 猜测类数组的一个方式**

- 存在且是对象
- 对象上的`splice` 属性是函数类型
- 对象上有 `length` 属性且为正整数



## 02-使用sort() 对数组进行排序 - 【3,15,8,29,102,22】

> [mdn 上的sort](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

**`sort()` 方法用[原地算法](https://en.wikipedia.org/wiki/In-place_algorithm)对数组的元素进行排序，并返回数组。默认排序顺序是在将元素转换为字符串，然后比较它们的UTF-16代码单元值序列时构建的**

- 原地算法[原地算法](https://en.wikipedia.org/wiki/In-place_algorithm)
- 将元素转为字符串
- UTF-16

![00.png](https://i.loli.net/2020/04/20/E258fou79vS3iVa.png)

采用的`utf-16` ,常见的字符`数字` `英语大小写` `汉字`

```js
let arrs = ['你好啊','HELLO','hello',666]
arrs.sort()
console.log(arrs)  // [666, "HELLO", "hello", "你好啊"]
```

**总结**

数字》英语大写》英语小写》汉字

````js
	/**
     * Sorts an array.
     * @param compareFn Function used to determine the order of the elements. It is expected to return
     * a negative value if first argument is less than second argument, zero if they're equal and a positive
     * value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
     * ```ts
     * [11,2,22,1].sort((a, b) => a - b)
     * ```
     */
    sort(compareFn?: (a: T, b: T) => number): this;
````



- 阮老师 [字符编码](http://www.ruanyifeng.com/blog/2007/10/ascii_unicode_and_utf-8.html)

- 步骤

  - 转为字符串 数字>英语大写>英语小写>汉字

  ![01.png](https://i.loli.net/2020/04/20/TwdWu5JmsyOSniC.png)

  - 对比第一个字符===>15 102 29 22 3 8
  - 对比第二个字符===>102 15 22 29 3 8
  - 对比第三个字符===>102 15 22 29 3 8

- 案例

```js
arr.sort((x, y) => {
  console.log(`排序：${x}----${y}`);
});
```

```
排序：15----3
排序：8----15
排序：29----8
排序：102----29
排序：22----102
```

```js
arr.sort((x, y) => {
  console.log(`${x}-${y}=${x - y}`);
});
```

```
15-3=12
8-15=-7
29-8=21
102-29=73
22-102=-80
```

```js
arr.sort((x, y) => {
  console.log(`${x}-${y}=${x - y}`);
  return x - y;
});
console.log(arr);
```

```
15-3=12
8-15=-7
8-15=-7
8-3=5
29-8=21
29-15=14
102-15=87
102-29=73
22-15=7
22-102=-80
22-29=-7
[ 3, 8, 15, 22, 29, 102 ]
```

- 总结
  - 返回值小于 0 x 移动到 y 前 升序 return x-y
  - 返回值大于 0 x 移动到 y 后 降序 return y-x
  - 返回值等于 0 大多浏览器相对不变
- 结果：

> [ 102, 15, 22, 29, 3, 8 ]

## 03-关于箭头函数

>**Q5: 箭头函数与普通函数（function）的区别是什么？构造函数（function）可以使用 new 生成实例，那么箭头函数可以吗？为什么？**

- [mdn-箭头函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

- [阮老师es6-箭头函数]([https://es6.ruanyifeng.com/#docs/function#%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0](https://es6.ruanyifeng.com/#docs/function#箭头函数))

### 什么是箭头函数

- 语法简洁
- 没有自己的this
- **不能用作构造函数。**

```js
const agesArr = [12,13,7,8 ]

const res = agesArr.map(item=>`${item}岁`)
console.log(res) // [ '12岁', '13岁', '7岁', '8岁' ]
```

```js
const fn  = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;
const res1 = fn()
console.log(res1) // 6
```

### 优势

- 关于函数的参数默认值

  - 之前

  ```js
  function log(x, y) {
    y = y || 'World';
    console.log(x, y);
  }
  
  if (typeof y === 'undefined') {
    y = 'World';
  }
  ```

  - 现在

  ```js
  function Point(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
  ```

  

- 写起来更短
- 没有单独的`this`
- 箭头函数使得表达更加简洁。

### 没有箭头函数

**函数是根据如何被调用来定义这个函数的`this`**

- 如果是该函数是一个构造函数，this指针指向一个新的对象
- 在严格模式下的函数调用下，this指向undefined

```js
 function Person() {
        // Person() 构造函数定义 `this`作为它自己的实例.
        this.age = 0;

        setInterval(function growUp() {
          console.log(this);
          // 在非严格模式, growUp()函数定义 `this`作为全局对象,
          // 与在 Person()构造函数中定义的 `this`并不相同.
            // 此时的this是window 对象（浏览器环境）
          this.age++;
        }, 1000);
      }
```

### 用箭头函数

```js
function Person(){
  this.age = 0;

  setInterval(() => {
    this.age++; // |this| 正确地指向 p 实例
  }, 1000);
}

var p = new Person();
```

**箭头函数不会创建自己的`this,它只会从自己的作用域链的上一层继承this`**

#### 普通函数与箭头函数有什么不同

- 函数体内的 this 对象，就是定义时所在的对象，而不是使用时所在的对象

```js
let obj = {
  name: "张三",
  sayHi() {
    console.log(this); // obj 这个对象
    function sayName() { 
      console.log(this); // 是一个函数  this 指向window
    }
    sayName()
    const foo = ()=>{
      console.log(this) // obj 这个对象
    }
    foo()
  },
};
console.log(obj.name);
obj.sayHi();

```

- ES6 引入 rest 参数（形式为`...变量名`），用于获取函数的多余参数，这样就不需要使用`arguments`对象了。rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。

```js
// arguments变量的写法 类似数组的对象
function sortNumbers() {
  return Array.prototype.slice.call(arguments).sort();
}

// rest参数的写法 真正的数组
const sortNumbers = (...numbers) => numbers.sort();
```

- 不可以使用`yield`命令，因此箭头函数不能用作 Generator 函数。



### JavaScript中的new操作符

#### 面试题

根据`new操作符`相关的知识点一般会 延伸出以下的**面试题** ，面试官你是否有很多问号

- 问题一：new 之后都做了些什么？？
- 问题二：能否手写new操作符原理？？

[mdn关于new运算符关键字的描述](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new)

>1. 创建一个空的简单JavaScript对象（即`{}`）；
>2. 链接该对象（即设置该对象的构造函数）到另一个对象 ；
>3. 将步骤1新创建的对象作为`this`的上下文 ；
>4. 如果该函数没有返回对象，则返回`this`。

以上4条是`MDN` 上关于new 操作符（或者说关键字）的面试，简单的来体验下利用构造函数来`new` 一个对象

```js
var self;

function Person(name) {
  console.log(this);
  self = this;
  this.name = name;
}
let p = new Person("张三");
console.log(p);
console.log(self === p); // true 构造函数中的this 绑定在了p这个对象上
console.log(p.__proto__ === Person.prototype); // 对象p的原型属性指向构造函数的原型，这样也就保证了实例能够访问在构造函数原型中定义的属性和方法。
```

然后在**构造函数添加原型方法**

```js
function Persion(name){
    this.name = name
}
console.log(Persion.prototype)
Persion.prototype.sayHello = function(){
    console.log(this) // 指向构造出的对象
    console.log(this.name) // 小明
}

let xiaoMing = new Persion('小明')
xiaoMing.sayHello()
```

经过上文的简单案例我们可以得知，

- `new` 一个构造函数得到一个对象，它的原型属性（也就是__ proto __）与该构造函数的原型是全等

- ` new` 通过构造函数 `Persion` 创建出来的实例可以访问到构造函数中的属性,就行这样

  ```js
  console.log(xiaoMing.name) // 小明
  ```

- 言简意赅：new出来的实例对象通过原型链和构造函数联系起来

**构造函数说白了也是一个函数，那是函数就可以有返回值**

```js
function Person(name) {
  this.name = name;
  //   return 1; // 返回内部新创建的对象
  //   return "1"; // 返回内部新创建的对象
  // return null; // 返回内部新创建的对象
  //   return undefined; // 返回内部新创建的对象
  //   return {}; // {} // 直接返回
  return function () {}; // 直接返回
  return [1]; // [1] // 直接返回
}
let p = new Person("李四");
console.log(p);
```

有了给构造函数返回一个值得想法，那就通过不同的`数据类型` 进行测试得出结论

- 不同的数据类型返回的效果是不一样的，像数字1 字符串”1“ ，返回的依然是内部创建的对象
- **那如果返回一个对象（{}）或者说数组（【】）** 都会直接返回回去

#### 小结

也就是说，构造函数一般不需要`return ` 

- 返回一般的数据类型吧，不起作用
- 返回对象吧， new 的意义又何在呢

#### 手写一个自己的myNew

如果自己实现一个new 的话，首先要满足它的几点效果

1. 一个构造函数会返回一个对象，那函数里就应该有对象

   ```js
   let obj ={}
   ```

2. 并将其`__proto__`属性指向构造函数的`prototype`属性

   ```js
   obj.__proto__ = constructor.prototype;
   ```

3. 调用构造函数，绑定this

   ```js
   constructor.apply(obj, args)
   ```

4. 返回原始值需要忽略，返回对象需要正常处理

   ```js
   res instanceof Object ? res : obj
   ```

#### 测试成果

```

function myNew() {
  let [constructor, ...args] = [...arguments];
  let obj = {};
  obj.__proto__ = constructor.prototype;

  let res = constructor.apply(obj, args);
  return res instanceof Object ? res : obj;
}

function Person(name) {
  this.name = name;
//   return {};
}

Person.prototype.sayHi = function () {
  console.log(`原型方法中的函数--${this.name}`);
};
let p1 = myNew(Person, "测试");
// console.log(p1)
p1.sayHi();
console.log(p1.name);
```





### 箭头函数使用`new`

```js
 var Foo = () => {};
      var foo = new Foo(); // TypeError: Foo is not a constructor
```

- 不可以当作构造函数，也就是说，不可以使用`new`命令，否则会抛出一个错误

**`this`指向的固定化，并不是因为箭头函数内部有绑定`this`的机制，实际原因是箭头函数根本没有自己的`this`，导致内部的`this`就是外层代码块的`this`。正是因为它没有`this`，所以也就不能用作构造函数。**







----

## 04-vue 生命周期进阶

### 基本流程

![](https://cn.vuejs.org/images/lifecycle.png)



- new vue 创建实例
- 初始化事件 生命周期
- **beforeCreate**
- 初始化 注入校验
- **created**
- 是否指定 el
  - 否： 调用 vm.$mount(el)
  - 是：是否指定template
    - 否 将el 外部的html 作为template 编译
    - 是 将 template 编译到render
- **beforeMount**
- 创建vm.$el 并用其替换el
- **mounted**
- 挂载完毕
- 当data 修改的时候：
  - **beforeUpdate**
  - **updated**
- 调用vm.$destroy()
- **beforeDestroy**
- 解除绑定 销毁子组件 事件监听
- 销毁完毕
- **destroyed**

### 加载渲染的过程

![](https://raw.githubusercontent.com/yayxs/Pics/master/20200421213852.png)

**父组件挂载完毕肯定是等里面的子组件都挂载完毕后才算父组件挂载完毕了，所以父组件的mounted在最后。**

### 子组件更新过程

子组件更新过程(子组件更新影响到父组件的情况)：`父beforeUpdate -> 子beforeUpdate->子updated -> 父updted`
子组件更新过程(子组件更新不影响父组件的情况)：`子beforeUpdate -> 子updated`

### 父组件更新过程

![20200421221422](https://raw.githubusercontent.com/yayxs/Pics/master/img/20200421221422.png)

**eactivated函数的触发时间是在视图更新时触发。因为当视图更新时才能知道keep-alive组件被停用了。**

父组件更新过程(父组件影响子组件的情况)：`父beforeUpdate -> 子beforeUpdate->子updated -> 父updted`
父组件更新过程(父组件不影响子组件的情况)：`父beforeUpdate -> 父updated`

### 销毁过程

父beforeDestroy->子beforeDestroy->子destroyed->父destroyed

#### 小补充

| deactivated | keep-alive 组件停用时调用。 |
| ----------- | --------------------------- |
| activated   | keep-alive 组件激活时调用。 |

### 总结

Vue父子组件生命周期钩子的执行顺序遵循：从外到内，然后再从内到外，不管嵌套几层深，也遵循这个规律


## 05-双向绑定和 vuex 是否冲突

```js
 const store = new Vuex.Store({
        state: {
          obj: {
            message: "hello",
          },
        },
        mutations: {
          increment(state) {},
        },
      });
      var vm = new Vue({
        el: "#app",
        store,
        data() {
          return {};
        },
        computed: {
          message() {
            return this.$store.state.obj.message;
          },

          //   ...mapState({
          //     message: (state) => state.obj.message,
          //   }),
        },
        methods: {
          updateMessage(e) {
            this.$store.commit("updateMessage", e.target.value);
          },
        },
      });
```

>
>
>vue.js:634 [Vue warn]: Computed property "message" was assigned to but it has no setter.
>
>(found in <Anonymous>)

- [参考vue的文档](https://vuex.vuejs.org/zh/guide/forms.html)

## 06-js中的数组

### 前言

数组、链表、栈、队列都是线性表，它表示的结构都是一段线性的结构，与之对应的就是非线性表，例如树、图、堆等，它表示的结构都非线性。

### 思考

- JavaScript 中，数组为什么可以保存不同类型？
- JavaScript 中，数组是如何存储的喃？



### 什么 是数组

> 数组（英语：Array），是由相同类型的元素（element）的集合所组成的数据结构，分配一块连续的内存来存储.

![20200426202840](https://raw.githubusercontent.com/yayxs/Pics/master/img/20200426202840.png)

**以上是js数组在内存中大致位置** ，或者

> Chrome 浏览器JS引擎 V8中，数组有两种存储模式，一种是类似C语言中的线性结构存储（索引值连续，且都是正整数的情况下），一种是采用Hash结构存储（索引值为负数，数组稀疏，间隔比较大）

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

意思是说，我们可以看到 `JSArray` 是继承自 `JSObject` 的，所以在 JavaScript 中，数组可以是一个特殊的对象，内部也是以 key-value 形式存储数据，所以 JavaScript 中的数组可以存放不同类型的值

#### 数组的优点

- 随机访问：可以通过下标随机访问数组中的任意位置上的数据

**根据下标随机访问的时间复杂度为 O(1)**

### 数组特性

- 数组插入

我们已经知道数组是一段连续储存的内存，当我们要将新元素插入到数组k的位置时呢?这个时候需要将k索引处之后的所有元素往后挪一位,并将k索引的位置插入新元素.


![20200426203256](https://raw.githubusercontent.com/yayxs/Pics/master/img/20200426203256.png)
- 删除

删除操作其实与插入很类似,同样我要删除数组之内的k索引位置的元素,我们就需要将其删除后,为了保持内存的连续性,需要将k之后的元素通通向前移动一位,这个情况的时间复杂度也是O(n).
- 查找

比如我们要查找一个数组中是否存在一个为2的元素,那么计算机需要如何操作呢?

如果是人的话,在少量数据的情况下我们自然可以一眼找到是否有2的元素,而计算机不是,计算机需要从索引0开始往下匹配,直到匹配到2的元素为止
- 读取

我们已经强调过数组的特点是拥有**相同的数据类型**和一块**连续的线性内存**,那么正是基于以上的特点,数组的读取性能非常的卓越,时间复杂度为O(1),相比于链表、二叉树等数据结构,它的优势非常明显.

那么数组是如何做到这么低的时间复杂度呢?

假设我们的数组内存起始地址为`start`,而元素类型的长度为`size`,数组索引为`i`,那么我们很容易得到这个数组内存地址的寻址公式:

```js
arr[i]_address = start + size * i
```

比如我们要读取`arr[3]`的值,那么只需要把`3`代入寻址公式,计算机就可以一步查询到对应的元素,因此数组读取的时间复杂度只有O(1).

#### 总结

JavaScript 中， `JSArray` 继承自 `JSObject` ，或者说它就是一个特殊的对象，内部是以 key-value 形式存储数据，所以 JavaScript 中的数组可以存放不同类型的值。它有两种存储方式，快数组与慢数组，初始化空数组时，使用快数组，快数组使用连续的内存空间，当数组长度达到最大时，`JSArray` 会进行动态的扩容，以存储更多的元素，相对慢数组，性能要好得多。当数组中 `hole` 太多时，会转变成慢数组，即以哈希表的方式（ key-value 的形式）存储数据，以节省内存空间。

```js

let res = new Array(100000).fill(10)
console.log(res)
var arr=new Array(100000).fill(100);
console.time('timer')
arr[0];
console.timeEnd('timer')

console.time('timer')
arr[100000-1];
console.timeEnd('timer')
```



#### 参考

性能测试

[https://jsperf.com/](https://jsperf.com/getelemperformance/1)

## 07-**`a.b.c.d` 和 `a['b']['c']['d']`，哪个性能更高？**

- 对于常见编译型语言（例如：Java）来说，编译步骤分为：词法分析->语法分析->语义检查->代码优化和字节码生成。

- 对于解释型语言（例如 JavaScript）来说，通过词法分析 -> 语法分析 -> 语法树，就可以开始解释执行了。
  - 词法分析是将字符流(char stream)转换为记号流(token stream)
  - 语法分析成 AST (Abstract Syntax Tree)
  - 预编译，当JavaScript引擎解析脚本时，它会在预编译期对所有声明的变量和函数进行处理！并且是先预声明变量，再预定义函数！
  - 解释执行，在执行过程中，JavaScript 引擎是严格按着作用域机制（scope）来执行的，并且 JavaScript 的变量和函数作用域是在定义时决定的，而不是执行时决定的。JavaScript 中的变量作用域在函数体内有效，无块作用域；

#### 参考阅读

- [JavaScript解释器](https://javascript.ruanyifeng.com/advanced/interpreter.html#toc1)
- [知乎专栏关于两者性能的简单比较](https://zhuanlan.zhihu.com/p/104763489)

## 08-性能优化

[TOC]

## 一、引言

> 当打开浏览器，然后在地址栏输入一个网址之后，然后enter,发生了什么？
> ![20200407214919](https://raw.githubusercontent.com/yayxs/Pics/master/img/20200407214919.png)

### 1. 关键词

- DNS解析
- 304缓存 
- TCP协议的三次挥手四次握手
- HTTP报文
- 重绘、回流
- 同异步编程
- event loop
- 宏任务、微任务
- 进程、线程
- 栈内存
- 堆内存
- 图片懒加载
- 压缩
- 性能优化
- 浏览器存储
- 缓存机制



## 二、进程与线程

### 1. 进程

**程序的一次执行, 它占有一片独有的内存空间.是操作系统执行的基本单元。**

- 一个进程中至少有一个运行的线程: 主线程,  进程启动后自动创建
- 一个进程中也可以同时运行多个线程, 我们会说程序是多线程运行的
- 一个进程内的数据可以供其中的多个线程直接共享，多个进程之间的数据是不能直接共享的

#### (1). 浏览器进程

- Browser进程:
  浏览器的主进程,负责浏览器界面的显示,和各个页面的管理,
    		浏览器中所有其他类型进程的祖先,负责其他进程的的创建和销毁
    		它有且只有一个!!!!!
- Renderer进程:
  网页渲染进程,负责页面的渲染,可以有多个
    		当然渲染进程的数量不一定等于你开打网页的个数
- 各种插件进程
- GPU进程	
      移动设备的浏览器可能不太一样:
    	    Android不支持插件,所以就没有插件进程
    		GPU演化成了Browser进程的一个线程
    		Renderer进程演化成了操作系统的一个服务进程,它仍然是独立的

### 2 .线程

**是进程内的一个独立执行单元,是CPU调度的最小单元。程序运行的基本单元
	线程池(thread pool): 保存多个线程对象的容器, 实现线程对象的反复利用**

> 由于jS是单线程的，就牵扯到事件循环、事件轮询、event loop （省略先）

## 三、HTTP 请求

### 1. DNS解析

### 2 .TCP协议的三次握手四次挥手

### 3 .HTTPS和HTTP

## 四、HTTP 响应

## 五、浏览器渲染原理

![20200407221502](https://raw.githubusercontent.com/yayxs/Pics/master/img/20200407221502.png)

### 1. 浏览器功能

- 网络
  - 浏览器通过网络模块来下载各式各样的资源，例如html文本；javascript代码；样式表；图片；音视频文件等。
  - 网络部分本质上十分重要，因为它耗时长，而且需要安全访问互联网上的资源。
- 资源管理
  - 从网络下载，或者本地获取到的资源需要有高效的机制来管理它们。
  - 例如如何避免重复下载，资源如何缓存等

- 网页浏览
  - 资源转为可视化

- 等等……

### 2. 浏览器内核

[参考阅读百度百科]([https://baike.baidu.com/item/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%86%85%E6%A0%B8](https://baike.baidu.com/item/浏览器内核))

>浏览器最重要或者说核心的部分是“Rendering Engine”，可大概译为“渲染引擎”，不过我们一般习惯将之称为“浏览器内核”。

**不同的浏览器内核对网页编写语法的解释也有不同，因此同一网页在不同的内核的浏览器里的渲染（显示）效果也可能不同，这也是网页编写者需要在不同内核的浏览器中测试网页显示效果的原因。**

| 内核分类           | 采用该内核的浏览器                                           |
| ------------------ | ------------------------------------------------------------ |
| Trident（**IE**）  | IE、傲游、世界之窗浏览器、Avant、腾讯TT、Sleipnir、GOSURF、GreenBrowser和KKman等。 |
| Gecko(**火狐**)    | [Mozilla Firefox](https://baike.baidu.com/item/Mozilla Firefox)、Mozilla SeaMonkey、waterfox（Firefox的64位开源版）、Iceweasel、Epiphany（早期版本）、Flock（早期版本）、K-Meleon。 |
| Webkit（**谷歌**） | Google Chrome、[360极速浏览器](https://baike.baidu.com/item/360极速浏览器)以及[搜狗高速浏览器](https://baike.baidu.com/item/搜狗高速浏览器)高速模式也使用Webkit作为内核 |
| Blink              |                                                              |
| Presto             |                                                              |



### 3. 浏览器渲染机制

- 浏览器采用流式布局模型（`Flow Based Layout`）
- 浏览器会把`HTML`解析成`DOM`，把`CSS`解析成`CSSOM`，`DOM`和`CSSOM`合并就产生了渲染树（`Render Tree`）。
- 有了`RenderTree`，我们就知道了所有节点的样式，然后计算他们在页面上的大小和位置，最后把节点绘制到页面上。
- 由于浏览器使用流式布局，对`Render Tree`的计算通常只需要遍历一次就可以完成，**但`table`及其内部元素除外，他们可能需要多次计算，通常要花3倍于同等元素的时间，这也是为什么要避免使用`table`布局的原因之一**



### 4. 浏览器渲染引擎

#### (1). 主要模块

- HTML解析器
  - 解释HTML文档的解析器
  - 作用：将HTML文本解释成DOM树
- CSS解析器
  - 它的作用是为DOM中的各个元素对象计算出样式信息
  - 为布局提供基础设施

- JavaScript引擎
  - 使用Javascript代码可以修改网页的内容，也能修改css的信息
  - javascript引擎能够解释javascript代码，并通过DOM接口和CSS树接口来修改网页内容和样式信息，从而改变渲染的结果
- 布局（layout）回流
  - 在DOM创建之后，Webkit需要将其中的元素对象同样式信息结合起来
  - 计算他们的大小位置等布局信息
  - 形成一个能表达这所有信息的内部表示模型
- 绘图模块
  - 使用图形库将布局计算后的各个网页的节点绘制成图像结果

#### (2). 渲染过程

[渲染树的构建、布局、及绘制中文](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-tree-construction?hl=zh-cn)

![20200407223600](https://raw.githubusercontent.com/yayxs/Pics/master/img/20200407223600.png)


1.  遇见 HTML 标记，调用HTML解析器解析为对应的 token （一个token就是一个标签文本的序列化）并构建 DOM 树（就是一块内存，保存着tokens，建立它们之间的关系）
2.  遇见 style/link 标记 调用解析器 处理 CSS 标记并构建 CSS样式树，即CSSOM
3.  遇见 script 标记 调用 javascript解析器 处理script标记，绑定事件、修改DOM树/CSS树 等
4.  将 DOM树 与 CSS树 合并成一个渲染树
5.  根据渲染树来渲染，以计算每个节点的几何信息（这一过程需要依赖图形库）
6.  将各个节点绘制到屏幕上。

### 5 .浏览器渲染阻塞

#### (1). CSS样式渲染阻塞

link引入的外部css**才能够产生阻塞**

#### (2). JS阻塞

## 六、性能优化

### 1. 减少HTTP的请求

### 2. 减少DOM的重绘与回流

#### (1). 重绘

由于节点的几何属性发生改变或者由于样式发生改变而不会影响布局的，称为重绘，例如`outline`, `visibility`, `color`、`background-color`等，重绘的代价是高昂的，因为浏览器必须验证DOM树上其他节点元素的可见性。

#### (2). 回流

回流是布局或者几何属性需要改变就称为回流。回流是影响浏览器性能的关键因素，因为其变化涉及到部分页面（或是整个页面）的布局更新。一个元素的回流可能会导致了其所有子元素以及DOM中紧随其后的节点、祖先节点元素的随后的回流。**有的大佬也习惯称之为重排**

##### 什么情况下浏览器会发生回流

- 添加或删除可见的DOM元素
- 元素的位置发生变化
- 元素的尺寸发生变化（包括外边距、内边框、边框大小、高度和宽度等）
- 内容发生变化，比如文本变化或图片被另一个不同尺寸的图片所替代。
- 页面一开始渲染的时候（这肯定避免不了）
- 浏览器的窗口尺寸变化（因为回流是根据视口的大小来计算元素的位置和大小的）

#### (3). 浏览器优化

现代浏览器大多都是通过队列机制来批量更新布局，浏览器会把修改操作放在队列中，至少一个浏览器刷新（即16.6ms）才会清空队列，但当你**获取布局信息的时候，队列中可能有会影响这些属性或方法返回值的操作，即使没有，浏览器也会强制清空队列，触发回流与重绘来确保返回正确的值**。

主要包括以下属性或方法：

- `offsetTop`、`offsetLeft`、`offsetWidth`、`offsetHeight`
- `scrollTop`、`scrollLeft`、`scrollWidth`、`scrollHeight`
- `clientTop`、`clientLeft`、`clientWidth`、`clientHeight`
- `width`、`height`
- `getComputedStyle()`
- `getBoundingClientRect()`

#### (4). 小结

**回流必定会发生重绘，重绘不一定会引发回流**    怎么最小化重绘重排？

1. ##### CSS

   - **使用 `transform` 替代 `top`**

   - **使用 `visibility` 替换 `display: none`** ，因为前者只会引起重绘，后者会引发回流（改变了布局

   - **避免使用`table`布局**，可能很小的一个小改动会造成整个 `table` 的重新布局。

   - **尽可能在`DOM`树的最末端改变`class`**，回流是不可避免的，但可以减少其影响。尽可能在DOM树的最末端改变class，可以限制了回流的范围，使其影响尽可能少的节点。

   - **避免设置多层内联样式**，CSS 选择符**从右往左**匹配查找，避免节点层级过多。

     ```
     <div>
       <a> <span></span> </a>
     </div>
     <style>
       span {
         color: red;
       }
       div > a > span {
         color: red;
       }
     </style>
     ```

     对于第一种设置样式的方式来说，浏览器只需要找到页面中所有的 `span` 标签然后设置颜色，但是对于第二种设置样式的方式来说，浏览器首先需要找到所有的 `span` 标签，然后找到 `span` 标签上的 `a` 标签，最后再去找到 `div` 标签，然后给符合这种条件的 `span` 标签设置颜色，这样的递归过程就很复杂。所以我们应该尽可能的避免写**过于具体**的 CSS 选择器，然后对于 HTML 来说也尽量少的添加无意义标签，保证**层级扁平**。

   - **将动画效果应用到`position`属性为`absolute`或`fixed`的元素上**，避免影响其他元素的布局，这样只是一个重绘，而不是回流，同时，控制动画速度可以选择 `requestAnimationFrame`，详见[探讨 requestAnimationFrame](https://github.com/LuNaHaiJiao/blog/issues/30)。

   - **避免使用`CSS`表达式**，可能会引发回流。

   - **将频繁重绘或者回流的节点设置为图层**，图层能够阻止该节点的渲染行为影响别的节点，例如`will-change`、`video`、`iframe`等标签，浏览器会自动将该节点变为图层。

   - **CSS3 硬件加速（GPU加速）**，使用css3硬件加速，可以让`transform`、`opacity`、`filters`这些动画不会引起回流重绘 。但是对于动画的其它属性，比如`background-color`这些，还是会引起回流重绘的，不过它还是可以提升这些动画的性能。

2. ##### JavaScript

   - **避免频繁操作样式**，最好一次性重写`style`属性，或者将样式列表定义为`class`并一次性更改`class`属性。
   - **避免频繁操作`DOM`**，创建一个`documentFragment`，在它上面应用所有`DOM操作`，最后再把它添加到文档中。
   - **避免频繁读取会引发回流/重绘的属性**，如果确实需要多次使用，就用一个变量缓存起来。
   - **对具有复杂动画的元素使用绝对定位**，使它脱离文档流，否则会引起父元素及后续元素频繁回流。

## 八、参考阅读

- [你真的了解回流和重绘吗](https://github.com/chenjigeng/blog/issues/4)
- [性能优化相关参考](https://github.com/tianyucoder/0318_performance)

## 09 -props

## 了解Prop

### 基本用法
```html
<!-- 在 HTML 中是 kebab-case 的 -->
<blog-post post-title="hello!"></blog-post>
```
```js
Vue.component('blog-post', {
  // 在 JavaScript 中是 camelCase 的
  props: ['postTitle'],
  template: '<h3>{{ postTitle }}</h3>'
})
```

### 常见类型

#### 字符串数组的形式

```js
props: ['title', 'likes', 'isPublished', 'commentIds', 'author']
```

#### 对象的形式

```js
props: {
  title: String,
  likes: Number,
  isPublished: Boolean,
  commentIds: Array,
  author: Object,
  callback: Function,
  contactsPromise: Promise // or any other constructor
}
```
#### 汇总
整体来说可以分为`传递静态的值` 和`通过v-bind 传递动态的值`

 - 传递一个数字
 - 传递一个布尔值
 - 传入一个数组
 - 传入一个对象
 - 传入一个对象的所有的属性
```js

post: {
  id: 1,
  title: 'My Journey with Vue'
}
```
**以下两种方式是等价的**
```html
<blog-post v-bind="post"></blog-post>
```

```html
<blog-post
  v-bind:id="post.id"
  v-bind:title="post.title"
></blog-post>
```
 ## 在 Vue 中，子组件为何不可以修改父组件传递的 Prop ？

### 尝试修改会发生什么事情
首先创建一个文件来演示`props` 传值（父组件的数据传递给子组件）
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vue-prop</title>
  </head>
  <body>
    <div id="app">
      {{ message }}

      <hr />
      <ol>
        <!-- 创建一个 todo-item 组件的实例 -->
        <todo-item todo="学习"></todo-item>
      </ol>
    </div>

    <script src="./vue.js"></script>
    <script>
      // 组件本质上是一个拥有预定义选项的一个 Vue 实例
      // 注册一个TODO组件
      Vue.component("todo-item", {
        template: `
        <div>
        <li>{{todo}}</li>
        <button @click = "changeProps">尝试改变父组件传来的prop</button></div>`,
        props: ["todo"],
        methods: {
          changeProps() {
            console.log(`子组件的按钮触发`);
            this.todo = "玩耍";
          }
        }
      });
      var vm = new Vue({
        el: "#app",
        data() {
          return {
            message: "hello"
          };
        }
      });
    </script>
  </body>
</html>

```

结果是什么，数据也是可以修改成功的，但是控制台会报一个警告

```
vue.js:634 [Vue warn]: Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: "todo"
```
![微信截图_20200407105110.png](https://user-gold-cdn.xitu.io/2020/4/7/171530821e76afc2?w=1547&h=367&f=png&s=42339)
### 单向数据流

>所有的 prop 都使得其父子 prop 之间形成了一个单向下行绑定：父级 prop 的更新会向下流动到子组件中，但是反过来则不行。这样会防止从子组件意外改变父级组件的状态，从而导致你的应用的数据流向难以理解。

>额外的，每次父级组件发生更新时，子组件中所有的 prop 都将会刷新为最新的值。这意味着你不应该在一个子组件内部改变 prop。如果你这样做了，Vue 会在浏览器的控制台中发出警告。

**简单的来说，vue这样处理从父组件来的数据，是为了方便监测数据的流动，如果一旦出现的错误，可以更为迅速的定位到错误的位置，**

### 什么情况下，我们会改变这个prop

```js
props: ['initialCounter'],
data: function () {
  return {
    counter: this.initialCounter
  }
}
```
 - **第一种情况**：这个 prop 用来传递一个初始值；这个子组件接下来希望将其作为一个本地的 prop 数据来使用。在这种情况下，最好定义一个本地的 data 属性并将这个 prop 用作其初始值。`借助data`

```js
props: ['size'],
computed: {
  normalizedSize: function () {
    return this.size.trim().toLowerCase()
  }
}
```

 - **第二种情况**这个 prop 以一种原始的值传入且需要进行转换。在这种情况下，最好使用这个 prop 的值来定义一个计算属性`借助计算属性`

## 如果修改了，Vue 是如何监控到属性的修改并给出警告的
这里我们可以去源码里找答案，毕竟真实的警告暗示是`vue`来给出的

```
src>core>instance>state.js // 源码的位置
```



```js

function initProps (vm: Component, propsOptions: Object) {
  const propsData = vm.$options.propsData || {}
  const props = vm._props = {}
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  // 缓存prop的keys 为了是将来更新的props可以使用数组进行迭代，而不是动态的对象枚举
  const keys = vm.$options._propKeys = []
  const isRoot = !vm.$parent
  // root instance props should be converted
  // 不是root根组件
  if (!isRoot) {
    toggleObserving(false)
  }
  for (const key in propsOptions) {
    keys.push(key)
    const value = validateProp(key, propsOptions, propsData, vm)
    /* istanbul ignore else */
    // 通过判断是否在开发环境
    if (process.env.NODE_ENV !== 'production') {
      const hyphenatedKey = hyphenate(key)
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          `"${hyphenatedKey}" is a reserved attribute and cannot be used as component prop.`,
          vm
        )
      }
      // 如果不是，说明此修改来自子组件，触发warning提示
      /**
       * 传入的第4个函数是自定义的set函数，当props被修改的时候就会触发第四个参数的函数
       */
      defineReactive(props, key, value, () => {
        if (!isRoot && !isUpdatingChildComponent) {
          warn(
            `Avoid mutating a prop directly since the value will be ` +
            `overwritten whenever the parent component re-renders. ` +
            `Instead, use a data or computed property based on the prop's ` +
            `value. Prop being mutated: "${key}"`,
            vm
          )
        }
      })
    } else {
      // 如果是开发环境，会在触发Set的时候判断是否此key是否处于updatingChildren中被修改
      defineReactive(props, key, value)
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, `_props`, key)
    }
  }
  toggleObserving(true)
}
```

```
src>core>observer>index.js
```

```js
/**
 * Define a reactive property on an Object.
 */
export function defineReactive (
  obj: Object,
  key: string,
  val: any,
  customSetter?: ?Function,
  shallow?: boolean
) {
  const dep = new Dep()

  const property = Object.getOwnPropertyDescriptor(obj, key)
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  const getter = property && property.get
  const setter = property && property.set
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key]
  }

  let childOb = !shallow && observe(val)
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      const value = getter ? getter.call(obj) : val
      if (Dep.target) {
        dep.depend()
        if (childOb) {
          childOb.dep.depend()
          if (Array.isArray(value)) {
            dependArray(value)
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      const value = getter ? getter.call(obj) : val
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (process.env.NODE_ENV !== 'production' && customSetter) {
        customSetter()
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) return
      if (setter) {
        setter.call(obj, newVal)
      } else {
        val = newVal
      }
      childOb = !shallow && observe(newVal)
      dep.notify()
    }
  })
}
```
## 思考
如果是传入的是引用的数据类型，控制台会警告嘛？

```html
 <todo-item todo="学习" :todolist="todolist"></todo-item>
```
```html
   var vm = new Vue({
        el: "#app",
        data() {
          return {
            message: "hello",
            todolist: [
              {
                id: "1",
                todo: "吃饭"
              }
            ]
          };
        }
      });
```

![02.png](https://user-gold-cdn.xitu.io/2020/4/7/171530821f7e6dd2?w=1536&h=282&f=png&s=35792)


## 推荐阅读
 - [vue官网props部分](https://cn.vuejs.org/v2/guide/components-props.html)

   