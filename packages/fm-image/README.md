# fm-image

> 由于 weex 的 内建 image 组件必须设置大小才能显示，FmImage 可通过图片 `@load` 动态设置大小。

## 规则

- 当没有对图片设置大小时，在图片加完完成之后显示图片的原始大小
- 可以指定倍数对图片原始尺寸进行缩放在页面上显示
- 可以设置指定的宽高占位，避免图片加载引起的页面跳动
- 可以设置图片加载前占位的背景

## 使用方法
```vue
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

## 可配置参数

| Prop | Type | Required | Default | Description |
|-------------|------------|--------|-----|-----|
| src | `String` |`Y`| `-` | 图片地址 |
| scale | `Number` |`N`| `1` | 图片缩放倍数 |
| width | `Number` |`N`| `-` | 图片的宽度及水平方向占位，当设置了 scale 时，加完完成之后会以 scale 的倍数进行图片的显示 |
| height | `Number` |`N`| `-` | 同上 |
| occupying-color | `String` |`N`| `transparent` | 图片加载占位背景颜色 |
| img-style | `Object` |`N`| `{}` | 自定义样式 |

## 事件回调

- `fmImageLoaded`: 图片加载完成后触发
