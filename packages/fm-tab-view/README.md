# fm-tab-view

## 使用
```html
<fm-tab-view :items="items" @slidend="end">
	<text class="item item1" slot="item1">我是tab1</text>
	<text class="item item2" slot="item3">我是tab2</text>
	<text class="item item3" slot="item2">我是tab3</text>
</fm-tab-view>
```

## Props
| 属性 | 类型 | 示例 | 说明 |
| -------- | -------- | -------- | 
| items | Array | items=\[{name: 'item1', text: ''}]  | 子项数据, 其中name值需要和slot name对应

## Events
| 事件名 | 参数 | 事件类型 
| -------- | -------- | -------- 
| slidend | event: {selected: currentIdx}  |  tab切换完成后回传当前tab index


## 示例
<div class="img-txt">
![](http://image.res.meizu.com/image/flyme-icon/62a1a11b83b44599948bc89ace7b5379z)
</div>