export default {
    base: {
        name: '基础组件',
        subname: 'Underlying conponent',
        componentList: [{
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
            name: '折叠文本',
            subname: 'FmFoldableText',
            path: 'component/foldableText'
        }]
    },
    container: {
        name: '容器组件',
        subname: 'Container conponent',
        componentList: [{
            name: '标签页',
            subname: 'FmTabView',
            path: 'component/tabView'
        }]
    },
    interaction: {
        name: '交互组件',
        subname: 'Interactive conponent',
        componentList: [{
            name: '引导提示',
            subname: 'FmTips',
            path: 'component/tips'
        },{
            name: '蒙层',
            subname: 'FmOverlay',
            path: 'component/overlay'
        },{
            name: '对话框',
            subname: 'FmDialog',
            path: 'component/dialog'
        },{
            name: '对话框',
            subname: 'FmDialog',
            path: 'component/dialog'
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
            name: '滑块',
            subname: 'FmSlider',
            path: 'component/slider'
        }]
    },
    other: {
        name: '其他组件',
        subname: 'Other conponent',
        componentList: [
            
        ]
    },
    ApiModule: {
        name: 'Native接口',
        subname: '提供Native能力',
        componentList: [
            {
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
            }
        ]
    }
}