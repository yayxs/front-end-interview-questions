---
title: Vue 组件中的参数如何传递？如何进行通信
---

# vue 组件中的参数如何传递？如何进行通信

::: tip

- Vue 中常见的通信方式，组件传值


:::

## 兄弟不相关组件

### vuex

**不多说**

### 事件总线

```js
// event-bus.js 文件
import Vue from "vue";

export default new Vue();

// main.js
import Bus from "../utils/event-bus";

new Vue({
  router,
  data: { Bus },
  render: (h) => h(App),
}).$mount("#app");

// 派发事件
this.$root.Bus.$emit("sendVal", 123);
// 监听事件
this.$root.Bus.$on("sendVal", (val) => {
  console.log(val);
});
```
