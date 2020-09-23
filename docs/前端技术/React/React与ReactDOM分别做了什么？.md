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

就是说，React通过`React.createElement`的嵌套调用描述了React元素间的关系，也就是我们惯称的虚拟DOM。


## ReactDOM拿到React提供的物料后做了什么？

ReactDOM接收到的是React元素树。

ReactDOM中的操作分为reconciler和commit两个阶段。render负责React元素 -> 组件实例/真实的DOM。commit部分负责将所有修改应用到DOM树上。

ReactDOM从React元素树的根开始，为React元素产生对应的FiberNode。FiberNode是一个包含多向指针的数据结构，包括`return`，`child`，`sibling`三个指针，分别对应父结点，第一个子结点，右边的兄弟结点。从而形成了Fiber链表。
实现Fiber链表的目的在于能中断、继续。

``` js
Fiber = {
    // 标识 fiber 类型的标签，详情参看下述 WorkTag
    tag: WorkTag,

    // 指向父节点
    return: Fiber | null,

    // 指向子节点
    child: Fiber | null,

    // 指向兄弟节点
    sibling: Fiber | null,

    // 在开始执行时设置 props 值
    pendingProps: any,

    // 在结束时设置的 props 值
    memoizedProps: any,

    // 当前 state
    memoizedState: any,

    // Effect 类型，详情查看以下 effectTag
    effectTag: SideEffectTag,

    // effect 节点指针，指向下一个 effect
    nextEffect: Fiber | null,

    // effect list 是单向链表，第一个 effect
    firstEffect: Fiber | null,

    // effect list 是单向链表，最后一个 effect
    lastEffect: Fiber | null,

    // work 的过期时间，可用于标识一个 work 优先级顺序
    expirationTime: ExpirationTime,
};
```


https://zhuanlan.zhihu.com/p/179934120

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


`React.Component/hooks/Context/Refs/setState/事件处理`...这些都是React 的特性，可以简单地认知为面向React使用者的接口，负责描述结构和逻辑。而特性的具体实现部分是由渲染器（ReactDOM/React Native）来负责的。

在初始化阶段，`React.createElement`返回一颗React元素树，交给ReactDOM做Fiber树构建。

在交互阶段，React直接调用ReactDOM中事先注入的依赖，让ReactDOM去做FiberNode的更新，生成workInProgress tree，并最终展现到屏幕上。

