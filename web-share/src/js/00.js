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

const fn = (data, value) => {
  let res = [];
  const dfs = (arr, temp = []) => {
    for (const node of arr) {
      if (node.children) {
        dfs(node.children, temp.concat(node.id));
      } else {
        if (node.id === value) {
          res = temp;
        }
        return;
      }
    }
  };
  dfs(data);
  return res;
};

// 1 11 111 112
// 2 21 211 212
const res = fn(arr2,'112')
console.log(res)