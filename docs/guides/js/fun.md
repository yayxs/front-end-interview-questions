---
title: 函数的参数以什么方式传递
---

JavaScript 变量是松散类型的,函数的参数是按值传递的，**不仅仅是基本数据类型还是引用数据类型都是按值传递的**

```js


function setName(o){
o.name='new name'
o=new Object()
o.name='new new name'}
let per = new Object()
setName(per)
console.log(per.name)
VM24381:7 new name
```