import VALUE from 'weex-flymeui/lib/common/variable-type';
export default {
  name: 'FmTitlebar',
  desc: '导航栏组件',
  props: {
    title: {
      type: VALUE.STRING,
      desc: '标题',
      default: '标题'
    },
    titleColor: {
      type: VALUE.COLOR,
      desc: '标题颜色',
      default: 'rgba(0, 0, 0, 0.6)'
    },
    backgroundColor: {
      type: VALUE.COLOR,
      desc: '背景颜色',
      default: '#FFFFFF'
    },
    leftColor: {
      type: VALUE.COLOR,
      desc: '返回按钮颜色',
      default: 'rgba(0, 0, 0, 0.6)'
    },
    statusbar: {
      type: VALUE.BOOLEAN,
      desc: '预留状态栏',
      default: false
    }
  },
  events: {
    fmTitlebarLeftBtnClicked: {
      desc: '左边按钮被点击'
    },
    fmTitlebarRightBtnClicked: {
      desc: '右边按钮被点击'
    }
  },
  size: {
    width: 1080,
    height: 144
  },
  slots: [{
    name: 'left',
    desc: '自定义左边按钮'
  }, {
    name: 'middle',
    desc: '自定义标题'
  }, {
    name: 'right',
    desc: '自定义右边按钮'
  }],
  mockData: null,
  thumbnail: 'http://image.res.meizu.com/image/flyme-icon/d4b2e6d139c745f9b4b0d9b24900df2cz'
};
