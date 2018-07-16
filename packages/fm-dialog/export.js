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
        options: ['default', 'input', 'select']
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
    selectData: {
      type: VALUE.ARRAY,
      desc: '选择框可选值',
      props: {
        inner: {
          value: {
            type: VALUE.STRING,
            desc: '选项值',
            default: ''
          },
          type: {
            type: VALUE.SELECT,
            desc: '选项类型',
            default: 'normal',
            props: {
              options: ['normal', 'single', 'avatar', 'icon-small', 'icon-middle', 'icon-large']
            }
          },
          title: {
            type: VALUE.STRING,
            desc: '选项描述',
            default: '选项'
          },
          summary: {
            type: VALUE.STRING,
            desc: '描述',
            default: '描述'
          },
          description: {
            type: VALUE.STRING,
            desc: '段落描述',
            default: '段落描述'
          },
          imgSrc: {
            type: VALUE.STRING,
            desc: '图片路径',
            default: ''
          },
          occupyingColor: {
            type: VALUE.COLOR,
            desc: '图片占位颜色',
            default: '#FAFAFA'
          },
          checked: {
            type: VALUE.BOOLEAN,
            desc: '是否选中',
            default: false
          },
          disabled: {
            type: VALUE.BOOLEAN,
            desc: '是否禁用',
            default: false
          }
        }
      },
      default: []
    },
    selectModel: {
      type: VALUE.SELECT,
      desc: '选择模式',
      default: 'single',
      props: {
        options: ['single', 'multiple']
      }
    },
    selectLimit: {
      type: VALUE.NUMBER,
      desc: '最多选择数',
      default: 0
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
  mockData: null,
  thumbnail: 'http://image.res.meizu.com/image/flyme-icon/dd5cd5bebc414beb8cf385b528131fb2z'
};
