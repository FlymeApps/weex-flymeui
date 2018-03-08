# fm-icon

> 提供 Flyme 常用的 Iconfont 图标

## 使用方法
```html
<template>
  <div>
    <fm-icon class="icon" iconStyle='54' value="&#xe6c6;" color='#198ded' />
    <fm-icon class="icon" iconStyle='72' value="&#xe6b6;" color='#04c0cf' />
    <fm-icon class="icon" iconStyle='108' value="&#xe6a3;" color='#de2a2a' />
    <fm-icon class="icon" iconStyle='72' value="&#xe6bb;" color='#7e97ac' />
    <fm-icon class="icon" iconStyle='54' value="&#xe6cb;" color='#ffaf00' />
  </div>
</template>

<script>
import { FmIcon } from 'weex-flymeui';
export default {
  components: { FmIcon }
};
</script>
```

更多详细代码例子可以参考 [demo](https://github.com/Yanjiie/weex-flymeui/blob/master/example/component/icon/index.vue)

## 可配置参数
| Prop | Type | Required | Default | Description |
|-------------|------------|--------|-----|-----|
| name | `String` |`Y`| `wancheng` | icon 名称 |
| color | `String` |`N`| `#666666` | icon 颜色 |
| iconStyle | `Number` `Object` |`N`| `42px` | icon 样式，传入数字则为大小，可传样式对象 |

## 事件回调
- `fmIconClicked` 被点击时触发（将会返回 name）
- `fmIconLongpress` 被长按时触发（将会返回 name）
