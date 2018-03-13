<!-- Created by Yanjiie on 2018/03/13. -->
<template>
  <div v-if="width !== 0"
       class="fm-btnbar-item"
       :style="computedStyle"
       @click="onClick"
       @touchstart="_startHandle"
       @touchend="_endHandle"
       ref="btn">
    <slot name="title">
      <text class="item-title"
            :style="{ width: width - 56 }"><slot></slot><template v-if="!$slots.default">{{ title }}</template></text>
    </slot>
  </div>
</template>

<style scoped>
  .fm-btnbar-item {
    height: 114px;
    border-radius: 57px;
    margin: 0 33px;
    padding: 0 33px;
    align-items: center;
    justify-content: center;
    transform: scale(1);
    transition-property: transform,backgroundColor;
    transition-duration: 0.2s;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  .item-title {
    lines: 1;
    text-overflow: ellipsis;
    text-align: center;
    color: #FFFFFF;
    font-size: 48px;
    font-weight: 500;
    font-family: sans-serif-medium;
  }
</style>

<script>
import THEME from './theme';
export default {
  name: 'FmBtnbarItem',
  props: {
    title: {
      type: String,
      default: ''
    },
    theme: {
      type: String,
      default: 'blue'
    },
    titleColor: {
      type: String,
      default: '#FFFFFF'
    },
    normalColor: {
      type: String,
      default: ''
    },
    activeColor: {
      type: String,
      default: ''
    },
    disabled: Boolean,
    disabledColor: {
      type: String,
      default: '#B2B2B2'
    }
  },
  computed: {
    computedStyle () {
      const { normalColor, activeColor, active, width, theme, disabled, disabledColor } = this;
      const backgroundColor = disabled ? disabledColor : (active ? activeColor || THEME[theme].highlight : normalColor || THEME[theme].normal);
      const transform = disabled ? 'scale(1)' : `scale(${active ? 0.95 : 1})`;
      return {
        backgroundColor,
        transform,
        width
      };
    }
  },
  data: () => ({
    active: false,
    width: 0
  }),
  methods: {
    _startHandle (e) {
      this.active = true;
    },
    _endHandle (e) {
      this.active = false;
    },
    onClick (e) {
      this.disabled || this._parent.btnClicked(this._parent.renderItems.indexOf(this));
      this.disabled || this.$emit('btnClicked', e);
    }
  },
  beforeCreate () {
    let parent = this.$parent;
    while (parent) {
      if (parent.$options.name !== 'FmBtnbar') {
        parent = parent.$parent;
      } else {
        this._parent = parent;
        this._parent.renderItems.push(this);
        break;
      }
    }
  },
  created () {
    this.$slots.default && (this.title = this.$slots.default[0].text);
  },
  destroyed () {
    this._parent.renderItems.splice(this._parent.items.indexOf(this), 1);
  }
};
</script>
