import VALUE from 'weex-flymeui/lib/common/variable-type';
export default {
  name: 'FmTabPage',
  desc: '标签页组件',
  slots: null,
  props: {
    tabTitles: {
      type: VALUE.ARRAY,
      desc: '导航标签列表',
      props: {
        min: 1,
        inner: {
          title: {
            type: VALUE.STRING,
            desc: '标题'
          }
        }
      },
      default: [{ title: '标签1' }, { title: '标签2' }, { title: '标签3' }]
    },
    tabPageHeight: {
      type: VALUE.NUMBER,
      desc: '页面高度',
      default: 1920
    }
  },
  events: {
    fmTabPageTabSelected: {
      desc: '页数切换'
    }
  },
  size: {
    width: 1080,
    height: 1920
  }
};
