---
title: new Vue的时候发生了什么
---
当调用new Vue的时候传入`options` 会执行 this._init 即是`Vue.prototype._init()`
```js

```
执行new Vue()时，会调用 _init方法，该方法实现了一系列初始化操作，包括整个生命周期的流程以及响应式系统流程的启动等。
它将 data 对象中的所有的 property 加入到 Vue 的响应式系统中。当这些 property 的值发生改变时，视图将会产生“响应”，**即匹配更新为新的值**