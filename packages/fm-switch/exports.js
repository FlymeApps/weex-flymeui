export default {
    option: {
        props: {
            checked: {
                type: 'boolean',
                requird: false,
                default: false
            },
            theme: {
                type: 'string',
                requird: false,
                default: 'default'
            },
            disabled: {
                type: 'boolean',
                requird: false,
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