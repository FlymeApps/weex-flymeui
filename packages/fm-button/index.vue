<template>
  <div class="fm-btn-wrap" :style="btnStyle" @click="btnClick">
    <text ref="text" class="fm-btn" :class="btnClz" :style="textStyle">{{text}}</text>
  </div>
</template>

<style scoped>
  .fm-btn-wrap {
    height: 72;
    align-items: center;
    flex-direction: row;
    border-radius: 72;
  }
  .fm-btn {
    padding-left: 36;
    padding-right: 36;
    line-height: 72;
    font-size: 36;
    font-weight: 700;
    text-align: center;
    min-width: 144;
    max-width: 300;
    font-family: sans-serif-medium;
    font-weight: 500;
  }
  .fm-btn-max-padding {
    padding-left: 24;
    padding-right: 24;
  }
  .fm-btn-freeSize {
    max-width: 1080;
  }
  .fm-btn-show {

  }
  .fm-btn-hollow {
    border-width: 4;
    line-height: 64;
    border-style: solid;
  }
</style>

<script>
const dis_color = '#cccccc';
const transparent = 'transparent';
const dom = weex.requireModule('dom');

export default {
  name: 'FmButton',
  data () {
    return {
      max: false
    };
  },
  props: {
    text: String,
    bgColor: {
      type: String,
      default: '#198ded'
    },
    color: {
      type: String,
      default: '#ffffff'
    },
    disabled: Boolean,
    freeSize: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    btnClz () {
      const clz = [];
      if (this.max) {
        clz.push('fm-btn-max-padding');
      }
      if (this.bgColor === transparent) {
        clz.push('fm-btn-hollow');
      }
      if (this.freeSize) {
        clz.push('fm-btn-freeSize');
      }
      return clz;
    },
    btnStyle () {
      const sty = {};
      if (this.bgColor !== transparent) {
        sty.backgroundColor = this.bgColor;
      }
      if (this.disabled) {
        sty.backgroundColor = dis_color;
      }
      return sty;
    },
    textStyle () {
      const sty = {};
      if (this.color) {
        sty.color = this.color;
        if (this.bgColor === transparent) {
          sty.borderColor = this.color;
        }
      }
      return sty;
    }
  },
  methods: {
    btnClick (evt) {
      if (!this.disabled) {
        this.$emit('buttonClicked', evt);
      }
    }
  },
  mounted () {
    setTimeout(() => {
      dom.getComponentRect(this.$refs.text, option => {
        if (option.size.width >= 240) {
          this.max = true;
        }
      });
    }, 50);
  }
};
</script>
