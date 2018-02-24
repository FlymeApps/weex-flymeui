# fm-tips

## 使用
```html
<fm-tips message="这是提示" />
<fm-tips message="靠右的提示" right />
<fm-tips message="这是提示" bgColor="##28bc92" />
<fm-tips>
	<text class="btnText" @click="copy">复制</text>
	<text class="split"></text>
	<text class="btnText" @click="paste">粘贴</text>
</fm-tips>
```

## Props
| 属性 | 类型 | 可选值 | 示例 | 说明 |
| -------- | -------- | -------- | -------- | 
| message | String | * | message="这是提示" | 引导提示的内容，如需要设置纯文本以外的内容，请使用 slot
| bgColor | String | * | bgColor="##198ded"  | 引导提示的背景颜色，默认为 ##198ded
| right  | String  | true / false  |  right="true"       | 引导提示停靠方向，默认为靠左

## Events
| 事件名 | 事件类型 
| -------- | -------- 
| close | 引导提示被关闭时触发

## 示例
<div class="img-txt">
	
![](http://image.res.meizu.com/image/flyme-icon/d9094734989f4d3ea328f25f8fbf0550z)

</div>

