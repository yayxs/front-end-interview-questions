// 触发高频事件后n秒函数之后执行一次，如果n秒内再次被触发 则重新计算
function debounce(fn) {
  let timeout = null; // 定时器返回值
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, arguments);
    }, 500);
  };
}
// 在值改变的时候，防止多次触发
function sayHi() {
  console.log(`防抖成功`);
}
