---
title: React Hook 使用介绍
permalink: /f2e/react/react-hook/
---

# React Hook 使用介绍

## 动机

- React需要为共享状态逻辑提供更好的原生途径：`render props`和高阶组件需要重新调整代码结构，而**Hook 使你在无需修改组件结构的情况下复用状态逻辑。**
- 复杂组件难以理解：相关联的逻辑需要被拆分到不同的生命周期中，一个生命周期里塞入太多互不相关的逻辑，**Hook 将组件中相互关联的部分拆分成更小的函数（比如设置订阅或请求数据）**，而并非强制按照生命周期划分。
- class组件提高了使用React的门槛。React组件更像是函数，而Hook拥抱了函数。**Hook 使你在非 class 的情况下可以使用更多的 React 特性。**



Hook 是一些可以让你在函数组件里“钩入” React state 及生命周期等特性的函数。

## useState

```[stateX, setStateX] = useState(intialStateX)```

给组件增加内部state，返回一对值：当前状态和更新函数，借助数组解构，可以自定义命名。

如果更新函数设置的state 和当前state 完全相同（通过`Object.is`判断），那么随后的重渲染流程会被跳过。

`setStateX`函数是稳定的，也就是在`stateX`发生改变的时候，`setStateX`不会发生身份改变。

intialStateX可以是一个函数，以承载复杂初始化逻辑，该函数只会在第一次渲染时被调用。

### useState做了什么

```js
const [count, setCount] = useState(0);	
```

我们声明了一个叫 `count` 的 state 变量，然后把它设为 `0`。React 会在重复渲染时记住它当前的值，并且提供最新的值给我们的函数。我们可以通过调用 `setCount` 来更新当前的 `count`。

### 使用多个state变量

```js
 const [age, setAge] = useState(42);
 const [fruit, setFruit] = useState('banana');
 const [todos, setTodos] = useState([{ text: '学习 Hook' }]);
```

**⚠️set state 变量总是替换它而不是合并它。**


## useEffect

```js
useEffect(() => {
	// 副作用函数
	return () => {
		// 清除副作用
	}
}, [count]) // 仅在count更改时更新
```

在函数组件中执行effect（副作用操作）（数据获取，设置订阅以及手动更改 React 组件中的 DOM 都属于副作用）

### useEffect做了什么

React 会保存你传递的函数（我们将它称之为 “effect”），并且在执行 DOM 更新之后调用它。每次我们重新渲染，都会生成新的effect，替换掉之前的。新的effect具有对新state的闭包，因此不用担心state过期。

### useEffect原理

将 `useEffect` 放在组件内部让我们可以在 effect 中直接访问 `count` state 变量（或其他 props）。我们不需要特殊的 API 来读取它 —— 它已经保存在函数作用域中。Hook 使用了 JavaScript 的闭包机制，而不用在 JavaScript 已经提供了解决方案的情况下，还引入特定的 React API。

### useEffect使用优化

**指定依赖**

你可以通知 React 跳过对 effect 的调用，只要传递数组作为 `useEffect` 的第二个可选参数即可

```js
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]); // 仅在 count 更改时更新
```

**单次调用**

如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行），可以传递一个空数组（`[]`）作为第二个参数。这就告诉 React 你的 effect 不依赖于 props 或 state 中的任何值，所以它永远都不需要重复执行。

```
useEffect(() => {
  document.title = `You clicked times`;
}, []); // 仅在 count 更改时更新
```

**使用风险**

[未指明所有依赖导致数据未更新](https://react.docschina.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies)：将外部函数移到effect内部声明

[在effect 的依赖频繁时如何防止频繁注册卸载副作用](https://react.docschina.org/docs/hooks-faq.html#what-can-i-do-if-my-effect-dependencies-change-too-often)：使用函数式更新state，无需依赖外部的state变量



### useEffect优势

**关注点分离**

> 通过使用 Hook，**你可以把组件内相关的副作用组织在一起**（例如创建订阅及取消订阅），而不要把它们拆分到不同的生命周期函数里。

effect 里有可选的清除机制。每个 effect 都可以返回一个清除函数。如此可以将添加和移除订阅的逻辑放在一起。它们都属于 effect 的一部分。

Hook 允许我们按照代码的用途分离他们，而不是像生命周期函数那样。React 将按照 effect 声明的顺序依次调用组件中的每一个 effect。 

**性能优化**

与 componentDidMount、componentDidUpdate 不同的是，在浏览器完成布局与绘制之后，传给 useEffect 的函数会延迟调用。这使得它适用于许多常见的副作用场景，比如设置订阅和事件处理等情况，因此不应在函数中执行阻塞浏览器更新屏幕的操作。在个别情况下（例如测量布局），有单独的 `useLayoutEffect` Hook 供你使用，其 API 与 `useEffect` 相同。

## useReducer

集中管理内部状态。

``` js
const [state, dispatch] = useReducer(reducer, initialArg, init);
```

- `reducer`：类似于`(state, action) => newState;`
- `initialArg`：初始化state
- `init`：可选，初始化state处理函数，初始state被设置为`init(initialArg)`，可以以此实现reset逻辑共用效果


React 会确保 dispatch 函数的标识是稳定的，并且不会在组件重新渲染时改变。这就是为什么可以安全地从 useEffect 或 useCallback 的依赖列表中省略 dispatch。

在某些场景下，`useReducer` 会比 `useState` 更适用，例如 state 逻辑较复杂且包含多个子值，或者下一个 state 依赖于之前的 state 等。

使用 useReducer 还能给那些会触发深更新的组件做性能优化，因为你可以向子组件传递 dispatch 而不是回调函数。同时这一特性也能给Context结合以适用于避免向下深度传递回调。


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

- 只能在函数最外层调用Hook。不要在循环、条件判断、子函数中调用。
  - state和useState的对应关系，React靠的是在每次渲染时Hook调用顺序对应state
  - 外界条件会导致顺序变更
- 只能在React的函数组件中调用，在自定义hook中调用，不能在普通JS函数里使用
