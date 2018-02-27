# fm-snack-bar

## 说明
FmSnackBar 是一款从底部弹出的提示控件。

1. snackbar可自动消失（3秒）；也可以操作后消失；还可以根据需要常驻显示。统一都显示在界面的底部，覆盖在界面之上

2. snackbar的文字描述尽可能用单行文字，内容可以使用逗号隔开，末尾不使用句号

3. 所承载的功能较复杂则采用页面跳转的形式，如果功能较为简单则可在snackbar上直接显示文字操作按钮

<video src="http://baas.dfs.flyme.cn/group5/M06/7A/A1/CgOUcVpLcPeAH0rFABDl3Vx0gWk045.mp4" style="width: 375px;" controls="controls"></video>

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

## Props
| 属性 | 类型 | 示例 | 说明 |
| -------- | -------- | -------- | 
| show | Boolean | show="show"  | 是否显示
| backgroundColor | String | backgroundColor="##323232"  | 背景颜色
| title | String | title="无网络连接，请点击设置"  | 提示文字
| titleColor | String | titleColor="##FFFFFF"  | 提示文字的颜色
| closeText | String | closeText="撤销"  | 操作文字
| closeColor | String | closeColor="##198DED"  | 操作文字的颜色
| height | Number | height="44"  | 高度
| animation | Object | animation="{ timingFunction: 'ease-out' }"  | 过渡动画配置
| autoClose | Boolean | autoClose="true"  | 是否自动消失
| stayTime | Number | stayTime="3000"  | 停留时间，默认为 3s
| type | String | type="jump"  | 提示类型，有 normal 和 jump 两种类型

## Events
| 事件名 | 事件类型 
| -------- | -------- 
| fmSnackBarDismissed | 提示消失时触发
| fmSnackBarBeClicked | 当提示类型为 jump 时，操作文字被点击时触发

