<template>
  <div class="mzui-demo">
    <scroller class="scroller">
      <title link="http://apps.flyme.cn/docs/book.html?bookId=59ef0a54a5a0a6738061aeeb&doc=5a3390c267e2277e77dcf941"></title>
      <category title="不同方向的 popup"></category>
      <fm-titlebar :rightBtns="btns1"></fm-titlebar>
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
  
  .container {
    padding-top: 60px;
    padding-left: 60px;
    padding-right: 60px;
  }

  .row {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .btn {
    margin-right: 60px;
  }
  
  .scroller {
    flex: 1;
  }

  .demo-content {
		height: 840px;
  }
</style>

<script>
import { FmTitlebar } from '../../../index';
import Title from '../../_mods/title.vue';
import Category from '../../_mods/category.vue';
import { setTitle } from '../../_mods/set-nav';

const modal = weex.requireModule('modal');

export default {
	components: { Title, Category, FmTitlebar },
	data: ()=> ({
    btns1: [{
      type: 'icon',
      value: '&#xe6cb;',
      color: 'red'
    }, {
      type: 'text',
      value: '更多'
    }]
	}),
	mounted() {
	},
	methods: {

	}
}
</script>
