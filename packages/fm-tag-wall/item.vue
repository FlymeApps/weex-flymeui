<!-- Created by Yanjiie on 2018/3/2. -->
<template>
  <div class="wall-item" :style="wrapStyle" @click="onClick">
    <text class="text-title" :style="titleStyle">{{ title }}</text>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    height: {
      type: Number,
      default: 72
    },
    padding: {
      type: Number,
      default: 30
    },
    borderRadius: {
      type: Number,
      default: 6
    },
    borderWidth: {
      type: Number,
      default: 2
    },
    fontSize: {
      type: Number,
      default: 42
    },
    originBorderColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0.08)'
    },
    originTitleColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0.6)'
    },
    originBackgroundColor: {
      type: String,
      default: '#FFFFFF'
    },
    color: {
      type: String,
      default: ''
    },
    backgroundColor: {
      type: String,
      default: ''
    },
    borderColor: {
      type: String,
      default: ''
    },
    lineSpacing: {
      type: Number,
      default: 24
    },
    itemSpacing: {
      type: Number,
      default: 24
    }
  },
  computed: {
    wrapStyle () {
      const { borderRadius, height, padding, borderWidth, originBorderColor, originBackgroundColor, backgroundColor, borderColor, color, itemSpacing, lineSpacing } = this;
      return {
        justifyContent: 'center',
        borderRadius,
        height,
        paddingLeft: padding,
        paddingRight: padding,
        borderWidth,
        backgroundColor: backgroundColor || originBackgroundColor,
        borderColor: borderColor || color || originBorderColor,
        marginRight: itemSpacing,
        marginBottom: lineSpacing
      };
    },
    titleStyle () {
      const { fontSize, color, originTitleColor } = this;
      return {
        fontSize,
        color: color || originTitleColor
      };
    }
  },
  methods: {
    onClick () {
      this.$emit('select', this.index);
    }
  }
};
</script>
