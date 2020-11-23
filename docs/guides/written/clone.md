---
title:  手写实现深浅拷贝（深浅克隆）
---

# 手写实现深浅拷贝（深浅克隆）

## 背景

> 深浅拷贝 是面试中的`明星话题` 

**首先明确一点我们接下来探讨的都是引用类型，一般我们拷贝的也就是像数组对象这种较为复杂的数据类型**

什么是引用类型，我下边举个例子，也就是说 你和弟弟都是家里的人 一旦你弟弟 改变了你家的布局，那么你俩拿钥匙回到家看到的是一样的，都是改变后的样子 也就是说 你俩是一家人（这里就不用女朋友举例了）

如何切断数据，就是重新拷贝一份 浅拷贝就是表面的拷贝

- 深拷贝就是无限层级的拷贝下去

## 浅拷贝

先来说说浅拷贝，浅拷贝:创建一个新对象，有旧对象原始属性值（基本类型，拷贝的是基本类型；引用类型，便是内存地址）一份精确拷贝
其中一个对象地址改变，相互影响（也就是说虽然拷贝过了，但是还是会相互影响的）

```js
let obj1 = {
  name: "张三",
  age: 18,
};
let obj2 = obj1;
obj2.name = "李四";

console.log(obj1.name); // 此时第一个对象的name属性就被改掉了
```

我们发现，我们通过一个简单的 `赋值操作来完成这一操作` 那我们是不是也可以通过一个简单的函数来实现，那就是

```js
const shallow = (target) => {
  let obj = {};
  for (let prop in target) {
    obj[prop] = target[prop];
  }
};
```
从数组来看的话

```js
let targetArr = [{name:'oldName'},"1", "1", 1, 1, true, true, undefined, undefined, null, null,]

let resultArr = targetArr.concat()
resultArr[0]['name'] = 'newName'

console.log('old',targetArr) // 此时 targetArr 的第一个元素的 name 也被修改了
console.log('new',resultArr)
```

### 具体实现

```js

function firstShallowClone(target){
    if(typeof target !== 'object') return
    let result = Array.isArray(target) ? [] :{}
    for(let k in target){
        if(target.hasOwnProperty(k)){
            result[k] = target[k]
        }
    }
    return result
}
```

## 深拷贝

深拷贝的核心思路便是 拷贝加递归 也就是说当对象的某一个属性还是个对象的时候，我们需要对之进一步拷贝,从内存完整拷贝，在堆中重新开启区间，对象地址改变不会影响

### 第一个深拷贝：通过`JSON`的两个API
- JSON.parse() 方法用来解析 JSON 字符串，构造由字符串描述的 JavaScript 值或对象
- JSON.stringify() 方法将一个 JavaScript 值（对象或者数组）转换为一个 JSON 字符串

但是如果单个元素是函数的话，我们来试一下

```js

let fnArr = [

    ()=>{
        console.log(1)
    },
    ()=>{
        console.log(2)
    }
]

console.log(JSON.parse(JSON.stringify(fnArr))); // [null, null]
```

### 第二个深拷贝：递归拷贝

判断一下属性值的类型，
```js
function firstDeepClone(target){
  if(typeof target !== 'target') return

  let res = target instanceof Array ? [] : {};
  for(let key in res){
    if(obj.hasOwnProperty(key)){
      // 首先判断当前key 所对应的属性值是否是个引用类型
      if(typeof obj[key] === 'object'){
        res[key] = firstDeepClone(obj[key])
      }else{
        res[key] = obj[key]
      }
    }
  }
}
```

