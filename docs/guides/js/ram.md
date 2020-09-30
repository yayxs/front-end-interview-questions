---
title: JS中的内存泄漏的理解？
---

## 全局变量
全局变量挂载到window上 只要window还在  
意外声明全局变量是最常见但也最容易修复的内存泄漏问题

```js
function setName() {
  name = 'yayxs';
}
```

## 定时器

只要定时器一直运行，回调函数中引用的name就会一直占用内存。垃圾回收程序当然知道这一点，因而就不会清理外部变量。定时器在执行，name就一直被引用着，垃圾回收也知道这一点
```js
 let name = `yaxys`
        setInterval(()=>{
            console.log(`定时器的回调${name}`)
        },12)
```