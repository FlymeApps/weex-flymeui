<template>
  <list ref="group">
    <slot></slot>
  </list>  
</template>

<style scoped>

</style>

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
        default: () => ({})
      }
    },
    mounted() {
      // console.log(this.$refs.group.$scopedSlots)
    }
  }
</script>


