/*
 * @Author: https://github.com/yayxs/top-fe-iqa
 * @Date: 2020-06-28 20:23:34
 * @LastEditTime: 2020-06-28 21:41:39
 * @LastEditors: Please set LastEditors
 * @Description: 数组去重
 * @FilePath: \bili\demo00.js
 */

//  数组去重 手写 数组  重复元素

// console.log(1 === 1); // true
// console.log("1" === "1"); // true
// console.log("true" === "true"); // true
// console.log(false === false); // true
// console.log(undefined === undefined); // true
// console.log(null === null); // true

// console.log(NaN === NaN); // false
// console.log({} === {}); // false
// console.log([] === []); // false

// 接着呢 搞一个数组

let arr = [
  1,
  1,
  "1",
  "1",
  "true",
  "true",
  false,
  false,
  undefined,
  undefined,
  null,
  null,
];

// reduce
const unique = (target) =>
  target.reduce(
    (pre, cur, curidx) => (pre.includes(cur) ? pre : [...pre, cur]),
    []
  );

const res = unique(arr);
console.log(res);
