(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{417:function(t,e,a){"use strict";a.r(e);var r=a(18),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"布局实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#布局实例"}},[t._v("#")]),t._v(" 布局实例")]),t._v(" "),a("p",[t._v("开发过程中遇到的布局问题，记录实现方法。")]),t._v(" "),a("h2",{attrs:{id:"垂直居中对齐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#垂直居中对齐"}},[t._v("#")]),t._v(" 垂直居中对齐")]),t._v(" "),a("p",{staticClass:"codepen",staticStyle:{height:"265px","box-sizing":"border-box",display:"flex","align-items":"center","justify-content":"center",border:"2px solid",margin:"1em 0",padding:"1em"},attrs:{"data-height":"265","data-theme-id":"dark","data-default-tab":"css,result","data-user":"curlywater","data-slug-hash":"LYNyXKP","data-pen-title":"Align"}},[a("span",[t._v("See the Pen "),a("a",{attrs:{href:"https://codepen.io/curlywater/pen/LYNyXKP"}},[t._v("\n  Align")]),t._v(" by Curly.Water ("),a("a",{attrs:{href:"https://codepen.io/curlywater"}},[t._v("@curlywater")]),t._v(")\n  on "),a("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(".")])]),t._v(" "),a("script",{attrs:{async:"",src:"https://static.codepen.io/assets/embed/ei.js"}}),t._v(" "),a("p",[t._v("在Flexbox中，子项居中对齐的因素：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("justify-content: center")]),t._v("，子项在主轴方向的对齐方式")]),t._v(" "),a("li",[a("code",[t._v("align-items: center")]),t._v("，子项在侧轴方向的对齐方式")]),t._v(" "),a("li",[a("code",[t._v("margin")]),t._v("，优先于"),a("code",[t._v("justify-content")]),t._v("和"),a("code",[t._v("align-items")]),t._v("的剩余空间分配方式")])]),t._v(" "),a("p",[t._v("在Grid中，居中对齐的因素：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("place-items: center")]),t._v("，内容在单位块内的对齐方式")]),t._v(" "),a("li",[a("code",[t._v("place-content: center")]),t._v("，容器中，网格外剩余空间的分配方式")])]),t._v(" "),a("h2",{attrs:{id:"sticky-footer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sticky-footer"}},[t._v("#")]),t._v(" Sticky Footer")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://pic2.zhimg.com/80/v2-20f77cc43f87549f025c673bc1bc0e1d_1440w.jpg?source=1940ef5c",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"使用flexbox"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用flexbox"}},[t._v("#")]),t._v(" 使用Flexbox")]),t._v(" "),a("p",{staticClass:"codepen",staticStyle:{height:"265px","box-sizing":"border-box",display:"flex","align-items":"center","justify-content":"center",border:"2px solid",margin:"1em 0",padding:"1em"},attrs:{"data-height":"600","data-theme-id":"dark","data-default-tab":"css,result","data-user":"curlywater","data-slug-hash":"poyPQQa","data-pen-title":"StickyFooter - Flexbox - noContent "}},[a("span",[t._v("See the Pen "),a("a",{attrs:{href:"https://codepen.io/curlywater/pen/poyPQQa"}},[t._v("\n  StickyFooter - Flexbox - noContent ")]),t._v(" by Curly.Water ("),a("a",{attrs:{href:"https://codepen.io/curlywater"}},[t._v("@curlywater")]),t._v(")\n  on "),a("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(".")])]),t._v(" "),a("script",{attrs:{async:"",src:"https://static.codepen.io/assets/embed/ei.js"}}),t._v(" "),a("ul",[a("li",[a("code",[t._v("container")]),t._v("设置"),a("code",[t._v("min-height")])]),t._v(" "),a("li",[a("code",[t._v("main")]),t._v("设置"),a("code",[t._v("flex: auto")])])]),t._v(" "),a("p",[a("strong",[t._v("问题：使用"),a("code",[t._v("flex: 1")]),t._v("和"),a("code",[t._v("flex: auto")]),t._v("的区别")])]),t._v(" "),a("p",[a("code",[t._v("flex: 1")]),t._v("相当于"),a("code",[t._v("flex: 1 1 0%")]),t._v("， "),a("code",[t._v("flex-basis: 0%")]),t._v(" "),a("code",[t._v("flex: auto")]),t._v("相当于"),a("code",[t._v("flex: 1 1 auto")]),t._v("， "),a("code",[t._v("flex-basis: auto")])]),t._v(" "),a("p",[t._v("如果内容区域设置为"),a("code",[t._v("flex-basis: 0%")]),t._v("将会无法无限扩展，只能使用"),a("code",[t._v("flex-basis: auto")]),t._v("以其本身大小为默认占据空间。")]),t._v(" "),a("p",[a("strong",[t._v("问题：根容器设置"),a("code",[t._v("min-height")]),t._v("的情况下，子项的子元素无法通过"),a("code",[t._v("100%")]),t._v("继承高度")])]),t._v(" "),a("p",{staticClass:"codepen",staticStyle:{height:"265px","box-sizing":"border-box",display:"flex","align-items":"center","justify-content":"center",border:"2px solid",margin:"1em 0",padding:"1em"},attrs:{"data-height":"600","data-theme-id":"dark","data-default-tab":"css,result","data-user":"curlywater","data-slug-hash":"PoNmbyr","data-pen-title":"PoNmbyr"}},[a("span",[t._v("See the Pen "),a("a",{attrs:{href:"https://codepen.io/curlywater/pen/PoNmbyr"}},[t._v("\n  PoNmbyr")]),t._v(" by Curly.Water ("),a("a",{attrs:{href:"https://codepen.io/curlywater"}},[t._v("@curlywater")]),t._v(")\n  on "),a("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(".")])]),t._v(" "),a("script",{attrs:{async:"",src:"https://static.codepen.io/assets/embed/ei.js"}}),t._v(" "),a("p",[t._v("依照"),a("a",{attrs:{href:"https://www.w3.org/TR/CSS22/visudet.html#the-height-property",target:"_blank",rel:"noopener noreferrer"}},[t._v("ECMA对百分比高度的定义"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("Specifies a percentage height. The percentage is calculated with respect to the height of the generated box's containing block. If the height of the containing block is not specified explicitly (i.e., it depends on content height), and this element is not absolutely positioned, the used height is calculated as if 'auto' was specified.")])]),t._v(" "),a("p",[t._v("如果父容器未明确指定高度，子元素设置"),a("code",[t._v("height: 100%;")]),t._v("相当于设置"),a("code",[t._v("height: auto;")]),t._v("。")]),t._v(" "),a("p",[t._v("子项并未明确指定高度，而是通过flex容器放大了高度。如果其子元素需要继承高度：")]),t._v(" "),a("ul",[a("li",[t._v("方式一：子项设置为flex容器")]),t._v(" "),a("li",[t._v("方式二：子元素设置相对于子项绝对定位，四方拉伸")])]),t._v(" "),a("p",[t._v("然而方式二中，子元素高度扩展无法撑开容器，在当前场景中不适用。")]),t._v(" "),a("h3",{attrs:{id:"使用flexbox-margin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用flexbox-margin"}},[t._v("#")]),t._v(" 使用Flexbox + margin")]),t._v(" "),a("p",{staticClass:"codepen",staticStyle:{height:"265px","box-sizing":"border-box",display:"flex","align-items":"center","justify-content":"center",border:"2px solid",margin:"1em 0",padding:"1em"},attrs:{"data-height":"600","data-theme-id":"dark","data-default-tab":"css,result","data-user":"curlywater","data-slug-hash":"abNWQjP","data-pen-title":"StickyFooter - Flexbox-margin-noContent"}},[a("span",[t._v("See the Pen "),a("a",{attrs:{href:"https://codepen.io/curlywater/pen/abNWQjP"}},[t._v("\n  StickyFooter - Flexbox-margin-noContent")]),t._v(" by Curly.Water ("),a("a",{attrs:{href:"https://codepen.io/curlywater"}},[t._v("@curlywater")]),t._v(")\n  on "),a("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(".")])]),t._v(" "),a("script",{attrs:{async:"",src:"https://static.codepen.io/assets/embed/ei.js"}}),t._v(" "),a("ul",[a("li",[a("code",[t._v("container")]),t._v("设置"),a("code",[t._v("height")])]),t._v(" "),a("li",[a("code",[t._v("footer")]),t._v("设置"),a("code",[t._v("margin-top: auto")])])]),t._v(" "),a("p",[t._v("flex 格式化上下文中，在通过 "),a("code",[t._v("justify-content")]),t._v(" 和 "),a("code",[t._v("align-self")]),t._v(" 进行对齐之前，任何正处于空闲的空间都会分配到该方向的自动 "),a("code",[t._v("margin")]),t._v(" 中去，")]),t._v(" "),a("p",[t._v("使用了自动 "),a("code",[t._v("margin")]),t._v(" 的 flex 子项目，它们父元素设置的 "),a("code",[t._v("justify-content")]),t._v(" 以及它们本身的 "),a("code",[t._v("align-self")]),t._v(" 将不再生效。")]),t._v(" "),a("p",[a("code",[t._v("margin")]),t._v("巧用：设置子项在主轴上的对齐。")]),t._v(" "),a("h3",{attrs:{id:"使用grid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用grid"}},[t._v("#")]),t._v(" 使用Grid")]),t._v(" "),a("p",{staticClass:"codepen",staticStyle:{height:"265px","box-sizing":"border-box",display:"flex","align-items":"center","justify-content":"center",border:"2px solid",margin:"1em 0",padding:"1em"},attrs:{"data-height":"600","data-theme-id":"dark","data-default-tab":"css,result","data-user":"curlywater","data-slug-hash":"zYqwNEJ","data-pen-title":"StickyFooter - Grid"}},[a("span",[t._v("See the Pen "),a("a",{attrs:{href:"https://codepen.io/curlywater/pen/zYqwNEJ"}},[t._v("\n  StickyFooter - Grid")]),t._v(" by Curly.Water ("),a("a",{attrs:{href:"https://codepen.io/curlywater"}},[t._v("@curlywater")]),t._v(")\n  on "),a("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(".")])]),t._v(" "),a("script",{attrs:{async:"",src:"https://static.codepen.io/assets/embed/ei.js"}}),t._v(" "),a("h2",{attrs:{id:"article-list"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#article-list"}},[t._v("#")]),t._v(" Article List")]),t._v(" "),a("h3",{attrs:{id:"flexbox"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flexbox"}},[t._v("#")]),t._v(" Flexbox")]),t._v(" "),a("p",{staticClass:"codepen",staticStyle:{height:"265px","box-sizing":"border-box",display:"flex","align-items":"center","justify-content":"center",border:"2px solid",margin:"1em 0",padding:"1em"},attrs:{"data-height":"600","data-theme-id":"dark","data-default-tab":"css,result","data-user":"curlywater","data-slug-hash":"KKzmbyr","data-pen-title":"Articles"}},[a("span",[t._v("See the Pen "),a("a",{attrs:{href:"https://codepen.io/curlywater/pen/KKzmbyr"}},[t._v("\n  Articles")]),t._v(" by Curly.Water ("),a("a",{attrs:{href:"https://codepen.io/curlywater"}},[t._v("@curlywater")]),t._v(")\n  on "),a("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(".")])]),t._v(" "),a("script",{attrs:{async:"",src:"https://static.codepen.io/assets/embed/ei.js"}}),t._v(" "),a("p",[t._v("间隔均分问题：子项产生BFC，因此兄弟子项之间不会出现"),a("code",[t._v("margin")]),t._v("重叠，导致子项之间间隔加倍。采用容器辅助增加外边距解决。")]),t._v(" "),a("h3",{attrs:{id:"grid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grid"}},[t._v("#")]),t._v(" Grid")]),t._v(" "),a("p",{staticClass:"codepen",staticStyle:{height:"265px","box-sizing":"border-box",display:"flex","align-items":"center","justify-content":"center",border:"2px solid",margin:"1em 0",padding:"1em"},attrs:{"data-height":"600","data-theme-id":"dark","data-default-tab":"css,result","data-user":"curlywater","data-slug-hash":"ZEWKwzE","data-pen-title":"Articles - Grid"}},[a("span",[t._v("See the Pen "),a("a",{attrs:{href:"https://codepen.io/curlywater/pen/ZEWKwzE"}},[t._v("\n  Articles - Grid")]),t._v(" by Curly.Water ("),a("a",{attrs:{href:"https://codepen.io/curlywater"}},[t._v("@curlywater")]),t._v(")\n  on "),a("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(".")])]),t._v(" "),a("script",{attrs:{async:"",src:"https://static.codepen.io/assets/embed/ei.js"}}),t._v(" "),a("p",[a("code",[t._v("auto-fill")]),t._v(": 减小单位块，尽可能多填充列。")]),t._v(" "),a("p",[a("code",[t._v("auto-fit")]),t._v(": 增大单位块，尽可能填满容器空间。")]),t._v(" "),a("p",{staticClass:"codepen",staticStyle:{height:"265px","box-sizing":"border-box",display:"flex","align-items":"center","justify-content":"center",border:"2px solid",margin:"1em 0",padding:"1em"},attrs:{"data-height":"600","data-theme-id":"dark","data-default-tab":"html,result","data-user":"curlywater","data-slug-hash":"ZEWKwGY","data-pen-title":"auto-fill vs auto-fit"}},[a("span",[t._v("See the Pen "),a("a",{attrs:{href:"https://codepen.io/curlywater/pen/ZEWKwGY"}},[t._v("\n  auto-fill vs auto-fit")]),t._v(" by Curly.Water ("),a("a",{attrs:{href:"https://codepen.io/curlywater"}},[t._v("@curlywater")]),t._v(")\n  on "),a("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(".")])]),t._v(" "),a("script",{attrs:{async:"",src:"https://static.codepen.io/assets/embed/ei.js"}}),t._v(" "),a("h2",{attrs:{id:"两端对齐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#两端对齐"}},[t._v("#")]),t._v(" 两端对齐")]),t._v(" "),a("p",[t._v("在视口空间足够时，固定内容块大小，换行显示。")]),t._v(" "),a("p",[t._v("在视口空间只能显示一列内容块时，内容块大小缩放。")]),t._v(" "),a("h3",{attrs:{id:"使用flexbox-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用flexbox-2"}},[t._v("#")]),t._v(" 使用Flexbox")]),t._v(" "),a("p",{staticClass:"codepen",staticStyle:{height:"265px","box-sizing":"border-box",display:"flex","align-items":"center","justify-content":"center",border:"2px solid",margin:"1em 0",padding:"1em"},attrs:{"data-height":"600","data-theme-id":"dark","data-default-tab":"css,result","data-user":"curlywater","data-slug-hash":"ZEWKwpb","data-pen-title":"两端对齐"}},[a("span",[t._v("See the Pen "),a("a",{attrs:{href:"https://codepen.io/curlywater/pen/ZEWKwpb"}},[t._v("\n  两端对齐")]),t._v(" by Curly.Water ("),a("a",{attrs:{href:"https://codepen.io/curlywater"}},[t._v("@curlywater")]),t._v(")\n  on "),a("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(".")])]),t._v(" "),a("script",{attrs:{async:"",src:"https://static.codepen.io/assets/embed/ei.js"}}),t._v(" "),a("p",[t._v("使用Flexbox的问题在于，在"),a("code",[t._v("Flexbox gap")]),t._v("的浏览器支持程度不佳的情况下，无法通过"),a("code",[t._v("justify-content")]),t._v("实现两端对齐。")]),t._v(" "),a("h3",{attrs:{id:"使用grid-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用grid-2"}},[t._v("#")]),t._v(" 使用Grid")]),t._v(" "),a("p",{staticClass:"codepen",staticStyle:{height:"265px","box-sizing":"border-box",display:"flex","align-items":"center","justify-content":"center",border:"2px solid",margin:"1em 0",padding:"1em"},attrs:{"data-height":"600","data-theme-id":"dark","data-default-tab":"css,result","data-user":"curlywater","data-slug-hash":"yLObZgy","data-pen-title":"两端对齐 - Grid"}},[a("span",[t._v("See the Pen "),a("a",{attrs:{href:"https://codepen.io/curlywater/pen/yLObZgy"}},[t._v("\n  两端对齐 - Grid")]),t._v(" by Curly.Water ("),a("a",{attrs:{href:"https://codepen.io/curlywater"}},[t._v("@curlywater")]),t._v(")\n  on "),a("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(".")])]),t._v(" "),a("script",{attrs:{async:"",src:"https://static.codepen.io/assets/embed/ei.js"}}),t._v(" "),a("h2",{attrs:{id:"参考文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://ruirui.me/2018/12/07/flex-grow-child-not-filling-height-of-parent/",target:"_blank",rel:"noopener noreferrer"}},[t._v("flex-grow 子元素高度百分比无效"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://www.zhihu.com/question/21775016/answer/1358336033",target:"_blank",rel:"noopener noreferrer"}},[t._v("网页布局都有哪种？一般都用什么布局？"),a("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=s.exports}}]);