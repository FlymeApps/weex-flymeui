<template>
  <div class="mzui-demo">
    <scroller class="scroller">
      <title link="http://design.flyme.cn/book/book.html?bookId=59ef0a54a5a0a6738061aeeb&doc=59efee69a5a0a6738061aeff"></title>
      <category title="不同方向的 popup"></category>
      <fm-check-list-group>
        <fm-checkbox value="简体中文"></fm-checkbox>
      </fm-check-list-group>
    </scroller>
  </div>
</template>

<style lang="sass" scoped>
  @import "../../../packages/style/mixin.scss";
  .mzui-demo {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #fff;
  }
  
  .container {
    padding-top: size(60);
    padding-left: size(60);
    padding-right: size(60);
  }

  .row {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .btn {
    margin-right: size(60);
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
    show: false,
    staryTimeShow: false,
    stayShow: false
	}),
	mounted() {
	},
	methods: {
		click1() {
      this.show = true
    },
    fmSnackBarDismissed() {
      this.show = false
    },
		click2() {
      this.staryTimeShow = true
    },
    fmSnackBarStayTimeDismissed() {
      this.staryTimeShow = false
    },
		click3() {
      this.stayShow = true
    },
    fmSnackBarStayDismissed() {
      this.stayShow = false
    },
    click4() {
      showSnackBar({
        title: 'js 调用弹出的 SnackBar'
      }).then(() => {

      }, () => {
        modal.toast({ message: '消失了' })
      })
    },
    click5() {
      showSnackBar({
        title: '已自动开启夜间模式',
        closeText: '撤销',
        autoClose: false
      }).then(() => {
        modal.toast({ message: '点击了撤销' })
      }, () => {
        modal.toast({ message: '消失了' })
      })
    },
    click6() {
      showSnackBar({
        title: '无网络连接，请点击设置',
        autoClose: false,
        type: 'jump'
      }).then(() => {
        modal.toast({ message: '点击跳转' })
      }, () => {
        modal.toast({ message: '消失了' })
      })
    }
	}
}
</script>
