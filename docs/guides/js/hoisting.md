---
title: JS中的变量声明提升
---

**var 声明会被拿到函数或全局作用域的顶部，位于作用域中所有代码之前。这个现象叫作“提升”**

提升让同一作用域中的代码不必考虑变量是否已经声明就可以直接使用。可是在实践中，提升也会导致合法却奇怪的现象，即在变量声明之前使用变量。

> 打个比方，这个过程就好像变量和函数声明从它们在代码中出现的位置被“移动”
> 到了最上面。这个过程就叫作提升。

```js
function fn1() {
  var name = 'Jake'
}

// 等价于：
function fn2() {
  var name
  name = 'Jake'
}
```

```js
foo() // 1
var foo
function foo() {
  console.log(1)
}
foo = function() {
  console.log(2)
}
```

```js
function foo() {
  console.log(1)
}

foo()
```

**函数优先 其次变量**
