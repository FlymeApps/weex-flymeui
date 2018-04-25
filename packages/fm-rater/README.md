# fm-rater

> Flyme 风格星级评分组件

## 规则

- 支持单显示模式
- 提供两种大小
- 提供三种不同的主题模式，来适应不同的应用场景

***normal:***

<img src="http://image.res.meizu.com/image/flyme-icon/4800e3052c6a40e0b64bad60458549c7z" width=400 style="box-shadow: 0 5px 10px 0 #d9dce3; border-radius: 4px;" />

***special:***

<img src="http://image.res.meizu.com/image/flyme-icon/b855f079c0844683874df56b119bffe9z" width=400 style="box-shadow: 0 5px 10px 0 #d9dce3; border-radius: 4px;" />

***dark:***

<img src="http://image.res.meizu.com/image/flyme-icon/ed825f4799f4471cbe85278031a9d774z" width=400 style="box-shadow: 0 5px 10px 0 #d9dce3; border-radius: 4px;" />

## 使用方法

```html
<template>
  <div class="mzui-demo">
    <!-- 默认使用 -->
    <fm-rater theme="normal"></fm-rater>
    <!-- 不同大小 -->
    <fm-rater theme="normal" size='small'></fm-rater>
    <!-- 单色模式主题 -->
    <fm-rater theme="normal" theme="special"></fm-rater>
    <!-- 夜间模式主题 -->
    <fm-rater theme="normal" theme="dark"></fm-rater>
    <!-- 初始化分数 -->
    <fm-rater :score="2" :canChange="false"></fm-rater>
    <!-- 分数更改回调 -->
    <fm-rater @fmRaterScoreChanged="scoreChanged"></fm-rater>
  </div>
</template>

<script>
import { FmRater } from 'weex-flymeui';

export default {
  components: { FmRater },
  methods: {
    scoreChanged (e) {
      modal.toast({ message: e });
    }
  }
};
</script>
```

更多详细代码例子可以参考 [demo](https://github.com/FlymeApps/weex-flymeui/blob/master/example/component/rater/index.vue)

## 可配置参数
| Prop | Type | Required | Default | Description |
|-------------|------------|--------|-----|-----|
| score | `Number` |`N`| `0` | 当前分数 |
| fullScore | `Number` |`N`| `10` | 最大分数 |
| size | `String` |`N`| `big` | 大小，有 small 和 big 两种 |
| theme | `String` |`N`| `normal` | 主题，有 normal、special、dark 三种 |
| can-change | `Boolean` |`N`| `true` | 是否允许更改分数，当为 true 时，用户可以通过点击或者滑动以 0.5 格步进更改分数值 |
| can-slide | `Boolean` |`N`| `true` | 是否允许滑动更改分数，当为 false 时，用户只能通过点击更改分数值 |
| star-img | `Array String` |`N`| `-` | 自定义星星图片，应传入长度为 5 的数组或字符串 |
| bg-img | `Array String` |`N`| `-` | 自定义星星背景图片 |
## 事件回调

- `fmRaterScoreChanged`: 分数更改时触发
 - `score`: 当前分数

