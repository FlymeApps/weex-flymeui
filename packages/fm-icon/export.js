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
        options: ['zhuye', 'wancheng', 'guanbi', 'gengduo', 'bianji', 'shanchu', 'fenxiang', 'xingxing', 'fanhui']
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
  },
  size: {
    width: 42,
    height: 42
  },
  mockData: {
    name: 'zhuye',
    iconStyle: 42,
    color: '#000000'
  },
  thumbnail: 'http://image.res.meizu.com/image/flyme-icon/63bb2ac1a15c4d729f8adbc14392866az'
};
