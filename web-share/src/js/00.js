let arr = [];
let arr1 = [{ id: "1" }, { id: "2" }];
let arr2 = [
  {
    id: "1",
    children: [
      {
        id: "11",
        children: [
          {
            id: "111",
          },
          {
            id: "112",
          },
        ],
      },
      {
        id: "12",
        children: [
          {
            id: "121",
          },
        ],
      },
    ],
  },
];



function dfs(target, id) {
  if (!target.length) return [];
  // 结束条件
  if(target.length){
    console.log(1)
  }
}
const res = dfs(arr1, "1");
console.log(res);
