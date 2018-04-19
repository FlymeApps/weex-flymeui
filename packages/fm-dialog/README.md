# fm-dialog

> Flyme 弹框组件

!> 注意：组件仅为未完成的 beta 版本，使用方法有可能会变更。

## TODO

* [ ] 修复 Creator 上无法通过 JS 使用弹框的问题

<br/>
<img src="http://image.res.meizu.com/image/flyme-icon/dd5cd5bebc414beb8cf385b528131fb2z" width=400 style="box-shadow: 0 5px 10px 0 #d9dce3;    border-radius: 4px;" />

## 使用方法

```vue
<template>
  <div class="mzui-demo">
    <fm-button class="btn" @buttonClicked="click1">确认弹框</fm-button>
    <fm-button class="btn" @buttonClicked="click2">警告弹框</fm-button>
    <!-- 使用 JS 弹出弹框，在 Creator 中暂不支持 -->
    <fm-button class="btn" @buttonClicked="click3">js 弹出对话框</fm-button>
    <fm-button class="btn" @buttonClicked="click3">js 弹出警告框</fm-button>

    <!-- 确认弹框 -->
    <fm-dialog :show="confirmShow"
               title="退出浏览器并清空历史记录"
               content="退出浏览器并清空历史记录弹框内容区域此处展示描述"
               @fmDialogBtnClicked="btnClick"
               @fmDialogDisappeared="dialogOverlayClick"
               :can-auto-close="true"></fm-dialog>

    <!-- 警告弹框 -->
    <fm-dialog :show="alertShow"
               title="退出浏览器并清空历史记录"
               content="退出浏览器并清空历史记录弹框内容区域此处展示描述"
               @fmDialogBtnClicked="btnClick"
               @fmDialogDisappeared="dialogOverlayClick"
               :can-auto-close="true"></fm-dialog>
  </div>
</template>

<script>
import { FmDialog, confirm, alert } from 'weex-flymeui';
const modal = weex.requireModule('modal');

export default {
  components: { FmDialog },
  data: () => ({
    confirmShow: false,
    alertShow: false,
  }),
  methods: {
    click1 () {
        this.confirmShow = true;
    },
    click2 () {
        this.alertShow = true;
    },
    click3 () {
      confirm({
        title: '这是 js 调用弹出的弹框',
        message: '用户操作后返回的是一个 Promise 对象，可自行做处理。弹框的取消以及确定字体可以通过 cancelText 以及 confirmText 属性进行更改'
      }).then(() => {
        modal.toast({ message: '确定' });
      }, () => {
        modal.toast({ message: '取消' });
      });
    },
    click4() {
      alert({
        title: '这是 js 调用弹出的提示框',
        message: '用户操作后返回的是一个 Promise 对象，可自行做处理。弹框的确定按钮可以通过 confirmText 属性进行更改'
      }).then(() => {
        modal.toast({ message: '提示框消失了' });
      }, () => {
        modal.toast({ message: '点击蒙层消失了' });
      });
    }
    btnClick (btn) {
      if (btn.type === 'cancel') {
        modal.toast({ message: '取消' });
      } else if (btn.type === 'confirm') {
        modal.toast({ message: '确定' });
      } else {
        modal.toast({ message: btn.text });
      }
      this.show = false;
    },
    dialogOverlayClick () {
      this.show = false;
    }
  }
};
</script>
```

更多详细代码例子可以参考 [demo](https://github.com/FlymeApps/weex-flymeui/blob/master/example/component/dialog/index.vue)

## 可配置参数
| Prop | Type | Required | Default | Description |
|-------------|------------|--------|-----|-----|
| show | `Boolean` |`Y`| `false` | 弹出框是否显示 |
| type | `String` |`N`| `confirm` | 弹框类型：`confirm 确认弹框`、`alert 确认弹框` |
| title | `String` |`Y`| `''` | 标题 |
| content | `String` |`Y`| `''` | 内容 |
| cancel-text | `String` |`N`| `取消` | 取消按钮文案 |
| confirm-text | `String` |`N`| `确认` | 确认按钮文案 |
| cancel-color | `String` |`N`| `#198DED` | 取消按钮颜色 |
| confirm-color | `String` |`N`| `#198DED` | 确认按钮颜色 |
| hasAnimation | `Boolean` |`N`| `true` | 是否需要过渡动画 |
| timingFunction | `Array` |`N`| `['ease-out', 'ease-out']` | 动画过渡函数 |
| duration | `String` |`N`| `#198DED` | 确认按钮颜色 |
| overlay-opacity | `Number` |`N`| `0.5` | 蒙层的透明度，在 `Creator` 中不可用 |
| top | `Number` |`N`| `400` | 框体距离屏幕上方的距离，在 `Creator`中 不生效 |
| btnDirection | `String` |`N`| `row` | 按钮排列方式：`row 横向排列`、`column 纵向排列` |
| btns | `Array` |`N`| `[]` | 自定义按钮，可支持多个按钮 |
| btns[{`text`}] | `String` |`Y`| `''` | 按钮文案 |
| btns[{`color`}] | `String` |`N`| `#198DED` | 按钮颜色 |
| btns[{`type`}] | `String` |`N`| `-` | 按钮类型 |
| btns[{`msg`}] | `AnyType` |`N`| `-` | 附带信息，会在按钮点击回调中返回 |


## Slot

`fm-dialog` 提供了多个插槽来供使用者自定义样式。

1. `<slot name"title"></slot>` : 标题插槽
2. `<slot name"content"></slot>` : 内容插槽
3. `<slot name"btn-group"></slot>` : 按钮插槽

*合理使用插槽可以组合多种弹框：*

<img src="http://image.res.meizu.com/image/flyme-icon/a1110146798f4828a395348f2b43d29bz" width=400 style="box-shadow: 0 5px 10px 0 #d9dce3; border-radius: 4px;" />

<br/>
<img src="http://image.res.meizu.com/image/flyme-icon/c587190e399e4b53a2288e96212f5caaz" width=400 style="box-shadow: 0 5px 10px 0 #d9dce3; border-radius: 4px;" />
<br/>

*例子:* 
```vue
<fm-dialog :show="checkListShow"
           title="选择语言"
           @fmDialogBtnClicked="checkListClick"
           @fmDialogDisappeared="checkListOverlayClick"
           :can-auto-close="true"
           :overlayOpacity="0.1">
	<fm-check-list-group slot="content" @fmCheckListGroupChecked="groupChecked">
	<fm-checkbox>简体中文</fm-checkbox>
	<fm-checkbox>繁体中文</fm-checkbox>
	<fm-checkbox>英文</fm-checkbox>
	</fm-check-list-group>
</fm-dialog>

<fm-dialog :show="inputShow"
           title="弹出输入"
           @fmDialogBtnClicked="inputClick"
           @fmDialogDisappeared="inputOverlayClick"
           :can-auto-close="true">
	<fm-input :value="inputText" slot="content" type="text" placeholder="输入点什么.." :autofocus="true" @input="inputing" />
</fm-dialog>
```


## 事件回调

- `fmDialogBtnClicked` 按钮被点击时触发
    - `event.type` 按钮类型
- `fmDialogDisappeared` 按钮消失时触发，通常是蒙层被点击后触发弹框消失。请监听此事件并将 `show` 属性重置

