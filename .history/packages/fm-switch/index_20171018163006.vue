<template>
    <div class="fm-switch" @click="changState" :style="getBgStyle">
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
    width: 100px;
    height: 50px;
    border-radius: 25px;
  }

  .ctr-ball {
    width: 34px;
    height: 34px;
    border-radius: 17px;
  }

</style>

<script>

import THEME from './theme'
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
        // bgStyle: {
        //   borderWidth: 4,
        //   borderColor: '#7e97ac'
        // },
        ballStyle: {
          backgroundColor: this.blurColor
        }
      }
    },
    computed: {
      getBgStyle() {
          console.log(THEME[this.theme])
        let style = this.theme === 'default' ? {
          borderWidth: 4,
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
      changState(e) {
        if (this.isAnimate || this.disabled) return
        this.checked = !this.checked
        this.toggleState()
      },
      toggleState(){
          this.isAnimate = true
          const style = this.checked ? {
            backgroundColor: this.focusColor,
            transform: 'scale(1)',
            transform: 'translate(50px, 0)',
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
          transform: 'translate(50px, 0)'
      } : this.ballStyle = {
          backgroundColor: this.blurColor,
          transform: 'scale(0.6)'
      }
    }
}
</script>