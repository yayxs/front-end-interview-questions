// const obj = {}

// console.log(obj instanceof Object) // true

// const isNull = null
// console.log(isNull instanceof Object)
// console.log(typeof isNull) // 不准确
/**
 */

console.log('123',myInstanceof(123,Number))



/**
目标对象
类
考点 obj api new 类 原型 原型链
 */
function myInstanceof(left,right) {
    // 是不是一个对象 或者 null
    if(typeof left !== 'object' || left === null) return false
    // api object 自带的一个api  原型对象
    let proto = Object.getPrototypeOf(left)
    // 循环 判断
    while (true) {
        if(proto === null) return false
        if(proto === right.prototype)return true
        proto = Object.getPrototypeOf(proto)
    }
}



// ------------
/**
构造函数
 */
const Car = function (params) {
    
}

const daindongche = new Car
console.log(daindongche instanceof Car) // true

console.log(myInstanceof(daindongche,Car)) // true

console.log( 123 instanceof Number)