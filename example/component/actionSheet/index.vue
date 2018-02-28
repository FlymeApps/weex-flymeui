<template>
  <div class="mzui-demo">
    <scroller class="scroller">
      <title link="http://apps.flyme.cn/docs/book.html?bookId=59ef0a54a5a0a6738061aeeb&doc=5a3390e567e2277e77dcf945"></title>
      <category title="底部删除弹框"></category>
        <div class="container row">
          <fm-button class="btn" text="点击弹起" @click="click" />
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
    flex: 1;
  }
</style>

<script>
import { FmButton, FmActionSheet } from '../../../index';
import Title from '../../_mods/title.vue';
import Category from '../../_mods/category.vue';
import { setTitle } from '../../_mods/set-nav';

const modal = weex.requireModule('modal');

export default {
  components: { Title, Category, FmButton, FmActionSheet },
  data: () => ({
    actionSheetShow: false
  }),
  methods: {
    click() {
      this.actionSheetShow = true
    },
    fmActionSheetBtnClicked(msg) {
      modal.toast({ message: msg })
    },
    fmActionSheetOverlayClick() {
      this.actionSheetShow = false
    }
  }
}
</script>
