const md = require("markdown-it")();

const front2EndSidebar = [
  "/前端技术/",
  {
    title: "HTML",
    children: [
      "/前端技术/HTML/HTML的基础标签.md"
    ]
  },
  {
    title: "JavaScript",
    children: [
      "/前端技术/JavaScript/JavaScript变量与数据类型.md",
      "/前端技术/JavaScript/Chrome浏览器基本工作原理.md",
      "/前端技术/JavaScript/《浏览器工作原理与实践》学习笔记.md",
      {
        title: "JavaScript.info 学习笔记",
        children: [
          "/前端技术/JavaScript/JavaScript.info 学习笔记/JavaScript 编程语言.md",
        ],
      },
    ],
  },
  {
    title: "CSS",
    children: [
      {
        title: "CSS深入理解",
        path: "/f2e/css/deep-think/",
        children: [
          "/前端技术/CSS/CSS深入理解/margin.md",
          "/前端技术/CSS/CSS深入理解/border.md",
          "/前端技术/CSS/CSS深入理解/padding.md",
          "/前端技术/CSS/CSS深入理解/line-height.md",
          "/前端技术/CSS/CSS深入理解/vertical-align.md",
          "/前端技术/CSS/CSS深入理解/float.md",
          "/前端技术/CSS/CSS深入理解/relative.md",
          "/前端技术/CSS/CSS深入理解/absolute.md",
          "/前端技术/CSS/CSS深入理解/z-index.md",
          "/前端技术/CSS/CSS深入理解/overflow.md",
        ],
      },
      {
        title: "CSS查阅手册",
        path: "/f2e/css/css-basic/",
        children: [
          "/前端技术/CSS/CSS查阅手册/border-radius/",
          "/前端技术/CSS/CSS查阅手册/font-family字体组合.md",
          "/前端技术/CSS/CSS查阅手册/flexbox.md",
          "/前端技术/CSS/CSS查阅手册/grid.md",
        ],
      },
      "/前端技术/CSS/布局实例.md",
      "/前端技术/CSS/styled-components使用指南.md",
      "/前端技术/CSS/Emotion使用指南.md",
    ],
  },
  {
    title: "React",
    children: [
      "/前端技术/React/React知识体系.md",
      "/前端技术/React/React组件的生命周期.md",
      "/前端技术/React/React Hook使用介绍.md",
      "/前端技术/React/React与ReactDOM分别做了什么？.md",
      "/前端技术/React/少量组件应用方案.md",
      "/前端技术/React/React-Router.md",
      "/前端技术/React/Reach-Router.md"
    ],
  },
  {
    title: "TypeScript",
    children: [
      "/前端技术/TypeScript/在VSCode中使用TypeScript.md",
      "/前端技术/TypeScript/TypeScript使用文档.md",
    ],
  },
  {
    title: "模块化和构建工具",
    children: ["/前端技术/模块化和构建工具/前端模块化规范.md"],
  },
  {
    title: "源码解读",
    children: ["/前端技术/源码解读/探索Typography.js.md", "/前端技术/源码解读/gatsby-theme-novela.md"],
  },
  {
    title: "项目记录",
    children: [
      "/前端技术/项目记录/个人博客搭建/",
      "/前端技术/项目记录/App-ideas/",
    ],
  },
];

const algorithmSidebar = [
  "/算法/",
  "/算法/复杂度计算/",
  "/算法/基础数据结构/",
  "/算法/递归/",
  "/算法/排序/",
  "/算法/二分查找/",
  "/算法/散列表/",
];

const exploreSidebar = [
  "/探索/",
  {
    title: "Git",
    children: ["/探索/Git/如何规范Git Commit Message.md"],
  },
  {
    title: "收藏夹",
    children: ["/探索/收藏夹/好用的开发工具.md", "/探索/收藏夹/Linux命令.md"],
  },
];

module.exports = {
  base: "/blog/",
  title: "Curly的Blog",
  description: "记录探索历程",
  head: [
    ["link", { rel: "icon", href: "/favicon.png" }],
    [
      "script",
      {},
      `
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?bee8141d3226bf8abf76962d6e22700f";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();
    `,
    ],
  ],
  configureWebpack: {
    resolve: {
      alias: {
        "@images": "./images",
      },
    },
  },
  extraWatchFiles: [".vuepress/styles/*.styl"],
  themeConfig: {
    smoothScroll: true,
    lastUpdated: "更新时间",
    nav: [
      { text: "前端技术", link: "/f2e/" },
      {
        text: "算法",
        link: "/algo/",
      },
      {
        text: "探索",
        link: "/explore/",
      },
      { text: "Github", link: "https://github.com/curlywater" },
    ],
    sidebarDepth: 2,
    sidebar: {
      "/前端技术/": front2EndSidebar,
      "/算法/": algorithmSidebar,
      "/探索/": exploreSidebar,
    },
  },
  markdown: {
    lineNumbers: true,
  },
  extendMarkdown: (md) => {
    // 使用更多的 markdown-it 插件!
    md.use(require("markdown-it-task-lists"));
  },
  plugins: [
    ["@vuepress/medium-zoom"],
    [
      "mathjax",
      {
        macros: {
          "\\Z": "\\mathbb{Z}",
        },
      },
    ],
    "flowchart",
    [
      "container",
      {
        type: "details",
        before: (info) =>
          `<details class="custom-block details">${
            info ? `<summary>${md.renderInline(info)}</summary>` : ""
          }\n`,
        after: () => "</details>\n",
      },
    ],
    [
      "@vuepress/last-updated",
      {
        transformer: (timestamp) => {
          const updateTime = new Date(timestamp);
          const year = updateTime.getFullYear();
          const month = updateTime.getMonth() + 1;
          const date = updateTime.getDate();
          const hours = `${updateTime.getHours()}`.padStart(2, "0");
          const minutes = `${updateTime.getMinutes()}`.padStart(2, "0");
          return `${year}年${month}月${date}日 ${hours}:${minutes}`;
        },
      },
    ],
  ],
};
