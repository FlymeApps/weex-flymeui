<template>
  <div class="mzui-demo">
    <scroller class="scroller">
      <title link="https://yanjiie.github.io/weex-flymeui/#/packages/fm-textbar/"></title>
      <div class="btn-wrap">
        <fm-button size="huge" @buttonClicked="onClick1" theme="seagreen">单个按钮</fm-button>
        <fm-button size="huge" @buttonClicked="onClick2" theme="tomato">两个按钮</fm-button>
      </div>
      <fm-textbar :items="btns" @fmTextbarBtnClicked="handle"></fm-textbar>
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
import { FmTextbar, FmButton } from 'weex-flymeui';
import Title from '../../_mods/title.vue';
const modal = weex.requireModule('modal');

export default {
  components: { FmTextbar, FmButton, Title },
  data: () => ({
    btns: [{
      title: '下一步'
    }]
  }),
  methods: {
    handle (e) {
      modal.toast({ message: '按钮被点击了' });
    },
    onClick1 (e) {
      this.btns = [{
        title: '下一步'
      }];
    },
    onClick2 (e) {
      this.btns = [{
        title: '取消'
      }, {
        title: '确定'
      }];
    }
  }
};
</script>
