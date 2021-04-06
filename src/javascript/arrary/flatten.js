let arr = [1, [2, [3, 4, [5]]]];

// function flatten(arr) {
//   return arr.reduce((prev, next) => {
//     return prev.concat(Array.isArray(next) ? flatten(next) : next);
//   }, []);
// }

// console.log(flatten(arr)); // [ 1, 2, 3, 4, 5 ]

function flatten(arr) {
  return arr.toString().split(",");
}
console.log(flatten(arr)); //
