# fm-popover

> 在页面上弹出一个浮层气泡菜单，可供用户做更多的操作。菜单弹出时，点击菜单外任意区域隐藏。

## 规则
- 常用于 titleBar 右侧按钮显示更多的操作
- 在指定坐标位置弹出菜单，点击菜单外任意区域隐藏
- 支持上、下、左、右、中四个方向的出现动画效果

## 使用方法

```vue
<template>
  <div>
    <fm-titlebar title="点击右边按钮试试"
                 :rightBtns="{
                   type: 'icon',
                   value: 'gengduo'
                 }"
                 @fmTitlebarRightBtnClicked="show('top')" />
                 
    <fm-popover ref="popover-top"
                @fmPopoverBtnClicked="onClicked"
                :position="{ x: -1, y: 144, pos: 'top' }"
                :buttons="buttons"></fm-popover>
  </div>
</template>

<script>
import { FmPopover, FmTitlebar } from 'weex-flymeui';
const modal = weex.requireModule('modal');

export default {
  components: { FmPopover, FmTitlebar },
  data: () => ({
    overShow: false,
    buttons: [{
      text: '查看',
      icon: 'saomiao'
    }, {
      text: '查看'
    }, {
      text: '查看'
    }]
  }),
  methods: {
    show (pos) {
      this.$refs[`popover-${pos}`].visible(true);
    },
    onClicked (e) {
      modal.toast({ message: e.index });
    }
  }
};
</script>
```
更多详细代码例子可以参考 [demo](https://github.com/FlymeApps/weex-flymeui/blob/master/example/component/popover/index.vue)

## 可配置参数
| Prop | Type | Required | Default | Description |
|-------------|------------|--------|-----|-----|
| buttons | `Array` |`Y`| `[]` | 气泡菜单按钮数据源 |
| buttons[{`text`}] | `String` |`Y`| `''` | 按钮文案 |
| buttons[{`icon`}] | `String` |`N`| `-` | 按钮左侧的 icon，请参照 [fm-icon](https://flymeapps.github.io/weex-flymeui/#/packages/fm-icon/) |
| position | `Object` |`Y`| `{}` | 菜单的位置，x > 0 为左边距，x < 0 为右边距，y 同理 |
| overlay-opacity | `Number` |`N`| `0` | 蒙层的透明度 |
| hasAnimation | `Boolean` |`N`| `true` | 是否使用动画过渡 |

## 可供外部使用的方法
- `visible(bool)` 在 fm-popover 上绑定 ref 后，调用此方法可控制菜单的显示和隐藏

## 事件回调
- `fmPopoverBtnClicked` 菜单按钮被点击时触发，事件对象中包含 `index 所点击按钮的索引值`

## Slot

暂无
