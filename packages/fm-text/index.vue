<template>
    <text :class="textClz">{{ text }}</text>
</template>

<style scoped>
    .text {
        font-size: 29.17px;
        line-height: 43px;
        color: #999;
        font-family: "Source Han Sans CN", Roboto, sans-serif;
    }

    .medium {
        font-weight: 500;
    }
    .bold {
        font-weight: 700;
    }
    .light {
        font-weight: 400;
        line-height: 38px;
    }

    .title {
        font-size: 33px;
        font-weight: 500;
        line-height: 48px;
        color: #000;
    }

    .small {
        font-size: 25px;
    }
    .large {
        font-size: 33px;
        font-weight: 500;
        line-height: 50px;
        color: #000;
    }
    .huge {
        font-size: 38px;
        line-height: 56px;
        color: #000;
    }
</style>

<script>
export default {
    props: {
        text: [String, Number],
        medium: Boolean,
        bold: Boolean,
        light: Boolean,
        title: Boolean,
        small: Boolean,
        large: Boolean,
        huge: Boolean
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

            return clz
        }
    }
}
</script>