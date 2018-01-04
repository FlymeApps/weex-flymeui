<template>
  <div class="detail-cell" @click="click" bubble="true">
		<div class="content">
			<div class="desc">
				<fm-text :text-value="title" medium="" :text-style="{ fontSize: 48, color: '#000', fontWeight: 500, lineHeight: 54}" />
				<fm-text :text-value="subTitle" :text-style="{ fontSize: 32, color: 'rgba(0,0,0,0.4)', fontWeight: 300, lineHeight: 42, marginTop: 8.6667 }" />
			</div>
			<fm-icon class="cellIcon" value="&#xe6b5;" color="#999" icon-style="72" />
		</div>
		<div class="border"></div>
  </div>
</template>

<style scoped>
    .detail-cell {
			padding-left: 65px;
			padding-right: 65px;
			height: 252px;
			background-color: #fff;
    }

	.content {
		flex: 1;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	
	.border {
		height: 6px;
		background-color: #ccc;
		transform: scaleY(0.3333);
	}

	.cellIcon {
		transform: rotate(180deg);
	}

</style>

<script>

import { FmText, FmIcon } from '../../../index';

export default {
	props: {
		title: String,
		subTitle: String
	},
	components: { FmText, FmIcon },
	methods: {
		click(e) {
			this.$emit('click', e)
      		e.stopPropagation()
		}
	}
}
</script>


