<template>
  <div class="mzui-demo">
    <scroller class="scroller">
      <title link="http://design.flyme.cn/book/book.html?bookId=59ef0a54a5a0a6738061aeeb&doc=59efee69a5a0a6738061aeff"></title>
      <category title="不同方向的 popup"></category>
        <div class="container row">
          <fm-button class="btn" text="上方" @click="click2" />
          <fm-button class="btn" text="底部" @click="click1" />
          <fm-button class="btn" text="左边" @click="click3" />
          <fm-button class="btn" text="右边" @click="click4" />
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
          <fm-button class="btn" text="主动隐藏" @click="clickHide" />
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

<style lang="sass" scoped>
  @import "../../../packages/style/mixin.scss";
  .mzui-demo {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #fff;
  }
  
  .container {
    padding-top: size(60);
    padding-left: size(60);
    padding-right: size(60);
  }

  .row {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .btn {
    margin-right: size(60);
  }
  
  .scroller {
    flex: 1;
  }

  .demo-content {
		height: 840px;
  }
</style>

<script>
import { FmButton, FmPopup } from '../../../index';
import Title from '../../_mods/title.vue';
import Category from '../../_mods/category.vue';
import { setTitle } from '../../_mods/set-nav';

const modal = weex.requireModule('modal');

export default {
	components: { Title, Category, FmButton, FmPopup },
	data: ()=> ({
		isTrue: true,
		isTopShow: false,
		isBottomShow: false,
		isLeftShow: false,
		isRightShow: false,
	}),
	mounted() {
	},
	methods: {
		click1() {
			this.isBottomShow = true
		},
		click2() {
			this.isTopShow = true
		},
		click3() {
			this.isLeftShow = true
		},
		click4() {
			this.isRightShow = true
		},
		popupOverlayBottomClick () {
			this.isBottomShow = false
		},
		popupOverlayTopClick () {
			this.isTopShow = false
		},
		popupOverlayLeftClick () {
			this.isLeftShow = false
		},
		popupOverlayRightClick () {
			this.isRightShow = false
		},
		clickHide() {
			this.$refs.popup.hide();
		}
	}
}
</script>
