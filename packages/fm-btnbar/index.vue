<!-- Created by Yanjiie on 2018/03/13. -->
<template>
  <fm-footer :padding-size="paddingSize" :backgroundColor="backgroundColor">
    <fm-button class="tabbar-item"
               @buttonClicked="btnClicked(index)"
               v-if="!$slots.default"
               v-for="(item, index) in items"
               v-bind="Object.assign({}, item)"
               :animated="true"
               :key="index"
               :size="buttonSize">{{ item.title }}</fm-button>
    <slot />
  </fm-footer>
</template>

<style scoped>
  .fm-btnbar {
    flex-direction: row;
    width: 1080px;
    height: 144px;
    align-items: center;
    justify-content: center;
    padding: 0 48px;
    border-top-width: 2px;
    border-top-color: rgba(0, 0, 0, 0.1);
  }
</style>

<script>
import FmFooter from '../fm-footer';
import FmButton from '../fm-button';
export default {
  name: 'FmBtnbar',
  components: { FmButton, FmFooter },
  props: {
    items: {
      type: Array,
      default: () => ([])
    },
    backgroundColor: {
      type: String,
      default: '#FFFFFF'
    }
  },
  data: () => ({
    paddingSize: '',
    buttonSize: ''
  }),
  watch: {
    items () {
      this.checkPadding();
    }
  },
  created () {
    this.checkPadding();
  },
  methods: {
    checkPadding () {
      if (this.items.length >= 2 || (this.$slots.default && this.$slots.default.length >= 2)) {
        this.paddingSize = 'large';
        this.buttonSize = 'large';
      } else {
        this.paddingSize = '';
        this.buttonSize = 'huge';
      }
    },
    btnClicked (index) {
      this.$emit('fmBtnbarBtnClicked', { index });
    }
  }
};
</script>
