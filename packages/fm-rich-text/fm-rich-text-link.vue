<template>
  <div @click="onLinkClick">
    <fm-text
      :text-value="linkValue"
      :has-text-margin="hasTextMargin"
      :text-style="linkStyle?linkStyle:defObj"></fm-text>
  </div>
</template>

<script>
  const Utils = require('./utils');
  import FmText from '../fm-text'
  module.exports = {
    components: { FmText },
    props: {
      linkValue: {
        type: [String, Number],
        default: ''
      },
      hasTextMargin: {
        type: Boolean,
        default: true
      },
      linkHref: {
        type: String,
        default: ''
      },
      linkStyle: {
        type: Object,
        default: () => ({})
      }
    },
    data: () => ({
      defObj: {}
    }),
    methods: {
      onLinkClick (e) {
        const self = this;
        // Utils.goToH5Page(self.linkHref);
        self.$emit('fmRichTextLinkClick', { element: e, href: self.linkHref });
      }
    }
  };
</script>
