<!-- CopyRight (C) 2018-2022 FlymeApps Group Holding Limited. -->
<!-- Created and Update by Yanjiie on 2018/03/14. [!] Just a beta version! -->
<template>
  <component class="container"
             :is="isCreator ? 'FmOverlayNative' : 'div'"
             :visible="self_show"
             @onDismiss="overlayClicked"
             :touchable='canAutoClose'>
      <fm-overlay v-if="self_show && !isCreator"
                  :hasAnimation="true"
                  :canAutoClose="false"
                  :opacity="overlayOpacity"
                  @fmOverlayBodyClicked="overlayClicked"
                  ref="fm-overlay"></fm-overlay>
      <div class="dialog-box"
           :class="!isCreator && ['dialog-box-H5']"
           ref="dialog-box"
           v-if="self_show || isCreator"
           :style="dialogStyle"
           @touchend="handleTouchEnd">
        <div class="dialog-content">
          <slot name="title">
            <template v-if="contentType === 'select'">
              <fm-text class="content-title--input" :style="titleStyles" :value="title"></fm-text>
            </template>
            <fm-text v-else class="content-title" font-weight="medium" size="large" :style="titleStyles" :value="title"></fm-text>
          </slot>
            <slot name="content">
              <!-- Normal Dialog -->
              <template v-if="contentType === 'alert' || type === 'confirm'">
                <fm-text class="content-subtext" :style="contentStyles" :value="content"></fm-text>
              </template>
              <!-- Input Dialog -->
              <template v-if="contentType === 'input'">
                <fm-input class="input" ref="inputEl" :default-value="inputText" type="text" :placeholder="placeholder" :autofocus="true" @input="inputing" />
              </template>
              <!-- Select Dialog -->
              <template v-if="contentType === 'select'">
                <fm-checkbox-list
                  ref="selectEl"
                  :list="selectDataIn"
                  :single="selectModel === 'single'"
                  :limit="selectLimit"
                  :last-border-hidden="selectModel === 'single'"
                  @fmCheckBoxListChecked="onSelect" />
              </template>
            </slot>
        </div>
        <div class="dialog-footer" :style="btnStyle" v-if="contentType !== 'select' || selectModel !== 'single'">
          <slot name="btn-group">
            <fm-simple-btn v-for="(btn, index) in dialogBtns" scene="dialog" v-bind="btn" @click="btnClick" :key="index"></fm-simple-btn>
          </slot>
        </div>
      </div>
  </component>
</template>

<style scoped>
  .container {
    position: fixed;
    width: 1080px;
    /*兼容H5异常*/
    z-index: 99999;
  }

  .dialog-box {
    width: 936px;
    background-color: #FFFFFF;
    border-radius: 10px;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.3);
  }

  .dialog-box-H5 {
    position: fixed;
    left: 72px;
  }

  .content-title {
    margin-top: 63px;
    padding-left: 72px;
    padding-right: 72px;
    margin-bottom: 1.5px;
  }

  .content-title--input {
    margin-top: 48px;
    padding-left: 48px;
    padding-right: 48px;
    margin-bottom: 1.5px;
    font-family: sans-serif-medium;
    font-weight: 500;
  }

  .content-subtext {
    padding-left: 72px;
    padding-right: 72px;
  }

  .dialog-footer {
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 36px 72px;
  }

  .input {
    margin-top: -15px;
    margin-bottom: 24px;
    margin-left: 24px;
    margin-left: 24px;
  }
</style>

<script>
const animation = weex.requireModule('animation');
const type_alert = 'alert';
const type_confirm = 'confirm';
import FmOverlay from '../fm-overlay';
import FmText from '../fm-text';
import FmSimpleBtn from '../fm-simple-btn';
import FmInput from '../fm-input';
import FmCheckboxList from '../fm-checkbox-list';
import Locale from 'weex-flymeui/lib/mixins/locale';
import { t } from 'weex-flymeui/lib/locale';

