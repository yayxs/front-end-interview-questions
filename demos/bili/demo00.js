/*
 * @Author: https://github.com/yayxs/top-fe-iqa
 * @Date: 2020-06-28 20:23:34
 * @LastEditTime: 2020-06-28 21:04:22
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

// 哈希表  数据结构 算法

const unique = (target) => {
  let result = [];
  let hash = {};
  // for of for in forEach for map fliter reduce
  for (let ele of target) {
    if (!hash[ele]) {
      // hash 有没有数组中的元素
      result.push(ele);
      hash[ele] = true;
    }
  }
  return result;
};

let arr2 = [11, 11, "11", "11"];
const res = unique(arr2);
console.log(res);
