(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{403:function(v,_,a){"use strict";a.r(_);var t=a(18),e=Object(t.a)({},(function(){var v=this,_=v.$createElement,a=v._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("h1",{attrs:{id:"《浏览器工作原理与实践》学习笔记"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#《浏览器工作原理与实践》学习笔记"}},[v._v("#")]),v._v(" 《浏览器工作原理与实践》学习笔记")]),v._v(" "),a("p",[a("a",{attrs:{href:"https://time.geekbang.org/column/intro/100033601",target:"_blank",rel:"noopener noreferrer"}},[v._v("《浏览器工作原理与实践》"),a("OutboundLink")],1),v._v("学习笔记。")]),v._v(" "),a("h2",{attrs:{id:"chrome-架构：仅仅打开了-1-个页面，为什么会有-4-个进程？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chrome-架构：仅仅打开了-1-个页面，为什么会有-4-个进程？"}},[v._v("#")]),v._v(" Chrome 架构：仅仅打开了 1 个页面，为什么会有 4 个进程？")]),v._v(" "),a("p",[v._v("进程的特点：")]),v._v(" "),a("ul",[a("li",[v._v("独立内存空间，进程关闭后操作系统会回收进程所占用的内存")]),v._v(" "),a("li",[v._v("可多个拥有线程\n"),a("ul",[a("li",[v._v("一个线程崩溃，进程也崩溃")]),v._v(" "),a("li",[v._v("线程共享进程内存空间")])])])]),v._v(" "),a("p",[v._v("单进程多线程浏览器时代：所有的功能模块都在一个进程里，特点：不稳定、不流畅、不安全")]),v._v(" "),a("p",[v._v("多进程浏览器时代：Chrome 发布时的架构采取 1 个浏览器进程、多个渲染进程、多个插件进程，Chrome 目前的架构 1 个浏览器进程、1 个网络进程、1 个 GPU 进程、多个渲染进程、多个插件进程。渲染进程间相互独立，页面不会互相影响，对渲染进程和插件进程沙箱隔离。缺陷：更高的资源占用（每个进程都包含公共基础结构的副本），模块之间耦合性高、扩展性差。")]),v._v(" "),a("p",[v._v("面向服务的架构：各种模块都被定义为服务，服务可以拆分组合到不同进程中。")]),v._v(" "),a("h2",{attrs:{id:"tcp-协议：如何保证页面文件能被完整送达浏览器？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp-协议：如何保证页面文件能被完整送达浏览器？"}},[v._v("#")]),v._v(" TCP 协议：如何保证页面文件能被完整送达浏览器？")]),v._v(" "),a("ul",[a("li",[v._v("互联网中数据通过数据包传输，数据包在传输过程中容易丢失或出错")]),v._v(" "),a("li",[v._v("网络层在数据包上加上IP头（IP头包括IP版本、源IP地址、目标IP地址、生存时间信息等），通过IP地址确保数据包传输到目标主机")]),v._v(" "),a("li",[v._v("UDP不提供错误包重发机制，也不验证包是否到达目的地。UDP不可靠但传的快，一般应用与游戏和视频中。传输层在数据包上加上UDP头（UDP头包括源端口号、目标主机端口号）通过端口号确保数据包传到正确的应用程序")]),v._v(" "),a("li",[v._v("TCP提供重发机制，并且提供数据包排序机制把乱序的数据包重新组合成完整的原始数据，一般应用于要求数据传输可靠性的应用。传输层在数据包上加上TCP头（UDP头包括源端口号、目标主机端口号、排序序列号）通过端口号确保数据包传到正确的应用程序，通过序列好保证数据包能组合完成。")]),v._v(" "),a("li",[v._v("TCP传输数据的过程：\n"),a("ul",[a("li",[v._v("三次握手建立链接：“请求建立连接”，“已接收到请求，并同意建立连接”，“已接收到同意建立连接信号”")]),v._v(" "),a("li",[v._v("传输数据接收端需要对每个数据包进行接收确认，发送端在规定时间内没有接收到确认信息则认为包丢失触发重发机制")]),v._v(" "),a("li",[v._v("四次挥手断开链接：“请求释放连接”，“接收到客户端发送的释放连接请求”，“已经准备好释放连接了”，“接收到服务器准备好释放连接信号”")])])])]),v._v(" "),a("h2",{attrs:{id:"http请求流程：为什么很多站点第二次打开速度会很快？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http请求流程：为什么很多站点第二次打开速度会很快？"}},[v._v("#")]),v._v(" HTTP请求流程：为什么很多站点第二次打开速度会很快？")]),v._v(" "),a("p",[v._v("应用层定义应用程序网络进程间的通信规则。HTTP协议是一种允许浏览器向服务器获取资源的协议。")]),v._v(" "),a("p",[v._v("浏览器发起HTTP请求的过程：")]),v._v(" "),a("ol",[a("li",[v._v("构建请求")]),v._v(" "),a("li",[v._v("查找浏览器缓存")]),v._v(" "),a("li",[v._v("准备IP地址和TCP端口，查找DNS缓存 -> 请求DNS服务器获取URL对应的IP，TCP默认80端口")]),v._v(" "),a("li",[v._v("等待TCP队列，Chrome中同一个域名同时最多只能建立6个TCP链接")]),v._v(" "),a("li",[v._v("建立TCP链接")]),v._v(" "),a("li",[v._v("发送HTTP请求\n"),a("ul",[a("li",[v._v("向服务端发送请求行（请求方法、请求URI和HTTP版本协议）")]),v._v(" "),a("li",[v._v("向服务端发送请求头（操作系统信息、浏览器信息、Cookie等）")])])])]),v._v(" "),a("p",[v._v("服务端处理HTTP请求的过程：")]),v._v(" "),a("ol",[a("li",[v._v("返回请求\n"),a("ul",[a("li",[v._v("返回响应行（协议版本、状态码）")]),v._v(" "),a("li",[v._v("返回响应头（响应时间、返回的数据类型）")]),v._v(" "),a("li",[v._v("返回响应体")])])]),v._v(" "),a("li",[v._v("断开链接，如果响应头中返回"),a("code",[v._v("Connection:Keep-Alive")]),v._v("，TCP 连接在发送后将仍然保持打开状态，浏览器可以继续通过同一个TCP连接发送请求不必再建立连接")]),v._v(" "),a("li",[v._v("处理重定向，处理状态码301响应头中返回"),a("code",[v._v("location")]),v._v("的情况")])]),v._v(" "),a("p",[a("strong",[v._v("为什么很多站点第二次打开速度会很快？")])]),v._v(" "),a("p",[v._v("DNS和页面资源被浏览器缓存。")]),v._v(" "),a("p",[a("strong",[v._v("服务端是通过什么方式让浏览器缓存数据的？")])]),v._v(" "),a("p",[v._v("通过响应头中的"),a("code",[v._v("Expires")]),v._v("和"),a("code",[v._v("Cache-Control")]),v._v("字段设置是否缓存该资源。")]),v._v(" "),a("p",[a("code",[v._v("Expires")]),v._v("设置明确的过期时间，缺点是浏览器时间判断不一定是准确的实际时间；")]),v._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[v._v("Cache-Control:Max-age=2000\n")])]),v._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[v._v("1")]),a("br")])]),a("p",[a("code",[v._v("Catche-Control")]),v._v("设置相对时间，以秒为单位，优先级大于"),a("code",[v._v("Expires")])]),v._v(" "),a("p",[v._v("如果本地缓存已过期或者"),a("code",[v._v("Cache-Control: no-cache")]),v._v("需要重新验证，浏览器发出请求，服务器端会验证请求中所描述的缓存是否过期，若未过期（注：实际就是返回304），则缓存才使用本地缓存副本。验证机制有两种：")]),v._v(" "),a("ul",[a("li",[v._v("服务端返回"),a("code",[v._v("Last-Modified")]),v._v("，客户端带上"),a("code",[v._v("If-Modified-Since")]),v._v("：记录和比较资源的修改时间，存在的问题：1. 时间误差 2. 资源修改和时间修改可能不一致")]),v._v(" "),a("li",[v._v("服务端返回"),a("code",[v._v("ETag")]),v._v("，客户端带上"),a("code",[v._v("If-None-Match")]),v._v("：服务端通过哈希算法根据文件内容计算出哈希值，记录和比较资源的哈希值，"),a("code",[v._v("ETag")]),v._v("优先级大于"),a("code",[v._v("Last-Modified")])])]),v._v(" "),a("p",[a("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000016745595?w=901&h=815",alt:""}})]),v._v(" "),a("p",[a("strong",[v._v("登录状态是如何保持的？")])]),v._v(" "),a("p",[v._v("服务器端返回"),a("code",[v._v("Set-Cookie")]),v._v("，客户端保存"),a("code",[v._v("Cookie")]),v._v("，在请求时请求头带上"),a("code",[v._v("Cookie")]),v._v("。服务器端接收到"),a("code",[v._v("Cookie")]),v._v("字段信息查询后台。在服务器端一般会用"),a("code",[v._v("Session")]),v._v("作为用户登录状态和基本信息的存储体，"),a("code",[v._v("Cookie")]),v._v("中带上"),a("code",[v._v("sessionId")]),v._v("进行通信。")]),v._v(" "),a("h2",{attrs:{id:"从输入url到页面展示，这中间发生了什么？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从输入url到页面展示，这中间发生了什么？"}},[v._v("#")]),v._v(" 从输入URL到页面展示，这中间发生了什么？")]),v._v(" "),a("p",[v._v("Chrome浏览器目前的架构中有浏览器进程、渲染进程、网络进程。")]),v._v(" "),a("p",[v._v("导航流程")]),v._v(" "),a("ol",[a("li",[v._v("处理输入：浏览器进程读取地址栏的输入信息并判断。如果是搜索字段，和默认的搜索引擎地址合成新的URL；如果是合法的URL则根据规则加上协议合成为完整的URL。在此阶段浏览器进程还会询问渲染进程是否需要执行"),a("code",[v._v("beforeunload")]),v._v("事件，渲染进程执行完"),a("code",[v._v("beforeunload")]),v._v("事件再进行后续处理。UI上显示加载状态")]),v._v(" "),a("li",[v._v("URL请求：浏览器进程通知网络进程进行URL请求，网络进程查找缓存 -> 查找IP和TCP -> 等待TCP连接 -> 建立TCP连接 -> 发送请求 -> 接收响应 -> 根据数据响应类型决定如何处理响应内容。如果返回的状态码是301或302，则跳转到"),a("code",[v._v("location")]),v._v("指定的URL重新进行导航。")]),v._v(" "),a("li",[v._v("准备渲染进程：通常情况下，打开新的页面都会使用单独的渲染进程；如果从 A 页面打开 B 页面，且 A 和 B 都属于同一站点的话，那么 B 页面复用 A 页面的渲染进程。")]),v._v(" "),a("li",[v._v("提交稳定：将网络进程接收到的数据交给渲染进程。")])]),v._v(" "),a("ul",[a("li",[v._v("浏览器进程接收到网络进程的响应头数据，向渲染进程发起“提交文档”消息")]),v._v(" "),a("li",[v._v("渲染进程接收到消息后和网络进程建立“管道”")]),v._v(" "),a("li",[v._v("数据接收完毕，渲染进程通知浏览器进程“文档确认提交”")]),v._v(" "),a("li",[v._v("浏览器进程更新地址栏信息、前进后退信息、安全状态")])]),v._v(" "),a("p",[v._v("渲染流程")]),v._v(" "),a("ol",[a("li",[a("p",[v._v("构建 DOM 树：HTML - HTML 解析器 - DOM 树")])]),v._v(" "),a("li",[a("p",[v._v("样式计算：CSS文本 - 渲染引擎 - 节点的计算样式")]),v._v(" "),a("ol",[a("li",[v._v("渲染引擎将CSS文本转换为styleSheets结构数据，"),a("code",[v._v("document.styleSheets")])]),v._v(" "),a("li",[v._v("转换样式表中的属性值，使其标准化，譬如"),a("code",[v._v("2em")]),v._v("转换为"),a("code",[v._v("32px")])]),v._v(" "),a("li",[v._v("根据CSS继承和层叠规则，计算DOM节点的样式，Devtools的"),a("code",[v._v("computed")]),v._v("栏")])])]),v._v(" "),a("li",[a("p",[v._v("布局（Layout）：DOM + 计算样式 - 布局树（记录可见元素的几何坐标位置）")]),v._v(" "),a("ol",[a("li",[v._v("DOM + ComputedStyle -> 布局树（只包含可见元素）")]),v._v(" "),a("li",[v._v("布局树 -> 计算每个元素的几何坐标位置 -> 布局树")])])]),v._v(" "),a("li",[a("p",[v._v("分层（Layer）：按一定的规则把节点组合生成图层树（表现层叠顺序）")]),v._v(" "),a("ol",[a("li",[v._v("拥有层叠上下文属性的元素会被提升为单独的一层。")]),v._v(" "),a("li",[v._v("需要剪裁（clip）的地方也会被创建为图层。")])])]),v._v(" "),a("li",[a("p",[v._v("绘制列表（Paint）：每个图层的绘制指令列表（绘制顺序和具体操作）")]),v._v(" "),a("ul",[a("li",[v._v("把一个图层的绘制拆分成很多小的绘制指令，然后再把这些指令按照顺序组成一个待绘制列表，类似于使用"),a("code",[v._v("canvas")]),v._v("，查看绘制列表（Layers - document -> Show Paint Profiler）")])])]),v._v(" "),a("li",[a("p",[v._v("分块（tiles）：渲染进程中，主线程把绘制列表提交（commit）给合成线程，合成线程会将图层划分为图块")])]),v._v(" "),a("li",[a("p",[v._v("栅格化（raster）操作")]),v._v(" "),a("ul",[a("li",[v._v("渲染进程维护了一个栅格化的线程池，图块栅格化都是在线程池内执行的")]),v._v(" "),a("li",[v._v("栅格化即将图块转换为位图（优先转换视口附近的图块），一般栅格化过程都会使用 GPU 来加速生成（快速栅格化），生成的位图被保存在 GPU 内存中。")])])]),v._v(" "),a("li",[a("p",[v._v("DrawQuad：光栅化完毕，合成线程通过"),a("code",[v._v("DrawQuad")]),v._v("命令通知浏览器进程绘制页面内容，显示到屏幕上")])])]),v._v(" "),a("h3",{attrs:{id:"重排"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重排"}},[v._v("#")]),v._v(" 重排")]),v._v(" "),a("p",[v._v("修改元素的几何位置属性，改变宽度、高度等")]),v._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/resource/image/b3/e5/b3ed565230fe4f5c1886304a8ff754e5.png",alt:""}})]),v._v(" "),a("h3",{attrs:{id:"重绘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重绘"}},[v._v("#")]),v._v(" 重绘")]),v._v(" "),a("p",[v._v("更新元素绘制相关属性，如更改某些元素的背景颜色")]),v._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/resource/image/3c/03/3c1b7310648cccbf6aa4a42ad0202b03.png",alt:""}})]),v._v(" "),a("h3",{attrs:{id:"合成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#合成"}},[v._v("#")]),v._v(" 合成")]),v._v(" "),a("p",[v._v("更改一个既不要布局也不要绘制的属性，比如CSS transform，直接在非主线程上执行合成动画操作")]),v._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/resource/image/02/2c/024bf6c83b8146d267f476555d953a2c.png",alt:""}})]),v._v(" "),a("h2",{attrs:{id:"变量提升：javascript代码是按顺序执行的吗？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量提升：javascript代码是按顺序执行的吗？"}},[v._v("#")]),v._v(" 变量提升：JavaScript代码是按顺序执行的吗？")]),v._v(" "),a("p",[v._v("JavaScript代码经过编译阶段后再进入执行阶段。")]),v._v(" "),a("p",[v._v("一段JS代码经过编译后，会生成两部分内容：执行上下文（Execution context）和可执行代码。")]),v._v(" "),a("p",[v._v("执行上下文是JavaScript执行一段代码时的运行环境。")]),v._v(" "),a("p",[v._v("执行上下文中存在一个变量环境的对象（Viriable Environment），该对象中保存了变量的内容。")]),v._v(" "),a("p",[v._v("在编译阶段，JS引擎会一行一行分析代码，遇到变量、函数声明的时候，会在变量环境对象中存储属性。")]),v._v(" "),a("p",[v._v("在执行阶段，JS引擎会一行一行执行代码，遇到变量和函数调用时，会去变量环境对象中查找；遇到变量和函数赋值时，会去变量环境对象中更新数据。")]),v._v(" "),a("h2",{attrs:{id:"调用栈：为什么javascript代码会出现栈溢出？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调用栈：为什么javascript代码会出现栈溢出？"}},[v._v("#")]),v._v(" 调用栈：为什么JavaScript代码会出现栈溢出？")]),v._v(" "),a("p",[v._v("执行上下文")]),v._v(" "),a("ol",[a("li",[v._v("当 JavaScript 执行全局代码的时候，会编译全局代码并创建全局执行上下文，而且在整个页面的生存周期内，全局执行上下文只有一份。")]),v._v(" "),a("li",[v._v("当调用一个函数的时候，函数体内的代码会被编译，并创建函数执行上下文，一般情况下，函数执行结束之后，创建的函数执行上下文会被销毁。")]),v._v(" "),a("li",[v._v("当使用 eval 函数的时候，eval 的代码也会被编译，并创建执行上下文")])]),v._v(" "),a("p",[v._v("调用栈")]),v._v(" "),a("p",[v._v("用来管理函数调用关系的一种数据结构。在执行上下文创建好后，JavaScript 引擎会将执行上下文压入栈中，通常把这种用来管理执行上下文的栈称为执行上下文栈，又称调用栈。反应函数调用关系。")]),v._v(" "),a("p",[v._v("调用栈是有大小的，当入栈的执行上下文超过一定数目，JavaScript 引擎就会报错，我们把这种错误叫做栈溢出。")]),v._v(" "),a("h2",{attrs:{id:"块级作用域：var缺陷以及为什么要引入let和const？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#块级作用域：var缺陷以及为什么要引入let和const？"}},[v._v("#")]),v._v(" 块级作用域：var缺陷以及为什么要引入let和const？")]),v._v(" "),a("p",[v._v("作用域决定变量和函数的可访问范围，决定变量和函数的可见性和生命周期。")]),v._v(" "),a("blockquote",[a("p",[v._v("ES6 之前是不支持块级作用域的，因为当初设计这门语言的时候，并没有想到 JavaScript 会火起来，所以只是按照最简单的方式来设计。没有了块级作用域，再把作用域内部的变量统一提升无疑是最快速、最简单的设计，不过这也直接导致了函数中的变量无论是在哪里声明的，在编译阶段都会被提取到执行上下文的变量环境中，所以这些变量在整个函数体内部的任何地方都是能被访问的，这也就是 JavaScript 中的变量提升。")])]),v._v(" "),a("p",[v._v("变量提升带来的问题：")]),v._v(" "),a("ol",[a("li",[v._v("变量容易在不被察觉的情况下被覆盖掉")]),v._v(" "),a("li",[v._v("本应销毁的变量没有被销毁")])]),v._v(" "),a("h3",{attrs:{id:"javascript-是如何支持块级作用域的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript-是如何支持块级作用域的"}},[v._v("#")]),v._v(" JavaScript 是如何支持块级作用域的")]),v._v(" "),a("p",[v._v("块级作用域就是通过词法环境的栈结构来实现的，而变量提升是通过变量环境来实现。")]),v._v(" "),a("p",[v._v("执行到块作用域时，块内"),a("code",[v._v("let")]),v._v("/"),a("code",[v._v("const")]),v._v("声明的变量会被存放在独立单元压入词法环境栈，当块执行完毕从词法环境中出栈。在块作用域内，"),a("code",[v._v("let")]),v._v("声明的变量被提升，但变量只是创建被提升，初始化并没有被提升，在初始化之前使用变量，就会形成一个暂时性死区。")]),v._v(" "),a("p",[v._v("执行代码过程中访问变量或函数，先在词法环境中从栈顶到栈底查找，再到变量环境中查找。")]),v._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/resource/image/7e/fa/7e0f7bc362e0dea21d27dc5fb08d06fa.png",alt:""}})]),v._v(" "),a("h2",{attrs:{id:"作用域链和闭包-：代码中出现相同的变量，javascript引擎是如何选择的？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作用域链和闭包-：代码中出现相同的变量，javascript引擎是如何选择的？"}},[v._v("#")]),v._v(" 作用域链和闭包 ：代码中出现相同的变量，JavaScript引擎是如何选择的？")]),v._v(" "),a("p",[v._v("JavaScript 作用域链是由词法作用域（代码编译阶段决定）决定的，由代码的静态位置决定，与函数调用无关。")]),v._v(" "),a("p",[v._v("执行上下文的变量环境中，包含一个外部引用 —— outer，用来指向外部的执行上下文，从而形成作用域链。")]),v._v(" "),a("p",[v._v("在当前执行上下问的变量环境中没有找到目标变量，就会延作用域链继续查找。")]),v._v(" "),a("h3",{attrs:{id:"闭包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#闭包"}},[v._v("#")]),v._v(" 闭包")]),v._v(" "),a("p",[v._v("在 JavaScript 中，根据词法作用域的规则，内部函数总是可以访问其外部函数中声明的变量，当通过调用一个外部函数返回一个内部函数后，即使该外部函数已经执行结束了，但是内部函数引用外部函数的变量依然保存在内存中，我们就把这些变量的集合称为闭包。比如外部函数是 foo，那么这些变量的集合就称为 foo 函数的闭包（Closure(foo)）。内部函数的作用域链是Local–>Closure(foo)–>Global")]),v._v(" "),a("h3",{attrs:{id:"闭包是怎么回收的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#闭包是怎么回收的"}},[v._v("#")]),v._v(" 闭包是怎么回收的")]),v._v(" "),a("p",[v._v("如果引用闭包的函数是一个全局变量，那么闭包会一直存在直到页面关闭；但如果这个闭包以后不再使用的话，就会造成内存泄漏。")]),v._v(" "),a("p",[v._v("如果引用闭包的函数是个局部变量，等函数销毁后，在下次 JavaScript 引擎执行垃圾回收时，判断闭包这块内容如果已经不再被使用了，那么 JavaScript 引擎的垃圾回收器就会回收这块内存。")]),v._v(" "),a("p",[v._v("如果该闭包会一直使用，那么它可以作为全局变量而存在；但如果使用频率不高，而且占用内存又比较大的话，那就尽量让它成为一个局部变量。")]),v._v(" "),a("h2",{attrs:{id:"this：从javascript执行上下文的视角讲清楚this"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#this：从javascript执行上下文的视角讲清楚this"}},[v._v("#")]),v._v(" this：从JavaScript执行上下文的视角讲清楚this")]),v._v(" "),a("p",[v._v("this 是和执行上下文绑定的。和作用域链机制几乎没有联系。")]),v._v(" "),a("p",[v._v("执行上下文主要分为三种——全局执行上下文、函数执行上下文和 eval 执行上下文，")]),v._v(" "),a("p",[v._v("所以对应的 this 也只有这三种——全局执行上下文中的 this、函数中的 this 和 eval 中的 this。")]),v._v(" "),a("p",[v._v("在全局执行上下文中，this的值是全局对象。")]),v._v(" "),a("ul",[a("li",[a("p",[v._v("函数被正常调用时，在严格模式下，this 值是 undefined，非严格模式下 this 指向的是全局对象；")])]),v._v(" "),a("li",[a("p",[v._v("当函数作为对象的方法调用时，函数中的 this 就是该对象；")])]),v._v(" "),a("li",[a("p",[v._v("在构造函数中，"),a("code",[v._v("this")]),v._v("指实例化对象，通过"),a("code",[v._v("new")]),v._v("关键字构造对象实际上相当于")]),v._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("var")]),v._v(" tempObj "),a("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("}")]),v._v(" \n"),a("span",{pre:!0,attrs:{class:"token function"}},[v._v("CreateObj")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[v._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),v._v("tempObj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),v._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("return")]),v._v(" tempObj\n")])]),v._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[v._v("1")]),a("br"),a("span",{staticClass:"line-number"},[v._v("2")]),a("br"),a("span",{staticClass:"line-number"},[v._v("3")]),a("br")])])]),v._v(" "),a("li",[a("p",[v._v("可以使用"),a("code",[v._v("call")]),v._v("或者"),a("code",[v._v("bind")]),v._v("手动更改函数的"),a("code",[v._v("this")])])]),v._v(" "),a("li",[a("p",[v._v("嵌套函数中的 this 不会继承外层函数的 this 值。解决思路：")]),v._v(" "),a("ul",[a("li",[v._v("第一种是把 this 保存为一个 self 变量，再利用变量的作用域机制传递给嵌套函数。")]),v._v(" "),a("li",[v._v("第二种是继续使用 this，但是要把嵌套函数改为箭头函数，因为箭头函数没有自己的执行上下文，所以它会继承调用函数中的 this。")])])])]),v._v(" "),a("h2",{attrs:{id:"栈空间和堆空间：数据是如何存储的？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#栈空间和堆空间：数据是如何存储的？"}},[v._v("#")]),v._v(" 栈空间和堆空间：数据是如何存储的？")]),v._v(" "),a("p",[v._v("JavaScript 是一种弱类型的、动态的语言。")]),v._v(" "),a("p",[v._v("JavaScript中有8种数据类型：Boolean, String, Number, BigInt, Symbol, Null, Undefined, Object")]),v._v(" "),a("p",[v._v("前面七种是原始类型，Object是引用类型。原始类型和引用类型在内存的存放方式不同。")]),v._v(" "),a("p",[v._v("原始类型存放在栈空间中；引用类型存放在堆空间中，栈中存放堆中的引用地址。")]),v._v(" "),a("p",[v._v("具体的说，如下图所示。变量环境中直接存放原始数据类型的变量值，存放引用数据类型在堆中的引用地址。")]),v._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/resource/image/22/bc/22100df5c75fb51037d7a929777c57bc.png",alt:""}})]),v._v(" "),a("p",[v._v("栈空间不会太大，适合放置小数据；堆空间很大，可以动态分配内存。")]),v._v(" "),a("h3",{attrs:{id:"从内存机制解释闭包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从内存机制解释闭包"}},[v._v("#")]),v._v(" 从内存机制解释闭包")]),v._v(" "),a("p",[v._v("预扫描内部函数；把内部函数引用的外部变量保存到堆中。")]),v._v(" "),a("h3",{attrs:{id:"深拷贝的实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#深拷贝的实现"}},[v._v("#")]),v._v(" 深拷贝的实现")]),v._v(" "),a("h2",{attrs:{id:"垃圾回收：垃圾数据是如何自动回收的？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收：垃圾数据是如何自动回收的？"}},[v._v("#")]),v._v(" 垃圾回收：垃圾数据是如何自动回收的？")]),v._v(" "),a("p",[v._v("垃圾数据回收分为手动回收和自动回收两种策略。 C/C++ 就是使用手动回收策略，何时分配内存、何时销毁内存都是由代码控制的。JavaScript使用的是自动回收策略，产生的垃圾数据是由垃圾回收器来释放的。")]),v._v(" "),a("p",[v._v("JavaScript中的数据存放在调用栈和堆中，垃圾回收对两个空间的数据有不同的处理机制。")]),v._v(" "),a("p",[v._v("在调用栈中，有一个记录当前执行状态的指针（称为 ESP），指向正在执行函数的执行上下文。当一个函数执行完毕，JavaScript 引擎会通过向下移动 ESP 来销毁该函数保存在栈中的执行上下文。")]),v._v(" "),a("p",[v._v("堆中通过JavaScript中的垃圾回收器进行垃圾回收，垃圾回收策略建立在“代际假说”基础上。")]),v._v(" "),a("p",[v._v("“代际假说”有两个特点：")]),v._v(" "),a("ul",[a("li",[v._v("第一个是大部分对象在内存中存在的时间很短，简单来说，就是很多对象一经分配内存，很快就变得不可访问；")]),v._v(" "),a("li",[v._v("第二个是不死的对象，会活得更久。")])]),v._v(" "),a("p",[v._v("Chrome的V8引擎把堆分为新生代和老生代两个区域。")]),v._v(" "),a("p",[v._v("新生代区域存放生存时间短占用空间较小的对象，通常只支持 1～8M 的容量，由副垃圾回收器负责垃圾回收。")]),v._v(" "),a("p",[v._v("老生代区域存放生存时间久或占用空间较大的对象，支持的容量远大于新生代区域，由主垃圾回收器负责回收。")]),v._v(" "),a("p",[v._v("垃圾回收器的主要执行流程：")]),v._v(" "),a("ol",[a("li",[v._v("标记活动对象和非活动对象")]),v._v(" "),a("li",[v._v("回收非活动对象占据的内存")]),v._v(" "),a("li",[v._v("进行内存碎片整理（可选）")])]),v._v(" "),a("p",[a("strong",[v._v("副垃圾回收器")])]),v._v(" "),a("p",[v._v("Scavenge 算法，新生代区域等分为对象区域和空闲区域，新加入的对象放入对象区域，当对象区域快被写满时进行一次垃圾回收：")]),v._v(" "),a("ol",[a("li",[v._v("标记阶段：标记对象区域中的活动对象")]),v._v(" "),a("li",[v._v("回收阶段：把活动对象复制到空闲区域中，并有序排列")]),v._v(" "),a("li",[v._v("对象空间和空闲空间进行反转，无限重复使用")])]),v._v(" "),a("p",[v._v("为了执行效率，一般新生区的空间会被设置得比较小，为了解决空间存满的问题。V8引擎使用了对象晋升策略，经过两次垃圾回收仍旧存活的对象会被移入老生区。")]),v._v(" "),a("p",[a("strong",[v._v("主垃圾回收器")])]),v._v(" "),a("p",[v._v("标记 - 清除（Mark-Sweep）算法：")]),v._v(" "),a("ol",[a("li",[a("p",[v._v("标记阶段：遍历调用栈，堆中未被引用的对象标记为可回收对象，引用到的对象标记为活动对象")])]),v._v(" "),a("li",[a("p",[v._v("回收阶段：直接清除内存中的可回收对象")])])]),v._v(" "),a("p",[v._v("标记 - 整理（Mark-Compact）算法：")]),v._v(" "),a("ol",[a("li",[a("p",[v._v("标记阶段：遍历调用栈，堆中未被引用的对象标记为可回收对象，引用到的对象标记为活动对象")])]),v._v(" "),a("li",[a("p",[v._v("整理阶段：将内存中的活动对象向一端移动，清理掉端空间以外的内存占用")])])]),v._v(" "),a("p",[v._v("JavaScript的垃圾回收也是在主线程上进行的，如果老生区的内存占用过大，垃圾回收的会长时间占用主线程，也就造成“全停顿”的现象。因此，V8引擎做了“增量标记算法”的优化以降低老生代垃圾回收造成的卡顿。")]),v._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/resource/image/de/e7/de117fc96ae425ed90366e9060aa14e7.png",alt:""}})]),v._v(" "),a("h2",{attrs:{id:"编译器和解释器：v8是如何执行一段javascript代码的？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译器和解释器：v8是如何执行一段javascript代码的？"}},[v._v("#")]),v._v(" 编译器和解释器：V8是如何执行一段JavaScript代码的？")]),v._v(" "),a("p",[v._v("V8引擎使用字节码+即时编译（JIT）技术")]),v._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/resource/image/1a/ae/1af282bdc4036096c03074da53eb84ae.png",alt:""}})]),v._v(" "),a("ol",[a("li",[a("p",[v._v("源代码 经过词法分析和语法分析 转换为 AST，词法分析将源码拆解为"),a("code",[v._v("token")]),v._v("，再由语法分析把"),a("code",[v._v("token")]),v._v("数据按语法规则转为AST，如果存在语法错误在这一步会抛出语法错误，中断后续执行。")])]),v._v(" "),a("li",[a("p",[v._v("V8引擎生成执行上下文")])]),v._v(" "),a("li",[a("p",[v._v("解释器Ignition根据AST生成字节码，字节码需要通过解释器转换为机器码才能执行。字节码所占的空间远小于机器码，可以减小系统的内存使用，以满足小内存设备支持。")]),v._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/resource/image/87/ff/87d1ab147d1dc4b78488e2443d58a3ff.png",alt:""}})])]),v._v(" "),a("li",[a("p",[v._v("解释器执行字节码时，会收集代码信息。如果发现有热点代码（HotSpot），编译器TurboFan将字节码转换为机器码保存起来，之后再执行到这段热点代码直接执行机器码。V8执行越久，被转换为机器码的代码就越多，执行效率越高。")])])])])}),[],!1,null,null,null);_.default=e.exports}}]);