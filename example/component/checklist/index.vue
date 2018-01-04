<template>
  <div class="mzui-demo">
    <scroller class="scroller">
      <title link="http://design.flyme.cn/book/book.html?bookId=59ef0a54a5a0a6738061aeeb&doc=59efee69a5a0a6738061aeff"></title>
      <category title="单独使用"></category>
        <fm-checkbox :checked="true" @fmCheckboxChecked="check">简体中文</fm-checkbox>
        <fm-checkbox @fmCheckboxChecked="check">繁体中文</fm-checkbox>
      <category title="组合使用"></category>
        <fm-check-list-group>
          <fm-checkbox>简体中文</fm-checkbox>
          <fm-checkbox>繁体中文</fm-checkbox>
          <fm-checkbox>英文</fm-checkbox>
        </fm-check-list-group>
      <category title="选中回调"></category>
        <fm-check-list-group @fmCheckListGroupChecked="groupChecked">
          <fm-checkbox>简体中文</fm-checkbox>
          <fm-checkbox>繁体中文</fm-checkbox>
          <fm-checkbox>英文</fm-checkbox>
        </fm-check-list-group>
      <category title="默认选中"></category>
        <fm-check-list-group v-model="list">
          <fm-checkbox :checked="true">简体中文</fm-checkbox>
          <fm-checkbox>繁体中文</fm-checkbox>
          <fm-checkbox>英文</fm-checkbox>
        </fm-check-list-group>
      <category title="设置至少选中"></category>
        <fm-check-list-group min="1">
          <fm-checkbox :checked="true">简体中文</fm-checkbox>
          <fm-checkbox>繁体中文</fm-checkbox>
          <fm-checkbox>英文</fm-checkbox>
        </fm-check-list-group>
      <category title="设置至多选中"></category>
        <fm-check-list-group max="2">
          <fm-checkbox :checked="true">简体中文</fm-checkbox>
          <fm-checkbox>繁体中文</fm-checkbox>
          <fm-checkbox>英文</fm-checkbox>
        </fm-check-list-group>
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
import { FmCheckbox, FmCheckListGroup } from '../../../index';
import Title from '../../_mods/title.vue';
import Category from '../../_mods/category.vue';
import { setTitle } from '../../_mods/set-nav';

const modal = weex.requireModule('modal');

export default {
	components: { Title, Category, FmCheckbox, FmCheckListGroup },
	data: ()=> ({
    list: ['简体中文', '英文']
	}),
	methods: {
    check(e) {
      modal.toast({ message: (e.value + (e.checked ? '被选中了' : '被取消选中了')) })
    },
    groupChecked(l) {
      modal.toast({ message: l.toString() })
    }
	}
}
</script>
