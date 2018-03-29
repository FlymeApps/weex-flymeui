<template>
  <div class="mzui-demo">
    <scroller class="scroller">
      <title link="http://apps.flyme.cn/docs/book.html?bookId=59df3445a5a0a611eee9f119&doc=59e41a2967e2271c7fc46b4e"></title>
      <category title="展示两个按钮弹框"></category>
        <div class="container row">
          <fm-button class="btn" @buttonClicked="click('two_btn')">点击</fm-button>
        </div>
      <category title="展示列表弹框"></category>
        <div class="container row">
          <fm-button class="btn" @buttonClicked="click('handle_select')">点击</fm-button>
        </div>
      <category title="展示底部列表弹框"></category>
        <div class="container row">
          <fm-button class="btn" @buttonClicked="click('bottom_select')">点击</fm-button>
        </div>
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
  }

  .btn {
    margin-right: 60px;
  }

  .scroller {
    position: absolute;
    top: 66px;
    right: 0;
    left: 0;
    bottom: 0;
  }
</style>

<script>
import { FmButton, FmText } from 'weex-flymeui';
import Title from '../../_mods/title.vue';
import Category from '../../_mods/category.vue';

const modal = weex.requireModule('modal');
const view = weex.requireModule('view');

export default {
  data () {
    return {
      dialogdata: ''
    };
  },
  components: { Title, Category, FmButton, FmText },
  methods: {
    click (e) {
      if (e === 'two_btn') {
        this.dialogdata = {
          title: '我的标题',
          positivebtn: '确定',
          negativebtn: '取消'
        };
      } else if (e === 'handle_select') {
        this.dialogdata = {
          items: [
            '复制',
            '删除'
          ]
        };
      } else if (e === 'bottom_select') {
        this.dialogdata = {
          items: [
            '复制',
            '删除'
          ],
          itemcolors: [
            '#de3933',
            '#198ded'
          ]
        };
      }
      view.showDialog({
        type: e,
        data: this.dialogdata
      }, res => {
        modal.toast({ message: res.data });
      });
    }
  }
};
</script>
