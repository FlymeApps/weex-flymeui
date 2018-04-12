# fm-input

> Flyme 输入框

!> 由于 `fm-input` 依赖 `weex input component`， 因为 Weex SDK 的版本差异，新版 SDK 中的 input 组件存在 bug，会导致 input 内容无法清空

## 使用方法
```html
<template>
  <div class="mzui-demo">
    <category title="默认的输入框"></category>
    <fm-input placeholder="默认的输入框" :autofocus="true"  />
    <category title="密文模式"></category>
    <fm-input type="password" placeholder="password" />
    <category title="日期输入"></category>
    <fm-input type="time" placeholder="time" />
    <category title="修改 placeholder"></category>
    <fm-input type="text" placeholder="placeholder" />
    <category title="带初始值的输入框"></category>
    <fm-input input-value="value" />
    <category title="限制最大输入长度"></category>
    <fm-input maxlength="20" placeholder="maxlength:20" />
    <category title="输入校验"></category>
    <fm-input type="text" :inputPattern="/^[0-9]{1,20}$/" inputErrorMessage="请输入数字" />
  </div>
</template>

<script>
import { FmInput } from 'weex-flymeui';
export default {
  components: { FmInput }
};
</script>
```

更多详细代码例子可以参考 [demo](https://github.com/FlymeApps/weex-flymeui/blob/master/example/component/input/index.vue)

## 可配置参数
| Prop | Type | Required | Default | Description |
|-------------|------------|--------|-----|-----|
| type | `String` |`N`| `text` | input 类型，默认值是 `text`。可以是 `text`，`date`，`datetime`，`email`， `password`，`tel`，`time`，`url`，`number`。每个 type 值都符合 W3C 标准 |
| defalut-value | `String` |`N`| `-` | input 的默认内容 |
| placeholder | `String` |`N`| `请输入` | 输入提示 |
| disabled | `Boolean` |`N`| `false` | 是否禁用 |
| autofocus | `Boolean` |`N`| `false` | 自动获得输入焦点 |
| maxlength | `Number` |`N`| `max` | 输入的最大长度 |
| return-key-type | `String` |`N`| `default` | 键盘返回键的类型,支持 `defalut`;`go`;`next`;`search`;`send`,`done` |
| inputPattern | `RegExp` |`N`| `-` | 输入框校验正则对象，校验不正确将会显示 `inputErrorMessage` |
| inputErrorMessage | `String` |`N`| `输入有误` | `inputPattern` 匹配不正确时显示的错误信息 |

## 事件回调

- `input 正在输入`
- `change 内容改变`
- `focus 获得焦点`
- `blur 失去焦点`

## 可供外部使用的方法

- `setValue(val)` 设置输入框的内容
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

