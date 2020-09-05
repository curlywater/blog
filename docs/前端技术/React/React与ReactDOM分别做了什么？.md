---
title: React与ReactDOM分别做了什么？
permalink: /f2e/react/react-and-react-dom
---

# React与ReactDOM分别做了什么？
一般我们会使用JSX进行开发，而JSX实质上是`React.createElement`的语法糖。一段React代码经过Babel编译之后，最终得到的是`React.createElement`嵌套调用的函数。

``` js
function App () {
	return <>
      	<h1>Heading</h1>
      	<Content text="A" />
      </>
}

ReactDOM.render(<Parent />, document.getElementById("app"));
```

``` js
"use strict";

function App() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Heading"), /*#__PURE__*/React.createElement(Content, {
    text: "A"
  }));
}

ReactDOM.render( /*#__PURE__*/React.createElement(Parent, null), document.getElementById("app"));
```

以这种嵌套结构为基础，得到以一个React元素为根的React元素树结构。再把根React元素交由ReactDOM做渲染。

这是我所知道的，但是太模糊了。我觉得疑惑，在已知的代码里`ReactDOM.render`只被调用了一次。当组件状态发生改变时，React和ReactDOM之间是如何联系的起来的，React交给ReactDOM的是什么？ReactDOM拿到React提供的物料后做了什么？ReactDOM怎么知道需要进行更新？


## React交给ReactDOM的是什么？

在ReactDOM的源码中对`render`的定义

``` js
export function render(
  element: React$Element<any>, 
  container: Container,
  callback: ?Function,
) {
    legacyRenderSubtreeIntoContainer(
        null,
        element,
        container,
        false,
        callback,
    );
}
```

