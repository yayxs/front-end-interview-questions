---
title: ES6中的类
---

> 基本的用法

```js
class User {
  constructor(name) {
    console.log(name);
    this.name = name;
  }
  sayHi(){
    console.log(this)
  }
}

const u = new User('vast');
u.sayHi()

```

`类` 实际上是一种函数`console.log(User)`

```js
console.log(typeof User) // function
```

