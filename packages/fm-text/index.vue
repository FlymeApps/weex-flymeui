<template>
    <text :class="textClz" :style="getStyle"><slot></slot>{{textValue}}</text>
</template>

<style scoped>
    .text {
        font-size: 42;
        line-height: 63;
        color: #999;
        font-family: "Source Han Sans CN", Roboto, sans-serif;
    }

    .medium {
        font-family: sans-serif-medium;
        font-weight: 500;
    }
    .bold {
        font-weight: 700;
    }
    .light {
        font-weight: 400;
        line-height: 54;
    }

    .title {
        font-size: 48;
        font-weight: 500;
        line-height: 69;
        color: #000;
    }

    .small {
        font-size: 36;
    }
    .large {
        font-size: 48;
        font-weight: 500;
        line-height: 72;
        color: #000;
    }
    .huge {
        font-size: 54;
        line-height: 81;
        color: #000;
    }
    .margin-text {
        margin-right: 9;
    }
</style>

<script>
export default {
    props: {
        textValue: [String, Number],
        medium: Boolean,
        bold: Boolean,
        light: Boolean,
        title: Boolean,
        small: Boolean,
        large: Boolean,
        huge: Boolean,
        textStyle: {
            type: Object,
            default: () => ({})
        },
        hasTextMargin: {
            type: Boolean,
            default: true
        },
        fmClick: Function
    },

    computed: {
        textClz () {
            let clz = ['text']
            if (this.medium) {
                clz.push('medium')
            }
            if (this.light) {
                clz.push('light')
            }
            if (this.title) {
                clz.push('title')
            }
            if (this.bold) {
                clz.push('bold')
            }
            if (this.small) {
                clz.push('small')
            }
            if (this.large) {
                clz.push('large')
            }
            if (this.huge) {
                clz.push('huge')
            }
            if (this.hasTextMargin) {
                clz.push('margin-text')
            }
            return clz
        },
        getStyle () {
            return {
                ...this.textStyle
            }
        }
    },
    methods: {
        
    }
}
</script>