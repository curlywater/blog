const md = require("markdown-it")();

const front2EndSidebar = [
  "/前端技术/",
  {
    title: "JavaScript",
    children: [
      "/前端技术/JavaScript/Chrome基本工作原理/",
      {
        title: "JavaScript.info 学习笔记",
        children: [
          "/前端技术/JavaScript/JavaScript.info 学习笔记/JavaScript 编程语言.md",
        ],
      },
      "/前端技术/JavaScript/《浏览器工作原理与实践》学习笔记.md",
    ],
  },
  {
    title: "CSS",
    children: [
      {
        title: "CSS查阅手册",
        path: "/f2e/css/css-basic/",
        children: [
          "/前端技术/CSS/CSS查阅手册/border-radius/",
          "/前端技术/CSS/CSS查阅手册/font-family字体组合.md",
        ],
      },
      "/前端技术/CSS/styled-components使用指南.md",
      "/前端技术/CSS/Emotion使用指南.md",
    ],
  },
  {
    title: "React",
    children: [
      "/前端技术/React/React知识体系/",
      "/前端技术/React/React组件的生命周期.md",
    ],
  },
  {
    title: "TypeScript",
    children: ["/前端技术/TypeScript/在VSCode中使用TypeScript.md"],
  },
  {
    title: "App Ideas编程挑战",
    path: "/f2e/app-ideas/",
    children: [
      "/前端技术/App-ideas/Bin2Dec/",
      "/前端技术/App-ideas/Border-radius Previewer.md",
    ],
  },
  {
    title: "项目记录",
    children: ["/前端技术/项目记录/个人博客搭建/"],
  },
];

const algorithmSidebar = ["/算法/", "/算法/排序/"];

module.exports = {
  base: "/blog/",
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
