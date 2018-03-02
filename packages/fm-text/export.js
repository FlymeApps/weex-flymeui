import VALUE from 'weex-flymeui/lib/common/variable-type';
export default {
  name: 'FmText',
  desc: '通用文本组件',
  slots: null,
  props: {
    value: {
      type: VALUE.STRING,
      desc: '内容',
      default: '文本'
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
  events: {}
};
