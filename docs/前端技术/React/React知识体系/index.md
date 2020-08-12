---
title: React知识体系
---

# React 知识体系

构建 React 知识体系：精简 React 要点，深入 React 原理。

## 什么是 React

React 是一个 JavaScript 库，用于构建用户界面（User Interface，简称 UI）。UI 包括人机交互、操作逻辑和视图展现。

在无依赖的原生环境里前端 UI 的实现过程是这样的：前端开发者通过 HTML 描述初始视图，通过对 DOM 节点绑定监听事件建立人机交互，监听事件被触发时执行操作逻辑，通过 DOM 操作改变视图反馈逻辑处理结果。

问题在于上述过程中，监听+DOM 操作往往是重复性代码，而状态（数据）和视图（UI）之间的联系需要通过人为操作达成，代码整体是松散的状态。

UI 的实质是：输入 -> 状态改变 -> 输出改变，如果能直接体现输入、状态、输出三者的联系，免除掉中间的人工成本就好了。

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

```JavaScript
class Count extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
    this.addCount = this.addCount.bind(this)
  }
  addCount() {
    this.setState(state => ({
      count: state.count + 1,
    }))
  }
  render() {
    return (
      <div>
        <button onClick={this.addCount}>add</button>
        <p>{this.state.count}</p>
      </div>
    )
  }
}

ReactDOM.render(<Count />, document.getElementById("app"))

```

解决了两大痛点：

1. 通过状态驱动视图改变，无需关心底层细节，着重于逻辑处理。

2. 视图和逻辑封装在一个`Count`组件里好维护可复用。

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

```JavaScript
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

   ```react
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

   ```JavaScript
   <Welcome {...props} />
   ```

## 元素渲染

使用 React 之后，开发者无需关心底层细节，更新 DOM 的部分由 ReactDOM 来负责。

React 模块负责 React 核心部分，ReactDOM 模块负责将 React 元素的状态同步到 DOM 上。

```JavaScript
ReactDOM.render(element, document.getElementById('root'));
```

**React 元素是不可变对象**

