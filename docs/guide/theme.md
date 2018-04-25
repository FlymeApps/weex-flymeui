# Theme 主题化

> 一键切换组件默认配色

** 为了丰富组件的视觉效果，Weex FlymeUI 提供了一键配色的功能，供用户自由切换 Flyme 系统的各种主题。**

## 内置配色
<img src="http://p1nq9peby.bkt.clouddn.com/theme_1.png" style="box-shadow: 0 5px 10px 0 #d9dce3; border-radius: 4px;" />
<img src="http://p1nq9peby.bkt.clouddn.com/theme_2.png" style="box-shadow: 0 5px 10px 0 #d9dce3; border-radius: 4px;" />

## 使用前

如果你已经安装了 [`babel-plugin-component`](https://www.npmjs.com/package/babel-plugin-component)，请替换成 [`babel-plugin-weeexcomponent`](https://www.npmjs.com/package/babel-plugin-weexcomponent)。

```shell
npm uninstall babel-plugin-component & npm install babel-plugin-weexcomponent -D
```

同时修改你的 `.babelrc`

```json
{
    "presets": ["es2015", "stage-0"],
    "plugins": [
        [
            "weexcomponent",
            {
                "libraryName": "weex-flymeui",
                "libDir": "packages",
                "style": false
            }
        ]
    ]
}
```

## 配置

Weex FlemyUI 内置了 7 套不同主题配色，默认配色为 `blue`。

按照以下配置修改你的 `.babelrc`，通过修改 `themeConfig.name` 即可自由设置你所需的主题。

```javascript
{
    "presets": ["es2015", "stage-0"],
    "plugins": [
        [
            "weexcomponent",
            {
                "style": false,
                "jsTheme": true,
                "libraryName": "weex-ui",
                "libDir": "packages",
                "themeConfig": {
                    "name": "default"   // 主题名称
                }
            }
        ]
    ]
}
```

更多配置项请查阅 [babel-plugin-component 文档](https://github.com/Yanjiie/babel-plugin-weexcomponent)
