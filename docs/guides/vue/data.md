### 请你谈谈 Vue 组件中的 Data

#### Data 为什么是一个函数

在 Vue 底层最终被处理为一个函数，这些函数的执行结果就是最终的数据，请问为什么 strats.data 会被处理为一个函数，通过函数返回的数据对象，保证每一个组件的实例都有唯一的数据副本，作用是为了避免组件之间互相影响,在初始化数据状态的时候就是通过如下的方法进行获取数据然后处理

```js
// 策略函数 要求data是一个函数 否则会给出一个警告
strats.data = function (
  parentVal: any,
  childVal: any,
  vm?: Component
): ?Function {
  if (!vm) {
    // 传递 vm 参数 必须要求是一个函数
    if (childVal && typeof childVal !== "function") {
      process.env.NODE_ENV !== "production" &&
        warn(
          'The "data" option should be a function ' +
            "that returns a per-instance value in component " +
            "definitions.",
          vm
        );

      return parentVal;
    }
    return mergeDataOrFn(parentVal, childVal);
  }

  return mergeDataOrFn(parentVal, childVal, vm);
};
```

#### 返回的不是纯对象 Vue 是怎么做的

```js
if (!isPlainObject(data)) {
  data = {};
  process.env.NODE_ENV !== "production" &&
    warn(
      "data functions should return an object:\n" +
        "https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function",
      vm
    );
}
```

#### data 数据对象中的 key 与 methods 对象中的 key 冲突时 Vue 是怎么做的

```js
if (props && hasOwn(props, key)) {
  process.env.NODE_ENV !== "production" &&
    warn(
      `The data property "${key}" is already declared as a prop. ` +
        `Use prop default value instead.`,
      vm
    );
} else if (!isReserved(key)) {
  proxy(vm, `_data`, key);
}
```

#### 为什么可以直接通过 `this.xxx` 访问`data` 里的值

proxy 函数的原理是通过 Object.defineProperty 函数在实例对象 vm 上定义与 data 数据字段同名的访问器属性，并且这些属性代理的值是 vm.\_data 上对应属性的值。

```js
export function proxy(target: Object, sourceKey: string, key: string) {
  sharedPropertyDefinition.get = function proxyGetter() {
    return this[sourceKey][key];
  };
  sharedPropertyDefinition.set = function proxySetter(val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}
```

#### 为什么不在合并阶段就把数据合并好，而是要等到初始化的时候再合并数据？

因为 inject 和 props 这两个选项的初始化是先于 data 选项的，这就保证了我们能够使用 props 初始化 data 中的数据

这样就保证了我们在 data 中使用`props` 中的值