<template>
    <div :class="tagClass">
        <div v-if="showSolid || showHollow"
            :class="['tag-item','tag-border',showHollow && 'tag-hollow']"
            :style="tagTextStyle">
        <text :class="textClass" ref='content' :style="textStyle">{{value}}</text>
        </div>
    </div>
</template>

<style lang="sass" scoped>
  @import "../style/mixin.scss";
  .fm-tag {
    align-items: center;
	  flex-direction: row;
  }

  .tag-item {
    padding: size(9);
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .tag-border {
    border-bottom-left-radius: size(4.5);
    border-bottom-right-radius: size(4.5);
    border-top-left-radius: size(4.5);
    border-top-right-radius: size(4.5);
  }

  .tag-hollow {
    border-width: size(3);
  }

  .tag-text {
    font-family: "Source Han Sans CN", Roboto, sans-serif;
    font-weight: bold;
  }

  .tag-font-small {
    font-size: size(24);
  }

  .tag-font-big {
    font-size: size(30);
  }

  .tag-margin-small {
    margin: size(3);
  }

  .tag-margin-big {
    margin: size(6);
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
        const { fontColor } = this;
        return { color: fontColor }
      },
      textClass() {
        let clz = ["tag-text"]
        const { size } = this;
        fontSize: size === 'small' ? clz.push("tag-font-small") : clz.push("tag-font-big")
        return clz
      },
      tagClass() {
        let clz = ["fm-tag"]
        const { size } = this;
        fontSize: size === 'small' ? clz.push("tag-margin-small") : clz.push("tag-margin-small")
        return clz
      }
    }
}
</script>


