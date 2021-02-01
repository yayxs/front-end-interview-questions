// Set 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。
// set 数组重组 集合的数据结构 成员唯一无序 没有重复值
const newSet = new Set([0,1,2,3,4])
// console.log(typeof newSet) // object
for(let i of newSet){
    // console.log(i)
}
/**
 * 数组去重
 */

 let arr = [1,23,4,54,5,1,1,1,1,2]
 let resArr = [...new Set(arr) ]
//  console.log(resArr) // [ 1, 23, 4, 54, 5, 2 ]

//  set ->array
const set1 = new Set([1,2,3,4,1])
// console.log(set1)  // Set { 1, 2, 3, 4 }

// set 可以使用map filter 方法

let set2 = new Set([1,2,3])
let set3 = new Set([2,3,4])

let res1 = new Set([...set1].filter(value => set2.has(value)))
console.log(res1)