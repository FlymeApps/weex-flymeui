<!-- CopyRight (C) 2018-2022 FlymeApps Group Holding Limited. -->
<!-- Created by Yanjiie on 2018/6/12. -->
<template>
  <div>
    <div v-if="show || showIn"
         :style="wrapperStyle"
         ref="fm-loading"
         class="fm-loading"
         @click="warpperClicked"
         @touchend="handleTouchEnd">
      <div class="loading-wrapper"
          v-if="show || showIn">
          <FmLoading :text="title"></FmLoading>
      </div>
    </div>
  </div>
</template>

<script>
const animation = weex.requireModule('animation');

export default {
  name: 'FmLoading',
  props: {
    title: {
      type: String,
      default: ''
    },
    backgroundColor: {
      type: String,
      default: '#FFFFFF'
    },
    canAutoClose: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    show: false,
    showIn: false,
    loadingStart: 0,
    animating: false
  }),
  computed: {
    wrapperStyle () {
      const { showIn, backgroundColor } = this;
      return {
        backgroundColor,
        opacity: !showIn ? 0 : 1
      };
    }
  },
  methods: {
    handleTouchEnd (e) {
      // 原生上有点击穿透问题
      e.preventDefault && e.preventDefault();
    },
    appear (bool) {
      if (this.animating) { return; }
      const elm = this.$refs['fm-loading'];
      if (!elm) {
        this.showIn = bool;
        return;
      }
      this.animating = true;
      animation.transition(elm, {
        styles: {
          opacity: bool ? 1 : 0
        },
        duration: 320,
        timingFunction: 'cubic-bezier(0.33, 0, 0.66, 1)'
      }, () => {
        this.showIn = bool;
        if (bool) {
          this.$emit('fmLoadingAppeared', false);
        } else {
          this.$emit('fmLoadingDisappeared', false);
        }
        this.animating = false;
      });
    },
    warpperClicked () {
      if (this.animating) { return; }
      if (this.canAutoClose) {
        this.hide();
      }
    },
    active () {
      if (this.show) {
        return;
      }
      this.show = true;
      this.loadingStart = new Date().getTime();
      setTimeout(() => {
        this.appear(true);
      }, 20);
    },
    hide () {
      if (!this.show) {
        return;
      }
      this.show = false;
      let timeout = 20;
      if (new Date().getTime() - this.loadingStart <= 500) {
        timeout = 500;
      }
      setTimeout(() => {
        this.appear(false);
      }, timeout);
    }
  }
};
</script>

<style scoped>
  .fm-loading {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    /*兼容H5异常*/
    z-index: 999;
  }

  .loading-wrapper {
    align-items: center;
  }

  .loading--text {
    font-size: 42px;
    font-family: sans-serif-medium;
    font-weight: 500;
    text-align: center;
  }
</style>
