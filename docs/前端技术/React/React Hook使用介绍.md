---
title: React Hook 使用介绍
permalink: /f2e/react/react-hook/
---

# React Hook 使用介绍

Hook 是一些可以让你在函数组件里“钩入” React state 及生命周期等特性的函数。

## 动机

- 逻辑复用：`render props`和高阶组件需要重新调整代码结构，而**Hook 使你在无需修改组件结构的情况下复用状态逻辑。**
- 组件越来越复杂：相关联的逻辑需要被拆分到不同的生命周期中，一个生命周期里塞入太多互不相关的逻辑，**Hook 将组件中相互关联的部分拆分成更小的函数（比如设置订阅或请求数据）**，即插即用。
- class组件提高了使用React的门槛。React组件更像是函数，而Hook拥抱了函数，更加灵活。

## useState

```[stateX, setStateX] = useState(intialStateX)```

给组件增加state，返回一对值：当前状态和更新函数。借助数组解构，可以自定义命名。

`setStateX`函数是稳定的。就是说，在`stateX`发生改变的时候，`setStateX`不会发生身份改变。

`setStateX`函数总是做替换而不是做合并。

如果更新函数设置的state 和当前state 完全相同（通过`Object.is`判断），那么随后的重渲染流程会被跳过。在源码中，类组件的`setState`会直接进入更新队列（无论传入的值是什么），函数组件的`dispatcher`会进行`Object.is`判断再进行后续更新操作。

intialStateX可以是一个函数，以承载复杂初始化逻辑，该函数只会在第一次渲染时被调用。

```js
const [count, setCount] = useState(0);	
```

我们声明了一个叫 `count` 的 state 变量，然后把它设为 `0`。React 会在重复渲染时记住它当前的值，并且提供最新的值给我们的函数。我们可以通过调用 `setCount` 来更新当前的 `count`。


## useEffect

```js
useEffect(() => {
	// 副作用函数
	return () => {
		// 清除副作用
	}
}, [count]) // 仅在count更改时更新
```

React 会保存你传递的函数（我们将它称之为 “effect”），并且在执行 DOM 更新之后延迟调用它。

每次重新渲染，满足effect更新条件。都会生成新的effect，销毁旧的effect。因为effect在函数组件内定义，因此可以直接沿着作用域链找到`state`中的依赖值，直接通过闭包的特性来实现，而无需React再做进一步的API封装。


### 指定依赖

你可以通知 React 跳过对 effect 的调用，只要传递数组作为 `useEffect` 的第二个可选参数即可

```js
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]); // 仅在 count 更改时更新
```

### 单次调用

如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行），可以传递一个空数组（`[]`）作为第二个参数。这就告诉 React 你的 effect 不依赖于 props 或 state 中的任何值，所以它永远都不需要重复执行。

```
useEffect(() => {
  document.title = `You clicked times`;
}, []); // 仅在 count 更改时更新
```

**使用风险**

