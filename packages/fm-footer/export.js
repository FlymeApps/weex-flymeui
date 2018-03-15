import VALUE from 'weex-flymeui/lib/common/variable-type';
export default {
  name: 'FmTextbar',
  desc: '底部文字按钮组件',
  slots: null,
  props: {
    items: {
      type: VALUE.ARRAY,
      desc: '按钮列表',
      props: {
        inner: {
          title: {
            type: VALUE.STRING,
            desc: '按钮文案',
            default: '按钮'
          },
          color: {
            type: VALUE.COLOR,
            desc: '按钮颜色',
            default: '#198DED'
          }
        }
      },
      default: [{
        title: '取消'
      }, {
        title: '确定'
      }]
    },
    backgroundColor: {
      type: VALUE.COLOR,
      desc: '背景颜色',
      default: '#FFFFFF'
    }
  },
  events: {
    fmTextbarBtnClicked: {
      desc: '按钮被点击'
    }
  }
};
