<template>
  <div class="dialog-btn">
			<text :class="btnClz" :style="btnStyle" @click="click()">{{ text }}</text>
	</div>
</template>

<style scoped>
  .dialog-btn {
    flex: 1;
		padding-left: 48px;
		padding-right: 48px;
  }

	.btnText {
    font-family: sans-serif-medium;
    font-weight: 500;
    font-size: 48px;
    color: #198ded;
    text-align: center;
	}

  .dialog-btnText {
    padding: 36px;
  }

	.actionSheet-btnText {
		line-height: 192px;
		border-bottom-style: solid;
		border-bottom-width: 1px;
		border-bottom-color: #E6E6E6;
	}
</style>

<script>
export default {
	props: {
		text: String,
		type: String,
		color: String,
		msg: [String, Number, Array, Object],
		scene: {
			type: String,
			defalut: 'dialog'
		}
	},
	computed: {
		btnClz() {
			let clz = ['btnText']
			if (this.scene === 'dialog') {
				clz.push('dialog-btnText')
			} else if (this.scene === 'actionSheet') {
				clz.push('actionSheet-btnText')
			}
			return clz
		},
		btnStyle() {
			const { color } = this
			if (color) {
				return {
					color: color
				}
			}
		}
	},
	methods: {
		click() {
			const { text, msg, type } = this
			this.$emit('click', { text: text, type: type, msg: msg })
		}
	}
}
</script>