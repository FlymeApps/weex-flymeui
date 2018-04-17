<template>
  <div class="mzui-demo">
    <scroller class="scroller">
      <title link="https://yanjiie.github.io/weex-flymeui/#/packages/fm-slider-bar/"></title>
      <category title="基本样式"></category>
      <div class="contaniner">
        <fm-slider-bar></fm-slider-bar>
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
  .title {
    font-size: 42px;
    margin-top: 60px;
    margin-bottom: 30px;
    color: #AAAAAA;
  }
  .contaniner {
    padding: 30px;
    justify-content: center;
    align-items: center;
  }
  .scroller {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
</style>

<script>
import { FmSliderBar } from 'weex-flymeui';
import Title from '../../_mods/title.vue';
import Category from '../../_mods/category.vue';

const modal = weex.requireModule('modal');

export default {
  components: { Title, Category, FmSliderBar },
  data () {
    return {
      levelTexts: ['弱', '偏弱', '中等', '偏强', '强']
    };
  },
  methods: {
    sel (data) {
      modal.toast({ message: data });
    }
  }
};
</script>
