<template>
  <fm-tab-page :tab-titles="tabTitles">
    <div class="tab1"></div>
    <div class="tab2"></div>
    <div class="tab3"></div>
    <div class="tab4"></div>
    <div class="tab3"></div>
    <div class="tab2"></div>
    <div class="tab1"></div>
  </fm-tab-page>
</template>

<style scoped>
  .tab1 {
    width: 1080px;
    height: 1080px;
    background-color: red;
    margin-top: 20px;
  }

  .tab2 {
    width: 1080px;
    height: 1080px;
    background-color: blue;
    margin-top: 20px;
  }

  .tab3 {
    width: 1080px;
    height: 1080px;
    background-color: green;
    margin-top: 20px;
  }

  .tab4 {
    width: 1080px;
    height: 1080px;
    background-color: gray;
    margin-top: 20px;
  }
</style>

<script>
import { FmTabPage } from '../../../index';

export default {
  components: { FmTabPage },
  data () {
    return {
      tabTitles: ['选项', '选项选项', '选项', '选项', '选项选项选项', '选项选项选项选项', '选项选项选项']
    };
  },
  methods: {

  }
};
</script>
