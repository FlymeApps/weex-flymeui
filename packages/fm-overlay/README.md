# fm-overlay

> 一个占满 viewport 的半透明覆盖层，可以使用在提示型组件或场景中。

<video src="http://baas.dfs.flyme.cn/group3/M05/B5/B1/CgOUhlpLcCyAGgXDABMiUByYU7s066.mp4" style="width: 375px;" controls="controls"></video>

## 使用方法
```html
<template>
  <div class="wrapper">
    <div class="btn" @click="openOverlay">
      <text class="btn-txt">点击打开蒙层</text>
    </div>
    <fm-overlay
      :show="show"
      opacity="0.6"
      @fmOverlayBodyClicked="fmOverlayBodyClicked"></wxc-overlay>
  </div>
</template>
<script>
  import { FmOverlay } from 'weex-flymeui';
  export default {
    components: { FmOverlay },
    data: () => ({
      show: false
    }),
    methods: {
      openOverlay () {
        this.show = true;
      },
      fmOverlayBodyClicked () {
        this.show = false;
      }
    }
  };
</script>
```
更多详细代码例子可以参考 [demo](https://github.com/FlymeApps/weex-flymeui/blob/master/example/component/overlay/index.vue)

## 可配置参数
| Prop | Type | Required | Default | Description |
|-------------|------------|--------|-----|-----|
| show | `Boolean` |`Y`| `false` | 蒙层是否显示，单项数据流从父组件传入 |
| duration | `Number` |`N`| `300` | 动画过渡时间。默认为 300 |
| hasAnimation | `Boolean` |`N`| `true` | 是否使用动画过渡 |
| timingFunction | `Array` |`N`| `['ease-in','ease-out']` | 蒙层显示和隐藏动画函数 |
| opacity | `Number` |`N`| `0.5` | 蒙层的透明度 |
| can-auto-close | `Boolean` |`N`| `true` | 是否可以点击自动关闭 |

## 事件回调

- `fmOverlayBodyClicked` 消失后触发
- `fmOverlayBodyClicking` 被点击时，消失前触发
