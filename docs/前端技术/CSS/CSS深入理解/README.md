---
title: 目录
permalink: /f2e/css/deep-think
---

# 目录

::: tip 说明
【CSS深入理解系列】迁移自历史文章。一些知识点在当下主流浏览器环境中已不再适用，一些效果现在有更好的实现方式，但也可以作为思路扩展。[张鑫旭 —— CSS深入理解](https://www.imooc.com/t/197450)的学习总结。
:::

## 选择器注意点

### 属性选择器

- `[attr]` - 带有attr属性
- `[attr=value]` - attr属性值为value
- `[attr^=value]` - attr属性值以value开头
- `[attr$=value]` - attr属性值以value结尾
- `[attr|=value]` - attr属性值以value为前缀
- `[attr~=value]` - attr属性值列表中value值
- `[attr*=value]` - attr属性值中包含value字符串
- `[attr operator value i]` - 在右括号前加一个`i`，表示忽略大小写匹配

### 选择器组

- A > B - 直接子节点
- A + B - 下一个兄弟节点
- A ~ B - 兄弟节点


## 优先级

!important > 内联样式 > ID选择器 > 属性选择器（类选择器，属性选择器，伪类）> 元素选择器 （类型选择器，伪元素）> 继承 > 用户代理样式

**通配选择符**(`*`), **关系选择符**(`+`, `>`, `~`)  和 **否定伪类**(`:not()`) 对优先级没有影响。（但是，在 **:not() 内部声明**的选择器是会影响优先级）。


## 块元素/行内元素/行内块元素

- block box - 整块，独占一行，可指定宽高
- inline box - 包裹内容，行内流动，文本太长会段落行中断开（设置border分行后的显示效果）；无法指定宽高
- inline-block box - 行内流动，段落行中不会断开，成块显示，可指定宽高


## 盒模型

当对一个文档进行布局的时候，浏览器渲染引擎会根据CSS-Box模型将所有元素表示为一个矩形盒子

盒模型由由外边距、边界、内边距、内容块组成

### 外边距

盒模型的最外层，常用于元素外布局，垂直方向上易出现元素外边距重叠的效果，详细介绍可见[CSS深入理解之margin](./margin)

### 边界

背景层延伸到边界，默认颜色为字体颜色，可用边界实现一些常用图形效果，详细介绍可见[CSS深入理解之border](./border)

### 内边距

内容区和边界之间的距离，背景层渗透，不支持负值，详细可见[CSS深入理解之padding](./padding)

### CSS-Box模型

可通过`box-sizing`属性设置

- `content-box` ，标准盒子模型，width = 内容区宽度
- `border-box`，IE盒子模型，width = 内容区宽度 + 内边距 + 边框

## 行内框盒模型


行内元素都具有`line-height`和`vertical-align`属性，这两个属性影响内容在垂直方向上的分布。

`line-height`的决定内联盒子的高度，内联盒子分为内容区域和行间距两部分，内容区域的高度由`font-size/font-family`决定。
一行称为行框盒子，行框盒子由行内的多个内联盒子组成，行框高度是最高行内框到最低行内框的距离。

`vertical-align`决定行内元素垂直对齐方式，`baseline`相对于基线对齐，`middle`相对于字母x中心点对齐。
详细介绍可见[CSS深入理解之line-height](./line-height)以及[CSS深入理解之vertical-align](./vertical-align)

## 流布局

> 在普通流中，元素按照其在 HTML 中的先后位置至上而下布局，在这个过程中，行内元素水平排列，直到当行被占满然后换行，块级元素则会被渲染为完整的一个新行，除非另外指定，否则所有元素默认都是普通流定位，也可以说，普通流中元素的位置由该元素在 HTML 文档中的位置决定。

## 浮动

浮动起源于实现文字环绕效果。

为了实现文字环绕效果，规范规定的措施是使父容器塌陷，元素脱离文档流浮动产生BFC，元素周围的内容转换为inline boxes围绕元素排列。

从浮动的起因和浮动的副作用来看，浮动不适合用于大范围的布局，更适合利用其特性实现一些小范围的流体布局效果。

关于浮动的具体介绍，可见[CSS深入理解之float](./float)

## 定位

### 相对定位

未脱离文档流，相对于元素在文档流中的位置偏移，不会对其他元素的布局产生影响，可见[CSS深入理解之relative](./relative)

### 绝对定位

脱离文档流，相对于包含块定位

绝对定位元素具有跟随性，在未手动定位时，元素根据原有位置脱离文档流放置

无固定宽/高，设定对立定位方向，产生拉伸效果

关于绝对定位的具体介绍，可以[CSS深入理解之absolute](./absolute)

### 固定定位

脱离文档流，相对于视口

## BFC

### 什么是BFC？

CSS规范的一个特性，产生BFC特性的元素可以理解为一个封闭独立的容器，能够排除一些外界因素的影响

### 如何产生BFC？

- 根元素
- 浮动
- `display: inline-block`
- 绝对定位（`position: absolute/position: fixed`）
- `overflow`非`visible`
- 弹性元素
- 网格元素
- 表格相关元素

### BFC的日常应用

- 解决外边距重叠问题
- 清除浮动
- 排除兄弟元素的浮动影响

## 层叠

层叠顺序（由底到顶）
- 装饰层`background/border`
- 依赖`z-index`的层叠上下文且`z-index`为负值
- 块状水平盒子
- `float`浮动盒子
- `inline/inline-block`盒子
- 依赖`z-index`的层叠上下文且`z-index`为0，不依赖`z-index`的层叠上下文
- 依赖`z-index`的层叠上下文且`z-index`为正

依赖`z-index`的层叠上下文包括：
- 绝对定位元素 `position: absolute/relative/fixed/sticky`
- flex (flexbox) 容器的子元素
- grid (grid) 容器的子元素

不依赖`z-index`的层叠上下文包括：
- 根元素
- `opacity`小于1
- `transform/filter/perspective/clip-path/mask`不为`none`
- `-webkit-overflow-scrolling`为`touch`
- `isolation`为`isolate`

详细介绍可见[CSS深入理解z-index](./z-index)


## 度量单位

- 绝对单位
  - px
- 相对单位
  - em - 相对父元素的字体大小（font-size而不是计算出的字体高度）
  - rem - 相对于基础字体大小，支持IE9及以上
  - `vw`, `vh`- 分别是视口宽度的1/100和视口高度的1/100


## 文本

### 文本溢出处理

#### 介绍几个属性

- **word-break**

  - normal：默认断行规则，CJK文本自动换行，非CJK不会自动换行（边界遇空白符会换行）
  - break-all：非CJK文本可在**任意字符**间断行
  - keep-all：CJK文本不断行，非CJK保持默认断行

- **word-wrap**

  overflow-wrap的别名，当行内没有多余的空间容纳一个单词到结尾，是否允许这个**单词**中断换行

  > 注：word-wrap 属性原本属于微软的一个私有属性，在 CSS3 现在的文本规范草案中已经被重名为 overflow-wrap 。 word-wrap 现在被当作 overflow-wrap 的 “别名”。 稳定的谷歌 Chrome 和 Opera 浏览器版本支持这种新语法。

  - normal
  - break-word

- **white-space**

  如何处理空白

  |            | 换行符 | 空格和制表符 | 文字转行 |
  | ---------- | ------ | ------------ | -------- |
  | `normal`   | 合并   | 合并         | 转行     |
  | `nowrap`   | 合并   | 合并         | 不转行   |
  | `pre`      | 保留   | 保留         | 不转行   |
  | `pre-wrap` | 保留   | 保留         | 转行     |
  | `pre-line` | 保留   | 合并         | 转行     |

- word-break控制任意字符是否换行，word-wrap控制单词是否中断换行，white-space可控制是否换行。如果无换行前提，word-space与word-wrap将失去意义。


#### 常见处理

1. 不做转换的情况下，显示多行文本，并且控制换行

   ```css
   .content {
       white-space: pre-wrap;
       word-wrap: break-word;
   }
   ```

2. 对溢出文本做省略字符处理

   ```
   .line-text {
       overflow: hidden;
     	text-overflow: ellipsis;
   }
   ```
   
  <iframe height='320' scrolling='no' title='word-break & word-wrap & white-space' src='//codepen.io/curlywater/embed/eQPYpY/?height=320&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/curlywater/pen/eQPYpY/'>word-break & word-wrap & white-space</a> by Curly.Water (<a href='https://codepen.io/curlywater'>@curlywater</a>) on <a href='https://codepen.io'>CodePen</a>.
  </iframe>


### 行内元素水平间隔

行内元素之间若有空白符/换行符/制表符掺入，将会产生元素间隔的渲染效果

- 解决方式一：避免掺入，旧式开发中注意写法，现代框架和打包可以避免该问题
- 解决方式二：容器字体大小设置为0

```
html{
	// 字体大小不受设备终端调整
　　-webkit-text-size-adjust:none;
}
.container {
    font-size: 0;
}
.container span {
    font-size: 16px;
}
```