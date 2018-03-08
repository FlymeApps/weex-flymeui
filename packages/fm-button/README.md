# fm-button

## 使用
```vue
<fm-button text="可用按钮" @click="btnBeClick"/>
<fm-button text="不可用" disabled />
<fm-button text="空心按钮" bgColor="transparent" color="#198ded" />
<fm-button text="自定义样式" bgColor="#ffffff" color="#dc2a2a" />
```

## Props
| 属性 | 类型 | 可选值 | 示例 | 说明 |
| -------- | -------- | -------- | -------- | 
| text | String | *  | text="按钮文字"  | 按钮内的文字，超出按钮最大宽度的文字将会被隐藏
| bgColor | String | * | bgColor="#198ded"  | 按钮的背景颜色，默认为 #198ded
| color  | String  | *  |  color="#ffffff"       | 按钮的背景颜色，默认为白色
| disabled   | Boolean  | true / false | disabled="true" | 按钮是否禁用，默认为 false

## Events
| 事件名 | 事件类型 
| -------- | -------- 
| click | 按钮被点击时触发

## 示例
<div class="img-txt">
	
![](http://image.res.meizu.com/image/flyme-icon/834ac7bff68a44e9b25b1db184554abez)

</div>

