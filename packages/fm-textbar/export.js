import VALUE from 'weex-flymeui/lib/common/variable-type';
export default {
  name: 'FmBtnbar',
  desc: '底部腰圆按钮组件',
  slots: null,
  props: {
    items: {
      type: VALUE.ARRAY,
      desc: '按钮列表',
      props: {
        min: 1,
        max: 2,
        inner: {
          title: {
            type: VALUE.STRING,
            desc: '标题'
          },
          theme: {
            type: VALUE.SELECT,
            desc: '颜色主题',
            default: 'blue',
            props: {
              options: ['blue', 'limegreen', 'seagreen', 'gray', 'crimson', 'firebrick', 'tomato', 'coral']
            }
          },
          disabled: {
            type: VALUE.BOOLEAN,
            desc: '是否禁用'
          }
        }
      },
      default: []
    },
    backgroundColor: {
      type: VALUE.COLOR,
      desc: '背景颜色',
      default: '#FFFFFF'
    }
  },
  events: {
    fmBtnbarBtnClicked: {
      desc: '按钮被点击'
    }
  },
  size: {
    width: 1080,
    height: 144
  },
  mockData: {
    items: [{
      title: '取消'
    }, {
      title: '确定'
    }]
  },
  thumbnail: 'http://image.res.meizu.com/image/flyme-icon/c16481053f7f4ad1adca32480a678368z'
};
