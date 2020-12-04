观察者 Observer
observe  观察
消费者 consumer

```js

 if (opts.data) { // 判断data 选项是否存在 存在的话 调用 initData() 函数初始化data 选项
    initData(vm)
  } else {
    // 否则通过observe 观测一个空对象
    observe(vm._data = {}, true /* asRootData */) 
  }
```
其中`observe` 是将data 转换为响应式对象的核心

```js
function initData (vm: Component) {
  let data = vm.$options.data // 定义data 变量 引用vm.$options.data
  data = vm._data = typeof data === 'function' // 判断data 是一个函数
    ? getData(data, vm) // 通过getData 来获取真正的数据
    : data || {}
  if (!isPlainObject(data)) {
    data = {}
    process.env.NODE_ENV !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    )
  }

```