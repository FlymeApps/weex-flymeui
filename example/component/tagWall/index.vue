<template>
  <div class="mzui-demo">
    <scroller class="scroller">
      <title link="https://yanjiie.github.io/weex-flymeui/#/packages/fm-tag-wall/"></title>
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
import { FmTagWall } from 'weex-flymeui';
import Title from '../../_mods/title.vue';
import Category from '../../_mods/category.vue';

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
