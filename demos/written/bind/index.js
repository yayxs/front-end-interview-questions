const user = {
  name: "yayxs",
};

function showYourself(param1,param2) {
  console.log(this.name); // yayxs
  console.log(param1) // 参数一
  console.log(param2) // 参数二
}

let resultFn;
resultFn = showYourself.bind(user,'参数一');
resultFn('参数二')
Function.prototype.mySecBind = function(ctx){
    let _this = this
    console.log([...arguments])
    Array.prototype.slice.call(arguments, 1);
    return function (){
        return _this.apply(ctx)
    }
}

resultFn = showYourself.mySecBind(user);


let oldArr = ['0','1']

let newArr = Array.prototype.slice.call(arguments, 1);