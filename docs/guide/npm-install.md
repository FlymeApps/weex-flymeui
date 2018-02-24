  
  ![Flyme Design](http://design.flyme.cn/images/logo.png)
# 安装
```
npm install --save @flyme/weex-flymeui --registry=http://registry.cnpm.meizu.com
```

# 使用
```javascript
<template>
  <div>
    <fm-button text="安装" @click="buttonClicked" bgColor="transparent" color="#198ded" />
  </div>
</template>

<script
  import { FmButton } from '@flyme/weex-flymeui';
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
```
npm i babel-plugin-component -D
```
```
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
```
import FmText from "@flyme/weex-flymeui/packages/fm-text"
import FmImage from "@flyme/weex-flymeui/packages/fm-image"
```

# Weex-toolkit
如果你使用 [weex-toolkit](https://github.com/weexteam/weex-toolkit) 来开发你的Weex项目，你需要向 .babelrc 文件中加入 'state-0' 和 'babel-plugin-component'

```
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

# 需要注意的地方
weex-FlymeUI 组件均以 1080px 屏幕宽度作为基准尺寸，请在入口文件或者父组件设置 viewport。
```javascript
const meta = weex.requireModule('meta')
// 配置 viewport 的宽度为 1080px
meta.setViewport({  
  width: 1080px
})
```




