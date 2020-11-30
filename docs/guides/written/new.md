---
title: 手写实现New操作符
---

# 手写实现 JavaScript 中的 New 操作符

## 延伸的面试题

根据`new操作符`相关的知识点一般会 延伸出以下的**面试题** ，面试官你是否有很多问号

- 问题一：new 之后都做了些什么？？
- 问题二：能否手写 new 操作符原理？？
- 问题三：通过 new 的方式创建对象和通过字面量创建有什么区别

[mdn 关于 new 运算符关键字的描述](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new)

> 1.  创建一个空的简单 JavaScript 对象（即`{}`）；
> 2.  链接该对象（即设置该对象的构造函数）到另一个对象 ；
> 3.  将步骤 1 新创建的对象作为`this`的上下文 ；
> 4.  如果该函数没有返回对象，则返回`this`。

以上 4 条是`MDN` 上关于 new 操作符（或者说关键字）的面试，简单的来体验下利用构造函数来`new` 一个对象

```js
function Person(name, age) {
  console.log("this", this);
  this.name = name;
  this.age = age;
}
// 然后在**构造函数添加原型方法**
Person.prototype.height = 180;
Person.prototype.sayName = function() {
  console.log(this.name);
};
let p = new Person("yayxs", 20);
console.log(p.name); // yayxs
console.log(p.age);
20;
p.sayName(); // yayxs
console.log(p.__proto__ === Person.prototype); // 对象p（实例）的原型属性指向构造函数的原型，
```

既然我们通过自定义，其使用的方式大体跟`new` 是一样的。

```js
// ------ 使用new的时候

const p = myNew Person('yayxs',20) // 其返回的结果是一个对象

// ---------
```

## 第一版的 myNew

大体思路是声明一个对象，取出当前的构造函数，以及参数，让新对象的原型属性指向构造函数的原型，然后调用构造函数，传入对象的参数

```js
function myNew() {
  let obj = new Object(),
    [constructor, ...args] = [...arguments];
  obj.__proto__ = constructor.prototype;

  constructor.apply(obj, args);
  return obj;
}
```
## 第二版的myNew

经过上文的简单案例我们可以得知，

- `new` 一个构造函数得到一个对象，它的原型属性（也就是** proto **）与该构造函数的原型是全等

- `new` 通过构造函数 `Persion` 创建出来的实例可以访问到构造函数中的属性,就像这样

  ```js
  console.log(xiaoMing.name); // 小明
  ```

- 言简意赅：new 出来的实例对象通过原型链和构造函数联系起来

**构造函数说白了也是一个函数，那是函数就可以有返回值**

```js
function Person(name) {
  this.name = name;
  //   return 1; // 返回内部新创建的对象
  //   return "1"; // 返回内部新创建的对象
  // return null; // 返回内部新创建的对象
  //   return undefined; // 返回内部新创建的对象
  //   return {}; // {} // 直接返回
  return function() {}; // 直接返回
  return [1]; // [1] // 直接返回
}
let p = new Person("李四");
console.log(p);
```

有了给构造函数返回一个值得想法，那就通过不同的`数据类型` 进行测试得出结论

- 不同的数据类型返回的效果是不一样的，像数字 1 字符串”1“ ，返回的依然是内部创建的对象
- **那如果返回一个对象（{}）或者说数组（[]）** 都会直接返回回去

#### 小结

也就是说，构造函数一般不需要`return`

- 返回一般的数据类型吧，不起作用
- 返回对象吧， new 的意义又何在呢

```js

function myNew(){
  let obj = new Object(),
  [constructor,...args] =  [...arguments]
   obj.__proto__ = constructor.prototype;

  let res =  constructor.apply(obj,args)
  return =  typeof res === 'object' ? res : obj;
}

```

## 手写一个自己的 myNew 小结

如果自己实现一个 new 的话，首先要满足它的几点效果

1. 一个构造函数会返回一个对象，那函数里就应该有对象
   ```js
   let obj = {};
   ```
2. 并将其`__proto__`属性指向构造函数的`prototype`属性

   ```js
   obj.__proto__ = constructor.prototype;
   ```

3. 调用构造函数，绑定 this
   ```js
   constructor.apply(obj, args);
   ```
4. 返回原始值需要忽略，返回对象需要正常处理

   ```js
   res instanceof Object ? res : obj;
   ```


## 箭头函数使用`new`

```js
var Foo = () => {};
var foo = new Foo(); // TypeError: Foo is not a constructor
```

- 不可以当作构造函数，也就是说，不可以使用`new`命令，否则会抛出一个错误

**`this`指向的固定化，并不是因为箭头函数内部有绑定`this`的机制，实际原因是箭头函数根本没有自己的`this`，导致内部的`this`就是外层代码块的`this`。正是因为它没有`this`，所以也就不能用作构造函数。**
