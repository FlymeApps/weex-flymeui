<template>
  <div class="mzui-demo">
    <scroller class="scroller">
      <title link="https://yanjiie.github.io/weex-flymeui/#/packages/fm-switch/"></title>
      <div class="container row">
        <fm-text>基本样式</fm-text>
        <fm-switch></fm-switch>
      </div>
      <div class="container row">
        <fm-text>实心样式</fm-text>
        <fm-switch solid></fm-switch>
      </div>
      <div class="container row">
        <fm-text>自定义样式</fm-text>
        <fm-switch border-color="#198DED" blur-color="#3BC06B" focus-color="#FC5B23"></fm-switch>
      </div>
      <div class="container row">
        <fm-text>默认选中</fm-text>
        <fm-switch :checked="true"></fm-switch>
      </div>
      <div class="container row">
        <fm-text>禁用状态</fm-text>
        <fm-switch disabled></fm-switch>
      </div>
      <category title="不同主题样式"></category>
      <div class="list">
        <div class="item">
          <fm-switch backgroundColor="#198DED" checked></fm-switch>
          <fm-text>Blue</fm-text>
        </div>
        <div class="item">
          <fm-switch backgroundColor="#DC2A2A" checked></fm-switch>
          <fm-text>Firebrick</fm-text>
        </div>
        <div class="item">
          <fm-switch backgroundColor="#04C0CF" checked></fm-switch>
          <fm-text>Seagreen</fm-text>
        </div>
        <div class="item">
          <fm-switch backgroundColor="#FC5B23" checked></fm-switch>
          <fm-text>Tomato</fm-text>
        </div>
        <div class="item">
          <fm-switch backgroundColor="#16B7AA" checked></fm-switch>
          <fm-text>Mintgreen</fm-text>
        </div>
        <div class="item">
          <fm-switch backgroundColor="#FFAF00" checked></fm-switch>
          <fm-text>Coral</fm-text>
        </div>
        <div class="item">
          <fm-switch backgroundColor="#3BC06B" checked></fm-switch>
          <fm-text>Limegreen</fm-text>
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
    align-items: center;
  }

  .scroller {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }

  .container {
    padding-top: 60px;
    padding-left: 60px;
    padding-right: 60px;
  }

  .row {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
</style>

<script>
import { FmSwitch, FmText } from 'weex-flymeui';
import Title from '../../_mods/title.vue';
import Category from '../../_mods/category.vue';

export default {
  components: { Title, Category, FmSwitch, FmText }
};
</script>
