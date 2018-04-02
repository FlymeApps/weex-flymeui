import VALUE from 'weex-flymeui/lib/common/variable-type';
export default {
  name: 'FmItem',
  desc: '通用列表组件',
  props: {
    type: {
      type: VALUE.SELECT,
      desc: '列表类型',
      default: 'normal',
      props: {
        options: ['normal', 'single', 'avatar', 'icon-small', 'icon-middle', 'icon-large']
      }
    },
    title: {
      type: VALUE.STRING,
      desc: '列表描述',
      default: '列表描述'
    },
    summary: {
      type: VALUE.STRING,
      desc: '列表描述',
      default: '列表描述'
    },
    description: {
      type: VALUE.STRING,
      desc: '段落描述',
      default: '段落描述'
    },
    imgSrc: {
      type: VALUE.STRING,
      desc: '图片路径',
      default: ''
    },
    occupyingColor: {
      type: VALUE.COLOR,
      desc: '图片占位颜色',
      default: '#FAFAFA'
    }
  },
  events: {
    fmItemClicked: {
      desc: '点击'
    },
    fmTitlebarRightBtnClicked: {
      desc: '长按'
    }
  },
  size: {
    width: 1080,
    height: 269
  },
  slot: [{
    name: 'left',
    desc: '自定义标题左边'
  }, {
    name: 'title',
    desc: '自定义标题'
  }, {
    name: 'right',
    desc: '自定义标题右边'
  }]
};
