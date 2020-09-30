---
title: null和undefined有什么区别
---

 - null 空指针对象
 - undefined 未初始化变量
 - null == undefined true
 - 用途完全不一样

在定义将来要保存对象值的变量时，建议使用null来初始化，不要使用其他值。
虽然null == undefined是true（因为这两个值类似），但null === undefined是false，因为它们不是相同的数据类型。