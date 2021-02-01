const isObj = Object.prototype.toString({})
const isObj1 = Object.prototype.toString.call({})
// 其他类型需要调用call [object Xxx]
const isNum = Object.prototype.toString.call(1)
const isStr = Object.prototype.toString.call('1')
const isBo = Object.prototype.toString.call(true)
const isFun = Object.prototype.toString.call(function(){})
const isNull = Object.prototype.toString.call(null)
const isUnde = Object.prototype.toString.call(undefined)
const isRegular = Object.prototype.toString.call(/123/g)
const isDate = Object.prototype.toString.call(new Date())
const isArray = Object.prototype.toString.call([])
// const isDocu = Object.prototype.toString.call(document)
// const isWin = Object.prototype.toString.call(window)

console.log(isObj,isObj1,isNum,isStr,isBo,isFun,isNull,isUnde,isRegular,isDate)


function getDataType(obj){
    let type = typeof obj
    if(type !== 'object'){ // 基础数据类型
        return type
    }
    // 处理复杂的数据类型即typef 是object的 
    return Object.prototype.toString.call(obj).replace(/\[object (\S+)\]$/,'$1')

}
const result =  getDataType(/123/g)
console.log(result)