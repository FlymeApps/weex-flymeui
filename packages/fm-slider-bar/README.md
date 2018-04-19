# fm-slider-bar

> Flyme 风格滑动输入条，基于 [BindingX](https://alibaba.github.io/bindingx/)，请确保已经集成。

<br/>
<img src="http://p1nq9peby.bkt.clouddn.com/weex-flymeui/aff0f70e99c649439e1ced39ab6f826cz.png" width=400 style="box-shadow: 0 5px 10px 0 #d9dce3; border-radius: 4px;" />
<br></br>
<img src="http://p1nq9peby.bkt.clouddn.com/weex-flymeui/1033e906471242db9b088710ad29e77fz.png" width=400 style="box-shadow: 0 5px 10px 0 #d9dce3; border-radius: 4px;" />

## 规则
- 用于选择定义好的一个整数范围中的某个值

## 使用方法
```html
<template>
  <div>
    <category title="基本使用"></category>
    <div class="contaniner">
      <text class="tip">当前值: {{ value }}</text>
      <fm-slider-bar
        @updateValue="updateValue"
        :indicator="true"
        :defaultValue="value"></fm-slider-bar>
    </div>
  </div>
</template>

<script>
import { FmSliderBar } from 'weex-flymeui';

export default {
  components: { FmSliderBar },
  data () {
    return {
      value: 0
    };
  },
  methods: {
    updateValue (value) {
      this.value = value;
    }
  }
};
</script>
```

更多详细代码例子可以参考 [demo](https://github.com/FlymeApps/weex-flymeui/blob/master/example/component/sliderBar/index.vue)

## 可配置参数
| Prop | Type | Required | Default | Description |
|-------------|------------|--------|-----|-----|
| length | `Number` |`Y`| `800` | 滑动条的长度 |
| height | `Number` |`N`| `'6'` | 滑动条的高度 |
| min | `Number` |`N`| `0` | 滑动条最小值 |
| max | `Number` |`N`| `100` | 滑动条最大值 |
| indicator | `Boolean` |`N`| `false` | 是否带有指示器 |
| defaultValue | `Number` |`N`| `0` | 默认值 |
| disabled | `Boolean` |`N`| `false` | 是否禁用 |
| invalidColor | `Boolean` |`N`| `false` | 滑动条底色 |
| validColor | `Boolean` |`N`| `false` | 有效颜色 |
| disabledColor | `Boolean` |`N`| `false` | 禁用颜色 |

## 事件回调

- `updateValue` 输入值产生变化时触发
    - `argument`: 当前值

## TODO
- [ ] 支持级别强度
- [ ] 支持光环样式
