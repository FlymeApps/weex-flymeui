<!-- CopyRight (C) 2018-2022 FlymeApps Team Holding Limited. -->
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
