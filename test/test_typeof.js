const isNumber = 1
const isStr = 'I am string'
const isBool = true
const isUndefined = undefined

const isSymbol = Symbol()

const isArr = [0, 1, 2]
const isObj = {
  name: 'i am obj',
}
const isNull = null
const isFunc = () => {}


const targetArr = [
    isNumber,
    isStr,
    isBool,
    isArr,
    isObj,
    isNull,
    isUndefined,
    isSymbol,
    isFunc,
  ]

  for (let i = 0, len = targetArr.length; i < len; i++) {
    console.log(targetArr[i], typeof targetArr[i])
  }