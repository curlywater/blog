---
title: border-radius

tags: [CSS基础]

permalink: /f2e/css/css-basic/border-radius
---

# border-radius 要点整理

> 圆角是由圆或者椭圆和边框交集形成的。

![](./images/border-radius-sh.png)

`border-radius`即指定圆的半径或者是椭圆的半长轴和半短轴。

## border-radius

四个圆角可分别设置，在`border-radius`中按顺时针排列

```css
border-radius: border-top-left-radius border-top-right-radius
  border-bottom-right-radius border-bottom-left-radius;
```

```css
border-radius: 10px; // 全为10px
border-radius: 10px 20px; // 左上、右下10px，右上、左下20px
border-radius: 10px 20px 15px; // 左上10px，右上20px，右下15px，左下20px
border-radius: 10px 20px 15px 5px; // 左上10px，右上20px，右下15px，左下5px
```

## 设置椭圆圆角

```css
border-radius: 半长轴(左上 右上 右下 左下) / 半短轴(左上 右上 右下 左下)
border-radius: 10px/30px;  // 半长轴是10px，半短轴是30px
border-radius: 4px 3px 6px / 2px 4px;  // 左上4px/2px 右上3px/4px 右下6px/2px 左下3px/4px
```

## 百分比

与宽度相关，常用于画圆或者椭圆

## background-color 泄漏问题

背景默认延伸到边框之下，通过`background-clip`解决

```css
.round {
  border-radius: 10px;
  /* Prevent background color leak outs */

  -webkit-background-clip: padding-box;

  -moz-background-clip: padding;

  background-clip: padding-box;
}
```

## 表格

当 [border-collapse](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-collapse) 的值为 `collapse` 时，`border-radius` 属性不会被应用到表格。

## 参考资料

[MDN border-radius](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-radius)

[CSS-Tricks border-radius](https://css-tricks.com/almanac/properties/b/border-radius/)
