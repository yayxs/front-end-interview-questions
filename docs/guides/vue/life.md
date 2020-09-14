### 谈谈你对`vue`生命周期的理解

首先要了解声明周期的合并策略,

```
let res = (是否有childVal,判断组件的选项中是否有对应名字声明周期钩子)?如果有判断是否有parentVal?如果有将二者合并一个数据：如果没有判断childVal 是不是一个数组?如果childVal是一个数组直接返回:如果不是作为数组的元素然后返回：如果没有childVal直接返回parentVal
```

```js
function mergeHook(
  parentVal: ?Array<Function>,
  childVal: ?Function | ?Array<Function>
): ?Array<Function> {
  const res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
      ? childVal
      : [childVal]
    : parentVal;
  return res ? dedupeHooks(res) : res;
}
```

```js
export const LIFECYCLE_HOOKS = [
  "beforeCreate",
  "created",
  "beforeMount",
  "mounted",
  "beforeUpdate",
  "updated",
  "beforeDestroy",
  "destroyed",
  "activated",
  "deactivated",
  "errorCaptured",
  "serverPrefetch",
];
```