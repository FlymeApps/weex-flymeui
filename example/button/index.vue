<template>
  <div class="mzui-demo">
    <scroller class="scroller">
      <title title="fm-button"></title>
      <category title="默认按钮"></category>
        <div class="container row">
          <fm-button class="btn" text="安装" @click="click" />
          <fm-button class="btn" text="不可用" @click="click" disabled />
        </div>
      <category title="不同尺寸"></category>
        <div class="container row">
          <fm-button class="btn" text="小" @click="click" />
          <fm-button class="btn" text="大按钮" @click="click" />
          <fm-button class="btn" text="最大的按钮" @click="click" />
        </div>
      <category title="空心按钮"></category>
        <div class="container">
          <fm-button text="安装" @click="click" bgColor="transparent" color="#198ded" />
        </div>
      <category title="自定义属性"></category>
        <div class="container row">
          <fm-button class="btn" text="安装" @click="click" bgColor="transparent" color="#dc2a2a" />
          <fm-button class="btn" text="立即订阅" @click="click" color="#ffffff" bgColor="#3bc06b" />
          <fm-button class="btn" text="立即订阅" @click="click" color="#ffffff" bgColor="#ffaf00" />
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
  
  .container {
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px; 
  }

  .row {
    flex-direction: row;
  }

  .btn {
    margin-right: 20px;
  }
  
  .scroller {
    flex: 1;
  }
</style>

<script>
import { FmButton, FmText } from '../../index';
import Title from '../_mods/title.vue';
import Category from '../_mods/category.vue';
import { setTitle } from '../_mods/set-nav';

const modal = weex.requireModule('modal');

export default {
    components: { Title, Category, FmButton, FmText },
    methods: {
      click() {
        
      }
    }
}
</script>
