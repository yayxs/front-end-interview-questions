var obj = {
  "2": 3,
  "3": 4,
  length: 2,
  splice: Array.prototype.splice,
  push: Array.prototype.push,
};
obj.push(1);
obj.push(2);
console.log(obj);
console.log(JSON.stringify(obj, 2, null));

var array = ["name", "age"];
var arrayLike = {
  0: "name",
  1: "age",
  length: 2,
};

console.log(array[0]); // name
console.log(arrayLike[0]); // name

array[0] = "new name";
arrayLike[0] = "new name";
console.log(array[0]); // new name
console.log(arrayLike[0]); // new name
let realArr = Array.prototype.slice.call(arrayLike, 0);
console.log(realArr);

var testObj = {
  "2": 3,
  "3": 4,
  length: 2,
  push: Array.prototype.push,
};


testObj.push(1)
console.log(testObj)
testObj.push(2)
console.log(testObj)


