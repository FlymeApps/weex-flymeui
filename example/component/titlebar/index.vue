<template>
  <div class="mzui-demo">
    <scroller class="scroller">
      <title link="https://yanjiie.github.io/weex-flymeui/#/packages/fm-titlebar/"></title>
      <category title="基本态"></category>
      <fm-titlebar title="基本态" rightText="更多" />
      <category title="修改背景颜色"></category>
      <fm-titlebar title="首页" background-color="#7E97AC" left-color="#687E8F" />
      <category title="功能按钮"></category>
      <fm-titlebar title="icon 按钮" :rightBtns="{
                                      type: 'icon',
                                      value: 'shuaxin',
                                      color: '#04C0CF'
                                    }" @fmTitlebarRightBtnClicked="rightBtnClick" />
      <fm-titlebar title="文字按钮" :rightBtns="{
                                     type: 'text',
                                      value: '更多',
                                     color: '#FFAF00'
                                   }" @fmTitlebarRightBtnClicked="rightBtnClick"/>
      <fm-titlebar title="混排按钮( 不超过3个 )" :rightBtns="btns1"  @fmTitlebarRightBtnClicked="rightBtnClick"/>
      <category title="预留状态栏"></category>
      <fm-titlebar title="预留状态栏" :statusbar="true" />
      <category title="文字过长处理"></category>
      <fm-titlebar title="这是一段很长很长的 title 这是一段很长很长的 title 这是一段很长很长的 title" :statusbar="false" />
      <category title="隐藏左边按钮"></category>
      <fm-titlebar title="首页" :hasPrev="false" :rightBtns="{
                                                  type: 'icon',
                                                  value: 'shuaxin',
                                                  color: '#04C0CF'
                                                }" @fmTitlebarRightBtnClick="rightBtnClick" />
      <category title="插槽 slot"></category>
      <fm-titlebar>
        <div class="slot-wrap" slot="middle">
          <fm-tag color="#F12528" size="big">精选</fm-tag><text class="title">电影合集</text>
        </div>
      </fm-titlebar>
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
    padding-top: 60px;
    padding-left: 60px;
    padding-right: 60px;
  }

  .row {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .scroller {
    position: absolute;
    top: 66px;
    right: 0;
    left: 0;
    bottom: 0;
  }

  .slot-wrap {
    flex-direction: row;
  }

  .title {
		flex: 1;
		text-overflow: ellipsis;
		lines: 1;
    font-family: sans-serif-medium;
    font-weight: 500;
    font-size: 48px;
    line-height: 57px;
    color: #FFAF00;
  }
</style>

<script>
import { FmTitlebar, FmTag } from 'weex-flymeui';
import Title from '../../_mods/title.vue';
import Category from '../../_mods/category.vue';
const modal = weex.requireModule('modal');

export default {
  components: { Title, Category, FmTitlebar, FmTag },
  data: () => ({
    btns1: [{
      type: 'icon',
      value: 'paizhao',
      color: '#3BC06B'
    }, {
      type: 'text',
      value: '更多',
      color: '#FC5B23'
    }]
  }),
  methods: {
    rightBtnClick (e) {
      modal.toast({ message: e });
    }
  }
};
</script>