export default {
  name: 'FmDialog',
  mixins: [Locale],
  components: {
    FmOverlay,
    FmText,
    FmSimpleBtn,
    FmInput,
    FmCheckboxList
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    top: {
      type: Number,
      default: 400
    },
    bodyStyles: {
      type: Object,
      default: () => ({})
    },
    titleStyles: {
      type: Object,
      default: () => ({})
    },
    contentStyles: {
      type: Object,
      default: () => ({})
    },
    cancelText: {
      type: String,
      default () {
        return t('el.common.cancel');
      }
    },
    confirmText: {
      type: String,
      default () {
        return t('el.common.confirm');
      }
    },
    confirmColor: {
      type: String,
      default: '#198DED'
    },
    cancelColor: {
      type: String,
      default: '#198DED'
    },
    hasAnimation: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 300
    },
    timingFunction: {
      type: Array,
      default: () => (['ease-out', 'ease-out'])
    },
    canAutoClose: {
      type: Boolean,
      default: true
    },
    btns: {
      type: Array,
      default: () => ([])
    },
    placeholder: {
      type: String,
      default: ''
    },
    inputDefaultText: {
      type: [String, Array],
      default: ''
    },
    selectData: {
      type: Array,
      default: () => ([])
    },
    selectModel: {
      type: String,
      default: 'single'
    },
    selectLimit: {
      type: Number,
      default: 0
    },
    btnDirection: {
      type: String,
      default: 'row'
    },
    cancelCb: Function,
    confirmCb: Function,
    type: {
      type: String,
      default: type_confirm
    },
    contentType: {
      type: String,
      default: type_confirm
    },
    overlayOpacity: {
      type: Number,
      default: 0.5
    }
  },
  data: () => ({
    pageHeight: 1334,
    self_show: false,
    dialogOpacity: 0,
    inputText: '',
    selectList: [],
    selectDataIn: []
  }),
  created () {
    const { env: { deviceHeight, deviceWidth }} = weex.config;
    this.pageHeight = deviceHeight / deviceWidth * 1080;
    this.self_show = this.show;
    this.inputText = this.inputDefaultText;
    this.selectDataIn = this.selectData;
  },
  watch: {
    show (val, oldVal) {
      if (val) {
        this.self_show = true;
        this.$nextTick(() => {
          this.$refs.inputEl && this.$refs.inputEl.focus();
          this.appearDialog(true);
        });
      } else {
        !this.isCreator && this.$refs['fm-overlay'].hide();
        this.$refs.selectEl && this.$refs.selectEl.reset(); // 重置选择
        this.selectList = [];
        this.appearDialog(false);
      }
    },
    inputDefaultText (val) {
      this.inputText = val;
    },
    selectData (val) {
      this.selectDataIn = val;
    }
  },
  computed: {
    isCreator () {
      return weex.supports && weex.supports('@component/FmOverlayNative');
    },
    dialogBtns () {
      let btns = [];
      if (!this.btns || !this.btns.length) {
        if (this.type === type_alert) {
          btns = [{
            text: this.confirmText,
            color: this.confirmColor,
            type: 'confirm'
          }];
        } else if (this.type === type_confirm) {
          btns = [{
            text: this.cancelText,
            color: this.cancelColor,
            type: 'cancel'
          }, {
            text: this.confirmText,
            color: this.confirmColor,
            type: 'confirm'
          }];
        }
      } else {
        btns = btns.concat(this.btns);
      }
      return btns;
    },
    dialogStyle () {
      return Object.assign({
        opacity: this.dialogOpacity,
        top: (!this.isCreator ? this.top : 0) + 'px'
      }, this.bodyStyles);
    },
    btnStyle () {
      const { btnDirection, btns } = this;
      return {
        flexDirection: btns.length > 2 ? 'column' : btnDirection
      };
    },
    eventMsg () {
      const { contentType } = this;
      const msg = {};
      if (contentType === 'input') {
        msg.inputValue = this.inputText;
      }
      if (contentType === 'select') {
        msg.selectList = this.selectList;
      }
      return msg;
    }
  },
  methods: {
    handleTouchEnd (e) {
      // 原生上有点击穿透问题
      e.preventDefault && e.preventDefault();
    },
    overlayClicked () {
      this.canAutoClose && (this.appearDialog(false) || this.$emit('fmDialogDisappeared', {}));
      this.cancelCb && this.cancelCb();
    },
    btnClick (btn) {
      const { eventMsg } = this;
      if (btn.type && btn.type === 'cancel') {
        this.$emit('fmDialogBtnClicked', { type: 'cancel' });
        this.cancelCb && this.cancelCb();
      } else if (btn.type && btn.type === 'confirm') {
        this.$emit('fmDialogBtnClicked', Object.assign({ type: 'confirm' }, eventMsg));
        this.confirmCb && this.confirmCb();
      } else {
        this.$emit('fmDialogBtnClicked', Object.assign(eventMsg, btn));
      }
    },
    appearDialog (bool, duration = this.duration) {
      const { hasAnimation, timingFunction, isCreator } = this;
      if (isCreator) {
        this.self_show = bool;
        this.dialogOpacity = bool ? 1 : 0;
        return;
      }
      const dialogEl = this.$refs['dialog-box'];
      this.dialogOpacity = bool ? 0 : 1;
      if (hasAnimation && dialogEl) {
        animation.transition(dialogEl, {
          styles: {
            opacity: bool ? 1 : 0
          },
          duration,
          timingFunction: timingFunction[bool ? 0 : 1],
          delay: 0
        }, () => {
          this.self_show = bool;
          this.dialogOpacity = bool ? 1 : 0;
        });
      } else {
        this.self_show = bool;
        this.dialogOpacity = bool ? 1 : 0;
      }
    },
    inputing (e) {
      this.inputText = e.value;
    },
    onSelect (e) {
      this.selectList = e.checkedList;
      if (this.selectModel === 'single') {
        this.$emit('fmDialogSingleSelected', { selectList: this.selectList });
      }
    }
  }
};
</script>
