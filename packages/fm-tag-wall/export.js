import VALUE from 'weex-flymeui/lib/common/variable-type';
export default {
  name: 'FmTagWall',
  desc: '标签墙组件',
  slots: null,
  props: {
    list: {
      type: VALUE.ARRAY,
      desc: '数据源',
      default: [{ title: '标签1', color: '#FC5B23' }, { title: '标签2' }]
    },
    title: {
      type: VALUE.STRING,
      desc: '标题',
      default: '标题'
    },
    titleColor: {
      type: VALUE.COLOR,
      desc: '标题颜色',
      default: 'rgba(0, 0, 0, 0.4)'
    },
    rightText: {
      type: VALUE.STRING,
      desc: '右边按钮文案',
      default: '更多'
    },
    rightColor: {
      type: VALUE.COLOR,
      desc: '右边按钮颜色',
      default: '#198DED'
    }
  },
  events: {
    fmTagWallRightBtnClicked: {
      desc: '右边按钮被点击'
    },
    fmTagWallSelected: {
      desc: '标签被点击'
    }
  }
};
