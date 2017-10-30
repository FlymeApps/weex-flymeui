<template>
<div v-if="show" class="tip-wrap" :style="wrapStyle">
	<div class="content-wrap" :style="background">
		<slot></slot>
		<text class="content">{{message}}</text>
		<text class="split"></text>
		<fm-icon class="close" @click="close" value="&#xe6c0;" />
	</div>
	<text class="arrow" :style="arrowStyle"></text>
</div>
</template>

<style scoped>
.tip-wrap {
	flex-direction: row;
	height: 40px;
	padding-top: 7.2px;
}
.arrow {
	position: absolute;
	top: 3.6px;
	width: 7.2px;
	height: 7.2px;
	transform: rotate(45deg);
}
.content-wrap {
	flex-direction: row;
	align-items: center;
	padding-top: 9px;
	padding-bottom: 9px;
	padding-left: 10px;
	border-radius: 2px;
}
.content {
	height: 17px;
	max-width: 226px;
	font-size: 14px;
	color: #ffffff;
}
.split {
	width: 1px;
	height: 14px;
	margin-left: 9px;
	background-color: #ffffff;
	opacity: .4;
}
.close {
	color: #ffffff;
	font-size: 18px;
	margin-top: 3px;
	margin-left: 10px;
	margin-right: 10px;
}

</style>

<script>
import FmIcon from '../fm-icon'
export default {
	data () {
		return {
			show: true
		}
	},
	components: { FmIcon },
	computed: {
		background () {
			return {
				backgroundColor: this.bgColor
			}
		},
		wrapStyle () {
			return {
				'justify-content': this.right ? 'flex-end' : 'flex-start'
			}
		},
		arrowStyle () {
			let sty = {
				backgroundColor: this.bgColor
			}
			if (this.right) {
				sty.right = '18px'
			} else {
				sty.left = '18px'
			}

			return sty
		}
	},

	props: {
		message: String,
		bgColor: {
			type: String,
			default: '#198ded'
		},
		right: Boolean
	},

	methods: {
		close () {
			this.show = false
			this.$emit('close')
		}
	}
}
</script>