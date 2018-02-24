# fm-switch

## 使用
```html
<fm-switch></fm-switch>
<fm-switch checked="true"></fm-switch>
<fm-switch disabled="true"></fm-switch>
<fm-switch theme="limegreen"></fm-switch>
```

## Props
| 属性 | 类型 | 可选值 | 示例 | 说明 |
| -------- | -------- | -------- | -------- | 
| checked | Boolean | true / false  | checked="true"  | 是否默认打开，默认为 false
| disabled | Boolean | true / false | disabled="true"  | 是否禁用按钮，默认为 false
| theme  | String  | 请查阅主题色表  |  theme="limegreen" |  按钮的主题色

## Events
| 事件名 | 事件类型 
| -------- | -------- 
| fmSwitchStateChange | 当按钮的状态被改变时触发，callback 第一个参数类型为 Boolean，对应按钮是否被打开

## 主题色表
![](http://image.res.meizu.com/image/flyme-icon/c8f2c3dae8514f93a68f8ce6abd1bedcz)


## 示例
<div class="img-txt">
	
![](http://image.res.meizu.com/image/flyme-icon/b4d8e65d3c8c4c7aa1ea341f037267f9z)

</div>

