---
title: Grid 网格布局
tags: [CSS布局]
permalink: /f2e/css/css-basic/grid
---

# Grid 网格布局

在一个容器内设定行和列绘制网格，绘制好网格后，将子项填入网格中。

## 网格布局容器

### 设置行和列

- `grid-template-columns`: 描述列划分情况
- `grid-template-rows`: 描述行划分情况

**行列值**

`10px | 20% | 1fr | auto | minmax(200px, 1fr)`
- `fr` 表示比例关系
- `minmax(min, max)`，限定调整区间
- `auto`，自动分配剩余空间

``` css
.container {
    display: grid;
    height: 100vh;
    grid-template-columns: 100px 20% auto minmax(50px, 5%);
    grid-template-rows: 1fr 2fr;
}
```

**repeat函数**

`repeat(重复次数，分布组合)`

``` css
.container {
    display: grid;
    height: 100vh;
    grid-template-columns: repeat(2, 100px 20%);
    grid-template-rows: repeat(auto-fill, 100px);
}
```

### 给网格线命名

网格线默认有序号（number），但没有名字（name），可以在划分行列时给网格线命名。

序号和命名都可以用于指定子项绘制位置。

``` css
.container {
    display: grid;
    grid-template-rows: [row1-start] 25% [row1-end row2-start] 25% [row2-end];
    grid-template-columns: repeat(3, 20px [col-start]);
}

.item {
    grid-column-start: col-start 2;
}
```

### 给网格区域命名

`grid-template-areas`

``` css
.container {
  display: grid;
  height: 100vh;
  grid-template-columns: 50px 50px 50px 50px;
  grid-template-rows: auto;
  grid-template-areas: 
    "header header header header"
    "main main . sidebar"
    "footer footer footer footer";
}
.item {
    border: 1px solid;
}
.item-a {
  grid-area: header;
}
.item-b {
  grid-area: main;
}
.item-c {
  grid-area: sidebar;
}
.item-d {
  grid-area: footer;
}
```

### 设置行列间隔

`column-gap: 1px;`
`row-gap: 20%;`
`gap: [row] [column];`

### 设置单元格内容对齐方式

**行方向**

`justify-items: start | end | center | stretch;`

默认为`stretch`

**列方向**

`align-items: start | end | center | stretch;`

默认为`stretch`

**组合**

`place-items`

### 设置容器内剩余空间分布

**行方向**

`justify-content: start | end | center | stretch | space-around | space-between | space-evenly;`

**列方向**

`align-content: start | end | center | stretch | space-around | space-between | space-evenly;`

**组合**

`place-content`

### 子项超出网格划分范围时

自动补全网格

`grid-auto-rows`，自动补全多余单元格的行高
`grid-auto-columns`，自动补全多余单元格的列宽

### 子项自动放置的顺序

子项如何分布到剩余单元格

`grid-auto-flow: row | column | row dense | column dense`

`row dense`，先行后列，尽量不出现空单元格
`column dense`，先列后行，尽量不出现空单元格

## 网格子项

### 指定起止网格线

``` css
.item-a {
  grid-column-start: 2;
  grid-column-end: five;
  grid-row-start: row1-start;
  grid-row-end: 3;
}
```

值：`line number | line name | span [number of grid tracks] | auto`

``` css
.item {
  grid-column: <start> / <end>;
  grid-row: <start> / [end>;
}
```

### 指定网格区域

``` css
.item {
  grid-area: <name>;
  grid-area: <row-start> / <column-start> / <row-end> / <column-end>;
}
```

### 设置内容对齐方式

- 行方向：`justify-self`
- 列方向：`align-self`
- 组合：`place-self`