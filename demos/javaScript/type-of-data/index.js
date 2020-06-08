// 判断数据类型
let num = 1;
let str = "yayxs";
let bol = true;
let arr = [];
let obj = {};
let func = function() {};
let nul = null;
let und = undefined;
let sym = Symbol();

let dataList = [num, str, bol, arr, obj, func, nul, und, sym];

/**
 *
 * @param {*} dataList
 * @description arr 和对象和null 返回的都是对象，不能够完全的判断出数据类型
 */
function typeOfData(dataList) {
  return dataList.map(item => typeof item);
}
// console.log(typeOfData(dataList))


