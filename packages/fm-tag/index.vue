<template>
    <div class="fm-tag" :style="{margin: size === 'small' ? '1px' : '1.5px'}">
        <div v-if="showSolid || showHollow"
            :class="['tag-item','tag-border',showHollow && 'tag-hollow']"
            :style="tagTextStyle">
        <text class="tag-text" ref='content' :style="textStyle">{{value}}</text>
        </div>
    </div>
</template>

<style scoped>

  .fm-tag {
    align-items: flex-start;
  }

  .tag-item {
    padding: 3px;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .tag-border {
    border-bottom-left-radius: 1.5px;
    border-bottom-right-radius: 1.5px;
    border-top-left-radius: 1.5px;
    border-top-right-radius: 1.5px;
  }

  .tag-hollow {
    border-width: 1px;
  }

  .tag-text {
    font-family: "Source Han Sans CN", Roboto, sans-serif;
    font-weight: bold;
  }
</style>

<script>
export default {
    props: {
      tagType: {
        type: String,
        default: 'solid'
      },
      size: {
        type: String,
        default: 'small'
      },
      value: {
        type: [String, Number],
        default: '标签'
      },
      color: {
        type: String,
        default: '#198ded'
      },
      fontColor: {
        type: String,
        default: '#fff'
      }
    },
    computed: {
      showSolid () {
        const { tagType, value } = this;
        return tagType === 'solid' && value !== '';
      },
      showHollow () {
        const { tagType, value } = this;
        return tagType === 'hollow' && value !== '';
      },
      tagTextStyle () {
        const { color, showSolid } = this;
        return showSolid ? { backgroundColor: color } : { borderColor: color }
      },
      textStyle() {
        const { fontColor, size } = this;
        return {color: fontColor, fontSize: size === 'small' ? '8px' : '10px'}
      }
    }
}
</script>


