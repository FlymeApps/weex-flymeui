<template>
  <div class="mzui-demo">
    <scroller class="scroller">
      <title link=""></title>
      <category title="单个按钮" class="title"></category>
        <fm-btnbar @fmBtnbarBtnClicked="handle">
          <fm-btnbar-item>开始</fm-btnbar-item>
        </fm-btnbar>

      <category title="最多两个按钮" class="title"></category>
        <fm-btnbar @fmBtnbarBtnClicked="handle">
          <fm-btnbar-item disabled>取消订单</fm-btnbar-item>
          <fm-btnbar-item>提交订单</fm-btnbar-item>
        </fm-btnbar>

      <category title="数组用法" class="title"></category>
        <fm-btnbar :items="btns" @fmBtnbarBtnClicked="handle" />

      <category title="按钮置灰" class="title"></category>
        <fm-btnbar @fmBtnbarBtnClicked="handle">
          <fm-btnbar-item disabled>这个按钮置灰了文字太长了太长</fm-btnbar-item>
        </fm-btnbar>

      <category title="不同主题" class="title"></category>
        <fm-btnbar @fmBtnbarBtnClicked="handle">
          <fm-btnbar-item theme="limegreen">limegreen 主题</fm-btnbar-item>
        </fm-btnbar>
        <fm-btnbar @fmBtnbarBtnClicked="handle">
          <fm-btnbar-item theme="crimson">crimson 主题</fm-btnbar-item>
        </fm-btnbar>
        <fm-btnbar @fmBtnbarBtnClicked="handle">
          <fm-btnbar-item theme="coral">coral 主题</fm-btnbar-item>
        </fm-btnbar>

      <category title="自定义按钮" class="title"></category>
        <fm-btnbar @fmBtnbarBtnClicked="handle">
          <fm-btnbar-item theme="limegreen">
            <div class="custom" slot="title" slot-scope="props">
              <fm-icon name="bianji" icon-style="48" color="#FFFFFF"></fm-icon>
              <text class="custom-txt">编辑</text>
            </div>
          </fm-btnbar-item>
        </fm-btnbar>
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

  .scroller {
    flex: 1;
  }

  .title {
    margin-bottom: 30px;
  }

  .custom {
    flex-direction: row;
    align-items: center;
  }

  .custom-txt {
    color: #FFFFFF;
    font-size: 48px;
    font-weight: 500;
    font-family: sans-serif-medium;
    margin-left: 20px;
  }
</style>

<script>
import { FmBtnbar, FmBtnbarItem, FmIcon } from '../../../index';
import Title from '../../_mods/title.vue';
import Category from '../../_mods/category.vue';
const modal = weex.requireModule('modal');

export default {
  components: { FmBtnbar, FmBtnbarItem, Title, Category, FmIcon },
  data: () => ({
    btns: [{
      title: '取消订单',
      disabled: true
    }, {
      title: '提交订单'
    }]
  }),
  methods: {
    handle (e) {
      modal.toast({ message: '按钮被点击了' });
    }
  }
};
</script>
