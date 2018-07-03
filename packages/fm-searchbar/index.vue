<!-- CopyRight (C) 2018-2022 FlymeApps Team Holding Limited. -->
<!-- Created by Yanjiie on 18/02/26-->
<template>
  <div v-if="show">
    <div class="fm-status-bar" v-if="statusbar" :style="{ backgroundColor: backgroundColor }"></div>
    <div class="fm-search-bar" :style="barStyle">
      <slot name="left" v-if="hasPrev">
        <fm-icon @fmIconClicked="onBack" class="search-bar-back" name="fanhui" :icon-style="72" :color="leftColor"/>
      </slot>
        <div class="search-input-wrap" :style="inputBackground ? { backgroundColor: inputBackground} : {}">
          <fm-icon class="search-bar-icon" name="sousuo" :icon-style="42" :color="iconColor" />
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
          <fm-icon :style="{ opacity: delShow ? 1 : 0 }" class="search-bar-delete" name="guanbi" :icon-style="48" color="#FFFFFF" @fmIconClicked="delClick" />
          <div :style="{ opacity: !delShow ? 1 : 0 }" class="right-btn">
            <slot name="input-right"></slot>
          </div>
        </div>
      <slot name="right">
        <text v-if="searchText" class="search-enter" @click="onSearch" :style="searchTextStyle">{{ searchText }}</text>
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
    padding: 0 48px;
    background-color: #ffffff;
    width: 1080px;
    height: 144px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom-style: solid;
    border-bottom-width: 2px;
    border-bottom-color: rgba(0, 0, 0, 0.1);
  }

  .search-input-wrap {
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-left: 35px;
    height: 90px;
    background-color: rgba(0, 0, 0, 0.05);
    outline: none;
    border-radius: 45px;
  }

  .search-bar-input {
    flex: 1;
    height: 90px;
    margin-left: 24px;
    margin-right: 9px;
    line-height: 90px;
    font-size: 42px;
    background-color: transparent;
    font-family: sans-serif-medium;
    font-weight: 500;
    color: #616161;
  }

  .search-bar-icon {
    line-height: 42px;
    height: 42px;
    font-weight: 700;
  }

  .search-bar-back {
		margin-left: -18px;
		margin-right: 30px;
    line-height: 72px;
    height: 72px;
    font-weight: 700;
  }

  .search-bar-delete {
    width: 60px;
    height: 60px;
    margin-right: 15px;
    font-weight: 700;
    padding: 6px 5px;
    background-color: rgba(77, 77, 77, 0.5);
    border-radius: 30px;
  }

  .search-enter {
    font-family: sans-serif-medium;
    font-weight: 500;
    font-size: 48px;
    line-height: 96px;
    margin-left: 48px;
    color: rgba(0, 0, 0, 0.4);
    text-align: center;
  }

  .right-btn {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 24px;
    justify-content: center;
  }
</style>

<script>
import FmIcon from '../fm-icon';
import Locale from 'weex-flymeui/lib/mixins/locale';
import { t } from 'weex-flymeui/lib/locale';
const Navigator = weex.requireModule('navigator');

export default {
  name: 'FmSearchbar',
  mixins: [Locale],
  components: { FmIcon },
  props: {
    statusbar: {
      type: Boolean,
      default: false
    },
    inputValue: {
      type: [String, Number],
      default: ''
    },
    useDefaultReturn: {
      type: Boolean,
      default: true
    },
    hasPrev: {
      type: Boolean,
      default: true
    },
    backgroundColor: {
      type: String,
      default: '#FFFFFF'
    },
    iconColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0.4)'
    },
    leftColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0.6)'
    },
    inputBackground: String,
    borderStyle: {
      type: Object,
      default: () => ({})
    },
    placeholder: String,
    autofocus: Boolean,
    disabled: Boolean,
    inputType: {
      type: String,
      default: 'text'
    },
    searchText: {
      type: String,
      default () {
        return t('el.searchbar.search');
      }
    },
    searchColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0.4)'
    },
    searchHighlightColor: {
      type: String,
      default: '#198DED'
    },
    searchTextSize: {
      type: Number,
      default: 48
    },
    returnKeyType: {
      type: String,
      default: 'search'
    },
    placeholderColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0.4)'
    },
    inputColor: {
      type: String,
      default: '#616161'
    },
    show: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    inputValue (val) {
      this.value = val;
    }
  },
  data: () => ({
    isFocus: false,
    value: ''
  }),
  computed: {
    delShow () {
      return this.isFocus && this.value;
    },
    barStyle () {
      const style = {
        borderBottomStyle: 'solid',
        borderBottomWidth: 2 + 'px',
        borderBottomColor: 'rgba(0, 0, 0, 0.1)'
      };
      Object.assign(style, this.borderStyle);
      style.backgroundColor = this.backgroundColor;
      return style;
    },
    searchTextStyle () {
      const { value, searchColor, searchHighlightColor, searchTextSize } = this;
      return {
        color: value ? searchHighlightColor : searchColor,
        fontSize: searchTextSize + 'px'
      };
    }
  },
  methods: {
    onBack (e) {
      const self = this;
      if (self.useDefaultReturn) {
        Navigator.pop({}, e => {
        });
      }
      self.$emit('fmSearchbarleftBtnClicked', {});
    },
    delClick (e) {
      this.value = '';
    },
    onInput (e) {
      this.value = e.value;
      this.$emit('input', e);
    },
    onFocus (e) {
      this.isFocus = true;
      this.$emit('focus', e);
    },
    onBlur (e) {
      this.isFocus = false;
      this.$emit('blur', e);
    },
    focus () {
      this.$refs.input.focus();
    },
    blur () {
      this.$refs.input.blur();
    },
    onSubmit (e) {
      this.$emit('fmSearchbarSubmit', { value: this.value });
    },
    onSearch (e) {
      this.$emit('fmSearchbarSubmit', { value: this.value });
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
  },
  mounted () {
    this.value = this.inputValue || '';
  }
};
</script>
