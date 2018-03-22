<template>
  <div class="mzui-demo">
    <scroller class="scroller">
      <title link="https://yanjiie.github.io/weex-flymeui/#/packages/fm-simple-list/"></title>
      <category title="基本态"></category>
        <fm-simple-list :list="listData"
                        @fmSimpleListSelected="onSelect"
                        @fmSimpleListRightIconClicked="itemRightClicked"/>

      <category title="添加右边按钮"></category>
        <fm-simple-list :list="listData1"
                        right-text="清空"
                        @fmSimpleListSelected="onSelect"
                        @fmSimpleListRightBtnClicked="rightClicked" />

      <category title="不同颜色"></category>
        <fm-simple-list :list="listData2"
                        @fmSimpleListSelected="onSelect" />

      <category title="不同 icon"></category>
        <fm-simple-list :list="listData3"
                        @fmSimpleListSelected="onSelect" />

      <category title="自定义样式"></category>
        <fm-simple-list :list="listData"
                        :custom-styles="customStyles"
                        @fmSimpleListSelected="onSelect" />
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

  .cell {
    padding: 45px;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
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
import { FmSimpleList } from '../../../index';
import Title from '../../_mods/title.vue';
import Category from '../../_mods/category.vue';

const modal = weex.requireModule('modal');

export default {
  components: { FmSimpleList, Title, Category },
  data: () => ({
    listData: [{
      title: '王者荣耀'
    }, {
      title: '这是一段文字超长的描述这是一段文字超长的描述这是一段文字超长的描述这是一段文字超长的描述'
    }, {
      title: '震惊！Flyme 竟然还有这个功能！'
    }],
    listData1: [{
      title: '王者荣耀'
    }, {
      title: '这是一段文字超长的描述这是一段文字超长的描述这是一段文字超长的描述这是一段文字超长的描述'
    }, {
      title: '震惊！Flyme 竟然还有这个功能！'
    }],
    listData2: [{
      title: '王者荣耀',
      color: '#198DED'
    }, {
      title: '这是一段文字超长的描述这是一段文字超长的描述这是一段文字超长的描述这是一段文字超长的描述',
      color: '#3BC06B'
    }, {
      title: '震惊！Flyme 竟然还有这个功能！',
      color: '#DC2A2A'
    }],
    listData3: [{
      title: '王者荣耀',
      color: '#198DED',
      leftIcon: 'biaoqing',
      leftColor: '#DC2A2A'
    }, {
      title: '这是一段文字超长的描述这是一段文字超长的描述这是一段文字超长的描述这是一段文字超长的描述',
      color: '#3BC06B',
      leftIcon: 'gongjuxiang'
    }, {
      title: '震惊！Flyme 竟然还有这个功能！',
      color: '#DC2A2A',
      leftIcon: 'hongxin'
    }],
    customStyles: {
      borderWidth: 0,
      originLeftIcon: ''
    }
  }),
  methods: {
    onSelect (e) {
      modal.toast({ message: `选中了 ${e.model.title}，选中的是第 ${e.index} 个` });
    },
    rightClicked (e) {
      modal.toast({ message: '点击了右边按钮' });
      this.listData1 = [];
    },
    itemRightClicked (e) {
      this.listData.splice(e.index, 1);
    }
  }
};
</script>
