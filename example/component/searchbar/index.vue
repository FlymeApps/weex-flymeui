<template>
	<div class="mzui-demo">
		<text>默认态</text>
		<fm-searchbar
			@submit="submit"
			:value="searchText"
			@input="inputing"
			@back="back" />
		<text>修改 placeholder</text>
		<fm-searchbar
			placeholder="输入进行搜索"
			@submit="submit" />
		<text>自动选中</text>
		<fm-searchbar
			:autofocus="true"
			@submit="submit" />
		<text>更改搜索按钮文字</text>
		<fm-searchbar
			searchBtnText="检索"
			@submit="submit" />
		<text>更改搜索按钮文字颜色</text>
		<fm-searchbar
			:searchBtnStyle="{ color: '#198ded' }"
			@submit="submit" />
		<text>左侧按钮自定义</text>
		<fm-searchbar
			:searchBtnStyle="{ color: '#198ded' }"
			@submit="submit">
			<image slot="left" src="http://design.flyme.cn/weexui/assets/star_normal.png" style="width: 72px;height: 72px;" />
		</fm-searchbar>
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
	.special-rich {
	  margin: 30px;
	}
</style>

<script>
	import FmSearchbar from '../../../packages/fm-searchbar'
	import Title from '../../_mods/title.vue'
	import Category from '../../_mods/category.vue'
	import { setTitle } from '../../_mods/set-nav'
	import lang from '@flyme/weex-flymeui/lib/locale/lang/en'
	import locale from '@flyme/weex-flymeui/lib/locale'
	locale.use(lang)

	const modal = weex.requireModule('modal')

	export default {
		data() {
			return {
				searchText: 'asdasd'
			}
		},
	  components: { Title, Category, FmSearchbar },
	  methods: {
	    submit(e) {
	      modal.toast({ message: e.value })
	    },
	    back(e) {
	      modal.toast({ message: '返回' })
			},
			inputing(e) {
				this.searchText = e.value
				console.lang(this.searchText)
			}
	  }
	}
</script>
