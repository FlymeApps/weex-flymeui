<template>
  <div class="mzui-demo">
    <scroller class="scroller">
      <title link="https://yanjiie.github.io/weex-flymeui/#/packages/fm-button/"></title>
        <div class="container row">
          <fm-text>小按钮</fm-text>
          <fm-button size="small">按钮</fm-button>
        </div>
        <div class="container row">
          <fm-text>自适应按钮</fm-text>
          <fm-button size="small">自适应宽度的按钮</fm-button>
        </div>
        <div class="container row">
          <fm-text>中等大小按钮</fm-text>
          <fm-button size="middle" theme="firebrick">提交订单</fm-button>
        </div>
        <div class="container row">
          <fm-text>大按钮</fm-text>
          <fm-button size="large" theme="tomato">查看详情</fm-button>
        </div>
        <div class="container row">
          <fm-text>超大按钮</fm-text>
          <fm-button size="huge" theme="limegreen">开始</fm-button>
        </div>
        <div class="container row">
          <fm-text>自定义大小</fm-text>
          <fm-button width="300" height="150" theme="coral">自定义</fm-button>
        </div>
        <div class="container row">
          <fm-text>空心按钮</fm-text>
          <fm-button size="huge" type="hollow">按钮</fm-button>
        </div>
        <div class="container row">
          <fm-text>圆形按钮</fm-text>
          <fm-button type="circle" icon="bianji"></fm-button>
        </div>
        <div class="container row">
          <fm-text>active 动画</fm-text>
          <fm-button size="huge" theme="seagreen" animated>开始</fm-button>
        </div>
        <div class="container row" :style="{ paddingBottom: 60 }">
          <fm-text>禁用状态</fm-text>
          <fm-button size="huge" disabled>按钮</fm-button>
        </div>
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

  .container {
    padding-top: 60px;
    padding-left: 60px;
    padding-right: 60px;
  }

  .row {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
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
import { FmButton, FmText } from '../../../index';
import Title from '../../_mods/title.vue';
import Category from '../../_mods/category.vue';

export default {
  components: { Title, Category, FmButton, FmText }
};
</script>
