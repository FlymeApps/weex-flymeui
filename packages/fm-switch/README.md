# fm-switch

> Flyme 风格开关按钮组件

![](http://image.res.meizu.com/image/flyme-icon/b4d8e65d3c8c4c7aa1ea341f037267f9z)
## 使用方法
```vue
<template>
  <div class="container">
    <text class="text">基本态</text>
    <fm-switch />
    <text class="text">系统样式</text>
    <fm-switch common />
    <text class="text">自定义颜色</text>
    <fm-switch
      border-color="red" 
      background-color="green" 
      focus-color="gray" 
      blur-color="white" />
    <text class="text">禁用状态</text>
    <fm-switch disabled />
  </div>
</template>

<script>
  import { FmSwitch } from 'weex-flymeui';
  export default {
    components: { FmSwitch }
  };
</script>
```

更多详细代码例子可以参考 [demo](https://github.com/Yanjiie/weex-flymeui/blob/master/example/component/switch/index.vue)

## 可配置参数
| Prop | Type | Required | Default | Description |
|-------------|------------|--------|-----|-----|
| common | `Boolean` |`N`| `false` | 使用系统样式 |
| checked | `Boolean` |`N`| `false` | 控制选中状态 |
| disabled | `Boolean` |`N`| `false` | 禁用按钮 |
| focus-color | `String` |`N`| `#FFFFFF` | 球的聚焦颜色 |
| blur-color | `String` |`N`| `#FFFFFF` | 球的失焦颜色 |
| border-color | `String` |`N`| `#FFFFFF` | 边框颜色 |
| background-color | `String` |`N`| `#198DED` | 背景颜色 |


## 事件回调

```
@fmSwitchStateChange="fmSwitchStateChange"
```
