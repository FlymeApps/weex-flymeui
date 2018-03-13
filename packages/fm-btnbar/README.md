# fm-btnbar

> Flyme 底部栏腰圆按钮，最多支持两个按钮并排，可自定义

<img src="http://image.res.meizu.com/image/flyme-icon/fbedb13d73514bef8e0af45b2c179ccdz" width=400 style="box-shadow: 0 5px 10px 0 #d9dce3;    border-radius: 4px;" />
<br></br>
<img src="http://image.res.meizu.com/image/flyme-icon/4bbc52b26c7841c98baf90e5fc1ad216z" width=400 style="box-shadow: 0 5px 10px 0 #d9dce3;    border-radius: 4px;" />

## 使用方法

```vue
<template>
  <div class="mzui-demo">
      <!-- 单个按钮 -->
      <fm-btnbar @fmBtnbarBtnClicked="handle">
          <fm-btnbar-item>开始</fm-btnbar-item>
      </fm-btnbar>
      <!-- 最多两个按钮 -->
      <fm-btnbar @fmBtnbarBtnClicked="handle">
        <fm-btnbar-item disabled>取消订单</fm-btnbar-item>
        <fm-btnbar-item>提交订单</fm-btnbar-item>
      </fm-btnbar>
      <!-- 数组用法 -->
      <fm-btnbar :items="btns" @fmBtnbarBtnClicked="handle" />
  </div>
</template>

<script>
import { FmBtnbar, FmBtnbarItem, FmIcon } from '../../../index';
const modal = weex.requireModule('modal');

export default {
  components: { FmBtnbar, FmBtnbarItem },
  data: () => ({
    btns: [{
      title: '取消订单',
      disabled: true
    }, {
      title: '提交订单'
    }]
  }),
  methods: {
    handle (e) {
      modal.toast({ message: '按钮被点击了' });
    }
  }
};
</script>
```

更多详细代码例子可以参考 [demo](https://github.com/Yanjiie/weex-flymeui/blob/master/example/component/btnbar/index.vue)

## 可配置参数
| Prop | Type | Required | Default | Description |
|-------------|------------|--------|-----|-----|
| items | `Array[Object]` |`N`| `[]` | 按钮列表，最多两个按钮，按钮的配置请参照 [fm-btnbar-item 的使用](/packages/fm-btnbar/?id=fm-btnbar-item-%e7%9a%84%e4%bd%bf%e7%94%a8) |
| backgroundColor | `String` |`N`| `#FFFFFF` | btnbar 的背景颜色 |

## 事件回调

- `fmBtnbarBtnClicked` 按钮被点击时触发
    - `event.index` 被点击的按钮索引


## fm-btnbar-item 的使用

| Prop | Type | Required | Default | Description |
|-------------|------------|--------|-----|-----|
| title | `String` |`Y`| `-` | 按钮的文案 |
| theme | `String` |`N`| `blue` | 按钮的主题色名称，请参照 [Flyme 主题](/guide/theme?id=flyme-%e4%b8%bb%e9%a2%98) |
| title-color | `String` |`N`| `#FFFFFF` | 按钮文字的颜色 |
| normal-color | `String` |`N`| `''` | 按钮 normal 状态下的颜色，优先级最高 |
| active-color | `String` |`N`| `''` | 按钮 active 状态下的颜色，优先级最高 |
| disabled | `Boolean` |`N`| `false` | 是否禁用按钮 |
| disabledColor | `String` |`N`| `#B2B2B2` | 按钮禁用置灰后的颜色 |

## slot

`fm-btnbar-item ` 提供了以下插槽供用户自定义：

  - `title`: 按钮标题插槽

### 例子
```vue
<fm-btnbar @fmBtnbarBtnClicked="handle">
    <fm-btnbar-item theme="limegreen">
    <div class="custom" slot="title" slot-scope="props">
        <fm-icon name="bianji" icon-style="48" color="#FFFFFF"></fm-icon>
        <text class="custom-txt">编辑</text>
    </div>
    </fm-btnbar-item>
</fm-btnbar>
```

