---
title: HTML的基础标签
permalink: /f2e/html-tags
---

# HTML 的基础标签

## 关于 HTML

HTML 的作用可以简单总结为结构化、语义化和提供基础 API 支持（HTML5）。

结构化，通过标签先后顺序和嵌套语法描画文档结构。

语义化，语义化标签给内容正确的意思、作用和外形。合理使用语义化标签的现实意义在于贴合规则。这样信息更加容易被检索和利用，比如说可以支持无障碍辅助功能、辅助浏览器自动生成大纲、更容易让屏幕阅读器读出网页内容。

功能支持，基础的比如超链接、图片显示功能，HTML5 中的音视频功能、矢量图、3D 图像等等。

## 标签列表

基于个人理解（即非官方描述），给标签划分为结构化标签、语义化标签、功能化标签，文档标签。

### 结构化标签

不包含特定语义及功能

- div - 块级内容容器

- span - 内联内容容器

- br - 换行

- hr - 分隔线

### 语义化标签

包含特定语义，用户代理一般会给特殊样式表示，但无既定功能

**容器**

- header - 页面的页眉或者一个节段的头部
- nav - 主要链接集合，footer 里的附加链接集可以不用 nav
- main - 文档的主体部分，一般是包含中心主题或主要功能的内容放置区
- article - 独立结构，可独立分配或可复用的内容结构，比如论坛帖子、评论
- section - 一个节段，一个专题组
- aside - 独立于主体内容的部分，比如说广告区，侧边栏
- footer - 页面的页脚，或一个阶段的尾部
- figure - 独立引用单元，常和 figcaption 配合使用。这个标签经常是在主文中引用的图片，插图，表格，代码段等等，当这部分转移到附录中或者其他页面时不会影响到主体。

**文本段落**

- h1-h6 - 标题

- p - 文本段落

- ul+li - 无序列表

- ol+li - 有序列表

- dl+dt+dd - 描述列表，一个术语可有多条描述，多个术语也可共享同条描述。dl - description list, dt - description terms, dd - description description

  ```html
  <dl>
    <dt>Apple Inc.</dt>
    <dd>is an American multinational technology company</dd>
  </dl>
  ```

**强调修饰**

- em - 强调语气，默认样式为斜体

- strong - 着重强调，默认样式为粗体

- i - 传统上用斜体表达的内容，比如说技术术语、外国文字之类的

- b - 传统上用粗体表达的内容，比如说关键字、产品名称等

- u - 传统上用下划线表达的内容，比如说拼写错误

**引用**

- blockquote - 块引用，cite 属性可表示引用源但不会显示，显示引用源文本需结合 cite 元素使用

  ```html
  <blockquote cite="https://www.huxley.net/bnw/four.html">
    <p>
      Words can be like X-rays, if you use them properly—they’ll go through
      anything. You read and you’re pierced.
    </p>
    <footer>—Aldous Huxley, <cite>Brave New World</cite></footer>
  </blockquote>
  ```

- q - 行内引用，同有 cite 属性

- cite - 引文，引用源显示具体的文字

  ```html
  <a href="https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/HTML5"
    ><cite>HTML5 是定义 HTML 标准的最新的版本</cite></a
  >
  ```

**辅助**

- abbr - 缩略语

  ```html
  <abbr title="People's Republic of China">PRC</abbr>
  ```

- address - 联系信息

  ```html
  <address>
    You can contact author at
    <a href="http://www.somedomain.com/contact">www.somedomain.com</a>.<br />
    If you see any bugs, please
    <a href="mailto:webmaster@somedomain.com">contact webmaster</a>.<br />
    You may also want to visit us:<br />
    Mozilla Foundation<br />
    1981 Landings Drive<br />
    Building K<br />
    Mountain View, CA 94043-0801<br />
    USA
  </address>
  ```

### 功能化标签

**a - 超链接**

```HTML
<a href="https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/HTML5" title="一篇关于HTML5的介绍">HTML5</a>
```

- 相对 URL 和绝对 URL 的优劣：绝对 URL 需要查询 DNS 找到服务器再请求，相对 URL 则会根据当前服务器地址直接请求
- URL 可使用 mailto 链接直接出发邮件应用，mailto 链接可加入一些邮件信息（标题、收件人、内容），适用于用户邮件反馈场景
- 使用 download 属性指示浏览器下载 URL，并提示用户保存为本地文件，文件名默认是 download 属性值

