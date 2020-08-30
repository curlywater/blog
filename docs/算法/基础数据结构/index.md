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

**编程技巧**

1. 设置哨兵，一致化插入第一个结点和删除最后一个结点的特殊情况
2. 检查边界条件：
    1. 空链表的执行情况
    2. 只包含一个结点
    3. 只包含两个结点
    4. 处理头结点和尾结点

- [x] [单链表反转](https://leetcode-cn.com/problems/reverse-linked-list/)
- [x] [链表中环的检测](https://leetcode-cn.com/problems/linked-list-cycle/solution/lian-biao-zhong-huan-de-jian-ce-by-curly_water/)
- [x] [两个有序的链表合并](https://leetcode-cn.com/problems/merge-two-sorted-lists/solution/liang-ge-you-xu-de-lian-biao-he-bing-shuang-lian-b/)
- [x] [删除链表倒数第 n 个结点](https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/solution/shan-chu-lian-biao-de-dao-shu-di-n-ge-jie-dian-shu/)
- [x] [求链表的中间结点](https://leetcode-cn.com/problems/middle-of-the-linked-list/solution/kuai-man-zhi-zhen-by-curly_water/)
- [x] [使用单链表判断回文串](https://leetcode-cn.com/problems/palindrome-linked-list/solution/hui-wen-lian-biao-zhong-jian-wei-zhi-fan-zhuan-by-/)
- [x] [使用单链表实现LRU](https://leetcode-cn.com/problems/lru-cache-lcci/solution/lrudi-yi-ban-dan-lian-biao-shi-xian-by-curly_water/)