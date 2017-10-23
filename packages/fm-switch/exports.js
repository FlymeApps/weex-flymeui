export default {
    option: {
        props: {
            checked: {
                type: 'boolean',
                required: false,
                default: false
            },
            theme: {
                type: 'string',
                required: false,
                default: 'default'
            },
            disabled: {
                type: 'boolean',
                required: false,
                default: false
            }
        },
        events: {
            change: {
                name: '状态改变'
            }
        }
    },
    mock_data: {
        checked: false,
        theme: 'default',
        disabled: false
    }
}