# fm-image

## FmImage 的存在原因

由于 weex 的 内建 image 组件必须设置大小才能显示，故开发 FmImage 组件。

## FmImage 能做什么 ?

1. 当没有对图片设置大小时，在图片加完完成之后显示图片的原始大小
2. 可以指定倍数对图片原始尺寸进行缩放在页面上显示
3. 可以设置指定的宽高占位，避免图片加载引起的页面跳动
4. 可以设置图片加载前占位的背景

## 使用
```html
<!-- 以图片原始尺寸显示 -->
<fm-image :scale="1" src="http://design.flyme.cn/weexui/assets/design_logo.png"/>
<!-- 以图片原始尺寸缩放 0.5 倍显示 -->
<fm-image :scale="0.5" src="http://design.flyme.cn/weexui/assets/design_logo.png"/>
<!-- 设置图片加载前占位，加完完成后以图片原始尺寸缩放 0.5 倍显示，占位颜色为 #fafafa -->
<fm-image :scale="0.5" 
          :width="200"
          :height="200" 
          :occupyingColor="#fafafa"
          src="http://design.flyme.cn/weexui/assets/design_logo.png"/>
<!-- 指定设置图片大小-->
<fm-image :width="200"
          :height="200" 
          src="http://design.flyme.cn/weexui/assets/design_logo.png"/>
```

## Props
| 属性 | 类型 | 示例 | 说明 |
| -------- | -------- | -------- | -------- | 
| src | String | src="http://design.flyme.cn/weexui/assets/design_logo.png" |  图片地址
| scale | Number | scale="0.5" | 缩放倍数
| width | Number | width="200" | 图片的宽度及水平方向占位，当设置了 scale 时，加完完成之后会以 scale 的倍数进行图片的显示
| height | Number | height="200" | 图片的宽度及垂直方向占位，当设置了 scale 时，加完完成之后会以 scale 的倍数进行图片的显示
| occupyingColor | String | occupyingColor="#fafafa" | 图片占位背景颜色
| imgStyle | Object | imgStyle="{ borderRadius: 40 }" | 自定义样式

