(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{404:function(t,v,a){"use strict";a.r(v);var _=a(18),e=Object(_.a)({},(function(){var t=this,v=t.$createElement,a=t._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[t._v("#")]),t._v(" 目录")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("说明")]),t._v(" "),a("p",[t._v("【CSS深入理解系列】迁移自历史文章。一些知识点在当下主流浏览器环境中已不再适用，一些效果现在有更好的实现方式，但也可以作为思路扩展。"),a("a",{attrs:{href:"https://www.imooc.com/t/197450",target:"_blank",rel:"noopener noreferrer"}},[t._v("张鑫旭 —— CSS深入理解"),a("OutboundLink")],1),t._v("的学习总结。")])]),t._v(" "),a("h2",{attrs:{id:"选择器注意点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选择器注意点"}},[t._v("#")]),t._v(" 选择器注意点")]),t._v(" "),a("h3",{attrs:{id:"属性选择器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#属性选择器"}},[t._v("#")]),t._v(" 属性选择器")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("[attr]")]),t._v(" - 带有attr属性")]),t._v(" "),a("li",[a("code",[t._v("[attr=value]")]),t._v(" - attr属性值为value")]),t._v(" "),a("li",[a("code",[t._v("[attr^=value]")]),t._v(" - attr属性值以value开头")]),t._v(" "),a("li",[a("code",[t._v("[attr$=value]")]),t._v(" - attr属性值以value结尾")]),t._v(" "),a("li",[a("code",[t._v("[attr|=value]")]),t._v(" - attr属性值以value为前缀")]),t._v(" "),a("li",[a("code",[t._v("[attr~=value]")]),t._v(" - attr属性值列表中value值")]),t._v(" "),a("li",[a("code",[t._v("[attr*=value]")]),t._v(" - attr属性值中包含value字符串")]),t._v(" "),a("li",[a("code",[t._v("[attr operator value i]")]),t._v(" - 在右括号前加一个"),a("code",[t._v("i")]),t._v("，表示忽略大小写匹配")])]),t._v(" "),a("h3",{attrs:{id:"选择器组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选择器组"}},[t._v("#")]),t._v(" 选择器组")]),t._v(" "),a("ul",[a("li",[t._v("A > B - 直接子节点")]),t._v(" "),a("li",[t._v("A + B - 下一个兄弟节点")]),t._v(" "),a("li",[t._v("A ~ B - 兄弟节点")])]),t._v(" "),a("h2",{attrs:{id:"优先级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优先级"}},[t._v("#")]),t._v(" 优先级")]),t._v(" "),a("p",[t._v("!important > 内联样式 > ID选择器 > 属性选择器（类选择器，属性选择器，伪类）> 元素选择器 （类型选择器，伪元素）> 继承 > 用户代理样式")]),t._v(" "),a("p",[a("strong",[t._v("通配选择符")]),t._v("("),a("code",[t._v("*")]),t._v("), "),a("strong",[t._v("关系选择符")]),t._v("("),a("code",[t._v("+")]),t._v(", "),a("code",[t._v(">")]),t._v(", "),a("code",[t._v("~")]),t._v(")  和 "),a("strong",[t._v("否定伪类")]),t._v("("),a("code",[t._v(":not()")]),t._v(") 对优先级没有影响。（但是，在 "),a("strong",[t._v(":not() 内部声明")]),t._v("的选择器是会影响优先级）。")]),t._v(" "),a("h2",{attrs:{id:"块元素-行内元素-行内块元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#块元素-行内元素-行内块元素"}},[t._v("#")]),t._v(" 块元素/行内元素/行内块元素")]),t._v(" "),a("ul",[a("li",[t._v("block box - 整块，独占一行，可指定宽高")]),t._v(" "),a("li",[t._v("inline box - 包裹内容，行内流动，文本太长会段落行中断开（设置border分行后的显示效果）；无法指定宽高")]),t._v(" "),a("li",[t._v("inline-block box - 行内流动，段落行中不会断开，成块显示，可指定宽高")])]),t._v(" "),a("h2",{attrs:{id:"盒模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#盒模型"}},[t._v("#")]),t._v(" 盒模型")]),t._v(" "),a("p",[t._v("当对一个文档进行布局的时候，浏览器渲染引擎会根据CSS-Box模型将所有元素表示为一个矩形盒子")]),t._v(" "),a("p",[t._v("盒模型由由外边距、边界、内边距、内容块组成")]),t._v(" "),a("h3",{attrs:{id:"外边距"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#外边距"}},[t._v("#")]),t._v(" 外边距")]),t._v(" "),a("p",[t._v("盒模型的最外层，常用于元素外布局，垂直方向上易出现元素外边距重叠的效果，详细介绍可见"),a("a",{attrs:{href:"./margin"}},[t._v("CSS深入理解之margin")])]),t._v(" "),a("h3",{attrs:{id:"边界"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#边界"}},[t._v("#")]),t._v(" 边界")]),t._v(" "),a("p",[t._v("背景层延伸到边界，默认颜色为字体颜色，可用边界实现一些常用图形效果，详细介绍可见"),a("a",{attrs:{href:"./border"}},[t._v("CSS深入理解之border")])]),t._v(" "),a("h3",{attrs:{id:"内边距"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内边距"}},[t._v("#")]),t._v(" 内边距")]),t._v(" "),a("p",[t._v("内容区和边界之间的距离，背景层渗透，不支持负值，详细可见"),a("a",{attrs:{href:"./padding"}},[t._v("CSS深入理解之padding")])]),t._v(" "),a("h3",{attrs:{id:"css-box模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-box模型"}},[t._v("#")]),t._v(" CSS-Box模型")]),t._v(" "),a("p",[t._v("可通过"),a("code",[t._v("box-sizing")]),t._v("属性设置")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("content-box")]),t._v(" ，标准盒子模型，width = 内容区宽度")]),t._v(" "),a("li",[a("code",[t._v("border-box")]),t._v("，IE盒子模型，width = 内容区宽度 + 内边距 + 边框")])]),t._v(" "),a("h2",{attrs:{id:"行内框盒模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#行内框盒模型"}},[t._v("#")]),t._v(" 行内框盒模型")]),t._v(" "),a("p",[t._v("行内元素都具有"),a("code",[t._v("line-height")]),t._v("和"),a("code",[t._v("vertical-align")]),t._v("属性，这两个属性影响内容在垂直方向上的分布。")]),t._v(" "),a("p",[a("code",[t._v("line-height")]),t._v("的决定内联盒子的高度，内联盒子分为内容区域和行间距两部分，内容区域的高度由"),a("code",[t._v("font-size/font-family")]),t._v("决定。\n一行称为行框盒子，行框盒子由行内的多个内联盒子组成，行框高度是最高行内框到最低行内框的距离。")]),t._v(" "),a("p",[a("code",[t._v("vertical-align")]),t._v("决定行内元素垂直对齐方式，"),a("code",[t._v("baseline")]),t._v("相对于基线对齐，"),a("code",[t._v("middle")]),t._v("相对于字母x中心点对齐。\n详细介绍可见"),a("a",{attrs:{href:"./line-height"}},[t._v("CSS深入理解之line-height")]),t._v("以及"),a("a",{attrs:{href:"./vertical-align"}},[t._v("CSS深入理解之vertical-align")])]),t._v(" "),a("h2",{attrs:{id:"流布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#流布局"}},[t._v("#")]),t._v(" 流布局")]),t._v(" "),a("blockquote",[a("p",[t._v("在普通流中，元素按照其在 HTML 中的先后位置至上而下布局，在这个过程中，行内元素水平排列，直到当行被占满然后换行，块级元素则会被渲染为完整的一个新行，除非另外指定，否则所有元素默认都是普通流定位，也可以说，普通流中元素的位置由该元素在 HTML 文档中的位置决定。")])]),t._v(" "),a("h2",{attrs:{id:"浮动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浮动"}},[t._v("#")]),t._v(" 浮动")]),t._v(" "),a("p",[t._v("浮动起源于实现文字环绕效果。")]),t._v(" "),a("p",[t._v("为了实现文字环绕效果，规范规定的措施是使父容器塌陷，元素脱离文档流浮动产生BFC，元素周围的内容转换为inline boxes围绕元素排列。")]),t._v(" "),a("p",[t._v("从浮动的起因和浮动的副作用来看，浮动不适合用于大范围的布局，更适合利用其特性实现一些小范围的流体布局效果。")]),t._v(" "),a("p",[t._v("关于浮动的具体介绍，可见"),a("a",{attrs:{href:"./float"}},[t._v("CSS深入理解之float")])]),t._v(" "),a("h2",{attrs:{id:"定位"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定位"}},[t._v("#")]),t._v(" 定位")]),t._v(" "),a("h3",{attrs:{id:"相对定位"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相对定位"}},[t._v("#")]),t._v(" 相对定位")]),t._v(" "),a("p",[t._v("未脱离文档流，相对于元素在文档流中的位置偏移，不会对其他元素的布局产生影响，可见"),a("a",{attrs:{href:"./relative"}},[t._v("CSS深入理解之relative")])]),t._v(" "),a("h3",{attrs:{id:"绝对定位"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#绝对定位"}},[t._v("#")]),t._v(" 绝对定位")]),t._v(" "),a("p",[t._v("脱离文档流，相对于包含块定位")]),t._v(" "),a("p",[t._v("绝对定位元素具有跟随性，在未手动定位时，元素根据原有位置脱离文档流放置")]),t._v(" "),a("p",[t._v("无固定宽/高，设定对立定位方向，产生拉伸效果")]),t._v(" "),a("p",[t._v("关于绝对定位的具体介绍，可以"),a("a",{attrs:{href:"./absolute"}},[t._v("CSS深入理解之absolute")])]),t._v(" "),a("h3",{attrs:{id:"固定定位"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#固定定位"}},[t._v("#")]),t._v(" 固定定位")]),t._v(" "),a("p",[t._v("脱离文档流，相对于视口")]),t._v(" "),a("h2",{attrs:{id:"bfc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bfc"}},[t._v("#")]),t._v(" BFC")]),t._v(" "),a("h3",{attrs:{id:"什么是bfc？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是bfc？"}},[t._v("#")]),t._v(" 什么是BFC？")]),t._v(" "),a("p",[t._v("CSS规范的一个特性，产生BFC特性的元素可以理解为一个封闭独立的容器，能够排除一些外界因素的影响")]),t._v(" "),a("h3",{attrs:{id:"如何产生bfc？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何产生bfc？"}},[t._v("#")]),t._v(" 如何产生BFC？")]),t._v(" "),a("ul",[a("li",[t._v("根元素")]),t._v(" "),a("li",[t._v("浮动")]),t._v(" "),a("li",[a("code",[t._v("display: inline-block")])]),t._v(" "),a("li",[t._v("绝对定位（"),a("code",[t._v("position: absolute/position: fixed")]),t._v("）")]),t._v(" "),a("li",[a("code",[t._v("overflow")]),t._v("非"),a("code",[t._v("visible")])]),t._v(" "),a("li",[t._v("弹性元素")]),t._v(" "),a("li",[t._v("网格元素")]),t._v(" "),a("li",[t._v("表格相关元素")])]),t._v(" "),a("h3",{attrs:{id:"bfc的日常应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bfc的日常应用"}},[t._v("#")]),t._v(" BFC的日常应用")]),t._v(" "),a("ul",[a("li",[t._v("解决外边距重叠问题")]),t._v(" "),a("li",[t._v("清除浮动")]),t._v(" "),a("li",[t._v("排除兄弟元素的浮动影响")])]),t._v(" "),a("h2",{attrs:{id:"层叠"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#层叠"}},[t._v("#")]),t._v(" 层叠")]),t._v(" "),a("p",[t._v("层叠顺序（由底到顶）")]),t._v(" "),a("ul",[a("li",[t._v("装饰层"),a("code",[t._v("background/border")])]),t._v(" "),a("li",[t._v("依赖"),a("code",[t._v("z-index")]),t._v("的层叠上下文且"),a("code",[t._v("z-index")]),t._v("为负值")]),t._v(" "),a("li",[t._v("块状水平盒子")]),t._v(" "),a("li",[a("code",[t._v("float")]),t._v("浮动盒子")]),t._v(" "),a("li",[a("code",[t._v("inline/inline-block")]),t._v("盒子")]),t._v(" "),a("li",[t._v("依赖"),a("code",[t._v("z-index")]),t._v("的层叠上下文且"),a("code",[t._v("z-index")]),t._v("为0，不依赖"),a("code",[t._v("z-index")]),t._v("的层叠上下文")]),t._v(" "),a("li",[t._v("依赖"),a("code",[t._v("z-index")]),t._v("的层叠上下文且"),a("code",[t._v("z-index")]),t._v("为正")])]),t._v(" "),a("p",[t._v("依赖"),a("code",[t._v("z-index")]),t._v("的层叠上下文包括：")]),t._v(" "),a("ul",[a("li",[t._v("绝对定位元素 "),a("code",[t._v("position: absolute/relative/fixed/sticky")])]),t._v(" "),a("li",[t._v("flex (flexbox) 容器的子元素")]),t._v(" "),a("li",[t._v("grid (grid) 容器的子元素")])]),t._v(" "),a("p",[t._v("不依赖"),a("code",[t._v("z-index")]),t._v("的层叠上下文包括：")]),t._v(" "),a("ul",[a("li",[t._v("根元素")]),t._v(" "),a("li",[a("code",[t._v("opacity")]),t._v("小于1")]),t._v(" "),a("li",[a("code",[t._v("transform/filter/perspective/clip-path/mask")]),t._v("不为"),a("code",[t._v("none")])]),t._v(" "),a("li",[a("code",[t._v("-webkit-overflow-scrolling")]),t._v("为"),a("code",[t._v("touch")])]),t._v(" "),a("li",[a("code",[t._v("isolation")]),t._v("为"),a("code",[t._v("isolate")])])]),t._v(" "),a("p",[t._v("详细介绍可见"),a("a",{attrs:{href:"./z-index"}},[t._v("CSS深入理解z-index")])]),t._v(" "),a("h2",{attrs:{id:"度量单位"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#度量单位"}},[t._v("#")]),t._v(" 度量单位")]),t._v(" "),a("ul",[a("li",[t._v("绝对单位\n"),a("ul",[a("li",[t._v("px")])])]),t._v(" "),a("li",[t._v("相对单位\n"),a("ul",[a("li",[t._v("em - 相对父元素的字体大小（font-size而不是计算出的字体高度）")]),t._v(" "),a("li",[t._v("rem - 相对于基础字体大小，支持IE9及以上")]),t._v(" "),a("li",[a("code",[t._v("vw")]),t._v(", "),a("code",[t._v("vh")]),t._v("- 分别是视口宽度的1/100和视口高度的1/100")])])])]),t._v(" "),a("h2",{attrs:{id:"文本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文本"}},[t._v("#")]),t._v(" 文本")]),t._v(" "),a("h3",{attrs:{id:"文本溢出处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文本溢出处理"}},[t._v("#")]),t._v(" 文本溢出处理")]),t._v(" "),a("h4",{attrs:{id:"介绍几个属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍几个属性"}},[t._v("#")]),t._v(" 介绍几个属性")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("word-break")])]),t._v(" "),a("ul",[a("li",[t._v("normal：默认断行规则，CJK文本自动换行，非CJK不会自动换行（边界遇空白符会换行）")]),t._v(" "),a("li",[t._v("break-all：非CJK文本可在"),a("strong",[t._v("任意字符")]),t._v("间断行")]),t._v(" "),a("li",[t._v("keep-all：CJK文本不断行，非CJK保持默认断行")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("word-wrap")])]),t._v(" "),a("p",[t._v("overflow-wrap的别名，当行内没有多余的空间容纳一个单词到结尾，是否允许这个"),a("strong",[t._v("单词")]),t._v("中断换行")]),t._v(" "),a("blockquote",[a("p",[t._v("注：word-wrap 属性原本属于微软的一个私有属性，在 CSS3 现在的文本规范草案中已经被重名为 overflow-wrap 。 word-wrap 现在被当作 overflow-wrap 的 “别名”。 稳定的谷歌 Chrome 和 Opera 浏览器版本支持这种新语法。")])]),t._v(" "),a("ul",[a("li",[t._v("normal")]),t._v(" "),a("li",[t._v("break-word")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("white-space")])]),t._v(" "),a("p",[t._v("如何处理空白")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th"),t._v(" "),a("th",[t._v("换行符")]),t._v(" "),a("th",[t._v("空格和制表符")]),t._v(" "),a("th",[t._v("文字转行")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("normal")])]),t._v(" "),a("td",[t._v("合并")]),t._v(" "),a("td",[t._v("合并")]),t._v(" "),a("td",[t._v("转行")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("nowrap")])]),t._v(" "),a("td",[t._v("合并")]),t._v(" "),a("td",[t._v("合并")]),t._v(" "),a("td",[t._v("不转行")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("pre")])]),t._v(" "),a("td",[t._v("保留")]),t._v(" "),a("td",[t._v("保留")]),t._v(" "),a("td",[t._v("不转行")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("pre-wrap")])]),t._v(" "),a("td",[t._v("保留")]),t._v(" "),a("td",[t._v("保留")]),t._v(" "),a("td",[t._v("转行")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("pre-line")])]),t._v(" "),a("td",[t._v("保留")]),t._v(" "),a("td",[t._v("合并")]),t._v(" "),a("td",[t._v("转行")])])])])]),t._v(" "),a("li",[a("p",[t._v("word-break控制任意字符是否换行，word-wrap控制单词是否中断换行，white-space可控制是否换行。如果无换行前提，word-space与word-wrap将失去意义。")])])]),t._v(" "),a("h4",{attrs:{id:"常见处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见处理"}},[t._v("#")]),t._v(" 常见处理")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("不做转换的情况下，显示多行文本，并且控制换行")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".content")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("white-space")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pre-wrap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("word-wrap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" break-word"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("对溢出文本做省略字符处理")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(".line-text {\n    overflow: hidden;\n  \ttext-overflow: ellipsis;\n}\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])])])]),t._v(" "),a("iframe",{staticStyle:{width:"100%"},attrs:{height:"320",scrolling:"no",title:"word-break & word-wrap & white-space",src:"//codepen.io/curlywater/embed/eQPYpY/?height=320&theme-id=0&default-tab=result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"}},[t._v("See the Pen "),a("a",{attrs:{href:"https://codepen.io/curlywater/pen/eQPYpY/"}},[t._v("word-break & word-wrap & white-space")]),t._v(" by Curly.Water ("),a("a",{attrs:{href:"https://codepen.io/curlywater"}},[t._v("@curlywater")]),t._v(") on "),a("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(".\n  ")]),t._v(" "),a("h3",{attrs:{id:"行内元素水平间隔"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#行内元素水平间隔"}},[t._v("#")]),t._v(" 行内元素水平间隔")]),t._v(" "),a("p",[t._v("行内元素之间若有空白符/换行符/制表符掺入，将会产生元素间隔的渲染效果")]),t._v(" "),a("ul",[a("li",[t._v("解决方式一：避免掺入，旧式开发中注意写法，现代框架和打包可以避免该问题")]),t._v(" "),a("li",[t._v("解决方式二：容器字体大小设置为0")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("html{\n\t// 字体大小不受设备终端调整\n　　-webkit-text-size-adjust:none;\n}\n.container {\n    font-size: 0;\n}\n.container span {\n    font-size: 16px;\n}\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])])])}),[],!1,null,null,null);v.default=e.exports}}]);