---
title: 列表渲染为什么设置key，不建议使用索引`index`作为key,什么情况下会有什么问题？
---

# Vue 中的 key 有什么作用？

目前不写`key` 的情况下，编辑器会检测报错

```html
 <li v-for="(item,index) in list">
             <input type="checkbox">{{item.name}}
        </li>
```