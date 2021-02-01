function myInstanceof(left,right){
    // 首先判断基本数据类型
    if(typeof left!=='object' || left === null) return false
    // getProtypeOf是Object对象自带的api 获取参数的原型对象
    let proto = Object.getPrototypeOf(left)
    while(true){
        if(proto===null)return false
        if(proto === right.prototype) return true // 找到相同的原型对象 返回true
        proto = Object.getPrototypeOf(proto)
    }
}

console.log(myInstanceof(123,Number)) // false

console.log(myInstanceof(new Number(123),Number)) // true