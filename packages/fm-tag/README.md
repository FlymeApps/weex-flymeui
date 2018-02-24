# fm-tag

## 使用
```html
<fm-tag value="小标签" color="##f12528"></fm-tag>
<fm-tag value="大标签" size="big" color="##f12528"></fm-tag>
<fm-tag value="空心标签" tagType="hollow" color="##f12528" fontColor="##3bc06b"></fm-tag>
```

## Props

| 属性 | 类型 | 可选值 | 示例 | 说明 |
| -------- | -------- | -------- | -------- | 
| tagType | String | solid / hollow | type="hollow"  | 标签是实心还是空心，默认为 solid
| size | String | small / big | size="big"  | 标签的大小，默认为 small
| value  | String  | *  |  value="标签内容"       | 标签的内嵌文本
| color   | String  | * | color="##f12528" | 标签的底色，当 type 为 hollow 时则为边框颜色
| fontColor | String  | * | fontColor="##f12528" | 标签的字体颜色

## 示例
<div class="img-txt">
	
![](http://image.res.meizu.com/image/flyme-icon/fc51d6d66a38485ea33a6504e5858d48z)

</div>