**img - 图片**

```html
<img src="tomato.png" alt="tomato.png" title="一张番茄的图片" />
```

和使用 CSS 背景图片比较，如果图像对内容有意义使用 HTML，如果只是装饰使用背景图片

**video - 视频**

```HTML
<video src="videofile.ogg" autoplay loop muted controls poster="posterimage.jpg">
  抱歉，您的浏览器不支持内嵌视频，不过不用担心，你可以 <a href="videofile.ogg">下载</a>
  并用你喜欢的播放器观看!
</video>
```

浏览器包含了不同的解码器，所以需要用几个不同格式的文件来兼容不同的浏览器

```html
<video width="320" height="240" autoplay loop muted controls>
  <source src="movie.mp4" type="video/mp4" />
  <source src="movie.ogg" type="video/ogg" />
  Your browser does not support the video tag.
</video>
```

添加字幕文件

```html
<video src="foo.ogg">
  <track kind="subtitles" src="foo.en.vtt" srclang="en" label="English" />
  <track kind="subtitles" src="foo.sv.vtt" srclang="sv" label="Svenska" />
</video>
```

**audio - 音频**

```html
<audio autoplay loop muted controls>
  <source src="horse.ogg" type="audio/ogg" />
  <source src="horse.mp3" type="audio/mpeg" />
  Your browser does not support the audio element.
</audio>
```

**picture - 多格式图片**

兼容多格式图片（比如 webP 的应用）的容器，支持自适应加载，edge13 以上支持

```HTML
<picture>
  <source srcset="mdn-logo.svg" type="image/svg+xml">
  <img src="mdn-logo.png" alt="MDN">
</picture>

<picture>
  <source srcset="mdn-logo-wide.png" media="(min-width: 600px)">
  <img src="mdn-logo-narrow.png" alt="MDN">
</picture>
```

**svg - 矢量图**

SVG 文件中包含图形和路径的定义，由 CPU 计算出渲染结果，使用过多或者过大的 SVG 会导致性能阻塞

**iframe - 嵌入 HTML 页面**

```html
<iframe
  src="https://www.w3schools.com"
  title="W3Schools Free Online Web Tutorials"
></iframe>
```

有独立的会话记录和 DOM 树

