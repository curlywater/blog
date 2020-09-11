---
title: gatsby-theme-novela
permalink: /f2e/source/gatsby-theme-novela
---

# gatsby-theme-novela


## 项目结构

``` bash
├── CHANGELOG.md
├── README.md
├── contentful
│   └── contentful-export.json
├── gatsby-browser.js   // 在终端运行时执行的代码，这是集合文件，具体定义在src/gatsby/browser中
├── gatsby-config.js    // 站点配置和gatsby插件配置
├── gatsby-node.js      // 编译依赖gatsby给的钩子执行的代码，这里是集合文件，具体定义在src/gatsby/node中
├── index.js
├── package.json
└── src
    ├── components
    │   ├── Anchor
    │   ├── Bio
    │   ├── Blockquote
    │   ├── Code
    │   ├── Figcaption
    │   ├── Headings
    │   ├── HorizontalRule
    │   ├── Image
    │   ├── Layout
    │   ├── Lists
    │   ├── Logo
    │   ├── MDX
    │   ├── Navigation
    │   ├── Paragraph
    │   ├── Progress
    │   ├── SEO
    │   ├── Section
    │   ├── SocialLinks
    │   ├── Subscription
    │   ├── Tables
    │   └── Transitions
    ├── gatsby  // 调用gatsby的一些钩子
    │   ├── browser
    │   ├── data
    │   └── node
    ├── gatsby-plugin-theme-ui // createPage 时使用的页面模版
    │   ├── colors.ts
    │   ├── index.ts
    │   ├── prism.ts
    │   └── tags.ts
    ├── icons
    │   ├── index.ts
    │   ├── social
    │   └── ui
    ├── sections
    │   ├── article
    │   ├── articles
    │   └── author
    ├── styles
    │   ├── global.ts
    │   ├── index.ts
    │   └── media.ts
    ├── templates
    │   ├── article.template.tsx
    │   ├── articles.template.tsx
    │   └── author.template.tsx
    ├── types
    │   ├── index.d.ts
    │   └── store.d.ts
    └── utils
        └── index.ts
```