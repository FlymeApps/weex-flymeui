<template>
	<Fmactiveview v-if="!isWeb" :act="act"></Fmactiveview>
</template>
<script>
export default {
  name: 'FmActionView',
  props: {
    act: String
  }
};
</script>


