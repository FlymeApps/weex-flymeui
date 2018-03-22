<template>
  <div class="mzui-demo">
    <scroller class="scroller">
      <title link="https://yanjiie.github.io/weex-flymeui/#/packages/fm-slider-bar/"></title>
      <category title="基本样式"></category>
      <div class="contaniner">
        <text class="title">default:</text>
        <fm-slider-bar @selected="sel"/>
        <text class="title">level: 10</text>
        <fm-slider-bar level="10" @selected="sel"/>
        <text class="title">showProgress</text>
        <fm-slider-bar level="10" showProgress @selected="sel"/>
        <text class="title">levelTexts: ['弱', '偏弱', '中等', '偏强', '强']</text>
        <fm-slider-bar level="10" :levelTexts="levelTexts" @selected="sel"/>
        <text class="title">value: 40 && showProgress</text>
        <fm-slider-bar value="40" @selected="sel" showProgress/>
        <text class="title">value: 3 && level: 5</text>
        <fm-slider-bar level="5" value="3" @selected="sel"/>
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
import { FmSliderBar } from '../../../index';
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
