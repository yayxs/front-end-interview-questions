---
title: 手写实现防抖函数（debounce/防抖动）
---

# 手写实现防抖函数（debounce/防抖动）


## 第一个防抖函数

```js
let num =1
      const container = document.querySelector('.container')
      // 基本函数内容
      function commonFnCon(){
        container.innerHTML = num++
      }
      function baseShowNumber(){
        commonFnCon()
        console.log(this)  // <div>num</div>
      }
      function firstShowNumber(){
        commonFnCon()
        console.log(this) // this 指的是 window
      }
      
      function firstDebounce(fn,wait){
        let timerId = null;
        return function (){
          if(timerId) clearTimeout(timerId)
          // 一句话：一件事情触发了，1s内不再触发此事件
          timerId = setTimeout(fn,wait)
        }
      }
      // container.onmousemove = baseShowNumber
      container.onmousemove = firstDebounce(firstShowNumber,1000)
```

## 第二个防抖函数解决this的指向问题

```js
let num =1
      const container = document.querySelector('.container')
      // 基本函数内容
      function commonFnCon(){
        container.innerHTML = num++
      }
      function baseShowNumber(){
        commonFnCon()
        console.log(this)  // <div>num</div>
      }
      function secShowNumber(){
        commonFnCon()
        console.log('sec',this) // this 指的是 window
      }
      
      function secDebounce(fn,wait){
        let timerId = null;
        return function (){
          let ctx = this 
          console.log('ctx',ctx) // 此时的ctx 就是baseShowNumber中的<div>num</div>

          if(timerId) clearTimeout(timerId)
          // 一句话：一件事情触发了，1s内不再触发此事件
          timerId = setTimeout(()=>{
            // 接下来就是把当前环境的this绑定到事件函数（这里指的是baseShowNumber）上
            // 并执行该事件函数
            fn.apply(ctx)
          },wait)
        }
      }
      // container.onmousemove = baseShowNumber
      container.onmousemove = secDebounce(secShowNumber,1000)

```

## 第三个防抖函数修复事件对象为undefined的问题

```js
let num =1
      const container = document.querySelector('.container')
      // 基本函数内容
      function commonFnCon(){
        container.innerHTML = num++
      }
      function baseShowNumber(e){
        commonFnCon()
        console.log(e) // MouseEvent 
        console.log(this)  // <div>num</div>
      }
      function thirdShowNumber(e){
        commonFnCon()
      }
      
      function thirdDebounce(fn,wait){
        let timerId = null;
        return function (){
          let ctx = this
          let args =  arguments
          console.log('ctx',ctx) // 此时的ctx 就是baseShowNumber中的<div>num</div>
          console.log('args',arguments) // 此时的arguments 刚好是个伪数组，其中包含事件对象
          if(timerId) clearTimeout(timerId)
          // 一句话：一件事情触发了，1s内不再触发此事件
          timerId = setTimeout(()=>{
            // 接下来就是把当前环境的this绑定到事件函数（这里指的是baseShowNumber）上
            // 并执行该事件函数
            fn.apply(ctx,args)
          },wait)
        }
      }
      // container.onmousemove = baseShowNumber
      container.onmousemove = thirdDebounce(thirdShowNumber,1000)
```

## 小结

上述实现的依然是不够完整的，接下来自己再延伸探索吧，贴上我们企业项目中的防抖函数

```js
const debounce = (fn, delay, isImmediate) => {
    var timer = null;
    return function() {
        var that = this;
        var args = [].slice.call(arguments);
        var callNow = !timer && isImmediate;

        if(timer) clearTimeout(timer);

        // 非立即执行
        timer = setTimeout(function() {
            timer = null;
            if(!isImmediate) fn.apply(that, args);
        }, delay);
        // 立即执行
        if(callNow) fn.apply(that, args);
    }
};
 export {
     debounce
 }
```

### 业务场景

 - 主要是点击按钮刷新操作，用于防止频繁刷新
 - 还有就是form表单的验证(异步调接口的验证场景)