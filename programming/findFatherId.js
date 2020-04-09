// 已知的数据格式
const dataListMap = [
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
            name: "二七区"
          },
          {
            id: "112",
            name: "金水区"
          }
        ]
      },
      {
        id: "12",
        name: "商丘市",
        children: [
          {
            id: "121",
            name: "睢阳区"
          },
          {
            id: "122",
            name: "梁园区"
          }
        ]
      }
    ]
  }
];
// 需求
const tempId = "112";

const fn = tempId => {
  return []; // 返回
};

const res = fn(tempId);
console.log(res)
