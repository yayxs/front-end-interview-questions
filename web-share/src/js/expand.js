/**
 * 基于数组实现简单的栈
 */

function Stack() {
  // 属性
  let items = [];

  // - push(element(s))：添加一个（或几个）新元素到栈顶。
  Stack.prototype.push = function (element) {
    items.push(element);
  };
  // - pop()：移除栈顶的元素，同时返回被移除的元素。
  Stack.prototype.pop = function () {
    return items.pop();
  };
  // - peek()：返回栈顶的元素，不对栈做任何修改（这个方法不会移除栈顶的元素，仅仅返回它）。
  Stack.prototype.peek = function () {
    return items[items.length - 1];
  };
  // - isEmpty()：如果栈里没有任何元素就返回true，否则返回false。
  Stack.prototype.isEmpty = function () {
    return items.length === 0;
  };
  // - clear()：移除栈里的所有元素。
  Stack.prototype.clear = function () {
    items = [];
  };
  // - size()：返回栈里的元素个数。这个方法和数组的length属性很类似。
  Stack.prototype.size = function () {
    return items.length;
  };
  // 为了检查栈里的内容，我们 来实现一个辅助方法，叫print。它会把栈里的元素都输出到控制台
  Stack.prototype.print = function () {
    console.log(items.toString());
  };
}
/**
 * 基于数组这种数据结构实现简单的队列
 *
 */
class Queue {
  constructor() {
    this.items = [];
  }

  // - enqueue(element(s))：向队列尾部添加一个（或多个）新的项
  enqueue(element) {
    this.items.push(element);
  }
  // - dequeue()：移除队列的第一（即排在队列最前面的）项，并返回被移除的元素
  dequeue() {
    this.items.shift();
  }
  // - front()：返回队列中第一个元素——最先被添加，也将是最先被移除的 元素。队列不做任何变动（不移除元素，只返回元素信息——与Stack类的 peek方法非常类似）
  front() {
    if (this.items.length === 0) return null;
    return this.items[0];
  }
  // - isEmpty()：如果队列中不包含任何元素，返回true，否则返回false
  isEmpty() {
    return this.items.length;
  }
  // - size()：返回队列包含的元素个数，与数组的length属性类似

  size() {
    return this.items.length;
  }
}

const arr = [
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

/**
 * bfs 广度优先搜索|利用队列数据结构
 */
const fn = (arr, id) => {
  // 构造队列
  let newArr = [...arr];
  console.log(newArr);

  do {
    const current = quene.shift();
    if (current.children) {
      quene.push(
        ...current.children.map((x) => ({
          ...x,
          path: (current.path || current.id) + "-" + x.id,
        }))
      );
    }
    if (current.id === id) {
      return current;
    }
  } while (quene.length);
};
const res = fn(arr, "12");

console.log(res);
