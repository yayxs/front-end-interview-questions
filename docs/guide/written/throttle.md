---
title: 手写实现节流函数（throttle）
---

# 手写实现节流函数（throttle）

## 认识节流

**节流**是每隔一段时间，只执行一次事件，**防抖**是一件事情触发了，1s内不再触发此事件

```js
  function throttle(func, wait) {
      let timerId = null
      let now = 0
      return function(){
       let context = this;
        let  args = arguments;
        if(!timerId){
          timerId = setTimeout(()=>{
            timerId = null
            func.apply(context,args)
          },wait)
        }
      }
    }
```