---
title: 基础数据结构
permalink: /algo/data-structure
---

# 基础数据结构

## 数组

**线性表数据结构**

只有前后两个方向

**存储方式**

连续内存空间，相同类型的数据寻址方式`base_address + i * data_type_size`。

容器：支持动态扩展，重新分配一块更大的空间，将原来的数据复制过去，然后再将新的数据插入。


**时间复杂度**

数组支持随机访问，根据下标随机访问的时间复杂度为 $O(1)$

插入/删除平均时间复杂度 $O(n)$


## 链表

无需连续内存，它通过“指针”将一组零散的内存块串联起来使用

单链表
![](https://static001.geekbang.org/resource/image/b9/eb/b93e7ade9bb927baad1348d9a806ddeb.jpg)

循环链表
![](https://static001.geekbang.org/resource/image/86/55/86cb7dc331ea958b0a108b911f38d155.jpg)

双向链表
![](https://static001.geekbang.org/resource/image/cb/0b/cbc8ab20276e2f9312030c313a9ef70b.jpg)

双向循环链表

![](https://static001.geekbang.org/resource/image/d1/91/d1665043b283ecdf79b157cfc9e5ed91.jpg)

**时间复杂度**

随机访问：$O(n)$
插入/删除结点中“值等于某个给定值”的结点：$O(n)$
插入/删除给定指针指向的结点。单链表$O(n)$，双向链表$O(1)$

双向链表需要更多的内存空间，但在一些操作场景中可以提高代码运行效率。
对于执行较慢的程序，可以通过消耗更多的内存（空间换时间）来进行优化；而消耗过多内存的程序，可以通过消耗更多的时间（时间换空间）来降低内存的消耗。

**和数组对比**

数组：访问效率高，大小固定，扩容代价
链表：内存消耗翻倍，频繁操作，内存碎片，频繁GC


