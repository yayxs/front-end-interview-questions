// 浅拷贝

// ----------- 数组
let targetArr = [{name:'oldName'},"1", "1", 1, 1, true, true, undefined, undefined, null, null,]

let resultArr = targetArr.concat()
resultArr[0]['name'] = 'newName'

console.log('old',targetArr) // 此时 targetArr 的第一个元素的 name 也被修改了
console.log('new',resultArr)
// ----------- 对象
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

// --------- 函数


let fnArr = [

    ()=>{
        console.log(1)
    },
    ()=>{
        console.log(2)
    }
]

console.log(JSON.parse(JSON.stringify(fnArr)));


function firstShallowClone(target){
    if(typeof target !== 'object') return
    let result = Array.isArray(target) ? [] :{}
    for(let k in target){
        if(target.hasOwnProperty(k)){
            result[k] = target[k]
        }
    }
    return result
}