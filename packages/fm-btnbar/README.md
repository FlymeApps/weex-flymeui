# fm-btnbar

> Flyme 底部栏腰圆按钮，最多支持两个按钮并排，可自定义

!> 底部栏将会定位在父元素的底部

<img src="http://image.res.meizu.com/image/flyme-icon/fbedb13d73514bef8e0af45b2c179ccdz" width=400 style="box-shadow: 0 5px 10px 0 #d9dce3; border-radius: 4px;" />
<br></br>
<img src="http://image.res.meizu.com/image/flyme-icon/4bbc52b26c7841c98baf90e5fc1ad216z" width=400 style="box-shadow: 0 5px 10px 0 #d9dce3; border-radius: 4px;" />

## 使用方法

```vue
<template>
  <div class="mzui-demo">
    <!-- 数组用法 -->
    <fm-btnbar @fmBtnbarBtnClicked="handle" :items="btns"></fm-btnbar>
    <!-- 其他用法 -->
    <fm-btnbar>
      <fm-button size="large" disabled>取消订单</fm-button>
      <fm-button size="large" @buttonClick="handle">提交订单</fm-button>
    </fm-btnbar>
  </div>
</template>

<script>
import { FmBtnbar, FmButton } from 'weex-flymeui';
const modal = weex.requireModule('modal');

export default {
  components: { FmBtnbar, FmButton },
  data: () => ({
    btns: [{
      title: '取消订单',
      disabled: true
    }, {
      title: '提交订单',
      theme: 'firebrick'
    }];
  }),
  methods: {
    handle (e) {
      modal.toast({ message: '按钮被点击了' });
    }
  }
};
</script>
```

更多详细代码例子可以参考 [demo](https://github.com/FlymeApps/weex-flymeui/blob/master/example/component/btnbar/index.vue)

## 可配置参数
| Prop | Type | Required | Default | Description |
|-------------|------------|--------|-----|-----|
| items | `Array[Object]` |`N`| `[]` | 按钮列表，最多两个按钮，按钮的配置请参照 [fm-button](/packages/fm-button/) |
| backgroundColor | `String` |`N`| `#FFFFFF` | btnbar 的背景颜色 |

## 事件回调

- `fmBtnbarBtnClicked` 按钮被点击时触发
    - `event.index` 被点击的按钮索引
