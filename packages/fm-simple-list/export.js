import VALUE from 'weex-flymeui/lib/common/variable-type';
export default {
  name: 'FmSimpleList',
  desc: '简单列表组件',
  props: {
    list: {
      type: VALUE.ARRAY,
      desc: '数据源',
      props: {
        inner: {
          title: {
            type: VALUE.STRING,
            desc: '标题'
          },
          color: {
            type: VALUE.COLOR,
            desc: '标题颜色'
          },
          leftIcon: {
            type: VALUE.SELECT,
            desc: '左 Icon',
            default: 'shizhong',
            props: {
              options: ['shizhong', 'wancheng', 'guanbi', 'gengduo', 'bianji', 'shanchu', 'fenxiang', 'xingxing']
            }
          },
          leftColor: {
            type: VALUE.COLOR,
            desc: '左 Icon 颜色'
          },
          rightIcon: {
            type: VALUE.SELECT,
            desc: '右 Icon',
            default: 'guanbi',
            props: {
              options: ['shizhong', 'wancheng', 'guanbi', 'gengduo', 'bianji', 'shanchu', 'fenxiang', 'xingxing']
            }
          },
          rightColor: {
            type: VALUE.COLOR,
            desc: '右 Icon 颜色'
          }
        }
      },
      default: []
    },
    title: {
      type: VALUE.STRING,
      desc: '标题',
      default: '标题'
    },
    titleColor: {
      type: VALUE.COLOR,
      desc: '标题颜色',
      default: 'rgba(0, 0, 0, 0.4)'
    },
    rightText: {
      type: VALUE.STRING,
      desc: '右边按钮文案',
      default: '更多'
    },
    rightColor: {
      type: VALUE.COLOR,
      desc: '右边按钮颜色',
      default: '#198DED'
    }
  },
  events: {
    fmTagSimpleListBtnClicked: {
      desc: '右边按钮被点击'
    },
    fmSimpleListSelected: {
      desc: '列表项被点击'
    },
    fmSimpleListLeftIconClicked: {
      desc: '列表项左边 Icon 被点击'
    },
    fmSimpleListRightIconClicked: {
      desc: '列表项右边 Icon 被点击'
    }
  },
  size: {
    width: 1080,
    height: 540
  },
  slots: [{
    name: 'left',
    desc: '自定义左边按钮'
  }, {
    name: 'right',
    desc: '自定义右边按钮'
  }],
  mockData: {
    list: [{
      title: '王者荣耀 -- 决战到底',
      color: '#198DED',
      leftIcon: 'biaoqing',
      leftColor: '#DC2A2A'
    }, {
      title: '绝地求生 -- 刺激战场',
      color: '#3BC06B',
      leftIcon: 'gongjuxiang'
    }, {
      title: '逆水寒 -- 会呼吸的江湖',
      color: '#DC2A2A',
      leftIcon: 'hongxin'
    }]
  },
  thumbnail: 'http://image.res.meizu.com/image/flyme-icon/2062a1a8b17d4fe396d0c7dd44f60038z'
};
