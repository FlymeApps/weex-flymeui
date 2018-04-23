# fm-checkbox

> Flyme 风格列表多选

### 规则

- 可单独使用也可成组使用，建议使用 `fm-checkbox-list`
- 成组使用支持单选模式
- 可限制选中的数量

## 使用方法

```html
<template>
  <div>
    <!-- 单独使用 -->
    <fm-checkbox
      :model="{ title: '单行信息' }"
      @fmCheckboxChecked="check"></fm-checkbox>
    <fm-checkbox
      :model="{ title: '烧花鸭', imgSrc: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=995362387,2344079991&fm=27&gp=0.jpg' }"
      @fmCheckboxChecked="check"></fm-checkbox>
    <fm-checkbox
      :model="{ title: '烧雏鸡', summary: '挺好吃的，帮你先选了', imgSrc: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=995362387,2344079991&fm=27&gp=0.jpg' }"
      checked
      @fmCheckboxChecked="check"></fm-checkbox>
    <fm-checkbox
      :model="{ title: '松花小肚儿', summary: '一定要吃这个，不能不选', description: '肯定比上面的好吃', imgSrc: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=995362387,2344079991&fm=27&gp=0.jpg' }"
      checked
      disabled
      @fmCheckboxChecked="check"></fm-checkbox>

    <!-- 组合使用 -->
    <fm-checkbox-list
      :list="list"
      @fmCheckBoxListChecked="onChecked1"></fm-checkbox-list>
    <text class="checked-text">选中项 {{(checkedList1.map(item => item.model.title)).toString()}}</text>
  </div>
</template>

<script>
  import { FmCheckbox, FmCheckboxList } from 'weex-flymeui';
  export default {
    components: { FmCheckbox, FmCheckboxList },
    data: () => ({
      list: [{
        model: { title: '蒸熊掌' },
        value: 1,
        checked: true
      }, {
        model: { title: '蒸鹿尾儿' },
        value: 2
      }, {
        model: { title: '烧花鸭' },
        value: 3
      }, {
        model: { title: '烧雏鸡' },
        value: 3
      }],
      checkedList1: []
    }),
    methods: {
      onChecked1 (e) {
        this.checkedList1 = e.checkedList;
      },
      overLimit (e) {
        modal.toast({ message: '超过' + e + '个了' });
      }
    }
  }
</script>
```

更多详细代码例子可以参考 [demo](https://github.com/FlymeApps/weex-flymeui/blob/master/example/component/checkbox/index.vue)


### 可配置参数
#### Checkbox
| Prop | Type | Required | Default | Description |
|-------------|------------|--------|-----|-----|
| model | `Object` | `Y` | `{}` | 选项的数据，依赖于 `fm-item`，请参照 [fm-item 文档](https://flymeapps.github.io/weex-flymeui/#/packages/fm-item/) |
| value | `[String、Number、Object]` | `Y` | `-` | checkbox 的 value |
| checked | `Boolean` | `N` | `false` | checkbox 是否选中 |
| disabled | `Boolean` | `N` | `false` | checkbox 是否不可选 |
| checkedIcon | `String` | `N` | `-` | 选中的 icon |
| disabledIcon | `String` | `N` | `-` | 不可选的 icon |

- 事件回调
 - `fmCheckBoxItemChecked`: 被点击时触发，将返回 `e.value`(checkbox 的值) 和 `e.checked`(是否选中)

#### CheckboxList
| Prop | Type | Required | Default | Description |
|-------------|------------|--------|-----|-----|
| list | `Array` | `Y` | `[]` | 列表数组 (*1) |
| single | `Boolean` | `N` | `false` | 是否启用单选模式 |
| limit | `Number` | `N` | `0` | 限制选中的数量，0 为不限制 |

- 注1：list
    ```javascript
    const list = [{
      model: { title: '蒸羊羔' },
      value: 0,
      checked: true
    }, {
      model: { title: '蒸熊掌' },
      value: 1
    }, {
      model: { title: '蒸鹿尾儿' },
      value: 2
    }, {
      model: { title: '烧花鸭' },
      value: 3
    }];
    ```
- 事件回调
 - `fmCheckBoxListChecked`: 选中内容发生变化时触发，事件对象中有如下参数
   - `checkedList`: 选中的列表
   - `selectIndex`: 当前被点击项的 index
   - `checked`: 当前被点击项是否被选中
 - `overLimit`: 选中的数量超过限制时触发
