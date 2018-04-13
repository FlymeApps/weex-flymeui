<template>
  <div>
    <fm-titlebar title="点击右边按钮试试"
                 :rightBtns="{
                   type: 'icon',
                   value: 'gengduo'
                 }"
                 @fmTitlebarRightBtnClicked="rightBtnClick" />
    <fm-popover ref="popover"></fm-popover>
  </div>
</template>

<style scoped>
  .scroller {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
</style>

<script>
import { FmPopover, FmTitlebar } from 'weex-flymeui';
import Title from '../../_mods/title.vue';
import Category from '../../_mods/category.vue';

const modal = weex.requireModule('modal');

export default {
  components: { Title, Category, FmPopover, FmTitlebar },
  data: () => ({
    overShow: false
  }),
  methods: {
    rightBtnClick (e) {
      this.$refs.popover.visible(true);
    }
  }
};
</script>
