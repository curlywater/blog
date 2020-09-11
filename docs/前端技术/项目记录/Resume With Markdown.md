---
title: Resume with Markdown
permalink: /f2e/project/resume
---

# Resume With Markdown

想要使用Markdown制作一份简历，支持转换为pdf文件格式下载。

简历一般包含个人介绍、工作经历。或许会有显示头像、图表之类的需求。因此加入使用MDX增加在Markdown中加入自定义组件的功能。

Gatsby正好集成了相关的插件，加上功能并不动态，因此选用Gatsby来实现。

项目架构上，借鉴[gatsby-theme-novela](https://github.com/narative/gatsby-theme-novela)的设计。



.
├── CHANGELOG.md
├── README.md
├── contentful
│   └── contentful-export.json
├── gatsby-browser.js
├── gatsby-config.js
├── gatsby-node.js
├── index.js
├── package.json
└── src
    ├── components
    │   ├── Anchor
    │   │   ├── Anchor.tsx
    │   │   └── index.ts
    │   ├── Bio
    │   │   ├── Bio.tsx
    │   │   └── index.ts
    │   ├── Blockquote
    │   │   ├── Blockquote.tsx
    │   │   └── index.ts
    │   ├── Code
    │   │   ├── Code.Pre.tsx
    │   │   ├── Code.Prism.tsx
    │   │   └── index.ts
    │   ├── Figcaption
    │   │   ├── Figcaption.tsx
    │   │   └── index.ts
    │   ├── Headings
    │   │   ├── Headings.tsx
    │   │   └── index.ts
    │   ├── HorizontalRule
    │   │   ├── HorizontalRule.tsx
    │   │   └── index.ts
    │   ├── Image
    │   │   ├── Image.Placeholder.tsx
    │   │   ├── Image.Zoom.tsx
    │   │   ├── Image.tsx
    │   │   └── index.ts
    │   ├── Layout
    │   │   ├── Layout.tsx
    │   │   └── index.ts
    │   ├── Lists
    │   │   ├── List.Ordered.tsx
    │   │   ├── List.Unordered.tsx
    │   │   └── index.ts
    │   ├── Logo
    │   │   ├── Logo.tsx
    │   │   └── index.ts
    │   ├── MDX
    │   │   ├── MDX.tsx
    │   │   └── index.ts
    │   ├── Navigation
    │   │   ├── Navigation.Footer.tsx
    │   │   ├── Navigation.Header.tsx
    │   │   ├── Navigation.Paginator.tsx
    │   │   └── index.ts
    │   ├── Paragraph
    │   │   ├── Paragraph.tsx
    │   │   └── index.ts
    │   ├── Progress
    │   │   ├── Progress.tsx
    │   │   └── index.ts
    │   ├── SEO
    │   │   ├── SEO.tsx
    │   │   └── index.ts
    │   ├── Section
    │   │   ├── Section.tsx
    │   │   └── index.ts
    │   ├── SocialLinks
    │   │   ├── SocialLinks.tsx
    │   │   └── index.ts
    │   ├── Subscription
    │   │   ├── Subscription.tsx
    │   │   └── index.ts
    │   ├── Tables
    │   │   ├── Table.Cell.tsx
    │   │   ├── Table.Head.Cell.tsx
    │   │   ├── Table.Head.tsx
    │   │   ├── Table.tsx
    │   │   └── index.ts
    │   └── Transitions
    │       ├── Transitions.CSS.FadeIn.tsx
    │       └── index.ts
    ├── gatsby
    │   ├── browser
    │   │   ├── onInitialClientRender.js
    │   │   ├── onRouteUpdate.js
    │   │   └── shouldUpdateScroll.js
    │   ├── data
    │   │   ├── data.normalize.js
    │   │   └── data.query.js
    │   └── node
    │       ├── createPages.js
    │       ├── createResolvers.js
    │       ├── createSchemaCustomization.js
    │       ├── onCreateNode.js
    │       ├── onCreateWebpackConfig.js
    │       ├── onPreBootstrap.js
    │       └── sourceNodes.js
    ├── gatsby-plugin-theme-ui
    │   ├── colors.ts
    │   ├── index.ts
    │   ├── prism.ts
    │   └── tags.ts
    ├── icons
    │   ├── index.ts
    │   ├── social
    │   │   ├── Behance.Icon.tsx
    │   │   ├── Buymeacoffee.Icon.tsx
    │   │   ├── DevTo.Icon.tsx
    │   │   ├── DigitalOcean.Icon.tsx
    │   │   ├── Dribbble.Icon.tsx
    │   │   ├── Facebook.Icon.tsx
    │   │   ├── Github.Icon.tsx
    │   │   ├── Instagram.Icon.tsx
    │   │   ├── LinkedIn.Icon.tsx
    │   │   ├── Mailto.Icon.tsx
    │   │   ├── Medium.Icon.tsx
    │   │   ├── Notion.Icon.tsx
    │   │   ├── Patreon.Icon.tsx
    │   │   ├── Paypal.Icon.tsx
    │   │   ├── Stackoverflow.Icon.tsx
    │   │   ├── TripAdvisor.Icon.tsx
    │   │   ├── Twitter.Icon.tsx
    │   │   ├── Unsplash.Icon.tsx
    │   │   └── YouTube.Icon.tsx
    │   └── ui
    │       ├── ChevronLeft.Icon.tsx
    │       ├── Copied.Icon.tsx
    │       ├── Copy.Icon.tsx
    │       ├── Ex.Icon.tsx
    │       ├── Link.Icon.tsx
    │       ├── Rows.Icon.tsx
    │       ├── Tiles.Icon.tsx
    │       ├── ToggleClose.Icon.tsx
    │       └── ToggleOpen.Icon.tsx
    ├── sections
    │   ├── article
    │   │   ├── Article.Aside.tsx
    │   │   ├── Article.Authors.tsx
    │   │   ├── Article.Controls.tsx
    │   │   ├── Article.HandleOverlap.tsx
    │   │   ├── Article.Hero.tsx
    │   │   ├── Article.Next.tsx
    │   │   ├── Article.SEO.tsx
    │   │   └── Article.Share.tsx
    │   ├── articles
    │   │   ├── Articles.Hero.tsx
    │   │   ├── Articles.List.Context.tsx
    │   │   └── Articles.List.tsx
    │   └── author
    │       ├── Author.Articles.tsx
    │       └── Author.Hero.tsx
    ├── styles
    │   ├── global.ts
    │   ├── index.ts
    │   └── media.ts
    ├── templates
    │   ├── article.template.tsx
    │   ├── articles.template.tsx
    │   └── author.template.tsx
    ├── types
    │   ├── index.d.ts
    │   └── store.d.ts
    └── utils
        └── index.ts