> React 元素是[不可变对象](https://en.wikipedia.org/wiki/Immutable_object)。一旦被创建，你就无法更改它的子元素或者属性。一个元素就像电影的单帧：它代表了某个特定时刻的 UI。
>
> 根据我们已有的知识，更新 UI 唯一的方式是创建一个全新的元素，并将其传入 [`ReactDOM.render()`](https://zh-hans.reactjs.org/docs/react-dom.html#render)。

**虚拟 DOM 和 Diff 算法**

`render`方法创建出一棵 React 元素组成的树，通过 diff 算法比较前后两棵树的差别判断如何有效地更新 UI。diff 算法简单介绍：

1. 元素类型不同时，重建新树。
2. 元素类型相同时：
   1. 同类型元素，保留 DOM 节点，更新属性，继续对子节点递归。
   2. 同类型组件，保留组件实例，更新实例 props，调用组件重渲染流程。
3. 对子节点递归，同时遍历两个子节点列表，当产生差异时生成一个 mutation，当在列表头插入时所有子节点都需要重新创建。所以加入`key`属性，React 使用`key`来匹配原有树上的子元素以及最新树上的子元素。组件实例基于它们的 key 来决定是否更新以及复用。`key`属性的使用方式：
   1. 避免将索引值作为`key`使用。索引值会破会元素正确的对应关系，相当于一个未使用`key`的列表
   2. 修改`key`强制重新创建组件

## 组件

从外部说，组件是一个以`props`为参数返回 React 元素的纯函数（函数不会尝试更改入参，相同的入参始终返回相同的结果）。

从内部说，组件是一个独立封装可复用的 UI 单元。在内部维护状态（state），同时拥有生命周期。

### State

**把`state`视为不可变对象。**

虽然`state`是一个对象，然而通过常规方法修改`state`的属性却无效。必须通过`setState`方法驱动重新渲染、触发生命周期。

**`this.state`的更新有可能是异步的。**

出于性能考虑，React 可能会把多个 `setState()` 调用合并成一个调用。`this.state`不会在`setState`调用后立即更新，在`render`调用时或`shouldComponentUpdate`返回`false`时才更新。`this.state`的更新并不完全一定是异步的:

- 在组件生命周期中或者 react 事件绑定中，是通过异步更新的，setState 进行批量累积，走一次事务处理。
- 在延时回调函数或者原生事件绑定的回调中，setState 不一定是异步的。

更详细的解析可阅读[React setState 源码分析]()

**使用函数式`setState`解决`this.state`依赖问题**。

当更新需要依赖`this.state`时，可能会得到意想不到的结果。

```JavaScript
function incrementMultiple() {
  this.setState({count: this.state.count + 1});
  this.setState({count: this.state.count + 1});
  this.setState({count: this.state.count + 1});
}
```

函数式`setState`可以解决这个问题

```JavaScript
function increment(state) {
  return {count: state.count + 1};
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

#### 生命周期执行顺序

[生命周期图谱](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)会更加直观

Mount

- `constructor`
- `getDerivedStateFromProps`
- `render`
- `componentDidMount`

Update State/Props（forceUpdate 直接进入 render）

- `getDerivedStateFromProps`
- `shouldComponentUpdate`
- `render`
- `getSnapshotBeforeUpdate`
- `componentDidUpdate`

Unmount

- `componentWillUnmount`

#### 生命周期方法介绍

##### constructor

###### 时机

实例化组件时调用

###### 功用

初始化`this.state`，为事件处理函数绑定实例，初始化实例属性

```JavaScript
import React from "react";

export default class Count extends React.Component {
	constructor (props) {
    super(props);
    this.timer = null;
    this.state = {
      count: 0
    };
    this.handleCountTimer = this.handleCountTimer.bind(this);
  }
}
```

###### FAQ

**为何需要调用`super(props)`？**

这其实 JavaScript 决定的，在子类重写`constructor`时，通过`super()`调用父类的`constructor`，完成父类上属性初始化。

`super()`必须在使用`this`之前调用。通过`new`实例化一个对象时会创建一个空对象将该对象赋值给`this`。但是派生的`constructor`执行时不会进行这一步操作，它期望父类的 `constructor` 来完成这项工作。因此必须在使用`this`之前调用父类`constructor`。

**在`constructor`中使用`setState`？**

在`constructor`中组件并未完成初始化，此时使用`setState`不会触发重渲染。同理，在`constructor`也不适合引入副作用或订阅。

##### getDerivedStateFromProps

```JavaScript
static getDerivedStateFromProps(props, state)
```

###### 时机

进入渲染流程之前。16.3 版本只在`constructor`后和父组件重渲染时执行（与 16.3 版本之前的`componentWillReceiveProps`对应），16.4 版本以上更改为任意会触发渲染流程的时机（`constructor`后、父组件重渲染、`state`改变、`forceUpdate`）。

###### 功用

为派生状态服务

> `getDerivedStateFromProps` 的存在只有一个目的：让组件在 **props 变化**时更新 state

```react
class ExampleComponent extends React.Component {
  // 在构造函数中初始化 state，
  // 或者使用属性初始化器。
  state = { isScrollingDown: false, lastRow: null }
  static getDerivedStateFromProps(props, state) {
    if (props.currentRow !== state.lastRow) {
      return {
        isScrollingDown: props.currentRow > state.lastRow,
        lastRow: props.currentRow,
      }
    }
    // 返回 null 表示无需更新 state。
    return null
  }
}
```

###### FAQ

**为何需要谨慎使用`getDerivedStateFromProps`**？

这个生命周期是静态方法，无法引用到实例对象。同时要保持它是纯函数，不要产生副作用。

使用派生状态本身并不是一个很好的选择，很多情况下派生状态可以使用其他方案代替。

##### shouldComponentUpdate

```react
shouldComponentUpdate(nextProps, nextState)
```

###### 时机

非`forceUpdate`的重渲染流程中，可以阻止后续渲染流程。

###### 功用

用于优化性能。

React 的重渲染触发机制；

1. `this.setState`更新 state，进行浅合并，返回新的`state`对象。即使是合并后`state`对象内部数据未改变也会触发重渲染流程。
2. `shouldComponentUpdate`可以控制重渲染流程进行与否，默认返回`true`（不做任何阻止）。可以使用`shouldComponentUpdate`做一些渲染前优化，譬如`React.PureComponent`对`props`/`state`进行浅比较重写`shouldComponentUpdate`，达到数据无基本变化不进行重渲染的效果。需要进行深度比较时，如果进行传统深比较或者深拷贝，性能消耗大于直接做重渲染的成本。
3. `Immutable`和`immer`之类的库提供不可变数据结构

##### render

render 是一个纯函数，根据现有数据返回以下类型：

- **React 元素**。通常通过 JSX 创建。无论是 `<div />` 还是 `<MyComponent />` 均为 React 元素。
- **数组或 fragments**。 使得 render 方法可以返回多个元素。
- **Portals**。可以渲染子节点到不同的 DOM 子树中。
- **字符串或数值类型**。它们在 DOM 中会被渲染为文本节点
- **布尔类型或 `null`**。什么都不渲染。（主要用于支持返回 `test && <Child />` 的模式，其中 test 为布尔类型。)

##### getSnapshotBeforeUpdate

###### 时机

在最近一次渲染输出（提交到 DOM 节点）之前调用

###### 功用

> 使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）。此生命周期的任何返回值将作为参数传递给 `componentDidUpdate()`。

```JavaScript
class ScrollingList extends React.Component {
  constructor(props) {
    super(props);
    this.listRef = React.createRef();
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // 我们是否在 list 中添加新的 items ？
    // 捕获滚动​​位置以便我们稍后调整滚动位置。
    if (prevProps.list.length < this.props.list.length) {
      const list = this.listRef.current;
      return list.scrollHeight - list.scrollTop;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // 如果我们 snapshot 有值，说明我们刚刚添加了新的 items，
    // 调整滚动位置使得这些新 items 不会将旧的 items 推出视图。
    //（这里的 snapshot 是 getSnapshotBeforeUpdate 的返回值）
    if (snapshot !== null) {
      const list = this.listRef.current;
      list.scrollTop = list.scrollHeight - snapshot;
    }
  }

  render() {
    return (
      <div ref={this.listRef}>{/* ...contents... */}</div>
    );
  }
}
```

##### componentDidMount

###### 时机

组件挂载后调用

###### 功用

实例化请求，注册订阅，渲染需要依赖 DOM 信息的部分

##### componentDidUpdate

```JavaScript
componentDidUpdate(prevProps, prevState, snapshot)
```

###### 时机

组件更新后调用

###### 功用

DOM 操作，更新后请求。

注意避免直接使用`setState`，有可能会导致死循环

##### componentWillUnmount

###### 时机

组件实例卸载及销毁之前直接调用

###### 功用

执行必要的清理操作，例如，清除 timer，取消网络请求或清除在 `componentDidMount()` 中创建的订阅等

#### 旧版生命周期

在 16.3 版本之前，React 使用一套生命周期，现已“过时”

Mount

- `constructor`
- `componentWillMount`
- `render`
- `componentDidMount`

Update State（forceUpdate 直接进入 componentWillUpdate）

- `shouldComponentUpdate`

- `componentWillUpdate`

- `render`

- `componentDidUpdate`

Update Props

- `componentWillReceiveProps`
- `shouldComponentUpdate`
- `componentWillUpdate`
- `render`
- `componentDidUpdate`

Unmount

- `componentWillUnmount`

> 在 React Fiber 中，一次更新过程会分成多个分片完成，所以完全有可能一个更新任务还没有完成，就被另一个更高优先级的更新过程打断，这时候，优先级高的更新任务会优先处理完，而低优先级更新任务所做的工作则会**完全作废，然后等待机会重头再来**。
>
> 因为一个更新过程可能被打断，所以 React Fiber 一个更新过程被分为两个阶段(Phase)：第一个阶段 Reconciliation Phase 和第二阶段 Commit Phase。
>
> 在第一阶段 Reconciliation Phase，React Fiber 会找出需要更新哪些 DOM，这个阶段是可以被打断的；但是到了第二阶段 Commit Phase，那就一鼓作气把 DOM 更新完，绝不会被打断。
>
> 以 render 函数为界，第一阶段可能会调用下面这些生命周期函数，说是“可能会调用”是因为不同生命周期调用的函数不同。
>
> - componentWillMount
> - componentWillReceiveProps
> - shouldComponentUpdate
> - componentWillUpdate

意味着第一阶段的生命周期可能会被重复调用，而这些生命周期中容易存在开发者误用的情况，譬如加入副作用操作，因此 React 推出新的生命周期更准确地替代它们的应用场景。

过时的生命周期现状：16.3 以上版本同时存在`UNSAFE_`和无前缀的旧生命周期，17.0 版本将彻底清除无前缀的旧生命周期。

过时的生命周期包括：

- UNSAFE_componentWillMount：挂载前调用，`setState`不会触发重渲染，不适合引入副作用或订阅。容易存在误用情况因此弃用。

- UNSAFE_componentWillReceiveProps：props 更新时调用。派生状态容易增加组件复杂性导致 Bug，React 官方并不推荐使用派生状态，`prevProps`增加内存开销并非必须，因此使用`getDerivedStateFromProps`替代。

- UNSAFE_componentWillUpdate：在 Update 渲染前调用，不适合做`setState`导致联级更新，适合在更新前获取 DOM 信息，因此使用`getSnapshotBeforeUpdate`替代。

### 类组件和函数组件

**函数组件**

输入`props`返回 React 元素的纯函数，非常轻量。

默认无状态，无生命周期接口供开发者调用。但是可以结合 hook 使用，从而拥有状态和生命周期调用接口。

```JavaScript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

**类组件**

```JavaScript
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

```JavaScript
<input type="text" value={this.state.value} onChange={this.handleChange} />
```

**非受控组件**

组件的状态由自身 state 决定，不受 props 影响。

```JavaScript
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.input.current.value);
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

   ```JavaScript
   class Welcome extends React.Component {
   	constructor(props) {
       super(props);
       this.handleClick = this.handleClick.bind(this);
     }
   }
   ```

2. 实例方法

   ```JavaScript
   class Welcome extends React.Component {
   	handleClick = () => {}
   }
   ```

3. 内联箭头函数

   ```JavaScript
   class Welcome extends React.Component {
   	render () {
       return <button onClick={e => this.setState({text: "Bye"})}></button>
     }
   }
   ```

   在每次渲染时，传给子组件的 props 都是新定义的函数，将会导致子组件重渲染。

### 合成事件

> `SyntheticEvent` 实例将被传递给你的事件处理函数，它是浏览器的原生事件的跨浏览器包装器。除兼容所有浏览器外，它还拥有和浏览器原生事件相同的接口，包括 `stopPropagation()` 和 `preventDefault()`。
>
> 如果因为某些原因，当你需要使用浏览器的底层事件时，只需要使用 `nativeEvent` 属性来获取即可

### 传递参数

```html
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```

两种方法都会更新 props，导致子组件重渲染。

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
