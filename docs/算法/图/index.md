---
title: 图
permalink: /algo/graph
---

# 图

![](https://static001.geekbang.org/resource/image/df/af/df85dc345a9726cab0338e68982fd1af.jpg)

## 图的概念

树具有自顶向下的连接关系，节点间具有父子关系。图则没有父子层级关系，节点可以相互连接。

- 顶点：图中的节点称为顶点
- 边：顶点之间的连接称为边
- 度：与一个顶点相连的边数称为度。在有向图中，度分为入度和出度
- 加权图：边上如果有权重，那么图称为加权图

## 图的存储

### 邻接矩阵

![](https://static001.geekbang.org/resource/image/62/d2/625e7493b5470e774b5aa91fb4fdb9d2.jpg)

通过二维数组存储。

优点：方便查询

缺点：邻接矩阵是稀疏数组，在顶点很多，但度不多的情况下，容易造成空间浪费。

### 邻接表

![](https://static001.geekbang.org/resource/image/03/94/039bc254b97bd11670cdc4bf2a8e1394.jpg)

每个顶点都对应一个链表，存储与其相连接的其他顶点。

优点：节省存储空间

缺点：不方便查找。改进方法：使用高效的动态数据结构替代链表，比如平衡二叉搜索树、跳表、散列表等。


## 图的搜索算法

### 深度优先搜索（DFS）

深度优先搜索其实就是做回溯。

每条边进行一次遍历、一次回退，因此时间复杂度为$O(E)$，E是边的条数。

在空间上，DFS利用调用栈，复杂度是$O(logN)$。

### 广度优先搜索（BFS）

BFS类似按面搜索，计算到符合要求的终点便跳出；而DFS按线搜索，必须遍历完所有结点才能得到结果。因此在时间上，BFS应用于最短路径寻找会有一些优势。但同时空间复杂度上，DFS是递归调用最大栈深度是树层数$O(logN)$，BFS则需要存放待访问和已访问节点空间复杂度是$O(N)$。

一个队列存放待观察节点，一个集合存放已访问节点（避免走回头路）。

``` java
// 计算从起点 start 到终点 target 的最近距离
int BFS(Node start, Node target) {
    Queue<Node> q; // 核心数据结构
    Set<Node> visited; // 避免走回头路

    q.offer(start); // 将起点加入队列
    visited.add(start);
    int step = 0; // 记录扩散的步数

    while (q not empty) {
        int sz = q.size();
        /* 将当前队列中的所有节点向四周扩散 */
        for (int i = 0; i < sz; i++) {
            Node cur = q.poll();
            /* 划重点：这里判断是否到达终点 */
            if (cur is target)
                return step;
            /* 将 cur 的相邻节点加入队列 */
            for (Node x : cur.adj())
                if (x not in visited) {
                    q.offer(x);
                    visited.add(x);
                }
        }
        /* 划重点：更新步数在这里 */
        step++;
    }
}
```
