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
        bgStyle: {
          borderWidth: 4,
          borderColor: '#7e97ac'
        },
        ballStyle: {
          backgroundColor: this.blurColor,
          transform: 'scale(1)'
        }
      }
    },
    computed: {
      getBgStyle() {
        if (this.disabled) {
          this.bgStyle.opacity = 0.3
        } else {
          this.bgStyle.opacity = 1
        }
        return this.bgStyle
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
      switch (this.theme) {
        case 'blue': 
          this.bgStyle = {
            backgroundColor: '#269cfc'
          }
          this.focusColor = this.blurColor = '#fff'
          break
        case 'limegreen': 
          this.bgStyle = {
            backgroundColor: '#58cc82'
          }
          this.focusColor = this.blurColor = '#fff'
          break
        case 'seagreen': 
          this.bgStyle = {
            backgroundColor: '#2bcdd9'
          }
          this.focusColor = this.blurColor = '#fff'
          break
        case 'gray': 
          this.bgStyle = {
            backgroundColor: '#8ca4ba'
          }
          this.focusColor = this.blurColor = '#fff'
          break
        case 'crimson': 
          this.bgStyle = {
            backgroundColor: '#db674b'
          }
          this.focusColor = this.blurColor = '#fff'
          break
        case 'firebrick': 
          this.bgStyle = {
            backgroundColor: '#fc474a'
          }
          this.focusColor = this.blurColor = '#fff'
          break
        case 'tomato': 
          this.bgStyle = {
            backgroundColor: '#fc723f'
          }
          this.focusColor = this.blurColor = '#fff'
          break
        case 'coral': 
          this.bgStyle = {
            backgroundColor: '#ffcd45'
          }
          this.focusColor = this.blurColor = '#fff'
          break
      }
      console.log(this.checked)
      this.checked ? this.ballStyle = {
          backgroundColor: this.focusColor,
          transform: 'scale(1)',
          transform: 'translate(50px, 0)'
      } : this.ballStyle = {
          backgroundColor: this.blurColor,
          transform: 'scale(0.6)'
      }
    }
}
</script>