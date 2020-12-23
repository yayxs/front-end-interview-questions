var v1 = 10
var v2 =20

function test(num){
    console.log(v1)
    if(true){
        var v1 = 30
    }
    console.log(v1,num) // 30 3 
    num = num+1
    function count(input){
        console.log(v1,num,input) // 5 4 5 
        return v1 * num * input
    }
    v1 = 5
    return count
}
var result = test(3)(5)

console.log(result) // 100
// var result 
// test(3)
// test(3)(5)