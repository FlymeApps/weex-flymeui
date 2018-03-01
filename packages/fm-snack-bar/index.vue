<template>
	<div ref="fm-snack-bar"
		v-if="show"
		:hack="isNeedShow"
		class="fm-snack-bar"
		:style="barStyle"
		@click="snackClick">
		<slot name="title">
			<text class="title" :style="{ color: titleColor }">{{ title }}</text>
		</slot>
		<slot name="right">
			<fm-icon v-if="type === 'jump'" value="&#xe6b5;" class="rotate" :style="{ color: titleColor }" />
			<text v-else-if="type === 'normal'" class="closeText" :style="{ color: closeColor }" @click="ctrClick">{{ closeText }}</text>
		</slot>
	</div>
</template>

<style scoped>
	.fm-snack-bar {
		position: fixed;
		left: 0;
		right: 0;
		background-color: #FFFFFF;
		flex-direction: row;
		padding: 0 72px;
		justify-content: space-between;
		align-items: center;
		min-height: 0;
	}

	.title, .closeText {
		font-size: 42px;
		font-family: sans-serif-medium;
		font-weight: 500;
	}

	.rotate {
		font-size: 54px;
		font-weight: 700;
		transform: rotate(180deg);
	}

</style>

<script>
const animation = weex.requireModule('animation')
const { platform } = weex.config.env
const isWeb = typeof (window) === 'object' && platform.toLowerCase() === 'web'
import FmIcon from '../fm-icon'
import Locale from 'weex-flymeui/lib/mixins/locale'
import { t } from 'weex-flymeui/lib/locale'
export default {
  name: 'FmSnackBar',
	mixins: [Locale],
	components: { FmIcon },
  props: {
		show: {
			type: Boolean,
			default: false
		},
		backgroundColor: {
			type: String,
			default: '#323232'
		},
		title: String,
		titleColor: {
			type: String,
			default: '#FFFFFF'
		},
		closeText: {
			type: String,
			default() {
				return t('el.common.close')
			}
		},
		closeColor: {
			type: String,
			default: '#198DED'
		},
		height: {
			type: Number,
			default: 144
		},
		animation: {
			type: Object,
			default: () => ({
				timingFunction: 'ease-out'
			})
		},
		autoClose: {
			type: Boolean,
			default: true
		},
		stayTime: {
			type: Number,
			default: 3000
		},
		type: {
			type: String,
			default: 'normal'
		},
		clickCb: Function,
		dismissCb: Function
	},
	computed: {
		barStyle() {
			const { height, backgroundColor } = this
			return {
				backgroundColor: backgroundColor,
				bottom: `${-height}px`,
				height: `${height}px`
			}
		},
		isNeedShow () {
			setTimeout(() => {
				this.appearBar(this.show)
			}, 50)
			return this.show
		}
	},
	data: () => ({
		timer: null
	}),
	methods: {
		appearBar(bool, duration = 150) {
			this.isShow = bool
			const popupEl = this.$refs['fm-snack-bar']
			if (!popupEl) {
				return
			}
			animation.transition(popupEl, {
				styles: {
					transform: this.getTransform(this.height, bool)
				},
				duration,
				delay: 0,
				...this.animation
			}, () => {
				let { autoClose, stayTime } = this
				if (bool && autoClose) {
					this.timer = setTimeout(() => {
						this.appearBar(false)
					}, stayTime)
				} else if (!bool) {
					this.dismissCb && this.dismissCb()
					this.$emit('fmSnackBarDismissed', { pos: this.pos })
				}
			})
		},
		getTransform(height, bool) {
			bool || (height = 0)
			return `translateY(-${height}px)`
		},
		hide() {
			if (this.timer) {
				clearTimeout(this.timer)
				this.timer = null
			}
			this.appearBar(false)
		},
		ctrClick() {
			this.clickCb && this.clickCb()
			this.hide()
		},
		snackClick() {
			let { type } = this
			if (type === 'jump') {
				this.clickCb && this.clickCb()
				this.hide()
			}
			this.$emit('fmSnackBarBeClicked', {})
		}
	}
}
</script>


