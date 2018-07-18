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
              options: ['normal', 'hollow']
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
      title: '取消订单',
      color: '#b2b2b2'
    }, {
      title: '提交订单',
      color: '#198DED'
    }]
  },
  thumbnail: 'http://image.res.meizu.com/image/flyme-icon/4bbc52b26c7841c98baf90e5fc1ad216z'
};
