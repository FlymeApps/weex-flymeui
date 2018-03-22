# fm-tag-wall

> Flyme 可自定义样式标签墙组件，可用于搜索热词

<img src="http://image.res.meizu.com/image/flyme-icon/df6f43009bf94578b312a3a4f2526cecz" width=400 style="box-shadow: 0 5px 10px 0 #d9dce3;    border-radius: 4px;" />

## 使用方法
```vue
<template>
  <scroller class="scroller">
    <category title="基本态"></category>
      <fm-tag-wall title="基本态"
                   :list="tagData"
                   @fmTagWallSelected="onSelect"
                   @fmTagWallRightBtnClicked="rightClicked" />
    <category title="修改右边按钮"></category>
      <fm-tag-wall title="修改右边按钮"
                   :list="tagData"
                   @fmTagWallSelected="onSelect"
                   right-text="查看更多"
                   right-color="#FC5B23"
                   @fmTagWallRightBtnClicked="rightClicked" />
    <category title="自定义样式"></category>
      <fm-tag-wall title="自定义样式"
                   :list="tagData2"
                   @fmTagWallSelected="onSelect"
                   :custom-styles="customStyle"
                   @fmTagWallRightBtnClicked="rightClicked"></fm-tag-wall>
  </scroller>
</template>

<script>
import { FmTagWall } from '../../../index';
const modal = weex.requireModule('modal');
export default {
  components: { FmTagWall, Title, Category },
  data: () => ({
    tagData: [{
      title: '微信',
      color: '#3BC06B'
    }, {
      title: '摩拜单车',
      color: '#FC5B23'
    }, {
      title: '小睡眠'
    }, {
      title: '音乐'
    }, {
      title: '购物'
    }, {
      title: '时间管理'
    }, {
      title: '换机助手'
    }, {
      title: 'Flyme Design'
    }, {
      title: 'Creator'
    }],
    tagData2: [{
      title: '微信',
      backgroundColor: '#3BC06B'
    }, {
      title: '摩拜单车',
      backgroundColor: '#FC5B23'
    }, {
      title: '小睡眠'
    }, {
      title: '音乐'
    }, {
      title: '购物'
    }, {
      title: '时间管理'
    }, {
      title: '换机助手'
    }, {
      title: 'Flyme Design'
    }, {
      title: 'Creator'
    }],
    customStyle: {
      padding: 42,
      borderRadius: 100,
      borderWidth: 0,
      originBackgroundColor: 'rgba(0, 0, 0, 0.2)',
      originTitleColor: '#FFFFFF'
    }
  }),
  methods: {
    onSelect (e) {
      modal.toast({ message: `选中了 ${e.title}，选中的是第 ${e.index} 个` });
    },
    rightClicked (e) {
      modal.toast({ message: '点击了右边按钮' });
    }
  }
};
</script>
```

更多详细代码例子可以参考 [demo](https://github.com/Yanjiie/weex-flymeui/blob/master/example/component/tagWall/index.vue)

## 可配置参数
| Prop | Type | Required | Default | Description |
|-------------|------------|--------|-----|-----|
| list | `Array` |`Y`| `-` | 热词标签列表，可动态更新 |
| list[{`title`}] | `String` |`N`| `''` | 标题 |
| list[{`color`}] | `String` |`N`| `''` | 标题颜色 |
| list[{`backgroundColor`}] | `String` |`N`| `''` | 标签背景颜色 |
| list[{`borderColor`}] | `String` |`N`| `''` | 标签边框颜色 |
| title | `String` |`N`| `标题` | 标题 |
| title-color | `String` |`N`| `rgba(0, 0, 0, 0.4)` | 标题颜色 |
| right-text | `String` |`N`| `更多` | 右边按钮文案 |
| right-color | `String` |`N`| `#198DED` | 右边按钮颜色 |
| customStyles | `Object` |`N`| `{}` | 自定义样式 |
| customStyles{`height`} | `Number` |`N`| `72px` | 标签高度 |
| customStyles{`padding`} | `Number` |`N`| `30px` | 标签左右边距 |
| customStyles{`borderRadius`} | `Number` |`N`| `6px` | 边框半径 |
| customStyles{`borderWidth`} | `Number` |`N`| `2px` | 边框宽度 |
| customStyles{`fontSize`} | `Number` |`N`| `42px` | 字体大小 |
| customStyles{`originTitleColor`} | `String` |`N`| `rgba(0, 0, 0, 0.6)` | 默认的字体颜色，会被 `list item` 中的 `color` 覆盖 |
| customStyles{`originBorderColor`} | `String` |`N`| `rgba(0, 0, 0, 0.08)` | 默认的边框颜色，会被 `list item` 中的 `borderColor` 覆盖 |
| customStyles{`originBackgroundColor`} | `String` |`N`| `#FFFFFF` | 默认的边框颜色，会被 `list item` 中的 `backgroundColor` 覆盖 |
| customStyles{`itemSpacing`} | `Number` |`N`| `24px` | 标签间距 |
| customStyles{`lineSpacing`} | `Number` |`N`| `24px` | 标签的行间距 |

## Slot
`fm-tag-wall` 提供了两个插槽供用户自定义标题栏。

1. `<slot name"left"></slot>` : 左边标题插槽
2. `<slot name"right"></slot>` : 右侧按钮插槽

## 事件回调
- `fmTagWallRightBtnClicked` 右边按钮被点击时触发
- `fmTagWallSelected` 标签被点击时触发
    - 参数: 
        ```json
        {
          title: 被点击的标签名称,
          index: 被点击的 index
        }
        ```
    - 示例
        ```vue
        <fm-tag-wall @fmTagWallSelected="onSelect"></fm-tag-wall>
        ```
