---
title: 二叉树
permalink: /algo/binary-tree
---

# 二叉树

## 二叉树的概念

![](https://static001.geekbang.org/resource/image/09/2b/09c2972d56eb0cf67e727deda0e9412b.jpg)

1. 二叉树：每个节点最多有两个子节点，可以没有节点、有一个节点、有两个节点
2. 满二叉树：每个节点都有左右节点，全满
3. 完全二叉树：顺序填充，最后一层不满

## 二叉树的存储方式

- 链式存储
- 顺序存储：适合完全二叉树，和链式存储相比不会浪费空间（2*i是左子节点，2*i+1是右子节点，i/2是根节点）

## 二叉树的遍历

以根节点操作出现的位置命名，前序遍历，中序遍历，后序遍历。如下图所示，二叉树遍历的时间复杂度为O(n)，n是节点个数。

![](https://static001.geekbang.org/resource/image/ab/16/ab103822e75b5b15c615b68560cb2416.jpg)

二叉树遍历的实现可以使用递归写法也可使用迭代写法。

``` js
function traverse(TreeNode root) {
    // 前序遍历
    traverse(root.left)
    // 中序遍历
    traverse(root.right)
    // 后序遍历
}
```

``` js
var traversal = function(root) {
    const result = [];
    const stack = [];

    if (root) {
        stack.push(root);
    }

    while(stack.length > 0) {
        const node = stack.pop();
        result.push(node.val);
        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
    }

    return result;
};
```

## 算法框架

万物皆是二叉树，无论是快排、归并，还是回溯、分治，都是建立在树的算法基础上。核心在于两个步骤：
- 先搞清楚当前 root 节点该做什么，然后根据函数定义递归调用子节点。
- 确定base case

### 练习题

[翻转二叉树](https://leetcode-cn.com/problems/binary-tree-postorder-traversal/)

[填充二叉树节点的右侧指针](https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node/)

[将二叉树展开为链表](https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list/)