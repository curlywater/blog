const md = require("markdown-it")();

const front2EndSidebar = [
  "/前端技术/",
  {
    title: "React系列",
    children: [
      "/前端技术/React/React知识体系/",
      "/前端技术/React/React组件的生命周期.md",
    ],
  },
  {
    title: "App Ideas编程挑战",
    path: "/f2e/app-ideas/",
    children: ["/前端技术/App-ideas/Bin2Dec/"],
  },
  {
    title: "项目记录",
    children: ["/前端技术/项目记录/个人博客搭建/"],
  },
];

const algorithmSidebar = ["/算法/", "/算法/排序/"];

module.exports = {
  title: "Curly的Blog",
  description: "记录探索历程",
  head: [["link", { rel: "icon", href: "/favicon.png" }]],
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
      { text: "Github", link: "https://github.com/curlywater" },
    ],
    sidebarDepth: 2,
    sidebar: {
      "/前端技术/": front2EndSidebar,
      "/算法/": algorithmSidebar,
    },
  },
  extendMarkdown: (md) => {
    // 使用更多的 markdown-it 插件!
    md.use(require("markdown-it-task-lists"));
  },
  plugins: [
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
  ],
};
