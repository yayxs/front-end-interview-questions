---
title: 如何理解Vue中的`v-model`
---

# v-model实现的原理？

Vue 还提供了 v-model 指令，它能轻松实现表单输入和应用状态之间的双向绑定

```html
 <div id="app">
      <input type="text" id="ipt" />
    </div>
    <!-- <script src="https://unpkg.com/vue@next"></script> -->
    <script>
      // 1 取到DOM元素
      const dom = document.querySelector("#ipt");
      // console.log(dom);
      const evtHandler = (e) => {
        // console.log(e.target.value);
        dom.value = e.target.value;
      };
      dom.addEventListener("input", evtHandler);
    </script>
```