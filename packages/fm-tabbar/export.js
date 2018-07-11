import VALUE from 'weex-flymeui/lib/common/variable-type';
export default {
  name: 'FmTabbar',
  desc: '底部操作栏组件',
  slots: null,
  props: {
    items: {
      type: VALUE.ARRAY,
      desc: '按钮列表',
      props: {
        min: 1,
        max: 5,
        inner: {
          title: {
            type: VALUE.STRING,
            desc: '标题'
          },
          icon: {
            type: VALUE.SELECT,
            desc: 'icon 名称',
            default: 'zhuye',
            props: {
              options: ['zhuye', 'wancheng', 'guanbi', 'gengduo', 'bianji', 'shanchu', 'fenxiang', 'xingxing']
            }
          },
          normalIcon: {
            type: VALUE.STRING,
            desc: '自定义非选图标'
          },
          activeIcon: {
            type: VALUE.STRING,
            desc: '自定义选中图标'
          },
          dot: {
            type: VALUE.BOOLEAN,
            desc: '显示小红点'
          },
          badge: {
            type: VALUE.STRING,
            desc: '徽章信息'
          }
        }
      },
      default: []
    },
    backgroundColor: {
      type: VALUE.COLOR,
      desc: '背景颜色',
      default: '#FFFFFF'
    },
    activeIndex: {
      type: VALUE.NUMBER,
      desc: '当前选中',
      default: -1
    },
    autoActive: {
      type: VALUE.BOOLEAN,
      desc: '开启自动选中',
      default: true
    }
  },
  events: {
    fmTabbarSelected: {
      desc: '按钮被选中'
    }
  },
  size: {
    width: 1080,
    height: 144
  },
  mockData: {
    items: [{
      title: '信息',
      icon: 'xinxi1'
    }, {
      title: '下载',
      icon: 'xiazai'
    }, {
      title: '删除',
      icon: 'shanchu'
    }]
  },
  thumbnail: 'http://image.res.meizu.com/image/flyme-icon/fd28a04d2c4044d1993f9951a4a55972z'
};
