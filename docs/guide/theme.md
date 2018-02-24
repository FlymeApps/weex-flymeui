# Flyme 主题
Flyme UI 默认提供了 8 套 Flyme 主题色的主题。
## 主题色
![](http://fd6.flyme.cn/stor-stub/flymedesign/file/a0548b7f2c5b314956d1b9ee4321c1dd_%E4%B8%BB%E9%A2%98%E8%89%B2.png)

## 高亮和点击色
![](http://fd6.flyme.cn/stor-stub/flymedesign/file/e97f2bf763e33a07a6c9548b5495c224_image.png)

# 替换主题
FlymeUI 的 theme-paint 使用的是 SCSS 编写，组件样式引入时使用的是经过主题 Sass 文件预编译出来的 CSS，在`/lib/theme-paint/src`中可以找到主题样式的源码。

如果你是使用 [Creator-cli](http://apps.flyme.cn/docs/book.html?bookId=5a33434067e2277e77dcf928&doc=5a33434d67e2277e77dcf929) 创建你的工程，那么项目内已经默认添加了主题切换的功能，如果你的项目是通过 npm 安装，那么需要在项目的 package.json 的可执行命令 ( script ) 中加入以下命令。

```javascript
// package.json
"build:theme": "gulp build --gulpfile node_modules/@flyme/weex-flymeui/lib/theme-paint/gulpfile.js"
```

使用如下命令进行主题切换：

```bash
$ npm run build:theme -- --theme [主题名称]
```

示例：
```
$ npm run build:theme -- --theme firebrick

> @flyme/weex-flymeui@0.1.2 build:theme /Users/suen/Documents/develop/project/weex-flymeui
> gulp build --gulpfile lib/theme-paint/gulpfile.js "--theme" "firebrick"

[14:22:40] Working directory changed to ~/Documents/develop/project/weex-flymeui/lib/theme-paint
[14:22:40] Using gulpfile ~/Documents/develop/project/weex-flymeui/lib/theme-paint/gulpfile.js
[14:22:40] Starting 'compile'...
[14:22:40] Finished 'compile' after 51 ms
[14:22:40] Starting 'build'...
[14:22:40] Finished 'build' after 41 μs
```

# 使用自定义主题
如果 FlymeUI 系统 8 套主题都不能满足你的要求，可以使用自定义的主题样式。

因为FlymeUI 的 theme-paint 使用的是 SCSS 编写，所以你在为 FlymeUI 编写自定义主题的时候，也需要使用 SCSS 来编写，但得益于 SCSS 对 CSS 的天然支持，你可以完全在 SCSS 中使用 CSS 的语法~



