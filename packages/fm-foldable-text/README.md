# fm-foldable-text

> 在大段文字上添加一个更多按钮

## 规则
- 支持三种文字大小
- 支持设置默认状态

## 使用方法
```html
<template>
  <div class="mzui-demo">
    <!-- 可折叠文本 -->
    <fm-foldable-text :text="text" width="340"></fm-foldable-text>
    <!-- 不同大小 -->
    <fm-foldable-text :text="text" width="340"></fm-foldable-text>
    <fm-foldable-text :text="text" size="large" width="340"></fm-foldable-text>
    <fm-foldable-text :text="text" size="huge" width="340"></fm-foldable-text>
    <!-- 限制不同行数 -->
    <fm-foldable-text :text="text" width="340" lines="3"></fm-foldable-text>
    <!-- 默认不折叠状态 -->=
    <fm-foldable-text :text="text" width="340" :folded="false"></fm-foldable-text>
    <!-- 自定义样式 -->
    <fm-foldable-text :text="text" width="340" :textStyle="{fontSize: 18, lineHeight: 30, color: 'red'}" :tipStyle="{fontSize: 18, lineHeight: 30, color: 'green'"></fm-foldable-text>
  </div>
</template>

<script>
import { FmFoldableText } from 'weex-flymeui';

export default {
  components: { FmFoldableText },
  data: () => ({
    text: '该标准从一开始就是针对 JavaScript 语言制定的，但是之所以不叫 JavaScript，有两个原因。一是商标，Java 是 Sun 公司的商标，根据授权协议，只有 Netscape 公司可以合法地使用 JavaScript 这个名字，且 JavaScript 本身也已经被 Netscape 公司注册为商标。二是想体现这门语言的制定者是 ECMA，不是 Netscape，这样有利于保证这门语言的开放性和中立性。'
  })
};
</script>
```
更多详细代码例子可以参考 [demo](https://github.com/FlymeApps/weex-flymeui/blob/master/example/component/foldableText/index.vue)

## 可配置参数

| Prop | Type | Required | Default | Description |
|-------------|------------|--------|-----|-----|
| text | `String` | `Y` |`''` | 文本内容  |
| width | `Number` | `N` |`1020` | 文本内容  |
| size | `String` | `N` |`'small'` | 文本大小，有 small, large, huge 三种  |
| folded | `Boolean` | `N` |`true` | 文本是否折叠，默认为 true |
| textStyle | `Object` | `N` |`{}` | 自定义文本的样式 |
| tipStyle | `Object` | `N` |`{}` | 自定义提示文字的样式 |
