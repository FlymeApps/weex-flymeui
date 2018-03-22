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
      default: ['//gw.alicdn.com/imgextra/i4/169/TB2TlW1aLuSBuNkHFqDXXXfhVXa_!!169-0-lubanu.jpg_q50.jpg', '//gw.alicdn.com/imgextra/TB2nu8oev5TBuNjSspcXXbnGFXa_!!103-0-lubanu.jpg_q50.jpg']
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
