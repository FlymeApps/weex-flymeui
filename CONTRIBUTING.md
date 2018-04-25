## 如何向 Weex FlymeUI 贡献代码

首先，非常欢迎正在阅读的你给我们 [提交 PR](https://github.com/FlymeApps/weex-flymeui/compare/) 来增加新组件、修改文档、代码例子、使用建议或者说出你的任何想法。

## 分支管理

```
master
 ↑
dev         <--- Develop/PR
```

* `dev` 分支
  * `dev` 是正在开发的分支。  
  * 所有新特性 PR 请提交到这里。
* `master` 分支
  * `master` 是稳定分支，我们将在这条分支上打标签和发布版本。


## Commit 规范

```
[{action}] {description}
```

* `{action}`
    * `+` 增加新特性
    * `!` 更新代码或解 bug
    * `-` 去除代码
* `{description}`
    * 请尽可能让更改描述简洁已读。

例如:
- [ + ] Support for iOS.
- [ ! ] The code format follows ESlint.

## 其他

在实现一个新特性之前创建一个 Issue 来追踪进度是一个很有必要的好习惯，也方便其他人跟踪和表达自己的想法。但是对于文档的表达错误，我们希望你直接进行修改并给我们提交 PR，而不是选择提交 Issue。
