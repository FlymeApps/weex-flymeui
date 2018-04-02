import VALUE from 'weex-flymeui/lib/common/variable-type';
export default {
  name: 'FmSlider',
  desc: '轮播组件',
  slots: null,
  props: {
    items: {
      type: VALUE.ARRAY,
      desc: '数据源',
      props: {
        inner: VALUE.STRING,
        desc: '图片链接'
      },
      default: []
    },
    autoPlay: {
      type: VALUE.BOOLEAN,
      desc: '是否自动播放',
      default: false
    },
    interval: {
      type: VALUE.NUMBER,
      desc: '自动播放间隔时间',
      default: '4000'
    }
  },
  events: {
  },
  size: {
    width: 1080,
    height: 386
  }
};
