---
title: JavaScript的数据类型有哪些,存储有什么区别？
---


# JavaScript的数据类型有哪些,存储有什么区别？
## 数据类型的种类
js 中的数据类型大体分为两大类：一是基本的数据类型（简单数据类型、原始类型）二是复杂数据类型

| Tables   |                    desc                     |      other |
| -------- | :-----------------------------------------: | ---------: |
| 原始类型 | Number String Null Undefined Symbol Boolean |     Symbol |
| 复杂类型 |                   Object                    | 存储的引用 |

## 存储区别
- 6种原始值：Undefined、Null、Boolean、Number、String和Symbol。保存原始值的变量是按值（by value）访问的，因为我们操作的就是**存储在变量中的实际值**。

- 引用值是保存在内存中的对象 JavaScript不允许直接访问内存位置，因此也就不能直接操作对象所在的内存空间。在操作对象时，实际上操作的是对该对象的引用（reference）而非实际的对象本身
保存引用值的变量是按引用（by reference）访问的