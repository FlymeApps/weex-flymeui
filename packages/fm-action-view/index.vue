<template>
	<Fmactiveview v-if="!isWeb" :act="act"></Fmactiveview>
</template>
<script>
export default {
  props: {
		act: String
	}
}
</script>


