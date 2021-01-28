let targets = [
  "yayxs",
  18,
  Symbol(18),
  null,
  undefined,
  function() {},
  {
    name: "yayxs",
  },
];
/**
 * 原型 、原型链
 * instanceof的原理
 */
if (targets instanceof Array) {
  console.log(`targets is array`);
}
/**
 * 使用的时候兼容性
 * 新的api问题
 */
console.log(Array.isArray(targets));

let obj = {};

console.log("25", obj.__proto__.toString() === "[object Object]");

let objectToStr = Object.prototype.toString;

console.log(typeof objectToStr);
let arr = [];
console.log(Object.prototype.toString.call(arr));
