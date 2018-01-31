<template>
  <div class="container" v-if="self_show">
      <fm-overlay v-if="self_show"
                  :hasAnimation="true"
                  :canAutoClose="false"
                  @fmOverlayBodyClicked="overlayClicked"
                  ref="fm-overlay"></fm-overlay>
      <div class="dialog-box"
           ref="dialog-box"
           v-if="self_show"
           :style="dialogStyle">
        <div class="dialog-content">
          <slot name="title">
            <fm-text class="content-title" medium title>{{ title }}</fm-text>
          </slot>
          <slot name="content">
            <fm-text class="content-subtext">{{ content }}</fm-text>
          </slot>
        </div>
        <div class="dialog-footer" :style="btnStyle">
          <slot name="btn-group">
            <fm-simple-btn v-for="(btn, index) in dialogBtns" scene="dialog" :text="btn.text" :type="btn.type" :msg="btn" @click="btnClick" :key="index"></fm-simple-btn>
          </slot>
        </div>
      </div>
  </div>
</template>

<style scoped>
  .container {
    position: fixed;
    width: 1080px;
    /*兼容H5异常*/
    z-index: 99999;
  }
  
  .dialog-box {
    position: fixed;
    left: 72px;
    width: 936px;
    background-color: #FFFFFF;
    border-radius: 8px;
    box-shadow: rgba(0,0,0, .3) 0 0 20px;
  }

  .content-title {
    margin-top: 63px;
    padding-left: 72px;
    padding-right: 72px;
    margin-bottom: 18px;
  }

  .content-subtext {
    padding-left: 72px;
    padding-right: 72px;
  }

  .dialog-footer {
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 36px 0;
  }

</style>

<script>
const animation = weex.requireModule('animation')
const type_alert = 'alert'
const type_confirm = 'confirm'
import FmOverlay from '../fm-overlay'
import FmText from '../fm-text'
import FmSimpleBtn from '../fm-simple-btn'
import Locale from '@flyme/weex-flymeui/lib/mixins/locale'
import { t } from '@flyme/weex-flymeui/lib/locale'

export default {
  mixins: [Locale],
  components: { FmOverlay, FmText, FmSimpleBtn },
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
    cancelText: {
      type: String,
      default() {
        return t('el.common.cancel')
      }
    },
    confirmText: {
      type: String,
      default() {
        return t('el.common.confirm')
      }
    },
    mainBtnColor: {
      type: String,
      default: '#EE9900'
    },
    secondBtnColor: {
      type: String,
      default: '#666666'
    },
    hasAnimation: {
      type: Boolean,
      default: true
    },
    duration: {
      type: [Number, String],
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
      default: []
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
    }
  },
  data: () => ({
    pageHeight: 1334,
    self_show: false
  }),
  created () {
    const { env: { deviceHeight, deviceWidth } } = weex.config
    this.pageHeight = deviceHeight / deviceWidth * 1080
    this.self_show = this.show
  },
  watch: {
    show: function(val, oldVal) {
      if (val) {
        this.self_show = true
        setTimeout(() => {
          this.appearDialog(true)
        }, 50);
      } else {
        this.$refs['fm-overlay'].hide()
        this.appearDialog(false)
      }
    }
  },
  computed: {
    dialogBtns() {
      let btns = []
      if (!this.btns || !this.btns.length) {
        if (this.type === type_alert) {
          btns =   [{
            text: this.confirmText,
            type: 'confirm'
          }]
        } else if (this.type === type_confirm) {
          btns =   [{
            text: this.cancelText,
            type: 'cancel'
          }, {
            text: this.confirmText,
            type: 'confirm'
          }]
        }
      } else {
        btns = btns.concat(this.btns)
      }
      return btns
    },
    dialogStyle() {
      return {
        opacity: this.hasAnimation && this.self_show ? 0 : 1,
        top: this.top
      }
    },
    btnStyle() {
      const { btnDirection, btns } = this
      return {
        flexDirection: btns.length > 2 ? 'column' : btnDirection
      }
    }
  },
  methods: {
    handleTouchEnd (e) {
      const { platform } = weex.config.env
      platform === 'Web' && e.preventDefault && e.preventDefault()
    },
    overlayClicked() {
      this.canAutoClose && (this.appearDialog(false) || this.$emit('fmDialogOverlayClicked', {}))
      this.cancelCb && this.cancelCb()
    },
    btnClick(btn) {
      if (btn.type && btn.type === 'cancel') {
        this.$emit('fmDialogBtnClicked', { type: 'cancel' })
        this.cancelCb && this.cancelCb()
      } else if (btn.type && btn.type === 'confirm') {
        this.$emit('fmDialogBtnClicked', { type: 'confirm' })
        this.confirmCb && this.confirmCb()
      } else {
        this.$emit('fmDialogBtnClicked', btn)
      }
    },
    appearDialog (bool, duration = this.duration) {
      const { hasAnimation, timingFunction } = this;
      const dialogEl = this.$refs['dialog-box']
      if (hasAnimation && dialogEl) {
        animation.transition(dialogEl, {
          styles: {
            opacity: bool ? 1 : 0
          },
          duration,
          timingFunction: timingFunction[bool ? 0 : 1],
          delay: 0
        }, () => {
          this.self_show = bool
        });
      } else {
        this.self_show = bool
      }
    }
  }
}
</script>