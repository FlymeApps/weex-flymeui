<template>
  <div class="fm-checkbox">
      <div class="checkbox-content" @click="toggleChecked">
				<text class="label" :style="{ color: checked ? '#198DED': '#000000' }">{{ value }}</text>
				<div class="icon-wrap" ref="fm-icon" :style="iconStyle">
					<fm-icon class="icon" value="&#xe6de;" icon-style="48" color="#0A73C9" />
				</div>
			</div>
			<div class="border"></div>
  </div>
</template>

<style scoped>
	.fm-checkbox {
		
	}

	.border {
    margin: 0 48px;
		background-color: #E6E6E6;
		height: 1px;
	}

	.checkbox-content {
		flex: 1;
    flex-direction: row;
    padding: 51px 96px;
		align-items: center;
		justify-content: space-between;
	}

	.checkbox-content:active {
		background-color: #EEEEEE;
	}

	.label {
		font-family: sans-serif-medium;
		font-weight: 500;
		font-size: 48px;
		line-height: 54px;
    justify-content: center;
	}

	.checked {
		color: #198DED;
	}

	.icon-wrap {
		position: absolute;
		left: 914px;
		top: 0px;
		bottom: 0px;
		opacity: 1;
		overflow: hidden;
		padding: 40px 0;
	}

	.icon {
		font-size: 72px;
		color: #198DED;
		font-weight: bold;
		width: 72px;
		height: 64px;
    justify-content: center;
	}

</style>

<script>
const animation = weex.requireModule('animation')
const { platform } = weex.config.env
const isWeb = typeof (window) === 'object' && platform.toLowerCase() === 'web'
import FmIcon from '../fm-icon'
export default {
	components: { FmIcon },
	props: {
		value: String,
		checked: Boolean,
		disabled: Boolean
	},
	data: () => ({
		isChecked: false
	}),
	computed: {
		iconStyle() {
			let { isChecked } = this
			return {
				width: isChecked ? 72 : 1
			}
		},
		isGroup() {
			
		}
	},
	methods: {
		toggleChecked() {
			!this.disabled && (this.checked = !this.checked)
			!this.disabled && this.appearIcon(this.checked)
		},
		appearIcon(bool, duration = 150) {
			const iconEl = this.$refs['fm-icon']
			if (!iconEl) {
				return
			}
			let style = bool ? {
				opacity: 1,
				width: 72
			} : {
				opacity: 0
			}
			animation.transition(iconEl, {
				styles: style,
				duration,
				delay: 0,
				timingFunction: 'ease-out'
			}, () => {
				this.isChecked = bool
			})
		}
	},
	mounted() {
		console.log(this)
	}
}
</script>