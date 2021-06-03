---
title: 手写实现trim方法
---

# 手写实现 String.prototpye.trim() 方法

ECMAScript 在所有字符串上都提供了 trim()方法。这个方法会创建字符串的一个副本，删除前、后所有空格符，再返回结果。
由于 trim()返回的是字符串的副本，因此原始字符串不受影响，即原本的前、后空格符都会保留。

**为简化子字符串替换操作，ECMAScript 提供了 replace()方法。这个方法接收两个参数，第一个参数可以是一个 RegExp 对象或一个字符串（这个字符串不会转换为正则表达式），第二个参数可以是一个字符串或一个函数。如果第一个参数是字符串，那么只会替换第一个子字符串。要想替换所有子字符串，第一个参数必须为正则表达式并且带全局标记，**

> 用 replace 结合正则实现清除字符串两边空格的方法
> 保留两侧的空格，而清除内部的空格

```js
String.prototype.trim
ƒ trim() { [native code] }
String.prototype.trim = function(){
console.log(this)
return this.replace(/^\s+|\s$/,'')}

ƒ (){
console.log(this)
return this.replace(/^\s+|\s$/,'')}
let str = `   as`
undefined
let res = str.trim()
VM5152:2 String {"   as"}
undefined
res
"as"
```
