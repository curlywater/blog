---
title: React Router 记录
permalink: /f2e/react/react-router
---

# React Router 记录

## 关于React Router v5

在React Router v4发布两年之后，React Router开启了v5版本的开发。因为React引入hook，React Router的代码实现和行为表现也可以有新的形态。拥抱趋势，React Router v5的API将更加贴近于hook，v5版本会更接近当前Reach/Router的API形态。

[React Router v5 Roadmap](https://github.com/ReactTraining/react-router/issues/6885)


## React Router v4

React Router分为Core，Web，Native三部分，Core作为基础，Web/Native在基础之上根据各自载体特性增加了一些功能。

React Route依托Lerna实现monorepo分包管理，React Route Web对应的包也就是`react-router-dom`。

动态路由：路由、匹配器、导航都是组件，可以跟普通组件一样动态挂载。路由不再是在运行时之外静态存在，而是可以在运行过程中被动态控制。

这里只记录要点，细节参见
- [官方英文文档](https://reactrouter.com/web)
- [不错的中文文档](https://itbilu.com/nodejs/npm/react-router.html)

### `<BrowserRouter>`

使用HTML5 history API实现的路由，history API提供`pushState/replaceState/popState`方法操作浏览器的浏览历史堆栈，更新地址栏，但不会向服务端发送请求。

为了能通过url直接访问到对应页面，需要在服务器端对路由进行拦截处理。

当React项目挂在子路径下，设置`basename=/xxx`，`basename`属性应以斜杠(/)开头，但不能以斜杠结尾。


### `<HashRouter>`

使用URL Hash实现的路由，在使用上，和`<BrowserRouter>`相比的弊端：不支持`location.key`或`location.state`。

`hashType`属性: 用于window.location.hash的编码类型。默认："slash" 。有效值为：
- "slash" - 创建的哈希类似于：#/ and #/sunshine/lollipops
- "noslash" - 创建的哈希类似于：# and #sunshine/lollipops
- "hashbang" - 创建 “ajax crawlable” (Google弃用) 形式的哈希，类似：#!/和#!/sunshine/lollipops

### `<MemoryRouter>`

将历史记录保存在内存中，不读取或更改地址栏。在测试环境和非浏览器环境中使用。

### `<StaticRouter>`

静态，即全程路由不会发生变化，适用于服务端渲染静态页面。即使匹配到了`<Redirect>`，也不会修改路由，而是记录到`context`中。

### `<Switch>`

渲染唯一路由，渲染与`location`相匹配的第一个`<Route>`或`<Redirect>`子元素。

`<Route>`元素会使用其路径属性进行匹配，而`<Redirect>`元素会使用其from属性进行匹配。

将匹配条件最宽松的`<Route>`放在底部，或者加上`exact`属性要求其严格匹配。


### `<Route>`

单独使用`<Route>`，适用于包含场景，比如侧边栏组件在不同`location`都显示。

`<Route>`可选择三种渲染方法：
- `component: React.Component`：路由会使用`React.createElement`从指定的组件中创建一个新的React元素。这意味着，如果你向组件属性提供内置函数，则将在每个渲染中创建一个新组件。这将导致现有组件的卸载和新组件的安装，而不是仅更新现有组件。使用内置函数进行内联渲染时，应使用`render`或`children`属性。
- `render: func`：内置渲染和包装
- `children: func`：无论路由是否匹配都会进入`children`绑定函数，通过`match`获取匹配信息

三种渲染方法都会接收到三个渲染属性：
- `match`：包含路由与URL的匹配信息，`match`包含的字段：
    ``` js
    params: object // 动态段键值对
    isExact: boolean // 是否完全匹配
    path: string // 当前路由的匹配模式
    url: string // URL匹配的部分
    ```
- `location`：包含当前位置信息，`location`对象引用地址不会发生改变，因此可以在生命周期钩子中使用它来进行变更判断。`location`包含的字段：
    ``` js
    {
        key: 'ac3df4', // not with HashHistory!
        pathname: '/somewhere',
        search: '?some=search-string',
        hash: '#howdy',
        state: {
            [userDefined]: true
        }
    }
    ```
- `history`：依赖于[history库](https://github.com/ReactTraining/history)，该库实现了支持不同存储形式（history API/hash/memory）的浏览记录管理器，提供历史记录操作接口。`history`是可变的对象，因此建议直接从`location`访问当前位置信息。

`<Route>`属性：
- `exact: boolean`：是否需要与`location.pathname`完全匹配
- `strict: boolean`：带有斜杠的路径是否能与`location.pathname`相匹配，`/one`和`/one/`是否同等对待
- `sensitive: boolean`：是否区分大小写

### `<Redirect>`

重定向组件，匹配到`from`部分，重定向到`to`指定的路径。

默认会替换当前的历史记录，如果设置`push=true`，将生成新记录压栈。

### `<Link>`

导航组件。

- `to: string | object | function`
- `replace: boolean`

### `<NavLink>`
与当前URL匹配时，会为渲染的元素添加指定的样式属性。
- `activeClassName: string`，默认为`active`
- `activeStyle: object`，样式表
- `isActive: func`，用于确定链接是否处于活动状态的函数


### `withRouter`

高阶函数，每当渲染时，withRouter都会将更新的match、location和history并传递给包装组件。

`Component.WrappedComponent`：包装的组件
`wrappedComponentRef: func`：该函数将作为`ref prop`传递给包装的组件。


### `useHistory`

访问可用于导航的history实例。

### `useLocation`

返回代表当前位置信息的`location`对象

### `useParams`

访问当前`<Route>`的`match.params`

### `useRouteMatch`

快速使用`<Route>`的URL匹配功能，返回`match`信息。

``` js
import { useRouteMatch } from "react-router-dom";

function BlogPost() {
  let match = useRouteMatch({path: "/blog/:slug", exact: true});

  // Do whatever you want with the match...
  return <div />;
}
```

直接调用`useRouteMatch`获取当前最近Route的匹配信息。
``` js
const {url, params, match} = useRouteMatch();
```

### 和Redux联合使用

> Redux users: The react-router-redux package is now deprecated. See Redux Integration for a better approach.


### 实例分析

**[URL Parameters](https://reactrouter.com/web/example/url-params)**

``` js
<Switch>
    <Route path="/:id" children={<Child />} />
</Switch>


function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}
```

为何函数组件Child中无法接收到`match/location/history`？

`<Router> children`接收一个函数没错，`<Child />`实质是返回`React.createElement(Child, null)`；因此相当于`<Route children={React.createElement(Child, null)}>`。因此Child中无法接收到`Route`属性。

**[Sidebar](https://reactrouter.com/web/example/sidebar)**

个人在这种场景下会选择将路由部分抽至顶层，布局部分独立组件Layout，sidebar和main作为props传入Layout。

**[Route Config](https://reactrouter.com/web/example/route-config)**

或许可以把SubComponent中路由定义的部分抽取到RouteWithSubRoutes中，让路由层完成递归，完全封装。


### 总结

React Router v4的设计核心还是把路由和组件平等看待，也由此可以动态实现路由。在应用中，也就会出现路由混夹在组件之中的效果。和传统的静态路由管理思维是两个方向的考量。在静态路由管理中，倾向于将路由统一抽离至顶层管理。而这也是我目前习惯的，果然静态路由的设计思维还是很难改变啊。