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
    disabled: {
      type: VALUE.BOOLEAN,
      desc: '是否禁用',
      default: false
    },
    focusColor: {
      type: VALUE.COLOR,
      desc: '球的聚焦颜色',
      default: '#FFFFFF'
    },
    blurColor: {
      type: VALUE.COLOR,
      desc: '球的失焦颜色',
      default: '#FFFFFF'
    },
    borderColor: {
      type: VALUE.COLOR,
      desc: '边框颜色',
      default: ''
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
  }
};
