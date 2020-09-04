(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{426:function(t,a,s){"use strict";s.r(a);var e=s(18),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"react-router-记录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react-router-记录"}},[t._v("#")]),t._v(" React Router 记录")]),t._v(" "),s("h2",{attrs:{id:"关于react-router-v5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关于react-router-v5"}},[t._v("#")]),t._v(" 关于React Router v5")]),t._v(" "),s("p",[t._v("在React Router v4发布两年之后，React Router开启了v5版本的开发。因为React引入hook，React Router的代码实现和行为表现也可以有新的形态。拥抱趋势，React Router v5的API将更加贴近于hook，v5版本会更接近当前Reach/Router的API形态。")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/ReactTraining/react-router/issues/6885",target:"_blank",rel:"noopener noreferrer"}},[t._v("React Router v5 Roadmap"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"react-router-v4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react-router-v4"}},[t._v("#")]),t._v(" React Router v4")]),t._v(" "),s("p",[t._v("React Router分为Core，Web，Native三部分，Core作为基础，Web/Native在基础之上根据各自载体特性增加了一些功能。")]),t._v(" "),s("p",[t._v("React Route依托Lerna实现monorepo分包管理，React Route Web对应的包也就是"),s("code",[t._v("react-router-dom")]),t._v("。")]),t._v(" "),s("p",[t._v("动态路由：路由、匹配器、导航都是组件，可以跟普通组件一样动态挂载。路由不再是在运行时之外静态存在，而是可以在运行过程中被动态控制。")]),t._v(" "),s("p",[t._v("这里只记录要点，细节参见")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://reactrouter.com/web",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方英文文档"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://itbilu.com/nodejs/npm/react-router.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("不错的中文文档"),s("OutboundLink")],1)])]),t._v(" "),s("h3",{attrs:{id:"browserrouter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#browserrouter"}},[t._v("#")]),t._v(" "),s("code",[t._v("<BrowserRouter>")])]),t._v(" "),s("p",[t._v("使用HTML5 history API实现的路由，history API提供"),s("code",[t._v("pushState/replaceState/popState")]),t._v("方法操作浏览器的浏览历史堆栈，更新地址栏，但不会向服务端发送请求。")]),t._v(" "),s("p",[t._v("为了能通过url直接访问到对应页面，需要在服务器端对路由进行拦截处理。")]),t._v(" "),s("p",[t._v("当React项目挂在子路径下，设置"),s("code",[t._v("basename=/xxx")]),t._v("，"),s("code",[t._v("basename")]),t._v("属性应以斜杠(/)开头，但不能以斜杠结尾。")]),t._v(" "),s("h3",{attrs:{id:"hashrouter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hashrouter"}},[t._v("#")]),t._v(" "),s("code",[t._v("<HashRouter>")])]),t._v(" "),s("p",[t._v("使用URL Hash实现的路由，在使用上，和"),s("code",[t._v("<BrowserRouter>")]),t._v("相比的弊端：不支持"),s("code",[t._v("location.key")]),t._v("或"),s("code",[t._v("location.state")]),t._v("。")]),t._v(" "),s("p",[s("code",[t._v("hashType")]),t._v('属性: 用于window.location.hash的编码类型。默认："slash" 。有效值为：')]),t._v(" "),s("ul",[s("li",[t._v('"slash" - 创建的哈希类似于：#/ and #/sunshine/lollipops')]),t._v(" "),s("li",[t._v('"noslash" - 创建的哈希类似于：# and #sunshine/lollipops')]),t._v(" "),s("li",[t._v('"hashbang" - 创建 “ajax crawlable” (Google弃用) 形式的哈希，类似：#!/和#!/sunshine/lollipops')])]),t._v(" "),s("h3",{attrs:{id:"memoryrouter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#memoryrouter"}},[t._v("#")]),t._v(" "),s("code",[t._v("<MemoryRouter>")])]),t._v(" "),s("p",[t._v("将历史记录保存在内存中，不读取或更改地址栏。在测试环境和非浏览器环境中使用。")]),t._v(" "),s("h3",{attrs:{id:"staticrouter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#staticrouter"}},[t._v("#")]),t._v(" "),s("code",[t._v("<StaticRouter>")])]),t._v(" "),s("p",[t._v("静态，即全程路由不会发生变化，适用于服务端渲染静态页面。即使匹配到了"),s("code",[t._v("<Redirect>")]),t._v("，也不会修改路由，而是记录到"),s("code",[t._v("context")]),t._v("中。")]),t._v(" "),s("h3",{attrs:{id:"switch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#switch"}},[t._v("#")]),t._v(" "),s("code",[t._v("<Switch>")])]),t._v(" "),s("p",[t._v("渲染唯一路由，渲染与"),s("code",[t._v("location")]),t._v("相匹配的第一个"),s("code",[t._v("<Route>")]),t._v("或"),s("code",[t._v("<Redirect>")]),t._v("子元素。")]),t._v(" "),s("p",[s("code",[t._v("<Route>")]),t._v("元素会使用其路径属性进行匹配，而"),s("code",[t._v("<Redirect>")]),t._v("元素会使用其from属性进行匹配。")]),t._v(" "),s("p",[t._v("将匹配条件最宽松的"),s("code",[t._v("<Route>")]),t._v("放在底部，或者加上"),s("code",[t._v("exact")]),t._v("属性要求其严格匹配。")]),t._v(" "),s("h3",{attrs:{id:"route"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#route"}},[t._v("#")]),t._v(" "),s("code",[t._v("<Route>")])]),t._v(" "),s("p",[t._v("单独使用"),s("code",[t._v("<Route>")]),t._v("，适用于包含场景，比如侧边栏组件在不同"),s("code",[t._v("location")]),t._v("都显示。")]),t._v(" "),s("p",[s("code",[t._v("<Route>")]),t._v("可选择三种渲染方法：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("component: React.Component")]),t._v("：路由会使用"),s("code",[t._v("React.createElement")]),t._v("从指定的组件中创建一个新的React元素。这意味着，如果你向组件属性提供内置函数，则将在每个渲染中创建一个新组件。这将导致现有组件的卸载和新组件的安装，而不是仅更新现有组件。使用内置函数进行内联渲染时，应使用"),s("code",[t._v("render")]),t._v("或"),s("code",[t._v("children")]),t._v("属性。")]),t._v(" "),s("li",[s("code",[t._v("render: func")]),t._v("：内置渲染和包装")]),t._v(" "),s("li",[s("code",[t._v("children: func")]),t._v("：无论路由是否匹配都会进入"),s("code",[t._v("children")]),t._v("绑定函数，通过"),s("code",[t._v("match")]),t._v("获取匹配信息")])]),t._v(" "),s("p",[t._v("三种渲染方法都会接收到三个渲染属性：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("match")]),t._v("：包含路由与URL的匹配信息，"),s("code",[t._v("match")]),t._v("包含的字段："),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("params"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" object "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 动态段键值对")]),t._v("\nisExact"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" boolean "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否完全匹配")]),t._v("\npath"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" string "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当前路由的匹配模式")]),t._v("\nurl"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" string "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// URL匹配的部分")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])])]),t._v(" "),s("li",[s("code",[t._v("location")]),t._v("：包含当前位置信息，"),s("code",[t._v("location")]),t._v("对象引用地址不会发生改变，因此可以在生命周期钩子中使用它来进行变更判断。"),s("code",[t._v("location")]),t._v("包含的字段："),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    key"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ac3df4'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// not with HashHistory!")]),t._v("\n    pathname"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/somewhere'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    search"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'?some=search-string'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    hash"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#howdy'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    state"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("userDefined"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])])]),t._v(" "),s("li",[s("code",[t._v("history")]),t._v("：依赖于"),s("a",{attrs:{href:"https://github.com/ReactTraining/history",target:"_blank",rel:"noopener noreferrer"}},[t._v("history库"),s("OutboundLink")],1),t._v("，该库实现了支持不同存储形式（history API/hash/memory）的浏览记录管理器，提供历史记录操作接口。"),s("code",[t._v("history")]),t._v("是可变的对象，因此建议直接从"),s("code",[t._v("location")]),t._v("访问当前位置信息。")])]),t._v(" "),s("p",[s("code",[t._v("<Route>")]),t._v("属性：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("exact: boolean")]),t._v("：是否需要与"),s("code",[t._v("location.pathname")]),t._v("完全匹配")]),t._v(" "),s("li",[s("code",[t._v("strict: boolean")]),t._v("：带有斜杠的路径是否能与"),s("code",[t._v("location.pathname")]),t._v("相匹配，"),s("code",[t._v("/one")]),t._v("和"),s("code",[t._v("/one/")]),t._v("是否同等对待")]),t._v(" "),s("li",[s("code",[t._v("sensitive: boolean")]),t._v("：是否区分大小写")])]),t._v(" "),s("h3",{attrs:{id:"redirect"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redirect"}},[t._v("#")]),t._v(" "),s("code",[t._v("<Redirect>")])]),t._v(" "),s("p",[t._v("重定向组件，匹配到"),s("code",[t._v("from")]),t._v("部分，重定向到"),s("code",[t._v("to")]),t._v("指定的路径。")]),t._v(" "),s("p",[t._v("默认会替换当前的历史记录，如果设置"),s("code",[t._v("push=true")]),t._v("，将生成新记录压栈。")]),t._v(" "),s("h3",{attrs:{id:"link"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#link"}},[t._v("#")]),t._v(" "),s("code",[t._v("<Link>")])]),t._v(" "),s("p",[t._v("导航组件。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("to: string | object | function")])]),t._v(" "),s("li",[s("code",[t._v("replace: boolean")])])]),t._v(" "),s("h3",{attrs:{id:"navlink"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#navlink"}},[t._v("#")]),t._v(" "),s("code",[t._v("<NavLink>")])]),t._v(" "),s("p",[t._v("与当前URL匹配时，会为渲染的元素添加指定的样式属性。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("activeClassName: string")]),t._v("，默认为"),s("code",[t._v("active")])]),t._v(" "),s("li",[s("code",[t._v("activeStyle: object")]),t._v("，样式表")]),t._v(" "),s("li",[s("code",[t._v("isActive: func")]),t._v("，用于确定链接是否处于活动状态的函数")])]),t._v(" "),s("h3",{attrs:{id:"withrouter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#withrouter"}},[t._v("#")]),t._v(" "),s("code",[t._v("withRouter")])]),t._v(" "),s("p",[t._v("高阶函数，每当渲染时，withRouter都会将更新的match、location和history并传递给包装组件。")]),t._v(" "),s("p",[s("code",[t._v("Component.WrappedComponent")]),t._v("：包装的组件\n"),s("code",[t._v("wrappedComponentRef: func")]),t._v("：该函数将作为"),s("code",[t._v("ref prop")]),t._v("传递给包装的组件。")]),t._v(" "),s("h3",{attrs:{id:"usehistory"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usehistory"}},[t._v("#")]),t._v(" "),s("code",[t._v("useHistory")])]),t._v(" "),s("p",[t._v("访问可用于导航的history实例。")]),t._v(" "),s("h3",{attrs:{id:"uselocation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#uselocation"}},[t._v("#")]),t._v(" "),s("code",[t._v("useLocation")])]),t._v(" "),s("p",[t._v("返回代表当前位置信息的"),s("code",[t._v("location")]),t._v("对象")]),t._v(" "),s("h3",{attrs:{id:"useparams"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#useparams"}},[t._v("#")]),t._v(" "),s("code",[t._v("useParams")])]),t._v(" "),s("p",[t._v("访问当前"),s("code",[t._v("<Route>")]),t._v("的"),s("code",[t._v("match.params")])]),t._v(" "),s("h3",{attrs:{id:"useroutematch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#useroutematch"}},[t._v("#")]),t._v(" "),s("code",[t._v("useRouteMatch")])]),t._v(" "),s("p",[t._v("快速使用"),s("code",[t._v("<Route>")]),t._v("的URL匹配功能，返回"),s("code",[t._v("match")]),t._v("信息。")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" useRouteMatch "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"react-router-dom"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("BlogPost")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" match "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useRouteMatch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/blog/:slug"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exact"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Do whatever you want with the match...")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("p",[t._v("直接调用"),s("code",[t._v("useRouteMatch")]),t._v("获取当前最近Route的匹配信息。")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" match"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useRouteMatch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"和redux联合使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#和redux联合使用"}},[t._v("#")]),t._v(" 和Redux联合使用")]),t._v(" "),s("blockquote",[s("p",[t._v("Redux users: The react-router-redux package is now deprecated. See Redux Integration for a better approach.")])]),t._v(" "),s("h3",{attrs:{id:"实例分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例分析"}},[t._v("#")]),t._v(" 实例分析")]),t._v(" "),s("p",[s("strong",[s("a",{attrs:{href:"https://reactrouter.com/web/example/url-params",target:"_blank",rel:"noopener noreferrer"}},[t._v("URL Parameters"),s("OutboundLink")],1)])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Switch"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Route path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/:id"')]),t._v(" children"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Child "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Switch"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Child")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// We can use the `useParams` hook here to access")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the dynamic pieces of the URL.")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" id "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useParams")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("h3"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ID")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("h3"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br")])]),s("p",[t._v("为何函数组件Child中无法接收到"),s("code",[t._v("match/location/history")]),t._v("？")]),t._v(" "),s("p",[s("code",[t._v("<Router> children")]),t._v("接收一个函数没错，"),s("code",[t._v("<Child />")]),t._v("实质是返回"),s("code",[t._v("React.createElement(Child, null)")]),t._v("；因此相当于"),s("code",[t._v("<Route children={React.createElement(Child, null)}>")]),t._v("。因此Child中无法接收到"),s("code",[t._v("Route")]),t._v("属性。")]),t._v(" "),s("p",[s("strong",[s("a",{attrs:{href:"https://reactrouter.com/web/example/sidebar",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sidebar"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("个人在这种场景下会选择将路由部分抽至顶层，布局部分独立组件Layout，sidebar和main作为props传入Layout。")]),t._v(" "),s("p",[s("strong",[s("a",{attrs:{href:"https://reactrouter.com/web/example/route-config",target:"_blank",rel:"noopener noreferrer"}},[t._v("Route Config"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("或许可以把SubComponent中路由定义的部分抽取到RouteWithSubRoutes中，让路由层完成递归，完全封装。")]),t._v(" "),s("h3",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("p",[t._v("React Router v4的设计核心还是把路由和组件平等看待，也由此可以动态实现路由。在应用中，也就会出现路由混夹在组件之中的效果。和传统的静态路由管理思维是两个方向的考量。在静态路由管理中，倾向于将路由统一抽离至顶层管理。而这也是我目前习惯的，果然静态路由的设计思维还是很难改变啊。")])])}),[],!1,null,null,null);a.default=r.exports}}]);