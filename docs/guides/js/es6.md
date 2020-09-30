---
title: es6 的新特性都有哪些？
---

## 模板字面量 JavaScript句法表达式

 - 模板字面量不是字符串，而是一种特殊的JavaScript句法表达式，只不过求值后得到的是字符串
 - 字符串插值通过在${}中使用一个JavaScript表达式实现
 - 模板字面量标签函数
### 模板字面量

```js
  let a = 1;
    b =2
    const foo = (strs,a,b,sum)=>{
      console.log(strs)
      console.log(a)
      console.log(b)
      console.log(sum)
      return 'foo'
    }

    let res = `${a}+${b}=${a+b}`
    let finRes = foo`${a}+${b}=${a+b}`
    console.log(res)
    console.log(finRes)
```

```js
(4) ["", "+", "=", "", raw: Array(4)]
index.html:14 1
index.html:15 2
index.html:16 3
index.html:22 1+2=3
index.html:23 foo
```