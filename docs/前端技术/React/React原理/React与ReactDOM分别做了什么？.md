---
title: React与ReactDOM分别做了什么？
permalink: /f2e/react/react-and-react-dom
---

# React与ReactDOM分别做了什么？

一般我们会使用JSX进行开发，而JSX实质上是`React.createElement`的语法糖。一段React代码经过Babel编译之后，最终得到的是`React.createElement`嵌套调用的函数。

**示例代码**
``` js
function App () {
	return <>
      	<h1>Heading</h1>
      	<Content text="A" />
      </>
}

ReactDOM.render(<App />, document.getElementById("app"));
```


**编译结果**
``` js
"use strict";

function App() {
  return /*#__PURE__*/ React.createElement(
    React.Fragment,
    null,
    /*#__PURE__*/ React.createElement("h1", null, "Heading"),
    /*#__PURE__*/ React.createElement(Content, {
      text: "A",
    })
  );
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app"));
```

React交给ReactDOM的React元素是什么？

ReactDOM拿到React提供的物料后做了什么？

只显示调用了一次`render`，当组件状态发生改变时，ReactDOM怎么知道需要进行更新？

React和ReactDOM各自负责什么部分？

这一篇文章通过解答上述问题，简单介绍React和ReactDOM的工作。


## React交给ReactDOM的是什么？


我们来看看`React.createElement`是什么。

首先是React文档对API的解释

``` js
/**
 * @param {原生的字符串标签 | ReactComponent | ReactFragment} type
 * @param {?(null | object)} props
 * @param {?ReactElement} children 元素包含的子元素，以剩余参数的形式传递
 * 
 * @return {ReactElement}。
 **/
React.createElement(
  type,
  [props],
  [...children]
)
```

### 源码分析

接着再来探索一下`createElement`内部，可以直接跳至总结部分。

``` js
const RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true,
};

export function createElement(type, config, children) {
  // ---- 处理props ---- //
  let propName;
  const props = {};
  let key = null;
  let ref = null;
  let self = null;
  let source = null;
  if (config != null) {
    // 提取ref
    if (hasValidRef(config)) {
      ref = config.ref;
    }
    // 提取key
    if (hasValidKey(config)) {
      key = '' + config.key;
    }
    // 提取__self
    self = config.__self === undefined ? null : config.__self;
    // 提取__config
    source = config.__source === undefined ? null : config.__source;

    // 收集props
    for (propName in config) {
      if (
        hasOwnProperty.call(config, propName) &&
        !RESERVED_PROPS.hasOwnProperty(propName)
      ) {
        props[propName] = config[propName];
      }
    }
  }

  // ---- 处理children ---- //
  // props.children是单体或者数组
  const childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    const childArray = Array(childrenLength);
    for (let i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }

  // ---- 应用 defaultProps ---- //
  if (type && type.defaultProps) {
    const defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  return ReactElement(
    type,
    key,
    ref,
    self,
    source,
    ReactCurrentOwner.current,
    props,
  );
}

const ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: (null: null | Fiber),
};

// ReactElement返回的对象
// $$typeof: REACT_ELEMENT_TYPE // 标识该对象是React元素，REACT_ELEMENT_TYPE = symbolFor('react.element') || 0xeac7，用Symbol获得一个全局唯一值
// self和source已经不再应用，可以不用过分关注
// _owner和Fiber相关，暂时不关注
const ReactElement = function(type, key, ref, self, source, owner, props) {
  const element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,

    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,

    // Record the component responsible for creating this element.
    _owner: owner,
  };

  return element;
};
```

### 总结

`React.createElement`接收到`type``props``children`参数。

对`props`和`children`进行处理，从`props`中提取`key`和`ref`，将`children`以单体或者数组的形式附加到`props`上

最终返回一个的数据结构`ReactElement`，用ts简单表示如下

``` js
interface ReactElement {
  $$typeof: Symbol | number; // 标识该对象是React元素，REACT_ELEMENT_TYPE = symbolFor('react.element') || 0xeac7，用Symbol获得一个全局唯一值
  type: string | ReactComponent | ReactFragment
  key: string | null
  ref: null  | string | object
  props: {[propsName: string]: any} | {
    children: ReactElement | Array<ReactElement>
    [propsName: string]: any
  },
  _owner: {
    current:  null | Fiber
  }
}
```

用下面一段代码具象化返回值

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

console.log( <App />);

// Output
{
  type: function App() {}
  key: null
  ref: null
  props: {}
  _owner: null
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
    }
  ],
  _owner: null
}

```


## ReactDOM拿到React提供的物料后做了什么？

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

### 参数分析

React仓库中各个项目使用flow作为类型支持工具，[React的基础类型定义文件](https://github.com/facebook/flow/blob/master/lib/react.js)


``` js
declare type React$ElementType =
  | string
  | React$AbstractComponent<empty, mixed>;
declare type React$Element<+ElementType: React$ElementType> = {|
  +type: ElementType,
  +props: React$ElementProps<ElementType>,
  +key: React$Key | null,
  +ref: any,
|};
```

flow的定义符合我们对`React.createElement`的分析结果。

### ReactDOM对ReactElement的处理

ReactDOM接收到的是ReactElement，

ReactDOM中的操作分为render和commit两个阶段。render负责ReactElement -> 组件实例/真实的DOM。commit部分负责将所有修改应用到DOM树上。

ReactDOM从接收到的ReactElement开始，为React元素产生对应的FiberNode。FiberNode是一个包含多向指针的数据结构，包括`return`，`child`，`sibling`三个指针，分别对应父结点，第一个子结点，右边的兄弟结点。从而形成了Fiber链表。

实现Fiber链表的目的在于能中断、继续，从而能够增量处理render部分。

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

在初始化阶段，`React.createElement`返回根React元素，交给ReactDOM做Fiber树构建。

在交互阶段，React直接调用ReactDOM中事先注入的依赖，让ReactDOM去做FiberNode的更新，生成workInProgress tree，并最终展现到屏幕上。


## 后记

这篇文章的重点还是停留在`createElement`的分析和React/ReactDOM概念区分。

ReactDOM生成Fiber树，进行协调和提交的过程是React实现的核心，也是非常复杂的一部分。这一部分可以查看[ReactDOM的工作机制]()。

如果对React的API实现感兴趣，可以查看[React API的实现分析]()。