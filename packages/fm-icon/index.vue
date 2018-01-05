<template>
    <image v-if="isImg" class="fm-image"
          :src="value"
          @load="onLoad"
          @click="click"
          @longpress="longpress"
          :style="{ width: computedStyle.width, height: computedStyle.height }" />
    <text v-else :style="getStyle"
          @click="click"
          @longpress="longpress"
          >{{ getFontName }}
    </text>
</template>

<style scoped>
  .fm-image {
    width: 129;
    height: 36;
    margin-right: 18;
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
        default: 42
      },
      color: {
        type: String,
        default: '#000000'
      }
    },
    data: () => ({
      width: 129
    }),
    computed: {
      computedStyle () {
        if (Object.prototype.toString.call(this.iconStyle).slice(8, -1).toLowerCase() !== 'object') {
          this.iconStyle = { width: 36, height: 36 }
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
      },
      click(e) {
        this.$emit('fmClick', e)
      },
      longpress(e) {
        this.$emit('fmLongpress', e)
      }
    }
  }
</script>
