# fm-searchbar

> Flyme 顶部导航栏搜索组件

!> fm-searchbar 中的搜索组件与 [Weex 内置 input 组件](https://weex.incubator.apache.org/cn/references/components/input.html#yue-shu) 具有相同的特性约束。

## 使用方法
```html
<template>
  <div class="container">
    <text class="text">顶部导航栏搜索组件</text>
    <fm-searchbar
      background-color="#FFFFFF"
      search-text="搜索"
      :value="searchText"
      @fmSearchbarSubmit="fmSearchbarSubmit" />
  </div>
</template>

<script>
  import { FmSearchbar } from 'weex-flymeui';
  const modal = weex.requireModule('modal');

  export default {
    components: { FmSearchbar },
    data: ()=> ({
      searchText: '请输入搜索内容'
    }),
    methods: {
	    fmSearchbarSubmit(e) {
	      modal.toast({ message: '输入的内容是' + e.value })
	    }
    }
  };
</script>
```

更多详细代码例子可以参考 [demo](https://github.com/Yanjiie/weex-flymeui/blob/master/example/component/searchbar/index.vue)

## 可配置参数
| Prop | Type | Required | Default | Description |
|-------------|------------|--------|-----|-----|
| input-value | `String` `Number` |`N`| `''` | 搜索框的输入内容 |
| placeholder | `String` |`N`| `-` | 输入提示文案 |
| placeholder-color | `String` |`N`| `rgba(0, 0, 0, 0.4)` | 输入提示文案的颜色 |
| left-color | `String` |`N`| `rgba(0, 0, 0, 0.6)` | 返回按钮颜色 |
| input-background | `String` |`N`| `rgba(0, 0, 0, 0.05)` | 输入框的背景颜色 |
| icon-color | `String` |`N`| `rgba(0, 0, 0, 0.4)` | 搜索 icon 的颜色 |
| search-text | `String` |`N`| `搜索` | 搜索按钮文案 |
| search-text-style | `Object` |`N`| `-` | 搜索按钮样式 |
| background-color | `String` |`N`| `#FFFFFF` | 背景颜色 |
| statusbar | `Boolean` |`N`| `false` | 是否预留状态栏位置 |
| use-default-return | `Boolean` |`N`| `true` | 是否使用默认的返回 |
| hasPrev | `Boolean` | `N` |`true`| 是否存在上一页，此项参数决定左边按钮是否显示 |
| border-style | `Object` | `N` | `-` | 底部边框的样式，允许值：`borderBottomStyle`, `borderBottomWidth`, `borderBottomColor` |
| input-color | `String` | `N` | `#616161` | 输入字体颜色 |
| autofocus | `Boolean` | `N` | `false` | 输入框自动获得焦点 |
| disabled | `Boolean` | `N` | `false` | 禁用输入框 |
| input-type | `String` | `N` | `text` | 输入框类型, 更多类型请参照 [input 内置组件](https://weex.incubator.apache.org/cn/references/components/input.html#te-xing)  | 
| return-key-type | `String` | `N` | `search` | 输入键盘回车键类型, 更多类型请参照 [input 内置组件](https://weex.incubator.apache.org/cn/references/components/input.html#te-xing) |
| show | `Boolean` | `N` | `true` | 是否显示 |

## Slot
如果配置项都不满足你的使用要求，`fm-searchbar` 提供了三个不同的 slot 来提供给用户充分自定义。

1. `<slot name"left"></slot>` : 左边按钮插槽
2. `<slot name"input-right"></slot>` : 输入框右侧插槽
3. `<slot name"right"></slot>` : 右边搜索按钮插槽

```html
<category title="插槽"></category>
<fm-searchbar
  @fmSearchbarSubmit="submit">
  <fm-icon slot="input-right" iconStyle='66' value="&#xe6e9;" color='rgba(0, 0, 0, 0.6)' />
</fm-searchbar>
<fm-searchbar
  @fmSearchbarSubmit="submit">
  <fm-icon slot="left" iconStyle='66' value="&#xe6e9;" color='rgba(0, 0, 0, 0.6)' />
</fm-searchbar>
<fm-searchbar
  @fmSearchbarSubmit="submit">
  <fm-icon slot="right" iconStyle='66' value="&#xe6e9;" color='rgba(0, 0, 0, 0.6)' />
</fm-searchbar>
```

## 事件回调

```
// 键盘回车键被按下或点击搜索按钮时触发
@fmSearchbarSubmit="fmSearchbarSubmit"
// 左边按钮被点击时触发
@fmSearchbarLeftBtnClicked="fmSearchbarLeftBtnClick"
// input 内置组件事件
@input="onInput"
// focus 内置组件事件
@focus="onFocus"
// blur 内置组件事件
@blur="onBlur"
```

## 可供外部使用的方法

- `setValue(val)`
  - 设置输入框的内容
- `focus()`
	`focus()` 方法用于将内置 `input` 组件聚焦。
- `blur()`
	`blur()` 方法用于从内置 `input` 组件中移除焦点并关闭软键盘（如果它具有焦点）。
- `setSelectionRange(selectionStart,selectionEnd)` 设置文本选区
	- `selectionStart {number}`: 设置文本选区的起始点
	- `selectionEnd {number}`: 设置文本选区的起终点
- `getEditSelectionRange(callback[selectionStart,selectionEnd])` 设置文本选区
	- `selectionStart {number}`: 获取文本选区的起始点
	- `selectionEnd {number}`: 获取文本选区的起终点