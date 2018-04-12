<!-- CopyRight (C) 2018-2022 FlymeApps Group Holding Limited. -->
<!-- Created and Update by Yanjiie on 2018/04/12. -->
<template>
  <list ref="group">
    <slot></slot>
  </list>
</template>

<script>
import FmMultiCheckCell from '../fm-multi-check-cell';
export default {
  componentName: 'FmMultiCheckGroup',
  components: { FmMultiCheckCell },
  props: {
    checking: {
      type: Boolean,
      default: false
    },
    value: {
      type: Object,
      default: () => []
    }
  },
  methods: {
    finish () {
      this.checking = false;
    },
    active () {
      this.checking = true;
    }
  },
  watch: {
    value (value) {
      this.$emit('fmMultiCheckGroupSelected', value);
    },
    checking (value) {
      this.$emit('fmMultiCheckGroupStateChange', value);
    }
  }
};
</script>


