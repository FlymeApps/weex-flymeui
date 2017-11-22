<template>
    <text @click="fmClick" :class="textClz" :style="getStyle"><slot></slot>{{textValue}}</text>
</template>

<style scoped>
    .text {
        font-size: 14px;
        line-height: 21px;
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
        line-height: 18px;
    }

    .title {
        font-size: 16px;
        font-weight: 500;
        line-height: 23px;
        color: #000;
    }

    .small {
        font-size: 12px;
    }
    .large {
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        color: #000;
    }
    .huge {
        font-size: 18px;
        line-height: 27px;
        color: #000;
    }
    .margin-text {
        margin-right: 3px;
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
        click(e) {
            this.$emit('fmClick', e);
        }
    }
}
</script>