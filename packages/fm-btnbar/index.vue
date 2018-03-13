<!-- Created by Yanjiie on 2018/03/13. -->
<template>
  <div class="fm-btnbar" :style="{ backgroundColor: backgroundColor }">
    <fm-btnbar-item class="tabbar-item"
                    v-if="!$slots.default"
                    v-for="(item, index) in items"
                    :key="index"
                    v-bind="Object.assign({}, item)"></fm-btnbar-item>
    <slot />
  </div>
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
import FmBtnbarItem from '../fm-btnbar-item';
export default {
  name: 'FmBtnbar',
  components: { FmBtnbarItem },
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
    renderItems: []
  }),
  watch: {
    renderItems (val) {
      val.forEach((item, index) => {
        item.width = val.length > 1 ? 396 : 720;
      });
    }
  },
  methods: {
    btnClicked (index) {
      this.$emit('fmBtnbarBtnClicked', { index });
    }
  }
};
</script>
