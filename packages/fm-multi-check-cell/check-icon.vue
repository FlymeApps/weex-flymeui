<!-- CopyRight (C) 2018-2022 FlymeApps Team Holding Limited. -->
<!-- Created and Update by Yanjiie on 2018/04/12. -->
<template>
  <div class="check-icon">
    <div class="animate-wrap" :hack="isNeedShow" ref="animate-wrap" :style="wrapStyle">
      <image
        class="unchecked"
        :src="bgImg" />
      <image
        class="checked"
        :src="getCheckedImg"
        ref="check-icon"
        :watch="isNeedChecked" />
    </div>
  </div>
</template>

<style scoped>
  .animate-wrap {
    width: 24px;
    height: 24px;
  }

  .unchecked {
    width: 24px;
    height: 24px;
  }

  .checked {
    position: absolute;
    left: 0;
    top: 0;
    width: 24px;
    height: 24px;
    transform: scale(0);
    background-color: #ffffff;
    border-radius: 12px;
  }
</style>

<script>
import FmIcon from '../fm-icon';
const animation = weex.requireModule('animation');
export default {
  components: { FmIcon },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    checked: {
      type: Boolean,
      default: false
    },
    bgImg: {
      type: String,
      default:
          'http://design.flyme.cn/weexui/assets/mz_btn_check_button_square_off.png'
    },
    checkedImg: {
      type: String,
      default:
          'http://design.flyme.cn/weexui/assets/mz_btn_check_button_square_on.png'
    },
    checkedDisableImg: {
      type: String,
      default:
          'http://design.flyme.cn/weexui/assets/mz_btn_check_button_square_on_disable.png'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    checked (bool) {
      this.appearChecked(bool);
    }
  },
  data: () => ({}),
  computed: {
    getCheckedImg () {
      const { disabled, checkedImg, checkedDisableImg } = this;
      return disabled ? checkedDisableImg : checkedImg;
    },
    wrapStyle () {
      return this.show
        ? {
          opacity: 1
        }
        : {
          opacity: 0,
          transform: 'rotateX(90deg)'
        };
    },
    checkedStyle () {
      return this.checked
        ? {
          opacity: 1
        }
        : {
          opacity: 0
        };
    },
    isNeedShow () {
      this.appear(this.show);
    },
    isNeedChecked () {
      setTimeout(() => {
        this.appearChecked(this.checked);
      }, 50);
    }
  },
  methods: {
    appear (bool, duration = 200) {
      const animateEl = this.$refs['animate-wrap'];
      if (!animateEl || !bool) {
        return;
      }
      const style = {
        transform: 'rotateX(0deg)'
      };
      animation.transition(
        animateEl,
        {
          styles: style,
          duration,
          delay: 0,
          timingFunction: 'ease-out'
        },
        () => {}
      );
    },
    appearChecked (bool, duration = 30) {
      const animateEl = this.$refs['check-icon'];
      if (!animateEl) {
        return;
      }
      const style = bool
        ? {
          transform: 'scale(1)'
        }
        : {
          transform: 'scale(0)'
        };
      animation.transition(
        animateEl,
        {
          styles: style,
          duration,
          delay: 0,
          timingFunction: 'ease-out'
        },
        () => {}
      );
    }
  }
};
</script>


