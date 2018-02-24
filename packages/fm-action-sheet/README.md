# fm-action-sheet
## 说明
FmActionSheet 是一款基于 FmPopup 的从底部向上弹出的控制按钮列表。
<video src="http://baas.dfs.flyme.cn/group3/M05/C3/73/CgOUhFpLcNyAJwsSAA59Gl7YKjU392.mp4" style="width: 375px;" controls="controls"></video>


## 简单使用
```html
<fm-action-sheet :show="actionSheetShow"
                 confirmText="删除"
                 confirmColor="#DE3938"
                 cancelText="取消"
                 @fmActionSheetBtnClicked="fmActionSheetBtnClicked"
                 @fmActionSheetOverlayClick="fmActionSheetOverlayClick">
</fm-action-sheet>
```

## 自定义使用
```html
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
}, {=
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

## Props
| 属性 | 类型 | 示例 | 说明 |
| -------- | -------- | -------- | 
| show | Boolean | show="show"  | 是否显示
| canAutoClose | Boolean | canAutoClose="true"  | 点击蒙层是否能触发关闭
| confirmText | String | confirmText="删除"  | 确认按钮的文字
| confirmColor | String | confirmColor="#DE3938"  | 确认按钮文字的颜色
| cancelText | String | cancelText="取消"  | 取消按钮的文字
| actionBtns | Array | actionBtns="\[\]"  | 自定义按钮

## Events
| 事件名 | 事件类型 
| -------- | -------- 
| fmActionSheetBtnClicked | 按钮被点击时触发，时间对象为按钮对象
| fmActionSheetOverlayClick | 蒙层被点击时触发

