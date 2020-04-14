>**Q5: 箭头函数与普通函数（function）的区别是什么？构造函数（function）可以使用 new 生成实例，那么箭头函数可以吗？为什么？**

- [mdn-箭头函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

- [阮老师es6-箭头函数]([https://es6.ruanyifeng.com/#docs/function#%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0](https://es6.ruanyifeng.com/#docs/function#箭头函数))

#### 什么是箭头函数

- 语法简洁
- 没有自己的this
- **不能用作构造函数。**

```js
const agesArr = [12,13,7,8 ]

const res = agesArr.map(item=>`${item}岁`)
console.log(res) // [ '12岁', '13岁', '7岁', '8岁' ]
```

```js
const fn  = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;
const res1 = fn()
console.log(res1) // 6
```

#### 优势

- 写起来更短
- 没有单独的`this`
- 箭头函数使得表达更加简洁。

#### 没有箭头函数

**函数是根据如何被调用来定义这个函数的`this`**

- 如果是该函数是一个构造函数，this指针指向一个新的对象
- 在严格模式下的函数调用下，this指向undefined

```js

 function Person() {
        // Person() 构造函数定义 `this`作为它自己的实例.
        this.age = 0;

        setInterval(function growUp() {
          console.log(this);
          // 在非严格模式, growUp()函数定义 `this`作为全局对象,
          // 与在 Person()构造函数中定义的 `this`并不相同.
            // 此时的this是window 对象（浏览器环境）
          this.age++;
        }, 1000);
      }
```

#### 用箭头函数

```js
function Person(){
  this.age = 0;

  setInterval(() => {
    this.age++; // |this| 正确地指向 p 实例
  }, 1000);
}

var p = new Person();
```

**箭头函数不会创建自己的`this,它只会从自己的作用域链的上一层继承this`**

#### 箭头函数使用`new`

```js

 var Foo = () => {};
      var foo = new Foo(); // TypeError: Foo is not a constructor
```

- 不可以当作构造函数，也就是说，不可以使用`new`命令，否则会抛出一个错误



> 
>
> Q:数组里面有10万个数据，取第一个元素和第10万个元素的时间相差多少

- 时间复杂度：直接根据索引取值，时间复杂度o(1)
- 哈希表:根据`key` 查找哈希表的过程

- 哈希映射：数组存储不是连续的  哈希映射的关系