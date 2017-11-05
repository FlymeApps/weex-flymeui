<template>
  <div class="fm-water-box" ref="self" @click="click" @touchstart="touchstart" @panmove="move" @touchend="touchend">
      <slot></slot>
  </div>
</template>

<style scoped>
  .fm-water-box {
    -webkit-user-select: none;/* 禁用手机浏览器的用户选择功能 */
    -moz-user-select: none;
  }
</style>

<script>
const animation = weex.requireModule('animation')

export default {
  data () {
    return {
      scaleCircle: null,
      flag: false,
      deleteFlag: false,
      panX: 0,
    }
  },
  computed: {
    
  },
  methods: {
    touchstart(e) {
      // this.panX = e.changedTouches[0].pageX
      animation.transition(this.$refs.self, {
          styles: {
              backgroundColor: '#00ff7f'
          },
          duration: 800, //ms
          timingFunction: 'ease-out'
      })
      e.stopPropagation()
    },
    touchend(e) {
      animation.transition(this.$refs.self, {
          styles: {
              backgroundColor: '#fff'
          },
          duration: 800, //ms
          timingFunction: 'ease-out'
      })
      e.stopPropagation()
      // if (e.changedTouches[0].pageX - this.panX < -20) {
      //     this.deleteFlag = true
      //     animation.transition(this.$refs.content, {
      //         styles: {
      //             transform: 'translate(-192px, 0)',
      //             transformOrigin: 'center center'
      //         },
      //         duration: 300, //ms
      //         timingFunction: 'ease-out'
      //     })
      // } else {

      // }
    },
    move(e) {
      console.log(e)
    }
  }
}
</script>
