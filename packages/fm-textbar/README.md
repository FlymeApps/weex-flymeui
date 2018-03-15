# fm-textbar

> Flyme 底部文字按钮组件，最多支持两个按钮并排

!> 底部栏将会定位在父元素的底部

<img src="http://image.res.meizu.com/image/flyme-icon/0c4a48c5c46b4a06baa30382a70f50a1z" width=400 style="box-shadow: 0 5px 10px 0 #d9dce3;    border-radius: 4px;" />
<br></br>
<img src="http://image.res.meizu.com/image/flyme-icon/c16481053f7f4ad1adca32480a678368z" width=400 style="box-shadow: 0 5px 10px 0 #d9dce3;    border-radius: 4px;" />

## 使用方法

```vue
<template>
  <div class="mzui-demo">
    <!-- 数组用法 -->
    <fm-textbar :items="btns" @fmTextbarBtnClicked="handle"></fm-textbar>
  </div>
</template>

<script>
import { FmTextbar } from 'weex-flymeui';
const modal = weex.requireModule('modal');

export default {
  components: { FmTextbar },
  data: () => ({
    btns: [{
      title: '取消'
    }, {
      title: '确定'
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

更多详细代码例子可以参考 [demo](https://github.com/Yanjiie/weex-flymeui/blob/master/example/component/textbar/index.vue)

## 可配置参数
| Prop | Type | Required | Default | Description |
|-------------|------------|--------|-----|-----|
| items | `Array[Object]` |`N`| `[]` | 按钮列表，最多两个按钮 |
| items[{`title`}] | `String` |`Y`| `''` | 按钮文案 |
| items[{`color`}] | `String` |`N`| `#198DED` | 按钮的颜色 |
| backgroundColor | `String` |`N`| `#FFFFFF` | btnbar 的背景颜色 |

## 事件回调

- `fmTextbarBtnClicked` 按钮被点击时触发
    - `event.index` 被点击的按钮索引
