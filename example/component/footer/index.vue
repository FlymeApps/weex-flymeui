<template>
  <div class="mzui-demo">
    <scroller class="scroller">
      <title link="https://yanjiie.github.io/weex-flymeui/#/packages/fm-footer/"></title>

      <div class="btn-wrap">
        <fm-button size="huge" @buttonClicked="onChange('none')">无内边距</fm-button>
        <fm-button size="huge" @buttonClicked="onChange('large')" color="#dc2a2a">大内边距</fm-button>
        <fm-button size="huge" @buttonClicked="onChange('middle')" color="#04c0cf">中等内边距</fm-button>
        <fm-button size="huge" @buttonClicked="onChange('small')" color="#3bc06b">小内边距</fm-button>
      </div>

      <template v-if="type === 'none'">
        <fm-footer>
          <fm-button theme="firebrick" size="huge" animated>立即开始</fm-button>
        </fm-footer>
      </template>

      <template v-if="type === 'large'">
        <fm-footer padding-size="large">
          <fm-button size="large" animated disabled>取消订单</fm-button>
          <fm-button size="large" animated>确认订单</fm-button>
        </fm-footer>
      </template>

      <template v-if="type === 'middle'">
        <fm-tabbar>
          <fm-tabbar-item class="item" icon="bianji">编辑</fm-tabbar-item>
          <fm-tabbar-item class="item" icon="xingxing">收藏</fm-tabbar-item>
          <fm-tabbar-item class="item" icon="fenxiang">分享</fm-tabbar-item>
          <fm-tabbar-item class="item" icon="shanchu">删除</fm-tabbar-item>
          <fm-tabbar-item class="item" icon="gengduo">更多</fm-tabbar-item>
        </fm-tabbar>
      </template>

      <template v-if="type === 'small'">
        <fm-footer padding-size="small">
          <div class="price-wrap">
            <text class="label">应付</text>
            <text class="price">20</text>
            <text class="label">元</text>
          </div>
          <fm-button color="#dc2a2a" size="middle" animated>立即支付</fm-button>
        </fm-footer>
      </template>

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

  .btn-wrap {
    margin-top: 30px;
    height: 800px;
    justify-content: space-between;
    align-items: center;
  }

  .scroller {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }

  .title {
    margin-bottom: 30px;
  }

  .label {
    font-size: 48px;
    color: #000000;
    line-height: 57px;
    font-weight: 500;
    font-family: sans-serif-medium;
  }

  .price-wrap {
    flex-direction: row;
    align-items: center;
  }

  .price {
    font-size: 72px;
    margin: 0 12px;
    color: #F12528;
    font-weight: 500;
    font-family: sans-serif-medium;
  }
</style>

<script>
import { FmFooter, FmButton, FmTabbar, FmTabbarItem } from 'weex-flymeui';
import Title from '../../_mods/title.vue';

export default {
  components: { Title, FmFooter, FmButton, FmTabbar, FmTabbarItem },
  data: () => ({
    type: 'none'
  }),
  methods: {
    onChange (type) {
      this.type = type;
    }
  }
};
</script>
