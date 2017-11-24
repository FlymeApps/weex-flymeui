<template>
<div class="fm-btn-wrap">
	<text ref="text" class="fm-btn" :class="btnClz" :style="btnStyle"
		@click="btnClick">{{text}}</text>
</div>
</template>

<style lang="sass" scoped>
@import "../style/mixin.scss";
.fm-btn-wrap {
	height: size(72);
	align-items: center;
	flex-direction: row;
	max-width: size(300);
}
.fm-btn {
	height: size(72);
	padding-left: size(36);
	padding-right: size(36);
	line-height: size(72);
	border-radius: size(72);
	font-size: size(42);
	font-weight: 700;
	text-align: center;
	opacity: 0;
	min-width: size(144);
	max-width: size(300);
}
.fm-btn-max-padding {
	padding-left: size(24);
	padding-right: size(24);
}
</style>

<script>

const small_size = 48      //48dp
const large_size = 80 //80dp
const max_size = 100   //100dp
const dis_color = '#cccccc'
const transparent = 'transparent'
const dom = weex.requireModule('dom')

export default {
	data() {
		return {
			max: false,
			show: false
		}
	},

	props: {
		text: String,
		bgColor: {
			type: String,
			default: '#198ded'
		},
		color: {
			type: String,
			default: '#ffffff'
		},
		disabled: Boolean
	},

	computed: {
		btnClz() {
			let clz = []

			if (this.max) {
				clz.push('fm-btn-max-padding')
			}

			return clz
		},
		btnStyle() {
			let sty = {}

			if (this.bgColor != transparent) {
				sty.backgroundColor = this.bgColor
			}
			if (this.color) {
				sty.color = this.color
				if (this.bgColor == transparent) {
					sty.borderColor = this.color
					sty.borderWidth = 1.44,
					sty.borderStyle = 'solid',
					sty.lineHeight = 21.121
				}
			}
			if (this.disabled) {
				sty.backgroundColor = dis_color
			}
			if (this.show) {
				sty.opacity = 1;
			}

			return sty
		}
	},

	methods: {
		btnClick(evt) {
			if (!this.disabled) {
				this.$emit('click', evt)
			}
		}
	},

	mounted() {
		dom.getComponentRect(this.$refs.text, option => {
			console.log('getComponentRect:', option)
		})
		// let w = this.text.length * 14 + 50

		// if (w < small_size) {
		// 	this.small = true
		// } else if (w > large_size) {
		// 	this.large = true
		// }

		// if (w >= max_size) {
		// 	this.max = true
		// }

		// this.show = true
	}
}
</script>