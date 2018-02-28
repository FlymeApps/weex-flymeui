<template>
  <div v-if="show">
    <div class="fm-status-bar" v-if="statusbar" :style="{ backgroundColor: backgroundColor }"></div>
    <div class="fm-title-bar" :style="barStyle">
      <slot name="left" v-if="hasPrev">
        <fm-icon @fmClick="onBack" class="title-bar-back" value="&#xe6b5;" :icon-style="72" :color="leftColor" />
      </slot>
			<div class="title-wrap">
				<slot name="middle">
					<text class="title-text" :style="{ color: titleColor }">{{ title }}</text>
				</slot>
			</div>
			<slot name="right">
				<div v-for="(item, idx) in btns" :key="idx">
					<fm-icon class="btn-icon" v-if="item.type === 'icon'" :value="item.value" :style="item.color ? { color:item.color } : {}" :icon-style="72" @fmClick="rightBtnClick(idx, item)"/>
					<text class="btn-text" v-else :style="item.color ? { color:item.color } : {}" @click="rightBtnClick(idx, item)">{{ item.value }}</text>
				</div>
			</slot>
    </div>
  </div> 
</template>

<style scoped>
  .fm-status-bar {
    height: 66px;
    width: 1080px;
  }

  .fm-title-bar {
		padding-left: 48px;
    width: 1080px;
    height: 144px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .title-bar-back {
		margin-left: -18px;
		margin-right: 45px;
    line-height: 72px;
    height: 72px;
    font-weight: 700;
  }

	.title-wrap {
		flex: 1;
	}

	.title-text {
		flex: 1;
		text-overflow: ellipsis;
		lines: 1;
    font-family: sans-serif-medium;
    font-weight: 500;
    font-size: 48px;
    line-height: 57px;
    color: rgba(0, 0, 0, 0.6);
	}

	.btn-icon {
		margin-right: 48px;
    color: #198DED;
    line-height: 72px;
    height: 72px;
	}

	.btn-text {
		margin-right: 48px;
    font-family: sans-serif-medium;
    font-weight: 500;
    font-size: 48px;
    line-height: 57px;
    color: #198DED;
	}
</style>

<script>
  import FmIcon from '../fm-icon'
  import Locale from 'weex-flymeui/lib/mixins/locale'
	import { t } from 'weex-flymeui/lib/locale'
  const Navigator = weex.requireModule('navigator')

  export default {
  	name: 'FmTitlebar',
    mixins: [Locale],
    components: { FmIcon },
    props: {
			title: {
				type: String,
				default: '标题'
			},
			titleColor: {
				type: String,
				default: 'rgba(0, 0, 0, 0.6)'
			},
			statusbar: {
				type: Boolean,
				default: false,
			},
			useDefaultReturn: {
				type: Boolean,
				default: true,
			},
			hasPrev: {
				type: Boolean,
				default: true
			},
			borderStyle: {
				type: Object,
				default: () => ({
          borderBottomStyle: 'solid',
          borderBottomWidth: 2,
          borderBottomColor: 'rgba(0, 0, 0, 0.1)'
        })
			},
			backgroundColor: {
				type: String,
				default: '#FFFFFF'
			},
			leftColor: {
				type: String,
				default: 'rgba(0, 0, 0, 0.6)'
			},
			rightBtns: [Object, Array],
			rightText: String,
      show: {
        type: Boolean,
        default: true
      }
    },
    computed: {
			btns() {
				const { rightBtns, rightText } = this
				let btns = []
				if (Array.isArray(rightBtns)) {
					btns = btns.concat(rightBtns.slice(0, 3))
				} else if (Object.prototype.toString.call(rightBtns).slice(8, -1).toLowerCase() === 'object') {
					btns.push(rightBtns)
				} else if (rightText) {
					btns.push({ type: 'text', value: rightText })
				}
				return btns
			},
			barStyle() {
				let style = {
          borderBottomStyle: 'solid',
          borderBottomWidth: 2,
					borderBottomColor: 'rgba(0, 0, 0, 0.1)',
					paddingRight: this.rightBtns ? 0 : 48
				}
				Object.assign(style, this.borderStyle)
				style.backgroundColor = this.backgroundColor
				return style
			}
    },
    methods: {
			onBack(e) {
        const self = this
        if (self.useDefaultReturn) {
          Navigator.pop({}, e => {
          })
        }
        self.$emit('fmTitlebarLeftBtnClicked', {})
			},
			rightBtnClick(idx, item) {
				this.$emit('fmTitlebarRightBtnClicked', { idx: idx, value: item })
			}
    }
  }
</script>
