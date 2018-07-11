import VALUE from 'weex-flymeui/lib/common/variable-type';
export default {
  name: 'FmText',
  desc: '通用文本组件',
  slots: null,
  props: {
    value: {
      type: VALUE.STRING,
      desc: '内容',
      default: ''
    },
    fontWeight: {
      type: VALUE.SELECT,
      desc: '字重',
      default: 'normal',
      props: {
        options: ['light', 'normal', 'medium', 'bold']
      }
    },
    size: {
      type: VALUE.SELECT,
      desc: '段落大小',
      default: 'normal',
      props: {
        options: ['small', 'normal', 'large', 'huge']
      }
    }
  },
  events: {},
  size: {
    width: 200,
    height: 63
  },
  mockData: {
    value: '文本',
    fontWeight: 'normal',
    size: 'normal'
  },
  thumbnail: 'http://image.res.meizu.com/image/flyme-icon/cac2f6baaebc4509a0a1edb472ab87a3z'
};
