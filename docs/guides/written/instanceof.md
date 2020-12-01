---
title: 手写实现instanceof运算符
---
# 手写实现instanceOf

>instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。（object instanceof constructor）
```js
   function Person(name,age){
            this.name = name
            this.age = age
        }
        const p = new Person('yayxs','20')
        console.log(p instanceof Person); // true
        console.log(p instanceof Object); // true
```

>或者说一个对象是否属于某个特定的`class`,同时会考虑继承 

```js
  class PersonClass{}
        let pClass = new PersonClass()

        console.log(pClass instanceof PersonClass) // true
```