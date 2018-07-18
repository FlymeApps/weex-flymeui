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
    width: 72,
    height: 72
  },
  mockData: {
    name: 'fanhui',
    iconStyle: 72,
    color: '#666666'
  },
  thumbnail: 'http://image.res.meizu.com/image/flyme-icon/2a36e8f553fc42d1b0394620f369acadz'
};
