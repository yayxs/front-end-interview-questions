---
title: rest参数与arguments变量
---

### rest参数
Rest 参数必须放到参数列表的末尾
```js
function sum (a,b,...rest){
  let sum = 0
  for(let ele of rest){
    sum = sum +ele
  }
  console.log(sum)
}

sum(1,2,3,4)
```

### `arguments`

```js
function foo(...rest){
console.log(rest)
console.log(Array.isArray(rest))
}

function bar(){
  console.log(arguments)
  console.log(Array.isArray(arguments))
}

foo(1,2)
bar(3,4)
```
如果我们在箭头函数中访问 arguments，访问到的 arguments 并不属于箭头函数，而是属于箭头函数外部的“普通”函数。