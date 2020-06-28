// 深拷贝
// 不同于浅拷贝的是，深拷贝可以将深层的数据进行复制
let obj = {
  name: "yayxs",
  fav: [
    {
      type: "play"
    }
  ],
  friend: {
    name: "wanghuahua"
  }
};

function deepCopy(object) {
  let obj = object instanceof Array ? [] : {};
  for (const [k, v] of Object.entries(object)) {
    obj[k] = typeof v === "object" ? deepCopy(v) : v;
  }
  return obj;
}

const res = deepCopy(obj)
console.log(res)