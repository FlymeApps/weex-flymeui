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
      src: 'http://image.res.meizu.com/image/flyme-icon/400b7d70e80f4a78906529e78f463c8dz'
    }, {
      src: 'http://image.res.meizu.com/image/flyme-icon/f7fdc7ab6bea4b21a995876be3fcdc9fz'
    }, {
      src: 'http://image.res.meizu.com/image/flyme-icon/27c95bfe694344edb231ad9751617a99z'
    }, {
      src: 'http://image.res.meizu.com/image/flyme-icon/4306b23856484446bd6d53220f36159cz'
    }]
  },
  thumbnail: 'http://image.res.meizu.com/image/flyme-icon/b6d95a8e362b4587b22228bc6f68b5a9z'
};
