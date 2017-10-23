export default {
    option: {
        props: {
            type: {
                type: 'string',
                required: false,
                default: 'solid'
            },
            size: {
                type: 'string',
                required: false,
                default: 'small'
            },
            value: {
                type: 'boolean',
                required: true,
                default: '标签'
            },
            color: {
                type: 'color',
                required: false,
                default: '#198ded'
            },
            fontColor: {
                type: 'color',
                required: false,
                efault: '#ffffff'
            }
        },
        events: {}
    },
    mock_data: {
        type: 'solid',
        size: 'small',
        value: '标签',
        color: '#198ded',
        fontColor: '#ffffff'
    }
}