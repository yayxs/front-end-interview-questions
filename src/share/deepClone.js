const obj1 = {
  name: "vast",
  fav: ["b站", "知乎", "掘金"],
  fri: [
    {
      name: "张三",
      fav: ["吃饭", "睡觉"],
    },
  ],
};

let result = {};

// let obj2 = obj1
let obj2 = deepClone(obj1);

obj2.name = "newVast";

console.log("obj1", obj1);

console.log("obj2", obj2);
/**
 *
 * @param {*} obj
 * 函数参数的默认值
 * 如何判断一个数据类型 typeof
 * instanceof 实现原理是什么样的
 * 怎么样判断一个元素是不是数组（有哪几种方式）
 * 常见的循环方式有哪些
 * for in 与 for of 的区别是什么
 * 怎么判断 JS的自身的属性
 */
// 我们是不期望发生变化的

function deepClone(obj = {}) {
  // 0
  if (typeof obj !== "object" || obj == null) {
    // 你传进来的参数并不是期望值 所以就直接返回
    return obj;
  }
  // 1 初始化一个结果对象
  let result;
  // 2 对结果对象处理
  if (obj instanceof Array) {
    result = [];
  } else {
    result = {};
  }
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key]);
    }
  }
  // 功能函数 ： 返回一个结果对象
  return result;
}
