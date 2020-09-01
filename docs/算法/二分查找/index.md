---
title: 二分查找
permalink: /algo/bsearch
---

# 二分查找


## 代码实现

迭代实现

``` js

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = left + ((right - left) >> 1);
        if (nums[mid] === target) return mid;
        if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return -1;
};
```

递归实现

``` js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    return (function f(left, right) {
        if (left > right) return -1;

        const mid = left + ((right - left) >> 1);

        if (nums[mid] === target) return mid;
        else if (nums[mid] > target) return f(left, mid - 1);
        else if (nums[mid] < target) return f(mid + 1, right);
    })(0, nums.length - 1);
};
```

注意点：
- 边界条件`left <= right`
- 计算中间值，避免数溢出，`(left + right) / 2` -> `left + (right - left) / 2` -> `left + ((right - left) >> 1)`

## 效率分析

空间复杂度：$O(1)$

时间复杂度：$O(logn)$

**推导过程**

二分查找主要消耗在不断进行缩小区间操作，需要计算复杂度，相当于计算进行区间缩小的次数。

区间长度的缩小趋势：n、n/2、n/4、n/8、n/16、...$n / 2^k$

推导出区间长度 = $n / 2^k$，当$n / 2^k = 1$时，$k = log_2 n$

因此时间复杂度为$O(logn)$


## 二分查找的应用限制

- 必须使用数组，由于随机访问元素的需求，无法使用链表实现
- 静态有序数据，适用于一次排序多次查找的场景，不适用于频繁插入、删除的动态数据
- 数据量太小，直接使用顺序查找即可，但如果单次比较就比较复杂，推荐使用二分查找
- 数据量太大，二分查找需要依赖连续的内存空间，数据量过大的情况，内存空间可能无法满足要求


## 二分查找的变体

- 查找第一个等于给定值的元素
- 查找最后一个等于给定值的元素
- 查找第一个大于等于给定值的元素
- 查找最后一个小于等于给定值的元素

本质上都是扩大限制范围，将左右指针往目标对象靠，到达边界后判断是否符合要求，边界：
1. 数组边界
2. 同值范围边界

``` js
function bsearch (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = left + ((right - left) >> 1);
        if (nums[mid] >= target) {
            right = mid - 1;
            if (mid === 0 || nums[mid - 1] !== target) return mid;
        } else {
            left = mid + 1;
        }
    }

    return -1;
}
```

## 跳表：使用链表模拟二分查找

链表 + 多级索引结构，为相邻的两个结点建立一个索引结点，层层递推。

![](https://static001.geekbang.org/resource/image/49/65/492206afe5e2fef9f683c7cff83afa65.jpg)

### 时间复杂度

![](https://static001.geekbang.org/resource/image/d0/0c/d03bef9a64a0368e6a0d23ace8bd450c.jpg)


第k层有$n / 2^k$个结点，顶层索引$n / 2^k = 2$，$k = log_2 n-1$，即有$log_2 n-1$层。

每层最多需要遍历3个结点，因此最终的时间复杂度为$3 * log_2 n-1$，即$O(logn)$

### 空间复杂度

每层索引的结点个数：$n/2+n/4+n/8…+8+4+2=n-2$，即$O(n)$

### 动态数据结构

支持快速地插入、删除、查找操作，时间复杂度都是 O(logn)。

如果不更新索引，一直插入结点，就容易出现2个索引结点间数据非常多的情况。极端情况下，跳表还会退化成单链表。因此出现更新索引的策略。

> 当往跳表中插入数据的时候，可以选择同时将这个数据插入到部分索引层中。通过一个随机函数，决定将结点从第几级索引开始插入。

[跳表的实现代码](https://github.com/wangzheng0822/algo/blob/master/java/17_skiplist/SkipList.java)
