<template>
  <div class="fm-special-rich-text">
    <div class="tag-div"
         :style="{top:top+'px'}">
      <fm-icon v-if="newList[0].type == 'icon' && newList[0].value"
                          :value="newList[0].value"
                          :iconStyle="newList[0].style"></fm-icon>
      <fm-tag v-if="newList[0].type=='tag'"
                          :tagType="newList[0].tagType"
                          :size="newList[0].size"
                          :value="newList[0].value"
                          :color="newList[0].color"
                          :fontColor="newList[0].fontColor"></fm-tag>
    </div>
    <fm-text :text-value="newList[1].value" :textStyle="newList[1].style" v-if="newList[1].value"></fm-text>
  </div>
</template>

<style scoped>
  .fm-special-rich-text {
    position: relative;
  }

  .tag-div {
    position: absolute;
    top: 0;
    left: 0;
    color: #A5A5A5;
    font-size: 36px;
    line-height: 48px;
  }
</style>

<script>
import Utils from '../fm-rich-text/utils';
import FmText from '../fm-text';
import FmIcon from '../fm-icon';
import FmTag from '../fm-tag';
export default {
  name: 'FmSpecialRichText',
  components: {
    FmText, FmIcon, FmTag
  },
  props: {
    configList: {
      type: [Array, String],
      default: () => ({})
    }
  },
  computed: {
    newList () {
      const { configList } = this;
      if (Utils.isNonEmptyArray(configList) && configList.length === 2) {
        let r1 = configList[0];
        let r2 = configList[1];
        const iconStyle = r1.style;
        const textStyle = r2.style;
        let style = {};
        let fontSize = 36;
        const tagWidth = iconStyle && iconStyle.width ? iconStyle.width : 36;

        if (textStyle && textStyle.fontSize) {
          fontSize = textStyle.fontSize;
          style = {
            fontSize: textStyle.fontSize,
            lineHeight: textStyle.fontSize * 1.4
          };
        }

        if (textStyle && textStyle.color) {
          style = {
            ...style,
            color: textStyle.color
          };
        }

        if (r1.type === 'tag' && iconStyle && iconStyle.width) {
          r1 = {
            ...r1,
            style: { ...iconStyle, width: null }
          };
        }
        const newValue = r2.value ? new Array(Math.ceil(tagWidth / fontSize) + 1).join('   ') + `  ${r2.value}` : '';
        r2 = {
          ...r2,
          style,
          value: newValue
        };
        return [r1, r2];
      } else {
        return [];
      }
    },
    top () {
      const { configList } = this;
      if (configList[0].type === 'tag') return 0;
      if (Utils.isNonEmptyArray(configList) && configList.length === 2) {
        const iconStyle = configList[0].style;
        const textStyle = configList[1].style;
        let fontSize = 36;
        const tagHeight = iconStyle && iconStyle.height ? iconStyle.height : 39;
        if (textStyle && textStyle.fontSize) {
          fontSize = textStyle.fontSize;
        }
        return Math.ceil((fontSize * 1.3 - tagHeight) / 2);
      } else {
        return 0;
      }
    }
  }
};
</script>
