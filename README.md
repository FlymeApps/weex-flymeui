# Weex FlymeUI


[![Travis](https://img.shields.io/travis/Yanjiie/weex-flymeui.svg?branch=master&style=flat-square)](https://travis-ci.org/Yanjiie/weex-flymeui)
[![GitHub last commit](https://img.shields.io/github/last-commit/Yanjiie/weex-flymeui.svg?style=flat-square)](https://github.com/alibaba/weex-flymeui/commits/master)
[![npm](https://img.shields.io/npm/v/weex-flymeui.svg?style=flat-square)](https://www.npmjs.com/package/weex-flymeui?_blank)
[![license](https://img.shields.io/github/license/Yanjiie/weex-flymeui.svg?style=flat-square)](https://github.com/Yanjiie/weex-flymeui/blob/master/LICENSE)

> 遵循 [Flyme](https://www.flyme.cn/) 系统设计风格、基于 [Weex](https://github.com/apache/incubator-weex) 的跨平台通用组件库。

**技术支持**
  - 张兴业
  - 马鹏
  - [@Yanjiie](https://github.com/Yanjiie)

![Flyme Design](http://design.flyme.cn/images/logo.png)
## 安装
```bash
npm i weex-flymeui -S
```

## 使用
```javascript
<template>
  <div>
    <fm-button text="安装" @click="buttonClicked" bgColor="transparent" color="#198ded" />
  </div>
</template>

<script></script>
  import { FmButton } from 'weex-flymeui';
  // import FmButton from 'weex-flymeui/packages/fm-button';
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

为了不打包所有的组件，可以逐个引入所需的组件。需要需要使用 [babel-plugin-component](https://www.npmjs.com/package/babel-plugin-component) 来只引入需要的组件打包。

```bash
npm i babel-plugin-component -D
```

```json
// 增加一个plugins的配置到 .babelrc 中
{
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
## 分开使用（推荐）
```javascript
import FmText from "weex-flymeui/packages/fm-text"
import FmImage from "weex-flymeui/packages/fm-image"
```

## Weex-toolkit
如果你使用 [weex-toolkit](https://github.com/weexteam/weex-toolkit) 来开发你的Weex项目，你需要向 .babelrc 文件中加入 'state-0' 和 'babel-plugin-component'

```bash
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

!> weex-FlymeUI 组件均以 1080px 屏幕宽度作为基准尺寸，请在入口文件或者父组件设置 viewport。

```javascript
const meta = weex.requireModule('meta')
// 配置 viewport 的宽度为 1080px
meta.setViewport({  
  width: 1080px
})
```