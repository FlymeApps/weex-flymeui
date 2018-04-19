# fm-titlebar

> Flyme 顶部导航栏组件

<img src="http://image.res.meizu.com/image/flyme-icon/71dab1114fb04531b0cfe34494f77252z" width=400 style="box-shadow: 0 5px 10px 0 #d9dce3; border-radius: 4px;" />

## 使用方法
```vue
<template>
  <div class="container">
    <text class="text">基本态</text>
    <fm-titlebar title="标题"
                  right-text="更多"
                  background-color="#FFFFFF"
                  @fmRightButtonClicked="fmRightButtonClicked"></fm-titlebar>
    <text class="text">多按钮</text>
    <fm-titlebar title="标题"
                  :rightBtns="btns"
                  @fmRightButtonClicked="fmRightButtonClicked"></fm-titlebar>
  </div>
</template>

<script>
  import { FmTitlebar } from 'weex-flymeui';
  const modal = weex.requireModule('modal');

  export default {
    components: { FmTitlebar },
    data: ()=> ({
      btns: [{
        type: 'icon',
        value: 'paizhao',
        color: '#3BC06B'
      }, {
        type: 'text',
        value: '更多',
        color: '#FC5B23'
      }]
    }),
    methods: {
      fmRightButtonClicked (e) {
        modal.toast({ 'message': 'click rightButton!' + e, 'duration': 1 });
      }
    }
  };
</script>
```

更多详细代码例子可以参考 [demo](https://github.com/FlymeApps/weex-flymeui/blob/master/example/component/titlebar/index.vue)

## 可配置参数
| Prop | Type | Required | Default | Description |
|-------------|------------|--------|-----|-----|
| title | `String` |`Y`| `-` | 标题 |
| title-color | `String` |`N`| `rgba(0, 0, 0, 0.6)` | 标题的颜色 |
| right-text | `String` |`N`| `-` | 右侧 button 的文案 |
| background-color | `String` |`N`| `#FFFFFF` | 背景颜色 |
| left-color | `String` |`N`| `rgba(0, 0, 0, 0.6)` | 返回按钮颜色 |
| statusbar | `Boolean` |`N`| `false` | 是否预留状态栏位置 |
| use-default-return | `Boolean` |`N`| `true` | 是否使用默认的返回 |
| has-prev | `Boolean` | `N` |`true`| 是否存在上一页，此项参数决定左边按钮是否显示 |
| border-style | `Object` | `N` | `-` | 底部边框的样式，允许值：`borderBottomStyle`, `borderBottomWidth`, `borderBottomColor` |
| right-btns | `Object` `Array` | `N` | `-` | 设置右边多按钮，超过 3 个会被截取 |
| show | `Boolean` | `N` | `true` | 是否显示 |

## Slot
如果配置项都不满足你的使用要求，`fm-titlebar` 提供了三个不同的 slot 来提供给用户充分自定义。

1. `<slot name"left"></slot>` : 左边按钮插槽
2. `<slot name"middle"></slot>` : 中间标题插槽
3. `<slot name"right"></slot>` : 右边插槽

```vue
<fm-titlebar>
  <div class="slot-wrap" slot="middle">
    <fm-tag color="#F12528" size="big">精选</fm-tag><text class="title">电影合集</text>
  </div>
</fm-titlebar>
```

## 事件回调

```
@fmTitlebarLeftBtnClicked="fmTitlebarLeftBtnClick"
@fmTitlebarRightBtnClicked="fmTitlebarRightBtnClick"
```
