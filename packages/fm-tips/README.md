# fm-tips

> 用户引导提示

## 规则

- 支持左右两种位置
- 支持自定义背景颜色

<img src="http://image.res.meizu.com/image/flyme-icon/6cd42e7295ca419482199b7e64f0a383z" width=400 style="box-shadow: 0 5px 10px 0 #d9dce3; border-radius: 4px;" />

## 使用方法
```html
<template>
  <div class="mzui-demo">
		<fm-tips message="这是提示" />
		<fm-tips message="靠右的提示" right />
		<fm-tips message="这是提示" bgColor="##28bc92" />
		<fm-tips>
				<text class="btnText" @click="copy">复制</text>
				<text class="split"></text>
				<text class="btnText" @click="paste">粘贴</text>
		</fm-tips>
  </div>
</template>

<script>
import { FmTips } from 'weex-flymeui';
const modal = weex.requireModule('modal');
export default {
  components: { FmTips },
  methods: {
    close () {
      modal.toast({ message: 'close' });
    },
    copy () {
      modal.toast({ message: 'copy' });
    },
    paste () {
      modal.toast({ message: 'paste' });
    }
  }
};
</script>
```
更多详细代码例子可以参考 [demo](https://github.com/FlymeApps/weex-flymeui/blob/master/example/component/tips/index.vue)

## 可配置参数

| Prop | Type | Required | Default | Description |
|-------------|------------|--------|-----|-----|
| message | `String` | `Y` |`''` | 引导提示的内容，如需要设置纯文本以外的内容，请使用 slot |
| bg-color | `String` | `N` |`'#198DED'` | 引导提示的背景颜色 |
| position | `String` | `N` |`'left'` | 显示位置，有 left, right 两种 |

## 事件回调

- `close`: 引导提示被关闭时触发
