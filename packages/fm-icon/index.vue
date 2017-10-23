<template>
    <text :style="style"
          @click="e=>$emit('click', e)"
          @longpress="e=>$emit('longpress', e)"
          ><slot></slot>
    </text>
</template>
<script>
  const dom = weex.requireModule('dom')
  export default {
    props: {
      size: {
        type: Number,
        default: 34
      },
      color: {
        type: String,
        default: '#000000'
      }
    },
    computed: {
      style () {
        return {
          fontFamily: 'flymeicon',
          color: this.color,
          fontSize: `${this.size}px`
        }
      }
    },
    created () {
      dom.addRule('fontFace', {
        'fontFamily': 'flymeicon',
        'src': "url('http://172.17.201.32:8082//iconfont.ttf')"
      })
    }
  }
</script>
