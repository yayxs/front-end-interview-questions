---
title: 谈谈你对原型的理解？原型链解决的是什么问题
---

```js
const myObj = {
  name: 'i am a obj',
};
console.log(myObj)
console.log(myObj.name);
```

- 当访问对象的属性`name` 时，第一步是检查对象本身是否有这个属性，、
  - 如果有的话就使用它
  - 但是如果 a 不在`myObj`中，就需要使用对象的 [[Prototype]] 链了

```
myObj.foo = 'bar'
```

- myObject 对象中包含名为 foo 的普通数据访问属性，这条赋值语句只会修改已有的属
  性值。
- 如果 foo 不是直接存在于 myObject 中，[[Prototype]] 链就会被遍历，类似 [[Get]] 操作。
  如果原型链上找不到 foo，foo 就会被直接添加到 myObject 上。

