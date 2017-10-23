<template>
<div v-if="show" class="tip-wrap" :style="wrapStyle">
	<div class="content-wrap" :style="background">
		<slot></slot>
		<text class="content">{{message}}</text>
		<text class="split"></text>
		<text class="close" @click="close">+</text>
	</div>
	<text class="arrow" :style="arrowStyle"></text>
</div>
</template>

<style scoped>
.tip-wrap {
	flex-direction: row;
	height: 92px;
	max-width: 630px;
	padding-top: 15px;
}
.arrow {
	position: absolute;
	top: 7.5px;
	width: 15px;
	height: 15px;
	transform: rotate(45deg);
}
.content-wrap {
	flex-direction: row;
	align-items: center;
	padding-top: 18.75px;
	padding-right: 20.83px;
	padding-bottom: 18.75px;
	padding-left: 20.83px;
	border-radius: 4px;
}
.content {
	height: 35px;
	max-width: 512px;
	font-size: 29.17px;
	color: #ffffff;
}
.split {
	width: 2px;
	height: 31.25px;
	margin-left: 20.83px;
	margin-right: 20.83px;
	background-color: #ffffff;
	opacity: .4;
}
.close {
	width: 31.25px;
	height: 31.25px;
	line-height: 32px;
	color: #ffffff;
	font-size: 50px;
	transform: rotate(45deg);
}

</style>

<script>
export default {
	data () {
		return {
			show: true
		}
	},

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
				sty.right = '38px'
			} else {
				sty.left = '38px'
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