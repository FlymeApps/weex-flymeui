<template>
	<div class="fm-check-list-group">
		<slot></slot>
	</div>
</template>

<script>
export default {
  componentName: 'FmCheckListGroup',
  props: {
    value: {
      type: Array,
      default: () => ([])
    },
    disabled: Boolean,
    min: Number,
    max: Number,
    textColor: String
  },
  watch: {
    value (value) {
      this.$emit('fmCheckListGroupChecked', value);
    }
  }
};
</script>