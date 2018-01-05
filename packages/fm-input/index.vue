<template>
  <div class="fm-wrapper">
    <textarea v-if="type === 'textarea'"
      :class="inputClz"
      :value="value"
      :rows="rows"
      :maxlength="maxlength"
      :placeholder="placeholder"
      @input="input"
      @change="change"
      @focus="beFocus"
      @blur="beBlur"
      ref="input" />
    <input v-else
      :type="type"
      :class="inputClz" 
      :style="inputStyle"
      :value="value"
      :maxlength="maxlength" 
      :placeholder="placeholder"
      :autofocus="autofocus"
      :disabled="disabled"
      :return-key-type="returnKeyType"
      @input="input"
      @change="change"
      @focus="beFocus"
      @blur="beBlur"
      ref="input" />
    <fm-icon v-if="delShow" class="delete" value="&#xe6c0;" icon-style="48" color="#fff" @fmClick="delClick" />
    <fm-icon v-if="visibleShow" class="visible" :value="visibleValue" icon-style="72" color="#666" @fmClick="toggleVisible" />
    <text v-if="hasError" class="error-msg">{{inputErrorMessage}}</text>
  </div>
</template>

<style lang="css" src="../../lib/theme-paint/lib/input.css" scoped>
</style>

<script>
import FmIcon from '../fm-icon'
import Locale from '@flyme/weex-flymeui/lib/mixins/locale'
import { t } from '@flyme/weex-flymeui/lib/locale'

export default {
  mixins: [Locale],
  components: { FmIcon },

  mounted() {
    if (this.type === 'password') {
      this.pwdModel = true
    }
  },

  data() {
    return {
      rows: 1,
      focus: false,
      pwdModel: false,
      pwdVisible: false
    }
  },

  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    placeholder: {
      type: String,
      default() {
        return t('el.input.placeholder')
      }
    },
    maxlength: [String, Number],
    inputPattern: RegExp,
    inputErrorMessage: {
      type: String,
      default() {
        return t('el.input.inputError')
      }
    },
    type: String,
    autofocus: Boolean,
    disabled: Boolean,
    returnKeyType: {
      type: String,
      default: 'default'
    }
  },

  computed: {
    visibleValue() {
      return this.type === 'password' ? '&#xe6a9;' : '&#xe6e8;'
    },
    inputClz() {
      let clz = ['fm-textarea']
      if (this.hasError) {
        clz.push('fm-textarea-error')
      }
      return clz
    },
    inputStyle() {
      let style = { paddingRight: 24 }
      if (this.delShow || this.visibleShow) {
        style.paddingRight = 108
      }
      return style
    },
    delShow() {
      return !this.pwdModel && this.focus && this.value
    },
    visibleShow() {
      return this.focus && this.pwdModel
    },
    hasError() {
      const { inputPattern, value } = this
      if (inputPattern) {
        if (!value.match(inputPattern)) {
          return true
        }
        return false
      }
      return false
    }
  },

  methods: {
    delClick(e) {
      this.value = ''
    },
    toggleVisible(e) {
      this.pwdVisible
        ? this.$refs.input.setType('password')
        : this.$refs.input.setType('visible')
      this.pwdVisible = !this.pwdVisible
      // if (this.type === 'password') {
      // 	this.type = 'text'
      // } else {
      // 	this.type = 'password'
      // }
    },
    input(evt) {
      this.value = evt.value
      this.$emit('input', evt)
    },
    change(evt) {
      this.$emit('change', evt)
    },
    beFocus(evt) {
      this.focus = true
      this.$emit('focus', evt)
    },
    beBlur(evt) {
      this.focus = false
      this.$emit('blur', evt)
    },
    focus() {
      this.$refs.input.focus()
    },
    blur() {
      this.$refs.input.blur()
    },
    setSelectionRange(start, end) {
      this.$refs.input.setSelectionRange(start, end)
    },
    getEditSelectionRange(callback) {
      this.$refs.input.getEditSelectionRange(callback)
    }
  }
}
</script>