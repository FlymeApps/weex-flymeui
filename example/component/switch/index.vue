<template>
  <div class="mzui-demo">
    <scroller class="scroller">
      <title link="http://design.flyme.cn/book/book.html?bookId=59ef0a54a5a0a6738061aeeb&doc=59eff86c67e2274f086396b2"></title>
      <category title="基本样式"></category>
      <div class="list">
        <div class="item">
            <fm-switch></fm-switch>
            <fm-switch common></fm-switch>
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
    background-color: #fff;
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
    flex: 1;
  }

  .text {
    font-size: 42px;
    margin-top: 30px;
  }
</style>

<script>
  import { FmSwitch } from '../../../index'
  import FmSwitch360 from '../../../packages/fm-switch/fm-switch-360.vue'
  import Title from '../../_mods/title.vue'
  import Category from '../../_mods/category.vue'
  import { setTitle } from '../../_mods/set-nav'

  const modal = weex.requireModule('modal')

  export default {
    components: { Title, Category, FmSwitch, FmSwitch360 },
    data: () => ({
      isChecked: true
    }),
    methods: {
      change(bool) {
        this.isChecked = bool
        console.log(this.isChecked)
      }
    },
    mounted() {
      // setTimeout(() => {
      //   this.isChecked = true
      // }, 3000)
    }
  }
</script>
