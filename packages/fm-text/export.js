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
    width: 155,
    height: 63
  },
  mockData: {
    value: '文本',
    fontWeight: 'normal',
    size: 'normal'
  },
  thumbnail: 'http://image.res.meizu.com/image/flyme-icon/3798ebc7fd1f45e8985d45d642549bcdz'
};
