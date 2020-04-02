Object.prototype.objCustom = function() {}; 
Array.prototype.arrCustom = function() {};

let arr = [3, 5, 7];
arr.foo = 'hello';

for (let i in arr) {
    console.log(i); // logs 0, 1, 2, "foo", "arrCustom", "objCustom"
  }