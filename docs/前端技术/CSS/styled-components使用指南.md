---
title: styled-components使用指南
tags: [CSS-in-JS]
permalink: /f2e/css/styled-component
---

# styled-components 使用指南

[styled-components](https://styled-components.com/)要点梳理，分为介绍、基础用法、高级用法、实战思考四个部分。

## 介绍

使用模版字符串和 CSS 语法，生成一个样式化组件（StyledComponent），被包裹的自定义组件。

直接绑定组件和样式，免去两者间接对应的关系。

- 样式和组件强关联，解决痛点：
  - 难以确定样式在哪些组件中被使用，容易留下已弃用的样式代码
  - 想要确定组件上的样式内容，需要到样式文件中查找
- 动态应用 CSS，解决痛点：
  - 针对不同状态/不同主题，需要手动编写和管理大量 classes
  - styled-components 可以动态追踪组件状态插入 styles，结合代码拆分，可以实现加载最少量的代码
- 为样式生成唯一的 classname，解决痛点：
  - classname 重名、覆盖、拼写错误
- 自动生成前缀

## 基础用法

### 基本语法

模版字符串和 CSS 组合，生成一个样式化组件（StyledComponent）

样式化 HTML 元素可以写作`styled.tagname`或`styled(tagname)`，实际上`styled.tagname`是`styled(tagname)`的别名

样式化自定义组件只能写作`styled(Component)`，React 组件只需提供`className`prop，即可被样式化

```js
// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

// Use Title and Wrapper like any other React component – except they're styled!
render(
  <Wrapper>
    <Title>Hello World!</Title>
  </Wrapper>
);
```

### 动态样式

根据 props 生成动态样式

```js
const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
render(
  <div>
    <Button>Normal</Button>
    <Button primary>Primary</Button>
  </div>
);
```

### 样式继承

在组件外再包裹样式组件，override 组件原有样式。

```js
// The Button from the last section without the interpolations
const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
// A new component based on Button, but with some override styles
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;
render(
  <div>
    <Button>Normal Button</Button>
    <TomatoButton>Tomato Button</TomatoButton>
  </div>
);
```

### 重用样式

使用`as="tagname"`或者`as={Component}`语句，在不同元素上重用样式

```js
const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;
render(
  <div>
    <Button>Normal Button</Button>
    <Button as="a" href="/">
      Link with Button styles
    </Button>
    <TomatoButton as="a" href="/">
      Link with Tomato Button styles
    </TomatoButton>
  </div>
);
```

### 智能传递 props

styled-components 会将 props 传递给被包裹组件，但会根据被包裹组件的特性筛选其需要的 props 传递。

下例中的`inputColor`不会传递给`input`元素

```js
// Create an Input component that'll render an <input> tag with some styles
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${(props) => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;
// Render a styled text input with the standard input color, and one with a custom input color
render(
  <div>
    <Input defaultValue="@probablyup" type="text" />
    <Input defaultValue="@geelen" type="text" inputColor="rebeccapurple" />
  </div>
);
```

### 附加 props

避免再包裹组件，styled-components 提供`attrs`构造器，可以自定义 props 传递给被包裹组件

```js
const Input = styled.input.attrs((props) => ({
  // we can define static props
  type: "password",

  // or we can define dynamic ones
  size: props.size || "1em",
}))`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  /* here we use the dynamically computed prop */
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;

render(
  <div>
    <Input placeholder="A small text input" />
    <br />
    <Input placeholder="A bigger text input" size="2em" />
  </div>
);
```

`input`HTML Element 将收到`placeholder/type/size`三个 props

### 使用伪元素，选择器，嵌套语法

```js
const Thing = styled.div`
  color: blue;
  &:hover {
    color: red; // <Thing> when hovered
  }
  & ~ & {
    background: tomato; // <Thing> as a sibling of <Thing>, but maybe not directly next to it
  }
  & + & {
    background: lime; // <Thing> next to <Thing>
  }
  &.something {
    background: orange; // <Thing> tagged with an additional CSS class ".something"
  }
  .something-else & {
    border: 1px solid; // <Thing> inside another element labeled ".something-else"
  }
  .child-component {
    border: 1px solid;
  }
`;
render(
  <React.Fragment>
    <Thing>Hello world!</Thing>
    <Thing>How ya doing?</Thing>
    <Thing className="something">The sun is shining...</Thing>
    <div>Pretty nice day today.</div>
    <Thing>Don't you think?</Thing>
    <div className="something-else">
      <Thing>Splendid.</Thing>
    </div>
    <Thing>
      <label htmlFor="foo-button" className="child-component">
        Mystery button
      </label>
      <button id="foo-button">What do I do?</button>
    </Thing>
  </React.Fragment>
);
```

在出现语法冲突时，可以使用`&&`提高优先级

```js
const Thing = styled.div`
  && {
    color: blue;
  }
`;
const GlobalStyle = createGlobalStyle`
  div${Thing} {
    color: red;
  }
`;
render(
  <React.Fragment>
    <GlobalStyle />
    <Thing>I'm blue, da ba dee da ba daa</Thing>
  </React.Fragment>
);
```

### 动画

为了避免命名冲突，styled component 不会将 keyframes 全局化。解决方案是提供`keyframes`辅助方法，在应用中生成唯一实例

```js
// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;
render(<Rotate>&lt; 💅🏾 &gt;</Rotate>);
```

由于 keyframes 是惰性加载的，在编写可复用的样式片段时，直接引用有可能出现不存在的情况，因此提供了`css`辅助方法解决这个问题

```js
const rotate = keyframes``;

// ❌ This will throw an error!
const styles = `
  animation: ${rotate} 2s linear infinite;
`;

// ✅ This will work as intended
const styles = css`
  animation: ${rotate} 2s linear infinite;
`;
```

### 实际应用注意点

- styled-components 定义需要写在 render 外，否则它将在每个渲染过程中重新创建。在 render 方法中定义样式化的组件将阻碍缓存并大大降低渲染速度，因此应避免使用。

## 高级用法

### 主题

styled-components 提供`ThemeProvider`通过 context API 提供主题支持。

同时 StyledComponent 中可以直接访问到 theme 相关的 props。

```js
// Define our button, but with the use of props.theme this time
const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${(props) => props.theme.main};
  border: 2px solid ${(props) => props.theme.main};
`;

// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
Button.defaultProps = {
  theme: {
    main: "palevioletred",
  },
};

// Define what props.theme will look like
const theme = {
  main: "mediumseagreen",
};

render(
  <div>
    <Button>Normal</Button>

    <ThemeProvider theme={theme}>
      <Button>Themed</Button>
    </ThemeProvider>
  </div>
);
```

**ThemeProvider**

`theme prop`也可以传递函数，函数参数将是父 ThemeProvider 的值

```js
// Define our button, but with the use of props.theme this time
const Button = styled.button`
  color: ${(props) => props.theme.fg};
  border: 2px solid ${(props) => props.theme.fg};
  background: ${(props) => props.theme.bg};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;
// Define our `fg` and `bg` on the theme
const theme = {
  fg: "palevioletred",
  bg: "white",
};
// This theme swaps `fg` and `bg`
const invertTheme = ({ fg, bg }) => ({
  fg: bg,
  bg: fg,
});
render(
  <ThemeProvider theme={theme}>
    <div>
      <Button>Default Theme</Button>
      <ThemeProvider theme={invertTheme}>
        <Button>Inverted Theme</Button>
      </ThemeProvider>
    </div>
  </ThemeProvider>
);
```

**非样式化组件获取 theme**

可以通过`withTheme`高阶组件包裹

```js
import { withTheme } from "styled-components";

class MyComponent extends React.Component {
  render() {
    console.log("Current theme: ", this.props.theme);
    // ...
  }
}

export default withTheme(MyComponent);
```

也可以使用`useContext`React hook 搭配 `ThemeContext`接收

```js
import { useContext } from "react";
import { ThemeContext } from "styled-components";

const MyComponent = () => {
  const themeContext = useContext(ThemeContext);

  console.log("Current theme: ", themeContext);
  // ...
};
```

### Refs

`ref`prop 指向被包裹的 HTML 元素或 React 组件

```js
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  render() {
    return (
      <Input
        ref={this.inputRef}
        placeholder="Hover to focus!"
        onMouseEnter={() => {
          this.inputRef.current.focus();
        }}
      />
    );
  }
}
render(<Form />);
```

### 安全性

由于 styled-components 允许任意输入作为插值使用，使用用户输入作为样式可能导致用户浏览器中的 CSS 文件被攻击者替换，比如下面的例子：

```js
// Oh no! The user has given us a bad URL!
const userInput = "/api/withdraw-funds";