React仓库中各个相关项目使用flow作为类型支持工具，[React仓库中的基础类型定义文件](https://github.com/facebook/flow/blob/master/lib/react.js)


``` js
declare type React$Element<+ElementType: React$ElementType> = {|
  +type: ElementType,
  +props: React$ElementProps<ElementType>,
  +key: React$Key | null,
  +ref: any,
|};
```

从类型定义上来看，React Element是一个包含`type/props/key/ref`属性的对象。

用下面一段代码具象化

``` js
import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Heading />
      <SubHeading className="secondary"/>
    </div>
  );
}

function Heading() {
  return <h1>Hello CodeSandbox</h1>;
}

function SubHeading() {
  return <h2>Start editing to see some magic happen!</h2>;
}

const component = <App />;
console.log(component);
// Output
{
  type: function App() {}
  key: null
  ref: null
  props: {}
  _owner: null
  _store: {}
}
console.log(component.type());
// Output
{
  type: "div"
  key: null
  ref: null
  props: {}
  className: "App"
  children: [
    {
      type: function Heading() {}
      key: null
      ref: null
      props: {}
      _owner: null
      _store: {}
    },
    {
      type: function SubHeading() {}
      key: null
      ref: null
      props: {
        className: "secondary"
      }
      _owner: null
      _store: {}
    }
  ],
  _owner: null
  _store: {}
}

```


## ReactDOM拿到React提供的物料后做了什么？

继续深入`render`，进入`legacyRenderSubtreeIntoContainer`函数。

`legacyRenderSubtreeIntoContainer`中根据`container._reactRootContainer`判断在指定DOM结点下是否已挂载有React应用，如果未曾挂载那么进入初始化流程。

::: details `legacyRenderSubtreeIntoContainer`整体代码（适当简化）
``` js
export type RootType = {
  render(children: ReactNodeList): void,
  unmount(): void,
  _internalRoot: FiberRoot,
  ...
};

export type Container =
  | (Element & {_reactRootContainer?: RootType, ...})
  | (Document & {_reactRootContainer?: RootType, ...});

import {
  updateContainer,
  unbatchedUpdates,
  getPublicRootInstance
} from 'react-reconciler/src/ReactFiberReconciler';

function legacyRenderSubtreeIntoContainer(
  parentComponent: ?React$Component<any, any>,
  children: ReactNodeList,
  container: Container,
  forceHydrate: boolean,
  callback: ?Function,
) {
  // TODO: Without `any` type, Flow says "Property cannot be accessed on any
  // member of intersection type." Whyyyyyy.
  let root: RootType = (container._reactRootContainer: any);
  let fiberRoot;
  if (!root) {
    // Initial mount
    root = container._reactRootContainer = legacyCreateRootFromDOMContainer(
      container,
      forceHydrate,
    );
    fiberRoot = root._internalRoot;
    if (typeof callback === 'function') {
      const originalCallback = callback;
      callback = function() {
        const instance = getPublicRootInstance(fiberRoot);
        originalCallback.call(instance);
      };
    }
    // Initial mount should not be batched.
    unbatchedUpdates(() => {
      updateContainer(children, fiberRoot, parentComponent, callback);
    });
  } else {
    fiberRoot = root._internalRoot;
    if (typeof callback === 'function') {
      const originalCallback = callback;
      callback = function() {
        const instance = getPublicRootInstance(fiberRoot);
        originalCallback.call(instance);
      };
    }
    // Update
    updateContainer(children, fiberRoot, parentComponent, callback);
  }
  return getPublicRootInstance(fiberRoot);
}

```
:::


初始化流程主要做了两件事：
1. 初始化Root，生成FiberRoot
2. 进入Fiber流程
    - reconciliation阶段：React元素树 -> Fiber树
    - commit阶段：Fiber树 -> DOM

### 初始化Root


初始化Root的详细步骤
``` js
import {
  createContainer,
} from 'react-reconciler/src/ReactFiberReconciler';

container._reactRootContainer = legacyCreateRootFromDOMContainer(
    container,
    forceHydrate,
);

function legacyCreateRootFromDOMContainer(
  container: Container,
  forceHydrate: boolean,
): RootType {
  return createLegacyRoot(
    container,
    shouldHydrate
      ? {
          hydrate: true,
        }
      : undefined,
  );
}


export function createLegacyRoot(
  container: Container,
  options?: RootOptions,
): RootType {
  return new ReactDOMBlockingRoot(container, LegacyRoot, options); // 实例化Root对象
}

function ReactDOMBlockingRoot(
  container: Container,
  tag: RootTag,
  options: void | RootOptions,
) {
  this._internalRoot = createRootImpl(container, tag, options); // 创建FiberRoot
}

```

容器DOM节点（后文称之为container ）初始是个`Element | Document`类型，在经过初始化操作之后附加上`_reactRootContainer`属性，`_reactRootContainer`保存的是一个`RootType`类型的对象（后文称之为Root对象）。最终container 符合下面描述的`Container`类型。

``` ts
type Container =
  | (Element & {_reactRootContainer: RootType})
  | (Document & {_reactRootContainer: RootType});

type RootType = {
  render(children: ReactNodeList): void,
  unmount(): void,
  _internalRoot: FiberRoot,
};
```

不难发现，最根本的操作还是创建FiberRoot。FiberRoot 可以通过`container._reactRootContainer._internalRoot`访问到。

我们先来确定FiberRoot是什么。

``` js
// （代码适当简化）
// tag = LegacyRoot
export function createFiberRoot(
  containerInfo: any,
  tag: RootTag,
  hydrate: boolean,
  hydrationCallbacks: null | SuspenseHydrationCallbacks,
): FiberRoot {
  const root: FiberRoot = (new FiberRootNode(containerInfo, tag, hydrate): any);
  if (enableSuspenseCallback) {
    root.hydrationCallbacks = hydrationCallbacks;
  }

  // Cyclic construction. This cheats the type system right now because
  // stateNode is any.
  const uninitializedFiber = createHostRootFiber(tag); // 创建一个tag为HostRoot的FiberNode
  root.current = uninitializedFiber;
  uninitializedFiber.stateNode = root;

  initializeUpdateQueue(uninitializedFiber);

  return root;
}

function FiberRootNode(containerInfo, tag, hydrate) {
  this.tag = tag;
  this.containerInfo = containerInfo;
  this.hydrate = hydrate;
  this.current = null;
}

function initializeUpdateQueue<State>(fiber: Fiber): void {
  const queue: UpdateQueue<State> = {
    baseState: fiber.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: {
      pending: null,
    },
    effects: null,
  };
  fiber.updateQueue = queue;
}

```

`createHostRootFiber`这一步骤创建了一个`tag`为`HostRoot`的FiberNode，`FiberRoot.current`引用FiberNode，`FiberNode.stateNode`引用FiberRoot，形成一个环结构。

同时，`FiberNode.updateQueue`绑定一个更新队列。

所以，FiberRoot的结构可以描述为

``` js
FiberRoot = {
  tag: LegacyRoot,
  containerInfo: Container,
  current: {
    tag: HostRoot,
    stateNode: FiberRoot,
    key: null,
    pendingProps: null,
    mode: NoMode,
    sibling: null
    child: null,
    return: null,
    lanes: NoLanes,
    updateQueue: {
      baseState: null,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
        pending: null,
      },
      effects: null,
    }
  }
}
```

### 进入Fiber流程

这部分逻辑完全封装在`react-reconciler`包中，在这我只是简单介绍初始化阶段协调器做了什么。Fiber架构的具体介绍另写一篇文章。

现在我们有的物料是一个FiberRoot对象，还有根React Element对象。而下面代码中的`fiberRoot`和`children`就分别对应两者。

``` js
fiberRoot = root._internalRoot;
if (typeof callback === 'function') {
  const originalCallback = callback;
  callback = function() {
    const instance = getPublicRootInstance(fiberRoot);
    originalCallback.call(instance);
  };
}
// Initial mount should not be batched.
unbatchedUpdates(() => {
  updateContainer(children, fiberRoot, parentComponent, callback);
});

```

`unbatchedUpdates`：作用在于进行非批量更新操作

``` js
// const NoContext = /*             */ 0b0000000;
// const BatchedContext = /*               */ 0b0000001;
// const LegacyUnbatchedContext = /*       */ 0b0001000;
let executionContext: ExecutionContext = NoContext;

export function unbatchedUpdates<A, R>(fn: (a: A) => R, a: A): R {
  const prevExecutionContext = executionContext;
  executionContext &= ~BatchedContext; 
  executionContext |= LegacyUnbatchedContext; // executionContext & -0b1111110 | 0b0001000
  try {
    return fn(a);
  } finally {
    executionContext = prevExecutionContext;
    if (executionContext === NoContext) {
      // Flush the immediate callbacks that were scheduled during this batch
      resetRenderTimer();
      flushSyncCallbackQueue();
    }
  }
}

export function batchedUpdates<A, R>(fn: A => R, a: A): R {
  const prevExecutionContext = executionContext;
  executionContext |= BatchedContext; // executionContext | 0b0000001
  try {
    return fn(a);
  } finally {
    executionContext = prevExecutionContext;
    if (executionContext === NoContext) {
      // Flush the immediate callbacks that were scheduled during this batch
      resetRenderTimer();
      flushSyncCallbackQueue();
    }
  }
}
```


核心部分，`updateContainer`
``` js
export function updateContainer(
  element: ReactNodeList,
  container: OpaqueRoot,
  parentComponent: ?React$Component<any, any>,
  callback: ?Function,
): Lane {
  const current = container.current; //FiberNode
  const eventTime = requestEventTime();
  const lane = requestUpdateLane(current);

  if (enableSchedulingProfiler) {
    markRenderScheduled(lane);
  }

  const context = getContextForSubtree(parentComponent);
  if (container.context === null) {
    container.context = context;
  } else {
    container.pendingContext = context;
  }

  const update = createUpdate(eventTime, lane);
  // Caution: React DevTools currently depends on this property
  // being called "element".
  update.payload = {element};

  callback = callback === undefined ? null : callback;
  if (callback !== null) {
    update.callback = callback;
  }

  enqueueUpdate(current, update); // 入队更新队列
  scheduleUpdateOnFiber(current, lane, eventTime);

  return lane;
}

function createUpdate(eventTime: number, lane: Lane): Update<*> {
  const update: Update<*> = {
    eventTime,
    lane,

    tag: UpdateState,
    payload: null,
    callback: null,

    next: null,
  };
  return update;
}

function enqueueUpdate<State>(fiber: Fiber, update: Update<State>) {
  const updateQueue = fiber.updateQueue;
  if (updateQueue === null) {
    // Only occurs if the fiber has been unmounted.
    return;
  }

  const sharedQueue: SharedQueue<State> = (updateQueue: any).shared;
  const pending = sharedQueue.pending;
  if (pending === null) {
    // This is the first update. Create a circular list.
    update.next = update;
  } else {
    update.next = pending.next;
    pending.next = update;
  }
  sharedQueue.pending = update;
}

```

`enqueueUpdate(current, update);` // 把update插入到队列，在第一次更新时生成的是一个环
`scheduleUpdateOnFiber(current, lane, eventTime);` // 通过Fiber进行更新调度

## ReactDOM怎么知道需要进行更新？

Dan Abramov 的[这篇文章](https://overreacted.io/zh-hans/how-does-setstate-know-what-to-do/)可以完美解答这个问题。


React.Component中的setState()如何与渲染器“对话”？

在ReactDOM创建完类的实例之后会立即设置`updater`，也就是往类组件实例中注入`updater`，

``` js
const inst = new YourComponent();
inst.props = props;
inst.updater = ReactDOMUpdater;
```

`this.setState`实质上是去调用渲染器设置的`updater`，让ReactDOM安排并处理更新。
``` js
// 适当简化的代码
setState(partialState, callback) {
  // 使用`updater`字段回应渲染器！
  this.updater.enqueueSetState(this, partialState, callback);
}
```

而对于Hooks而言，被注入的是dispatcher对象，在渲染组件之前ReactDOM会先设置dispatcher。

``` js
// React内部(适当简化)
const React = {
  // 真实属性隐藏的比较深，看你能不能找到它！
  __currentDispatcher: null,

  useState(initialState) {
    return React.__currentDispatcher.useState(initialState);
  },

  useEffect(initialState) {
    return React.__currentDispatcher.useEffect(initialState);
  },
  // ...
};
```


## React与ReactDOM分别做了什么？

> react包仅仅是让你使用 React 的特性，但是它完全不知道这些特性是如何实现的。而渲染器包(react-dom、react-native等)提供了React特性的实现以及平台特定的逻辑。


`React.Component/hooks/Context/Refs/setState/事件处理`...这些都是React 的特性，可以简单地认知为面向React使用者的接口。而这些特性的具体实现部分是又RaectDOM来负责的。

在初始化阶段，`React.createElement`返回一颗React元素树，交给ReactDOM做Fiber树构建。

在交互阶段，React直接调用ReactDOM中事先注入的依赖，让ReactDOM去做FiberNode的更新，生成workInProgress tree，并最终展现到屏幕上。

