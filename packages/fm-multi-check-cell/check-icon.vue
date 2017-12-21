<template>
  <div class="check-icon">
    <div class="animate-wrap" :hack="isNeedShow" ref="animate-wrap" :style="wrapStyle">
      <!-- <div class="unchecked"></div> -->
      <image 
        class="unchecked"
        src="http://design.flyme.cn/weexui/assets/mz_btn_check_button_square_off.png" />
      <image 
        class="checked"
        src="http://design.flyme.cn/weexui/assets/mz_btn_check_button_square_on.png" 
        ref="check-icon"
        :watch="isNeedChecked" />
      <!-- <div :watch="isNeedChecked" class="checked" ref="check-icon">
        <fm-icon value="&#xe6de;" color="#FFFFFF" size="40" />>
      </div> -->
    </div>
  </div>
</template>

<style scoped>
  .animate-wrap {
    width: 72px;
    height: 72px;
  }

  .unchecked {
    width: 72px;
    height: 72px;
    /* border-color: #d9d9d9;
                border-radius: 30px;
                border-width: 6px; */
  }

  .checked {
    position: absolute;
    left: 0;
    top: 0;
    width: 72px;
    height: 72px;
    /* background-color: #198ded;
                border-radius: 30px; */
    transform: scale(0);
  }
</style>

<script>
  import FmIcon from '../fm-icon'
  const animation = weex.requireModule('animation')
  export default {
    components: { FmIcon },
    props: {
      show: {
        type: Boolean,
        default: false
      },
      checked: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      checked(bool) {
        this.appearChecked(bool)
      }
    },
    data: () => ({}),
    computed: {
      wrapStyle() {
        return this.show
          ? {
              opacity: 1
            }
          : {
              opacity: 0,
              transform: 'rotateX(90deg)'
            }
      },
      checkedStyle() {
        return this.checked
          ? {
              opacity: 1
            }
          : {
              opacity: 0
            }
      },
      isNeedShow() {
        this.appear(this.show)
      },
      isNeedChecked() {
        setTimeout(() => {
          this.appearChecked(this.checked)
        }, 50)
      }
    },
    methods: {
      appear(bool, duration = 200) {
        const animateEl = this.$refs['animate-wrap']
        if (!animateEl || !bool) {
          return
        }
        let style = {
          transform: 'rotateX(0deg)'
        }
        animation.transition(
          animateEl,
          {
            styles: style,
            duration,
            delay: 0,
            timingFunction: 'ease-out'
          },
          () => {}
        )
      },
      appearChecked(bool, duration = 30) {
        const animateEl = this.$refs['check-icon']
        if (!animateEl) {
          return
        }
        let style = bool
          ? {
              transform: 'scale(1)'
            }
          : {
              transform: 'scale(0)'
            }
        animation.transition(
          animateEl,
          {
            styles: style,
            duration,
            delay: 0,
            timingFunction: 'ease-out'
          },
          () => {}
        )
      }
    }
  }
</script>