const ArbitraryComponent = styled.div`
  background: url(${userInput});
  /* More styles here... */
`;
```

建议使用[`CSS.escape(str)`](https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape)处理输入数据，目前`CSS.escape()`还需要[polyfill](https://github.com/mathiasbynens/CSS.escape)支持兼容

### 和其他 CSS 共存

styled-components 通过类生成实际的样式表，并通过`className prop`将这些类附加到响应的 DOM 节点，运行时它会被注入到 document 的 head 末尾。

在自定义组件中混合使用，注意确保 className 应用到 DOM 节点上

```js
class MyComponent extends React.Component {
  render() {
    // Attach the passed-in className to the DOM node
    return <div className={`some-global-class ${this.props.className}`} />;
  }
}
```

与全局样式混用很有可能产生优先级问题（styled-component 生成样式定义在样式表末位），一种解决办法是提高全局样式的优先级

```js
// MyComponent.js
const MyComponent = styled.div`background-color: green;`;

// my-component.css
.red-bg {
  background-color: red;
}

// For some reason this component still has a green background,
// even though you're trying to override it with the "red-bg" class!
<MyComponent className="red-bg" />
```

### 媒体查询

```js
const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576,
};

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

const Content = styled.div`
  height: 3em;
  width: 3em;
  background: papayawhip;

  /* Now we have our methods on media and can use them instead of raw queries */
  ${media.desktop`background: dodgerblue;`}
  ${media.tablet`background: mediumseagreen;`}
  ${media.phone`background: palevioletred;`}
`;

render(<Content />);
```

### 标签模版语法

styled-component 基于 ES6 标签模板语法实现语法定义

```js
const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

// 等同于

const StyledButton = styled.button(props => ({
  background: props.primary ? "palevioletred" : "white",
  color: props.primary ? "white" : "palevioletred",
  font-size: "1em",
  margin: "1em",
  padding: "0.25em 1em",
  border: "2px solid palevioletred",
  border-radius: "3px"
}))
```

## 实战思考

styled-component 缺陷：嵌套地狱
