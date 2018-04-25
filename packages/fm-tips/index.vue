<!-- CopyRight (C) 2018-2022 FlymeApps Group Holding Limited. -->
<!-- Created and Update by Yanjiie on 2018/04/12. -->
<template>
  <div v-if="show" class="tip-wrap" :style="wrapStyle">
    <div class="content-wrap" :style="background">
      <slot></slot>
      <text class="content">{{message}}</text>
      <text class="split"></text>
      <fm-icon class="close" @fmIconClicked="close" name="guanbi" :icon-style="54" />
    </div>
    <text class="arrow" :style="arrowStyle"></text>
  </div>
</template>

<style scoped>
  .tip-wrap {
    flex-direction: row;
    height: 120px;
    padding-top: 21.6px;
  }
  .arrow {
    position: absolute;
    top: 10.8px;
    width: 21.6px;
    height: 21.6px;
    transform: rotate(45deg);
  }
  .content-wrap {
    flex-direction: row;
    align-items: center;
    padding-top: 27px;
    padding-bottom: 27px;
    padding-left: 30px;
    border-radius: 6px;
  }
  .content {
    height: 51px;
    max-width: 678px;
    font-size: 42px;
    color: #ffffff;
  }
  .split {
    width: 3px;
    height: 42px;
    margin-left: 27px;
    background-color: #ffffff;
    opacity: 0.4;
  }
  .close {
    color: #ffffff;
    margin-left: 30px;
    margin-right: 30px;
  }
</style>

<script>
import FmIcon from '../fm-icon';
export default {
  name: 'FmTips',
  data () {
    return {
      show: true
    };
  },
  components: { FmIcon },
  computed: {
    background () {
      return {
        backgroundColor: this.bgColor
      };
    },
    wrapStyle () {
      return {
        'justify-content': this.position === 'right' ? 'flex-end' : 'flex-start'
      };
    },
    arrowStyle () {
      const sty = {
        backgroundColor: this.bgColor
      };
      if (this.right) {
        sty.right = '18px';
      } else {
        sty.left = '18px';
      }

      return sty;
    }
  },

  props: {
    message: String,
    bgColor: {
      type: String,
      default: '#198ded'
    },
    position: {
      type: String,
      default: 'left'
    }
  },

  methods: {
    close () {
      this.show = false;
      this.$emit('close');
    }
  }
};
</script>
