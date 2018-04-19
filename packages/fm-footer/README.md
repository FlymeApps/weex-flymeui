# fm-footer

> Flyme 底栏容器，将会定位在父元素的底部

<img src="http://image.res.meizu.com/image/flyme-icon/fbedb13d73514bef8e0af45b2c179ccdz" width=400 style="box-shadow: 0 5px 10px 0 #d9dce3; border-radius: 4px;" />
<br></br>
<img src="http://image.res.meizu.com/image/flyme-icon/4bbc52b26c7841c98baf90e5fc1ad216z" width=400 style="box-shadow: 0 5px 10px 0 #d9dce3; border-radius: 4px;" />
<br></br>
<img src="http://image.res.meizu.com/image/flyme-icon/69f06632854941c78316306edf4ef7b3z" width=400 style="box-shadow: 0 5px 10px 0 #d9dce3; border-radius: 4px;" />

## 使用方法

```vue
<template>
  <div class="mzui-demo">
    <fm-footer padding-size="small">
      <div class="price-wrap">
        <text class="label">应付</text>
        <text class="price">20</text>
        <text class="label">元</text>
      </div>
      <fm-button theme="firebrick" size="middle" animated>立即支付</fm-button>
    </fm-footer>
  </div>
</template>

<script>
import { FmFooter, FmButton } from 'weex-flymeui';
export default {
  components: { FmBtnbar, FmButton }
};
</script>
```

更多详细代码例子可以参考 [demo](https://github.com/FlymeApps/weex-flymeui/blob/master/example/component/footer/index.vue)

## 可配置参数
| Prop | Type | Required | Default | Description |
|-------------|------------|--------|-----|-----|
| padding-size | `String` |`N`| `-` | 边距大小，不设置则为无边距，边距有`small 小边距`, `middle 中等边距`和`big 大边距`三种 |
| backgroundColor | `String` |`N`| `#FFFFFF` | 背景颜色 |

## Slot

默认插槽
