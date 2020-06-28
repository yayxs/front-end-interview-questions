/*
 * @Author: your name
 * @Date: 2020-06-28 21:54:06
 * @LastEditTime: 2020-06-28 21:57:23
 * @LastEditors: Please set LastEditors
 * @Description: 这是我们一段旅程的总结
 * @FilePath: \bili\zongjie.js
 */

let arr = [2, 3, 4, 5, 6, 6, , 42, 3, 0, 3];

const fn = () => [...new Set(arr)];

console.log(fn());
