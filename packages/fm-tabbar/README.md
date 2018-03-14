# fm-tabbar

> Flyme 底部操作栏组件，支持自定义样式。

!> 底部栏将会定位在父元素的底部

<img src="http://baas.dfs.flyme.cn/group5/M07/86/8B/CgOUcVqoyLGAXu4tAAAuY-FQHbg401.png" width=400 style="box-shadow: 0 5px 10px 0 #d9dce3;    border-radius: 4px;" />

<img src="http://baas.dfs.flyme.cn/group6/M03/78/35/CgOUoVqoyLmAEddxAAA1_SjUSyQ129.png" width=400 style="box-shadow: 0 5px 10px 0 #d9dce3;    border-radius: 4px;" />

<img src="http://baas.dfs.flyme.cn/group1/M0A/30/D2/CgOUeFqoykiAEib1AABFd-qBU7k523.png" width=400 style="box-shadow: 0 5px 10px 0 #d9dce3;    border-radius: 4px;" />

<img src="http://baas.dfs.flyme.cn/group2/M06/F8/92/CgOUdFqoyOqAbAxsAABJuOwHL6o133.png" width=400 style="box-shadow: 0 5px 10px 0 #d9dce3;    border-radius: 4px;" />

<img src="http://baas.dfs.flyme.cn/group7/M02/B3/DC/CgOUolqoyPSAZtpwAABY6Ym_xsY280.png" width=400 style="box-shadow: 0 5px 10px 0 #d9dce3;    border-radius: 4px;" />

## 使用方法

```vue
<template>
  <div>
    <fm-tabbar :items="items"
               :active-index="activeIndex"
               @fmTabbarSelected="fmTabbarSelected"
               background-color="#2F2E34"
               :custom-styles="customStyles"></fm-tabbar>
  </div>
</template>

<script>
import { FmTabbar } from '../../../index';
const modal = weex.requireModule('modal');

export default {
  components: { FmTabbar, FmTabbarItem, Title, Category },
  data () {
    return {
      items: [{
        title: '信息',
        icon: 'xinxi1',
        badge: 99
      }, {
        title: '下载',
        icon: 'xiazai',
        dot: true
      }, {
        title: '删除',
        icon: 'shanchu',
        badge: 999
      }],
      activeIndex: 0,
      customStyles: {
        titleColor: '#999999',
        iconColor: '#999999',
        activeColor: '#FFFFFF'
      }
    };
  },
  methods: {
    fmTabbarSelected ({ index }) {
      this.activeIndex = index;
    }
  }
};
</script>
```

更多详细代码例子可以参考 [demo](https://github.com/Yanjiie/weex-flymeui/blob/master/example/component/tabbar/index.vue)

## 可配置参数
| Prop | Type | Required | Default | Description |
|-------------|------------|--------|-----|-----|
| active-index | `Number` |`N`| `-1` | 当前选中的按钮索引值，不设置时不启用选中模式 |
| backgroundColor | `String` |`N`| `#FFFFFF` | tabbar 的背景颜色 |
| items | `Array` |`Y`| `-` | 按钮列表，可配置参数如下 |
| items[{`title`}] | `String` |`N`| `''` | 按钮标题 |
| items[{`icon`}] | `String` |`Y`| `''` | 按钮 icon 名称，请参照 [fm-icon](/packages/fm-icon/) |
| items[{`dot`}] | `Boolean` |`N`| `false` | 是否显示小红点 |
| items[{`badge`}] | `String` `Number` |`N`| `''` | 在图标右上角显示徽章信息 |
| custom-styles | `Object` |`N`| `{}` | 自定义样式 |
| customStyles{`titleColor`} | `String` |`N`| `rgba(0, 0, 0, 0.75)` | 未选中的文字颜色 |
| customStyles{`iconColor`} | `String` |`N`| `rgba(0, 0, 0, 0.6)` | 未选中的 icon 颜色 |
| customStyles{`activeColor`} | `String` |`N`| `#198DED` | active 状态下的颜色 |
| customStyles{`activeIconColor`} | `String` |`N`| `''` | active 状态下的 icon 颜色，未设置时将使用 `activeColor` |

## 高级用法
如果配置项都不满足你的使用要求，可以直接使用 `fm-tabbar-item` 来充分自定义你的 tabbar。

> `fm-tabbar-item` 提供了 `icon` 和 `title` 2 个插槽供用户自定义。并可通过 `slot-scope` 获取到当前 item 的选中状态。更多关于 `slot-scope` 的用法请查看 [作用域插槽](https://cn.vuejs.org/v2/guide/components.html#%E4%BD%9C%E7%94%A8%E5%9F%9F%E6%8F%92%E6%A7%BD)

```vue
<template>
  <fm-tabbar :active-index="activeIndex"
              @fmTabbarSelected="fmTabbarSelected">
    <fm-tabbar-item class="item" icon="zhuye">
      <image class="icon" slot="icon" slot-scope="props" :src="props.active ? icon.normal : icon.active" />
      <text class="txt" slot="title" slot-scope="props">{{ props.active ? 'Vue.js' : 'BindingX' }}</text>
    </fm-tabbar-item>
    <fm-tabbar-item class="item" icon="xinxi1">点这试试</fm-tabbar-item>
    <fm-tabbar-item class="item" icon="shezhi1">设置</fm-tabbar-item>
    <fm-tabbar-item class="item" icon="yonghu">用户</fm-tabbar-item>
  </fm-tabbar>
</template>

<script>
import { FmTabbar, FmTabbarItem } from '../../../index';

export default {
  components: { FmTabbar, FmTabbarItem },
  data () {
    return {
      activeIndex: 0,
      icon: {
        normal: 'https://cn.vuejs.org/images/logo.png',
        active: 'https://gw.alicdn.com/tfs/TB1_V1wbbSYBuNjSspiXXXNzpXa-349-288.png'
      }
    };
  },
  methods: {
    fmTabbarSelected ({ index }) {
      this.activeIndex = index;
    }
  }
};
</script>
```

## 事件回调

- `fmTabbarSelected` 按钮被选中时触发
    - `event.index` 被选中的索引
