/**
 * 谈到数组去重，几乎是面试必备的一道开胃菜
 * 要想数组去重，第一件事就是有一个数组
 */
// 首先第一步
console.log(1 === 1); // true
console.log("1" === "1"); // true
console.log("true" === "true"); // true
console.log(false === false); // true
console.log(undefined === undefined); // true
console.log(null === null); // true

console.log(NaN === NaN); // false
console.log({} === {}); // false
console.log([] === []); // false
// 接着第二步：准备含有重复元素的目标数组
let needDeduplicatedArr = ["1", "1", 1, 1, true, true, null, null]; // 需要去重的数组元素
let arr = ["1", "1", 1, 1];
// 第三步：写去重方法
// ------------------使用哈希表-------------------------------------------------------------------
const unique1 = (target) => {
  let result = []; // 结果数组
  let hash = {};
  for (let ele of target) {
    if (!hash[ele]) {
      // hash 中没有数组中的元素
      result.push(ele); // 把元素放进去
      hash[ele] = true; // hash中已经存在了标记为true 下次循环就不会接着往结果数组中放相同的元素了
    }
  }
  return result;
};

const unique10 = (target) => {
  let map = new Map(); // 初始化 map
  let result = new Array(); // 初始化 数组
  for (let i = 0; i < target.length; i++) {
    if (map.has(target[i])) {
      map.set(target[i], true);
    } else {
      map.set(target[i], false);
      result.push(target[i]);
    }
  }
  return result;
};

// 缺点 hash中存在相同的 key 就不往下找了， 但 '1' 和 1 是不同的元素
// ------------------数组遍历-------------------------------------------------------------------
const unique2 = (target) => {
  let result = [];
  for (let i = 0; i < target.length; i++) {
    if (result.indexOf(target[i]) === -1) {
      // 在结果数组中没有找到元素
      result.push(target[i]);
    }
  }
  return result;
};

// ------------------数组遍历-------------------------------------------------------------------
const unique3 = (target) => {
  let result = [];
  for (let ele of target) {
    // 其中 ele 是每一目标元素中每一元素
    !result.includes(ele) && result.push(ele); // 如果结果数组中没有ele就添加进去
  }
  return result;
};

// ------------------先给数组排序-------------------------------------------------------------------
const unique4 = (target) => {
  target.sort();
  console.log(target);
  let result = [target[0]];
  for (let i = 1; i < target.length; i++) {
    target[i] !== target[i - 1] && result.push(target[i]); // 当前项和它的前一项不同的时候，才添加进结果数组
  }
  return result;
};

// ------------------双层for循环-------------------------------------------------------------------
const unique5 = (target) => {
  //   let result = [];

  for (let i = 0; i < target.length; i++) {
    for (let j = i + 1; j < target.length; j++) {
      if (target[i] === target[j]) {
        // 如果两项元素相同的话，则从目标元素中删除一个
        target.splice(j, 1);
        // splice 会改变原数组，所以相关的长度都要减去一
        i--;
        j--;
      }
    }
  }

  return target;
};

// ------------------set结构-------------------------------------------------------------------
const unique6 = (target) => {
  // Set 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。
  let x = new Set(target); // Set { '1', 1, true, null }

  return [...x]; // 转为数组
};
const unique7 = (target) => {
  // Set 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。
  let x = new Set(target); // Set { '1', 1, true, null }

  return Array.from(x); // 转为数组
};
// ------------------Array.filter()-------------------------------------------------------------------
const unique8 = (target) => {
  return target.filter((item, index) => {
    return target.indexOf(item) === index; // 数组的下标与检索的下标一致
  });
};

// ------------------reduce+includes-------------------------------------------------------------------
const unique9 = (target) => {
  return target.reduce((previousValue, currentValue, currentIndex) => {
    return previousValue.includes(currentValue)
      ? previousValue
      : [...previousValue, currentValue];
  }, []);
};
const res = unique10(needDeduplicatedArr);
console.log(res);
// ------------------obj.hasOwnProperty()-------------------------------------------------------------------
const unique11 = (target) => {
  let obj = {}; // 初始化一个空的对象
  let result = new Array();
  result = target.filter((item, index) =>
    obj.hasOwnProperty(item) ? false : (obj[item] = true)
  );
  return result
};
