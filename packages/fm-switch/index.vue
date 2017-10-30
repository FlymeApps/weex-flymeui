<template>
    <div class="fm-switch" @click="changeState" :style="getBgStyle">
        <div 
          class="ctr-ball" 
          :style="ballStyle"
          ref="ctrBall"></div>
    </div>
</template>

<style scoped>

  .fm-switch {
    flex-direction: row;
    align-items: center;
    width: 48px;
    height: 24px;
    border-radius: 24px;
  }

  .ctr-ball {
    width: 16px;
    height: 16px;
    border-radius: 8px;
  }

</style>

<script>

import { THEME } from './theme'
const animation = weex.requireModule('animation')

export default {
    name: 'fm-switch',
    props: {
      checked: {
        type: Boolean,
        default: false
      },
      theme: {
        type: String,
        default: 'default'
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        isAnimate: false,
        focusColor: '#198ded',
        blurColor: '#7e97ac',
        ballStyle: {
          backgroundColor: this.blurColor
        }
      }
    },
    computed: {
      getBgStyle() {
        let style = this.theme === 'default' ? {
          borderWidth: 2,
          borderColor: '#7e97ac'
        } : THEME[this.theme]
        if (this.disabled) {
          style.opacity = 0.3
        } else {
          style.opacity = 1
        }
        return style
      }
    },
    methods: {
      changeState(e) {
        if (this.isAnimate || this.disabled) return
        this.checked = !this.checked
        this.toggleState()
        this.$emit('change', this.checked)
      },
      toggleState(){
          this.isAnimate = true
          const style = this.checked ? {
            backgroundColor: this.focusColor,
            transform: 'scale(1)',
            transform: 'translate(24px, 0)',
            transformOrigin: 'center center'
          } : {
            backgroundColor: this.blurColor,
            transform: 'scale(0.6)',
            transformOrigin: 'center center'
          }
          const ctrBall = this.$refs.ctrBall
          animation.transition(ctrBall, {
            styles: style,
            timingFunction: 'ease',
            duration: 260
          }, () => {
            this.isAnimate = false
          })
      }
    },
    mounted() {
      const { bgStyle, focusColor, blurColor } = this
      if (this.theme !== 'default') {
          this.focusColor = this.blurColor = '#fff'
      }
      this.checked ? this.ballStyle = {
          backgroundColor: this.focusColor,
          transform: 'scale(1.0)',
          transform: 'translate(24px, 0)'
      } : this.ballStyle = {
          backgroundColor: this.blurColor,
          transform: 'scale(0.6)'
      }
    }
}
</script>