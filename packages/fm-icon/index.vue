<!-- CopyRight (C) 2018-2022 FlymeApps Team Holding Limited. -->
<!-- Created and Update by Yanjiie on 2018/04/12. -->
<template>
  <text :style="mergeStyle" @click="itemClicked(name)">{{ getIcon }}</text>
</template>

<style scoped>
</style>

<script>
import Icon from './map';
const dom = weex.requireModule('dom');

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
      return decode(value === '' ? Icon[name] || 'wancheng' : value);
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
    if (!this.isCreator) {
      dom.addRule('fontFace', {
        'fontFamily': 'flymeicon',
        'src': "url('http://weixin-res.flyme.cn/resources/weex-flymeui/assets/iconfont.ttf')"
      });
    }
  },
  methods: {
    itemClicked (name) {
      this.$emit('fmIconClicked', {
        name
      });
    }
  }
};

const reg = /&([^;]{2,});?/g;
const decode = html => {
  html = html.replace(reg, (match, entity) => {
    if (entity.charAt(0) === '#') {
      let num = 0;
      if (entity.charAt(1).toLowerCase() === 'x') {
        num = parseInt(entity.slice(2), 16);
      } else {
        num = parseInt(entity.slice(1), 10);
      }
      if (!isNaN(num) && num >= -32768 && num <= 65535) {
        return String.fromCharCode(num);
      }
    }
    return match;
  });
  return html;
};
</script>
