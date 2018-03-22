<template>
  <div class="mzui-demo">
    <scroller class="scroller">
      <title link="https://yanjiie.github.io/weex-flymeui/#/packages/fm-btnbar/"></title>
      <div class="btn-wrap">
        <fm-button size="huge" @buttonClicked="onClick1" theme="seagreen">单个按钮</fm-button>
        <fm-button size="huge" @buttonClicked="onClick2" theme="tomato">两个按钮</fm-button>
      </div>
      <fm-btnbar @fmBtnbarBtnClicked="handle" :items="btns"></fm-btnbar>
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

  .scroller {
    position: absolute;
    top: 66px;
    right: 0;
    left: 0;
    bottom: 0;
  }

  .btn-wrap {
    margin-top: 50px;
    height: 280px;
    justify-content: space-between;
    align-items: center;
  }
</style>

<script>
import { FmBtnbar, FmButton, FmIcon } from '../../../index';
import Title from '../../_mods/title.vue';
import Category from '../../_mods/category.vue';
const modal = weex.requireModule('modal');

export default {
  components: { FmBtnbar, FmButton, Title, Category, FmIcon },
  data: () => ({
    btns: [{
      title: '开始',
      theme: 'limegreen'
    }]
  }),
  methods: {
    handle (e) {
      modal.toast({ message: '按钮被点击了' });
    },
    onClick1 (e) {
      this.btns = [{
        title: '开始',
        theme: 'limegreen'
      }];
    },
    onClick2 (e) {
      this.btns = [{
        title: '取消订单',
        disabled: true
      }, {
        title: '提交订单',
        theme: 'firebrick'
      }];
    }
  }
};
</script>
