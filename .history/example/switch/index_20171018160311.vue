<template>
  <div class="mzui-demo">
    <scroller class="scroller">
      <title title="fm-switch"></title>
      <category title="基本样式"></category>
      <div class="list">
        <fm-switch></fm-switch>
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
      <category title="基本样式"></category>
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
    padding: 24px;
    padding-bottom: 14px;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
  }

  .item {
    width: 230px;
    margin-bottom: 30px;
    align-items: center;
  }

  .button-text {
    margin-top: 40px;
    margin-left: 8px;
    margin-bottom: 16px;
  }

  .scroller {
    flex: 1;
  }

  .demo {
    align-items: center;
    margin-top: 40px;
    margin-bottom: 40px;
  }

  .input {
    width: 500px;
    text-align: right;
    font-size: 28px;
  }
</style>

<script>
import { FmSwitch } from '../../index';
import Title from '../_mods/title.vue';
import Category from '../_mods/category.vue';
import { setTitle } from '../_mods/set-nav';

const modal = weex.requireModule('modal');

export default {
    components: { Title, Category, FmSwitch },
}
</script>
