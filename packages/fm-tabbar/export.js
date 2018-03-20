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
            default: 'zhuiye',
            props: {
              options: ['zhuiye', 'wancheng', 'guanbi', 'gengduo', 'bianji', 'shanchu', 'fenxiang', 'xingxing']
            }
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
      default: [{
        title: '信息',
        icon: 'xinxi1',
        badge: 99
      }, {
        title: '下载',
        icon: 'xiazai',
        dot: true
      }, {
        title: '删除',
        icon: 'shanchu',
        badge: 999
      }]
    },
    backgroundColor: {
      type: VALUE.COLOR,
      desc: '背景颜色',
      default: '#FFFFFF'
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
  }
};
