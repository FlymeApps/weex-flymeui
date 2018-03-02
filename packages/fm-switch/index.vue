<template>
  <div class="fm-switch" @click="changeState" :style="getBgStyle">
    <div
      class="ctr-ball"
      :style="ballStyle"
      ref="ctrBall"></div>
  </div>
</template>

<style lang="css" src="../../lib/theme-paint/lib/switch.css" scoped>
</style>

<script>
const animation = weex.requireModule('animation');

export default {
  name: 'FmSwitch',
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    common: Boolean,
    disabled: {
      type: Boolean,
      default: false
    },
    blurColor: {
      type: String,
      default: '#FFFFFF'
    },
    focusColor: {
      type: String,
      default: '#FFFFFF'
    },
    borderColor: String,
    backgroundColor: String
  },
  data () {
    return {
      isAnimate: false,
      ballStyle: {
        backgroundColor: this.blurColor
      }
    };
  },
  computed: {
    getBgStyle () {
      const { common, borderColor, backgroundColor, disabled } = this;
      const style =
          common
            ? {
              borderWidth: 6,
              borderColor: '#7E97AC',
              backgroundColor: 'none'
            }
            : {};
      if (disabled) {
        style.opacity = 0.3;
      } else {
        style.opacity = 1;
      }
      if (borderColor) {
        style.borderWidth = 6;
        style.borderColor = borderColor;
      }
      if (backgroundColor) {
        style.backgroundColor = backgroundColor;
      }
      return style;
    }
  },
  watch: {
    checked (bool) {
      this.toggleState(bool);
    }
  },
  methods: {
    changeState (e) {
      if (this.isAnimate || this.disabled) return;
      this.checked = !this.checked;
      this.toggleState(this.checked);
      this.$emit('fmSwitchStateChange', this.checked);
    },
    toggleState (bool) {
      this.isAnimate = true;
      const style = bool
        ? {
          backgroundColor: this.focusColor,
          transform: 'scale(1) translate(72px, 0)',
          transformOrigin: 'center center'
        }
        : {
          backgroundColor: this.blurColor,
          transform: 'scale(0.6)',
          transformOrigin: 'center center'
        };
      const ctrBall = this.$refs.ctrBall;
      if (!ctrBall) {
        return;
      }
      animation.transition(
        ctrBall,
        {
          styles: style,
          timingFunction: 'ease',
          duration: 260
        },
        () => {
          this.isAnimate = false;
        }
      );
    }
  },
  mounted () {
    if (this.common) {
      this.focusColor = '#198DED';
      this.blurColor = '#7E97AC';
    }
    this.checked
      ? (this.ballStyle = {
        backgroundColor: this.focusColor,
        transform: 'scale(1.0) translate(72px, 0)'
      })
      : (this.ballStyle = {
        backgroundColor: this.blurColor,
        transform: 'scale(0.6)'
      });
  }
};
</script>
