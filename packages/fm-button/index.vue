<!-- CopyRight (C) 2018-2022 FlymeApps Team Holding Limited. -->
<!-- Created and Update by Yanjiie on 2018/04/12. -->
<template>
  <div ref="fm-button"
       class="fm-button"
       :class="buttonClass"
       @click="btnClick"
       @touchstart="_startHandle"
       @touchend="_endHandle"
       :style="computedStyle">
    <div v-if="!disabled" class="overlay" @click="btnClick"></div>
    <fm-icon v-if="type === 'circle'"
             :color="(type !== 'hollow') ? titleColor : color"
             :name="icon"
             icon-style="72"></fm-icon>
    <slot v-else name="title">
      <text :class="['button-text-' + size]"
            :style="Object.assign({}, { color: (type !== 'hollow') ? titleColor : computedColor }, (titleSize ? { fontSize: titleSize } : {}))"
            class="button-text" ><slot></slot><template v-if="!$slots.default">{{ title }}</template></text>
    </slot>
  </div>
</template>

<style scoped>
  .fm-button {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transform: scale(1);
    transition-property: transform,backgroundColor;
    transition-duration: 0.2s;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  .fm-button-hollow {
    border-width: 4px;
  }

  .button-text {
    flex: 1;
    text-align: center;
    color: #FFFFFF;
    font-weight: 500;
    font-family: sans-serif-medium;
  }

  .fm-button-small {
    height: 72px;
    border-radius: 36px;
  }

  .fm-button-middle {
    width: 312px;
    height: 114px;
    border-radius: 57px;
  }

  .fm-button-large {
    width: 396px;
    height: 114px;
    border-radius: 57px;
  }

  .fm-button-circle {
    width: 168px;
    height: 168px;
    border-radius: 84px;
  }

  .fm-button-huge {
    width: 720px;
    height: 114px;
    border-radius: 57px;
  }

  .button-text-small {
    font-size: 36px;
  }

  .button-text-middle,
  .button-text-large,
  .button-text-huge {
    font-size: 48px;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 30;
    border-radius: 200px;
  }

  .overlay:active {
    background-color: rgba(0, 0, 0, 0.1);
  }
</style>

<script>
import FmIcon from '../fm-icon';
import STYLE from 'weex-flymeui/lib/theme/default/index.js';
const dom = weex.requireModule('dom');

export default {
  name: 'FmButton',
  components: { FmIcon },
  props: {
    size: {
      type: String,
      default: 'small'
    },
    type: String,
    color: {
      type: String,
      default: STYLE.primaryColor
    },
    titleColor: {
      type: String,
      default: '#FFFFFF'
    },
    titleSize: {
      type: Number,
      default: 0
    },
    icon: {
      type: String,
      default: 'wancheng'
    },
    width: Number,
    height: Number,
    animated: Boolean,
    disabled: Boolean,
    title: String
  },
  data: () => ({
    active: false,
    padding: 36
  }),
  computed: {
    buttonClass () {
      const clz = [];
      this.size && clz.push(`fm-button-${this.size}`);
      this.type && clz.push(`fm-button-${this.type}`);
      return clz;
    },
    computedColor () {
      return this.color || STYLE.primaryColor;
    },
    computedStyle () {
      const { color, active, disabled, padding, animated, type, width, height } = this;
      const transform = !animated || disabled ? 'scale(1)' : `scale(${active ? 0.95 : 1})`;
      const style = {
        borderColor: (type === 'hollow') ? color : '',
        backgroundColor: (type !== 'hollow') ? color : '',
        opacity: disabled ? 0.2 : 1,
        transform,
        paddingLeft: padding + 'px',
        paddingRight: padding + 'px'
      };
      if (type !== 'circle') {
        width && (style.width = `${width}px`);
        height && (style.height = `${height}px`) && (style.borderRadius = `${Math.ceil(height * 1000 / 2000)}px`);
      }
      return style;
    }
  },
  methods: {
    btnClick (e) {
      !this.disabled && this.$emit('buttonClicked', e);
    },
    _startHandle (e) {
      this.active = true;
    },
    _endHandle (e) {
      this.active = false;
    }
  },
  mounted () {
    setTimeout(() => {
      dom.getComponentRect(this.$refs['fm-button'], option => {
        if (option.size.width >= 240) {
          this.padding = 24;
        }
      });
    }, 50);
  }
};
</script>
