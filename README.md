# Weex FlymeUI


[![Travis](https://img.shields.io/travis/Yanjiie/weex-flymeui.svg?branch=master&style=flat-square)](https://travis-ci.org/Yanjiie/weex-flymeui)
[![GitHub last commit](https://img.shields.io/github/last-commit/Yanjiie/weex-flymeui.svg?style=flat-square)](https://github.com/alibaba/weex-flymeui/commits/master)
[![npm](https://img.shields.io/npm/v/weex-flymeui.svg?style=flat-square)](https://www.npmjs.com/package/weex-flymeui?_blank)
[![license](https://img.shields.io/github/license/Yanjiie/weex-flymeui.svg?style=flat-square)](https://github.com/FlymeApps/weex-flymeui/blob/master/LICENSE)

![Flyme Design](http://design.flyme.cn/images/logo.png)

> 遵循 [Flyme](https://www.flyme.cn/) 系统设计风格、基于 [Weex](https://github.com/apache/incubator-weex) 的跨平台通用组件库。

## 安装
```shell
npm i weex-flymeui -S
```

## 使用
```vue
<template>
  <div>
    <fm-button @buttonClick="buttonClicked" theme="blue">安装</fm-button>
  </div>
</template>

<script>
  import { FmButton } from 'weex-flymeui';
  // 或者 import FmButton from 'weex-flymeui/packages/fm-button';
  export default {
    components: { FmButton },
    methods: {
      buttonClicked () {
        // enter your code
      }
    }
  };
</script>
```

## 使用前

如果你不想打包所有的组件，需要使用 [babel-plugin-component](https://www.npmjs.com/package/babel-plugin-component) 来只引入需要的组件打包，同时如果没有安装 `babel-preset-stage-0`，也需要一并安装。

```shell
npm i babel-preset-stage-0 babel-plugin-component  -D
```

```json
// 增加一个plugins的配置到 .babelrc 中
{
    "presets": ["es2015", "stage-0"],
  "plugins": [
    [
      "component",
      {
        "libraryName": "weex-flymeui",
        "libDir": "packages",
        "style": false
      }
    ]
  ]
}
```

## 运行 Demo

```shell
npm i
npm run start
```

一旦编译完成后，将会自动打开一个浏览器，你可以在浏览器打开开发者工具，这时候在 console 中你可以看到一个预览二维码，直接使用你的 Weex App 扫码就可以看到 Demo 效果。

## Weex-toolkit
如果你使用 [weex-toolkit](https://github.com/weexteam/weex-toolkit) 来开发你的Weex项目，你需要向 .babelrc 文件中加入 'state-0' 和 'babel-plugin-component'

```shell
npm i babel-preset-stage-0 babel-plugin-component -D
```

```javascript
{
  "presets": ["es2015", "stage-0"],
  "plugins": [
    [
      "component",
      {
        "libraryName": "weex-flymeui",
        "libDir": "packages"
      }
    ]
  ]
}
```

## 需要注意的地方

?> 目前部分组件没有进行 iOS 的适配，欢迎 [提交 Issue 或 PR](https://github.com/FlymeApps/weex-flymeui/issues/new)

!> Weex-FlymeUI 组件均以 1080px 屏幕宽度作为基准尺寸，请在入口文件或者父组件设置 viewport。

*index.js*

```javascript
const meta = weex.requireModule('meta')
// 配置 viewport 的宽度为 1080px
meta.setViewport({  
  width: 1080px
})
```

*index.html*

```html
<!-- 添加以下 meta -->
<meta name="weex-viewport" content="1080"/>
```

## 贡献代码

我们致力于 Flyme 设计在移动领域的推广，同时在寻找志同道合的朋友。如果你在使用中发现任何问题或有更好的想法，欢迎提交 pull request，并且在提交前记得阅读一下 [贡献指南](https://github.com/FlymeApps/weex-flymeui/blob/master/CONTRIBUTING.md)。

## 协议

* 遵循 [MIT 协议](http://opensource.org/licenses/MIT)
* 请自由地享受和参与开源
