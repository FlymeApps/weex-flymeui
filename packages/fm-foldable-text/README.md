# fm-foldable-text

## 使用
```vue
<category title="可折叠文本"></category>
<fm-foldable-text :text="text" width="340"></fm-foldable-text>
<category title="不同大小"></category>
<fm-foldable-text :text="text" width="340"></fm-foldable-text>
<fm-foldable-text :text="text" large width="340"></fm-foldable-text>
<fm-foldable-text :text="text" huge width="340"></fm-foldable-text>
<category title="限制不同行数"></category>
<fm-foldable-text :text="text" width="340" lines="3"></fm-foldable-text>
<category title="默认不折叠状态"></category>
<fm-foldable-text :text="text" width="340" :folded="false"></fm-foldable-text>
<category title="自定义样式"></category>
<fm-foldable-text :text="text" width="340" :textStyle="{fontSize: 18, lineHeight: 30, color: 'red'}" :tipStyle="{fontSize: 18, lineHeight: 30, color: 'green'}"></fm-foldable-text>
```

## Props

| 属性 | 类型 | 可选值 | 示例 | 说明 |
| -------- | -------- | -------- | -------- | 
| text | String | * | text="测试text"  | 文本内容
| width | Number | int | width="340"  | 文本块宽度
| small / large / huge  | Boolean | true / false   |  large="true"  | 文本大小
| folded   | Boolean  | true / false | folded="false" | 文本是否折叠，默认为 true
| textStyle   | Object  | {\*} | {fontSize: 18, lineHeight: 30, color: 'red'} | 文本的样式
| tipStyle   | Object  | {\*} | {fontSize: 18, lineHeight: 30, color: 'red'} | 提示文字的样式

## 示例
<div class="img-txt">
![](http://image.res.meizu.com/image/flyme-icon/b5925dc9e8ac4b49a2c0c9afa87d62a8z)
</div>