- allow - 指定策略特征，`allow="fullscreen"`
- referrerpolicy - 在获取 iframe 资源时如何发送 referrer 首部
- sandbox 属性 - 规定嵌入内容的工作权限，如是否能表单提交、脚本运行
- seamless 属性 - iframe 渲染成容器页面文档的一部分，兼容性：IE/Edge 未实现
- srcdoc 属性 - 属性值 HTML 代码，些代码会被渲染到 iframe 中
- width 属性 - 属性值是数值或百分比，默认值是 300
- height 属性 - 属性值是数值或百分比，默认值是 100
- name 属性 - 给 iframe 设置一个名字，[和超链接联合使用 Demo](https://www.w3schools.com/html/tryit.asp?filename=tryhtml_iframe_target)

> 页面上的每个`<iframe>`都需要增加内存和其它计算资源，这是因为每个浏览上下文都拥有完整的文档环境。虽然理论上来说你能够在代码中写出来无限多的`<iframe>`，但是你最好还是先看看这么做会不会导致某些性能问题。

**table - 表格**

- caption - 表格标题
- colgroup - 表格列组
- thead - 表头容器
- tbody - 表主体容器，可多个
- tfoot - 表尾容器
- tr - 行
- th - 标题单元格
  - colspan - 每单元格中列的数量，默认值为 1 。超过 1000 的值被视作 1000。
  - rowspan - 每单元格中行的数量，
  - headers - 相关联的标题单元格，[例子](https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_th_headers)，headers 属性在普通的 Web 浏览器中没有视觉效果，但是可以由屏幕阅读器使用。
  - scope - 指定单元格角色，是一列的标题/一行的标题/一组列的标题/一组行的标题，scope 属性在普通的 Web 浏览器中没有视觉效果，但是可以由屏幕阅读器使用。
- td - 数据单元格
- col - 为列统一设置样式，在 col 上指定的 class 或者内联样式会应用到对应列的所有单元格上
  - span - 扩展列的个数

<iframe height="265" style="width: 100%;" scrolling="no" title="【HTML】Table Demo" src="https://codepen.io/curlywater/embed/NWxOrYL?height=265&theme-id=light&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/curlywater/pen/NWxOrYL'>【HTML】Table Demo</a> by Curly.Water
  (<a href='https://codepen.io/curlywater'>@curlywater</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

**form - 表单**

- autocomplete - "on"/"off"，浏览器是否可以自动补全，默认开启。设置关闭时，浏览器不一定会遵守，现实场景中关闭表单自动填充的[方法](<[https://wiki.developer.mozilla.org/zh-CN/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion#%E7%A6%81%E7%94%A8%E8%87%AA%E5%8A%A8%E5%A1%AB%E5%85%85](https://wiki.developer.mozilla.org/zh-CN/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion#禁用自动填充)>)

- accept-charset - 服务器端支持的字符编码，默认值是和当前文档使用相同的字符编码
- name - 表单名称
- action - 提交的 URL，这个值可被 [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/button)、`<input type="submit">` 或 `<input type="image">` 元素上的 `formaction` 属性覆盖。
- enctype - `method`为`post`时，`enctype` 就是将表单的内容提交给服务器的 MIME 类型
- method - get 或 post，可被`formmethod`覆盖
- novalidate - 提交时是否需要验证表单

内部组件

- fieldset - 具有相同目的的小部件组
  - legend - 部件组标题

**label - 小部件标签**

通过 for 属性和小部件绑定，点击 label 时小部件也被激活。

```html
<label for="name">Name:</label>
<input id="name" type="text" name="name" />

// 标签内容跨越小部件时，可以用label包裹
<div>
  <label for="username">
    <span>Name:</span>
    <input id="username" type="text" name="username" />
    <abbr title="required">*</abbr>
  </label>
</div>
```

**input - 单行输入框**

- readonly 属性规定无法输入，disabled 属性禁止一切行为 form 表单数据中会剔除该部件数据。
- type 属性，email/password/search/tel/url/number/range/color/date/hidden/radio/checkbox/file

**select + option - 下拉选择器**

```html
<select id="simple" name="simple">
  <option>Banana</option>
  <option>Cherry</option>
  <option>Lemon</option>
</select>

// optgroup增加选框标题
<select id="groups" name="groups">
  <optgroup label="fruits">
    <option>Banana</option>
    <option selected>Cherry</option>
    <option>Lemon</option>
  </optgroup>
  <optgroup label="vegetables">
    <option>Carrot</option>
    <option>Eggplant</option>
    <option>Potato</option>
  </optgroup>
</select>
```

**datalist - 自动补全选择器**

兼容性：IE10 以下不受支持

```html
<input list="browsers" />

<datalist id="browsers">
  <option value="Edge"> </option>
  <option value="Firefox"> </option>
  <option value="Chrome"> </option>
  <option value="Opera"> </option>
  <option value="Safari"> </option>
</datalist>
```

### 文档标签

- `<!DOCTYPE html>` - 声明文档类型，规定页面需要遵循的规则

- `<meta>` - 描述文档的数据

  - `<meta charset="utf-8">` - 文档字符编码，描述在这个文档中允许被使用的字符集
  - `<meta name="description" content="This is a page..."` - name 部分规定描述的信息类型，content 部分规定描述的信息内容
  - 一些站点设定有专用的元数据协议会在其站点内显示特定信息，比如说 Facebook 的 Open Graph Data

- `<link>` - 指定外部资源，并规定外部资源与当前文档的关系

  ```html
  <link ref="{关系}" href="{资源URI}" type="{资源内容类型}" />
  <link ref="shortcut icon" href="favicon.ico" type="image/x-icon" />
  <link
    rel="preload"
    href="https://developer.mozilla.org/static/fonts/locales/ZillaSlab-Regular.subset.bbc33fb47cf6.woff2"
    as="font"
    type="font/woff2"
    crossorigin=""
  />
  ```

### 附录

[HTML5 标签列表 - From MDN](https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/HTML5/HTML5_element_list)
