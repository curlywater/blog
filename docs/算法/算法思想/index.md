---
title: 算法思想：贪心、分治、回溯、动态规划
permalink: /algo/thinking
---

# 算法思维：贪心、分治、回溯、动态规划

当我们面对列举所有可能、求最优解之类的问题，其实是在考虑如何做选择，然后用计算机模拟这个过程。常见的方法有：

- 贪心：择优。每次面对岔路口时，选择当前最优的一条路。但有局限，局部最优不一定是广义的最优解。
- 回溯：暴力穷举。面对岔路口时，随意选择一条路，当发现这条路走不通的时候，就回退到上一个岔路口，另选一种走法继续走。可以使用备忘录记录已计算过的结果、使用剪枝避免不比较的计算。
- 动态规划：优化穷举。由已知状态递推出未知状态。


## 贪心算法

顾名思义，贪心即每一次都做收益率最大的选择。

应用场景：使具有**限制值**和**期望值**。要求在满足限制值的情况下，获取最大期望值。

核心思想：每次选择时，选择能以最小代价得到相同期望值的选项。

验证：贪心每次选择当前最优项，但不一定是广义的最优解，因此需要进行例举验证。

难点：将要解决的问题抽象成贪心算法模型。

**练习**

[分发饼干](https://leetcode-cn.com/problems/assign-cookies/)

[最大子序和](https://leetcode-cn.com/problems/maximum-subarray/)

[加油站](https://leetcode-cn.com/problems/gas-station/)

[根据身高重建队列](https://leetcode-cn.com/problems/queue-reconstruction-by-height/)

[用最少数量的箭引爆气球](https://leetcode-cn.com/problems/minimum-number-of-arrows-to-burst-balloons/)


## 分治

分而治之。

拆分为子问题 -> 子问题求解 -> 将子问题合并为原问题的解。

应用场景：
1. 原问题与分解成的小问题具有相同的模式；
2. 原问题分解成的子问题可以独立求解，子问题之间没有相关性
3. 具有分解终止条件
4. 可以将子问题合并成原问题，而这个合并操作的复杂度不能太高，否则就起不到减小算法总体复杂度的效果了。


**练习**

[多数元素](https://leetcode-cn.com/problems/majority-element/)


## 回溯

回溯的本质是纯暴力穷举。

面对岔路口时，随意选择一条路，当发现这条路走不通的时候，就回退到上一个岔路口，另选一种走法继续走。

剪枝：在实现的过程中，剪枝操作是提高回溯效率的一种技巧。利用剪枝，我们并不需要穷举搜索所有的情况，从而提高搜索效率。

### 算法框架

解决一个回溯问题，实际上就是一个决策树的遍历过程。几个关键因素：
- 路径：记录已做过的选择
- 选择列表：当前可做的选择
- 结束条件：到决策树底部，无法再做选择的条件

``` python
result = []
def backtrack(路径, 选择列表):
	if 满足结束条件:
		result.add(路径)
		return
for 选择 in 选择列表:
	做选择
	backtrack(路径, 选择列表)
    撤销选择
```

前序进行选择，后序撤销选择

回溯的经典问题：

[子集](https://leetcode-cn.com/problems/subsets/)

[组合](https://leetcode-cn.com/problems/combinations/)

[全排列](https://leetcode-cn.com/problems/permutations/)

[八皇后](https://leetcode-cn.com/problems/eight-queens-lcci/) 

[解数独](https://leetcode-cn.com/problems/sudoku-solver/)

[括号生成](https://leetcode-cn.com/problems/generate-parentheses/)

[正则表达式匹配](https://leetcode-cn.com/problems/regular-expression-matching/)



## 动态规划

### 思想

动态规划本质是利用历史记录对穷举进行优化：记录重叠子问题的计算结果，避免重复计算。

因此，发现重叠子问题是动态规划核心步骤。**存在重叠子问题的穷举场景，可以应用动态规划解决。**

任何事物都有状态，选择就会改变状态，那么状态也就是某一时刻的历史记录。只要记录状态对应的计算结果，依赖已有的状态逐步递推就能得到最终状态的计算结果。

一个问题对应多个状态，容易出现多维数组记录的情况，寻找依赖的单调性将记录降维，这称为“状态压缩”。这一步骤直接降低空间和时间复杂度，注入灵魂，完成算法升华。



### 步骤

1. 状态：确定会改变的量；
2. 选择：确定选择的内容；
3. 定义：确定状态和目标值，dp[状态] = 结果(选择1，选择2，选择3)，用语言表达选择一/选择二/选择三...对应的状态依赖和目标值更改；
4. dp：用公式表示状态和目标值的关系；
5. base case：确定初始值；
6. 优化：通过画图模拟状态转移过程，确定能否进行状态压缩。

### 练习

**了解步骤后，该做些什么？**

多练。[Leetcode 动态规划标签](https://leetcode-cn.com/tag/dynamic-programming/)下的简单题，利用动规的基本步骤可以全部解完。



**如何确定状态**？

[198.打家劫舍](https://leetcode-cn.com/problems/house-robber) VS [337.打家劫舍III](https://leetcode-cn.com/problems/house-robber-iii)





**如何进行状态压缩**？

[labuladong的算法小抄 —— 状态压缩：对动态规划进行降维打击](https://labuladong.gitbook.io/algo/dong-tai-gui-hua-xi-lie/zhuang-tai-ya-suo-ji-qiao)


### 经典系列

**股票买卖问题**

[买卖股票的最佳时机](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/solution/)

[买卖股票的最佳时机 II](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/)

[最佳买卖股票时机含冷冻期](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/)

[买卖股票的最佳时机含手续费](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/)

[买卖股票的最佳时机 III](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iii/)

[买卖股票的最佳时机 IV](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iv/)

**路径问题**

[62. 不同路径](https://leetcode-cn.com/problems/unique-paths/)

[64. 最小路径和](https://leetcode-cn.com/problems/minimum-path-sum/)

[72. 编辑距离](https://leetcode-cn.com/problems/edit-distance/)

### 学习资料

[什么是动态规划（Dynamic Programming）？动态规划的意义是什么？](https://www.zhihu.com/question/23995189/answer/1094101149)

[labuladong —— 动态规划系列](https://labuladong.gitbook.io/algo/dong-tai-gui-hua-xi-lie)

[labuladong公众号 —— 动态规划系列](http://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzAxODQxMDM0Mw==&action=getalbum&album_id=1318881141113536512&scene=173&from_msgid=2247484832&from_itemidx=1&count=40#wechat_redirect)

