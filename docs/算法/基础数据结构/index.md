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

容器：支持动态扩容，重新分配一块更大的空间，将原来的数据复制过去，然后再将新的数据插入。


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

1. 设置哨兵，将第一个结点和最后一个结点插入/删除的特殊情况一致化处理
2. 检查边界条件：
    1. 空链表的执行情况
    2. 只包含一个结点
    3. 只包含两个结点
    4. 处理头结点和尾结点


**练习**

- [x] [单链表反转](https://leetcode-cn.com/problems/reverse-linked-list/) <Tag>链表操作</Tag>
- [x] [链表中环的检测](https://leetcode-cn.com/problems/linked-list-cycle/) <Tag>快慢指针</Tag>
- [x] [两个有序的链表合并](https://leetcode-cn.com/problems/merge-two-sorted-lists/) <Tag>链表操作</Tag><Tag>哨兵</Tag>
- [x] [删除链表倒数第 n 个结点](https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/) <Tag>快慢指针</Tag><Tag>哨兵</Tag>
- [x] [求链表的中间结点](https://leetcode-cn.com/problems/middle-of-the-linked-list/) <Tag>快慢指针</Tag>
- [x] [使用单链表判断回文串](https://leetcode-cn.com/problems/palindrome-linked-list/) <Tag>快慢指针</Tag><Tag>链表操作</Tag>
- [x] [使用单链表实现LRU](https://leetcode-cn.com/problems/lru-cache-lcci/)

## 栈

适用于只需一端插入和删除数据，满足先进后出特性的场景。

栈可以由数组或链表实现。
> 事实上，从功能上来说，数组或链表确实可以替代栈，但你要知道，特定的数据结构是对特定场景的抽象，而且，数组或链表暴露了太多的操作接口，操作上的确灵活自由，但使用时就比较不可控，自然也就更容易出错。

动态扩容栈的均摊复杂度$O(1)$

栈的应用场景：
1. 函数调用栈
2. 表达式求值：操作数栈和运算符栈，操作数压栈，运算符比较运算符栈内优先级，计算后再压栈
3. 括号匹配
4. 浏览器前进后退功能：当前访问路径栈和历史访问栈，后退时将当前页面压入历史访问栈，当跳转到新的页面清空历史访问栈

**练习**

- [x] [有效括号](https://leetcode-cn.com/problems/valid-parentheses/)
- [x] [最小栈](https://leetcode-cn.com/problems/min-stack/)
- [x] [比较含退格的字符串](https://leetcode-cn.com/problems/backspace-string-compare/)


## 队列

先进先出。

队列适用场景：有限资源池，当没有空闲资源时，基本上都可以通过“队列”这种数据结构来实现请求排队。

### 顺序队列和链式队列

顺序队列：数组实现的队列。队列空间有限，适合对响应时间敏感的系统。

链式队列：链表实现的队列。队列空间无限。

**顺序队列的实现**
- 队头指针`head`，队尾指针`tail`
- 入队：队尾位置填入，队尾向后移动
- 出队：队头位置输出，队头向后移动
- 队满的判断条件：`tail === n`
- 队空的判断条件：`head === tail`

**循环队列的实现**
- 队头指针`head`，队尾指针`tail`
- 入队：队尾位置填入，队尾`(tail+1)%n`
- 出队：队头位置填入，队头`(head+1)%n`
- 队满的判断条件：`(tail+1)%n === head`
- 队空的判断条件：`head === tail`

存在的问题：`tail`指向尾元素后一位，浪费一个数组的存储空间。

方案二：使用`head`指针和队列长度`count`，计算出尾元素位置`tail = (head + count - 1) % n`

### 高级队列

阻塞队列：在队列的基础上，增加阻塞操作功能。资源不足时等待，资源满足时进行操作。应用于实现生产者-消费者模型

并发队列：解决多线程安全性问题。最简单的实现方式是队入队/出队操作加锁，但粒度过大，因此有了CAS方法

### 练习

- [x] [设计循环队列](https://leetcode-cn.com/problems/design-circular-queue/)
