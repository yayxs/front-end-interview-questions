> Q1: **已知数据格式，实现一个函数 fn 找出链条中所有的父级 id**



## 准备

- vue 的源码

```js
yarn add vue
```



- 一个测试小项目

## 00-已知数据格式，实现一个函数 fn 找出链条中所有的父级 id

![](https://raw.githubusercontent.com/yayxs/Pics/master/code.png)





那么整体来说分为两种方案：


**基于递归的DFS，本身就是一种调用栈，在每个调用栈中，保存当前栈元素，再根据给定的value作对比决定继续递归查找还是中断递归。注意递归的中断逻辑，和每个调用栈元素的保存**

其过程简要来说是对每一个可能的分支路径深入到不能再深入为止，而且每个节点只能访问一次

```js
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
```














