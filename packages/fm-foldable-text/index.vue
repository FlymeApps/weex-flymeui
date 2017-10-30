<template>
    <div class="wrapper" @click="fold">
        <div class="container" ref="plane" :style="planeStyle">
            <text :class="textClz" ref="text" :style="textStyle">{{ getText }}</text>
            <text class="more" v-if="folded" ref="more" :style="moreStyle">{{ tipValue }}</text>
        </div>
    </div>
</template>

<style scoped>
.container {
    position: relative;
}
.text {
    font-family: "Source Han Sans CN", Roboto, sans-serif;
    color: #999;
}
.text_small {
    font-size: 12px;
    line-height: 14px;
}
.text_large {
    font-family: sans-serif-medium;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
}
.text_huge {
    font-family: sans-serif-medium;
    font-size: 18px;
    line-height: 26px;
}
.more {
    position: absolute;
    right: 6px;
    bottom: 0;
}
.test {
    flex-direction: row;
}
</style>

<script>
export default {
    data() {
        return {
            expandHeight: '',
            unexpandHeight: '',
            animationHeight: '',
            foldText: ''
        }
    },
    props: {
        width: {
            type: Number,
            default: 340
        },
        text: {
            type: String,
            default: ''
        },
        lines: {
            type: Number,
            default: 2
        },
        folded: {
            type: Boolean,
            default: true
        },
        small: {
            type: Boolean,
            default: true
        },
        large: Boolean,
        huge: Boolean,
        textStyle: Object,
        tipStyle: Object,
        tipValue: {
            type: String,
            default: '更多'
        }
    },
    mounted() {
        if (this.foldText === '') {
            const { textStyle } = this
            let fontSize = (textStyle && textStyle.fontSize) ? textStyle.fontSize : this.large ? 16 : this.huge ? 18 : 12
            // 计算折叠后的文本
            let size1 = fontSize + fontSize * 0.03 // 汉字
            let size2 = fontSize * 0.56 // 英文
            let size3 = fontSize * 0.556 // 数字
            let size4 = fontSize * 0.77 // 全角
            let size5 = fontSize * 0.2 // 半角
            let tSize = 0, tmpStr = ''
            let maxWith = this.width * this.lines - size1 * this.tipValue.length
            for (let c of this.text) {
                if (/^[\u4e00-\u9fa5]/.test(c)) {
                    // 汉字
                    tSize += size1
                } else if (/^[a-zA-Z]/.test(c)){
                    // 英文
                    tSize += size2
                } else if (/^[0-9]/.test(c)){
                    // 数字
                    tSize += size3
                } else if (/^[·《》，。？、：；“”‘’——【】]/.test(c)) {
                    // 全角
                    tSize += size4
                } else if (/^[`~!@#\$%\^&\*\(\)_\-\+=\{\}\[\]|\\:;"'<>,.\?\/\s]/.test(c)) {
                    // 半角
                    tSize += size5
                } else {
                    // 其他
                    tSize += size1
                }
                if (tSize >= maxWith) {
                    tmpStr += '..'
                    break
                }
                tmpStr += c
            }
            this.foldText = tmpStr
        }
    },
    computed: {
        getText() {
            return this.folded ? this.foldText : this.text
        },
        planeStyle() {
            return {
                width: this.width
            }
        },
        moreStyle() {
            return {
                fontSize: this.large ? 16 : this.huge ? 18 : 12,
                lineHeight: this.large ? 24 : this.huge ? 26 : 14,
                color: '#198ded',
                fontWeight: '600',
                backgroundColor: '#fff',
                ...this.tipStyle
            }
        },
        textClz() {
            let clz = ['text', 'text_small']
            if (this.large) {
                clz.push('text_large')
            } else if (this.huge) {
                clz.push('text_huge')
            }
            return clz
        }
    },
    methods: {
        fold() {
            this.folded = !this.folded
        }
    }
}
</script>
