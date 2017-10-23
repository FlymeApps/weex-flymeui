<template>
<div class="fm-btn-wrap">
	<text ref="text" class="fm-btn" :class="btnClz" :style="btnStyle"
		@click="btnClick">{{text}}</text>
</div>
</template>

<style scoped>
.fm-btn-wrap {
	height: 50px;
	align-items: center;
	flex-direction: row;
	max-width: 208.3333px;
}
.fm-btn {
	height: 50px;
	padding-left: 25px;
	padding-right: 25px;
	line-height: 50px;
	border-radius: 50px;
	font-size: 29.1667px;
	font-weight: 700;
	text-align: center;
	opacity: 0;
}
.fm-btn-small {
	width: 100px;
}
.fm-btn-large {
	padding-left: 16.6667px;
	padding-right: 16.6667px;
}
.fm-btn-max {
	width: 208.3333px;
}
</style>

<script>

const small_size = 100      //48dp
const large_size = 166.6667 //80dp
const max_size = 208.3333   //100dp
const dis_color = '#cccccc'
const transparent = 'transparent'

export default {
	data() {
		return {
			large: false,
			small: false,
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

			if (this.large) {
				clz.push('fm-btn-large')
			}
			if (this.small) {
				clz.push('fm-btn-small')
			}
			if (this.max) {
				clz.push('fm-btn-max')
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
					sty.borderWidth = '3px'
					sty.borderStyle = 'solid'
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
		let w = this.text.length * 29.1667 + 50

		if (w < small_size) {
			this.small = true
		} else if (w > large_size) {
			this.large = true
		}

		if (w >= max_size) {
			this.max = true
		}

		this.show = true
	}
}
</script>