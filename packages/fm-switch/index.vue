<template>
  <div class="fm-switch" @click="changeState" :style="getBgStyle">
    <div
      class="ctr-ball"
      :style="ballStyle"
      ref="ctrBall"></div>
  </div>
</template>

<style scoped>
  .fm-switch {
    flex-direction: row;
    align-items: center;
    width: 144px;
    height: 72px;
    border-radius: 72px;
    background-color: #198ded;
    border-width: 5px;
    border-color: #198ded;
  }

  .ctr-ball {
    width: 42px;
    height: 42px;
    border-radius: 21px;
    margin-left: 10px;
  }
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
              borderWidth: '5px',
              borderColor: '#D9D9D9',
              backgroundColor: 'transparent'
            }
            : {};
      if (disabled) {
        style.opacity = 0.3;
      } else {
        style.opacity = 1;
      }
      if (borderColor) {
        style.borderWidth = '5px';
        style.borderColor = borderColor;
      }
      if (backgroundColor) {
        style.borderWidth = '5px';
        style.borderColor = backgroundColor;
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
      if (this.disabled) return;
      this.checked = !this.checked;
      this.toggleState(this.checked);
      this.$emit('fmSwitchStateChange', this.checked);
    },
    toggleState (bool) {
      const style = bool
        ? {
          backgroundColor: this.focusColor,
          transform: 'scale(1) translate(72px, 0)',
          transformOrigin: 'center center'
        }
        : {
          backgroundColor: this.blurColor,
          transform: 'scale(0.429)',
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
        }
      );
    }
  },
  created () {
    if (this.common) {
      this.focusColor = '#198DED';
      this.blurColor = '#D9D9D9';
    }
    this.checked
      ? (this.ballStyle = {
        backgroundColor: this.focusColor,
        transform: 'scale(1.0) translate(72px, 0)'
      })
      : (this.ballStyle = {
        backgroundColor: this.blurColor,
        transform: 'scale(0.429)'
      });
  }
};
</script>
