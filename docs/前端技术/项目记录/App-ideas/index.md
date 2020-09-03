---
title: App Ideas
permalink: /f2e/app-ideas
---

# App Ideas 编程挑战

[app-ideas](https://github.com/florinpop17/app-ideas)是 Github 上的一个开源编程挑战，意图在于为开发者提供一些练手的项目挑战。

为了提供预览功能，我在一个React项目中集成了各个挑战。[项目入口](https://curlywater.github.io/app-ideas-challenge)。

这篇文章记录实现项目中解决的问题和经验总结。


## 自动生成挑战项目列表

在项目结构中，所有挑战自行维护目录集合在`projects`目录下。

自动生成挑战项目列表，只需读取`projects`下的所有目录，获取信息渲染超链接列表即可。

而在展示时，尽量减轻不必要的消耗，因此希望能动态加载模块

### 使用`require.context`获取目录下所有模块


webpack提供的模块支持函数[`require.context`](https://webpack.docschina.org/guides/dependency-management/#require-with-expression)可以达到创建上下文（`context`）的效果。

创建上下文即生成一个上下文模块（`context module`），该模块引用指定目录下所有通过筛选的模块；并在内部维护一个map对象，记录模块定位符和模块id的对应关系。同时提供接口，支持开发者读取map对象信息。

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

### 参考资料

[Webpack文档 —— require.context](https://webpack.docschina.org/api/module-methods/#requirecontext)

[Webpack文档 —— 依赖管理](https://webpack.docschina.org/guides/dependency-management)

