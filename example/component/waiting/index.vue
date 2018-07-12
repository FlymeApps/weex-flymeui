<template>
  <div class="mzui-demo">
    <scroller class="scroller">
      <title></title>

      <div class="btn-wrap">
        <fm-button size="huge" @buttonClicked="openCanClose" color="#dc2a2a">打开可关闭 waiting</fm-button>
        <fm-button size="huge" @buttonClicked="openCanClose" color="#04c0cf">最少加载 0.5s</fm-button>
        <fm-button size="huge" @buttonClicked="openCantClose">打开不可关闭 waiting(慎点)</fm-button>
      </div>

      <fm-waiting
        ref="fm-waiting"
        title="正在保存图像"
        :can-auto-close="canAutoClose"
        @fmWaitingDisappeared="fmWaitingDisappeared"></fm-waiting>
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
import { FmWaiting, FmButton } from 'weex-flymeui';
import Title from '../../_mods/title.vue';

export default {
  components: { Title, FmWaiting, FmButton },
  data: () => ({
    canAutoClose: true
  }),
  methods: {
    openCanClose () {
      this.canAutoClose = true;
      this.$refs['fm-waiting'].active();
    },
    openCantClose () {
      this.canAutoClose = false;
      this.$refs['fm-waiting'].active();
      setTimeout(() => {
        this.$refs['fm-waiting'].hide();
      }, 6000);
    }
  }
};
</script>
