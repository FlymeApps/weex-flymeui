# fm-tab-page

> 媲美 Flyme 原生的标签页面切换组件 ~

!> fm-tab-page 的滑动动画依赖于 [BindingX 解决方案](https://alibaba.github.io/bindingx/), 使用前请根据 [接入文档](https://github.com/alibaba/bindingx/blob/master/README_cn.md) 确保 App 已经支持。

!> **安卓由于 [不支持在滚动容器上监听手势](https://weex.incubator.apache.org/cn/wiki/gestures.html#yue-shu)。所以需要在子元素上绑定对应事件，可通过`fm-pan-item`解决这个问题。**

## TODO
* [ ] H5 版本手势滑动跟随
* [ ] 标签增加可配置Icon
* [ ] 自定义标签导航

## 使用方法

```vue
<template>
  <fm-tab-page :tab-titles="tabTitles"
               ref="fm-tab-page">
    <list v-for="(v, index) in tabTitles" :key="index"
          class="item-container">
      <cell v-for="(item, idx) in listData" :key="idx">
        <fm-pan-item @fmPanItemPan="fmPanItemPan">
          <text class="cell">{{ item }}</text>
        </fm-pan-item>
      </cell>
    </list>
  </fm-tab-page>
</template>

<style scoped>
  .item-container {
    width: 1080px;
  }

  .cell {
    border-bottom-width: 1px;
    height: 144px;
  }
</style>

<script>
import { FmTabPage, FmPanItem, Utils } from 'weex-flymeui';

export default {
  components: { FmTabPage, FmPanItem },
  data () {
    return {
      tabTitles: [{
        title: '标签1'
      }, {
        title: '标签标签'
      }, {
        title: 'NBA'
      }, {
        title: '超长的标签啊啊啊'
      }, {
        title: '标签'
      }],
      listData: ['哈哈哈', '哈哈', '哈哈', '哈哈', '哈哈', '哈哈', '哈哈', '哈哈', '哈哈', '哈哈', '哈哈', '哈哈', '哈哈', '哈哈', '哈哈', '哈哈', '哈哈', '哈哈', '哈哈', '哈哈']
    };
  },
  methods: {
    fmPanItemPan (e) {
      if (Utils.env.supportsEBForAndroid()) {
        this.$refs['fm-tab-page'].bindExp(e.element);
      }
    }
  }
};
</script>
```

更多详细代码例子可以参考 [demo](https://github.com/Yanjiie/weex-flymeui/blob/master/example/component/tabPage/index.vue)

## 可配置参数
| Prop | Type | Required | Default | Description |
|-------------|------------|--------|-----|-----|
| tab-titles | `Array` |`Y`| `[]` | 顶部标签的配置 |
| tab-titles[{`title`}] | `String` |`Y`| `''` | 标签文案 |
| tabStyles | `Object` |`N`| `{}` | 顶部标签的样式配置 |
| tabStyles{`titleColor`} | `String` |`N`| `rgba(0, 0, 0, 0.6)` | 标签标题颜色 |
| tabStyles{`activeTitleColor`} | `String` |`N`| `#198DED` | 标签选中颜色 |
| tabStyles{`height`} | `Number` |`N`| `102px` | 标签栏高度 |
| tabStyles{`fontSize`} | `Number` |`N`| `42px` | 标签文字大小 |
| tabStyles{`padding`} | `Number` |`N`| `18px` | 标签文字左右两边距 |
| tabStyles{`activeBottomColor`} | `String` |`N`| `#198DED` | 标签选中边框颜色 |
| tab-page-height | `Number` |`N`| `1920px` | Tab 页面的高度 |
| pan-dist | `Number` |`N`| `200` | 滚动多少切换上下一屏幕 |
| duration | `Number` |`N`| `300` | 切换动画的时间 |
| timing-function | `String` |`N`| `-` | 切换动画缓动函数 |

## 可供外部使用的方法

- `setPage(page)` 设置页数
    ```javascript
    this.$refs['fm-tab-page'].setPage(3)
    ```

## 事件回调
- `fmTabPageTabSelected` 页数切换时触发
    - 参数: 
        ```json
        // @fmTabPageTabSelected="fmTabPageTabSelected"
        {
          page: 页数
        }
        ```

## fm-pan-item 的使用

!> 由于安卓目前不支持在滚动类型的元素上监听手势，所以在 `fm-tab-page` 中使用 `list` 和 `scroller` 组件会出现无法监听手势事件导致无法滑动的问题。

> *解决原理*：监听滚动容器中子元素的手势事件然后传递到 `fm-tab-page` 中。

### 使用方法
```vue
<wxc-pan-item 
    :url="url" 
    @fmPanItemClicked="fmPanItemClicked"
    @fmPanItemPan="fmPanItemPan">
      <child>....</child>
    </pan-item>

// 引用
import { FmPanItem } from 'weex-flymeui';

// 回调传递到 `fm-tab-page` 中
fmPanItemPan (e) {
    // 检查是否为安卓环境并支持 BindingX
    if (Utils.env.supportsEBForAndroid()) {
      this.$refs['fm-tab-page'].bindExp(e.element);
    }
}
```
