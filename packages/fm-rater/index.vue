<template>
  <div class="rater-wrap" ref="rater" @touchstart="raterTouchStart" @touchmove="raterTouchmove" @touchend="raterTouchend">
    <div class="rater-star-bg">
      <image :class="starClz" :src="getBgImgs" />
      <image :class="starClz" :src="getBgImgs" />
      <image :class="starClz" :src="getBgImgs" />
      <image :class="starClz" :src="getBgImgs" />
      <image :class="starClz" :src="getBgImgs" />
    </div>
    <div class="rater-star" :style="wraperWidth">
      <image :class="starClz" v-for="(item, index) in getImgs" :key="index" :src="item" />
    </div>
  </div>
</template>

<style scoped>
  .rater-wrap {
    position: relative;
    flex-direction: row;
  }

  .rater-star {
    flex-direction: row;
    position: absolute;
    overflow: hidden;
    left: 0;
    top: 0;
  }

  .rater-star-bg {
    flex-direction: row;
  }

  .rater-star-cover {
    position: absolute;
    overflow: hidden;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .star {
    
  }

  .star_small {
    width: 30px;
    height: 30px;
    margin: 0 3px;
  }

  .star_big {
    width: 60px;
    height: 60px;
    margin: 0 13px;
  }

</style>

<script>
import FmIcon from '../fm-icon'
import FmImage from '../fm-image'
const dom = weex.requireModule('dom')
export default {
  components: { FmIcon, FmImage },
  props: {
    score: {
      type: Number,
      default: 5
    },
    fullScore: {
      type: Number,
      default: 10
    },
    size: {
      type: String,
      default: 'big'
    },
    theme: {
      type: String,
      default: 'normal'
    },
    canChange: {
      type: Boolean,
      default: true
    },
    canSlide: {
      type: Boolean,
      default: true
    },
    starImgs: {
      type: Array,
      default: [
        'https://raw.githubusercontent.com/Yanjiie/weex-flymeui/master/assets/star1.png',
        'https://raw.githubusercontent.com/Yanjiie/weex-flymeui/master/assets/star2.png',
        'https://raw.githubusercontent.com/Yanjiie/weex-flymeui/master/assets/star3.png',
        'https://raw.githubusercontent.com/Yanjiie/weex-flymeui/master/assets/star4.png',
        'https://raw.githubusercontent.com/Yanjiie/weex-flymeui/master/assets/star5.png'
      ]
    },
    starSpecialImg: {
      type: String,
      default: 'https://raw.githubusercontent.com/Yanjiie/weex-flymeui/master/assets/star_special.png'
    },
    starDarkImg: {
      type: String,
      default: 'https://raw.githubusercontent.com/Yanjiie/weex-flymeui/master/assets/star_dark.png'
    },
    starBgImg: {
      type: String,
      default: 'https://raw.githubusercontent.com/Yanjiie/weex-flymeui/master/assets/star_bg.png'
    },
    starDarkBgImg: {
      type: String,
      default: 'https://raw.githubusercontent.com/Yanjiie/weex-flymeui/master/assets/star_dark_bg.png'
    }
  },
  data: () => ({
    offset_left: 0,
    starCount: 5
  }),
  computed: {
    starClz() {
      let clz = ['star']
      this.size === 'big' ? clz.push('star_big') : clz.push('star_small')
      return clz
    },
    wraperWidth() {
      let { score, fullScore, size } = this
      let half_star_width = size === 'big' ? 43 : 18
      let percent = score / fullScore
      let length = score <= 0 ? 0 : percent >= 1 ? 10 : percent.toFixed(1) * 10
      length = (length === NaN) ? 0 : length
      return !length ? {
        width: 1,
        opacity: 0
      } : {
        width: length * half_star_width,
        opacity: 1
      }
    },
    getImgs() {
      let { theme } = this
      if (theme === 'normal') {
        return this.starImgs
      } else if (theme === 'special') {
        let arr = []
        for (let i = 0; i < 5; i++) {
          arr.push(this.starSpecialImg)
        }
        return arr
      } else if (theme === 'dark') {
        let arr = []
        for (let i = 0; i < 5; i++) {
          arr.push(this.starDarkImg)
        }
        return arr
      }
    },
    getBgImgs() {
      let { theme } = this
      if (theme === 'normal' || theme === 'special') {
        return this.starBgImg
      } else if (theme === 'dark') {
        return this.starDarkBgImg
      }
    }
  },
  methods: {
    raterTouchStart(e) {
      let { canChange, canSlide } = this
      if (!canChange || !canSlide) return
      this.calculateScore(e.changedTouches[0].pageX, true)
    },
    raterTouchmove(e) {
      let { canChange, canSlide } = this
      if (!canChange || !canSlide) return
      this.calculateScore(e.changedTouches[0].pageX, true)
    },
    raterTouchend(e) {
      let { canChange } = this
      if (!canChange) return
      this.calculateScore(e.changedTouches[0].pageX, true)
    },
    calculateScore(pageX, needEmit) {
      let { size, fullScore } = this
      if (weex.config.env.platform === 'Web') {
        pageX = pageX * 2 / 750 * 1080 - this.offset_left
      } else if (weex.config.env.platform === 'iOS') {
        pageX = pageX - this.offset_left
      }
      let half_star_width = size === 'big' ? 43 : 18
      let half_star_score = fullScore / 10
      let star_num = (pageX / half_star_width).toFixed(0)
      let score_percent = star_num <= 0 ? 0 : star_num >= 10 ? 10 : star_num
      this.score = score_percent * half_star_score
      needEmit && this.$emit('fmRaterScoreChanged', { score: this.score })
    }
  },
  mounted() {
      if (weex.config.env.platform !== 'Android') {
        setTimeout(() => {
          dom.getComponentRect(this.$refs.rater, option => {
            this.offset_left = option.size.left
          })
        }, 50)
      }
  }
}
</script>
