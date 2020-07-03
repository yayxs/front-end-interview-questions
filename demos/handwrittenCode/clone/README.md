## 背景

> 深浅拷贝 是面试中的`明星话题` 至于在项目中为什么需要深浅拷贝，这个我们模拟一个场景，就是一个`options` 配置对象，用过 echarts 的童鞋应该知道

**首先明确一点我们接下来探讨的都是引用类型**

什么是引用类型，我下边举个例子，也就是说 你和弟弟都是家里的人 一旦你弟弟 改变了你家的布局，那么你俩拿钥匙回到家看到的是一样的，都是改变后的样子 也就是说 你俩是一家人（这里就不用女朋友举例了）

如何切断数据，就是重新拷贝一份 浅拷贝就是表面的拷贝

- 深拷贝就是无限层级的拷贝下去

## 浅拷贝

先说浅拷贝

- 浅拷贝:创建一个新对象，有旧对象原始属性值（基本类型，拷贝的是基本类型；引用类型，便是内存地址）一份精确拷贝

  - 其中一个对象地址改变，相互影响

```js
let obj1 = {
  name: "zhangsan",
  age: 18,
};
let obj2 = obj1;
obj2.name = "lisi";

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

## 深拷贝

深拷贝的核心思路便是 拷贝加递归 也就是说当对象的某一个属性还是个对象的时候，我们需要对之进一步拷贝

- 深拷贝：从内存完整拷贝，在堆中重新开启区间，对象地址改变不会影响

- JSON.parse() 方法用来解析 JSON 字符串，构造由字符串描述的 JavaScript 值或对象

  - String - obj

- JSON.stringify() 方法将一个 JavaScript 值（对象或者数组）转换为一个 JSON 字符串

```js
let obj = {
  name: `yaxs`,
};
console.log(obj);

let obj1 = JSON.parse(JSON.stringify(obj));

console.log(obj1);
```

```js
function clone(target) {
  let temp = {};
  for (const key in target) {
    temp[key] = target[key];
  }

  return temp;
}

let obj = {
  name: `yayxs`,
};
console.log(clone(obj));
```

## 递归拷贝

```js
function clone(target) {
  //   首先判断传入的是不是对象
  if (typeof target === "object") {
    let temp = {};

    for (const key in target) {
      temp[key] = clone(target[key]);
    }
    return temp;
  } else {
    return target;
  }
}

let obj = {
  name: `yayxs`,
  firends: {
    name: `zs`,
    firends: {
      name: `li`,
    },
  },
};

console.log(clone(obj));
```

-Array.isArray() 用于确定传递的值是否是一个 Array。

```js
function deepClone(target) {
  if (typeof target === "object") {
    let temp = Array.isArray(target) ? [] : {};
    for (const key in target) {
      temp[key] = deepClone(target[key]);
    }
    return temp;
  } else {
    return target;
  }
}

let obj = {
  name: `yayxs`,
  arr: [1, 2, 3],
};
console.log(deepClone(obj));
```

## 循环引用的问题
