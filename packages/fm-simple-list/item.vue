<!-- Created by Yanjiie on 2018/3/5. -->
<template>
  <div class="list-item" @click="onClick">
    <div class="item-wrap" :style="wrapStyle">
      <fm-icon class="icon icon-left" v-if="leftIcon || originLeftIcon"
                                      :name="leftIcon || originLeftIcon"
                                      :color='leftColor || originIconColor'
                                      @fmIconClicked="onLeftClick" />
      <text class="text-title" :style="titleStyle">{{ title }}</text>
      <fm-icon class="icon" :name="rightIcon || originRightIcon"
                            :color='rightColor || originIconColor'
                            @fmIconClicked="onRightClick" />
    </div>
  </div>
</template>

<style scoped>
  .list-item {
    padding: 0 48px;
  }

  .list-item:active {
    background-color: rgba(0, 0, 0, 0.05);
  }

  .item-wrap {
    height: 144px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .text-title {
    flex: 1;
    text-overflow: ellipsis;
    font-size: 42px;
    margin-right: 26px;
    lines: 1;
  }

  .icon {
    margin: 12px;
    font-size: 48px;
    height: 48px;
    font-weight: 700;
  }

  .icon-left {
    margin-right: 38px;
  }
</style>

<script>
import FmIcon from '../fm-icon';
export default {
  components: { FmIcon },
  props: {
    index: {
      type: Number,
      default: -1
    },
    title: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    fontSize: {
      type: Number,
      default: 42
    },
    borderWidth: {
      type: Number,
      default: 2
    },
    borderColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0.1)'
    },
    leftIcon: {
      type: String,
      default: ''
    },
    leftColor: {
      type: String,
      default: ''
    },
    rightIcon: {
      type: String,
      default: ''
    },
    rightColor: {
      type: String,
      default: ''
    },
    originTitleColor: {
      type: String,
      default: '#000000'
    },
    originLeftIcon: {
      type: String,
      default: 'shizhong'
    },
    originRightIcon: {
      type: String,
      default: 'guanbi'
    },
    originIconColor: {
      type: String,
      default: '#999999'
    }
  },
  computed: {
    wrapStyle () {
      const { borderWidth, borderColor } = this;
      return {
        borderBottomWidth: borderWidth + 'px',
        borderColor
      };
    },
    titleStyle () {
      const { color, originTitleColor, fontSize } = this;
      return {
        fontSize: fontSize + 'px',
        color: color || originTitleColor
      };
    }
  },
  methods: {
    onClick () {
      this.$emit('select', this.index);
    },
    onLeftClick () {
      this.$emit('leftClicked', this.index);
    },
    onRightClick () {
      this.$emit('rightClicked', this.index);
    }
  }
};
</script>
