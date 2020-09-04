---
title: App Ideas 编程挑战
permalink: /f2e/app-ideas
---

# App Ideas 编程挑战

[app-ideas](https://github.com/florinpop17/app-ideas)是 Github 上的一个开源编程挑战，意图在于为开发者提供一些练手的项目挑战。

为了提供预览功能，我在一个React项目中集成了各个挑战。[项目入口](https://sourcegraph.com/github.com/curlywater/app-ideas-challenge)。

这篇文章记录实现项目中解决的问题和经验总结。


## 自动生成项目列表

所有项目自行维护目录集合在`projects`目录下。

自动生成项目列表，只需读取`projects`下的所有目录，获取信息，渲染超链接列表即可。

而在展示时，尽量减轻不必要的消耗，因此希望能动态加载模块。

### 使用`require.context`获取目录下所有模块

webpack提供的模块支持函数[`require.context`](https://webpack.docschina.org/guides/dependency-management/#require-with-expression)可以达到创建上下文（`context`）的效果。

创建上下文即生成一个上下文模块（`context module`），该模块引用指定目录中通过筛选的所有模块；并在内部维护一个map对象，记录模块定位符和模块id的对应关系。同时提供接口，支持开发者读取map对象信息。

在使用表达式定位符加载模块时，比如`require('./template/' + name + '.ejs');`，由于编译时无法确定具体模块，因此会创建一个上下文，等待运行时调用。这也导致所有可能用到的模块都被引入到bundle中。

而`require.context`，提供给开发者自行创建上下文的能力，并且可以设置模块加载的模式。

``` js
const context = require.context(
  directory: String,
  includeSubdirs: Boolean /* 可选的，默认值是 true */,
  filter: RegExp /* 可选的，默认值是 /^\.\/.*$/，所有文件 */,
  mode: String  /* 可选的， 'sync' | 'eager' | 'weak' | 'lazy' | 'lazy-once'，默认值是 'sync' */
)
```

`require.context`返回一个导入函数，该函数有三个属性`resolve`、`keys`、`id`，
- `context(request)`：根据模块定位符导入对应模块
- `context.resolve(request)`：返回模块对应的id
- `context.keys()`：返回map中所有模块的id
- `context.id`：上下文模块的id

`mode`选项对应模块的加载方式：
- `sync`：打包到当前chunk中，静态加载
- `eager`：打包到当前chunk中，返回一个Promise
- `lazy`：每个模块生成一个可延迟加载的chunk
- `lazy-once`：将所有模块生成到一个可延迟加载的chunk中

### 懒加载模块

需要满足两个需求：
- 项目列表中显示项目名称和描述信息
- 动态路由加载项目代码


项目入口设计成一个overview结构。

``` js
export default {
  name: "BorderRadiusPreviewer",
  description: "圆角生成器",
  getMain () {
    return import("./App.js")
  },
  getReadme () {
    return import("./README.md")
  }
}
```

这里的`getMain`和`getReadme`分别获取项目入口组件和项目描述，通过`import()`动态加载对应模块。
尝试过定义一个`ProjectOverview`类供各组件使用，但存在`import()`依赖词法作用域定位模块的问题。

在路由部分，则是`React-Router`，`React.lazy`，`<Suspense>`三者搭配实现，也是[代码分割](https://zh-hans.reactjs.org/docs/code-splitting.html)部分的典型实践了。

**[项目对应代码](https://sourcegraph.com/github.com/curlywater/app-ideas-challenge/-/blob/src/App.js)**

### 参考资料

[Webpack文档 —— require.context](https://webpack.docschina.org/api/module-methods/#requirecontext)

[Webpack文档 —— 依赖管理](https://webpack.docschina.org/guides/dependency-management)

