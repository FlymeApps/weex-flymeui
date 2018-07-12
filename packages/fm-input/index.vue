<!-- CopyRight (C) 2018-2022 FlymeApps Team Holding Limited. -->
<!-- Created and Update by Yanjiie on 2018/04/12. -->
<template>
  <div class="fm-wrapper">
    <input
      :type="type"
      class="fm-input"
      :style="inputStyle"
      :value="value"
      :maxlength="maxlength"
      :placeholder="placeholder"
      :autofocus="autofocus"
      :disabled="disabled"
      :return-key-type="returnKeyType"
      :nightMode="nightMode"
      @input="input"
      @change="change"
      @focus="beFocus"
      @blur="beBlur"
      ref="input" />
    <fm-icon v-if="delShow" class="delete" name="guanbi" :icon-style="38" color="#fff" @fmIconClicked="delClick" />
    <fm-icon v-if="visibleShow" class="visible" :name="visibleValue" :icon-style="72" color="#666" @fmIconClicked="toggleVisible" />
    <text v-if="hasError && autoError" class="error-msg">{{inputErrorMessage}}</text>
  </div>
</template>

<style scoped>
  .fm-wrapper {
    padding-top: 72px;
    padding-right: 48px;
    padding-left: 48px;
  }

  .fm-input {
    padding-bottom: 17px;
    border-bottom-style: solid;
    border-bottom-width: 3px;
    border-bottom-color: #e6e6e6;
    font-size: 48px;
    height: 85px;
    color: #000000;
    placeholder-color: #dddddd;
  }

  .fm-input-wrap {
    position: relative;
  }

  .delete {
    position: absolute;
    bottom: 30px;
    right: 72px;
    width: 50px;
    height: 50px;
    padding-top: 7px;
    padding-left: 6px;
    background-color:  rgba(77, 77, 77, 0.50);
    border-radius: 30px;
    font-weight: 700;
  }

  .visible {
    position: absolute;
    top: 63px;
    right: 72px;
    width: 72px;
    height: 72px;
  }

  .error-msg {
    font-size: 36px;
    color: #df2b18;
    margin-left: 24px;
  }
</style>

<script>
import Locale from 'weex-flymeui/lib/mixins/locale';
import { t } from 'weex-flymeui/lib/locale';
import STYLE from 'weex-flymeui/lib/theme/default/index.js';
import FmIcon from '../fm-icon';

export default {
  name: 'FmInput',
  mixins: [Locale],
  components: { FmIcon },
  mounted () {
    if (this.type === 'password') {
      this.pwdModel = true;
    }
    this.value = this.defaultValue || '';
  },
  data () {
    return {
      value: '',
      rows: 1,
      isFocus: false,
      pwdModel: false,
      pwdVisible: false
    };
  },
  watch: {
    defaultValue (val) {
      this.value = val;
    }
  },
  props: {
    defaultValue: {
      type: [String, Number],
      default: ''
    },
    placeholder: {
      type: String,
      default () {
        return t('el.input.placeholder');
      }
    },
    autoError: {
      type: Boolean,
      default: true
    },
    maxlength: [String, Number],
    inputPattern: RegExp,
    inputErrorMessage: {
      type: String,
      default: '输入有误'
    },
    type: String,
    autofocus: {
      type: Boolean,
      default: false
    },
    disabled: Boolean,
    returnKeyType: {
      type: String,
      default: 'default'
    },
    nightMode: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    visibleValue () {
      return this.type === 'password' ? 'chakan' : 'yinbi';
    },
    inputStyle () {
      const style = { paddingRight: 0 };
      style.borderBottomColor = (!this.hasError || !this.autoError) ? this.isFocus ? STYLE.primaryColor : '#e6e6e6' : '#df2b18';
      style.caretColor = STYLE.primaryColor;
      if (this.delShow || this.visibleShow) {
        style.paddingRight = 108 + 'px';
      }
      return style;
    },
    delShow () {
      return !this.pwdModel && this.isFocus && this.value;
    },
    visibleShow () {
      return this.isFocus && this.pwdModel;
    },
    hasError () {
      const { inputPattern, value } = this;
      if (inputPattern) {
        if (!value.match(inputPattern)) {
          return true;
        }
        return false;
      }
      return false;
    }
  },
  methods: {
    delClick (e) {
      this.value = '';
    },
    toggleVisible (e) {
      if (this.$refs.input.setType) {
        this.pwdVisible
          ? this.$refs.input.setType('password')
          : this.$refs.input.setType('visible');
        this.pwdVisible = !this.pwdVisible;
      } else {
        if (this.type === 'password') {
          this.type = 'text';
        } else {
          this.type = 'password';
        }
      }
    },
    input (evt) {
      this.value = evt.value;
      this.$emit('input', evt);
    },
    change (evt) {
      this.$emit('change', evt);
    },
    beFocus (evt) {
      this.isFocus = true;
      this.$emit('focus', evt);
    },
    beBlur (evt) {
      this.isFocus = false;
      this.$emit('blur', evt);
    },
    focus () {
      this.$refs.input.focus();
    },
    blur () {
      this.$refs.input.blur();
    },
    setSelectionRange (start, end) {
      this.$refs.input.setSelectionRange(start, end);
    },
    getEditSelectionRange (callback) {
      this.$refs.input.getEditSelectionRange(callback);
    },
    setValue (value) {
      this.value = value;
    }
  }
};
</script>
