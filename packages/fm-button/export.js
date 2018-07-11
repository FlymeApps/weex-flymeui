import VALUE from 'weex-flymeui/lib/common/variable-type';
export default {
  name: 'FmButton',
  desc: '按钮组件',
  props: {
    title: {
      type: VALUE.STRING,
      desc: '按钮文案',
      default: '按钮'
    },
    size: {
      type: VALUE.SELECT,
      desc: '大小',
      default: 'small',
      props: {
        options: ['small', 'middle', 'large', 'huge']
      }
    },
    type: {
      type: VALUE.SELECT,
      desc: '按钮类型',
      default: 'normal',
      props: {
        options: ['normal', 'hollow', 'circle']
      }
    },
    icon: {
      type: VALUE.SELECT,
      desc: '圆形按钮 Icon',
      default: 'small',
      props: {
        options: ['zhuye', 'wancheng', 'guanbi', 'gengduo', 'bianji', 'shanchu', 'fenxiang', 'xingxing', 'fanhui']
      }
    },
    color: {
      type: VALUE.COLOR,
      desc: '按钮颜色',
      default: '#198DED'
    },
    titleColor: {
      type: VALUE.COLOR,
      desc: '按钮内容颜色',
      default: '#FFFFFF'
    },
    disabled: {
      type: VALUE.BOOLEAN,
      desc: '是否禁用',
      default: false
    }
  },
  events: {
    buttonClicked: {
      desc: '被点击'
    }
  },
  size: {
    width: 160,
    height: 72
  },
  slots: null,
  mockData: {
    title: '按钮',
    size: 'small'
  },
  thumbnail: 'http://image.res.meizu.com/image/flyme-icon/f910d917068e4ece92dea6b6af63e15bz'
};
