<!-- CopyRight (C) 2018-2022 FlymeApps Group Holding Limited. -->
<!-- Created and Updated by Yanjiie on 2018/04/12. -->
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
