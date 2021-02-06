console.log('123'==123)

console.log('' == null)

console.log('' == 0)

console.log([]==0)

console.log([]=='')

console.log([]==![])
console.log(Number(null))

console.log(Number(''))

console.log(parseInt(''))

console.log({}+10)

let obj = {
    valueOf(){
        return 200
    },
    toString(){
        return 'hello'
    }
}
console.log(obj +100)