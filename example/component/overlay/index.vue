<template>
  <div class="mzui-demo">
    <scroller class="scroller">
      <title link="https://yanjiie.github.io/weex-flymeui/#/packages/fm-overlay/"></title>
      <category title="动画蒙版"></category>
      <fm-button class="btn" @buttonClicked="openOverlay">有动画</fm-button>
      <category title="无动画蒙版"></category>
      <fm-button class="btn" @buttonClicked="openNoAniOverlay">无动画</fm-button>
      <fm-overlay :show="show"
                  duration="300"
                  :hasAnimation="hasAnimation"
                  :timingFunction="timingFunction"
                  @fmOverlayBodyClicked="fmOverlayBodyClicked"
                  opacity="0.5"></fm-overlay>
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
  .title {
      margin-top: 60px;
      margin-bottom: 30px;
      color: #aaaaaa;
  }
  .btn {
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
import { FmButton, FmOverlay } from 'weex-flymeui';
import Title from '../../_mods/title.vue';
import Category from '../../_mods/category.vue';

const modal = weex.requireModule('modal');

export default {
  components: { Title, Category, FmButton, FmOverlay },

  data: () => ({
    show: false,
    hasAnimation: true,
    timingFunction: ['ease-in', 'ease-out']
  }),

  methods: {
    openOverlay () {
      this.hasAnimation = true;
      this.show = true;
    },
    openNoAniOverlay () {
      this.hasAnimation = false;
      this.show = true;
    },
    fmOverlayBodyClicked (e) {
      modal.toast({
        'message': '蒙版关闭回调',
        'duration': 1
      });
      this.show = false;
    }
  }
};
</script>
