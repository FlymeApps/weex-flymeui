<template>
	<div class="mzui-demo">
		<fm-searchbar
			placeholder="输入进行搜索"
			@submit="submit" />
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
	import { FmSearchbar } from '../../../index'
	import Title from '../../_mods/title.vue'
	import Category from '../../_mods/category.vue'
	import { setTitle } from '../../_mods/set-nav'

	const modal = weex.requireModule('modal')

	export default {
	  components: { Title, Category, FmSearchbar },
	  methods: {
	    submit(e) {
	      modal.toast({ message: e.value })
	    }
	  }
	}
</script>
