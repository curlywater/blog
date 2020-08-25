# 如何规范Git Commit Message

在Angular的规范基础上衍生出 conventional commits，搭配辅助工具commitizen/cz-cli 和 commitlint 落地。

## Angular 规范

Commit Message 的规范格式

``` bash
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

**type：指明修改类型**
- feat：新功能
- fix：修复一个bug
- docs：只修改了文档
- style：与代码逻辑无关，代码格式化相关的修改
- refactor：代码重构（不是修复bug，也不是增加新功能）
- perf：性能优化
- test：补充或救治测试用例
- chore：更改构建过程或辅助工具和库
- revert： Git 回滚信息。例如：`revert: This reverts commit <hash>`

**scope：附加信息，指明修改所属的范围**
- 例如：`feat(parser): add ability to parse arrays`
- 当影响范围超过一个时，可以使用`*`填充

**subject：主题，简单描述变更**
- 使用现在时的动词
- 不要大写第一个字母
- 不以.号结尾

**body：主体，详细说明**
- 修改动机
- 和前一版本的区别

**footer：脚注**
- 备注Breaking  Changes信息
  `BREAKING CHANGE: refactor to use JavaScript features not available in Node 6.`
- 备注[github issue关联操作](https://docs.github.com/en/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue)


## conventional commits 规范

规范格式

``` bash
<type>[(optional scope)][optional !]: <description>

[optional body]

[optional footer(s)]
```

conventional commits 的规范内容大体上的Angular相差不大，附加说明的部分包括：
- 只规定`feat`和`fix`两个类型，其他扩展类型可自定义
- 内容区和脚注可选填
- 多行主体内容使用空白行间隔开
- 通过可选的`!`表明该提交中有Breaking Change，若存在`!`，便可选择不使用`BREAKING CHANGE: `进行具体说明

可见[官方示例](https://www.conventionalcommits.org/en/v1.0.0/#examples)，直观了解。

在 conventional commits 规范的基础上，通过一些辅助工具帮助开发者在实际项目中落地规范。以下介绍`commitizen/cz-cli`和`commitlint`，更多工具可见[工具列表](https://www.conventionalcommits.org/en/v1.0.0/#tooling-for-conventional-commits)。

## commitizen/cz-cli

> A Node.js tool to create commit messages following the Conventional Commits specs.

`commitizen/cz-cli` 是一个引导开发者依照 conventional commit 规范填写git commit 的工具。

具体的表现是附加一个`git cz`命令，通过该命令进入commit message 填写引导。

### 安装方式

``` bash
npm install -g commitizen
```
在项目中使用`git cz`、`cz`、`git-cz`命令召唤引导程序。


### 配置commit规范

例如使用Angular 规范，需要给commitizen 配上 `cz-conventional-changelog` adapter。

``` bash
# 使用npm
commitizen init cz-conventional-changelog --save-dev --save-exact
# 使用yarn
commitizen init cz-conventional-changelog --yarn --dev --exact
```

上述命令执行了三件事情：

1. 安装`cz-conventional-changelog`到node_modules
2. 在package.json 文件中保存依赖
3. 在package.json 文件中配置`config.commitizen`
    ``` json
    "config": {
        "commitizen": {
            "path": "./node_modules/cz-conventional-changelog"
        }
    }
    ```

除了[推荐Adapter列表](https://github.com/commitizen/cz-cli#adapters)以外，还可根据项目需求自定义Adapter

### 自定Adapter

应用`cz-customizable` adapter
``` bash
commitizen init cz-customizable  --save-dev --save-exact
```

在项目根目录下创建`.cz-config.js`文件，将[模版示例](https://raw.githubusercontent.com/leoforfree/cz-customizable/master/cz-config-EXAMPLE.js)内容拷贝到`.cz-config.js`中。

`cz-customizable`配置文件的路径也可通过package.json 文件的`config.cz-customizable`字段自定义。
``` json
"config": {
  "commitizen": { // not needed for standlone usage
    "path": "node_modules/cz-customizable"
  },
  "cz-customizable": {
    "config": "config/path/to/my/config.js"
  }
}
```

## commitlint

> A linter to check that your commit messages meet the Conventional Commits format.

一个校验工具，校验准备提交的commit message 是否符合规范。

### 安装
``` bash
npm install --save-dev @commitlint/cli
```

### 配置

在commitlint.config.js 文件中配置commitlint 的校验规则，其中
- `extends`，指定校验规则基于的规范，规范通过共享配置文件的形式定义，[可用的共享配置文件](https://github.com/conventional-changelog/commitlint#shared-configuration)
- `rules`，在规范之上做一些自定义规则设定，[可配置字段列表](https://commitlint.js.org/#/reference-rules)

如果规范基于conventional commits，需要载入`@commitlint/config-conventional`共享配置文件
``` bash
npm install @commitlint/config-conventional --save-dev
```
``` js
// commitlint.config.js
module.exports = { extends: ["@commitlint/config-conventional"] };
```

如果使用cz-customizable 配置了自定义规范，需要搭配`commitlint-config-cz`共享配置文件使用

``` bash
npm install commitlint-config-cz --save-dev
```
``` js
// commitlint.config.js
module.exports = { extends: ["cz"] };
```

### 在 git hook 中调用 commitlint

安装 husky
``` bash
npm install --save-dev husky
```

配置`husky.hooks`
``` json
// package.json
{
    "husky": {
        "hooks": {
        "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
        }
    }
}
```

## 参考文章

[优雅的提交你的 Git Commit Message](https://juejin.im/post/6844903606815064077)

[Angular Git Commit Guidelines](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines)

[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#tooling-for-conventional-commits)

[commitizen/cz-cli](https://github.com/commitizen/cz-cli)

[commitlint local setup](https://commitlint.js.org/#/guides-local-setup?id=install-husky)

[commitlint-config-cz](https://www.npmjs.com/package/commitlint-config-cz)