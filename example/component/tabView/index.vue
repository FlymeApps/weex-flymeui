<template>
  	<div class="mzui-demo">
		<title link="http://design.flyme.cn/book/book.html?bookId=59ef0a54a5a0a6738061aeeb&doc=59f007ab67e2274f086396b8"></title>
		<category title="TabView"></category>
		<fm-tab-view :items="items" @slidend="end">
			<text class="item item1" slot="item1">我是tab1</text>
			<text class="item item2" slot="item3">我是333</text>
			<text class="item item3" slot="item2">我是222</text>
		</fm-tab-view>
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

.item {
	font-size: 18px;
	text-align: center;
	color: #fff;
	height: 360px;
	margin-top: 2px;
	padding-top: 50px;
}
.item1 {
	background-color: #54ae56;
}
.item2 {
	background-color: #f34949;
}
.item3 {
	background-color: #508aeb;
}
</style>

<script>
import { FmTabView } from '../../../index';
import Title from '../../_mods/title.vue';
import Category from '../../_mods/category.vue';
import { setTitle } from '../../_mods/set-nav';

const modal = weex.requireModule('modal');

export default {
    components: { Title, Category, FmTabView },
	data () {
		return {
			items: [{
				name: 'item1',
				text: 'Tab1'
			}, {
				name: 'item2',
				text: 'Tab2'
			}, {
				name: 'item3',
				text: 'Tab3'
			}]
		}
	},
	methods: {
		end (data) {
			modal.toast({message: data})
		}
	}
}
</script>
