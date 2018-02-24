<template>
  <div>
		<div class="tab-title">
			<text>偏移量: {{ offsetXRatio }}</text>
		</div>
    <slider class="tab-wrapper" infinite="false" @change="_onIndexChange" @scroll="_onScroll" offset-accuracy="0.1">
			<list class="list">
				<cell class="cell"><text>list1</text></cell>
				<cell class="cell"><text>list1</text></cell>
				<cell class="cell"><text>list1</text></cell>
				<cell class="cell"><text>list1</text></cell>
				<cell class="cell"><text>list1</text></cell>
				<cell class="cell"><text>list1</text></cell>
				<cell class="cell"><text>list1</text></cell>
				<cell class="cell"><text>list1</text></cell>
				<cell class="cell"><text>list1</text></cell>
				<cell class="cell"><text>list1</text></cell>
				<cell class="cell"><text>list1</text></cell>
				<cell class="cell"><text>list1</text></cell>
			</list>
			<list class="list">
				<cell class="cell"><text>list2</text></cell>
				<cell class="cell"><text>list2</text></cell>
				<cell class="cell"><text>list2</text></cell>
				<cell class="cell"><text>list2</text></cell>
				<cell class="cell"><text>list2</text></cell>
				<cell class="cell"><text>list2</text></cell>
				<cell class="cell"><text>list2</text></cell>
				<cell class="cell"><text>list2</text></cell>
				<cell class="cell"><text>list2</text></cell>
				<cell class="cell"><text>list2</text></cell>
				<cell class="cell"><text>list2</text></cell>
				<cell class="cell"><text>list2</text></cell>
			</list>
			<list class="list">
				<cell class="cell"><text>list3</text></cell>
				<cell class="cell"><text>list3</text></cell>
				<cell class="cell"><text>list3</text></cell>
				<cell class="cell"><text>list3</text></cell>
				<cell class="cell"><text>list3</text></cell>
				<cell class="cell"><text>list3</text></cell>
				<cell class="cell"><text>list3</text></cell>
				<cell class="cell"><text>list3</text></cell>
				<cell class="cell"><text>list3</text></cell>
				<cell class="cell"><text>list3</text></cell>
				<cell class="cell"><text>list3</text></cell>
				<cell class="cell"><text>list3</text></cell>
			</list>
			<list class="list">
				<cell class="cell"><text>list4</text></cell>
				<cell class="cell"><text>list4</text></cell>
				<cell class="cell"><text>list4</text></cell>
				<cell class="cell"><text>list4</text></cell>
				<cell class="cell"><text>list4</text></cell>
				<cell class="cell"><text>list4</text></cell>
				<cell class="cell"><text>list4</text></cell>
				<cell class="cell"><text>list4</text></cell>
				<cell class="cell"><text>list4</text></cell>
				<cell class="cell"><text>list4</text></cell>
				<cell class="cell"><text>list4</text></cell>
				<cell class="cell"><text>list4</text></cell>
			</list>
    </slider>
  </div>
</template>

<style scoped>
  .tab-wrapper {
		position: absolute;
		top: 192px;
		bottom: 0;
		left: 0;
		right: 0;
	}
	.list {
		flex: 1;
	}
	.cell {
		height: 192px;
	}
	.tab-title {
		height: 192px;
		background-color: #eeeeee;
	}
</style>

<script>
	const modal = weex.requireModule('modal')
  export default {
    data () {
      return {
				offsetXRatio: 0
      }
		},
		methods: {
			_onIndexChange(e) {
				modal.toast({message: e.index})
			},
			_onScroll(e) {
				this.offsetXRatio = e.offsetXRatio
			}
		}
  }
</script>