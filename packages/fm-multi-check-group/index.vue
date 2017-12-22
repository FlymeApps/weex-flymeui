<template>
  <list ref="group">
    <slot></slot>
  </list>  
</template>

<script>
  import FmMultiCheckCell from '../fm-multi-check-cell'
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
      finish() {
        this.checking = false
      },
      active() {
        this.checking = true
      }
    },
    watch: {
      value(value) {
        this.$emit('fmMultiCheckGroupSelected', value)
      },
      checking(value) {
        value && this.$emit('fmMultiCheckGroupChecking', value)
      }
    }
  }
</script>


