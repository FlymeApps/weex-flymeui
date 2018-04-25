<template>
  <div class="mzui-demo">
    <scroller class="scroller">
      <title link="https://yanjiie.github.io/weex-flymeui/#/packages/fm-rater/"></title>
      <category title="不同大小"></category>
      <div class="container">
        <fm-rater></fm-rater>
      </div>
      <div class="container">
        <fm-rater size="small"></fm-rater>
      </div>
      <category title="不同主题颜色"></category>
      <div class="container">
        <fm-rater theme="normal"></fm-rater>
      </div>
      <div class="container">
        <fm-rater theme="normal" size='small'></fm-rater>
      </div>
      <div class="container">
        <fm-rater theme="special"></fm-rater>
      </div>
      <div class="container">
        <fm-rater theme="special" size='small'></fm-rater>
      </div>
      <div class="container dark">
        <fm-rater theme="dark"></fm-rater>
      </div>
      <div class="container dark">
        <fm-rater theme="dark" size='small'></fm-rater>
      </div>
      <div class="container">
        <fm-rater size='small'></fm-rater>
      </div>
      <category title="不同的初始化分数"></category>
      <div class="container">
        <fm-rater :score="2" :canChange="false"></fm-rater>
      </div>
      <div class="container">
        <fm-rater :score="4" :canChange="false"></fm-rater>
      </div>
      <div class="container">
        <fm-rater :score="6" :canChange="false"></fm-rater>
      </div>
      <category title="分数更改后回调"></category>
      <div class="container">
        <fm-rater @fmRaterScoreChanged="scoreChanged"></fm-rater>
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
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
  }
  .dark {
    background-color: rgb(74, 74, 74);
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
import { FmRater } from 'weex-flymeui';
import Title from '../../_mods/title.vue';
import Category from '../../_mods/category.vue';
const modal = weex.requireModule('modal');

export default {
  components: { Title, Category, FmRater },
  methods: {
    scoreChanged (e) {
      modal.toast({ message: e });
    }
  }
};
</script>
