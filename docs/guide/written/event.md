---
title: 手写实现EventBus/EventEmitter
---

# 手写实现事件总线 EventBus

```js
// eventBus.js 文件
import Vue from "vue";
const EventBus = new Vue(); // 本质上也是 Vue 实例
export default EventBus;
```

```js
// main.js
import EventBus from "eventBus.js";

Vue.prototype.EventBus = EventBus;
```

```js
// 派发事件
this.$EventBus.$emit("sendVal", "派发事件的");
// 监听事件
this.$EventBus.$on("sendVal", (val) => {
  console.log(val);
});
```

```js
class EventEmitter {
  constructor() {
    this.handles = new Map(); // 存储实践回调之间的关系
  }

  on(evtName, cb) {
    if (!this.handles.has(evtName)) {
      this.handles.set(evtName, []);
    }

    this.handles[evtName].push(cb);
  }

  emit(evtName, ...args) {
    if (this.handles.has(evtName)) {
      for (let i = 0, len = this.handles[evtName].length; i < len; i++) {
        this.handles[evtName][cb](...args);
      }
    }
  }

  off(evtName, cb) {
    const cbs = this.handles[evtName];
    const idx = cbs.indexOf(cb);
    if (idx !== -1) {
      cbs.splice(idx, 1);
    }
  }
  once(evtName, cb) {
    const warp = (...args) => {
      cb(...args);
      this.off(evtName, warp);
    };
    this.on(evtName, warp);
  }
}
```
