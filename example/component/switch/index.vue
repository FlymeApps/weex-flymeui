<template>
  <div class="mzui-demo">
    <scroller class="scroller">
      <title link="https://yanjiie.github.io/weex-flymeui/#/packages/fm-switch/"></title>
      <category title="基本样式"></category>
      <div class="list">
        <div class="item">
            <fm-switch :disabled="isDis"></fm-switch>
            <fm-switch common :disabled="isDis"></fm-switch>
            <!-- <fm-switch360
              border-color="#000000"
              background-color="green"
              focus-color="gray"
              blur-color="white"
              @fmSwitchStateChange="change"></fm-switch360> -->
        </div>
      </div>
      <category title="不同主题样式"></category>
      <div class="list">
        <div class="item">
            <fm-switch theme="limegreen"></fm-switch>
            <text class="text">limegreen</text>
        </div>
        <div class="item">
            <fm-switch theme="seagreen"></fm-switch>
            <text class="text">seagreen</text>
        </div>
        <div class="item">
            <fm-switch theme="gray"></fm-switch>
            <text class="text">gray</text>
        </div>
        <div class="item">
            <fm-switch theme="crimson"></fm-switch>
            <text class="text">crimson</text>
        </div>
        <div class="item">
            <fm-switch theme="firebrick"></fm-switch>
            <text class="text">firebrick</text>
        </div>
        <div class="item">
            <fm-switch theme="tomato"></fm-switch>
            <text class="text">tomato</text>
        </div>
        <div class="item">
            <fm-switch theme="coral"></fm-switch>
            <text class="text">coral</text>
        </div>
      </div>
      <category title="属性定制"></category>
      <div class="list">
        <div class="item">
            <fm-switch :checked="isChecked"></fm-switch>
            <text class="text">默认打开</text>
        </div>
        <div class="item">
            <fm-switch disabled="true"></fm-switch>
            <text class="text">默认禁用</text>
        </div>
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

  .list {
    padding: 72px;
    padding-bottom: 0;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
  }

  .item {
    width: 300px;
    margin-bottom: 30px;
  }

  .scroller {
    position: absolute;
    top: 66px;
    right: 0;
    left: 0;
    bottom: 0;
  }

  .text {
    font-size: 42px;
    margin-top: 30px;
  }
</style>

<script>
import { FmSwitch } from 'weex-flymeui';
import Title from '../../_mods/title.vue';
import Category from '../../_mods/category.vue';

export default {
  components: { Title, Category, FmSwitch },
  data: () => ({
    isDis: false
  }),
  methods: {
    change (bool) {
      this.isChecked = bool;
      console.log(this.isChecked);
    }
  },
  mounted () {
    setTimeout(() => {
      this.isDis = true;
    }, 3000);
  }
};
</script>
