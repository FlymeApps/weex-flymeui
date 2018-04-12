<template>
  <div class="mzui-demo">
    <scroller class="scroller">
      <title link="https://yanjiie.github.io/weex-flymeui/#/packages/fm-dialog/"></title>
      <category title="确认弹框"></category>
        <div class="container row">
          <fm-button class="btn" @buttonClicked="click1">两个按钮</fm-button>
          <fm-button class="btn" @buttonClicked="click2">多个按钮</fm-button>
          <fm-button class="btn" @buttonClicked="click3">多行弹框</fm-button>
        </div>
      <category title="与其他组件混用"></category>
        <div class="container row">
          <fm-button class="btn" @buttonClicked="click6">弹出选择</fm-button>
          <fm-button class="btn" @buttonClicked="click7">弹出输入</fm-button>
        </div>
      <category title="js 调用弹框"></category>
        <div class="container row">
          <fm-button class="btn" @buttonClicked="click4">对话框</fm-button>
          <fm-button class="btn" @buttonClicked="click5">提示框</fm-button>
        </div>

        <!-- <fm-dialog :show="show"
                   title="退出浏览器并清空历史记录"
                   content="弹框内容区域此处展示各种描述弹框内容区域此处展示各种"
                   @fmDialogBtnClicked="btnClick"
                   :can-auto-close="false">
                   <div slot="btn-group">
                      <fm-dialog-btn type="1" text="12321"></fm-dialog-btn>
                      <fm-dialog-btn type="2" text="12321"></fm-dialog-btn>
                      <fm-dialog-btn type="3" text="12321"></fm-dialog-btn>
                   </div>
                   </fm-dialog> -->

        <fm-dialog :show="checkListShow"
                   title="选择语言"
                   @fmDialogBtnClicked="checkListClick"
                   @fmDialogDisappeared="checkListOverlayClick"
                   :can-auto-close="true"
                   :overlayOpacity="0.1">
          <fm-check-list-group slot="content" @fmCheckListGroupChecked="groupChecked">
            <fm-checkbox>简体中文</fm-checkbox>
            <fm-checkbox>繁体中文</fm-checkbox>
            <fm-checkbox>英文</fm-checkbox>
          </fm-check-list-group>
        </fm-dialog>

        <fm-dialog :show="inputShow"
                   title="弹出输入"
                   @fmDialogBtnClicked="inputClick"
                   @fmDialogDisappeared="inputOverlayClick"
                   :can-auto-close="true">
          <fm-input ref="input" :default-value="inputText" slot="content" type="text" placeholder="输入点什么.." :autofocus="true" @input="inputing" />
        </fm-dialog>

        <fm-dialog :show="show"
                   :title="title"
                   :content="content"
                   @fmDialogBtnClicked="btnClick"
                   @fmDialogDisappeared="dialogOverlayClick"
                   :can-auto-close="true"
                   :btns="btns">
                   </fm-dialog>
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
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
</style>

<script>
import { FmButton, FmDialog, FmCheckListGroup, FmCheckbox, FmInput } from 'weex-flymeui';
import { confirm, alert } from '../../../packages/module/dialog';
import Title from '../../_mods/title.vue';
import Category from '../../_mods/category.vue';

const modal = weex.requireModule('modal');

export default {
  components: { Title, FmDialog, Category, FmButton, FmCheckListGroup, FmCheckbox, FmInput },
  data: () => ({
    show: false,
    checkListShow: false,
    inputShow: false,
    checkList: [],
    inputText: '123',
    title: '',
    content: '',
    btns: []
  }),
  methods: {
    click1 () {
      this.title = '两个按钮的弹框';
      this.content = 'fm-dialog 默认两个按钮，按钮文字可通过 cancelText 以及 confirmText 修改';
      this.btns = [];
      this.show = true;
    },
    click2 () {
      this.title = '多个按钮的弹框';
      this.content = '按钮超过 2 个会变成竖排按钮，需要一行多个按钮可通过 slot="btn-group" 进行插入';
      this.btns = [{
        text: '按钮1',
        color: 'red'
      }, {
        text: '按钮2'
      }, {
        text: '按钮3'
      }, {
        text: '按钮4'
      }, {
        text: '按钮5'
      }];
      this.show = true;
    },
    click3 () {
      this.title = '这是多行标题的弹框通过 props-title 或者通过 slot="title" 插入这是多行标题的弹框通过 props-title 或者通过 slot="title" 插入';
      this.content = '';
      this.btns = [];
      this.show = true;
    },
    click4 () {
      confirm({
        title: '这是 js 调用弹出的弹框',
        message: '用户操作后返回的是一个 Promise 对象，可自行做处理。弹框的取消以及确定字体可以通过 cancelText 以及 confirmText 属性进行更改'
      }).then(() => {
        modal.toast({ message: '确定' });
      }, () => {
        modal.toast({ message: '取消' });
      });
    },
    click5 () {
      alert({
        title: '这是 js 调用弹出的提示框',
        message: '用户操作后返回的是一个 Promise 对象，可自行做处理。弹框的确定按钮可以通过 confirmText 属性进行更改'
      }).then(() => {
        modal.toast({ message: '提示框消失了' });
      }, () => {
        modal.toast({ message: '点击蒙层消失了' });
      });
    },
    click6 () {
      this.checkListShow = true;
      this.checkList = [];
    },
    click7 () {
      // this.$refs.input.blur()
      this.inputShow = true;
      // this.inputText = ''
    },
    btnClick (btn) {
      if (btn.type === 'cancel') {
        modal.toast({ message: '取消' });
      } else if (btn.type === 'confirm') {
        modal.toast({ message: '确定' });
      } else {
        modal.toast({ message: btn.text });
      }
      this.show = false;
    },
    dialogOverlayClick () {
      this.show = false;
    },
    checkListClick (btn) {
      if (btn.type === 'cancel') {
        modal.toast({ message: '点击了取消' });
      } else if (btn.type === 'confirm') {
        modal.toast({ message: '选择了: ' + this.checkList.toString() });
      } else {
        modal.toast({ message: btn.text });
      }
      this.checkListShow = false;
    },
    checkListOverlayClick () {
      this.checkListShow = false;
    },
    groupChecked (arr) {
      this.checkList = arr;
    },
    inputClick (btn) {
      if (btn.type === 'cancel') {
        modal.toast({ message: '取消' });
      } else if (btn.type === 'confirm') {
        modal.toast({ message: '输入的是: ' + this.inputText });
      } else {
        modal.toast({ message: btn.text });
      }
      this.inputShow = false;
    },
    inputOverlayClick () {
      this.inputShow = false;
    },
    inputing (e) {
      this.inputText = e.value;
    }
  }
};
</script>
