function formatArr(arr1, arr2) {
  let big = arr1.length > arr2.length ? arr1 : arr2;
  let small = arr1.length > arr2.length ? arr2 : arr1;
  let newArr = [];
  for (let i = 0; i < big.length; i++) {
    if (small.length > i) {
      newArr.push(small[i]);
    }
    newArr.push(big[i]);
  }
  return newArr;
}
let arr1 = [{ id: 1 }, { id: 2 }];

let arr2 = [{ id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }];
const res = formatArr(arr1, arr2);
console.log(res);
