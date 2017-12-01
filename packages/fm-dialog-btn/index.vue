<template>
  <div class="dialog-btn">
			<text class="dialog-btnText" @click="click()">{{ text }}</text>
	</div>
</template>

<style scoped>
  .dialog-btn {
    flex: 1;
  }

  .dialog-btnText {
    padding: 36px;
    font-size: 48px;
    color: #198ded;
    text-align: center;
    font-family: sans-serif-medium;
    font-weight: 500;
  }
</style>

<script>
export default {
	props: {
		text: String,
		type: String,
		msg: [String, Number, Array, Object]
	},
	methods: {
		click() {
			const { text, msg, type } = this
			this.$emit('click', { text: text, type: type, msg: msg })
		}
	}
}
</script>