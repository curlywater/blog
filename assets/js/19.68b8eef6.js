(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{406:function(e,t,r){"use strict";r.r(t);var a=r(18),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"css深入理解之border"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#css深入理解之border"}},[e._v("#")]),e._v(" CSS深入理解之border")]),e._v(" "),r("h2",{attrs:{id:"border-width"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#border-width"}},[e._v("#")]),e._v(" border-width")]),e._v(" "),r("p",[r("code",[e._v("border-width")]),e._v("不支持百分比，原因是边框本身具有宽度固定的意义，不同设备的边框不会因设备宽度而等比改变。因此从语义上来说，边框支持百分比毫无意义。"),r("code",[e._v("text-shadow/box-shadow/outline")]),e._v("也有相同语义")]),e._v(" "),r("p",[r("code",[e._v("border-width")]),e._v("的默认标识为medium，因为"),r("code",[e._v("border-style")]),e._v("为"),r("code",[e._v("double")]),e._v("时支持的最小宽度为3px")]),e._v(" "),r("h2",{attrs:{id:"border-style"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#border-style"}},[e._v("#")]),e._v(" border-style")]),e._v(" "),r("ul",[r("li",[r("p",[r("code",[e._v("solid")]),e._v(" - 一条实线")])]),e._v(" "),r("li",[r("p",[r("code",[e._v("dashed")]),e._v(" - 在Chrome/Firefox 和 IE 上渲染效果有宽高比区别，适合单纯作为虚线框使用")])]),e._v(" "),r("li",[r("p",[r("code",[e._v("dotted")]),e._v(" - 在Chrome/Firefox上实线部分以方格图案展示，IE上实线部分以圆展现。可利用该特性在IE8上实现圆角")])]),e._v(" "),r("li",[r("p",[r("code",[e._v("double")]),e._v(" - 由两条实线和一条虚线组成，实线宽度相等，虚线宽度为总宽度-实线宽度*2。可利用该特性实现菜单效果")]),e._v(" "),r("p",{staticClass:"codepen",attrs:{"data-height":"265","data-theme-id":"0","data-slug-hash":"aQMBYq","data-default-tab":"css,result","data-user":"curlywater","data-pen-title":"Demo - menu icon by double border"}},[e._v("See the Pen "),r("a",{attrs:{href:"https://codepen.io/curlywater/pen/aQMBYq/"}},[e._v("Demo - menu icon by double border")]),e._v(" by Curly.Water ("),r("a",{attrs:{href:"https://codepen.io/curlywater"}},[e._v("@curlywater")]),e._v(") on "),r("a",{attrs:{href:"https://codepen.io"}},[e._v("CodePen")]),e._v(".")]),e._v(" "),r("script",{attrs:{async:"",src:"https://static.codepen.io/assets/embed/ei.js"}})]),e._v(" "),r("li",[r("p",[e._v("其他3D效果兼容性不佳，谨慎使用")])])]),e._v(" "),r("h2",{attrs:{id:"border-color"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#border-color"}},[e._v("#")]),e._v(" border-color")]),e._v(" "),r("p",[e._v("在未设置"),r("code",[e._v("border-color")]),e._v("时，以"),r("code",[e._v("color")]),e._v("作为边框色，"),r("code",[e._v("border-color")]),e._v("不会继承。"),r("code",[e._v("text-shadow/box-shadow")]),e._v("类似。")]),e._v(" "),r("p",[e._v("可以利用该特性实现图标hover变色的效果")]),e._v(" "),r("p",{staticClass:"codepen",attrs:{"data-height":"265","data-theme-id":"0","data-slug-hash":"yQwVxM","data-default-tab":"css,result","data-user":"curlywater","data-pen-title":"Demo: add icon by border-color"}},[e._v("See the Pen "),r("a",{attrs:{href:"https://codepen.io/curlywater/pen/yQwVxM/"}},[e._v("Demo: add icon by border-color")]),e._v(" by Curly.Water ("),r("a",{attrs:{href:"https://codepen.io/curlywater"}},[e._v("@curlywater")]),e._v(") on "),r("a",{attrs:{href:"https://codepen.io"}},[e._v("CodePen")]),e._v(".")]),e._v(" "),r("script",{attrs:{async:"",src:"https://static.codepen.io/assets/embed/ei.js"}}),e._v(" "),r("h2",{attrs:{id:"border与background定位"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#border与background定位"}},[e._v("#")]),e._v(" border与background定位")]),e._v(" "),r("p",[r("code",[e._v("background-position")]),e._v("不计算"),r("code",[e._v("border")]),e._v("区域，只限于"),r("code",[e._v("padding")]),e._v("以内的盒子。可以利用这一特性实现背景图片距离容器右侧定位")]),e._v(" "),r("h2",{attrs:{id:"border与三角等图形构建"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#border与三角等图形构建"}},[e._v("#")]),e._v(" border与三角等图形构建")]),e._v(" "),r("p",[e._v("利用"),r("code",[e._v("border")]),e._v("相交会产生边缘等分的内嵌效果，可以实现三角、梯形等图形构建")]),e._v(" "),r("p",{staticClass:"codepen",attrs:{"data-height":"650","data-theme-id":"0","data-slug-hash":"zMbNNm","data-default-tab":"js,result","data-user":"curlywater","data-pen-title":"Demo: border drawing"}},[e._v("See the Pen "),r("a",{attrs:{href:"https://codepen.io/curlywater/pen/zMbNNm/"}},[e._v("Demo: border drawing")]),e._v(" by Curly.Water ("),r("a",{attrs:{href:"https://codepen.io/curlywater"}},[e._v("@curlywater")]),e._v(") on "),r("a",{attrs:{href:"https://codepen.io"}},[e._v("CodePen")]),e._v(".")]),e._v(" "),r("script",{attrs:{async:"",src:"https://static.codepen.io/assets/embed/ei.js"}}),e._v(" "),r("p",[e._v("常见的应用")]),e._v(" "),r("p",{staticClass:"codepen",attrs:{"data-height":"265","data-theme-id":"0","data-slug-hash":"vQPgpN","data-default-tab":"css,result","data-user":"curlywater","data-pen-title":"Demo - border apply"}},[e._v("See the Pen "),r("a",{attrs:{href:"https://codepen.io/curlywater/pen/vQPgpN/"}},[e._v("Demo - border apply")]),e._v(" by Curly.Water ("),r("a",{attrs:{href:"https://codepen.io/curlywater"}},[e._v("@curlywater")]),e._v(") on "),r("a",{attrs:{href:"https://codepen.io"}},[e._v("CodePen")]),e._v(".")]),e._v(" "),r("script",{attrs:{async:"",src:"https://static.codepen.io/assets/embed/ei.js"}}),e._v(" "),r("h2",{attrs:{id:"border与透明边框"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#border与透明边框"}},[e._v("#")]),e._v(" border与透明边框")]),e._v(" "),r("ul",[r("li",[e._v("边框使用"),r("code",[e._v("box-shadow")]),e._v("，原先"),r("code",[e._v("border")]),e._v("变透明来增加点击区域")]),e._v(" "),r("li",[e._v("使用背景透明的图片+"),r("code",[e._v("drop-shadow")]),e._v("实现图标颜色修改：相对定位向左偏移，设置右边框，外部容器使用"),r("code",[e._v("overflow:hidden")]),e._v("隐藏原始图标")])]),e._v(" "),r("h2",{attrs:{id:"border与布局"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#border与布局"}},[e._v("#")]),e._v(" border与布局")]),e._v(" "),r("p",[r("code",[e._v("border")]),e._v("实现等高布局")]),e._v(" "),r("ul",[r("li",[e._v("优势：和"),r("code",[e._v("margin/padding")]),e._v("相比，可设置背景颜色")]),e._v(" "),r("li",[e._v("局限：不支持百分比，只可左边区域根据右边区域变化")])]),e._v(" "),r("p",{staticClass:"codepen",attrs:{"data-height":"265","data-theme-id":"0","data-slug-hash":"OaqOpX","data-default-tab":"html,result","data-user":"curlywater","data-pen-title":"Demo: border与等高布局"}},[e._v("See the Pen "),r("a",{attrs:{href:"https://codepen.io/curlywater/pen/OaqOpX/"}},[e._v("Demo: border与等高布局")]),e._v(" by Curly.Water ("),r("a",{attrs:{href:"https://codepen.io/curlywater"}},[e._v("@curlywater")]),e._v(") on "),r("a",{attrs:{href:"https://codepen.io"}},[e._v("CodePen")]),e._v(".")]),e._v(" "),r("script",{attrs:{async:"",src:"https://static.codepen.io/assets/embed/ei.js"}})])}),[],!1,null,null,null);t.default=o.exports}}]);