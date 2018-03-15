export default {
  base: {
    name: '基础组件',
    subname: 'Underlying conponent',
    componentList: [{
      name: '导航栏',
      subname: 'FmTitlebar',
      path: 'component/titlebar'
    }, {
      name: '搜索栏',
      subname: 'FmSearchbar',
      path: 'component/searchbar'
    }, {
      name: '底部文字按钮',
      subname: 'FmTextbar',
      path: 'component/textbar'
    }, {
      name: '底部操作栏',
      subname: 'FmTabbar',
      path: 'component/tabbar'
    }, {
      name: '底部腰圆按钮',
      subname: 'FmBtnbar',
      path: 'component/btnbar'
    }, {
      name: '文本',
      subname: 'FmText',
      path: 'component/text'
    }, {
      name: '富文本',
      subname: 'RichText',
      path: 'component/richText'
    }, {
      name: '图标',
      subname: 'FmIcon',
      path: 'component/icon'
    }, {
      name: '标签',
      subname: 'FmTag',
      path: 'component/tag'
    }, {
      name: '标签墙',
      subname: 'FmTagWall',
      path: 'component/tagWall'
    }, {
      name: '简单列表',
      subname: 'FmSimpleList',
      path: 'component/simpleList'
    }, {
      name: '通用列表项',
      subname: 'FmCell',
      path: 'component/list'
    }, {
      name: '折叠文本',
      subname: 'FmFoldableText',
      path: 'component/foldableText'
    }, {
      name: '搜索框',
      subname: 'FmSearchbar',
      path: 'component/searchbar'
    }, {
      name: 'List 多选列表',
      subname: 'fm-multi-check-group & fm-multi-check-cell',
      path: 'component/multiCheck'
    }]
  },
  container: {
    name: '容器组件',
    subname: 'Container conponent',
    componentList: [{
      name: '底栏',
      subname: 'FmFooter',
      path: 'component/footer'
    }, {
      name: '标签页',
      subname: 'FmTabPage',
      path: 'component/tabPage'
    }, {
      name: '蒙层',
      subname: 'FmOverlay',
      path: 'component/overlay'
    }, {
      name: '侧边弹出窗口',
      subname: 'FmPopup',
      path: 'component/popup'
    }]
  },
  interaction: {
    name: '交互组件',
    subname: 'Interactive conponent',
    componentList: [{
      name: '引导提示',
      subname: 'FmTips',
      path: 'component/tips'
    }, {
      name: '底部提示信息',
      subname: 'FmSnackBar',
      path: 'component/snackbar'
    }, {
      name: '对话框',
      subname: 'FmDialog',
      path: 'component/dialog'
    }, {
      name: '底部删除弹框',
      subname: 'FmActionSheet',
      path: 'component/actionSheet'
    }]
  },
  form: {
    name: '表单组件',
    subname: 'Form conponent',
    componentList: [{
      name: '按钮',
      subname: 'FmButton',
      path: 'component/button'
    }, {
      name: '开关按钮',
      subname: 'FmSwitch',
      path: 'component/switch'
    }, {
      name: '输入框',
      subname: 'FmInput',
      path: 'component/input'
    }, {
      name: '多选项',
      subname: 'FmCheckListGroup & FmCheckbox',
      path: 'component/checklist'
    }, {
      name: '星级评分',
      subname: 'FmRater',
      path: 'component/rater'
    }, {
      name: '滑块',
      subname: 'FmSlider',
      path: 'component/slider'
    }]
  },
  other: {
    name: '其他组件',
    subname: 'Other conponent',
    componentList: [{
      name: '动效器',
      subname: 'FmActionView',
      path: 'component/actionView'
    }, {
      name: 'Recylist',
      subname: 'Recylist',
      path: 'http://172.17.132.159:8877/dist/recylist.js?userId=7001561&nickname=fuyong'
    }, {
      name: 'native弹框',
      subname: 'native弹框',
      path: 'component/nativeDialog'
    }, {
      name: 'nativeTab',
      subname: 'nativeTab',
      path: 'component/nativeTab'
    }, {
      name: 'nativeShadow',
      subname: 'nativeShadow',
      path: 'component/nativeShadow'
    }]
  },
  ApiModule: {
    name: 'Native接口',
    subname: '提供Native能力',
    componentList: [{
      name: 'Navigator',
      subname: '页面导航',
      path: 'module/navigator'
    }, {
      name: 'Flyme Login',
      subname: '提供 Flyme 账号相关信息获取',
      path: 'module/userinfo'
    }, {
      name: 'Flyme 信息分享',
      subname: '提供 Flyme 分享接口',
      path: 'module/share'
    }, {
      name: 'Flyme 设备信息',
      subname: '提供信息的获取接口',
      path: 'module/device'
    }, {
      name: 'Native 交互',
      subname: '提供原生的交互弹框调用',
      path: 'module/view'
    }, {
      name: 'Flyme 网络状态',
      subname: '提供网路连接相关接口',
      path: 'module/netInfo'
    }, {
      name: 'Flyme 地理位置',
      subname: '提供地理单次或实时获取相关接口',
      path: 'module/location'
    }, {
      name: 'Flyme 传感器相关',
      subname: '提供方向、加速度、陀螺仪等传感器的数据获取',
      path: 'module/sensor'
    }, {
      name: '媒体接口 -- 扫码',
      subname: '调起相机扫码',
      path: 'module/scan'
    }]
  }
};
