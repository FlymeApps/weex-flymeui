import VALUE from 'weex-flymeui/lib/common/variable-type';
export default {
  name: 'FmInput',
  desc: '输入框组件',
  slots: null,
  props: {
    type: {
      type: VALUE.SELECT,
      desc: '输入类型',
      default: 'text',
      props: {
        options: ['text', 'date', 'datetime', 'email', 'password', 'tel', 'time', 'url', 'number']
      }
    },
    defalutValue: {
      type: VALUE.STRING,
      desc: '输入框默认内容',
      default: ''
    },
    placeholder: {
      type: VALUE.STRING,
      desc: '输入提示',
      default: '请输入'
    }
  },
  events: {
    input: {
      desc: '正在输入'
    },
    change: {
      desc: '内容改变'
    },
    focus: {
      desc: '获得焦点'
    },
    blur: {
      desc: '失去焦点'
    }
  }
};
