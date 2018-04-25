# fm-action-sheet

> 基于 FmPopup 的从底部向上弹出的控制按钮列表

## 使用方法
```vue
<fm-action-sheet :show="actionSheetShow"
                 confirmText="删除"
                 confirmColor="#DE3938"
                 cancelText="取消"
                 @fmActionSheetBtnClicked="fmActionSheetBtnClicked"
                 @fmActionSheetOverlayClick="fmActionSheetOverlayClick">
</fm-action-sheet>
```

## 自定义使用
```vue
<!-- 自定义按钮文字、颜色 -->
<fm-action-sheet :show="actionSheetShow"
                 confirmText="删除"
                 confirmColor="#DE3938"
                 cancelText="取消"
                 @fmActionSheetBtnClicked="fmActionSheetBtnClicked"
                 @fmActionSheetOverlayClick="fmActionSheetOverlayClick">
</fm-action-sheet>
<!-- 自定义按钮 -->
var btns = [{
	color: 'red',
	text: '按钮1',
	msg: {},
	type: 'btn1'
}, {
	color: 'red',
	text: '按钮2',
	msg: {},
	type: 'btn2'
}]
<fm-action-sheet :show="actionSheetShow"
                 :actionBtns="btns"
                 @fmActionSheetBtnClicked="fmActionSheetBtnClicked"
                 @fmActionSheetOverlayClick="fmActionSheetOverlayClick">
</fm-action-sheet>
```

## 可配置参数

| Prop | Type | Required | Default | Description |
|-------------|------------|--------|-----|-----|
| show | `Boolean` | `Y` |`false` | 是否显示 |
| can-auto-close | `Boolean` | `N` |`true` | 点击蒙层是否能触发关闭 |
| confirm-text | `String` | `N` |`'确认'` | 确认按钮的文案 |
| confirm-color | `String` | `N` |`'#DE3938'` | 确认按钮文案的颜色 |
| cancel-text | `String` | `N` |`'取消'` | 取消按钮的文案 |
| action-btns | `Array[Object]` | `N` |`[]` | 自定义按钮 |
| action-btns[{`color`}] | `String` | `N` |`-` | 按钮颜色 |
| action-btns[{`text`}] | `String` | `Y` |`-` | 按钮文案 |
| action-btns[{`msg`}] | `Object` | `N` |`-` | 按钮所携带的信息，会包含在事件对象中返回 |
| action-btns[{`type`}] | `String` | `N` |`-` | 按钮标识，会包含在事件对象中返回 |

## 事件回调

- `fmActionSheetBtnClicked`: 按钮被点击时触发
 - `type`: 按钮类型
 - `text`: 按钮文案
- `fmActionSheetOverlayClick`: 蒙层被点击时触发，请监听事件并将面板设置为关闭

