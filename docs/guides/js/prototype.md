---
title: 谈谈你对原型的理解？原型链解决的是什么问题
---

> # 从对象的角度出发

## 原型

- 原型是一个被谁引用的对象

在 JavaScript 中，对象有一个特殊的隐藏属性 `[[Prototype]]`（如规范中所命名的），它要么为 `null`，要么就是对另一个对象的引用。该对象被称为“原型”。**（被引用的对象）**

## 原型继承

当我们从 `object` 中读取一个缺失的属性时，JavaScript 会自动从原型中获取该属性。在编程中，这种行为被称为“原型继承”

```js
const myObj = {
  name: 'i am a obj',
};
console.log(myObj)
console.log(myObj.name);
```

当访问对象的属性`name` 时，第一步是检查对象本身是否有这个属性，、

- 如果有的话就使用它
- 但是如果 a 不在`myObj`中，就需要使用对象的 [[Prototype]] 链了

## `[[Prototype]]`

- 每个对象都会有个属性
- 内部隐藏
- 设置这个属性
  - `__proto__`  可以是对象也可以是`null` 

```js
let animal = {
  eats: true,
};
let rabbit = {
  jumps: true,
};

console.log(rabbit.eats) // undefined

rabbit.__proto__ = animal
console.log(rabbit.eats) // true
```

**在这儿我们可以说 "`animal` 是 `rabbit` 的原型"，或者说 "`rabbit` 的原型是从 `animal` 继承而来的"。**

```
myObj.foo = 'bar'
```

- myObject 对象中包含名为 foo 的普通数据访问属性，这条赋值语句只会修改已有的属
  性值。
- 如果 foo 不是直接存在于 myObject 中，[[Prototype]] 链就会被遍历，类似 [[Get]] 操作。
  如果原型链上找不到 foo，foo 就会被直接添加到 myObject 上。

## `__proto__` vs `[[Prototype]]`

- `__proto__` **是** `[[Prototype]]` **的因历史原因而留下来的 getter/setter**

  ```js
  
  const animal = {
    eats:true
  }
  
  const rabbit = Object.create(animal,{
       jumps: {
      value: true
    }
      
  })
  ```

  

  - `Object.getPrototypeOf`

    ```js
    Object.getPrototypeOf(rabbit) === animal // true
    ```

    

  - `Object.setPrototypeOf`

    ```js
    Object.setPrototypeOf(rabbit, {}); // 将 rabbit 的原型修改为 {}
    ```

    

- [[Prototype]] 隐藏的属性

># 从函数的角度出发

```js
function Rabbit(name) {  this.name = name; }
// console.log(typeof Rabbit.prototype) object
```

当前的`Rabbit` 这个函数也是一个对象,对象就有属性，恰好有一个属性是 `prototype`

**new操作符会把构造函数的prototype这个属性值设置为新对象的[[Prototype]]**

## `F.prototype`

构造函数的 `"prototype"` 属性自古以来就起作用

```js
function Rabbit() {}

/* default prototype
Rabbit.prototype = { constructor: Rabbit };
*/
```

```js
function Rabbit() {}

console.log(Rabbit.prototype.constructor===Rabbit) // true

console.log(Rabbit.constructor===Rabbit) // false

```

## `constructor`

**……JavaScript 自身并不能确保正确的 `"constructor"` 函数值**

## 真题

```js
 // 1 声明构造函数A
        var A = function(){} 
        // 2 A的常规属性prototype 指向一个 {} 空对象
            // new 出来的对象就会使用这个空对象作为原型引用
        A.prototype = {}
        // 3 声明一个对象等价于 B = new Object()
        var B ={}
        // 4 constructor存在于函数的默认prototype属性中
        console.log(A.constructor)
        // 5 F.prototype = {constructor:F} 
            // 获取对象B的构造器
        console.log(B.constructor)
        // 6 a的原型引用是个空对象 a.__proto__ 本来是{constructor: ƒ} 现在变成{}
        var a = new A()
        A.prototype = {}
        // 7 再次new 出来一个对象
        var b = new A()
       // 8 构造器验证
       console.log(b.constructor) // Object()
       console.log(A.constructor) // Func()
       // 9 b的构造器指向 Function()
       b.constructor = A.constructor
       // 10 输出a的构造器
       console.log(a.constructor==A) // false 因为  A.prototype = {}置为空对象了  本来是A构造出来的
       // 11 输入 a b 的构造器
    
       console.log(a.constructor == b.constructor) // false
        console.log(a.constructor) // 对象了
        console.log(b.constructor) // 函数了  因为b.constructor = A.constructor

        console.log(a instanceof A) // false
        console.log(b instanceof A) // true
```







