<template>
    <div :class="tagClass">
        <div v-if="showSolid || showHollow"
            :class="['tag-item','tag-border',showHollow && 'tag-hollow']"
            :style="tagTextStyle">
          <text :class="textClass" ref='content' :style="textStyle"><slot></slot><template v-if="!$slots.default">{{ value }}</template></text>
        </div>
    </div>
</template>

<style scoped>
  .fm-tag {
    align-items: center;
	  flex-direction: row;
  }

  .tag-item {
    padding: 9;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .tag-border {
    border-bottom-left-radius: 4.5;
    border-bottom-right-radius: 4.5;
    border-top-left-radius: 4.5;
    border-top-right-radius: 4.5;
  }

  .tag-hollow {
    border-width: 3;
  }

  .tag-text {
    font-family: "Source Han Sans CN", Roboto, sans-serif;
    font-weight: bold;
  }

  .tag-font-small {
    font-size: 24;
  }

  .tag-font-big {
    font-size: 30;
  }

  .tag-margin-small {
    margin: 3;
  }

  .tag-margin-big {
    margin: 6;
  }
</style>

<script>
import Locale from '@flyme/weex-flymeui/lib/mixins/locale'
import { t } from '@flyme/weex-flymeui/lib/locale'

export default {
  mixins: [Locale],
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
      default() {
        return t('el.tag.tagName')
      }
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
  },
  created() {
    this.$slots.default && (this.value = this.$slots.default[0].text)
  }
}
</script>


