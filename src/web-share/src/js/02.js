let arr = [3, 15, 8, 29, 102, 22];
// let arr1 =  ['3', '15', '8', '29', '102', '22']
// let res =  arr.sort()
// console.log(arr1)
let arrs = ["你好啊", "HELLO", "hello", 666];
const friends = [
  { name: "toM", age: 10 },
  { name: "JAn", age: 20 },
];

function compare(a, b) {
  if (a.age > b.age) {
    return 1;
  }
  if (a.age < b.age) {
    return -1;
  }
  return 0;
}
console.log(friends.sort(compare));
arrs.sort();
console.log(arrs);

arr.sort((x, y) => {
  console.log(`${x}-${y}=${x - y}`);
  return x - y;
});
console.log(arr);
