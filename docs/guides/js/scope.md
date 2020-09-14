### 谈谈作用域与作用域链的理解，如何理解?

面试的时候，面试官会问`JS中的作用域是什么` 要知道`作用域是什么` 我们需要先了解几个简单的概念

- 编译原理 执行的过程一般会有三个步骤
  ![](https://user-gold-cdn.xitu.io/2020/6/16/172bd8191abf433b?w=802&h=486&f=png&s=27546)

其次的话是`引擎` 查询变量的两种方式

- 一个是**LHS 查询**
- 一个是**RHS 查询**

也就是说当变量出现在赋值操作的左侧进行 `LHS` ；当出现在右侧时进行`RHS` 一上来就搞这些乱起八遭的英文缩写，啥意思

```javascript
console.log(a);
```

以上的代码就是想得到 `a` 的值，那就是——RHS

```javascript
a = 123;
```

以上的代码给`a` 赋值，那就是——LHS

那么说完查询的方式，跟作用域有什么用？其中从某种方式上来理解**作用域便是查找变量的一套规范化的规则**

那如果我查找的引用无法在当前的作用域内完成怎么办，比如说

```javascript
function foo(a) {
  console.log(a + b); // b取值，想得到b的值，那就是RHS 那么引用的查找在当前的 foo无法完成
}

var b = 123;
foo(456);
```

![](https://user-gold-cdn.xitu.io/2020/6/16/172bd9591dc641b6?w=464&h=411&f=png&s=9736)

整个的一块就像是一栋大楼，然后不停的勇敢的向上走，我们如上提及的那栋大楼便是**词法作用域**

- 一种是词法作用域
- 一种是动态作用域

那我们重点聊的是`词法` ，下面来看一段代码

![](https://user-gold-cdn.xitu.io/2020/6/16/172bda0752c43347?w=728&h=369&f=png&s=20385)

我们还不得不谈 `函数作用域` 以及 `块作用域`

- 生命每个函数都会自身创建一个笑脸

  对于内部的实现我们是可以隐藏的，比如

  ```javascript
  function doSomething(){
    ....balabala
  }
  ```

  谁也不知道函数里干了啥，巴拉巴拉

  当我们这样写的时候

  ```javascript
  (function foo() {
    console.log(`I LOVE MEINV`);
  })();
  ```

  我们社区给这种操作起了个骚气的名字`IIFE` 即为 **立即执行表达式**，在我们实际开发的时候是十分常见的

- 还有就是块作用域

  那么什么情况下会形成块作用域

  - with 用 with 从对象中创建的作用域仅在 with 声明中而非外部
  - try catch

  其中`catch` 分句会创建一个块作用域

  ```javascript
  try {
    console.log(a);
  } catch (error) {
    console.log(error);
  }
  console.log(error); // ReferenceError: error is not defined
  ```

  - let

    为其声明的变量隐式的劫持了所在的块作用域

  - const

    const 同样可以创建一个块级作用域
