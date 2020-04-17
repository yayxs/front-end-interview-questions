const fn1 = (arr, id) => {
  const queue = [...arr]; // 放入队列

  const flag = queue.length; // 循环标记

  while (flag) {
    const ele = queue.shift(); // 从头先出一个元素
    if (ele.children) {
      ele.push(
        ...children.map((item) => ({
          ...item,
          path: `${ele.path}${item.id}` || `${ele.id}${item.id} `,
        }))
      );
    }

    if (ele.id === id) {
      return ele;
    }
  }
};

const arr = [
  {
    id: "1",
    name: "河南省",
    children: [
      {
        id: "11",
        name: "郑州市",
        children: [],
      },
      {
        id: "12",
        name: "商丘市",
        children: [
          {
            id: "121",
            name: "睢阳区",
            children: [],
          },
        ],
      },
    ],
  },
];

const res = fn1(arr, '112');
console.log(res)
