import VALUE from 'weex-flymeui/lib/common/variable-type';
export default {
  name: 'FmTagWall',
  desc: '标签墙组件',
  props: {
    list: {
      type: VALUE.ARRAY,
      desc: '数据源',
      props: {
        inner: {
          title: {
            type: VALUE.STRING,
            desc: '标题'
          },
          color: {
            type: VALUE.COLOR,
            desc: '标题颜色'
          },
          backgroundColor: {
            type: VALUE.COLOR,
            desc: '背景颜色'
          },
          borderColor: {
            type: VALUE.COLOR,
            desc: '边框颜色'
          }
        }
      },
      default: []
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
  },
  size: {
    width: 1080,
    height: 396
  },
  slots: [{
    name: 'left',
    desc: '自定义左边按钮'
  }, {
    name: 'right',
    desc: '自定义右边按钮'
  }],
  mockData: {
    list: [{
      title: '微信',
      color: '#3BC06B'
    }, {
      title: '摩拜单车',
      color: '#FC5B23'
    }, {
      title: '小睡眠'
    }, {
      title: '音乐'
    }, {
      title: '购物'
    }, {
      title: '时间管理'
    }, {
      title: '换机助手'
    }, {
      title: 'Flyme Design'
    }, {
      title: 'Creator'
    }],
    title: '应用'
  },
  thumbnail: 'http://image.res.meizu.com/image/flyme-icon/5eddc64f41f143c8b28f965e3c890ad0z'
};
