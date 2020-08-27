---
title: flexbox 弹性布局

tags: [CSS基础]

permalink: /f2e/css/css-basic/flexbox
---

# flexbox 弹性布局

弹性容器分为主轴和侧轴两个方向。

![](https://css-tricks.com/wp-content/uploads/2018/11/00-basic-terminology.svg)

弹性布局：分别在主轴和侧轴方向上，弹性分配子项的尺寸和剩余空间，亦可指定子项的对齐方式。

## 属性介绍

**弹性容器**

- `flex-direction`: 指定主轴方向
- `flex-wrap`: 指定在主轴上的换行效果
- `justify-content`: 如何分配主轴上的剩余空间
- `align-items`：子项在侧轴上如何分布
- `align-content`：行在侧轴上如何分布（可换行的情况下生成多行）

**子项**

- `order`: 子项排列顺序
- `flex-grow`: 有剩余空间，子项放大比例
- `flex-shrink`: 空间不足，子项缩小比例
- `flex-basis`: 子项默认占据空间
- `align-self`: 指定某一子项在侧轴上分布策略

**组合值**

- `flex-flow`：`flex-direction flex-wrap`
- `flex`：`none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]`
    - 设置一个非负数字相当于设置`flex-grow`，并且`flex-basis`设置为`0%`
    - 设置两个非负数字相当于设置`flex-grow`和`flex-shrink`，并且`flex-basis`设置为`0%`
    - 设置一个长度或百分比相当于设置`flex-basis`

特殊值说明：
- `flex: initial` - `flex: 0 1 auto`
- `flex: none` - `flex: 0 0 auto`
- `flex: auto` - `flex: 1 1 auto`
- `flex: 1` - `flex: 1 1 0`

## 默认情况

``` css
.container {
    display: flex;
    flex-direction: row;
    flex-wrap: no-wrap;
    justify-content: flex-start;
    align-items: stretch;
    align-content: stretch;
}

.item {
    order: 0;
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: auto;
    align-self: auto;
}
```

- `align-items: stretch`：子项在侧轴上拉伸以填充容器，但依然以自身设置的`min-height/height/max-height`优先
- `order: 0`：所有子项序号统一为0，因此按元素自然顺序排布
- `flex-grow: 0`：默认不进行放大
- `flex-shrink: 1`：所有子项比例值都为1，空间不够时，默认按1倍缩放
- `flex-basis: auto`：子项默认按自身宽高占据空间

特殊值说明

`flex-basis: 0` - 子项按照内容占据空间，忽视子项设置的`min-width/width/max-width`


## 子项的特性

弹性子项生成了一个BFC，一个依赖`z-index`的层叠上下文。

`float`，`clear`并且`vertical-align`对弹性子项没有影响。

flexbox只是对内容区域进行缩放，对`padding`无缩放功能。