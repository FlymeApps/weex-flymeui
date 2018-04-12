<template>
  <div class="mzui-demo">
    <scroller class="scroller">
      <title link="https://yanjiie.github.io/weex-flymeui/#/packages/fm-popup/"></title>
      <category title="不同方向的 popup"></category>
        <div class="container row">
          <fm-button class="btn" @buttonClicked="click2">上方</fm-button>
          <fm-button class="btn" @buttonClicked="click1">底部</fm-button>
          <fm-button class="btn" @buttonClicked="click3">左边</fm-button>
          <fm-button class="btn" @buttonClicked="click4">右边</fm-button>
        </div>

      <fm-popup :have-overlay="isTrue"
                 popup-color="#FFFFFF"
                 :show="isTopShow"
                 @fmPopupOverlayClicked="popupOverlayTopClick"
                 pos="top"
                 height="400">
      </fm-popup>
      <fm-popup :have-overlay="isTrue"
								 ref="popup"
                 popup-color="#FFFFFF"
                 :show="isBottomShow"
                 @fmPopupOverlayClicked="popupOverlayBottomClick"
                 pos="bottom"
                 height="400">
          <fm-button class="btn" @buttonClicked="clickHide">主动隐藏</fm-button>
      </fm-popup>
      <fm-popup :have-overlay="isTrue"
                 popup-color="#FFFFFF"
                 :show="isLeftShow"
                 @fmPopupOverlayClicked="popupOverlayLeftClick"
                 pos="left"
                 width="400">
      </fm-popup>
      <fm-popup :have-overlay="isTrue"
                 popup-color="#FFFFFF"
                 :show="isRightShow"
                 @fmPopupOverlayClicked="popupOverlayRightClick"
                 pos="right"
                 width="400">
      </fm-popup>
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

  .btn {
    margin-right: 60px;
  }

  .scroller {
    position: absolute;
    top: 66px;
    right: 0;
    left: 0;
    bottom: 0;
  }

  .demo-content {
		height: 840px;
  }
</style>

<script>
import { FmButton, FmPopup } from 'weex-flymeui';
import Title from '../../_mods/title.vue';
import Category from '../../_mods/category.vue';

export default {
  components: { Title, Category, FmButton, FmPopup },
  data: () => ({
    isTrue: true,
    isTopShow: false,
    isBottomShow: false,
    isLeftShow: false,
    isRightShow: false
  }),
  mounted () {
  },
  methods: {
    click1 () {
      this.isBottomShow = true;
    },
    click2 () {
      this.isTopShow = true;
    },
    click3 () {
      this.isLeftShow = true;
    },
    click4 () {
      this.isRightShow = true;
    },
    popupOverlayBottomClick () {
      this.isBottomShow = false;
    },
    popupOverlayTopClick () {
      this.isTopShow = false;
    },
    popupOverlayLeftClick () {
      this.isLeftShow = false;
    },
    popupOverlayRightClick () {
      this.isRightShow = false;
    },
    clickHide () {
      this.$refs.popup.hide();
    }
  }
};
</script>
