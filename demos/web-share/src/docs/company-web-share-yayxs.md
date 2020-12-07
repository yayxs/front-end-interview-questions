[TOC]

## 前言





- 框架-Vue相关

> Q1:  

> Q2: **如果不小心更改了，vue是怎么做的**

> Q3: **vue的双向绑定和vuex是否冲突**


---



- 原生JavaScript相关

> Q1:****

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

> Q2:****

----





> Q1: **已知数据格式，实现一个函数 fn 找出链条中所有的父级 id**



## 准备

- vue 的源码

```js
yarn add vue
```



- 一个测试小项目

## 00-已知数据格式，实现一个函数 fn 找出链条中所有的父级 id

![](https://raw.githubusercontent.com/yayxs/Pics/master/code.png)





那么整体来说分为两种方案：


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

