<template>
    <div class="fm-tag" :style="{margin: size === 'small' ? '2.34px' : '4.68px'}">
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
    padding: 7px;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .tag-border {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
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
      type: {
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
        const { type, value } = this;
        return type === 'solid' && value !== '';
      },
      showHollow () {
        const { type, value } = this;
        return type === 'hollow' && value !== '';
      },
      tagTextStyle () {
        const { color, showSolid } = this;
        return showSolid ? { backgroundColor: color } : { borderColor: color }
      },
      textStyle() {
        const { fontColor, size } = this;
        return {color: fontColor, fontSize: size === 'small' ? '19px' : '21px'}
      }
    }
}
</script>


