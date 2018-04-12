<!-- CopyRight (C) 2018-2022 FlymeApps Group Holding Limited. -->
<!-- Created and Updated by Yanjiie on 2018/04/12. Fork from weex-ui. -->
<template>
  <div>
    <div @touchend="handleTouchEnd">
      <fm-overlay :show="haveOverlay && isOverShow"
                   v-if="show"
                   ref="overlay"
                   v-bind="overlayCfg"
                   @fmOverlayBodyClicking="fmOverlayBodyClicking"></fm-overlay>
    </div>
    <div ref="fm-popup"
         v-if="show"
         :height="_height"
         :hack="isNeedShow"
         @click="()=>{}"
         :class="['fm-popup', pos]"
         :style="padStyle">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
	.fm-popup {
		position: fixed;
		width: 1080px;
	}

  .top {
    left: 0;
    right: 0;
  }

  .bottom {
    left: 0;
    right: 0;
  }

  .left {
    bottom: 0;
    top: 0;
  }

  .right {
    bottom: 0;
    top: 0;
  }
</style>

<script>
const animation = weex.requireModule('animation');
const { platform } = weex.config.env;
const isWeb = typeof (window) === 'object' && platform.toLowerCase() === 'web';
import FmOverlay from '../fm-overlay';

export default {
  name: 'FmPopup',
  components: { FmOverlay },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    pos: {
      type: String,
      default: 'bottom'
    },
    popupColor: {
      type: String,
      default: '#FFFFFF'
    },
    overlayCfg: {
      type: Object,
      default: () => ({
        hasAnimation: true,
        timingFunction: ['ease-in', 'ease-out'],
        duration: 300,
        opacity: 0.5
      })
    },
    height: {
      type: [Number, String],
      default: 840
    },
    standOut: {
      type: [Number, String],
      default: 0
    },
    width: {
      type: [Number, String],
      default: 1080
    },
    animation: {
      type: Object,
      default: () => ({
        timingFunction: 'ease-out'
      })
    }
  },
  data: () => ({
    haveOverlay: true,
    isOverShow: true
  }),
  computed: {
    isNeedShow () {
      setTimeout(() => {
        this.appearPopup(this.show);
      }, 50);
      return this.show;
    },
    _height () {
      this.appearPopup(this.show, 150);
      return this.height;
    },
    transformValue () {
      return this.getTransform(this.pos, this.width, this.height, true);
    },
    padStyle () {
      const { pos, width, height, popupColor } = this;
      let style = {
        width: `${width}px`,
        backgroundColor: popupColor
      };
      pos === 'top' && (style = {
        ...style,
        top: `${-height}px`,
        height: `${height}px`
      });
      pos === 'bottom' && (style = {
        ...style,
        bottom: `${-height}px`,
        height: `${height}px`
      });
      pos === 'left' && (style = {
        ...style,
        left: `${-width}px`
      });
      pos === 'right' && (style = {
        ...style,
        right: `${-width}px`
      });
      return style;
    }
  },
  methods: {
    handleTouchEnd (e) {
      const { platform } = weex.config.env;
      platform === 'Web' && e.preventDefault && e.preventDefault();
    },
    hide () {
      this.appearPopup(false);
      this.$refs.overlay.appearOverlay(false);
    },
    fmOverlayBodyClicking () {
      this.isShow && this.appearPopup(false);
    },
    appearPopup (bool, duration = 300) {
      this.isShow = bool;
      const popupEl = this.$refs['fm-popup'];
      if (!popupEl) {
        return;
      }
      animation.transition(popupEl, {
        styles: {
          transform: this.getTransform(this.pos, this.width, this.height, !bool)
        },
        duration,
        delay: 0,
        ...this.animation
      }, () => {
        if (!bool) {
          this.$emit('fmPopupOverlayClicked', { pos: this.pos });
        }
      });
    },
    getTransform (pos, width, height, bool) {
      let _size = pos === 'top' || pos === 'bottom' ? height : width;
      let _transform;
      if (isWeb) {
        _size -= this.standOut;
      }
      bool && (_size = 0);
      switch (pos) {
        case 'top':
          _transform = `translateY(${_size}px)`;
          break;
        case 'bottom':
          _transform = `translateY(-${_size}px)`;
          break;
        case 'left':
          _transform = `translateX(${_size}px)`;
          break;
        case 'right':
          _transform = `translateX(-${_size}px)`;
          break;
      }
      return _transform;
    }
  }
};
</script>
