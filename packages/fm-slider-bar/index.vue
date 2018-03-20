<template>
  <div class="slider-wrap">
    <div v-if="!!levelTexts && this.per" class="level-text-wrap" :style="textStyle">
      <text class="level-text" v-for="(text, idx) in levelTexts" @click="levelClick(idx)" :key="idx">{{text}}</text>
    </div>
    <text v-else-if="showProgress" class="num" :style="progressStyle">{{progressText}}</text>
    <div class="all" ref="bg"></div>
    <div class="selected" :style="selStyle"></div>
    <div class="dot-wrap" :style="dotStyle" @touchmove="move" @touchstart="start" @touchend="end">
      <div class="dot"></div>
    </div>
  </div>
</template>

<style scoped>
  .slider-wrap {
    padding-right: 22.5px;
    padding-left: 22.5px;
  }
  .level-text-wrap {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: -21.6px;
  }
  .level-text {
    flex: 1;
    font-size: 42px;
    padding-top: 7.2px;
    padding-bottom: 7.2px;
    text-align: center;
  }
  .all {
    height: 9px;
    margin-top: 43.2px;
    background-color: #e6e6e6;
  }
  .selected {
    margin-top: -9px;
    height: 9px;
    background-color: #198ded;
  }
  .dot-wrap {
    height: 86.4px;
    width: 116.4px;
    margin-top: -47.52px;
    margin-left: -57.6px;
    align-items: center;
    justify-content: center;
  }
  .dot {
    height: 45px;
    width: 45px;
    background-color: #198ded;
    border-radius: 43.2px;
  }
  .num {
    width: 78px;
    height: 78px;
    margin-left: -39px;
    border-radius: 79.2px;
    background-color: #198ded;
    color: #ffffff;
    font-size: 42px;
    font-weight: 700;
    text-align: center;
    line-height: 78px;
  }
</style>

<script>
const dom = weex.requireModule('dom');

export default {
  name: 'FmSlider',
  data () {
    return {
      transX: 0,
      startX: 0,
      max: 0,
      per: 0,
      comparePer: 0,
      progressOpacity: 0,
      progressText: null,
      levelAlias: 0
    };
  },

  props: {
    level: [String, Number],
    levelTexts: Array,
    showProgress: Boolean,
    vertical: Boolean,
    value: {
      type: [String, Number],
      default: 0
    }
  },

  computed: {
    textStyle () {
      return {
        width: `${this.max + this.per}px`,
        'margin-left': `${-this.per / 2}px`
      };
    },
    dotStyle () {
      return {
        transform: `translateX(${this.transX}px)`
      };
    },
    selStyle () {
      return {
        width: `${this.transX}px`
      };
    },
    progressStyle () {
      return {
        transform: `translateX(${this.transX}px)`,
        opacity: this.progressOpacity
      };
    }
  },

  created () {
    this.screen = 'screenY';// this.vertical ? 'screenY' : 'screenX'
  },

  mounted () {
    setTimeout(() => {
      dom.getComponentRect(this.$refs.bg, opt => {
        this.max = opt.size.width;

        if (this.levelTexts) {
          this.levelAlias = Math.max(this.levelTexts.length - 1, 0);
        } else {
          this.levelAlias = this.level;
        }

        if (this.levelAlias && this.levelAlias > 0) {
          this.per = this.max / this.levelAlias;
          this.comparePer = this.per / 2;
        }

        this.transX = this.per ? (this.per * this.value) : (this.max * this.value / 100);
      });
    }, 100);
  },

  methods: {
    levelClick (idx) {
      this.transX = Math.min(this.per * idx, this.max);
      this.end();
    },
    start (event) {
      this.startX = event.changedTouches[0].screenX;
      this.progressOpacity = 1;
    },
    move (event) {
      const x = +event.changedTouches[0].screenX;
      const sub = x - this.startX;
      let target;

      if (this.per) {
        if (Math.abs(sub) >= this.comparePer) {
          target = this.transX + (sub > 0 ? this.per : -this.per);
          this.startX = target;
        }
      } else {
        target = this.transX + sub;
        this.startX = x;
      }

      if (target !== undefined) {
        this.transX = Math.min(Math.max(target, 0), this.max);
      }

      this.progressText = this.per
        ? Math.round(this.transX / this.per)
        : Math.floor(this.transX / this.max * 100);
    },
    end (event) {
      this.progressOpacity = 0;
      this.$emit('selected', {
        rate: this.transX / this.max,
        level: this.per ? Math.round(this.transX / this.per) : 0
      });
    }
  }
};
</script>
