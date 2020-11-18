---
title: 函数的参数以什么方式传递的
---
# 函数的参数以什么方式传递的

JavaScript 变量是松散类型的,函数的参数是按值传递的，**不仅仅是基本数据类型还是引用数据类型都是按值传递的**

下面看这个例子，参数是对象的形式

```js
function test(per) {
  per.name = "subs";
  per = {
    name: "yy",
    age: 20
  };
  return per;
}

const p1 = {
  name: "yayxs",
  age: 25
};
const p2 = test(p1); 

console.log(p1); // {name: "subs", age: 25}
console.log(p2); // {name: "yy", age: 20}

```