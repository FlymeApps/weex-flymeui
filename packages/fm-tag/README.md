# fm-tag

> Flyme 标签组件

## 使用方法
```vue
<template>
  <div class="container">
    <text class="text">标签</text>
    <fm-tag value="小标签" color="#f12528"></fm-tag>
    <fm-tag value="大标签" size="big" color="#f12528"></fm-tag>
    <fm-tag value="腰圆标签" size="big" color="#f12528"></fm-tag>
    <fm-tag value="空心标签" type="hollow" color="#f12528" fontColor="#3bc06b"></fm-tag>
  </div>
</template>

<script>
  import { FmTag } from 'weex-flymeui';
  export default {
    components: { FmTag }
  };
</script>
```

更多详细代码例子可以参考 [demo](https://github.com/Yanjiie/weex-flymeui/blob/master/example/component/tag/index.vue)

## 可配置参数
| Prop | Type | Required | Default | Description |
|-------------|------------|--------|-----|-----|
| size | `String` |`N`| `small` | 标签大小，`small` 为小标签；`big` 为大标签；`huge` 为腰圆标签 |
| value | `String` |`N`| `标签` | 标签内容 |
| color | `String` |`N`| `#198DED` | 标签颜色 |
| font-color | `String` |`N`| `#FFFFFF` | 字体颜色 |
| type | `String` |`N`| `solid` | 标签类型，`solid` 为实心标签；`hollow` 为空心标签 |

## 示例
![](http://image.res.meizu.com/image/flyme-icon/fc51d6d66a38485ea33a6504e5858d48z)
