export default {
    option: {
        props: {
            text: {
                type: 'string',
                required: true,
                default: '文字'
            },
            medium: {
                type: 'boolean',
                required: false,
                default: false
            },
            light: {
                type: 'boolean',
                required: false,
                default: false
            },
            title: {
                type: 'boolean',
                required: false,
                default: false
            },
            bold: {
                type: 'boolean',
                required: false,
                default: false
            },
            small: {
                type: 'boolean',
                required: false,
                default: false
            },
            large: {
                type: 'boolean',
                required: false,
                default: false
            },
            huge: {
                type: 'boolean',
                required: false,
                default: false
            }
        },
        events: {}
    },
    mock_data: {
        text: '文字'
    }
}