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

