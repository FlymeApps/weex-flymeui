<template>
  <div class="mzui-demo">
    <scroller class="scroller">
      <title link="https://yanjiie.github.io/weex-flymeui/#/packages/fm-rich-text/"></title>
      <category title="富文本混排"></category>
      <fm-rich-text class="special-rich"
                    :config-list="configList"
                    @linkBeClick="linkBeClick"></fm-rich-text>
      <category title="纯文本兼容"></category>
      <fm-rich-text class="special-rich"
                    :config-list="configString"
                    @linkBeClick="linkBeClick"></fm-rich-text>
      <category title="两行文字的富文本"></category>
      <fm-special-rich-text class="special-rich"
                            :config-list="specialConfigList"></fm-special-rich-text>
      <category title="两行文字的富文本"></category>
      <fm-special-rich-text class="special-rich"
                            :config-list="specialConfigList1"></fm-special-rich-text>
    </scroller>
  </div>
</template>

<style scoped>
  .mzui-demo {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      background-color: #ffffff;
  }
  .special-rich {
      margin: 30px;
  }
  .scroller {
    position: absolute;
    top: 66px;
    right: 0;
    left: 0;
    bottom: 0;
  }
</style>

<script>
import { FmRichText, FmSpecialRichText } from '../../../index';
import Title from '../../_mods/title.vue';
import Category from '../../_mods/category.vue';

export default {
  components: { Title, Category, FmRichText, FmSpecialRichText },
  data () {
    return {
      configList: [{
        type: 'text',
        text: '新品上市'
      }, {
        type: 'icon',
        value: 'dianzan',
        color: 'red',
        style: {
          size: 36,
          lineHeight: 63
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
            width: 81
          }
        },
        {
          type: 'text',
          value: '蓝小胖：Weex-FlymeUI 是基于 Weex 和 Flyme 6 控件标准开发而成的跨平台组件…',
          style: {
            fontSize: 48
          }
        }
      ],
      specialConfigList1: [
        {
          type: 'icon',
          value: 'xinxi2',
          style: {
            size: 42
          }
        },
        {
          type: 'text',
          value: '蓝小胖：Weex-FlymeUI 是基于 Weex 和 Flyme 6 控件标准开发而成的跨平台组件…',
          style: {
            fontSize: 42
          }
        }
      ]
    };
  },
  methods: {
    linkBeClick (obj) {
      console.log(obj);
    }
  }
};
</script>
