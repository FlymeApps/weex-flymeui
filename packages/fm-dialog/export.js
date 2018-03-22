import VALUE from 'weex-flymeui/lib/common/variable-type';
export default {
  name: 'FmTabPage',
  desc: '弹出框组件',
  slots: null,
  props: {
    show: {
      type: VALUE.BOOLEAN,
      desc: '是否显示',
      default: true
    },
    type: {
      type: VALUE.SELECT,
      desc: '弹框类型',
      default: 'confirm',
      props: {
        options: ['confirm', 'alert']
      }
    },
    title: {
      type: VALUE.STRING,
      desc: '标题',
      default: '标题'
    },
    content: {
      type: VALUE.STRING,
      desc: '内容',
      default: '内容'
    },
    cancelText: {
      type: VALUE.STRING,
      desc: '取消按钮文案',
      default: '取消'
    },
    cancelColor: {
      type: VALUE.COLOR,
      desc: '取消按钮颜色',
      default: '#198DED）'
    },
    confirmText: {
      type: VALUE.STRING,
      desc: '确认按钮文案',
      default: '确认'
    },
    confirmColor: {
      type: VALUE.COLOR,
      desc: '确认按钮颜色',
      default: '#198DED'
    }
  },
  events: {
    fmDialogBtnClicked: {
      desc: '按钮被点击'
    },
    fmDialogDisappeared: {
      desc: '弹框消失'
    }
  },
  size: {
    width: 1080,
    height: 1920
  }
};
