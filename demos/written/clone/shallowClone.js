let obj1 = {
    name:'zhangsan',
    age:18
}
let obj2 = obj1
obj2.name = 'lisi'

const shallow = (target) =>{
    let obj = {}
    for(let prop in target){
        obj[prop] = target[prop]
    }
}



console.log(obj1.name) // 此时第一个对象的name属性就被改掉了
