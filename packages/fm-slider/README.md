# fm-slider

> 媲美原生的 Flyme 轮播组件 ~

!> `fm-slider`的滑动动画依赖于 [BindingX 解决方案](https://alibaba.github.io/bindingx/) 使用前请根据 [接入文档](https://github.com/alibaba/bindingx/blob/master/README_cn.md) 确保 App 已经支持。  **注意：组件仅为未完成的 beta 版本，使用方法有可能会变更。**

## TODO

* [x] 支持单张图片（默认状态）
* [x] 事件回调
* [x] 卡片样式自定义
* [ ] slot 支持
* [x] 支持 ActiveView
* [ ] 支持初始化页数
* [ ] 支持手动切换页数

<br/>
<img src="http://image.res.meizu.com/image/flyme-icon/931c7561cc5e43618d20278c173dde59z" width=400 style="box-shadow: 0 5px 10px 0 #d9dce3;    border-radius: 4px;" />

## 使用方法

```vue
<template>
  <scroller class="wrap">
    <fm-slider :items="items" :auto-play="true" :interval="4000"></fm-slider>
  </scroller>
</template>

<style scoped>
  .wrap {
    flex: 1;
    width: 1080px;
    overflow: hidden;
  }
</style>

<script>
import { FmSlider } from 'weex-flymeui';
export default {
  components: { FmSlider, FmButton, FmText, FmFooter },
  data: () => ({
    items: [
      {
        src: 'http://gw.alicdn.com/imgextra/i4/169/TB2TlW1aLuSBuNkHFqDXXXfhVXa_!!169-0-lubanu.jpg_q50.jpg'
      },
      {
        src: 'http://gw.alicdn.com/imgextra/TB2nu8oev5TBuNjSspcXXbnGFXa_!!103-0-lubanu.jpg_q50.jpg'
      },
      {
        src: 'http://gw.alicdn.com/imgextra/TB2dprKdFuWBuNjSszbXXcS7FXa_!!124-0-luban.jpg_q50.jpg'
      },
      {
        src: 'http://img.alicdn.com/imgextra/i4/18/TB28vYEdL9TBuNjy0FcXXbeiFXa_!!18-0-luban.jpg_q50.jpg'
      },
      {
        src: 'http://aecpm.alicdn.com/simba/img/TB14ab1KpXXXXclXFXXSutbFXXX.jpg_q50.jpg'
      }
    ]
  })
};
</script>
```

更多详细代码例子可以参考 [demo](https://github.com/Yanjiie/weex-flymeui/blob/master/example/component/slider/index.vue)

## 可配置参数
| Prop | Type | Required | Default | Description |
|-------------|------------|--------|-----|-----|
| items | `Array[Object]` |`Y`| `[]` | 图片数组 |
| items[{`src`}] | `String` |`Y`| `''` | 图片地址，可使用 act |
| auto-play | `Boolean` |`N`| `false` | 是否自动播放 |
| interval | `Number` |`N`| `4000` | 自动播放间隔时间 |

## slot

**TODO**

## 事件回调

**TODO**
