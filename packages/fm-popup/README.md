# fm-popup

> 是一款带有手风琴动画效果的侧弹窗口，可以使用在侧弹菜单、侧弹选择、操作提示等场景中。

### 规则
- 常用于筛选面板组件的包裹组件
- 从顶部或底部浮出的模态，点击蒙层进行关闭
- 支持主动关闭

## 使用方法
```vue
<template>
  <div>
    <div @click="openBottomPopup">
      <text class="txt">点击弹出底部面板</text>
    </div>
    <fm-popup popup-color="blue"
              :show="isBottomShow"
              @fmPopupOverlayClicked="overlayClicked"
              pos="bottom"
              height="400">
      <fm-text>遵循 Flyme 系统设计风格、基于 Weex 的跨平台通用组件库。
      </fm-text>
    </fm-popup>
  </div>
</template>

<script>
  import { FmPopup, FmText } from 'weex-flymeui';
  export default {
    components: { FmPopup, FmText },
    data: () => ({
      isBottomShow: false,
      height: 400
    }),
    methods: {
      openBottomPopup () {
        this.isBottomShow = true;
      },
      overlayClicked () {
        this.isBottomShow = false;
      }
    }
  };
</script>
```
更多详细代码例子可以参考 [demo](https://github.com/FlymeApps/weex-flymeui/blob/master/example/component/overlay/index.vue)

## 可配置参数

| Prop | Type | Required | Default | Description |
|-------------|------------|--------|-----|-----|
| show | `Boolean` |`Y`|`false` | 是否打开 popup  |
| pos | `String` | `N`|`bottom` | 弹出位置，有`top`/`bottom`/`left`/`right`四种|
| height | `String` |`N`| `840` | 弹出窗的高度，当弹出方向为上或下时生效，弹出方向为左或右的时候高度为 100%  |
| width | `String` |`N`| `750` | 弹出窗的宽度，当弹出方向为左或右时生效，弹出方向为上或下的时候宽度为 100%  |
| popup-color | `String` |`N`| `#FFFFFF` | 弹出层的颜色 |
| stand-out | `Number` |`N`| `0` | 底部突出高度 |
| animation | `Object` |`N`| `{timingFunction: 'ease-in'}` | 自定义面板动画 |
| overlay-cfg | `Object` |`N`| `{}` | [fm-overlay](https://github.com/FlymeApps/weex-flymeui/blob/master/packages/fm-overlay/README.md)配置参数|

## 事件回调

- `fmPopupOverlayClicked`: 蒙层被点击时触发，请监听此事件并设置面板关闭

## 可供外部使用的方法

- `hide()`: 关闭面板
