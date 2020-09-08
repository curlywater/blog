---
title: React知识体系
permalink: /f2e/react/react-document
---

# React 知识体系

构建 React 知识体系：精简 React 要点，深入 React 原理。

## 什么是 React

React 是一个 JavaScript 库，用于构建用户界面（User Interface，简称 UI）。UI 包括人机交互、操作逻辑和视图展现。

在无依赖的原生环境里前端 UI 的实现过程是这样的：前端开发者通过 HTML 描述初始视图，通过对 DOM 节点绑定监听事件建立人机交互，监听事件被触发时执行操作逻辑，通过 DOM 操作改变视图反馈逻辑处理结果。

问题在于上述过程中，监听+DOM 操作往往是重复性代码，而状态（数据）和视图（UI）之间的联系需要通过人为操作达成，代码整体是松散的状态。

UI 的实质是：输入导致状态改变，根据状态反馈输出，如果能直接体现输入、状态、输出三者的联系，免除掉中间的人工成本就好了。

React 解决了这个问题。举个实例，实现一个点击按钮计数加一的 UI。

原生代码的实现：

```html
<div id="app">
  <button id="btn">add</button>
  <p id="output"></p>
</div>
```

```js
window.onload = function() {
  let count = 0;
  const btnElement = document.getElementById("btn");
  const outputElement = document.getElementById("output");
  const updateOutput = () => {
    outputElement.innerHTML = `${count}`;
  };
  updateOutput();
  btnElement.addEventListener("click", () => {
    count++;
    updateOutput();
  });
};
```

缺点在于：

1. 代码里详细描述每一个步骤，或许一不小心就忘了一步，譬如写初始化显示。

2. 视图和逻辑是分离的，需要维护两份文件统一，同时还存在无法复用的问题。

React 结合 JSX 的实现：

```js
class Count extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.addCount = this.addCount.bind(this);
  }
  addCount() {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.addCount}>add</button>
        <p>{this.state.count}</p>
      </div>
    );
  }
}

ReactDOM.render(<Count />, document.getElementById("app"));
```

解决了两大痛点：

1. 通过状态驱动视图改变，无需关心底层细节，着重于逻辑处理。

2. 视图和逻辑封装在一个`Count`组件里好维护可复用。

从开发者的角度来说，React提供了组件化框架，使应用能够被原子化。

从浏览器的角度来说，React的虚拟DOM和批量更新策略，避免浏览器多次频繁的重排重绘。


## JSX

JSX 是一个**JavaScript 的语法扩展**，因此要让 JSX 代码在常规环境中运行，需要通过 Babel 编译。

JSX 用于描述 UI。JSX 可以搭配 React 使用，编译后产生符合 React 语法的代码，譬如按钮计数加一例子中的 JSX 描述转化为 React 语法。

JSX 描述

```jsx
render() {
  return (
    <div>
      <button onClick={this.addCount}>add</button>
      <p>{this.state.count}</p>
    </div>
  )
}
```

React 语法

```js
render() {
  return React.createElement(
    "div",
    null,
    React.createElement("button", { onClick: this.addCount }, "add"),
    React.createElement("p", null, this.state.count)
  )
}
```

