import VALUE from 'weex-flymeui/lib/common/variable-type';
export default {
  name: 'FmOverlay',
  desc: '蒙层组件',
  props: {
    show: {
      type: VALUE.BOOLEAN,
      desc: '是否显示',
      default: true
    },
    canAutoClose: {
      type: VALUE.BOOLEAN,
      desc: '能否误触关闭',
      default: true
    }
  },
  events: {
    fmOverlayBodyClicked: {
      desc: '蒙层消失'
    },
    fmOverlayBodyClicking: {
      desc: '被点击后，消失前触发'
    }
  },
  size: {
    width: 1080,
    height: 1920
  },
  slots: [{
    desc: '内容填充'
  }],
  mockData: null,
  thumbnail: 'http://image.res.meizu.com/image/flyme-icon/9e447deb1abd4ff09c2de8609e293da9z'
};
