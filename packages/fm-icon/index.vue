<template>
  <text :style="mergeStyle" @click="itemClicked(name)">{{ getIcon }}</text>
</template>

<style scoped>
</style>

<script>
// 引入he模块，使用它解决weex-template-compiler在编译阶段进行decode
const he = require('he');
const dom = weex.requireModule('dom');
import Icon from './map';
export default {
  name: 'FmIcon',
  props: {
    name: {
      default: 'wancheng',
      type: String
    },
    value: {
      type: String,
      default: ''
    },
    iconStyle: {
      type: [Number, Object, String],
      default: 42
    },
    color: {
      type: String,
      default: '#666666'
    }
  },
  data: () => ({
    Icon
  }),
  computed: {
    getIcon () {
      const { Icon, name, value } = this;
      return he.decode(value === '' ? Icon[name] || 'wancheng' : value);
    },
    mergeStyle () {
      const { iconStyle } = this;
      let style = { fontFamily: 'flymeicon', color: this.color };
      if (Object.prototype.toString.call(this.iconStyle).slice(8, -1).toLowerCase() !== 'object') {
        style.fontSize = `${iconStyle}px`;
        style.height = `${iconStyle}px`;
      } else {
        style = Object.assign({}, style, { ...iconStyle });
      }
      return style;
    }
  },
  beforeCreate () {
    dom.addRule('fontFace', {
      'fontFamily': 'flymeicon',
      'src': "url('http://weixin-res.flyme.cn/resources/weex-flymeui/assets/iconfont.ttf')"
    });
  },
  methods: {
    itemClicked (name) {
      this.$emit('fmIconClicked', {
        name
      });
    }
  }
};
</script>
