function add(a, b) {
  console.log("add函数中this", this);
  console.log(a + b);
}
add(1, 2); // this指向window
add.call({ name: "yayxs" }, 1, 2); // this指向传入的 {name:'yayxs'}

let o = {
  name: "yayxs",
};

function sayName(par1,par2) {
  console.log(this.name);
  console.log(par1)
}

// sayName.call(o); // yayxs
// --------------------------------------------------------------------------
Function.prototype.myCall = function(ctx) {
    console.log(this) // 其中this 就是sayName 这个函数
    console.log(ctx) //  {name: "yayxs"}
    console.log('arguments',arguments)
    let tempArgs = [];// 用来存放参数
    for(let i=1,len=arguments.length;i<len;i++){
        console.log(arguments[i]) // 第一遍循环体 输出参数一 第二遍循环体 参数二
        tempArgs.push('arguments[' + i + ']');
    }
    console.log(tempArgs);
    ctx.tempFunc = this
    // ctx.tempFunc()
    let evalScript = 'ctx.tempFunc(' + tempArgs +')'
    eval(evalScript);
    delete ctx.tempFunc
};

// ---------------- 实现myApply
Function.prototype.myApply = function(ctx,arr){
  ctx.tempFunc = this
  let result
  if(!arr){
    result = ctx.tempFunc() // 直接执行
  }else{
    let args = []
    for (let i = 0, len = arr.length; i < len; i++) {
      args.push('arr[' + i + ']');
  }
    result = eval('ctx.tempFunc(' + args + ')')
  }
  delete ctx.tempFunc
  return result 
}

sayName.myCall(o,'参数一','参数二') // 理论上输出 yayxs