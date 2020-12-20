---
title: 创建对象的方式
---

显式地创建 Object 的实例有两种方式。第一种是使用 new 操作符和 Object 构造函数,新对象通过使用 new 操作符后跟一个构造函数（constructor）来创建。
```js
var myObj = new Object();
myObj.key = value;
```
构造函数就是用来创建新对象的函数




```js
let person = new Object();
person.name = "Nicholas";
person.age = 29;
```
对象的文字语法大概是这样：
```js
var myObj = {
key: value
// ...
};

```

## Object.create

1. 创建一个对象`myObject` 并把这个对象的 `[[Prototype]]` 关联到指定的对象,
利用给定的 proto 作为 [[Prototype]] 和可选的属性描述来创建一个空对象
```js
const animal = {
  eats:true
}

const rabbit = Object.create(animal)
```