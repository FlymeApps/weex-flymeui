<!-- CopyRight (C) 2018-2022 FlymeApps Group Holding Limited. -->
<!-- Created by Yanjiie on 2018/03/12. -->
<template>
  <fm-footer class="fm-tabbar" :background-color="backgroundColor" padding-size="middle">
    <fm-tabbar-item class="tabbar-item"
                    v-if="!$slots.default"
                    v-for="(item, index) in items"
                    :key="index"
                    v-bind="Object.assign({}, customStyles, item)"></fm-tabbar-item>
    <slot />
  </fm-footer>
</template>

<style scoped>
  .tabbar-item {
    flex: 1;
  }
</style>

<script>
import FmFooter from '../fm-footer';
import FmTabbarItem from '../fm-tabbar-item';
export default {
  name: 'FmTabbar',
  components: { FmFooter, FmTabbarItem },
  props: {
    activeIndex: {
      type: Number,
      default: -1
    },
    autoActive: {
      type: Boolean,
      default: true
    },
    items: {
      type: Array,
      default: () => ([])
    },
    backgroundColor: {
      type: String,
      default: '#FFFFFF'
    },
    customStyles: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    renderItems: []
  }),
  watch: {
    renderItems () {
      this.setActiveItem();
    },
    activeIndex (newVal, oldVal) {
      if (newVal === oldVal) { return; }
      this.setActiveItem(newVal);
    }
  },
  methods: {
    setActiveItem (idx = this.activeIndex) {
      this.renderItems.forEach((item, index) => {
        item.active = index === idx;
      });
    },
    onChange (index) {
      this.autoActive && this.setActiveItem(index);
      this.$emit('fmTabbarSelected', { index });
    }
  }
};
</script>
