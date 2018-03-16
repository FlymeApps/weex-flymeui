import VALUE from 'weex-flymeui/lib/common/variable-type';
export default {
  name: 'FmIcon',
  desc: '图标组件',
  slots: null,
  props: {
    name: {
      type: VALUE.SELECT,
      desc: 'Icon 名称',
      default: 'zhuye',
      props: {
        options: ['zhuye', 'wancheng', 'guanbi', 'gengduo', 'bianji', 'shanchu', 'fenxiang', 'xingxing']
      }
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
    fmIconClicked: {
      desc: '点击'
    },
    fmIconLongpress: {
      desc: '长按'
    }
  }
};
