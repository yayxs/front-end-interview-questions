## :blue_book: 目录

### CSS

<details>
<summary>查看目录</summary>

  </details>

### DOM

<details>
<summary>查看目录</summary>

</details>

### JavaScript

<details>
<summary>查看目录</summary>

-

\*

-

与内存泄漏

</details>

### jQuery

<details>
<summary>查看目录</summary>

- 手写插件

</details>

### Vue

<details>
<summary>查看目录</summary>

</details>

### React

<details>
<summary>查看目录</summary>

</details>

### Flutter

<details>
<summary>查看目录</summary>

- [列表组件中的](#列表组件中的`key`)

</details>

### TypeScript

<details>
<summary>查看目录</summary>
- 谈你对 TypeScript 的理解？

- 比较一下 TypeScript 和 JavaScript，在什么情况下你觉得需要 TypeScript ?

</details>

### Node

<details>
<summary>查看目录</summary>

</details>

### Babel

<details>
<summary>查看目录</summary>

-

</details>

### 框架

<details>
<summary>查看目录</summary>

- React 和 Vue 的区别？
- 能对比一下 Create React App 和 Vue CLI 吗？
- 了解 MVC / MVP / MVVM 的区别吗？
  </details>

### 测试

<details>
<summary>查看目录</summary>

- 平常开发的过程中有写过单元测试或者 e2e 测试么？
- 自动化测试主要是做什么？

</details>

### Webpack

<details>
<summary>查看目录</summary>

</details>

### 浏览器

<details>
<summary>查看目录</summary>

- 常见的浏览器内核
- 常见的兼容性问题
- 重绘与回流
- 本地存储 cookie 与 token
- 了解 SameSite 属性吗
- 如何实现浏览器内多个标签页之间的通信?

</details>

### 移动端

<details>
<summary>查看目录</summary>

- 触摸事件

- 移动端的兼容问题

- 移动端 300ms 延迟

- 移动端 rem

- 移动端 1px

</details>

###

### 服务端

<details>
<summary>查看目录</summary>

</details>

## 笔试题收藏

### 考点：数据类型

```js
let a = {
  name: 'aname',
  age: 20,
}

function change(o) {
  o.age = 24 // a = { name:'aname',age:24}
  o = {
    name: 'oname',
    age: 30,
  }
  return o // 新的内存
}
let b = change(a) // 注意这里没有new，后面new相关会有专门文章讲解
console.log(b.age) // 第一个console 30
console.log(a.age) // 24
```
