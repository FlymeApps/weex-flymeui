# fm-snack-bar

> 底部弹出提示

## 规则

- snackbar 可自动消失（3秒）；也可以操作后消失；还可以根据需要常驻显示。统一都显示在界面的底部，覆盖在界面之上
- snackbar的文字描述尽可能用单行文字，内容可以使用逗号隔开，末尾不使用句号
- 所承载的功能较复杂则采用页面跳转的形式，如果功能较为简单则可在snackbar上直接显示文字操作按钮

<img src="http://image.res.meizu.com/image/flyme-icon/f7b18ac1c99241d78de651b9ddc7658az" width=400 style="box-shadow: 0 5px 10px 0 #d9dce3; border-radius: 4px;" />

## 直接使用
```html
<!-- 默认使用 -->
<fm-snack-bar :show="show" @fmSnackBarDismissed="fmSnackBarDismissed" title="默认弹出，单行文字" type="jump"></fm-snack-bar>
<!-- 自定义停留时间 -->
<fm-snack-bar :show="show" :stay-time="5000" @fmSnackBarDismissed="fmSnackBarStayTimeDismissed" title="5s 后消失" type="jump"></fm-snack-bar>
<!-- 不自动消失 -->
<fm-snack-bar :show="show" :auto-close="false" @fmSnackBarDismissed="fmSnackBarStayDismissed" title="不自动消失的 SnackBar"></fm-snack-bar>
```

## JS 调用弹出使用
```javascript
import { showSnackBar } from 'weex-flymeui'
// 弹出文字操作 SnackBar
showSnackBar({
	title: '已自动开启夜间模式',
	closeText: '撤销',
	autoClose: false
}).then(() => {
	modal.toast({ message: '点击了撤销' })
}, () => {
	modal.toast({ message: '消失了' })
})
// 弹出警告 SnackBar
showSnackBar({
	title: '无网络连接，请点击设置',
	autoClose: false,
	type: 'jump'
}).then(() => {
	modal.toast({ message: '点击跳转' })
}, () => {
	modal.toast({ message: '消失了' })
})
```

## 可配置参数

| Prop | Type | Required | Default | Description |
|-------------|------------|--------|-----|-----|
| show | `Boolean` | `Y` |`false` | 是否显示 |
| title | `String` | `Y` |`''` | 提示文字 |
| title-color | `String` | `N` |`#FFFFFF` | 提示文案颜色 |
| close-text | `String` | `N` |`''` | 操作文案 |
| close-color | `String` | `N` |`'#198DED'` | 提示文案颜色 |
| height | `Number` | `N` |`44` | 高度 |
| background-color | `String` | `N` |`'#323232'` | 背景颜色 |
| animation | `Object` | `N` |`{}` | 过渡动画配置 |
| auto-close | `Boolean` | `N` |`true` | 是否自动消失 |
| stayTime | `Number` | `N` |`3000` | 停留时间 |
| type | `String` | `N` |`jump` | 提示类型，有 normal 和 jump 两种类型 |

## 事件回调

- `fmSnackBarDismissed`: 提示消失时触发
- `fmSnackBarBeClicked`: 当提示类型为 jump 时，操作文字被点击时触发
