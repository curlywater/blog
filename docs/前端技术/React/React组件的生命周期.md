---
title: React组件的生命周期
permalink: /f2e/react/react-component-lifecycle
---

# React 组件的生命周期

## 生命周期执行顺序

[生命周期图谱](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)会更加直观

**Mount**

- `constructor`
- `getDerivedStateFromProps`
- `render`
- `componentDidMount`

**Update State/Props**

- `getDerivedStateFromProps`
- `shouldComponentUpdate`
- `render`
- `getSnapshotBeforeUpdate`
- `componentDidUpdate`

**Unmount**

- `componentWillUnmount`

## 生命周期方法介绍

### constructor

时机：实例化组件时调用

作用：初始化`this.state`，为事件处理函数绑定实例，初始化实例属性

```js
import React from "react";

export default class Count extends React.Component {
  constructor(props) {
    super(props);
    this.timer = null;
    this.state = {
      count: 0,
    };
    this.handleCountTimer = this.handleCountTimer.bind(this);
  }
}
```

::: details 为何需要调用`super(props)`？

这其实 JavaScript 决定的，在子类重写`constructor`时，通过`super()`调用父类的`constructor`，完成父类上属性初始化。

`super()`必须在使用`this`之前调用。通过`new`实例化一个对象时会创建一个空对象将该对象赋值给`this`。但是派生的`constructor`执行时不会进行这一步操作，它期望父类的 `constructor` 来完成这项工作。因此必须在使用`this`之前调用父类`constructor`。

:::

::: details 为何不在`constructor`中使用`setState`？

在`constructor`中组件并未完成初始化，此时使用`setState`不会触发重渲染。同理，在`constructor`也不适合引入副作用或订阅。

:::

### getDerivedStateFromProps

```js
static getDerivedStateFromProps(props, state)
```

时机：进入渲染流程之前。16.3 版本只在`constructor`后和父组件重渲染时执行（与 16.3 版本之前的`componentWillReceiveProps`对应），16.4 版本以上更改为任意会触发渲染流程的时机（`constructor`后、父组件重渲染、`state`改变、`forceUpdate`）。

功能：为派生状态服务

> `getDerivedStateFromProps` 的存在只有一个目的：让组件在 **props 变化**时更新 state

```js
class ExampleComponent extends React.Component {
  // 在构造函数中初始化 state，
  // 或者使用属性初始化器。
  state = { isScrollingDown: false, lastRow: null };
  static getDerivedStateFromProps(props, state) {
    if (props.currentRow !== state.lastRow) {
      return {
        isScrollingDown: props.currentRow > state.lastRow,
        lastRow: props.currentRow,
      };
    }
    // 返回 null 表示无需更新 state。
    return null;
  }
}
```

::: details 为何需要谨慎使用`getDerivedStateFromProps`？

这个生命周期是静态方法，无法引用到实例对象。同时要保持它是纯函数，不要产生副作用。

使用派生状态本身并不是一个很好的选择，很多情况下派生状态可以使用其他方案代替。

:::

### shouldComponentUpdate

```js
shouldComponentUpdate(nextProps, nextState);
```

时机：非`forceUpdate`的重渲染流程中，可以阻止后续渲染流程。

作用：用于优化性能。

React 的重渲染触发机制；

1. `this.setState`更新 state，进行浅合并，返回新的`state`对象。即使是合并后`state`对象内部数据未改变也会触发重渲染流程。
2. `shouldComponentUpdate`可以控制重渲染流程进行与否，默认返回`true`（不做任何阻止）。可以使用`shouldComponentUpdate`做一些渲染前优化，譬如`React.PureComponent`对`props`/`state`进行浅比较重写`shouldComponentUpdate`，达到数据无基本变化不进行重渲染的效果。需要进行深度比较时，如果进行传统深比较或者深拷贝，性能消耗大于直接做重渲染的成本。
3. `Immutable`和`immer`之类的库提供不可变数据结构

### render

render 是一个纯函数，根据现有数据返回以下类型：

- **React** 元素。通常通过 JSX 创建。无论是 `<div />` 还是 `<MyComponent />` 均为 React 元素。
- **数组或 fragments**。 使得 render 方法可以返回多个元素。
- **Portals**。可以渲染子节点到不同的 DOM 子树中。
- **字符串或数值类型**。它们在 DOM 中会被渲染为文本节点
- **布尔类型或 `null`**。什么都不渲染。（主要用于支持返回 `test && <Child />` 的模式，其中 test 为布尔类型。)

### getSnapshotBeforeUpdate

时机：在最近一次渲染输出（提交到 DOM 节点）之前调用

作用：使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）。此生命周期的任何返回值将作为参数传递给 `componentDidUpdate()`。

```js
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
    return <div ref={this.listRef}>{/* ...contents... */}</div>;
  }
}
```

### componentDidMount

时机：组件挂载后调用

作用：实例化请求，注册订阅，渲染需要依赖 DOM 信息的部分

### componentDidUpdate

```js
componentDidUpdate(prevProps, prevState, snapshot);
```

时机：组件更新后调用

作用：DOM 操作，更新后请求。注意避免直接使用`setState`，有可能会导致死循环

### componentWillUnmount

时机：组件实例卸载及销毁之前直接调用

作用：执行必要的清理操作，例如，清除 timer，取消网络请求或清除在 `componentDidMount()` 中创建的订阅等

## 旧版生命周期

在 16.3 版本之前，React 使用一套生命周期，现已“过时”

**Mount**

- `constructor`
- `componentWillMount`
- `render`
- `componentDidMount`

**Update State**（forceUpdate 直接进入 componentWillUpdate）

- `shouldComponentUpdate`

- `componentWillUpdate`

- `render`

- `componentDidUpdate`

**Update Props**

- `componentWillReceiveProps`
- `shouldComponentUpdate`
- `componentWillUpdate`
- `render`
- `componentDidUpdate`

**Unmount**

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
