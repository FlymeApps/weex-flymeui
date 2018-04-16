<template>
  <div>
    <fm-titlebar title="点击右边按钮试试"
                 :rightBtns="{
                   type: 'icon',
                   value: 'gengduo'
                 }"
                 @fmTitlebarRightBtnClicked="show('top')" />
    <title></title>

    <div class="btn-wrap">
      <fm-button size="large" @buttonClicked="show('center')" color="#3bc06b">渐变弹出</fm-button>
    </div>

    <div class="btn-wrap">
      <fm-button size="large" @buttonClicked="show('left')">从左弹出</fm-button>
      <fm-button size="large" @buttonClicked="show('right')" color="#04c0cf">从右弹出</fm-button>
    </div>

    <fm-footer>
      <fm-button color="#dc2a2a" size="huge" @buttonClicked="show('bottom')">立即开始</fm-button>
    </fm-footer>

    <fm-popover ref="popover-top"
                @fmPopoverBtnClicked="onClicked"
                :position="{ x: -1, y: 144, pos: 'top' }"
                :buttons="buttons"></fm-popover>

    <fm-popover ref="popover-left"
                @fmPopoverBtnClicked="onClicked"
                :position="{ x: -30, y: -330, pos: 'left' }"
                :overlay-opacity="0.2"
                :buttons="buttons"></fm-popover>

    <fm-popover ref="popover-right"
                @fmPopoverBtnClicked="onClicked"
                :position="{ x: 30, y: -330, pos: 'right' }"
                :overlay-opacity="0.2"
                :buttons="buttons"></fm-popover>

    <fm-popover ref="popover-bottom"
                @fmPopoverBtnClicked="onClicked"
                :position="{ x: 226, y: -144, pos: 'bottom' }"
                :overlay-opacity="0.2"
                :buttons="buttons"></fm-popover>

    <fm-popover ref="popover-center"
                @fmPopoverBtnClicked="onClicked"
                :position="{ x: 226, y: 121, pos: 'center' }"
                :overlay-opacity="0.2"
                :buttons="buttons"></fm-popover>
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

  .btn-wrap {
    flex-direction: row;
    height: 300px;
    align-items: center;
    justify-content: space-around;
  }
</style>

<script>
import { FmPopover, FmTitlebar, FmButton, FmFooter } from 'weex-flymeui';
import Title from '../../_mods/title.vue';
import Category from '../../_mods/category.vue';

const modal = weex.requireModule('modal');

export default {
  components: { Title, Category, FmPopover, FmTitlebar, FmButton, FmFooter },
  data: () => ({
    overShow: false,
    buttons: [{
      text: '查看',
      icon: 'saomiao'
    }, {
      text: '查看'
    }, {
      text: '查看'
    }]
  }),
  methods: {
    show (pos) {
      this.$refs[`popover-${pos}`].visible(true);
    },
    onClicked (e) {
      modal.toast({ message: e.index });
    }
  }
};
</script>
