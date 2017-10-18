<template>
  <div class="mzui-demo">
    <scroller class="scroller">
      <title title="fm-switch"></title>
      <category title="基本样式"></category>
      <div class="list">
        <fm-switch></fm-switch>
      </div>
      <category title="有初始化值的按钮"></category>
      <div class="list">
        <fm-switch checked="true"></fm-switch>
        <fm-switch disabled="true"></fm-switch>
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
