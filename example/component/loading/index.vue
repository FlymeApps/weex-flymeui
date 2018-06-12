<template>
  <div class="mzui-demo">
    <scroller class="scroller">
      <title></title>

      <div class="btn-wrap">
        <fm-button size="huge" @buttonClicked="openCanClose" color="#dc2a2a">打开可关闭 loading</fm-button>
        <fm-button size="huge" @buttonClicked="openCanClose" color="#04c0cf">最少加载 0.5s</fm-button>
        <fm-button size="huge" @buttonClicked="openCantClose">打开不可关闭 waiting(慎点)</fm-button>
      </div>

      <fm-loading
        ref="fm-loading"
        title="FlymeUI"
        :can-auto-close="canAutoClose"
        @fmLoadingDisappeared="fmLoadingDisappeared" />
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
    margin-top: 300px;
    height: 450px;
    justify-content: space-between;
    align-items: center;
  }
</style>

<script>
import { FmLoading, FmButton } from 'weex-flymeui';
import Title from '../../_mods/title.vue';

export default {
  components: { Title, FmLoading, FmButton },
  data: () => ({
    canAutoClose: true
  }),
  methods: {
    openCanClose () {
      this.canAutoClose = true;
      this.$refs['fm-loading'].active();
    },
    openCantClose () {
      this.canAutoClose = false;
      this.$refs['fm-loading'].active();
      setTimeout(() => {
        this.$refs['fm-loading'].hide();
      }, 6000);
    }
  }
};
</script>
