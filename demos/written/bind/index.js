const user = {
  name: "yayxs",
};

function showYourself(param1, param2) {
  console.log(this.name); // yayxs
  console.log(param1); // 参数一
  console.log(param2); // 参数二
}

let resultFn;
resultFn = showYourself.bind(user, "参数一");
resultFn("参数二");
Function.prototype.mySecBind = function(ctx) {
  let _this = this;
  console.log([...arguments]);
  Array.prototype.slice.call(arguments, 1);
  return function() {
    return _this.apply(ctx);
  };
};

resultFn = showYourself.mySecBind(user);

// let oldArr = ['0','1']

// let newArr = Array.prototype.slice.call(arguments, 1);

Function.prototype.secBind = function() {
  let self = this, // 保存原来的函数
    context = [].shift.call(arguments); // 需要绑定的this的上下文
  args = [].slice.call(arguments); // 剩余的参数转成数组
  return function() {
    // 返回一个新的函数
    // 执行新的函数的时候，会把之前传入的context当做新函数体内的this 并且组合两次分别差UN额逇参数 作为新函数的参数
    return self.apply(context, [].concat.call(args, [].slice.call(arguments)));
  };
};
