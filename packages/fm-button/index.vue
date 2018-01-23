<template>
<div class="fm-btn-wrap" :style="btnStyle" @click="btnClick">
	<text ref="text" class="fm-btn" :class="btnClz" :style="textStyle">{{text}}</text>
</div>
</template>

<style scoped>
.fm-btn-wrap {
	height: 72;
	align-items: center;
	flex-direction: row;
	border-radius: 72;
}
.fm-btn {
	opacity: 0;
	padding-left: 36;
	padding-right: 36;
	line-height: 72;
	font-size: 42;
	font-weight: 700;
	text-align: center;
	min-width: 144;
	max-width: 300;
}
.fm-btn-max-padding {
	padding-left: 24;
	padding-right: 24;
}
.fm-btn-freeSize {
	max-width: 1080;
}
.fm-btn-show {
	
}
.fm-btn-hollow {
	border-width: 4;
	line-height: 64;
	border-stye: solid;
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
		disabled: Boolean,
		freeSize: {
			type: Boolean,
			default: true
		}
	},

	computed: {
		btnClz() {
			let clz = []

			if (this.max) {
				clz.push('fm-btn-max-padding')
			}

			if (this.bgColor == transparent) {
				clz.push('fm-btn-hollow')
			}

			if (this.freeSize) {
				clz.push('fm-btn-freeSize')
			}

			return clz
		},
		btnStyle() {
			let sty = {}

			if (this.bgColor != transparent) {
				sty.backgroundColor = this.bgColor
			}
			if (this.disabled) {
				sty.backgroundColor = dis_color
			}
			if (this.show) {
				sty.opacity = 1;
			}

			return sty
		},
		textStyle() {
			let sty = {}

			if (this.color) {
				sty.color = this.color
				if (this.bgColor == transparent) {
					sty.borderColor = this.color
				}
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
			if (option.size.width >= 240) {
				this.max = true
			}
			this.show = true
		})
	}
}
</script>