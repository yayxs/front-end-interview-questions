- 浅拷贝:创建一个新对象，有旧对象原始属性值（基本类型，拷贝的是基本类型；引用类型，便是内存地址）一份精确拷贝

  - 其中一个对象地址改变，相互影响

- 深拷贝：从内存完整拷贝，在堆中重新开启区间，对象地址改变不会影响

- JSON.parse() 方法用来解析 JSON 字符串，构造由字符串描述的 JavaScript 值或对象

  - String - obj

- JSON.stringify() 方法将一个 JavaScript 值（对象或者数组）转换为一个 JSON 字符串

```js
let obj = {
  name: `yaxs`
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
  name: `yayxs`
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
      name: `li`
    }
  }
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
  arr: [1, 2, 3]
};
console.log(deepClone(obj));
```

## 循环引用的问题
