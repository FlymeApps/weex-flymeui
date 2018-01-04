<template>
  <div>
    <div class="fm-status-bar"></div>
    <div class="fm-search-bar">
      <slot name="left">
        <fm-icon @click="onBack" class="search-bar-back" value="&#xe6b5;" icon-style="72" />
      </slot>
        <div class="search-input-wrap">
          <fm-icon class="search-bar-icon" value="&#xe6d4;" icon-style="42" color="#919191" />
          <input @blur="onBlur"
                @focus="onFocus"
                @input="onInput"
                @return="onSubmit"
                :autofocus="autofocus"
                :disabled="disabled"
                :value="value"
                ref="input"
                :type="inputType"
                :return-key-type="returnKeyType"
                :placeholder="placeholder"
                class="search-bar-input"/>
          <fm-icon v-if="delShow" class="search-bar-delete" value="&#xe6c0;" icon-style="48" color="#FFFFFF" @fmClick="delClick" />
        </div>
      <slot name="right">
        <text class="search-enter" @click="onSearch" :style="searchBtnStyle">{{ searchBtnText }}</text>
      </slot>
    </div> 
  </div> 
</template>

<style scoped>
  .fm-status-bar {
    height: 66px;
    width: 1080px;
    background-color: #ffffff;
  }

  .fm-search-bar {
    padding-left: 51px;
    background-color: #ffffff;
    width: 1080px;
    height: 132px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: rgba(0, 0, 0, 0.1);
  }

  .search-input-wrap {
    position: absolute;
    flex-direction: row;
    align-items: center;
    top: 21px;
    left: 165px;
    right: 228px;
    padding: 0 15px 0 24px;
    height: 90px;
    background-color: #f2f2f2;
    outline: none;
    border-radius: 45px;
  }

  .search-bar-input {
    width: 528px;
    height: 90px;
    margin-left: 9px;
    margin-right: 9px;
    line-height: 90px;
    font-size: 42px;
    background-color: transparent;
    font-family: sans-serif-medium;
    font-weight: 500;
    color: #919191;
  }

  .search-bar-icon {
    line-height: 42px;
    height: 42px;
    font-weight: 700;
  }

  .search-bar-back {
    line-height: 72px;
    height: 72px;
    font-weight: 700;
  }

  .search-bar-delete {
    width: 60px;
    height: 60px;
    font-weight: 700;
    padding: 6;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 30px;
  }

  .search-enter {
    font-family: sans-serif-medium;
    font-weight: 500;
    font-size: 48px;
    line-height: 96px;
    color: rgba(0, 0, 0, 0.6);
    width: 228px;
    text-align: center;
  }
</style>

<script>
  import FmIcon from '../fm-icon'
  import Locale from '../../src/mixins/locale'
  import { t } from '../../src/locale'

  export default {
    mixins: [Locale],
    components: { FmIcon },
    props: {
      value: {
        type: [String, Number],
        default: ''
      },
      placeholder: String,
      autofocus: Boolean,
      disabled: Boolean,
      inputType: {
        type: String,
        default: 'text'
      },
      searchBtnText: {
        type: String,
        default() {
          return t('el.searchbar.search');
        }
      },
      searchBtnStyle: {
        type: Object,
        default: () => ({})
      },
      returnKeyType: {
        type: String,
        default: 'default'
      }
    },
    data: () => ({
      focus: false
    }),
    computed: {
      delShow() {
        return this.focus && this.value
      }
    },
    methods: {
      onBack(e) {
        this.$emit('back', e)
      },
      delClick(e) {
        this.value = ''
      },
      onInput(e) {
        this.value = e.value
        this.$emit('input', e)
      },
      onFocus(e) {
        this.focus = true
        this.$emit('focus', e)
      },
      onBlur(e) {
        this.focus = false
        this.$emit('blur', e)
      },
      focus() {
        this.$refs.input.focus()
      },
      blur() {
        this.$refs.input.blur()
      },
      onSubmit(e) {
        this.$emit('submit', { value: this.value })
      },
      onSearch(e) {
        this.$emit('submit', { value: this.value })
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
