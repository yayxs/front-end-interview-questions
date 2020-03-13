// 判断是否是数组
const arr = ["hello", "yayxs"];
// console.log(arr.toString()) hello,yayxs
// 常用于判断浏览器内置对象
let res1 = Object.prototype.toString.call(arr);
console.log(res1); // [object Array]

/**
 * String
 * Number
 * Symbol
 * Null
 * Undefi
 * Func
 * Obj
 */
// 定义一个函数用来判断数据类型

function isWhatType(target) {
  return Object.prototype.toString.call(target);
}

let targets = [
  "yayxs",
  18,
  Symbol(18),
  null,
  undefined,
  function() {},
  {
    name: "yayxs"
  }
];

console.log(targets);

const res = targets.map(target => {
  return isWhatType(target);
});

console.log(res);
/**
 * [
 *'[object String]',
 *'[object Number]',
 *'[object Symbol]',
 *'[object Null]',
 *'[object Undefined]',
 *'[object Function]',
 *'[object Object]'
 *]
 */
// 第二种方式通过判断对象的原型链中能不能找到
let res3 = [] instanceof Array
console.log(res3) // true