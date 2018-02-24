<template>
  <div>
    <div class="fm-status-bar" v-if="statusbar" :style="{ backgroundColor: backgroundColor }"></div>
    <div class="fm-title-bar" :style="barStyle">
      <slot name="left" v-if="hasPrev">
        <fm-icon @click="onBack" class="title-bar-back" value="&#xe6b5;" icon-style="72" />
      </slot>
			<slot name="title">
				<text class="title-text" :style="{ color: titleColor }">{{ title }}</text>
			</slot>
			<slot name="right">
				<div class="right-btn" v-for="(item, idx) in btns" :key="idx">
					<fm-icon class="btn-icon" v-if="item.type === 'icon'" :value="item.value" :style="item.color ? { color:item.color } : {}" icon-style="72" @click="rightBtnClick(idx, item)"/>
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
    color: rgba(0, 0, 0, 0.6);
  }

	.title-text {
		flex: 1;
    font-family: sans-serif-medium;
    font-weight: 500;
    font-size: 48px;
    line-height: 57px;
    color: rgba(0, 0, 0, 0.6);
	}

	.btn-icon {
		margin-right: 48px;
    color: #198DED;
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
  import Locale from '@flyme/weex-flymeui/lib/mixins/locale'
  import { t } from '@flyme/weex-flymeui/lib/locale'

  export default {
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
				type: true,
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
			rightBtns: [Object, Array]
    },
    data: () => ({
      focus: false
    }),
    computed: {
			btns() {
				const { rightBtns } = this
				let btns = []
				if (Array.isArray(rightBtns)) {
					btns = btns.concat(rightBtns)
				} else if (Object.prototype.toString.call(this).slice(8, -1).toLowerCase() === 'object') {
					btns.push(rightBtns)
				}
				return btns
			},
			barStyle() {
				let style = {
          borderBottomStyle: 'solid',
          borderBottomWidth: 2,
          borderBottomColor: 'rgba(0, 0, 0, 0.1)'
				}
				Object.assign(style, this.borderStyle)
				style.backgroundColor = this.backgroundColor
				return style
			}
    },
    methods: {
			rightBtnClick(idx, item) {
				this.$emit('fmTitlebarRightBtnClick', { idx: idx, value: item })
			}
    }
  }
</script>
