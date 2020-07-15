function old() {
    // 定义上下文
    let ctx = {
      name: `yayxs`,
    };
  
    // ------------call
    const fnCall = function (age, sex) {
      console.log(`call-${this.name}-${age}-${sex}`);
    };
  
    // fnCall(18, `男`); // call-undefined-18-男
  
    fnCall.call(ctx, 18, `男`); // call-yayxs-18-男
  
    // 总结：改变this指向，执行函数，参数列表传入
  
    // ------------apply
  
    const fnApply = function (age, sex) {
      console.log(`apply-${this.name}--${age}-${sex}`);
    };
  
    // fnApply(18, `男`); apply-undefined--18-男
    fnApply.apply(ctx, [18, `男`]); // apply-yayxs--18-男
  
    // ---------bind
  
    const fnBind = function (age, sex) {
      console.log(`bind-${this.name}-${age}-${sex}`);
    };
  
    fnBind.bind(ctx); // 没有输出
  
    const res = fnBind.bind(ctx);
  
    console.log(res); // [Function: bound fnBind]
  
    res(18, "男"); // bind-yayxs-18-男
  
    // -----------------------
    Function.prototype.myCall = function (ctx, ...params) {
      // console.log(ctx); { name: 'yayxs' }
      // console.log(...params); 18 男
      if (typeof ctx === "object") {
        ctx = ctx || window;
      } else {
        ctx = null;
      }
  
      // 临时方法名
      let funcName = Symbol();
  
      // console.log(funcName);
      ctx[funcName] = this;
      // console.log(this); [Function: testFn]
  
      ctx[funcName](...params);
      delete ctx[funcName];
    };
  
    // 实际调用
  
    const testFn = function (age, sex) {
      console.log(`test-call-${this.name} - ${age} - ${sex}`);
    };
  
    testFn.myCall(ctx, 18, `男`);
  }
  