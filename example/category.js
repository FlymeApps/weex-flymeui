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
                path: 'module/button'
            }, {
                name: 'Flyme Login',
                subname: 'Flyme账号信息',
                path: 'module/switch'
            }
        ]
    }
}