import VALUE from 'weex-flymeui/lib/common/variable-type';
export default {
  name: 'FmCheckboxList',
  desc: '列表选择组件',
  props: {
    list: {
      type: VALUE.ARRAY,
      desc: '选项',
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
      }
    },
    single: {
      type: VALUE.BOOLEAN,
      desc: '单选模式',
      default: false
    },
    limit: {
      type: VALUE.NUMBER,
      desc: '限制选中个数',
      default: 0
    },
    lastBorderHidden: {
      type: VALUE.BOOLEAN,
      desc: '隐藏最后一行分割线',
      default: false
    }
  },
  events: {
    fmCheckBoxListChecked: {
      desc: '选项被选中'
    },
    overLimit: {
      desc: '超出选择个数'
    }
  },
  size: {
    width: 1080,
    height: 670
  },
  slots: null,
  mockData: {
    list: [{
      title: '选项1',
      value: 0
    }, {
      title: '选项2',
      value: 1,
      summary: '描述'
    }, {
      title: '选项3',
      value: 2,
      summary: '描述',
      description: '段落描述'
    }]
  },
  thumbnail: 'http://image.res.meizu.com/image/flyme-icon/a145b26bf93143ac926dd33f9a2f6f09z'
};
