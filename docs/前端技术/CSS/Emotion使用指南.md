---
title: Emotion使用指南
tags: [CSS-in-JS]
permalink: /f2e/css/emotion
---



# Emotion使用指南

[Emotion](https://emotion.sh/docs/introduction)要点梳理。

## 介绍

Emotion启发于[styled-components](https://www.styled-components.com/)、[glamor](https://github.com/threepointone/glamor)、[glamorous](https://glamorous.rocks/)，是一个集各家所长的CSS-in-JS库。

Emotion提供两种支持方案，分别针对React环境和框架无关环境。

### 框架无关环境

依赖`emotion`包，`css`函数处理返回`className`，`cx`函数提供组合功能（将多个样式定义组合为一个返回`className`）。

<iframe src="https://codesandbox.io/embed/exciting-colden-ttx9o?expanddevtools=1&fontsize=14&hidenavigation=1&module=%2Fsrc%2Findex.js&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="exciting-colden-ttx9o"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

### React环境

依赖`@emotion/core`和`@emotion/styled`包。

`@emotion/core`提供`css`函数和`css prop`支持。

`@emotion/styled`提供`styled`支持，即可生成样式化组件。

具体的使用方法在下文中介绍。



### String Style 和 Object Style

Emotion支持的两种样式定义方法。

### String Style

字符串样式需要结合`css`函数使用，css函数是由`@emotion/core`提供，该函数返回一个对象（包含样式名，样式字符串），给Emotion底层使用。

<iframe src="https://codesandbox.io/embed/emotion-react-kzdy6?expanddevtools=1&fontsize=14&hidenavigation=1&initialpath=%2Fcss-function&module=%2Fsrc%2FComponents%2FCSSFunction.js&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="emotion-react"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

``` js
// 标签模板字符串
const style = css`
    color: "black";
    &:hover {
      color: "white";
    }
`;

// 等同于
const style = css(`
    color: "black";
    &:hover {
      color: "white";
    }
`);
```



### Object Style

一个JS对象，偏向JS语言，因此使用驼峰式属性名。可用在`css prop`，`Styled Components`， `css函数`中。

``` js
const objectStyle = {
  backgroundColor: "hotpink",
  opacity: 0.5,
  "&:hover": {
  	backgroundColor: "lightgreen"	
	}
}
```



## css prop

### 环境配置

在Create-React-App和无法自定义babel配置的项目中，使用JSX Pragma。

``` jsx{1,2,6}
/** @jsx jsx */
import { jsx } from '@emotion/core'

render(
  <div
    css={}
  >
    This has a hotpink background.
  </div>
)
```

第一行告知 [jsx babel plugin](https://babeljs.io/docs/en/babel-plugin-transform-react-jsx) 使用`jsx`函数代替`React.createElement`函数。

第二行引入`emotion`的`jsx`函数。

最终效果通过带有`css prop`支持的`jsx`函数编译产生React元素。

### 使用方法

**Object Style**

``` jsx
/** @jsx jsx */
import { jsx } from '@emotion/core'

render(
  <div
    css={{
      backgroundColor: 'hotpink',
      '&:hover': {
        color: 'lightgreen'
      }
    }}
  >
    This has a hotpink background.
  </div>
)
```

**String Style**

``` jsx
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const color = 'darkgreen'

render(
  <div
    css={css`
      background-color: hotpink;
      &:hover {
        color: ${color};
      }
    `}
  >
    This has a hotpink background.
  </div>
)
```

### 最终效果

通过`jsx`函数编译生成一个被包裹的组件（EmotionCssPropInternal -> Context.Consumer -> div），参见下述代码React DevTools

<iframe src="https://codesandbox.io/embed/emotion-react-kzdy6?expanddevtools=1&fontsize=14&hidenavigation=1&initialpath=%2Fcss-prop&module=%2Fsrc%2FComponents%2FCSSProp.js&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="emotion-react"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## Styled Components

启发于另一个CSS-in-JS库——styled-components，能够样式化任何接收className的组件。

### 基础使用方法

**静态样式**

``` js
// String Style
const Button = styled.button`
  color: turquoise;
`
// Object Style
const Button = styled.button({color: turquoise;})
```

**动态样式**

``` js
// 动态定义某个属性
const Button = styled.button`
  color: ${props =>
    props.primary ? 'hotpink' : 'turquoise'};
`

// 动态定义Object Style
const H1 = styled.h1(
  {
    fontSize: 20
  },
  props => ({ color: props.color })
)

// 动态多个属性
const dynamicStyle = props =>
  css`
    color: ${props.color};
  `

const Container = styled.div`
  ${dynamicStyle};
`

```



### 修改标签

使用`withComponent`生成新的自定义组件

``` js
const Section = styled.section`
  background: #333;
  color: #fff;
`

const Aside = Section.withComponent('aside')
```

使用`as`临时改变标签

``` jsx
import styled from '@emotion/styled'

const Button = styled.button`
  color: hotpink;
`

render(
  <Button
    as="a"
    href="https://github.com/emotion-js/emotion"
  >
    Emotion on GitHub
  </Button>
)
```



### 使用sholudForwardProp自定义prop forwarding

默认情况下，emotion会将所用prop传递给自定义组件，将有效的html属性传递给原生html标签。

`@emotion/is-prop-valid`辅助判断prop是否是有效的html属性。

``` js
const H1 = styled('h1', {
  shouldForwardProp: prop =>
    isPropValid(prop) && prop !== 'color'
})(props => ({
  color: 'hotpink'
}))
```



### 在定义样式时，样式化组件可以当作css选择器使用

``` jsx
import styled from '@emotion/styled'

const Child = styled.div`
  color: red;
`

const Parent = styled.div`
  ${Child} {
    color: green;
  }
`

render(
  <div>
    <Parent>
      <Child>Green because I am inside a Parent</Child>
    </Parent>
    <Child>Red because I am not inside a Parent</Child>
  </div>
)
```



## 生成className

`css prop`和`Styled Components`最终都是生成被包裹组件，有没有方法生成`className`传递给下级组件？

`@emotion/core`提供`ClassNames`组件，组件子级是带`css`和`cx`参数的函数，`css`和`cx`也就是[框架无关方案](#框架无关环境)里`emotion`的两个函数。

``` jsx
import { ClassNames } from '@emotion/core'

// this might be a component from npm that accepts a wrapperClassName prop
let SomeComponent = props => (
  <div className={props.wrapperClassName}>
    in the wrapper!
    <div className={props.className}>{props.children}</div>
  </div>
)

render(
  <ClassNames>
    {({ css, cx }) => (
      <SomeComponent
        wrapperClassName={css({ color: 'green' })}
        className={css`
          color: hotpink;
        `}
      >
        from children!!
      </SomeComponent>
    )}
  </ClassNames>
)
```



## 样式组合

``` jsx
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const base = css`
  color: hotpink;
`

render(
  <div
    css={css`
      ${base};
      background-color: #eee;
    `}
  >
    This is hotpink.
  </div>
)
```

在传统css中，两个`className`组合的优先级由在样式表中定义的先后决定。在应用时修改优先级层次需要使用`!important`。而Emotion则可以根据应用时的顺序决定优先级。

``` jsx
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const danger = css`
  color: red;
`

const base = css`
  background-color: darkgreen;
  color: turquoise;
`

render(
  <div>
    <div css={base}>This will be turquoise</div>
    <div css={[danger, base]}>
      This will be also be turquoise since the base styles
      overwrite the danger styles.
    </div>
    <div css={[base, danger]}>This will be red</div>
  </div>
)

```



## 附加props

在styled-components里，为了避免使用附加props再包裹组件，提供`attrs`方法

``` jsx
const PasswordInput = styled.input.attrs(props => ({
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
  margin: ${props => props.size};
  padding: ${props => props.size};
`;
```

而在Emotion中，则是建议定义一个普通的React组件，将`css prop`和其他`props`应用到组件上。

``` jsx
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const PasswordInput = ({size, ...restProps}) => (
  <input
    type="password"
    css={css`
      color: palevioletred;
      font-size: 1em;
      border: 2px solid palevioletred;
      border-radius: 3px;

      /* here we use the dynamically computed prop */
      margin: ${props => props.size};
      padding: ${props => props.size};
    `}
    size={props.size || "1em"}
    {...restProps}
  />
)

render(
  <div>
    <PasswordInput placeholder="red" />
    <PasswordInput placeholder="pink" css={pinkInput} />
  </div>
);
```



## 应用场景

### 全局样式

``` jsx
import { Global, css } from '@emotion/core'

render(
  <div>
    <Global
      styles={css`
        .some-class {
          color: hotpink !important;
        }
      `}
    />
    <Global
      styles={{
        '.some-class': {
          fontSize: 50,
          textAlign: 'center'
        }
      }}
    />
    <div className="some-class">This is hotpink now!</div>
  </div>
)
```

`styles prop`用法和`css prop`相同，`Global`组件会插入全局样式。如果移除组件，对应的全局样式也会被移除。



### 媒体查询

``` jsx
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const breakpoints = [576, 768, 992, 1200]

const mq = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
)

render(
  <div>
    <div
      css={{
        color: 'green',
        [mq[0]]: {
          color: 'gray'
        },
        [mq[1]]: {
          color: 'hotpink'
        }
      }}
    >
      Some text!
    </div>
    <p
      css={css`
        color: green;
        ${mq[0]} {
          color: gray;
        }
        ${mq[1]} {
          color: hotpink;
        }
      `}
    >
      Some other text!
    </p>
  </div>
)
```

### Keyframes

``` jsx
/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/core'

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`

render(
  <div
    css={css`
      animation: ${bounce} 1s ease infinite;
    `}
  >
    some bouncing text!
  </div>
)

```



### 主题

``` bash
npm install -S emotion-theming
```

``` jsx
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'

const theme = {
  colors: {
    primary: 'hotpink'
  }
}

render(
  <ThemeProvider theme={theme}>
    <div css={theme => ({ color: theme.colors.primary })}>
      some other text
    </div>
  </ThemeProvider>
)
```

`css prop`和`Styled Component`最终产生的都是带`Consumer`的包裹组件，因此在`props`中可访问到`theme`。

非样式化组件中，则需要通过`useTheme hook`访问到`theme`

``` jsx
import { ThemeProvider, useTheme } from 'emotion-theming'
```



## 自定义

### 在样式名后加上自定义字符串

``` jsx
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

let style = css`
  color: hotpink;
  label: some-name;
`

let anotherStyle = css({
  color: 'lightgreen',
  label: 'another-name'
})

let ShowClassName = ({ className }) => (
  <div className={className}>{className}</div>
)

render(
  <div>
    <ShowClassName css={style} />
    <ShowClassName css={anotherStyle} />
  </div>
)

```

### 自定义Emotion配置

[CacheProvider](https://emotion.sh/docs/cache-provider)

