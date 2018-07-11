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
        min: 1,
        inner: {
          src: {
            type: VALUE.STRING,
            desc: '图片或者 act 的链接'
          }
        }
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
    fmSliderItemClicked: {
      desc: '内容被点击'
    }
  },
  size: {
    width: 1080,
    height: 516
  },
  mockData: {
    items: [{
      src: 'http://gw.alicdn.com/imgextra/i4/169/TB2TlW1aLuSBuNkHFqDXXXfhVXa_!!169-0-lubanu.jpg_q50.jpg'
    }, {
      src: 'http://gw.alicdn.com/imgextra/TB2nu8oev5TBuNjSspcXXbnGFXa_!!103-0-lubanu.jpg_q50.jpg'
    }, {
      src: 'http://gw.alicdn.com/imgextra/TB2dprKdFuWBuNjSszbXXcS7FXa_!!124-0-luban.jpg_q50.jpg'
    }, {
      src: 'http://img.alicdn.com/imgextra/i4/18/TB28vYEdL9TBuNjy0FcXXbeiFXa_!!18-0-luban.jpg_q50.jpg'
    }, {
      src: 'http://aecpm.alicdn.com/simba/img/TB14ab1KpXXXXclXFXXSutbFXXX.jpg_q50.jpg'
    }]
  },
  thumbnail: 'http://image.res.meizu.com/image/flyme-icon/931c7561cc5e43618d20278c173dde59z'
};
