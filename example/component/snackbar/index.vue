<template>
  <div class="mzui-demo">
    <scroller class="scroller">
      <title link="http://apps.flyme.cn/docs/book.html?bookId=59ef0a54a5a0a6738061aeeb&doc=5a3390c267e2277e77dcf941"></title>
      <category title="不同方向的 popup"></category>
        <div class="container row">
          <fm-button class="btn" @buttonClicked="click1">默认弹出</fm-button>
        </div>
        <div class="container row">
          <fm-button class="btn" @buttonClicked="click2">自定义停留时间( 5s )</fm-button>
        </div>
        <div class="container row">
          <fm-button class="btn" @buttonClicked="click3">不自动消失</fm-button>
        </div>
        <div class="container row">
          <fm-button class="btn" @buttonClicked="click4">js 调用弹出</fm-button>
        </div>
        <div class="container row">
          <fm-button class="btn" @buttonClicked="click5">点击弹出文字操作 SnackBar</fm-button>
        </div>
        <div class="container row">
          <fm-button class="btn" @buttonClicked="click6">点击弹出警告 SnackBar</fm-button>
        </div>
        <fm-snack-bar :show="show" @fmSnackBarDismissed="fmSnackBarDismissed" title="默认弹出，单行文字" type="jump"></fm-snack-bar>
        <fm-snack-bar :show="staryTimeShow" :stay-time="5000" @fmSnackBarDismissed="fmSnackBarStayTimeDismissed" title="5s 后消失" type="jump"></fm-snack-bar>
        <fm-snack-bar :show="stayShow" :auto-close="false" @fmSnackBarDismissed="fmSnackBarStayDismissed" title="不自动消失的 SnackBar"></fm-snack-bar>
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
import { FmButton, FmSnackBar, showSnackBar } from '../../../index';
import Title from '../../_mods/title.vue';
import Category from '../../_mods/category.vue';
import { setTitle } from '../../_mods/set-nav';

const modal = weex.requireModule('modal');

export default {
  components: { Title, Category, FmButton, FmSnackBar },
  data: () => ({
    show: false,
    staryTimeShow: false,
    stayShow: false
  }),
  mounted () {
  },
  methods: {
    click1 () {
      this.show = true;
    },
    fmSnackBarDismissed () {
      this.show = false;
    },
    click2 () {
      this.staryTimeShow = true;
    },
    fmSnackBarStayTimeDismissed () {
      this.staryTimeShow = false;
    },
    click3 () {
      this.stayShow = true;
    },
    fmSnackBarStayDismissed () {
      this.stayShow = false;
    },
    click4 () {
      showSnackBar({
        title: 'js 调用弹出的 SnackBar'
      }).then(() => {

      }, () => {
        modal.toast({ message: '消失了' });
      });
    },
    click5 () {
      showSnackBar({
        title: '已自动开启夜间模式',
        closeText: '撤销',
        autoClose: false
      }).then(() => {
        modal.toast({ message: '点击了撤销' });
      }, () => {
        modal.toast({ message: '消失了' });
      });
    },
    click6 () {
      showSnackBar({
        title: '无网络连接，请点击设置',
        autoClose: false,
        type: 'jump'
      }).then(() => {
        modal.toast({ message: '点击跳转' });
      }, () => {
        modal.toast({ message: '消失了' });
      });
    }
  }
};
</script>
