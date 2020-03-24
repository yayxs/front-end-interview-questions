> Q:使用 sort() 对数组 [3, 15, 8, 29, 102, 22] 进行排序，输出结果

- 原地算法[原地算法](https://en.wikipedia.org/wiki/In-place_algorithm)
- 将元素转为字符串
- UTF-16

```js
	/**
     * Sorts an array.
     * @param compareFn Function used to determine the order of the elements. It is expected to return
     * a negative value if first argument is less than second argument, zero if they're equal and a positive
     * value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
     * ```ts
     * [11,2,22,1].sort((a, b) => a - b)
     * ```
     */
    sort(compareFn?: (a: T, b: T) => number): this;
```

- 参数
  - 一个可选的函数（省略：Unicode位点进行排序）
- 返回值
  - 排序后的数组
-  0 -1 计算

采用的`utf-16` ,常见的字符`数字` `英语大小写`  `汉字`

- 阮老师  [字符编码](http://www.ruanyifeng.com/blog/2007/10/ascii_unicode_and_utf-8.html)

- 步骤
  - 转为字符串 数字>英语大写>英语小写>汉字  
  -  [3, 15, 8, 29, 102, 22] ===> ['3', '15', '8', '29', '102', '22']
  - 对比第一个字符===>15  102     29    22    3     8
  - 对比第二个字符===>102 15 22 29 3  8
  - 对比第三个字符===>102 15 22 29 3  8
- 案例

```js
arr.sort((x,y)=>{
    console.log(`排序：${x}----${y}`)
})
```

```
排序：15----3
排序：8----15
排序：29----8
排序：102----29
排序：22----102
```

```js
arr.sort((x,y)=>{
    console.log(`${x}-${y}=${x-y}`)
})
```

```
15-3=12
8-15=-7
29-8=21
102-29=73
22-102=-80
```

```js
arr.sort((x,y)=>{
    console.log(`${x}-${y}=${x-y}`)
    return x-y
})
console.log(arr)
```

```
15-3=12
8-15=-7
8-15=-7
8-3=5
29-8=21
29-15=14
102-15=87
102-29=73
22-15=7
22-102=-80
22-29=-7
[ 3, 8, 15, 22, 29, 102 ]
```

- 总结
  - 返回值小于0    x移动到y前  升序   return x-y
  - 返回值大于0    x移动到y后 降序  return y-x
  - 返回值等于0   大多浏览器相对不变
- 结果：

> [ 102, 15, 22, 29, 3, 8 ]