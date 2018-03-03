<template>
  <div :class="tagClass">
    <div v-if="showSolid || showHollow"
        :class="['tag-item', 'tag-border', size === 'huge' && 'tag-huge', showHollow && 'tag-hollow']"
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
    padding: 9px;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .tag-border {
    border-radius: 4.5px;
  }

  .tag-huge {
    border-radius: 100px;
    height: 72px;
    padding: 12px 42px;
  }

  .tag-hollow {
    border-width: 3px;
  }

  .tag-text {
    font-family: "Source Han Sans CN", Roboto, sans-serif;
    font-weight: bold;
  }

  .tag-font-small {
    font-size: 24px;
  }

  .tag-font-big {
    font-size: 30px;
  }

  .tag-font-huge {
    font-size: 42px;
    font-family: sans-serif-medium;
    font-weight: 500;
  }

  .tag-margin-small {
    margin-right: 6px;
    margin-bottom: 6px;
  }

  .tag-margin-big {
    margin-right: 12px;
    margin-bottom: 12px;
  }

  .tag-margin-huge {
    margin-right: 36px;
    margin-bottom: 36px;
  }
</style>

<script>
import Locale from 'weex-flymeui/lib/mixins/locale';
import { t } from 'weex-flymeui/lib/locale';

export default {
  name: 'FmTag',
  mixins: [Locale],
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
      default () {
        return t('el.tag.tagName');
      }
    },
    color: {
      type: String,
      default: '#198DED'
    },
    fontColor: {
      type: String,
      default: '#FFFFFF'
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
      return showSolid ? { backgroundColor: color } : { borderColor: color };
    },
    textStyle () {
      const { fontColor } = this;
      return { color: fontColor };
    },
    textClass () {
      const clz = ['tag-text'];
      const { size } = this;
      clz.push(`tag-font-${size}`);
      return clz;
    },
    tagClass () {
      const clz = ['fm-tag'];
      const { size } = this;
      clz.push(`tag-margin-${size}`);
      return clz;
    }
  },
  created () {
    this.$slots.default && (this.value = this.$slots.default[0].text);
  }
};
</script>
