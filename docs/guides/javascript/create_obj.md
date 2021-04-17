---
title: 创建对象的方式
---

# 创建对象的方式

## 构造函数的语法
第一种是使用 new 操作符和 Object 构造函数,新对象通过使用 new 操作符后跟一个构造函数（constructor）来创建。
```js
var myObj = new Object();
myObj.key = value;
```
```js
let person = new Object();
person.name = "Nicholas";
person.age = 29;
```

## 对象字面量的方式

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