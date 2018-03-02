import VALUE from 'weex-flymeui/lib/common/variable-type';
export default {
  name: 'FmIcon',
  desc: '图标组件',
  slots: null,
  props: {
    value: {
      type: VALUE.STRING,
      desc: '类型',
      default: '&#xe6ef;'
    },
    iconStyle: {
      type: VALUE.STRING,
      desc: '大小',
      default: 42
    },
    color: {
      type: VALUE.COLOR,
      desc: '颜色',
      default: '#000000'
    }
  },
  events: {
    fmClick: {
      desc: '点击'
    },
    fmLongpress: {
      desc: '长按'
    }
  }
};
