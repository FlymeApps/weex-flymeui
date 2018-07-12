<!-- CopyRight (C) 2018-2022 FlymeApps Team Holding Limited. -->
<!-- Created by Yanjiie on 2018/04/12. -->
<template>
  <div class="popover-wrap">
    <fm-overlay v-if="show || showIn"
                :hasAnimation="true"
                :canAutoClose="true"
                :use-native="false"
                :opacity="overlayOpacity"
                @fmOverlayBodyClicking="visible(false)"
                ref="fm-overlay"></fm-overlay>
    <div ref="fm-popover"
         class="popover"
         v-if="show || showIn"
         :style="popoverStyle"
         @touchend="handleTouchEnd">
      <div class="content"
           :style="{ height: buttons.length * 168 - 2 + 'px' }">
        <div v-for="(item, index) in buttons"
             :key="index"
             class="item"
             @click="onClicked(index)">
          <div class="item-content">
            <fm-icon class="item-icon" v-if="item.icon" :name="item.icon" :icon-style="67" />
            <text class="item-text">{{ item.text }}</text>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .popover-wrap{
    position: fixed;
    width: 1080px;
    /*兼容H5异常*/
    z-index: 99999;
  }

  .popover {
    position: fixed;
    z-index: 99;
    width: 628px;
    padding: 20px;
    border-radius: 10px;
  }

  .content {
    flex: 1;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
    background-color: #FFFFFF;
    border-radius: 10px;
    overflow: hidden;
  }

  .item {
    height: 168px;
    padding: 0 48px;
  }

  .item-content {
    flex: 1;
    flex-direction: row;
    border-bottom-width: 2px;
    border-color: rgba(0,0,0,0.10);
    align-items: center;
  }

  .item-text {
    font-size: 48px;
  }

  .item-icon {
    margin-right: 15px;
  }
</style>

<script>
import FmOverlay from '../fm-overlay';
import FmIcon from '../fm-icon';
const animation = weex.requireModule('animation');

export default {
  name: 'FmPopover',
  components: { FmOverlay, FmIcon },
  props: {
    buttons: {
      type: Array,
      default: () => ([])
    },
    position: {
      type: Object,
      default: () => ({
        pos: 'top',
        x: 0,
        y: 0
      })
    },
    hasAnimation: {
      type: Boolean,
      default: true
    },
    overlayOpacity: {
      type: Number,
      default: 0.0
    }
  },
  data: () => ({
    show: false,
    showIn: false
  }),
  computed: {
    popoverStyle () {
      const { x = 0, y = 0, pos = 'top' } = this.position;
      const style = {};
      x < 0 ? (style.right = `${-x}px`) : (style.left = `${x}px`);
      y < 0 ? (style.bottom = `${-y}px`) : (style.top = `${y}px`);
      switch (pos) {
        case 'top':
          style.transform = `translateY(${this.showIn ? 0 : -20}px)`;
          break;
        case 'bottom':
          style.transform = `translateY(${this.showIn ? 0 : 20}px)`;
          break;
        case 'left':
          style.transform = `translateX(${this.showIn ? 0 : -20}px)`;
          break;
        case 'right':
          style.transform = `translateX(${this.showIn ? 0 : 20}px)`;
          break;
      }
      style.opacity = !this.showIn ? 0 : 1;
      return style;
    }
  },
  methods: {
    handleTouchEnd (e) {
      // 原生上有点击穿透问题
      e.preventDefault && e.preventDefault();
    },
    appearPopover (bool) {
      const { hasAnimation } = this;
      const { pos = 'top' } = this.position;
      const popoverEl = this.$refs['fm-popover'];
      if (!popoverEl) {
        return;
      }
      let hideTransform;
      switch (pos) {
        case 'top':
          hideTransform = 'translateY(-20px)';
          break;
        case 'bottom':
          hideTransform = 'translateY(20px)';
          break;
        case 'left':
          hideTransform = 'translateX(-20px)';
          break;
        case 'right':
          hideTransform = 'translateX(20px)';
          break;
      }
      const styles = bool ? {
        transform: 'translateX(0px) translateY(0px)',
        opacity: 1
      } : {
        transform: hideTransform,
        opacity: 0
      };
      animation.transition(popoverEl, {
        styles,
        duration: hasAnimation ? 150 : 0.0001,
        timingFunction: 'ease-out'
      }, e => {
        this.showIn = bool;
      });
    },
    onClicked (index) {
      this.visible(false);
      this.$emit('fmPopoverBtnClicked', { index });
    },
    visible (bool) {
      this.show = bool;
      setTimeout(() => {
        this.appearPopover(bool);
      }, 40);
    }
  }
};
</script>
