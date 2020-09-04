---
title: Reach Router
permalink: /f2e/react/reach-router
---

# Reach Router

## Reach Router v2

> Reach Router and it’s sibling project React Router are merging as React Router v6. In other words, Reach Router v2 and React Router v6 are the same. There is more information on the maintainers website.

根据Reach Router官网的信息，Reach Router 未来将和React Router合并，计划在React Router v6版本实现。


## 设计特点

### 依赖组件嵌套关系

Reach Router最大的特点在于，依赖组件嵌套关系组织路由。这样的设计便利之处在于：
- 把路由和组件融合在一起，不需要通过`<Route>`组件设定路径和组件的对应关系
- 路由设定和导航时直接使用相对地址，Reach Router自行组装成绝对路径

``` js
render(
  <div>
    <Logo />
    <Router>
      <Home path="/">
        <About path="about" />
        <Support path="support" />
        <Dash path="dashboard">
          <DashHome path="/" />
          <Invoices path="invoices" />
          <Team path="team" />
        </Dash>
      </Home>
    </Router>
  </div>,
  document.getElementById("root")
);
```

上面的代码，路径`/dashboard/invoices`最终的渲染结构是`<Home> -> <Dash> -> <Invoices>`

``` js
const Dash = ({ children }) => (
  <div>
    <h1>Dashboard</h1>
    <nav>
      <Link to="invoices">Invoices</Link>{" "}
      <Link to="team">Team</Link>
    </nav>
    <hr />
    {children}
  </div>
)

render(
  <Router>
    <Home path="/" />
    <Dash path="dashboard">
      <Invoices path="invoices" />
      <Team path="team" />
    </Dash>
  </Router>
)
```

上面这段代码，点击Invoices超链接，跳转至`/dashborad/invoices`


### 智能计算优先级

Reach Router的另一个特点是智能计算模糊路径的匹配优先级，不需要人为设置优先级（设置`exact`或调整路由顺序）。

智能计算的实现原理其实类似于CSS选择器优先级，计算路径的权重，然后决定有限顺序。权重规则：
- 一个字段：4分
- 是静态字段：再加3分
- 是动态字段：再加2分
- 是根字段：再加1分
- 是通配符： 减1分

比如，路径`/groups/:groupId/users/*`，得分是19分，包含3个字段，两个静态字段，一个动态字段，还有一个通配符。4 * 3 + 2 * 3 + 2 - 1 = 19。

更多具体例子可见[Path Ranking](https://reach.tech/router/ranking)。

### 设计优势

Reach Router这样的设计有助于大项目拆分，路由不再受限于顶层配置，而是可以分块独立。
1. 团队可以把大项目分成小功能分别开发，开发完成后直接将项目组装合并即可
2. 动态加载模块：借助Loadable或`import()`，当匹配到路径时再动态加载对应模块
3. 在测试时也可以独立进行，无需考虑整体路由牵制
4. 组件可灵活重用到不同路由场景


## API

### `<Router>`
路由组件，Reach Router只支持history API和Memory两种历史记录管理方式，对应浏览器环境和非浏览器环境。选择哪种方式由Reach Router判断。


`<Router>`的属性：
- `children: elements`：所有子孙组件都是Route Component
- `basepath: string`：基本路径
- `primary: bool`：在多路由情况下，是否作为主路由存在。

特殊应用场景：
- 一个路径在不同区域使用，渲染两个Router。[示例代码](https://reach.tech/router/example/multiple-routers)
- Router嵌套，外层路由尾随通配符，表示在其子组件中额外细分路由。[示例代码](https://reach.tech/router/example/nested-routes)


### `Route Component`

可用属性：
  - `path="/"`，该路径下的Index Path，索引页
  - `default`，Not Found

接收到的props：
``` ts
{
  [param: string]: string,
  uri: string,
  navigate: func,
  location: object
}
```

### location

location包含当前位置信息，以下面这段数据演示`location`的内容

``` js
{
  href: "https://lyzwj8w0qz.csb.app/"
  ancestorOrigins: DOMStringList
  origin: "https://lyzwj8w0qz.csb.app"
  protocol: "https:"
  host: "lyzwj8w0qz.csb.app"
  hostname: "lyzwj8w0qz.csb.app"
  port: ""
  pathname: "/"
  search: ""
  hash: ""
  assign: function assign() {}
  reload: function reload() {}
  toString: function toString() {}
  replace: function replace() {}
  state: {
    time: Fri Sep 04 2020 16:27:22 GMT+0800 (China Standard Time)
    key: "1599208050780"
  }
  key: "1599208050780"
}
```

### `<Link>`

导航组件

`<Link>`的属性：
- `to: string`：支持相对和绝对路径
- `replace: bool`：是否替代历史记录栈中的当前记录
- `ref: func`：React >= 16.4
- `innerRef: fun`：React < 16.4
- `getProps: func(obj)`: 根据obj信息返回一些props
    - `isCurrent: bool`：路径是否完全匹配
    - `isPartiallyCurrent: bool`：路径是否部分匹配
    - `href: string`：绝对路径
    - `location: obj`：当前的位置对象
- `state: object`：需要传输的一些信息，接收组件需要通过`location.state`获取信息

`getProps`示例代码
``` js
const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "active" } : {}
}

const ExactNavLink = props => (
  <Link getProps={isActive} {...props} />
)
```

`state`示例代码

``` js
const NewsFeed = () => (
  <div>
    <Link
      to="photos/123"
      state={{ fromFeed: true }}
    />
  </div>
)

const Photo = ({ location, photoId }) => {
  if (location.state.fromFeed) {
    return <FromFeedPhoto id={photoId} />
  } else {
    return <Photo id={photoId} />
  }
}
```
  

### `Redirect`

``` js
<Router>
  <Dash path="dashboard">
    <Redirect from="profile/:userId" to="/" />
  </Dash>
</Router>
```

匹配到用户页直接重定向到首页。

### `Match`

无论是否匹配都会进入回调，回调props接收`match`

``` ts
match: null | {
	[param: string]: string,
	uri: string // uri中匹配的部分
	path: string
	location: object
}
```

``` js
import { Match } from "@reach/router"

const App = () => (
  <Match path="/hot/:item">
    {props =>
      props.match ? (
        <div>Hot {props.match.item}</div>
      ) : (
        <div>Uncool</div>
      )
    }
  </Match>
)
```

### navigate

- `const navigate = useNavigate()`/`import { navigate } from "@reach/router"`，需要传入绝对路径
- `props.navigate`，使用相对路径，会根据嵌套路径自动生成绝对路径

``` js
navigate: func(to: string | number, {
  state: object,
  replace: boolean
})

navigate("/");
navigate(-1);
navigate("user/1", {
  state: {
    username: "A"
  }
})
```



### Hooks

- `useNavigate`：获取全局导航函数
- `useParams`：获取当前路由的`params`
- `useMatch`：使用当前`location`匹配指定`path`
- `useLocation`：获取`location`