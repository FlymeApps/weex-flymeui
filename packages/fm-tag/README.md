# fm-tag

> Flyme 标签组件

<img src="http://image.res.meizu.com/image/flyme-icon/3c0b992065fe4e0685b9dc333fde23baz" width=400 style="box-shadow: 0 5px 10px 0 #d9dce3;    border-radius: 4px;" />
<img src="http://image.res.meizu.com/image/flyme-icon/7561f20591d64effb3aa3d22f9b4e4e9z" width=400 style="box-shadow: 0 5px 10px 0 #d9dce3;    border-radius: 4px;" />
<img src="http://image.res.meizu.com/image/flyme-icon/b102f6ce3cd84cf8abf06835329a2eabz" width=400 style="box-shadow: 0 5px 10px 0 #d9dce3;    border-radius: 4px;" />

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

更多详细代码例子可以参考 [demo](https://github.com/FlymeApps/weex-flymeui/blob/master/example/component/tag/index.vue)

## 可配置参数
| Prop | Type | Required | Default | Description |
|-------------|------------|--------|-----|-----|
| size | `String` |`N`| `small` | 标签大小，`small` 为小标签；`big` 为大标签；`huge` 为腰圆标签 |
| value | `String` |`N`| `标签` | 标签内容 |
| color | `String` |`N`| `#198DED` | 标签颜色 |
| font-color | `String` |`N`| `#FFFFFF` | 字体颜色 |
| type | `String` |`N`| `solid` | 标签类型，`solid` 为实心标签；`hollow` 为空心标签 |
