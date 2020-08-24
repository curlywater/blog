<template>
  <div>
    <template v-for="item in categoryList">
      <template v-if="item.type==='Category'">
        <h3>{{item.title}}</h3>
        <ul>
          <li v-for="article in item.articles">
            <RouterLink :to="article.url">{{article.title}}</RouterLink>
          </li>
        </ul>
      </template>
      <p v-else>
        <RouterLink :to="item.url">{{item.title}}</RouterLink>
      </p>
    </template>
  </div>
</template>

<script>
import path from "path";

function flattenSidebar(tree, { hasParentCategory, subCategoryTitle } = {}) {
  if (!tree) {
    return [];
  }
  const items = [];
  tree.forEach(item => {
    if (Object.prototype.toString.call(item) === "[object Object]") {
      // 第一级分组当作Category存，子分组不存
      const { title, path, children } = item;
      let articles = items;
      if (!hasParentCategory) {
        const category = {
          type: "Category",
          title,
          articles: []
        };
        items.push(category);
        articles = category.articles;
      }
      if (path) {
        articles.push({
          type: "CategoryIntro",
          url: path,
          title
        });
      } else {
        articles.push(
          ...flattenSidebar(children, {
            hasParentCategory: true,
            subCategoryTitle: hasParentCategory ? title : ""
          })
        );
      }
    } else {
      items.push({
        type: "Article",
        relativePath: item,
        categoryTitle: subCategoryTitle
      });
    }
  });
  return items;
}

export default {
  methods: {
    formatArticleData(article) {
      const { type, relativePath, categoryTitle } = article;
      if (type === "Article") {
        const base = relativePath.slice(1);
        const pageData =
          path.extname(base) === ".md"
            ? this.pageMap.get(base)
            : this.pageMap.get(`${base}index.md`) ||
              this.pageMap.get(`${base}README.md`);
        if (pageData) {
          const { path: pagePath, title } = pageData;
          return {
            type,
            url: pagePath,
            title: categoryTitle ? `【${categoryTitle}】📃 ${title}` : title
          };
        }
      } else {
        return article;
      }
    }
  },
  computed: {
    pageMap() {
      const map = new Map();
      this.$site.pages.forEach(page => map.set(page["relativePath"], page));
      return map;
    },
    categoryList() {
      return this.sidebarItems
        .map(item => {
          const { type } = item;
          if (type === "Category") {
            item.articles = item.articles
              .map(this.formatArticleData)
              .filter(article => this.$route.path !== article.url);
            return item;
          } else {
            return this.formatArticleData(item);
          }
        })
        .filter(
          item =>
            item && (item.type !== "Article" || this.$route.path !== item.url)
        );
    },
    sidebarItems() {
      const { sidebar } = this.$themeConfig;
      if (!sidebar) {
        return [];
      }
      const { relativePath } = this.$page;
      const segments = path.dirname(relativePath).split(path.sep);
      const nav = segments.shift();
      const pageSidebar = segments.reduce((list, segment) => {
        const item = list?.find(item => {
          if (Object.prototype.toString.call(item) === "[object Object]") {
            return item.title === segment;
          } else {
            return item === segment;
          }
        });
        return item?.["children"];
      }, sidebar[`/${nav}/`]);
      return flattenSidebar(pageSidebar);
    }
  }
};
</script>

<style>
</style>