import VALUE from 'weex-flymeui/lib/common/variable-type';
export default {
  name: 'FmSearchbar',
  desc: '搜索栏组件',
  props: {
    inputValue: {
      type: VALUE.STRING,
      desc: '默认内容',
      default: ''
    },
    placeholder: {
      type: VALUE.STRING,
      desc: '提示文案',
      default: ''
    },
    placeholderColor: {
      type: VALUE.COLOR,
      desc: '提示文案颜色',
      default: 'rgba(0, 0, 0, 0.4)'
    },
    inputBackground: {
      type: VALUE.COLOR,
      desc: '输入框背景颜色',
      default: 'rgba(0, 0, 0, 0.05)'
    },
    searchText: {
      type: VALUE.STRING,
      desc: '搜索文案',
      default: '搜索'
    },
    searchColor: {
      type: VALUE.COLOR,
      desc: '搜索颜色',
      default: 'rgba(0, 0, 0, 0.4)'
    },
    searchHighlightColor: {
      type: VALUE.COLOR,
      desc: '搜索高亮颜色',
      default: '#198DED'
    },
    backgroundColor: {
      type: VALUE.COLOR,
      desc: '背景颜色',
      default: '#FFFFFF'
    },
    statusbar: {
      type: VALUE.BOOLEAN,
      desc: '预留状态栏',
      default: false
    },
    hasPrev: {
      type: VALUE.BOOLEAN,
      desc: '显示左边按钮',
      default: true
    },
    inputType: {
      type: VALUE.SELECT,
      desc: '输入类型',
      default: 'text',
      props: {
        options: ['text', 'date', 'datetime', 'email', 'password', 'tel', 'time', 'url', 'number']
      }
    }
  },
  events: {
    fmSearchbarSubmit: {
      desc: '键盘回车键被按下或点击搜索按钮'
    },
    fmSearchbarLeftBtnClicked: {
      desc: '左边按钮被点击'
    },
    input: {
      desc: '输入内容改变'
    },
    focus: {
      desc: '输入框获得焦点'
    },
    blur: {
      desc: '输入框失去焦点'
    }
  },
  size: {
    width: 1080,
    height: 144
  },
  slot: [{
    name: 'left',
    desc: '自定义左边按钮'
  }, {
    name: 'input-right',
    desc: '自定义输入框右侧'
  }, {
    name: 'right',
    desc: '自定义搜索按钮'
  }]
};
