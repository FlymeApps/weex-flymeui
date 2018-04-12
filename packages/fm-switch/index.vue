<!-- CopyRight (C) 2018-2022 FlymeApps Group Holding Limited. -->
<!-- Created and updated by Yanjiie on 2018/4/12. -->
<template>
  <div class="fm-switch" @click="changeState" :style="getBgStyle">
    <div class="ctr-ball"
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
    border-width: 5px;
  }

  .ctr-ball {
    width: 42px;
    height: 42px;
    border-radius: 21px;
    margin-left: 10px;
  }
</style>

<script>
import STYLE from 'weex-flymeui/lib/theme/default/';
const animation = weex.requireModule('animation');

export default {
  name: 'FmSwitch',
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    solid: Boolean,
    disabled: {
      type: Boolean,
      default: false
    },
    blurColor: String,
    focusColor: String,
    borderColor: {
      type: String,
      default: '#D9D9D9'
    },
    backgroundColor: {
      type: String,
      default: STYLE.primaryColor
    }
  },
  data () {
    return {
      isAnimate: false,
      _checked: false,
      ballStyle: {}
    };
  },
  computed: {
    getBgStyle () {
      const { solid, borderColor, backgroundColor, disabled } = this;
      const style =
          !solid
            ? {
              borderWidth: '5px',
              borderColor: borderColor,
              backgroundColor: 'transparent'
            }
            : {
              borderWidth: '5px',
              borderColor: backgroundColor,
              backgroundColor: backgroundColor
            };
      if (disabled) {
        style.opacity = 0.3;
      } else {
        style.opacity = 1;
      }
      return style;
    }
  },
  watch: {
    checked (bool) {
      this._checked = bool;
      this.toggleState(bool);
    }
  },
  methods: {
    changeState (e) {
      if (this.disabled) return;
      this._checked = !this._checked;
      this.toggleState(this._checked);
      this.$emit('fmSwitchStateChange', this._checked);
    },
    toggleState (bool, animated = true) {
      const style = bool
        ? {
          backgroundColor: this.focusColor || (this.solid ? '#FFFFFF' : this.backgroundColor),
          transform: 'scale(1) translate(72px, 0)',
          transformOrigin: 'center center'
        }
        : {
          backgroundColor: this.blurColor || (this.solid ? '#FFFFFF' : this.borderColor),
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
          duration: animated ? 260 : 0.00001
        }
      );
    }
  },
  created () {
    this.checked
      ? (this.ballStyle = {
        backgroundColor: this.focusColor || (this.solid ? '#FFFFFF' : this.backgroundColor),
        transform: 'scale(1.0) translate(72px, 0)'
      })
      : (this.ballStyle = {
        backgroundColor: this.blurColor || (this.solid ? '#FFFFFF' : this.borderColor),
        transform: 'scale(0.429)'
      });

    this._checked = this.checked;
    this.toggleState(this._checked, false);
  }
};
</script>
