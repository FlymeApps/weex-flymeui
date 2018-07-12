<template>
  <div class="mzui-demo">
    <scroller class="scroller">
      <title link="https://yanjiie.github.io/weex-flymeui/#/packages/fm-action-sheet/"></title>
      <category title="底部删除弹框"></category>
        <div class="container row">
          <fm-button class="btn" @buttonClicked="click" >点击弹起</fm-button>
        </div>
    </scroller>

    <fm-action-sheet :show="actionSheetShow"
                     @fmActionSheetBtnClicked="fmActionSheetBtnClicked"
                     @fmActionSheetOverlayClick="fmActionSheetOverlayClick">
    </fm-action-sheet>

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
  }

  .btn {
    margin-right: 60px;
  }

  .scroller {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
</style>

<script>
import { FmButton, FmActionSheet } from 'weex-flymeui';
import Title from '../../_mods/title.vue';
import Category from '../../_mods/category.vue';

export default {
  components: { Title, Category, FmButton, FmActionSheet },
  data: () => ({
    actionSheetShow: false
  }),
  methods: {
    click () {
      this.actionSheetShow = true;
    },
    fmActionSheetBtnClicked (msg) {
      modal.toast({ message: msg });
    },
    fmActionSheetOverlayClick () {
      this.actionSheetShow = false;
    }
  }
};
</script>
