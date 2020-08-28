(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{400:function(t,s,a){"use strict";a.r(s);var e=a(18),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"flexbox-弹性布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flexbox-弹性布局"}},[t._v("#")]),t._v(" flexbox 弹性布局")]),t._v(" "),a("p",[t._v("弹性容器分为主轴和侧轴两个方向。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://css-tricks.com/wp-content/uploads/2018/11/00-basic-terminology.svg",alt:""}})]),t._v(" "),a("p",[t._v("弹性布局：分别在主轴和侧轴方向上，弹性分配子项的尺寸和剩余空间，亦可指定子项的对齐方式。")]),t._v(" "),a("h2",{attrs:{id:"属性介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#属性介绍"}},[t._v("#")]),t._v(" 属性介绍")]),t._v(" "),a("p",[a("strong",[t._v("弹性容器")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("flex-direction")]),t._v(": 指定主轴方向")]),t._v(" "),a("li",[a("code",[t._v("flex-wrap")]),t._v(": 指定在主轴上的换行效果")]),t._v(" "),a("li",[a("code",[t._v("justify-content")]),t._v(": 如何分配主轴上的剩余空间")]),t._v(" "),a("li",[a("code",[t._v("align-items")]),t._v("：子项在侧轴上如何分布")]),t._v(" "),a("li",[a("code",[t._v("align-content")]),t._v("：行在侧轴上如何分布（可换行的情况下生成多行）")])]),t._v(" "),a("p",[a("strong",[t._v("子项")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("order")]),t._v(": 子项排列顺序")]),t._v(" "),a("li",[a("code",[t._v("flex-grow")]),t._v(": 有剩余空间，子项放大比例")]),t._v(" "),a("li",[a("code",[t._v("flex-shrink")]),t._v(": 空间不足，子项缩小比例")]),t._v(" "),a("li",[a("code",[t._v("flex-basis")]),t._v(": 子项默认占据空间")]),t._v(" "),a("li",[a("code",[t._v("align-self")]),t._v(": 指定某一子项在侧轴上分布策略")])]),t._v(" "),a("p",[a("strong",[t._v("组合值")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("flex-flow")]),t._v("："),a("code",[t._v("flex-direction flex-wrap")])]),t._v(" "),a("li",[a("code",[t._v("flex")]),t._v("："),a("code",[t._v("none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]")]),t._v(" "),a("ul",[a("li",[t._v("设置一个非负数字相当于设置"),a("code",[t._v("flex-grow")]),t._v("，并且"),a("code",[t._v("flex-basis")]),t._v("设置为"),a("code",[t._v("0%")])]),t._v(" "),a("li",[t._v("设置两个非负数字相当于设置"),a("code",[t._v("flex-grow")]),t._v("和"),a("code",[t._v("flex-shrink")]),t._v("，并且"),a("code",[t._v("flex-basis")]),t._v("设置为"),a("code",[t._v("0%")])]),t._v(" "),a("li",[t._v("设置一个长度或百分比相当于设置"),a("code",[t._v("flex-basis")])])])])]),t._v(" "),a("p",[t._v("特殊值说明：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("flex: initial")]),t._v(" - "),a("code",[t._v("flex: 0 1 auto")])]),t._v(" "),a("li",[a("code",[t._v("flex: none")]),t._v(" - "),a("code",[t._v("flex: 0 0 auto")])]),t._v(" "),a("li",[a("code",[t._v("flex: auto")]),t._v(" - "),a("code",[t._v("flex: 1 1 auto")])]),t._v(" "),a("li",[a("code",[t._v("flex: 1")]),t._v(" - "),a("code",[t._v("flex: 1 1 0")])])]),t._v(" "),a("h2",{attrs:{id:"默认情况"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#默认情况"}},[t._v("#")]),t._v(" 默认情况")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-direction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" row"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-wrap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" no-wrap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("justify-content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex-start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("align-items")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" stretch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("align-content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" stretch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".item")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("order")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-grow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-shrink")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-basis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("align-self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br")])]),a("ul",[a("li",[a("code",[t._v("align-items: stretch")]),t._v("：子项在侧轴上拉伸以填充容器，但依然以自身设置的"),a("code",[t._v("min-height/height/max-height")]),t._v("优先")]),t._v(" "),a("li",[a("code",[t._v("order: 0")]),t._v("：所有子项序号统一为0，因此按元素自然顺序排布")]),t._v(" "),a("li",[a("code",[t._v("flex-grow: 0")]),t._v("：默认不进行放大")]),t._v(" "),a("li",[a("code",[t._v("flex-shrink: 1")]),t._v("：所有子项比例值都为1，空间不够时，默认按1倍缩放")]),t._v(" "),a("li",[a("code",[t._v("flex-basis: auto")]),t._v("：子项默认按自身宽高占据空间")])]),t._v(" "),a("p",[t._v("特殊值说明")]),t._v(" "),a("p",[a("code",[t._v("flex-basis: 0")]),t._v(" - 子项按照内容占据空间，忽视子项设置的"),a("code",[t._v("min-width/width/max-width")])]),t._v(" "),a("h2",{attrs:{id:"子项的特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#子项的特性"}},[t._v("#")]),t._v(" 子项的特性")]),t._v(" "),a("p",[t._v("弹性子项生成了一个BFC，一个依赖"),a("code",[t._v("z-index")]),t._v("的层叠上下文。")]),t._v(" "),a("p",[a("code",[t._v("float")]),t._v("，"),a("code",[t._v("clear")]),t._v("并且"),a("code",[t._v("vertical-align")]),t._v("对弹性子项没有影响。")]),t._v(" "),a("p",[t._v("flexbox只是对内容区域进行缩放，对"),a("code",[t._v("padding")]),t._v("无缩放功能。")]),t._v(" "),a("h3",{attrs:{id:"margin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#margin"}},[t._v("#")]),t._v(" margin")]),t._v(" "),a("blockquote",[a("p",[t._v("flex 格式化上下文中，在通过 justify-content 和 align-self 进行对齐之前，任何正处于空闲的空间都会分配到该方向的自动 margin 中去。")])]),t._v(" "),a("blockquote",[a("p",[t._v("使用了自动 margin 的 flex 子项目，它们父元素设置的 justify-content 以及它们本身的 align-self 将不再生效。")])]),t._v(" "),a("p",[a("code",[t._v("margin")]),t._v("巧用：设置子项在主轴上的对齐。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/coco1s/p/10910588.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("探秘 flex 上下文中神奇的自动 margin"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);