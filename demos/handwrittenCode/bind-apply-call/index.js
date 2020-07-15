// ----------------------------------2.0

// 既然每次返回的是同一结果 考虑缓存
// 其中cacheName 便是`装饰着`
function cacheName(func,hash) {
  let cache = new Map();
  return function (x) {
    let key = hash(arguments)
    if (cache.has(key)) {
      // 已经包含姓名
      return cache.get(key); // 从缓存中读取
    }
    // 然后调用函数func
    console.log(this) // 其中 this 就是指的obj 这样在addOne在调用的时候就能够访问 this.oneNum()
    let res = func.call(this, ...args);
    // 进行缓存
    cache.set(x, res);
    return res;
  };
}

let obj = {
  oneNum() {
    return 1;
  },
  addOne(x) {
    return x + this.oneNum();
  },
};


// console.log( typeof obj.addOne === 'function') // true

obj.addOne = cacheName(obj.addOne);

// 在这里cacheName传入了一个函数,返回了一个新的函数
/**
 * function(x){
 * }
 */


console.log(obj.addOne(1))
