<!-- CopyRight (C) 2018-2022 FlymeApps Group Holding Limited. -->
<!-- Created and Update by Yanjiie on 2018/04/12. [!] Just a beta version! -->
<template>
  <div class="wrapper" @click="fold">
    <div class="container" ref="plane" :style="planeStyle">
      <text :class="textClz" ref="text" :style="textStyle">{{ getText }}</text>
      <text class="more" v-if="foldable && folded" ref="more" :style="moreStyle">{{ tipValue }}</text>
    </div>
  </div>
</template>

<style scoped>
  .container {
    position: relative;
  }
  .text {
    font-family: "Source Han Sans CN", Roboto, sans-serif;
    color: #999999;
  }
  .text_small {
    font-size: 36px;
    line-height: 42px;
  }
  .text_large {
    font-family: sans-serif-medium;
    font-weight: 500;
    font-size: 48px;
    font-weight: 500;
    line-height: 72px;
  }
  .text_huge {
    font-family: sans-serif-medium;
    font-weight: 500;
    font-size: 54px;
    line-height: 78px;
  }
  .more {
    position: absolute;
    right: 18px;
    bottom: 0;
    font-family: sans-serif-medium;
    font-weight: 500;
  }
  .test {
    flex-direction: row;
  }
</style>

<script>
import Locale from 'weex-flymeui/lib/mixins/locale';
import { t } from 'weex-flymeui/lib/locale';

export default {
  name: 'FmFoldableText',
  mixins: [Locale],
  data () {
    return {
      expandHeight: '',
      unexpandHeight: '',
      animationHeight: '',
      foldText: '',
      foldable: true
    };
  },
  props: {
    width: {
      type: Number,
      default: 1020
    },
    text: {
      type: String,
      default: ''
    },
    lines: {
      type: Number,
      default: 2
    },
    folded: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: 'small'
    },
    textStyle: Object,
    tipStyle: Object,
    tipValue: {
      type: String,
      default () {
        return t('el.foldabletext.more');
      }
    }
  },
  mounted () {
    if (this.foldText === '') {
      const { textStyle } = this;
      const fontSize = (textStyle && textStyle.fontSize) ? textStyle.fontSize : this.large ? 48 : this.huge ? 54 : 36;
      // 计算折叠后的文本
      const size1 = fontSize + 36 * 0.04; // 汉字
      const size2 = fontSize * 0.56; // 英文
      const size3 = fontSize * 0.556; // 数字
      const size4 = fontSize * 0.80; // 全角
      const size5 = fontSize * 0.2; // 半角
      let tSize = 0;
      let tmpStr = '';
      const hideWidth = this.width * this.lines + fontSize; // 不显示“更多”情况下所能容纳最大的字体宽度
      const maxWith = this.width * this.lines - size1 * this.tipValue.length; // 显示“更多”情况下所能容纳最大的字体宽度
      for (const c of this.text) {
        if (/^[\u4e00-\u9fa5]/.test(c)) {
          // 汉字
          tSize += size1;
        } else if (/^[a-zA-Z]/.test(c)) {
          // 英文
          tSize += size2;
        } else if (/^[0-9]/.test(c)) {
          // 数字
          tSize += size3;
        } else if (/^[·《》，。？、：；“”‘’——【】]/.test(c)) {
          // 全角
          tSize += size4;
        } else if (/^[`~!@#\$%\^&\*\(\)_\-\+=\{\}\[\]|\\:;"'<>,.\?\/\s]/.test(c)) {
          // 半角
          tSize += size5;
        } else {
          // 其他
          tSize += size1;
        }
        if (tSize >= maxWith) {
          if (tSize >= hideWidth) {
            tmpStr += '..';
            break;
          }
        } else {
          tmpStr += c;
        }
      }
      // 文字不超过范围 不折叠
      (tSize < hideWidth) && (this.foldable = false) && (this.folded = false);
      this.foldText = tmpStr;
    }
  },
  computed: {
    getText () {
      return this.folded && this.foldable ? this.foldText : this.text;
    },
    planeStyle () {
      return {
        width: this.width + 'px'
      };
    },
    moreStyle () {
      return {
        fontSize: `${this.size === 'large' ? 48 : this.size === 'huge' ? 54 : 36}px`,
        lineHeight: `${this.size === 'large' ? 72 : this.size === 'huge' ? 78 : 42}px`,
        color: '#198ded',
        fontWeight: '600',
        ...this.tipStyle
      };
    },
    textClz () {
      const clz = ['text', 'text_small'];
      if (this.size === 'large') {
        clz.push('text_large');
      } else if (this.size === 'huge') {
        clz.push('text_huge');
      }
      return clz;
    }
  },
  methods: {
    fold () {
      this.foldable && (this.folded = !this.folded);
    }
  }
};
</script>
