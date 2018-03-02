<template>
  <div @click="onLinkClick">
    <fm-text
      :text-value="linkValue"
      :has-text-margin="hasTextMargin"
      :text-style="linkStyle?linkStyle:defObj"></fm-text>
  </div>
</template>

<script>
import FmText from '../fm-text';
export default {
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
      self.$emit('fmRichTextLinkClick', { event: e, href: self.linkHref });
    }
  }
};
</script>
