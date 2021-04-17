---
title: Set、Map、WeakSet 和 WeakMap 的区别
---

首先我们知道一点，什么是 Set 什么是 Map 等这几个又是什么玩意，我们知道和对象差不多，但是对象的 key 只能是**字符串** 或者 **Symbl**

```javascript
let id = Symbol("id");
console.log(typeof id);
let obj = {
  0: "0",
  "0": "123",
  [id]: "12",
};

console.log(obj);
```

#### Map

拿这时候就可以搞一个`Map` 了 摆脱这种束缚，也就是说 Map 的 key 可以是对象类型。好的那我们还是先写一个简单的`Map`

```javascript
let doms = document.getElementsByTagName("h1");
console.log(doms);

let map = new Map();
[...doms].forEach((h1) => {
  map.set(h1, "测试");
});
console.log(map);

console.log(map.get(doms[0])); // 测试
console.log(map.size);
```

```javascript
let key = {
  name: "yayxs",
};
let key1 = {
  age: "18",
};
let map = new Map();

map.set(key, "name").set(key1, "age");
console.log(map.keys());
console.log(map.values());
```

```javascript
let map = new Map([
  ["pingguo", 19],
  ["xiangjiao", 20],
]);

for (let k of map.keys()) {
  console.log(k);
}
for (let v of map.values()) {
  console.log(v);
}
for (let e of map) {
  console.log(e);
}
```

```javascript
let obj = {
  name: "yayxs",
  age: "20",
};
let map = new Map(Object.entries(obj));
console.log(map);
```

```
let obj  = {
  '1':'yayxs',
  1:'yayxs'
}
console.log(obj)
```

```
let id = Symbol('id')

let obj = {
  [id]:'yayxs'
}
console.log(obj)
```

#### WeakMap

```javascript
let map = new Map();
map.set("1", "yayxs");
console.log(map);
let map = new WeakMap();
map.set("1", "yayxs");
console.log(map); // Identifier 'map' has already been declared
```

```javascript
let obj = {
  name: "yayxs",
};

let arr = [obj];
obj = null;

console.log(arr[0]);
```

#### Set

```javascript
let set = new Set();

let zhangsan = {
  name: "zhansan",
};
let lisi = {
  name: "lisi",
};

let wangermazi = {
  name: "wangermazi",
};

set.add(zhangsan);
set.add(lisi);
set.add(wangermazi);
set.add(zhangsan);

console.log(set);

for (let val of set) {
  console.log(val);
}
console.log(set.keys());
```