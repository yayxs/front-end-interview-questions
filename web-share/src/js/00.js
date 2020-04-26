let arr1 = [
  {
    id: "1",
  },
  {
    id: "2",
  },
];

let arr2 = [
  {
    id: "1",
    children: [
      {
        id: "11",
      },
    ],
  },
];

let arr3 = [
  {
    id: "1",
    children: [
      {
        id: "11",
        children: [
          {
            id: "111",
            children: [
              {
                id: "1111",
              },
            ],
          },
        ],
      },
    ],
  },
];

// 目标元素
const target = [
  {
    id: "1",
    name: "河南省",
    children: [
      {
        id: "11",
        name: "郑州市",
        children: [
          {
            id: "111",
            name: "二七区",
          },
          {
            id: "112",
            name: "金水区",
          },
        ],
      },
      {
        id: "12",
        name: "商丘市",
        children: [
          {
            id: "121",
            name: "睢阳区",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "广东省",
    children: [
      {
        id: "21",
        name: "深圳市",
        children: [
          {
            id: "211",
            name: "南山区",
          },
          {
            id: "212",
            name: "福田区",
          },
        ],
      },
    ],
  },
];

// --------------------------------
// function fn(data,value) {
//   const result = []; // 定义一个结果用来存放符合条件的节点

//   const dfs = (source) => {

//     for (let node of source) {
//       result.push(node);
//       console.log(result)
//       if (node.id === value) {
//         return;
//       } else {
//         const flag = dfs(node.children || []);
//         if (!flag) return;
//       }
//       result.pop(item);
//     }
//     return true;
//   };
//   dfs(data);

//   return result.map((item) => item.id);
// }

// const finRes = fn(arr3, "111");
// console.log(finRes);
// --------------------------------

function dfs(target, id) {
  let stack = [...target];

  do {
    console.table(stack)
    const current = stack.pop();
  //  console.log(current)  // 2 21 212 211 1 12 121 11 112 111
    if (current.id === id) {
      return current;
    }
    if (current.children) {
      let nextNode = current.children;
      let nextNodeAddPreId = nextNode.map((item) => ({
        ...item,
        containsThePreviousLevelId: `${
          current.containsThePreviousLevelId || current.id
        } ${item.id}`,
      }));
      // console.log(...nextNodeAddPreId)
      stack.push(...nextNodeAddPreId);
     
    }
  } while (stack.length);
}
// -----------------------------------------
// function fn(data, value) {
//   let res = [];
//   const dfs = (arr, temp = []) => {
//     for (const node of arr) {

//       if (node.id === value) {

//         res = temp;
//         // console.log(res);
//         return;
//       } else {

//         node.children && dfs(node.children, temp.concat(node.id));
//       }
//     }
//   };
//   dfs(data);
//   return res;
// }
// ------------------------------------------
// const finRes = dfs(arr3, "1"); // 当前节点的id === 需要查找的id值 ['1']
// const finRes = dfs(arr3, "112"); // 当前节点的id 不等于 需要查找的id值
// const finRes = fn(target, "11");
const finRes = dfs(target, "112");
// console.log(finRes);
