import VALUE from 'weex-flymeui/lib/common/variable-type';
export default {
  name: 'FmSwitch',
  desc: '开关按钮组件',
  slots: null,
  props: {
    checked: {
      type: VALUE.BOOLEAN,
      desc: '是否选中',
      default: false
    },
    solid: {
      type: VALUE.BOOLEAN,
      desc: '是否实心',
      default: false
    },
    disabled: {
      type: VALUE.BOOLEAN,
      desc: '是否禁用',
      default: false
    },
    focusColor: {
      type: VALUE.COLOR,
      desc: '球的聚焦颜色',
      default: ''
    },
    blurColor: {
      type: VALUE.COLOR,
      desc: '球的失焦颜色',
      default: ''
    },
    borderColor: {
      type: VALUE.COLOR,
      desc: '边框颜色',
      default: '#D9D9D9'
    },
    backgroundColor: {
      type: VALUE.COLOR,
      desc: '背景颜色',
      default: '#198DED'
    }
  },
  events: {
    fmSwitchStateChange: {
      desc: '开关状态变化'
    }
  },
  size: {
    width: 144,
    height: 72
  },
  mockData: {
    solid: false,
    checked: true
  },
  thumbnail: 'http://image.res.meizu.com/image/flyme-icon/cd999618bc794dfc986bab6cd429857ez'
};
