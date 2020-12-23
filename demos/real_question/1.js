
var a = null

var b 
var d = 1 + '2'

console.log(typeof a)

console.log(typeof b)

console.log(a==b) // true

console.log(typeof a == typeof b) // false
console.log(d) // '12'
console.log(typeof d) // string


function bar(){
    return foo;
    foo = 10
    function foo(){} // 
    var foo = '11'
}

console.log(typeof bar()) // function