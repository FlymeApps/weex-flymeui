import VALUE from 'weex-flymeui/lib/common/variable-type';
export default {
  name: 'FmDialog',
  desc: '弹出框组件',
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
    contentType: {
      type: VALUE.SELECT,
      desc: '内容类型',
      default: 'default',
      props: {
        options: ['default', 'input']
      }
    },
    title: {
      type: VALUE.STRING,
      desc: '标题',
      default: ''
    },
    content: {
      type: VALUE.STRING,
      desc: '内容',
      default: ''
    },
    bodyBackground: {
      type: VALUE.COLOR,
      desc: '背景颜色',
      default: '#FFFFFF'
    },
    placeholder: {
      type: VALUE.STRING,
      desc: '输入框提示文案',
      default: ''
    },
    inputDefaultText: {
      type: VALUE.STRING,
      desc: '输入框默认值',
      default: ''
    },
    cancelText: {
      type: VALUE.STRING,
      desc: '取消按钮文案',
      default: '取消'
    },
    cancelColor: {
      type: VALUE.COLOR,
      desc: '取消按钮颜色',
      default: '#198DED'
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
    },
    contentHidden: {
      type: VALUE.BOOLEAN,
      desc: '隐藏弹框内容',
      default: false
    },
    canAutoClose: {
      type: VALUE.BOOLEAN,
      desc: '点击蒙层自动关闭',
      default: true
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
    height: 1920,
    resize: false
  },
  slots: [{
    name: 'title',
    desc: '自定义标题'
  }, {
    name: 'content',
    desc: '自定义内容'
  }, {
    name: 'btn-group',
    desc: '自定义底部'
  }],
  mockData: {
    title: '退出浏览器并清空历史记录',
    content: '退出浏览器并清空历史记录弹框内容区域此处展示描述'
  },
  thumbnail: 'http://image.res.meizu.com/image/flyme-icon/dd5cd5bebc414beb8cf385b528131fb2z'
};
