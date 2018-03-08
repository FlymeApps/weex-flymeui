# fm-rich-text

## 说明
富文本目前支持以下两种情况的排版：
1. icon、标签、超链接、单行普通文本混排
2. icon或标签加多行文本混排

不同情况请使用以下不同的组件引入：
```javascript
// icon、标签、超链接、单行普通文本混排
import { FmRichText } from 'weex-flymeui'
// icon或标签加多行文本混排
import { FmRichText, FmSpecialRichText } from 'weex-flymeui'
```

**注意：FmSpecialRichText 仅支持 text , icon, tag 类型，在 configList 中传入其他类型将会出错**

## 示例
```vue
<template>
    <div class="mzui-demo">
        <scroller class="scroller">
            <category title="富文本混排"></category>
            <fm-rich-text class="special-rich"
                         :config-list="configList"
                         @linkBeClick="linkBeClick"
                         ></fm-rich-text>
            <category title="纯文本兼容"></category>
            <fm-rich-text class="special-rich"
                         :config-list="configString"
                         @linkBeClick="linkBeClick"
                         ></fm-rich-text>
            <category title="两行文字的富文本"></category>
            <fm-special-rich-text class="special-rich"
                         :config-list="specialConfigList"></fm-special-rich-text>
            <category title="两行文字的富文本"></category>
            <fm-special-rich-text class="special-rich"
                         :config-list="specialConfigList1"></fm-special-rich-text>
        </scroller>
    </div>
</template>

<script>
import { FmRichText } from 'weex-flymeui'
import { FmRichText, FmSpecialRichText } from 'weex-flymeui'
export default {
    components: { FmRichText, FmSpecialRichText },
    data() {
        return {
            configList: [{
                type: 'icon',
                value: '//gw.alicdn.com/tfs/TB1qygJRXXXXXX2XFXXXXXXXXXX-117-37.png'
            }, {
                type: 'text',
                text: '新品上市',
                style: {
                    color: '#FF5000'
                }
            }, {
                type: 'icon',
                value: 'dianzan',
                color: 'red',
                style: {
                    size: 12,
                    lineHeight: 21
                }
            }, {
                type: 'link',
                text: ' =>点击查看',
                href: '//www.baidu.com',
                style: {
                    color: '#546E7A'
                }
            }, {
                type: 'tag',
                tagType: 'hollow',
                size: 'small',
                value: '满100减20',
                color: '#FF5000',
                fontColor: '#FF5000'
            }],
            configString: '不小心传入了字符串不小心传入了字符串不小心传入了字符串不小心传入了字符串不小心传入了字符串',
            specialConfigList: [
                {
                    type: 'tag',
                    tagType: 'hollow',
                    value: '作者',
                    color: '#7e97ac',
                    fontColor: '#7e97ac',
                    style: {
                        width: 27
                    }
                },
                {
                    type: 'text',
                    value: '蓝小胖：Weex-FlymeUI 是基于 Weex 和 Flyme 6 控件标准开发而成的跨平台组件…',
                    style: {
                        fontSize: 16
                    }
                }
            ],
            specialConfigList1: [
                {
                    type: 'icon',
                    value: 'xinxi2',
                    style: {
                        size: 14
                    }
                },
                {
                    type: 'text',
                    value: '蓝小胖：Weex-FlymeUI 是基于 Weex 和 Flyme 6 控件标准开发而成的跨平台组件…',
                    style: {
                        fontSize: 14
                    }
                }
            ],
        }
    }
}
</script>
```

## Props

| 属性 | 类型 | 可选值 | 示例 | 说明 |
| -------- | -------- | -------- | -------- | 
| configList | JsonArray | {\*} | 请查看示例  | 富文本渲染配置，可兼容纯文本传入
| hasTextMargin | Boolean | true / false | hasTextMargin="true"  | 每项的右边是否加入间距

## Methods

| 方法名 | 参数 | 示例 | 说明 |
| -------- | -------- | -------- | -------- | 
| linkBeClick | event: { element:\[ 点击原生事件 ], href: \[ 被点击的链接值 ] } | @linkBeClick="linkBeClick"  | 超链接被点击之后的事件 | 


## 示例
<div class="img-txt">
![](http://image.res.meizu.com/image/flyme-icon/d1dfc2e5d1394e8d832d810d0886746az)
</div>

