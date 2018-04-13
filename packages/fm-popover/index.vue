<!-- CopyRight (C) 2018-2022 FlymeApps Group Holding Limited. -->
<!-- Created by Yanjiie on 2018/04/12. -->
<template>
  <div class="popover-wrap">
    <fm-overlay v-if="show || showIn"
                :hasAnimation="true"
                :canAutoClose="true"
                :opacity="overlayOpacity"
                @fmOverlayBodyClicking="overlayClicking"
                ref="fm-overlay"></fm-overlay>
    <div ref="fm-popover"
         class="popover"
         v-if="show || showIn"
         :style="popoverStyle"
         @touchend="handleTouchEnd">
      <div class="content">

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
    z-index: 10;
    width: 628px;
    padding: 20px;
    height: 675px;
    border-radius: 10px;
  }

  .content {
    flex: 1;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
    background-color: #FFFFFF;
    border-radius: 10px;
  }
</style>

<script>
import FmOverlay from '../fm-overlay';
const animation = weex.requireModule('animation');

export default {
  name: 'FmPopover',
  components: { FmOverlay },
  props: {
    position: {
      type: Object,
      default: () => ({
        x: -1,
        y: 124
      })
    },
    hasAnimation: {
      type: Boolean,
      default: true
    },
    overlayOpacity: {
      type: Number,
      default: 0.2
    }
  },
  data: () => ({
    show: false,
    showIn: false
  }),
  computed: {
    popoverStyle () {
      const { x = 0, y = 0 } = this.position;
      const style = {};
      x < 0 ? (style.right = `${-x}px`) : (style.left = `${x}px`);
      y < 0 ? (style.bottom = `${-y}px`) : (style.top = `${y}px`);
      style.transform = `translateY(${this.showIn ? 0 : -30}px)`;
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
      const popoverEl = this.$refs['fm-popover'];
      if (!popoverEl) {
        return;
      }
      const styles = bool ? {
        transform: 'translateY(0px)',
        opacity: 1
      } : {
        transform: 'translateY(-30px)',
        opacity: 0
      };
      animation.transition(popoverEl, {
        styles,
        duration: hasAnimation ? 300 : 0.0001
      }, e => {
        this.showIn = bool;
      });
    },
    overlayClicking () {
      this.visible(false);
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
