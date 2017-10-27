<template>
    <div class="wrapper" @click="fold">
        <!-- <div class="test" ref="container"></div> -->
        <div class="container" ref="plane" :style="planeStyle">
            <text :class="textClz" ref="text">{{getText}}</text>
            <text class="more" v-if="folded" ref="more" :style="moreStyle">更多</text>
        </div>
    </div>
</template>

<style scoped>
.container {
    position: relative;
}
.text {
    color: #999;
}
.text_small {
    font-size: 25px;
    line-height: 30px;
}
.text_large {
    font-size: 33px;
    font-weight: 500;
    line-height: 50px;
}
.text_huge {
    font-size: 38px;
    line-height: 56px;
}
.more {
    position: absolute;
    right: 10px;
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
            default: 750
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
        huge: Boolean
    },
    mounted() {
        // setTimeout(() => {
        //     dom.getComponentRect(this.$refs.plane, option => {
        //         this.expandHeight = option.size.height
        //         this.foldFlag = true
        //     })
        // }, 100);
        if (this.foldText === '') {
            let fontSize = this.large ? 33 : this.huge ? 38 : 25
            // 计算折叠后的文本
            let size1 = fontSize + fontSize * 0.08 // 汉字
            let size2 = fontSize * 0.487 // 英文
            let size3 = fontSize * 0.556 // 数字
            let size4 = fontSize * 0.347 // 全角
            let size5 = fontSize * 0.18 // 半角
            let tSize = 0, tmpStr = ''
            let maxWith = this.width * this.lines - size1 * 2
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
                } else if (/^[`~!@#\$%\^&\*\(\)_\-\+=\{\}\[\]|\\:;"'<>,.\?\/]/.test(c)) {
                    // 半角
                    tSize += size5
                } else {
                    // 其他
                    tSize += size1
                }
                if (tSize >= maxWith) {
                    tmpStr += '...'
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
        hackText() {
            if (!this.hackCp) {
                this.hackCp = weex.document.createElement('text', {
                    style: {
                        fontSize: 40,
                        left: 50
                    }
                })
                this.$refs.container.appendChild(this.hackCp)
            }
            return this.hackCp
        },
        planeStyle() {
            return {
                width: this.width
            }
        },
        moreStyle() {
            return {
                fontSize: this.large ? 33 : this.huge ? 38 : 25,
                lineHeight: this.large ? 50 : this.huge ? 56 : 30,
                color: '#198ded',
                fontWeight: '600'
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
            // let width = 0
            // // ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz
            // for (let c of '`~!@#$%^&*()-_=+<>,.?/:;"{}[]|\\\'') {
            //     this.hackText.setAttr('value', c, false)
            //     setTimeout(() => {
            //         dom.getComponentRect(this.hackText, option => {
            //             width += option.size.width
            //             console.log(width)
            //         })
            //     }, 100)
            // }
            // return
            // var plane = this.$refs.plane;
            // if (this.unexpandHeight == '') {
            //     const result = dom.getComponentRect(plane, option => {
            //         this.unexpandHeight = option.size.height + 'px';
            //     })
            // }
            // if (this.animationHeight == this.expandHeight) {

            //     this.animationHeight = this.unexpandHeight;
            // } else {
            //     this.lines = 0;
            //     this.animationHeight = this.expandHeight;
            // }

            // var self = this;
            // animation.transition(plane, {
            //     styles: {
            //         height: this.animationHeight
            //     },
            //     duration: 150, //ms
            //     timingFunction: 'linear',
            //     delay: 0 //ms
            // }, function() {
            //     if (self.animationHeight == self.unexpandHeight) {
            //         self.foldFlag = !self.foldFlag
            //     }
            // })
        }
    }
}
</script>
