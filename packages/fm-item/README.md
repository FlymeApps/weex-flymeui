# fm-item

> Flyme 风格，可定制化的通用列表项

## 使用方法

```vue
<template>
  <scroller class="scroller">
    <!-- 单行列表 -->
    <fm-item type="single" title="列表标题"></fm-item>
    <!-- 多行列表 -->
    <fm-item title="列表标题"
             summary="列表描述"></fm-item>
    <fm-item title="列表标题"
             summary="辅助信息"
             description="段落描述"></fm-item>
    <!-- 头像列表 -->
    <fm-item title="列表标题"
             type="avatar-single"
             imgSrc="https://avatars1.githubusercontent.com/u/29728294?s=400&u=9b580990065d9e9e80fb2c7d736f866bf4f3319e&v=4"></fm-item>
    <fm-item title="列表标题"
             summary="辅助信息"
             description="段落描述"
             type="avatar-normal"
             imgSrc="https://avatars1.githubusercontent.com/u/29728294?s=400&u=9b580990065d9e9e80fb2c7d736f866bf4f3319e&v=4"></fm-item>
    <!-- 小图标列表 -->
    <fm-item title="列表标题"
             type="icon-small"
             imgSrc="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=995362387,2344079991&fm=27&gp=0.jpg"></fm-item>
    <!-- 中图标列表 -->
    <category title="图标列表( 应用小图标 )"></category>
    <fm-item type="icon-middle"
             title="微信"
             summary="4.2 亿人安装"
             imgSrc="https://gss3.bdstatic. com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=318b6bf6073387449cc5287a6934bec4/d53f8794a4c27d1e15b40e6210d5ad6edcc43881.jpg"></fm-item>
    <!-- 大图标列表 -->
    <fm-item type="icon-large"
             title="微信"
             summary="4.2 亿人安装"
             description="时下最火的语音聊天交友软件"
             imgSrc="https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=318b6bf6073387449cc5287a6934bec4/d53f8794a4c27d1e15b40e6210d5ad6edcc43881.jpg"></fm-item>
  </scroller>
</template>

<script>
import { FmTag } from 'weex-flymeui';
export default {
  components: { FmItem }
};
</script>
```

更多详细代码例子可以参考 [demo](https://github.com/FlymeApps/weex-flymeui/blob/master/example/component/item/index.vue)

## 可配置参数
| Prop | Type | Required | Default | Description |
|-------------|------------|--------|-----|-----|
| type | `String` |`N`| `normal` | 应用场景，请对照 [常用场景](#常用场景) |
| title | `String` |`Y`| `''` | 标题 |
| summary | `String` |`N`| `''` | 摘要 |
| description | `String` |`N`| `''` | 描述 |
| img-src | `String` |`N`| `-` | 图片路径 |
| title-color | `String` |`N`| `#000000` | 标题颜色 |
| summary-color | `String` |`N`| `rgba(0, 0, 0, 0.4)` | 摘要颜色 |
| desc-color | `String` |`N`| `rgba(0, 0, 0, 0.4)` | 描述颜色 |
| img-width | `Number` | `N` |`96px`| 图片宽度 |
| img-height | `Number` | `N` |`96px`| 图片高度 |
| img-radius | `Number` | `N` |`0px`| 图片圆角半径 |
| img-position | `String` | `N` | `center` | 图片对齐方式：有 `top`, `center`, `bottom` 三种 |
| padding-top | `Number` | `N` | `54px` | 列表上边距 |
| padding-bottom | `Number` | `N` | `54px` | 列表下边距 |
| occupying-color | `String` | `N` | `rgba(0, 0, 0, 0.1)` | 图片加载时的占位颜色 |
| border | `Boolean` | `N` | `true` | 显示底部分割线 |

## 常用场景

> fm-item 组件提供了一些基础的使用场景样式，可直接使用，无需额外配置。

- `single` 单行列表

    <img src="http://image.res.meizu.com/image/flyme-icon/fb9b874b260a4b8c8a3b4f927ad28299z" width=400 />

- `normal` 多行列表

    <img src="http://image.res.meizu.com/image/flyme-icon/c734fae3d4a94c43af644ffce519423az" width=400 />

- `avatar` 头像列表

    <img src="http://image.res.meizu.com/image/flyme-icon/4d6192d614d64b99a4142c942089e4c5z" width=400 />

- `icon-small` 小图标列表

    <img src="http://image.res.meizu.com/image/flyme-icon/d528ada04d7b45fc9c2155a1f22fa125z" width=400 />

- `icon-middle` 中图标列表

    <img src="http://image.res.meizu.com/image/flyme-icon/3ac59aecd2504bc7922bdf0bfe78df84z" width=400 />

- `icon-large` 大图标列表

    <img src="http://image.res.meizu.com/image/flyme-icon/645205da2ab445f1a6cb6811c8f2620fz" width=400 />

## Slot
如果配置项和常用场景都不满足你的使用要求，`fm-item` 提供了三个不同的 slot 来提供给用户充分自定义。

1. `<slot name"left"></slot>` : 标题左边插槽
2. `<slot name"title"></slot>` : 标题插槽
3. `<slot name"right"></slot>` : 标题右边插槽

```vue
<fm-item type="icon-large"
         title="微信"
         summary="4.2 亿人安装"
         description="时下最火的语音聊天交友软件"
         imgSrc="https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=318b6bf6073387449cc5287a6934bec4/d53f8794a4c27d1e15b40e6210d5ad6edcc43881.jpg">\
  <div slot="left" style="justify-content: flex-start;margin-right: 36px">
    <fm-tag value="推荐" size="small" type="hollow" color="#f12528" fontColor="#f12528"></fm-tag>
  </div>
</fm-item>
```

## 事件回调

- `fmItemClicked` 被点击时触发
- `fmItemLongpress` 被长按时触发

