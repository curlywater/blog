(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{402:function(r,e,_){"use strict";_.r(e);var v=_(18),t=Object(v.a)({},(function(){var r=this,e=r.$createElement,_=r._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[_("h1",{attrs:{id:"chrome基本工作原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#chrome基本工作原理"}},[r._v("#")]),r._v(" Chrome基本工作原理")]),r._v(" "),_("h2",{attrs:{id:"浏览器体系架构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#浏览器体系架构"}},[r._v("#")]),r._v(" 浏览器体系架构")]),r._v(" "),_("p",[r._v("Chrome 浏览器是一个多进程架构的应用，主要进程包括：")]),r._v(" "),_("ul",[_("li",[_("strong",[r._v("浏览器进程（Browser Process）")])]),r._v(" "),_("li",[_("strong",[r._v("渲染进程（Renderer Process）")])]),r._v(" "),_("li",[r._v("插件进程（Plugin Process）")]),r._v(" "),_("li",[r._v("GPU 进程（GPU Process）")])]),r._v(" "),_("p",[r._v("Chrome 浏览器中给每一个 Tab 页都分配一个渲染进程。\n这么做的好处是 Tab 页之间相互独立互不干扰，一个 Tab 崩溃并不会导致其他 Tab 崩溃。\n缺点在于每个进程内存独立，各自存储相同的依赖信息（如 JavaScript 引擎 V8）。")]),r._v(" "),_("p",[r._v("为了节省内存，Chrome 对渲染进程数做了限制。当超过最大限制后，浏览器会在同一站点的不同 Tab 页上使用同一进程。在进程策略上，浏览器将每一个功能模块看作是一个服务，浏览器根据载体性能将这些服务拆分为不同进程或者合并为一个进程进行。")]),r._v(" "),_("h2",{attrs:{id:"导航和渲染"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#导航和渲染"}},[r._v("#")]),r._v(" 导航和渲染")]),r._v(" "),_("p",[r._v("在浏览器中键入 URL 到最终呈现页面，经过导航和渲染两个过程。")]),r._v(" "),_("p",[r._v("导航过程由浏览器进程主导。\n浏览器进程里又把工作划分给不同线程处理：")]),r._v(" "),_("ul",[_("li",[r._v("UI 线程（UI Thread）：负责浏览器本体的 UI，如地址栏、工具栏、前进后退按钮")]),r._v(" "),_("li",[r._v("网络线程（Network Thread）：负责网络请求")]),r._v(" "),_("li",[r._v("存储线程（Storage Thread）：负责本地文件读写")])]),r._v(" "),_("p",[r._v("导航流程：")]),r._v(" "),_("ol",[_("li",[r._v("处理输入：UI 线程检查地址栏输入的是 URL 还是 query")]),r._v(" "),_("li",[r._v("网络请求：UI 线程通知网络线程请求内容，同时在地址栏上显示加载动效。")]),r._v(" "),_("li",[r._v("读取响应：网络线程获取内容后根据 Content-Type 和 MIME 确定下一步要进行的操作，同时进行 Safe-Browsing 检查。")]),r._v(" "),_("li",[r._v("查找渲染进程：网络线程确定内容可被浏览器处理后，告知 UI 线程数据已准备就绪；UI 线程查找并启动一个渲染进程。")]),r._v(" "),_("li",[r._v("确认导航：数据已就绪、渲染进程启动完毕，浏览器进程发送 IPC 消息给渲染进程确认导航，渲染进程准备开始渲染，同时浏览器地址栏更新站点信息")])]),r._v(" "),_("p",[r._v("渲染过程由渲染进程主导。")]),r._v(" "),_("p",[r._v("渲染进程中也有多个线程：")]),r._v(" "),_("ul",[_("li",[r._v("主线程（Main Thread）：处理大部分代码")]),r._v(" "),_("li",[r._v("工作线程（Worker Thread）：处理 Web Worker/Service Worker 代码")]),r._v(" "),_("li",[r._v("合成器线程（Compositor Thread）")]),r._v(" "),_("li",[r._v("光栅线程（Raster thread）")])]),r._v(" "),_("p",[r._v("渲染流程：")]),r._v(" "),_("ol",[_("li",[r._v("构建 DOM：主线程根据 HTML 解析构建 DOM（"),_("a",{attrs:{href:"https://html.spec.whatwg.org/",target:"_blank",rel:"noopener noreferrer"}},[r._v("HTML Standard"),_("OutboundLink")],1),r._v("）")]),r._v(" "),_("li",[r._v("请求二级资源：主线程按序逐个请求图像、CSS、JS 等外部资源，资源请求交由网络进程处理")]),r._v(" "),_("li",[r._v("计算样式（Computed CSS）：主线程解析 CSS 获取每一个节点的最终计算样式，可以在 DevTools 的"),_("code",[r._v("computed")]),r._v("中看到")]),r._v(" "),_("li",[r._v("布局树（Layout Tree）：主线程根据 DOM 和计算样式构建布局树，布局树中包含每个可见节点的坐标信息和盒子大小")]),r._v(" "),_("li",[r._v("绘制顺序：节点的绘制先后顺序影响到层叠效果，因此主线程遍历布局树创建绘制记录，由绘制记录描述节点绘制的先后顺序")]),r._v(" "),_("li",[r._v("合成：现在浏览器知道文档的结构、每个元素的样式、几何形状和绘制顺序，那么它是如何绘制页面的？")])]),r._v(" "),_("p",[r._v("把信息转换为屏幕上像素点的过程称为“光栅化”，想象电视机成像的过程。\n先光栅化在视窗内的画面，如果用户滚动页面，则移动光栅框，并光栅化填充缺少的部分。这就是 Chrome 首次发布时处理光栅化的方式。但是，现代浏览器会运行一个更复杂的过程，我们称为合成。")]),r._v(" "),_("p",[r._v("合成的过程：")]),r._v(" "),_("ul",[_("li",[r._v("分层：主线程遍历布局树创建图层树（Layer Tree），这一过程是把节点拆分到不同图层上，如果页面的某些部分应该独立为一个图层但没有被拆分，可以使用"),_("code",[r._v("will-change")]),r._v("属性来提示浏览器。")]),r._v(" "),_("li",[r._v("分块：主线程将图层树和绘制顺序交给合成器线程，合成器线程将每一个图层分块之后交给光栅线程")]),r._v(" "),_("li",[r._v("光栅化：光栅线程光栅化每个小块后会将它们存储在显存中。合成器线程收集块的信息（图块在内存中的位置，以及合成时绘制图块在页面中的位置），块的信息称为“绘制四边形”")]),r._v(" "),_("li",[r._v("创建合成帧：合成器线程将需要显示的绘制四边形集合为合成帧，合成帧通过 IPC 提交给浏览器进程，合成器帧被发送到 GPU 然后在屏幕上显示。")])]),r._v(" "),_("p",[r._v("渲染更新的成本很高。如果要为元素设置动画，则浏览器必须在每个帧之间运行这些操作。大多数显示器每秒刷新屏幕 60 次（60 fps），当屏幕每帧都在变化，人眼会觉得动画很流畅。但是，如果动画丢失了中间一些帧，页面看起来就会卡顿（janky）。你可以将 JavaScript 操作划分为小块，并使用 requestAnimationFrame() 在每个帧上运行。")]),r._v(" "),_("h2",{attrs:{id:"渲染结束"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#渲染结束"}},[r._v("#")]),r._v(" 渲染结束")]),r._v(" "),_("p",[r._v("渲染结束后，渲染进程通过 IPC 告知浏览器进程“页面渲染完毕”，浏览器进程停止展示地址栏加载动效。\n当页面关闭时（关闭 Tab，刷新，跳转），浏览器进程询问渲染进程是否有"),_("code",[r._v("beforeunload")]),r._v("事件需要执行；如果是在渲染进程中执行跳转逻辑，则是渲染进程先执行"),_("code",[r._v("beforeunload")]),r._v("再通知浏览器进程。")]),r._v(" "),_("h2",{attrs:{id:"事件处理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#事件处理"}},[r._v("#")]),r._v(" 事件处理")]),r._v(" "),_("ul",[_("li",[r._v("在对页面做输入操作时，浏览器进程先获取到信息，将事件类型和坐标发送给渲染进程。")]),r._v(" "),_("li",[r._v("合成器线程会将页面里添加了事件监听的区域标记为“非立即可滚动区”。有了这个信息，如果输入事件发生在这一区域，合成器线程可以确定应将其发往主线程处理。")]),r._v(" "),_("li",[r._v("主线程接收到输入事件后，进行命中检测（使用渲染进程中产生的绘制记录数据），找出事件发生坐标下的内容。找到事件对象并执行所有绑定在其上的相关事件处理函数。")])]),r._v(" "),_("h2",{attrs:{id:"参考文章"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[r._v("#")]),r._v(" 参考文章")]),r._v(" "),_("p",[_("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/47407398",target:"_blank",rel:"noopener noreferrer"}},[r._v("图解浏览器的基本工作原理"),_("OutboundLink")],1)]),r._v(" "),_("p",[_("a",{attrs:{href:"https://juejin.im/post/6844903679389073415",target:"_blank",rel:"noopener noreferrer"}},[r._v("[译] 现代浏览器内部揭秘（第一部分）\n"),_("OutboundLink")],1)]),r._v(" "),_("p",[_("a",{attrs:{href:"https://juejin.im/post/6844903692890537992",target:"_blank",rel:"noopener noreferrer"}},[r._v("[译] 现代浏览器内部揭秘（第二部分）\n"),_("OutboundLink")],1)]),r._v(" "),_("p",[_("a",{attrs:{href:"https://juejin.im/post/6844903692894732295",target:"_blank",rel:"noopener noreferrer"}},[r._v("[译] 现代浏览器内部揭秘（第三部分）\n"),_("OutboundLink")],1)]),r._v(" "),_("p",[_("a",{attrs:{href:"https://juejin.im/post/6844903695600058375",target:"_blank",rel:"noopener noreferrer"}},[r._v("[译] 现代浏览器内部揭秘（第四部分）\n"),_("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=t.exports}}]);