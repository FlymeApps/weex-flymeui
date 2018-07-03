<!-- CopyRight (C) 2018-2022 FlymeApps Team Holding Limited. -->
<!-- Created and Updated by Yanjiie on 2018/04/12. Fork from weex-ui. -->
<template>
  <component :is="isCreator ? 'FmOverlayNative' : 'div'"
             :visible="show"
             @onDismiss="overlayClicked"
             :touchable='canAutoClose'>
    <div class="fm-overlay"
         ref="fm-overlay"
         v-if="show && !isCreator"
         :watch="shouldShow"
         @click="overlayClicked"
         :style="overlayStyle">
      <slot></slot>
    </div>
    <div v-if="isCreator">
      <slot></slot>
    </div>
  </component>
</template>

<style scoped>
  .fm-overlay {
    width: 1080px;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
  }
</style>

<script>
const animation = weex.requireModule('animation');
export default {
  name: 'FmOverlay',
  props: {
    show: {
      type: Boolean,
      default: true
    },
    hasAnimation: {
      type: Boolean,
      default: true
    },
    duration: {
      type: [Number, String],
      default: 300
    },
    timingFunction: {
      type: Array,
      default: () => (['ease-in', 'ease-out'])
    },
    opacity: {
      type: [Number, String],
      default: 0.5
    },
    canAutoClose: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    overlayStyle () {
      return {
        opacity: this.hasAnimation ? 0 : 1,
        backgroundColor: `rgba(0, 0, 0,${this.opacity})`
      };
    },
    shouldShow () {
      if (this.isCreator) { return; }
      const { show, hasAnimation } = this;
      hasAnimation && setTimeout(() => {
        this.appearOverlay(show);
      }, 50);
      return show;
    },
    isCreator () {
      return weex.supports && weex.supports('@component/FmOverlayNative');
    }
  },
  methods: {
    overlayClicked (e) {
      this.canAutoClose ? this.appearOverlay(false) : this.$emit('fmOverlayBodyClicked', {});
    },
    appearOverlay (bool, duration = this.duration) {
      const { hasAnimation, timingFunction, canAutoClose } = this;
      const needEmit = !bool && canAutoClose;
      needEmit && (this.$emit('fmOverlayBodyClicking', {}));
      const overlayEl = this.$refs['fm-overlay'];
      if (hasAnimation && overlayEl) {
        animation.transition(overlayEl, {
          styles: {
            opacity: bool ? 1 : 0
          },
          duration,
          timingFunction: timingFunction[bool ? 0 : 1],
          delay: 0
        }, () => {
          needEmit && (this.$emit('fmOverlayBodyClicked', {}));
        });
      } else {
        needEmit && (this.$emit('fmOverlayBodyClicked', {}));
      }
    },
    hide () {
      this.appearOverlay(false);
    }
  }
};
</script>
