<template>
	<div class="mzui-demo">
		<scroller class="scroller">
			<title title="fm-tips"></title>
			<category title="默认样式"></category>
			<div class="wrap">
				<fm-text class="title" text="需要提示的文字" />
				<fm-tips message="这是提示" />
			</div>
			<category title="靠右的提示"></category>
			<div class="wrap">
				<fm-text class="title" text="需要提示的文字" style="text-align: right; padding-right: 50px;" />
				<fm-tips message="这是提示这是提示" right />
			</div>
			<category title="自定义内容"></category>
			<div class="wrap">
				<fm-text class="title" text="需要提示的文字" />
				<fm-tips>
					<text class="btnText" @click="copy">复制</text>
					<text class="split"></text>
					<text class="btnText" @click="paste">粘贴</text>
				</fm-tips>
			</div>
			<category title="自定义背景颜色"></category>
			<div class="wrap">
				<fm-text class="title" text="需要提示的文字" />
				<fm-tips message="这是提示" bgColor="#28bc92" />
			</div>
			<category title="最大宽度"></category>
			<div class="wrap">
				<fm-text class="title" text="需要提示的文字" />
				<fm-tips message="这是提示这是提示这是提示这是提示这是提示" />
			</div>
			<category title="events 事件"></category>
			<div class="wrap">
				<fm-text class="title" text="close 事件" />
				<fm-tips message="这是提示这是提示" @close="close" />
			</div>
		</scroller>
	</div>
</template>

<style scoped>
.mzui-demo {
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	background-color: #fff;
}

.wrap {
	padding-left: 20px;
	padding-top: 20px;
}

.scroller {
	padding-bottom: 20px;
}

.btnText {
	height: 35px;
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
</style>

<script>
import { FmTips, FmText } from '../../index'
import Title from '../_mods/title.vue';
import Category from '../_mods/category.vue';
import { setTitle } from '../_mods/set-nav';

let modal = weex.requireModule('modal')

export default {
	components: { Title, Category ,FmTips, FmText },
	methods: {
		close () {
			modal.toast({message: 'close'})
		},
		copy() {
			modal.toast({message: 'copy'})
		},
		paste() {
			modal.toast({message: 'paste'})
		}
	}
}
</script>