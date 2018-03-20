# fm-slider-bar

## 使用
```html
<fm-slider-bar @selected="sel"/>
<fm-slider-bar level="10" @selected="sel"/>
<fm-slider-bar level="10" showProgress @selected="sel"/>
<fm-slider-bar level="10" :levelTexts="levelTexts" @selected="sel"/>
<fm-slider-bar value="40" @selected="sel" showProgress/>
<fm-slider-bar level="5" value="3" @selected="sel"/>
```

**因为使用了 Weex 中的 move 手势，目前 move 手势在可滚动组件( list, scroll等 )中会存在大量时间冲突，所以在可滚动组件中使用时会有问题**

## Props
| 属性 | 类型 | 可选值 | 示例 | 说明 |
| -------- | -------- | -------- | -------- | 
| level | Number | *  | level="100"  | slider 等份数，默认无级滑动
| levelTexts | Array | * |  levelTexts=\['小', '中', '大']  | 根据级别文案滑动
| showProgress  | Boolean  | *  |  	showProgress="true" |  显示当前位置，给定level / levelText，则显示当前level；否则显示两位数百分比
| value  | Number  | *  |  value="2" | 初始值，给定level，对应level值，否则对应百分比
## Events
| 事件名 | 参数 | 事件类型 
| -------- | -------- | -------- 
| selected | event: {rate: .35, level: 3}  |  rate：当前选择到的比例值；level：当前选择的level值，只有在指定了level的情况下准确

## 示例
<div class="img-txt">
![](http://image.res.meizu.com/image/flyme-icon/d75b411f892a435887b8546e23b7caa5z)
</div>
