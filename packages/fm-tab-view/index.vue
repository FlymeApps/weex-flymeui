<template>
<div class="tab-wrap">
	<div class="header-wrap">
		<div class="header" ref="header">
			<div v-for="(item, idx) in items" 
				:key="item.name" 
				class="title" 
				@click="titleClick(idx)">
				<text :class="['text', idx == current ? 'text-selected' : '']" >{{item.text}}</text>	
			</div>
		</div>
		<text class="bottom-line" :style="lineStyle" ref="line"></text>
	</div>
	<div class="slider-wrap" 
		ref="slider" 
		:style="listStyle"
		@touchmove="move" 
		@touchstart="start" 
		@touchend="end">
		<div v-for="(item, idx) in items" class="body" :style="itemStyle">
			<slot :name="item.name"></slot>
		</div>
	</div>
</div>
</template>

<style scoped>
.header-wrap {
	margin-top: 9px;
	margin-right: 22px;
	margin-left: 22px;
}
.header {
	flex-direction: row;
	justify-content: center;
}
.title {
	flex: 1;
	flex-direction: row;
	justify-content: center;
}
.text-selected {
	color: #f34949;
}
.text {
	font-size: 14px;
	font-weight: 700;
	text-align: center;
	color: #666666;
}
.bottom-line {
	height: 2.4px;
	margin-top: 9px;
	background-color: #f34949;
}
.slider-wrap {
	flex-direction: row;
	border-top-width: 1px;
	border-color: #dddddd;
}
.body {
}
</style>

<script>
const dom = weex.requireModule('dom')
const animation = weex.requireModule('animation')

export default {
	data () {
		return {
			width: 0,//单个tab宽度
			min: 0,
			transX: 0,
			startX: 0,
			moveX: 0,
			current: 0,//当前tab index
			lineWidth: 0,//标题下划线宽度
			lineLeft: 0,
			line: 0//标题下划线translate计算比例
		}
	},
	props: {
		items: {
			type: Array,
			required: true
		}
	},
	computed: {
		lineStyle () {
			return {
				width: `${this.lineWidth}px`,
				'margin-left': `${this.lineLeft}px`,
				transform: `translateX(${-this.transX/this.line}px)`
			}
		},
		listStyle () {
			let sty = {
				opacity: this.width === 0 ? 0 : 1
			}
			
			if (this.width > 0) {
				sty.width = `${this.width * this.items.length}px`
				sty.transform = `translateX(${this.transX}px)`
			}

			return sty
		},
		itemStyle () {
			return {
				width: `${this.width || 360}px`
			}
		}
	},
	mounted () {
		setTimeout(() => {
			let { platform } = weex.config.env;
			let head = (typeof(window) === 'object' && platform.toLowerCase() === 'web') ? this.$refs.header.$children[0].$children[0] : this.$refs.header.children[0].children[0]
			dom.getComponentRect(head, opt => {
				this.lineWidth = opt.size.width + 12
				this.lineLeft = opt.size.left - 22 - 6
			})
			dom.getComponentRect(this.$refs.slider, opt => {
				this.width = opt.size.width
				this.line = this.width / (this.width - 44) * this.items.length
				this.min = -this.width * (this.items.length - 1)
			})
		}, 100)
	},
	methods: {
		titleClick (idx) {
			this.slide(-idx * this.width, -idx)
			this.$emit('titleclick', idx)
		},
		start (evt) {
			if (this.sliding) return
			this.startX = evt.changedTouches[0].screenX
			this.moveX = this.startX
		},
		move (evt) {
			if (this.sliding) return
			let x = evt.changedTouches[0].screenX
			let sub = x - this.moveX

			this.transX = Math.max(this.min, Math.min(0, this.transX + sub))
			this.moveX = x
		},
		end (evt) {
			this.sliding = true

			let x = evt.changedTouches[0].screenX
			let direct = x - this.startX > 0
			let num = Math.floor(Math.abs(this.transX) / this.width)
			let decimal = this.transX % this.width / this.width
			let int = this.transX > 0 ? num : -num
			let max = -this.items.length + 1

			if (decimal > .2 && direct) {
				int = Math.min(0, int + 1)
			} else if (decimal < -.2 && !direct) {
				int = Math.max(max, int - 1)
			}

			this.slide(int * this.width, int)
		},
		slide (trans, idx) {
			animation.transition(this.$refs.slider, {
				styles: {
					transform: `translateX(${trans}px)`
				},
				duration: 200,
				timingFunction: 'ease-out'
			}, () => {
				this.current = -idx
				this.transX = trans
				this.sliding = false
				this.$emit('slidend', {selected: this.current})
			})
			animation.transition(this.$refs.line, {
				styles: {
					transform: `translateX(${-trans/this.line}px)`
				},
				duration: 200,
				timingFunction: 'ease-out'
			})
		}
	}
}
</script>