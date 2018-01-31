<template>
  <div>
    <div class="fm-status-bar"></div>
    <div class="fm-search-bar">
      <slot name="left">
        <fm-icon @click="onBack" class="search-bar-back" value="&#xe6b5;" icon-style="24" />
      </slot>
        <div class="search-input-wrap">
          <fm-icon class="search-bar-icon" value="&#xe6d4;" icon-style="14" color="#919191" />
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
                :style="{color: inputColor, 'placeholder-color': placeholderColor}"
                class="search-bar-input"/>
          <fm-icon v-if="delShow" class="search-bar-delete" value="&#xe6c0;" icon-style="16" color="#FFFFFF" @fmClick="delClick" />
        </div>
      <slot name="right">
        <text class="search-enter" @click="onSearch" :style="searchBtnStyle">{{ searchBtnText }}</text>
      </slot>
    </div> 
  </div> 
</template>

<style scoped>
  .fm-status-bar {
    height: 22px;
    width: 360px;
    background-color: #ffffff;
  }

  .fm-search-bar {
    padding-left: 17px;
    background-color: #ffffff;
    width: 360px;
    height: 44px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom-style: solid;
    border-bottom-width: 0.6px;
    border-bottom-color: rgba(0, 0, 0, 0.1);
  }

  .search-input-wrap {
    position: absolute;
    flex-direction: row;
    align-items: center;
    top: 7px;
    left: 55px;
    right: 76px;
    padding: 0 5px 0 8px;
    height: 30px;
    background-color: #f2f2f2;
    outline: none;
    border-radius: 15px;
  }

  .search-bar-input {
    width: 176px;
    height: 30px;
    margin-left: 3px;
    margin-right: 3px;
    line-height: 30px;
    font-size: 14px;
    background-color: transparent;
    font-family: sans-serif-medium;
    font-weight: 500;
    color: #919191;
  }

  .search-bar-icon {
    line-height: 14px;
    height: 14px;
    font-weight: 700;
  }

  .search-bar-back {
    line-height: 24px;
    height: 24px;
    font-weight: 700;
  }

  .search-bar-delete {
    width: 20px;
    height: 20px;
    font-weight: 700;
    padding: 2;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }

  .search-enter {
    font-family: sans-serif-medium;
    font-weight: 500;
    font-size: 16px;
    line-height: 32px;
    color: rgba(0, 0, 0, 0.6);
    width: 76px;
    text-align: center;
  }
</style>

<script>
  import FmIcon from './fm-icon.vue'
  export default {
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
        default: '搜索'
      },
      searchBtnStyle: {
        type: Object,
        default: () => ({})
      },
      returnKeyType: {
        type: String,
        default: 'default'
      },
      placeholderColor: {
        type: String,
        default: '#999999'
      },
      inputColor: {
        type: String,
        default: '#999999'
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
