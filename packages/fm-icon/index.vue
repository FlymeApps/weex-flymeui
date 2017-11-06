<template>
    <image v-if="isImg" class="fm-image"
          :src="value"
          @load="onLoad"
          @click="e=>$emit('click', e)"
          @longpress="e=>$emit('longpress', e)"
          :style="{ width: computedStyle.width, height: computedStyle.height }">
    </image>
    <text v-else :style="getStyle"
          @click="e=>$emit('click', e)"
          @longpress="e=>$emit('longpress', e)"
          >{{ getFontName }}
    </text>
</template>

<style scoped>
  .fm-image {
    width: 43px;
    height: 12px;
    margin-right: 6px;
  }
</style>

<script>
  const dom = weex.requireModule('dom')
  // 引入he模块，使用它解决weex-template-compiler在编译阶段进行decode
  const he = require("he");
  export default {
    props: {
      value: {
        type: String,
        default: ''
      },
      iconStyle: {
        type: [Number, Object],
        default: 14
      },
      color: {
        type: String,
        default: '#000000'
      }
    },
    data: () => ({
      width: 43
    }),
    computed: {
      computedStyle () {
        if (Object.prototype.toString.call(this.iconStyle).slice(8, -1).toLowerCase() !== 'object') {
          this.iconStyle = { height: 12 }
        }
        const { width, iconStyle } = this
        if (iconStyle && iconStyle.width && iconStyle.height) {
          return {
            width: `${iconStyle.width}px`,
            height: `${iconStyle.height}px`
          }
        } else {
          return {
            width: `${width}px`,
            height: `${iconStyle.height}px`
          }
        }
      },
      isImg() {
        let { value } = this
        if (value.indexOf("http") === 0 || value.indexOf("//") === 0) {
          return true
        }
        return false
      },
      getStyle () {
        const { iconStyle } = this
        let style = { fontFamily: 'flymeicon', color: this.color }
        if (Object.prototype.toString.call(this.iconStyle).slice(8, -1).toLowerCase() === 'object') {
          iconStyle.size && (style.fontSize = `${iconStyle.size}px`)
          iconStyle.lineHeight && (style.lineHeight = `${iconStyle.lineHeight}px`)
        } else {
          style.fontSize = iconStyle
        }
        return style
      },
      // 匹配对应的字体图标的unicode
      getFontName: function() {
          return he.decode(this.value)
      }
    },
    created () {
      dom.addRule('fontFace', {
        'fontFamily': 'flymeicon',
        'src': "url('http://design.flyme.cn/weexui/assets/iconfont.ttf')"
      })
    },
    methods: {
      onLoad (e) {
        if (e.success && e.size && e.size.naturalWidth > 0) {
          const width = e.size.naturalWidth
          const height = e.size.naturalHeight
          this.width = width * (this.iconStyle.height / height)
        }
      }
    }
  }
</script>
