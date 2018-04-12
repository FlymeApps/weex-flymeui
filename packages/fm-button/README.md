# fm-button

> Flyme 常用按钮

<img src="http://baas.dfs.flyme.cn/group4/M03/8E/66/CgOUYFqowNiABMNzAAFlre5uGR8199.png" width=400 style="box-shadow: 0 5px 10px 0 #d9dce3;    border-radius: 4px;" />

## 使用方法
```vue
<template>
  <div>
    <fm-button size="small" @buttonClicked="onClick">小按钮</fm-button>
    <fm-button size="middle" color="#DC2A2A">中等大小</fm-button>
    <fm-button size="large" color="#FC5B23">大按钮</fm-button>
    <fm-button size="huge" color="#3BC06B">超大按钮</fm-button>
    <fm-button size="huge" type="hollow">空心按钮</fm-button>
    <fm-button type="circle" icon="bianji"></fm-button> <!-- 圆形按钮 -->
    <fm-button size="huge" color="#04C0CF" animated>active 动画</fm-button>
    <fm-button size="huge" disabled>按钮禁用</fm-button>
  </div>
</template>

<script>
import { FmButton } from 'weex-flymeui';
export default {
  components: { FmButton },
  methods: {
    onClick(e) {
      // enter your code
    }
  }
};
</script>
```

更多详细代码例子可以参考 [demo](https://github.com/Yanjiie/weex-flymeui/blob/master/example/component/button/index.vue)

## 可配置参数
| Prop | Type | Required | Default | Description |
|-------------|------------|--------|-----|-----|
| size | `String` |`N`| `small` | 按钮大小，有 `small`/`middle`/`large`/`huge` 四种大小 |
| type | `String` |`N`| `-` | 按钮的类型，有`circle 圆形按钮`和`hollow 空心按钮`两种 |
| icon | `String` |`N`| `wancheng` | 按钮 Icon 的名称，只有在使用圆形按钮时生效 |
| color | `String` |`N`| `-` | 按钮的颜色 |
| titleColor | `String` |`N`| `#FFFFFF` | 按钮的内容颜色，当使用`hollow 空心按钮`时此属性失效 |
| animated | `Boolean` |`N`| `false` | 按钮 active 状态下是否有按下动画 |
| disabled | `Boolean` |`N`| `false` | 按钮是否禁用 |
| width | `Number` |`N`| `-` | 自定义按钮宽度 |
| height | `Number` |`N`| `-` | 自定义按钮高度 |

## 事件回调

- `buttonClicked` 按钮被点击时触发

## slot

`fm-button ` 提供了以下插槽供用户自定义：

  - `title`: 按钮内容插槽

### 例子
```html
<fm-button theme="limegreen" size="huge">
  <div class="custom" slot="title">
    <fm-icon name="bianji" icon-style="48" color="#FFFFFF"></fm-icon>
    <text class="custom-txt">编辑</text>
  </div>
</fm-button>
```
