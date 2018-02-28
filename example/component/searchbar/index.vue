<template>
	<div class="mzui-demo">
    <scroller class="scroller">
      <title link="https://yanjiie.github.io/weex-flymeui/#/packages/fm-searchbar/"></title>
      <category title="基本态"></category>
			<fm-searchbar />

      <category title="预留状态栏"></category>
			<fm-searchbar :statusbar="true" />

      <category title="去除左边按钮"></category>
			<fm-searchbar :has-prev="false" />

      <category title="不同的背景颜色"></category>
			<fm-searchbar background-color="#FFAF00" />
			<fm-searchbar background-color="#FFAF00" input-background="#FFFFFF" left-color="#FFFFFF" />

      <category title="动态绑定"></category>
			<fm-searchbar
				:value="searchText"
				@fmSearchbarSubmit="submit" />

      <category title="自定义 placeholder"></category>
			<fm-searchbar
				placeholder="输入进行搜索"
				@fmSearchbarSubmit="submit" />
			<fm-searchbar
				placeholder="不同的 placeholder 颜色"
				placeholder-color="#198DED"
				@fmSearchbarSubmit="submit" />

      <category title="自定义搜索文字"></category>
			<fm-searchbar
				searchText="检索"
				@fmSearchbarSubmit="submit" />
			<fm-searchbar
				searchBtnText="检索"
				@fmSearchbarSubmit="submit"
				:searchTextStyle="{ color: '#198DED' }" />

      <category title="插槽"></category>
			<fm-searchbar
				@fmSearchbarSubmit="submit">
				<fm-icon slot="input-right" iconStyle='66' value="&#xe6e9;" color='rgba(0, 0, 0, 0.6)' />
			</fm-searchbar>
			<fm-searchbar
				@fmSearchbarSubmit="submit">
				<fm-icon slot="left" iconStyle='66' value="&#xe6e9;" color='rgba(0, 0, 0, 0.6)' />
			</fm-searchbar>
			<fm-searchbar
				@fmSearchbarSubmit="submit">
				<fm-icon slot="right" iconStyle='66' value="&#xe6e9;" color='rgba(0, 0, 0, 0.6)' />
			</fm-searchbar>
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
	  background-color: #ffffff;
	}
</style>

<script>
	import FmSearchbar from '../../../packages/fm-searchbar'
	import FmIcon from '../../../packages/fm-icon'
	import Title from '../../_mods/title.vue'
	import Category from '../../_mods/category.vue'
	import { setTitle } from '../../_mods/set-nav'

	const modal = weex.requireModule('modal')

	export default {
		data() {
			return {
				searchText: '搜索内容'
			}
		},
	  components: { Title, Category, FmSearchbar, FmIcon },
	  methods: {
	    fmSearchbarSubmit(e) {
	      modal.toast({ message: e.value })
	    },
	    back(e) {
	      modal.toast({ message: '返回' })
			},
			inputing(e) {
				this.searchText = e.value
			}
	  }
	}
</script>
