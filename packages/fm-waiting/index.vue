<!-- CopyRight (C) 2018-2022 FlymeApps Team Holding Limited. -->
<!-- Created by Yanjiie on 2018/4/26. -->

<template>
  <div>
    <div v-if="show || showIn"
         :style="wrapperStyle"
         ref="fm-waiting"
         class="fm-waiting"
         @click="warpperClicked"
         @touchend="handleTouchEnd">
      <div class="waiting-wrapper"
          v-if="show || showIn">
          <div class="waiting-circle">
              <div class="waiting--dot waiting--dot-1" ref="dot-1"></div>
              <div class="waiting--dot waiting--dot-2" ref="dot-2"></div>
              <div class="waiting--dot waiting--dot-3" ref="dot-3"></div>
          </div>
          <text class="waiting--text">{{ title }}</text>
      </div>
    </div>
  </div>
</template>

<script>
import Queue from './queue';
const animation = weex.requireModule('animation');

export default {
  name: 'FmWaiting',
  props: {
    title: {
      type: String,
      default: ''
    },
    backgroundOpacity: {
      type: Number,
      default: 0.7
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
      const { showIn, backgroundOpacity } = this;
      return {
        backgroundColor: `rgba(0, 0, 0, ${backgroundOpacity})`,
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
      const elm = this.$refs['fm-waiting'];
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
          this.$emit('fmWaitingAppeared', false);
        } else {
          this.$emit('fmWaitingDisappeared', false);
        }
        this.animating = false;
      });
    },
    start () {
      this.prepare();
      this.dot1Queue.loop();
      this.dot2Queue.loop();
      this.dot3Queue.loop();
    },
    stop () {
      this.dot1Queue && this.dot1Queue.stop();
      this.dot2Queue && this.dot2Queue.stop();
      this.dot3Queue && this.dot3Queue.stop();
    },
    warpperClicked () {
      if (this.animating) { return; }
      if (this.canAutoClose) {
        this.hide();
      }
    },
    prepare () {
      this.dot1 = this.$refs['dot-1'];
      this.dot2 = this.$refs['dot-2'];
      this.dot3 = this.$refs['dot-3'];

      const steps1 = [{
        styles: {
          transform: 'translateX(48px) scale(1)',
          opacity: 1,
          perspective: 0
        },
        duration: 700, // ms
        timingFunction: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)'
      }, {
        styles: {
          transform: 'translateX(96px) scale(0.5)',
          opacity: 1,
          perspective: 0
        },
        duration: 700, // ms
        timingFunction: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)'
      }, {
        styles: {
          transform: 'translateX(90px) scale(0.3)',
          opacity: 0,
          perspective: 0
        },
        duration: 200, // ms
        timingFunction: 'linear'
      }, {
        styles: {
          transform: 'translateX(0px) scale(0.5)',
          opacity: 1,
          perspective: 0
        },
        duration: 500, // ms
        timingFunction: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)'
      }];
      this.dot1Queue = Queue(this.dot1, steps1);

      const steps2 = [{
        styles: {
          transform: 'translateX(48px) scale(0.5)',
          opacity: 1,
          perspective: 0
        },
        duration: 700, // ms
        timingFunction: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)'
      }, {
        styles: {
          transform: 'translateX(40px) scale(0.3)',
          opacity: 0,
          perspective: 0
        },
        duration: 200, // ms
        timingFunction: 'linear'
      }, {
        styles: {
          transform: 'translateX(-48px) scale(0.5)',
          opacity: 1,
          perspective: 0
        },
        duration: 500, // ms
        timingFunction: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)'
      }, {
        styles: {
          transform: 'translateX(0px) scale(1)',
          opacity: 1,
          perspective: 0
        },
        duration: 700, // ms
        timingFunction: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)'
      }];
      this.dot2Queue = Queue(this.dot2, steps2);

      const steps3 = [{
        styles: {
          transform: 'translateX(-6px) scale(0.3)',
          opacity: 0,
          perspective: 0
        },
        duration: 200, // ms
        timingFunction: 'linear'
      }, {
        styles: {
          transform: 'translateX(-96px) scale(0.5)',
          opacity: 1,
          perspective: 0
        },
        duration: 500, // ms
        timingFunction: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)'
      }, {
        styles: {
          transform: 'translateX(-48px) scale(1)',
          opacity: 1,
          perspective: 0
        },
        duration: 700, // ms
        timingFunction: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)'
      }, {
        styles: {
          transform: 'translateX(0px) scale(0.5)',
          opacity: 1,
          perspective: 0
        },
        duration: 700, // ms
        timingFunction: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)'
      }];
      this.dot3Queue = Queue(this.dot3, steps3);
    },
    active () {
      if (this.show) {
        return;
      }
      this.show = true;
      this.loadingStart = new Date().getTime();
      setTimeout(() => {
        this.appear(true);
        this.start();
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
        this.stop();
      }, timeout);
    }
  }
};
</script>

<style scoped>
  .fm-waiting {
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

  .waiting-wrapper {
    align-items: center;
    height: 240px;
    border-radius: 18px;
    padding: 0 72px;
    background-color: rgba(255, 255, 255, 0.9);
  }

  .waiting--text {
    font-size: 42px;
    font-family: sans-serif-medium;
    font-weight: 500;
    text-align: center;
  }

  .waiting-circle {
    flex-direction: row;
    justify-content: center;
    margin: 60px 0;
  }

  .waiting--dot {
    z-index: 1;
    width: 42px;
    height: 42px;
    margin: 0 3px;
    border-radius: 21px;
    opacity: 1;
  }

  .waiting--dot-1 {
    background-color: #4da84f;
    transform: scale(0.5);
  }

  .waiting--dot-2 {
    background-color: #4d79d3;
    transform: scale(1);
  }

  .waiting--dot-3 {
    background-color: #de6a3c;
    transform: scale(0.5);
  }
</style>
