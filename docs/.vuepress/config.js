const front2EndSidebar = [
  "/前端技术/",
  {
    title: "React系列",
    children: ["/前端技术/React/React知识体系/"],
  },
  {
    title: "App Ideas编程挑战",
    path: "/f2e/app-ideas/",
    children: ["/前端技术/App-ideas/Bin2Dec/"],
  },
];

const algorithmSidebar = ["/算法/", "/算法/排序/"];

module.exports = {
  title: "Curly的Blog",
  description: "记录探索历程",
  head: [["link", { rel: "icon", href: "/favicon.png" }]],
  lastUpdated: "更新时间",
  smoothScroll: true,
  configureWebpack: {
    resolve: {
      alias: {
        "@images": "./images",
      },
    },
  },
  themeConfig: {
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
      'mathjax',
      {
        macros: {
          '\\Z': '\\mathbb{Z}',
        },
      },
    ],
    "flowchart",
  ],
};