由于 JSX 本质是调用 [`React.createElement()`](https://zh-hans.reactjs.org/docs/react-api.html#createelement) 的语法糖，所以在包含 JSX 的模块中必须先引入`React` 模块。

### JSX 使用规范

要点概括

1. JSX 语句本身也是表达式，在 JS 代码中可以作为普通表达式使用
2. JSX 语句中引号包裹字符串，大括号包裹表达式
3. JSX 语言特性沿袭 JS 特性，因此属性名使用驼峰式规范，譬如`className`/`tabIndex`
4. React DOM 在渲染所有输入内容之前，默认会进行转义，因此可以安全地在 JSX 中插入用户输入内容

标签名

1. 内置组件标签名以小写字母开头，如`<div><span>`。自定义组件标签名以大写字母开头

2. 标签名可以使用点表示法`<MyComponents.DatePicker color="blue" />`

3. 标签名不能为表达式

   ```js
   function Story(props) {
     // 错误！JSX 标签名不能为一个表达式。
     return <components[props.storyType] story={props.story} />;
   }

   function Story(props) {
     // 正确！JSX 标签名可以为大写开头的变量。
     const SpecificStory = components[props.storyType];
     return <SpecificStory story={props.story} />;
   }
   ```

属性

1. 如果你没有给属性传值，它默认为 `true`

2. 如果已经有一个 props 对象，可以使用扩展运算符传递整个属性对象

   ```js
   <Welcome {...props} />
   ```

## 元素

使用 React 之后，开发者无需关心底层细节，更新 DOM 的部分由 ReactDOM 来负责。

React 模块负责 React 特性接口，ReactDOM 模块负责实现特性并将元素状态同步到DOM上。

```js
ReactDOM.render(element, document.getElementById("root"));
```

**React 元素是不可变对象**

> React 元素是[不可变对象](https://en.wikipedia.org/wiki/Immutable_object)。一旦被创建，你就无法更改它的子元素或者属性。一个元素就像电影的单帧：它代表了某个特定时刻的 UI。
>
> 根据我们已有的知识，更新 UI 唯一的方式是创建一个全新的元素，并将其传入 [`ReactDOM.render()`](https://zh-hans.reactjs.org/docs/react-dom.html#render)。

**协调算法**

`render`方法创建出一棵 React 元素组成的树，通过 diff 算法比较前后两棵树的差别判断如何有效地更新 UI。diff 算法简单介绍：

1. 元素类型不同时，重建新树。
2. 元素类型相同时：
   1. 同类型元素，保留 DOM 节点，更新属性，继续对子节点递归。
   2. 同类型组件，保留组件实例，更新实例 props，调用组件重渲染流程。
3. 对子节点递归，同时遍历两个子节点列表，当产生差异时生成一个 mutation，当在列表头插入时所有子节点都需要重新创建。所以加入`key`属性。

React 使用`key`来匹配原有树上的子元素以及最新树上的子元素。组件实例基于它们的 key 来决定是否更新以及复用。`key`属性的使用方式：
   1. 避免将索引值作为`key`使用。索引值会破会元素正确的对应关系，存在的隐患：
      - 有子项删除或插入时，所有实例的props都发生改变，所有组件实例都会进入重渲染流程
      - 在传入的数据实体变更时，组件实例中与props无关的状态不会重置
   2. 修改`key`强制重新创建组件

## 组件

从外部说，组件是一个以`props`为参数返回 React 元素的纯函数（函数不会尝试更改入参，相同的入参始终返回相同的结果）。

从内部说，组件是一个独立封装可复用的 UI 单元。在内部维护状态（state），同时拥有生命周期。

### State

**把`state`视为不可变对象。**

虽然`state`是一个对象，然而通过常规方法修改`state`的属性却无效。必须通过`setState`方法驱动重新渲染、触发生命周期。

**`this.state`的更新有可能是异步的。**

出于性能考虑，React 可能会把多个 `setState()` 调用合并成一个调用。`this.state`不会在`setState`调用后立即更新，在`render`调用时或`shouldComponentUpdate`返回`false`时才更新。

`this.state`的更新并不完全一定是异步的:

- 在组件生命周期中或者 react 事件绑定中，是通过异步更新的，setState 进行批量累积，走一次事务处理。
- 在延时回调函数或者原生事件绑定的回调中，setState 不一定是异步的。


**使用函数式`setState`解决`this.state`依赖问题**。

当更新需要依赖`this.state`时，可能会得到意想不到的结果。

```js
function incrementMultiple() {
  this.setState({ count: this.state.count + 1 });
  this.setState({ count: this.state.count + 1 });
  this.setState({ count: this.state.count + 1 });
}
```

函数式`setState`可以解决这个问题

```js
function increment(state) {
  return { count: state.count + 1 };
}
function incrementMultiple() {
  this.setState(increment);
  this.setState(increment);
  this.setState(increment);
}
```

`increment`函数得到的参数是最新的合并状态，此时`this.state`还没有更新，但是 React 能够把最新的状态合并结果提供给`increment`函数。参数函数的调用是异步的，需要等到`state`合并完成的时机再调用。

### 生命周期

每个组件都包含生命周期方法，在特定阶段执行这些方法。

篇幅略长，单独提出一篇文章[React 组件的生命周期](/f2e/react/react-component-lifecycle)。

### 类组件和函数组件

**函数组件**

输入`props`返回 React 元素的纯函数，非常轻量。

默认无状态，无生命周期接口供开发者调用。但是可以结合 hook 使用，从而拥有状态和生命周期调用接口。

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

`getSnapshotBeforeUpdate`，`componentDidCatch` 以及 `getDerivedStateFromError`：目前还没有这些方法的 Hook 等价写法。还需使用类组件实现。


**类组件**

```js
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

类组件继承自`React.Component`，`React.Component`要求子类必须实现`render`方法。默认带有状态和生命周期钩子。

### 受控组件和非受控组件

**受控组件**

组件被父级传入的 props 控制。常见的表单组件`input`/`textarea`等原生带有输入显示功能，可视为一个子组件。下述代码体现了自定义组件控制`input`输入显示的情况：

```js
<input type="text" value={this.state.value} onChange={this.handleChange} />
```

**非受控组件**

组件的状态由自身 state 决定，不受 props 影响。

```js
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.input.current.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={this.input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

## 事件处理

### this 绑定

由于 JavaScript 执行上下文机制的影响，当事件回调函数是类方法时，存在`this`并非指向实例的情况。解决该情况的三种方法：

1. 在`constructor`中初始化实例方法

   ```js
   class Welcome extends React.Component {
     constructor(props) {
       super(props);
       this.handleClick = this.handleClick.bind(this);
     }
   }
   ```

2. 实例方法

   ```js
   class Welcome extends React.Component {
     handleClick = () => {};
   }
   ```

3. 内联箭头函数

   ```js
   class Welcome extends React.Component {
     render() {
       return <button onClick={(e) => this.setState({ text: "Bye" })}></button>;
     }
   }
   ```

   在每次渲染时，传给子组件的 props 都是新定义的函数，将会导致子组件重渲染。

### 合成事件

合成实例是原生事件的跨浏览器包装器。兼容所有浏览器，并且提供和原生事件相同的接口。

如果因为某些原因，当你需要使用浏览器的底层事件时，只需要使用 `nativeEvent` 属性来获取即可

React 在旧浏览器中重用了不同事件的事件对象，以提高性能，并将所有事件字段在它们之前设置为 null。
在 React 16 及更早版本中，使用者必须调用 e.persist() 才能正确的使用该事件，或者正确读取需要的属性。
在 React 17 中，此代码可以按照预期效果执行。旧的事件池优化操作已被完成删除，因此，使用者可以在需要时读取事件字段。


## Context

Context 设计目的是为了共享那些对于一个组件树而言是“全局”的数据。Provider 及其内部 consumer 组件都不受制于 shouldComponentUpdate 函数，因此当 consumer 组件在其祖先组件退出更新的情况下也能更新。

根据上述两条特征，Context 适用场景需要满足的条件：
1. 在组件树中很多不同层级的组件需要访问同样的一批状态，
2. 该状态不是频繁改变的

如果只是某个深度层级的子组件需要依赖数据，为了避免层层传递，那么使用props传递子组件或者使用render props会是更好的选择。


使用和`Object.is`相同的算法判断新旧值变化。

只有当组件所处的树中没有匹配到 Provider 时，`React.createContext` 的 defaultValue 参数才会生效。

## Refs

获取组件实例或DOM元素。

- 当`ref`用于HTML 元素时，`ref`接收DOM元素作为其`current`属性
- 当`ref`用于类组件时，`ref`接收组件的挂载实例作为`current`属性
- 因为函数组件没有实例，因此无法在函数组件上直接使用`ref`

### 使用方法
- `React.createRef()/useRef(null)`，React 会在组件挂载时给 current 属性传入 DOM 元素，并在组件卸载时传入 null 值。ref 会在 componentDidMount 或 componentDidUpdate 生命周期钩子触发前更新。
- `回调函数`，React 在组件挂载时，会调用 ref 回调函数并传入 DOM 元素，当卸载时调用它并传入 null。在 componentDidMount 或 componentDidUpdate 触发前，React 会保证 refs 一定是最新的。

### refs 转发

用 React.forwardRef 来获取传递给它的 ref，然后转发到它的子组件或子HTML元素。

``` js
const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

// 你可以直接获取 DOM button 的 ref：
const ref = React.createRef();
<FancyButton ref={ref}>Click me!</FancyButton>;
```

高阶组件转发refs，其实就是在中间加一层，通过props把ref传到被包裹函数上。


## 复用组件逻辑

### `render props`

`render props`是一种基于React特性组合而成的设计模式。

定义一个prop，这个prop是一个返回React元素的函数，在逻辑复用组件中调用该函数进行渲染。

``` js

class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>

        {/*
          使用 `render`prop 动态决定要渲染的内容，
          而不是给出一个 <Mouse> 渲染结果的静态表示
        */}
        {this.props.render(this.state)}
      </div>
    );
  }
}

class MouseTracker extends React.Component {
  // 定义为实例方法，`this.renderTheCat`始终
  // 当我们在渲染中使用它时，它指的是相同的函数
  renderTheCat(mouse) {
    return <Cat mouse={mouse} />;
  }

  render() {
    return (
      <div>
        <h1>Move the mouse around!</h1>
        <Mouse render={this.renderTheCat} />
      </div>
    );
  }
}
```

### 高阶组件

高阶组件并非React的特性，而是基于React特性组合而成的设计模式。

``` js
const EnhancedComponent = higherOrderComponent(WrappedComponent);
```

传入一个组件，返回一个新的组件。

在高阶组件中封装复用逻辑，以`props`为接口和被包裹组件交互，在高阶组件层注入生命周期处理。

使用`compose`组合高阶组件

``` js
const enhance = compose(
  // 这些都是单参数的 HOC
  withRouter,
  connect(commentSelector)
)
const EnhancedComponent = enhance(WrappedComponent)
```

记得拷贝被包裹组件的静态方法

``` js
import hoistNonReactStatic from 'hoist-non-react-statics';
function enhance(WrappedComponent) {
  class Enhance extends React.Component {/*...*/}
  hoistNonReactStatic(Enhance, WrappedComponent);
  return Enhance;
}
```

### Hook

`render props`和HOC存在的问题在于：
1. 需要组件间同时配合，复用逻辑的使用并不直观、便捷。
2. 产生嵌套地狱，造成组件树越来越庞大。

在React 16.8版本引入了hook，在函数组件上应用的新特性。

React Hook的出现为了解决三个问题：
1. 逻辑难以复用
2. 组件太过复杂
3. class组件不是很好用

React Hook通过另一种思维解决上述的三个问题，函数化。

组件本身只是一个轻量的函数组件，需要什么通过hook“钩入”就好了，类似于无限扩展的插槽，非常灵活。

[React Hook使用介绍](/f2e/react/react-hook/)

## 错误处理

一个包含`static getDerivedStateFromError()` 或 `componentDidCatch()`生命周期方法的类组件，是一个错误边界。

错误边界可以捕获子组件在渲染时的错误，无法捕获子组件在交互时的错误，比如在事件处理函数中的异常以及在异步回调函数中的异常。

- 错误边界负责处理组件渲染时错误，并进行降级显示
- 事件处理函数或异步回调函数注意做try...catch捕获，或者使用sentry捕获


## 动态加载

```js
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
      </Switch>
    </Suspense>
  </Router>
);
```

`import()`是ES Module规范的动态加载语法，Webpack在处理`import()`时会为模块单独生成bundle。

`React.lazy`接受一个返回Promise的函数作为参数，返回一个懒加载的外部模块。

`Suspense`组件，等待懒加载子组件加载，并可以指定显示一个加载界面。


## 扩展阅读

[React Fiber 是什么](https://zhuanlan.zhihu.com/p/26027085)

React 在加载和更新组件树时，需要做的工作包括：调用生命周期方法、计算和对比 Virtual DOM、更新 DOM 树。在无 Fiber 之前，这整个过程是同步进行的，如果组件树非常庞大复杂，浏览器唯一的主线程都在专注处理 React 的更新工作，无力顾及 I/O。

React 团队对核心算法做了一次重写，引入 Fiber，一次更新过程会分成多个分片完成。React Fiber 一个更新过程被分为两个阶段(Phase)：第一个阶段 Reconciliation Phase 和第二阶段 Commit Phase。第一个阶段进行更新分析，可以被打断，第二个阶段一次性更新 DOM，不能被打断。第一个阶段如果在执行过程中被打断调度到优先级更高的更新过程中，之前做的工作完全作废，等待机会重头再来。

这意味第一个阶段的工作有可能会重复进行，对开发者的影响在于生命周期的使用。第一个阶段的生命周期包括`componentWillMount`/`componentWillUpdate`/`componentWillReceiveProps`。

[你可能不需要使用派生 state](https://zh-hans.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-uncontrolled-component-with-a-key)

直接复制 prop 到 state 是一个非常糟糕的想法，首先父组件重渲染时就会触发`componentWillReceiveProps`，会将组件当前状态覆盖。如果在`sholudComponentUpdate`中做阻止，需要考虑的情况会越来越复杂，`sholudComponentUpdate`本身就是为了优化性能而存在的，这种方法非常的`hack`；可以考虑在`componentWillReceiveProps`中加入新旧`props`的判断再做`state`更新，这么做的一个问题在于临时状态和外部状态的优先级问题、以及在组件对应实体变化时`state`无法被驱动更新。总而言之，派生 state 由于多数据来源，在使用上会有一些别扭的地方，情况复杂后容易出现问题。

建议：

1. 受控组件，由父组件通过 props 控制

2. 非受控组件，父组件提供一个`defaultValue`初始化用。在外界条件改变需要重渲染时：

   1. 使用`key`重新创建组件
   2. 观察特殊属性的变化，譬如`userId`
   3. 使用实例方法重置非受控组件

3. 附加优化，使用 memoization：仅在输入变化时，重新计算 `render` 需要使用的值

[异步渲染之更新](https://zh-hans.reactjs.org/blog/2018/03/27/update-on-async-rendering.html)

引入 Fiber 后，React 具备的异步渲染能力。在异步渲染机制下，`componentWillMount`/`componentWillUpdate`/`componentWillReceiveProps`可能被多次调用。而这三个生命周期的定义不够明确，容易出现开发者误用的情况。这篇文章介绍了常见的误用情况，以及在新生命周期系统中正确的迁移方式。