[未指明所有依赖导致数据未更新](https://react.docschina.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies)：安装linter，将外部函数移到effect内部声明

[在effect 的依赖频繁时如何防止频繁注册卸载副作用](https://react.docschina.org/docs/hooks-faq.html#what-can-i-do-if-my-effect-dependencies-change-too-often)：使用函数式更新state，无需依赖外部的state变量



### useEffect的优点

- **关注点分离**：你可以把组件内相关的副作用组织在一起（例如创建订阅及取消订阅），而不要把它们拆分到不同的生命周期函数里。
- **性能优化**：与 componentDidMount、componentDidUpdate 不同的是，在浏览器完成布局与绘制之后，传给 useEffect 的函数会延迟调用。这使得它适用于许多常见的副作用场景，比如设置订阅和事件处理等情况，因此不应在函数中执行阻塞浏览器更新屏幕的操作。在个别情况下（例如测量布局），有单独的 `useLayoutEffect` Hook 供你使用，其 API 与 `useEffect` 相同。

## useReducer

集中管理内部状态。

``` js
const [state, dispatch] = useReducer(reducer, initialArg, init);
```

- `reducer`：`(state, action) => newState;`
- `initialArg`：初始化state值
- `init`：可选，state初始化处理函数，初始state被设置为`init(initialArg)`，可以以此共用reset逻辑

React 会确保 dispatch 函数的标识是稳定的，并且不会在组件重新渲染时改变。这就是为什么可以安全地从 useEffect 或 useCallback 的依赖列表中省略 dispatch。

在某些场景下，`useReducer` 会比 `useState` 更适用，例如 state 逻辑较复杂且包含多个子值，或者下一个 state 依赖于之前的 state 等。

使用 useReducer 还能给那些会触发深更新的组件做性能优化，因为你可以向子组件传递 dispatch 而不是回调函数。

同时这一特性也能给Context结合以适用于避免向下深度传递回调。


``` js
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}
```

## useContext

``` js
const value = useContext(MyContext);
```

接收一个 context 对象（React.createContext 的返回值）并返回该 context 的当前值。

当组件上层最近的 <MyContext.Provider> 更新时，该 Hook 会触发重渲染，并使用最新传递给 MyContext provider 的 context value 值。即使祖先使用 React.memo 或 shouldComponentUpdate，也会在组件本身使用 useContext 时重新渲染。



## useCallback

```js
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
```

它将返回该函数的 memoized 版本，该回调函数仅在某个依赖项改变时才会更新。

### 如何避免`useCallback`频繁更新

通过ref记录值，在回调函数中通过`ref.current`获取最新值。因ref的不变性，`useCallback`只会执行一次。

``` js
function useEventCallback(fn, dependencies) {
  const ref = useRef(() => {
    throw new Error('Cannot call an event handler while rendering.');
  });

  useEffect(() => {
    ref.current = fn;
  }, [fn, ...dependencies]);

  return useCallback(() => {
    const fn = ref.current;
    return fn();
  }, [ref]);
}

function Form() {
  const [text, updateText] = useState('');
  // 即便 `text` 变了也会被记住:
  const handleSubmit = useEventCallback(() => {
    alert(text);
  }, [text]);

  return (
    <>
      <input value={text} onChange={e => updateText(e.target.value)} />
      <ExpensiveTree onSubmit={handleSubmit} />
    </>
  );
}
```

## useMemo

```js
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

返回memoized值，它仅会在某个依赖项改变时才重新计算 memoized 值。

先编写在没有useMemo的情况下也可以执行的代码，再加入useMemo优化。将来，React 可能会选择“遗忘”以前的一些 memoized 值，并在下次渲染时重新计算它们。你可以把 useMemo 作为性能优化的手段，但不要把它当成语义上的保证。

## useRef

```js
const refContainer = useRef(initialValue);
```

`useRef` 返回的 ref 对象在组件的整个生命周期内保持不变。由`ref.current`保存变化值。

useRef() 比 ref 属性更有用。它可以很方便地保存任何可变值，其类似于在 class 中使用实例字段的方式。

变更 `.current` 属性不会引发组件重新渲染。如果想要在 React 绑定或解绑 DOM 节点的 ref 时运行某些代码，则需要使用回调 ref。

``` js
// 每次渲染完成后，更新ref，回调ref中进行DOM操作
function MeasureExample() {
  const [height, setHeight] = useState(0);

  const measuredRef = useCallback(node => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
    }
  }, []);

  return (
    <>
      <h1 ref={measuredRef}>Hello, world</h1>
      <h2>The above header is {Math.round(height)}px tall</h2>
    </>
  );
}
```

## useImperativeHandle

在使用 `ref` 时自定义暴露给父组件的实例值。

``` js
function FancyInput(props, ref) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));
  return <input ref={inputRef} ... />;
}
FancyInput = forwardRef(FancyInput);

<FancyInput ref={fancyInputRef} />

fancyInputRef.current.focus()
```


## useLayoutEffect

`useEffect`的effect会在DOM渲染完毕后延迟调用。

`useLayoutEffect`和`componentDidMount/componentDidUpdate`的调用阶段一样。会在所有 DOM 变更之后同步调用 effect。

尽可能使用标准的 `useEffect` 以避免阻塞视觉更新。


## 自定义Hook

本质是借助于基础Hook实现状态逻辑抽取的一个函数。

自定义Hook不会共享state，每次使用自定义 Hook 时，其中的所有 state 和副作用都是完全隔离的。

自定义 Hook 更像是一种约定而不是功能。如果函数的名字以 “`use`” 开头并调用其他 Hook，我们就说这是一个自定义 Hook。 `useSomething` 的命名约定可以让我们的 linter 插件在使用 Hook 的代码中找到 bug。

## Hook 使用规则

- 只能在函数最外层调用Hook。不要在循环、条件判断、子函数中调用。每个组件内部都有一个「记忆单元格」列表。它们只不过是我们用来存储一些数据的 JavaScript 对象。当你用 useState() 调用一个 Hook 的时候，它会读取当前的单元格（或在首次渲染时将其初始化），然后把指针移动到下一个。React按顺序将state和setState对应，在组件运行过程中不能修改顺序关系。
- 只能在React的函数组件中调用，在自定义hook中调用，不能在普通JS函数里使用

[linter](https://www.npmjs.com/package/eslint-plugin-react-hooks)会根据两条规则进行检查。


## 衍生问题

### 有了`useReducer`和`useContext`还有必要使用Redux吗？

Redux的作用在于状态管理，`useReducer`和`useContext`只是React已有特性在函数组件上的使用接口。在class组件中同样可以通过顶层`state`和Context实现。

在class组件中有必要使用Redux吗？看是否需要Redux。
