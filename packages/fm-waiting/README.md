# fm-waiting

> Flyme 加载中对话框

## 规则
- 给 `fm-waiting` 添加 `ref`，调用 `active` 方法显示对话框
- 为了视觉效果，`fm-waiting` 会至少加载 0.5s

## 使用方法

```vue
<template>
  <div class="mzui-demo">
    <div class="btn-wrap">
      <fm-button size="huge" @buttonClicked="openCanClose" color="#dc2a2a">打开可关闭 waiting</fm-button>
      <fm-button size="huge" @buttonClicked="openCanClose" color="#04c0cf">最少加载 0.5s</fm-button>
      <fm-button size="huge" @buttonClicked="openCantClose">打开不可关闭 waiting(慎点)</fm-button>
    </div>

    <fm-waiting
      ref="fm-waiting"
      title="FlymeUI"
      :can-auto-close="canAutoClose"
      @fmWaitingDisappeared="fmWaitingDisappeared"></fm-waiting>
  </div>
</template>

<script>
import { FmWaiting, FmButton } from 'weex-flymeui';
import Title from '../../_mods/title.vue';

export default {
  components: { FmWaiting, FmButton },
  data: () => ({
    canAutoClose: true
  }),
  methods: {
    openCanClose () {
      this.canAutoClose = true;
      this.$refs['fm-waiting'].active();
    },
    openCantClose () {
      this.canAutoClose = false;
      this.$refs['fm-waiting'].active();
      setTimeout(() => {
        this.$refs['fm-waiting'].hide();
      }, 6000);
    }
  }
};
</script>
```

更多详细代码例子可以参考 [demo](https://github.com/FlymeApps/weex-flymeui/blob/master/example/component/waiting/index.vue)

## 可配置参数

| Prop | Type | Required | Default | Description |
|-------------|------------|--------|-----|-----|
| title | `String` |`Y`| `-` | 标题 |
| backgroundOpacity | `Number` |`N`| `0.7` | loading 背景蒙层透明度 |
| canAutoClose | `Boolean` |`N`| `true` | 点击蒙层是否触发关闭 |

## 可供外部调用的方法

- `active`: 显示对话框
- `hide`: 隐藏对话框

给 `fm-waiting` 添加 `ref`，调用 `active` 方法显示对话框

*例子：*

```javascript
// 显示
this.$refs['fm-waiting'].active();
// 隐藏
this.$refs['fm-waiting'].hide();
```

## 事件回调

- `fmWaitingAppeared`: 对话框显示时触发
- `fmWaitingDisappeared`: 对话框消失时触发


