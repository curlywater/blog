---
title: 个人博客搭建
permalink: /f2e/project/blog
---

# 个人博客搭建

博客站点的核心是内容表达。结构关系、文章阅读体验是最重要的部分。

个人站点看似简单，但其中有很多需要细究的设计问题，没有完整的设计系统成品还是会比较粗糙。因此我选择了几个方案：Gridea，Hexo + NexT，Gatsby + gatsby-theme-novale，VuePress。

## 方案调研

### Gridea

示例：[https://imhanjie.com/](https://imhanjie.com/)

项目仓库：[https://github.com/getgridea/gridea](https://github.com/getgridea/gridea)

gridea 的定位是静态博客写作客户端，文章书写、文章管理，站点配置、站点发布一站式配齐。

**主题**

可供选择的主题风格偏简洁轻快类型，[https://gridea.dev/themes/](https://gridea.dev/themes/)

**博客功能**

支持归档、标签、TOC

**项目分析**

gridea 是一个独立的开源项目。

文章管理和编辑功能，由 Electron 提供客户端运行环境、Vue+Ant Design 负责客户端 UI、Monaco Editor 作为编辑器、文章编辑完成后交由 electron 主线程以 markdown 文件存至本地，同时维护一份`json`文件作为应用数据源。
站点预览和发布功能，则是由自实现的 Renderer 作为核心，Renderer 中实现 EJS 和 Less 编译功能，搭配数据源渲染静态页面。预览则是用`express`提供本地服务。

截止 2020 年 8 月 13 日，gridea 仓库的维护情况：Github 目前有 262 个 issue，9 个 Pull requests 未合并，源码部分最近更新是在 2020 年 5 月。开发者修复问题的及时性不高。

**总结**

优点：满足 Blog 基本需求阅读体验不错，可扩展性弱。

缺点：项目更新时间过长，问题修复和功能补充迟缓。

适合需要直接上手写作的朋友。

### Hexo + NexT

示例：[https://theme-next.js.org/](https://theme-next.js.org/)

官方文档：[https://theme-next.js.org/docs/](https://theme-next.js.org/docs/)

Hexo，快速、简洁且高效的博客框架，拥有大量成熟主题和插件系统。Hexo 的主题很多，[主题市场](https://hexo.io/themes/)筛选功能不强，所以还是直接选用“老牌”hexo 主题——NexT 来调研。

**主题**

黑白色调，文章内语法展现对比不强；默认字体和行距阅读体验一般，可以自行微调。

**博客功能**

支持分类、归档、标签、TOC、搜索、评论、打赏、夜间模式......

更多介绍请戳[NexT 官方文档]()

**总结**

优点：Hexo 已经是一个稳定成熟的项目。NexT 几乎覆盖到 Blog 所需的所有功能，版本每月 1 日更新。

缺点：Hexo 的主体系太过静态，对 UI 的实现依赖于原生技术。

使用 Hexo+NexT 能马上拥有一个功能齐全的博客。

### Gatsby

[Gatsby](https://www.gatsbyjs.com/)，基于 React 搭建静态站点，其优势在于

- 基于 React，方便使用 React 以及生态圈中的各类组件
- 开箱即用，轻松支持最新的 Web 开发技术，譬如 Webpack 打包，ES6 编译，支持 TS，各种 CSS 方案
- 构建预渲染页面，满足快速加载和 SEO 需求；构建静态资源，直接部署至各类服务平台
- 集成 GraphQL，支持不同数据来源
- PWA 生成器

**主题**

社区贡献的[主题](https://www.gatsbyjs.com/starters/?c=Blog)挺多，但多数是外文实践，排版也多是为外文服务。质量参差不齐，缺少一个集大成者。举两个例子：

- [gatsby-starter-lumen](https://www.gatsbyjs.org/starters/alxshelepenok/gatsby-starter-lumen/)：具备分类、标签功能

- [gatsby-starter-novela](https://www.gatsbyjs.org/starters/narative/gatsby-starter-novela/)：团队作品，设计师提供设计方案，体验不错。

**功能**

Gatsby 有很多[插件](https://www.gatsbyjs.com/plugins/)，扩展功能可以从插件库里找，没有也能用 Gatsby 的钩子自行实现。

用一些先进的功能非常方便，譬如支持 MDX。

**总结**

从其生态的贡献情况来看，Gatsby 在国外似乎更受欢迎。Gatsby 目前的应用覆盖到官网、Blog、项目介绍页......指路[Showcase](https://www.gatsbyjs.com/showcase)。

底层支持强大，适合想要用 React 折腾静态页面的开发者。

### VuePress

VuePress 信息集合：[https://github.com/vuepressjs/awesome-vuepress](https://github.com/vuepressjs/awesome-vuepress)

Vue 驱动的静态网站生成器。由两部分组成：驱动主题系统和插件 API 的静态站点生成器；为书写技术文档而优化默认主题，默认主题的诞生初衷是为了支持 Vue 及其子项目的文档需求，阅读体验不错。

**主题**

VuePress 的默认主题以技术文档的结构呈现站点。同时 VuePress 也提供了主题系统可供自行定义主题。

VuePress[主题生态](https://github.com/vuepressjs/awesome-vuepress#themes)目前是分为两个方向：文档和 Blog。文档部分的阅读体验非常友好，但是 Blog 还是没有一个可以直接上手的好设计。

**功能**

插件 API 为实现功能扩展提供了可能性，指路[插件生态](https://github.com/vuepressjs/awesome-vuepress#official-plugins)。

**总结**

VuePress 的国内贡献者更多，有[中文文档](https://vuepress.vuejs.org/zh/)。

适合以阅读体验优先、倾向于以文档结构展现内容的朋友，或者是想要用 Vue 折腾静态页面的开发者。

## 使用 VuePress 搭建 Blog

在之前折腾过一段实践的 Gatsby，然而没有靠谱的设计，最终效果还是显得粗糙，特别是文章内容排版（Typography）相关的部分。之后才确定了“优先考虑结构关系体现和文章阅读体验”的想法。而目前体验过的文章展现，满意的还是 Vue 的主题，在常用的写作编辑器 Typora 中也是惯用 Vue 主题。

用 VuePress 的默认主题把站点建起来，跟随[官方文档](https://vuepress.vuejs.org/zh/)一步一步实践就好了，这里记录一下遇到的问题和解决方法。

### 建立多层级目录

目录是建立在结构基础上的，首先需要构思站点结构。

譬如我的技术博客需要分成前端技术、算法学习、其他三个板块（nav）。前端技术的分类（category）包括 JavaScript 深入、CSS 系列、React 系列。分类中涵盖不同的文章或子系列。三个板块用作导航，分类由侧边栏显示。

设置导航需要配置`themeConfig.nav`，`link`对应文章的 URL。

```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    nav: [
      { text: "前端技术", link: "/f2e/" },
      {
        text: "算法",
        link: "/algo/",
      },
      { text: "Github", link: "https://github.com/curlywater" },
    ],
  },
};
```

设置侧边栏，VuePress 侧边栏默认是显示当前文章的 TOC，如果需要显示目录结构（父子间关系、兄弟间顺序），需要配置`themeConfig.sidebar`进行定制。

`themeConfig.sidebar`中面向的对象是文件系统。指定同一目录下的文章使用相同侧边栏，侧边栏支持多层嵌套。

```js
// .vuepress/config.js
const front2EndSidebar = [
  "/前端技术/",
  {
    title: "React系列",
    children: ["/前端技术/React/React知识体系/"],
  },
  {
    title: "CSS系列",
    children: [
      {
        title: "CSS深入理解系列",
        children: ["/前端技术/CSS/CSS深入理解/overflow/"],
      },
    ],
  },
];

const algorithmSidebar = ["/算法/", "/算法/排序/"];

module.exports = {
  themeConfig: {
    sidebarDepth: 2,
    sidebar: {
      "/前端技术/": front2EndSidebar,
      "/算法/": algorithmSidebar,
    },
  },
};
```

### 禁止侧边栏显示文章结构

> 默认情况下，侧边栏会自动地显示由当前页面的标题（headers）组成的链接，并按照页面本身的结构进行嵌套，你可以通过 `themeConfig.sidebarDepth` 来修改它的行为。默认的深度是 `1`，它将提取到 `h2` 的标题，设置成 `0` 将会禁用标题（headers）链接，同时，最大的深度为 `2`，它将同时提取 `h2` 和 `h3` 标题。

设置`themeConfig.sidebarDepth`为`0`，将禁用标题链接。

### 动态生成分类文章列表

依赖全局计算属性`$themeConfig.sidebar`/`$page`/`$pages`构建一个 [CategoryArticleList 组件](https://github.com/curlywater/blog/blob/master/docs/.vuepress/components/CategoryArticleList.vue)。在 Markdown 文件中使用 Vue 组件。手写解析或者利用`@theme/util`生成 Sidebar 数据的方法，后者一致性更高一些。

### Markdown 支持 Mathjax

```js
// .vuepress/config.js
module.exports = {
  plugins: [
    [
      "vuepress-plugin-mathjax",
      {
        macros: {
          "\\Z": "\\mathbb{Z}",
        },
      },
    ],
  ],
};
```

https://vuepress.github.io/zh/plugins/mathjax

### Markdown 支持 TaskList

- 增加 markdown-it 扩展
- 增加全局样式

```js
// .vuepress/config.js
module.exports = {
  extendMarkdown: (md) => {
    // 使用更多的 markdown-it 插件!
    md.use(require("markdown-it-task-lists"));
  },
};
```

```css
// .vuepress/styles/index.styl
li.task-list-item {
  list-style-type: none;
}

input.task-list-item-checkbox {
  margin-left: -1.2em;
}
```

### 书写规范

在默认主题的样式中，只对 h1-h3 级标题做了字体定义，间接限定一篇文章的嵌套深度。h1-h3 级标题 > 加粗 > 普通文本，嵌套过深的文章需要拆分。这样似乎能控制一篇文章的复杂度，提高易读性。

### 可跟进优化的

需要一个编辑器，目前上写作中遇到的问题：

- 增加文章后需要手动设置`config.js`
- 书写和预览不一致
