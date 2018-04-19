<template>
  <div class="mzui-demo">
    <scroller class="scroller">
      <title link="https://yanjiie.github.io/weex-flymeui/#/packages/fm-slider-bar/"></title>
      <category title="基本态"></category>
      <div class="contaniner">
        <text class="tip">当前值: {{ value1 }}</text>
        <fm-slider-bar @updateValue="updateValue($event, 1)"></fm-slider-bar>
      </div>
      <category title="禁用态"></category>
      <div class="contaniner">
        <text class="tip">当前值: {{ value2 }}</text>
        <fm-slider-bar
          @updateValue="updateValue($event, 2)"
          :defaultValue="value2"
          disabled></fm-slider-bar>
      </div>
      <category title="带默认值"></category>
      <div class="contaniner">
        <text class="tip">当前值: {{ value3 }}</text>
        <fm-slider-bar
          :defaultValue="value3"
          @updateValue="updateValue($event, 3)"></fm-slider-bar>
      </div>
      <category title="带指示器"></category>
      <div class="contaniner">
        <text class="tip">当前值: {{ value4 }}</text>
        <fm-slider-bar
          @updateValue="updateValue($event, 4)"
          :indicator="true"
          :defaultValue="value4"></fm-slider-bar>
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
  .tip {
    color: #666;
    font-size: 32px;
    margin-bottom: 10px;
  }
</style>

<script>
import { FmSliderBar } from 'weex-flymeui';
import Title from '../../_mods/title.vue';
import Category from '../../_mods/category.vue';

export default {
  components: { Title, Category, FmSliderBar },
  data () {
    return {
      value1: 0,
      value2: 20,
      value3: 40,
      value4: 60
    };
  },
  methods: {
    updateValue (value, idx) {
      this[`value${idx}`] = value;
    }
  }
};
</script>
