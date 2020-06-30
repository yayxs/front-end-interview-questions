/**
 * 对象的一个方法：用来直接定义一个新属性，或者修改现有属性
 */

let user = {
  name: "yayxs",
  fav: ["play"],
  firend: {
    name: "wanghuahua"
  }
};
/**
 * 查看属性的特征
 * 
 */
let res1 = Object.getOwnPropertyDescriptors(user)
console.log(res1)
console.log(JSON.stringify(user,null,2))