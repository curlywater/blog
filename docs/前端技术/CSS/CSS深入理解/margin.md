---
title: CSS深入理解之margin
permalink: /f2e/css/deep-think/margin
---

# CSS深入理解之margin

## margin与容器的尺寸

- 可视尺寸：对于没有设定`width`的块元素，`margin`可改变元素水平方向的可视尺寸
- 占据尺寸：对于`block/inline-block`元素，`margin`可改变元素水平/垂直方向的占据尺寸

## margin与百分比单位

- 普通元素的百分比`margin`都是相对于容器的宽度计算的
- 绝对定位元素的百分比是相对于包含块的宽度计算的

## margin重叠

### 前提

1. 只应用于block 元素
2. 不考虑writing-mode 的情况下，只发生在垂直方向

### 场景

1. 兄弟元素发生重叠
2. 父元素和第一个/最后一个子元素发生重叠
   - `margin-top`重叠：第一个子元素设置`margin-top`相当于父元素设置`margin-top`，产生条件需同时满足：
     - 父元素不是BFC
     - 父元素没有`border-top`
     - 父元素没有`padding-top`
     - 父元素和第一个子元素之间没有inline元素
   - `margin-bottom`重叠：最后一个子元素设置`margin-bottom`相对于父元素设置`margin-bottom`，产生条件需同时满足：
     - 父元素不是BFC
     - 父元素没有`border-bottom`
     - 父元素没有`padding-bottom`
     - 父元素和最后一个子元素之间没有inline元素
     - 父元素没有`height, min-height, max-height`限制
3. 空block元素发生重叠（设置margin: 1em 0;只有1em高度），产生条件需同时满足：
   - 元素没有`border`设置
   - 元素没有`padding`设置
   - 元素内没有`inline`元素
   - 元素没有`height`或者`min-height`

### 重叠计算

1. 正正取大值
2. 正负值相加
3. 负负最负值

## margin: auto

### 作用前提和原理

block元素，未设置宽度的情况下元素会自动填充容器；margin的作用是分配元素宽度以外的剩余空间

### 垂直居中

**writing-mode: vertical-lr**
``` css
html {
  writing-mode: vertical-lr;
}

.parent {
  width: 200px;
  height: 300px;
  background: red;
  margin: auto;
}
```

**position: absolute**
``` css
.parent {
  width: 200px;
  height: 300px;
  background: red;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
}
```

## margin无效的可能

- 非替换的内联元素，垂直方向的`margin`无效
- `margin`重叠
- `table`相关的元素，`margin`无效
- 绝对定位元素因无法与周边元素产生间距，因此看似无效
- 跟随浮动元素，有可能因`margin`值不够，看似无效
- 内联特性导致`margin`失效

## margin的其他属性

- `margin-start/margin-end`:与流方向相关（direction, writing-mode）

- `margin-collapse`: margin是否重叠，```-webkit-margin-collapse: collapse（重叠）|discard（取消）|separate（分隔）```