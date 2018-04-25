<!-- CopyRight (C) 2018-2022 FlymeApps Group Holding Limited. -->
<!-- Created and Update by Yanjiie on 2018/04/25. -->
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
import FmIcon from '../fm-icon';
import FmImage from '../fm-image';
import STARS from './type';

const dom = weex.requireModule('dom');

export default {
  name: 'FmRater',
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
    starImg: {
      type: [Array, String],
      default: ''
    },
    bgImg: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    offset_left: 0,
    starCount: 5
  }),
  computed: {
    starClz () {
      const clz = ['star'];
      this.size === 'big' ? clz.push('star_big') : clz.push('star_small');
      return clz;
    },
    wraperWidth () {
      const { score, fullScore, size } = this;
      const half_star_width = size === 'big' ? 43 : 18;
      const percent = score / fullScore;
      let length = score <= 0 ? 0 : percent >= 1 ? 10 : percent.toFixed(1) * 10;
      length = isNaN(length) ? 0 : length;
      return !length ? {
        width: 1,
        opacity: 0
      } : {
        width: length * half_star_width,
        opacity: 1
      };
    },
    getImgs () {
      const { theme, starImg } = this;
      let imgItem;
      if (starImg) {
        if (Array.isArray(starImg)) { return starImg; }
        imgItem = starImg;
      } else if (theme === 'normal') {
        return STARS.NORMAL;
      } else if (theme === 'special') {
        imgItem = STARS.SPECIAL;
      } else if (theme === 'dark') {
        imgItem = STARS.DARK;
      }
      const arr = [];
      for (let i = 0; i < 5; i++) {
        arr.push(imgItem);
      }
      return arr;
    },
    getBgImgs () {
      const { theme, bgImg } = this;
      if (bgImg) { return bgImg; }
      if (theme === 'normal' || theme === 'special') {
        return STARS.BG_NORMAL;
      } else if (theme === 'dark') {
        return STARS.BG_DARK;
      }
    }
  },
  methods: {
    raterTouchStart (e) {
      const { canChange, canSlide } = this;
      if (!canChange || !canSlide) return;
      this.calculateScore(e.changedTouches[0].pageX, true);
    },
    raterTouchmove (e) {
      const { canChange, canSlide } = this;
      if (!canChange || !canSlide) return;
      this.calculateScore(e.changedTouches[0].pageX, true);
    },
    raterTouchend (e) {
      const { canChange } = this;
      if (!canChange) return;
      this.calculateScore(e.changedTouches[0].pageX, true);
    },
    calculateScore (pageX, needEmit) {
      const { size, fullScore } = this;
      if (weex.config.env.platform === 'Web') {
        pageX = pageX * 2 / 750 * 1080 - this.offset_left;
      } else if (weex.config.env.platform === 'iOS') {
        pageX = pageX - this.offset_left;
      }
      const half_star_width = size === 'big' ? 43 : 18;
      const half_star_score = fullScore / 10;
      const star_num = (pageX / half_star_width).toFixed(0);
      const score_percent = star_num <= 0 ? 0 : star_num >= 10 ? 10 : star_num;
      this.score = score_percent * half_star_score;
      needEmit && this.$emit('fmRaterScoreChanged', { score: this.score });
    }
  },
  mounted () {
    if (weex.config.env.platform !== 'Android') {
      setTimeout(() => {
        dom.getComponentRect(this.$refs.rater, option => {
          this.offset_left = option.size.left;
        });
      }, 50);
    }
  }
};
</script>
