(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{408:function(t,e,s){"use strict";s.r(e);var r=s(18),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"css深入理解之overflow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css深入理解之overflow"}},[t._v("#")]),t._v(" CSS深入理解之overflow")]),t._v(" "),s("h2",{attrs:{id:"overflow基本属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overflow基本属性"}},[t._v("#")]),t._v(" overflow基本属性")]),t._v(" "),s("h3",{attrs:{id:"overflow属性介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overflow属性介绍"}},[t._v("#")]),t._v(" overflow属性介绍")]),t._v(" "),s("p",[t._v("overflow: visible(默认)|hidden|scroll|auto|inherit")]),t._v(" "),s("p",[t._v("当overflow-x 与 overflow-y值相同时，等同于overflow")]),t._v(" "),s("p",[t._v("当overflow-x 与 overflow-y值不相同时，其中一个值被赋予hidden|auto|scroll时，若另一个值为visible，\n那这个visvible会被重置为auto")]),t._v(" "),s("p",{staticClass:"codepen",attrs:{"data-height":"265","data-theme-id":"0","data-slug-hash":"dQEZdw","data-default-tab":"css,result","data-user":"curlywater","data-pen-title":"Demo: overflow-x: auto"}},[t._v("See the Pen "),s("a",{attrs:{href:"https://codepen.io/curlywater/pen/dQEZdw/"}},[t._v("Demo: overflow-x: auto")]),t._v(" by Curly.Water ("),s("a",{attrs:{href:"https://codepen.io/curlywater"}},[t._v("@curlywater")]),t._v(") on "),s("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(".")]),t._v(" "),s("script",{attrs:{async:"",src:"https://static.codepen.io/assets/embed/ei.js"}}),t._v(" "),s("h3",{attrs:{id:"overflow作用前提"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overflow作用前提"}},[t._v("#")]),t._v(" overflow作用前提")]),t._v(" "),s("ol",[s("li",[t._v("元素非 display: inline")]),t._v(" "),s("li",[t._v("对应方位的尺寸限制: width/height/max-width/max-height/absolute拉伸")]),t._v(" "),s("li",[t._v("对于单元格 td 等, 需要 table 为 table-layout: fixed 状态才可以")])]),t._v(" "),s("h2",{attrs:{id:"overflow与滚动条"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overflow与滚动条"}},[t._v("#")]),t._v(" overflow与滚动条")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("页面默认滚动条来自html，因此若要去除默认滚动条，只需要")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("html")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hidden"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("获取滚动高度")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" scrollTop "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* chrome浏览器：document.body.scrollTop */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 其他浏览器：document.documentElement.scrollTop*/")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("内部padding-bottom缺失")]),t._v(" "),s("p",[t._v("除Chrome之外的其他浏览器会有padding-bottom缺失效果，将导致scrollHeight值不一致")])]),t._v(" "),s("li",[s("p",[t._v("滚动条宽度机制")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("滚动条会占用容器的可用宽度|高度")])]),t._v(" "),s("li",[s("p",[t._v("计算滚动条宽度：containerWidth - boxWidth")])]),t._v(" "),s("li",[s("p",[t._v("因宽度占用，overflow: auto可能会造成容器内部局部混乱，因此容器内部需使用自适应布局")])]),t._v(" "),s("li",[s("p",[t._v("水平居中跳动问题，容器定宽居中时，当视口高度变化导致滚动条出现将导致容器跳动。")]),t._v(" "),s("p",[t._v("解决方法：")]),t._v(" "),s("ol",[s("li",[t._v("针对IE9以下浏览器，强制设置html滚动")]),t._v(" "),s("li",[t._v("其他浏览器，利用calc函数计算滚动条宽度（浏览器宽度 - 可用内容区宽度），通过padding把宽度补给容器 - "),s("a",{attrs:{href:"https://codepen.io/curlywater/pen/wQbpgd",target:"_blank",rel:"noopener noreferrer"}},[t._v("效果演示"),s("OutboundLink")],1)])])])])]),t._v(" "),s("li",[s("p",[t._v("自定义滚动条")]),t._v(" "),s("ul",[s("li",[t._v("webkit自定义滚动条，"),s("a",{attrs:{href:"https://css-tricks.com/custom-scrollbars-in-webkit/",target:"_blank",rel:"noopener noreferrer"}},[t._v("详细解读"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("自定义滚动条插件\n"),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/malihu/malihu-custom-scrollbar-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("malihu-custom-scrollbar-plugin"),s("OutboundLink")],1),t._v(" - 支持IE8+，扩展性极佳")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/Automattic/antiscroll",target:"_blank",rel:"noopener noreferrer"}},[t._v("antiscroll"),s("OutboundLink")],1),t._v(" - cross-browser native OS X Lion scrollbars")])])])])]),t._v(" "),s("li",[s("p",[t._v("iOS原生滚动回调")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-overflow-scrolling")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" touch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])])]),t._v(" "),s("h2",{attrs:{id:"overflow与bfc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overflow与bfc"}},[t._v("#")]),t._v(" overflow与BFC")]),t._v(" "),s("p",[t._v("overflow: visible不会产生BFC")]),t._v(" "),s("p",[t._v("overflow: hidden|scroll|auto 产生BFC，但是具有溢出不可见的副作用")]),t._v(" "),s("h2",{attrs:{id:"overflow与绝对定位"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overflow与绝对定位"}},[t._v("#")]),t._v(" overflow与绝对定位")]),t._v(" "),s("p",[t._v("overflow失效：绝对定位元素不总是被overflow元素剪裁/随滚动条滚动，尤其当overflow元素处于绝对定位元素和其包含块中间时")]),t._v(" "),s("p",[t._v("避免失效的方法：")]),t._v(" "),s("ol",[s("li",[t._v("overflow元素自身为包含块")]),t._v(" "),s("li",[t._v("overflow元素的子元素为包含块")]),t._v(" "),s("li",[t._v("overflow元素的子元素有transform声明")])]),t._v(" "),s("h2",{attrs:{id:"依赖overflow的样式表现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#依赖overflow的样式表现"}},[t._v("#")]),t._v(" 依赖overflow的样式表现")]),t._v(" "),s("ol",[s("li",[t._v("在overflow为visible时，resize属性将会失效")]),t._v(" "),s("li",[s("code",[t._v("text-overflow: ellipsis")]),t._v("以"),s("code",[t._v("overflow: hidden")]),t._v("为前提")])]),t._v(" "),s("h2",{attrs:{id:"overflow与锚点技术"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overflow与锚点技术"}},[t._v("#")]),t._v(" overflow与锚点技术")]),t._v(" "),s("p",[t._v("锚点技术的实质时容器改变滚动高度")])])}),[],!1,null,null,null);e.default=a.exports}}]);