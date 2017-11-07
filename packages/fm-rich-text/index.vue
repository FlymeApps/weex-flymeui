<template>
  <div>
    <div class="fm-rich-text" v-if="isNotEmptyArray">
      <div v-for="v in configList">
        <fm-text v-if="v.type=='text' && v.text"
                            :text-value="v.text"
                            :text-style="v.style"
                            :has-text-margin="hasTextMargin"></fm-text>

        <fm-rich-text-link v-if="v.type=='link' && v.href && v.text"
                            :link-value="v.text"
                            :link-style="v.style"
                            :link-href="v.href"
                            :has-text-margin="hasTextMargin"
                            @fmRichTextLinkClick="linkBeClick"></fm-rich-text-link>

        <fm-icon v-if="v.type=='icon'"
                            :color="v.color"
                            :value="v.value"
                            :iconStyle="v.style"></fm-icon>

        <fm-tag v-if="v.type=='tag'"
                           :tagType="v.tagType"
                           :size="v.size"
                           :value="v.value"
                           :color="v.color"
                           :fontColor="v.fontColor"></fm-tag>
      </div>
    </div>
    <fm-text :text-value="configList" v-if="isString"></fm-text>
  </div>
</template>

<style scoped>
  .fm-rich-text {
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
    flex-shrink: 1;
  }

  .default-text {
    color: #A5A5A5;
    font-size: 12px;
    line-height: 16px;
  }
</style>

<script>
  const Utils = require('./utils');
  import FmText from '../fm-text'
  import FmIcon from '../fm-icon'
  import FmTag from '../fm-tag'
  import FmRichTextLink from './fm-rich-text-link.vue'
  export default {
    components: {
      FmText, FmIcon, FmTag, FmRichTextLink
    },
    props: {
      configList: {
        type: [Array, String],
        default: function () {
          return []
        }
      },
      hasTextMargin: {
        type: Boolean,
        default: true
      }
    },
    data: () => ({}),
    computed: {
      isNotEmptyArray () {
        return Utils.isNonEmptyArray(this.configList);
      },
      isString () {
        return Utils.isString(this.configList);
      }
    },
    methods: {
        linkBeClick(obj) {
            this.$emit('linkBeClick', obj)
        }
    }
  };
</script>
