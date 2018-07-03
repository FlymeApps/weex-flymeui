<!-- CopyRight (C) 2018-2022 FlymeApps Team Holding Limited. -->
<!-- Created by Yanjiie on 2018/03/13. -->
<template>
  <fm-footer :backgroundColor="backgroundColor">
    <template v-for="(item, index) in items">
      <div class="button-wrap"
           :key="index"
           @click="onClick(index)">
        <text class="button-title" :style="item.color && { color: item.color }">{{ item.title }}</text>
      </div>
      <template v-if="items.length >= 2 && index != items.length - 1">
        <div class="border" :key="index"></div>
      </template>
    </template>
  </fm-footer>
</template>

<style scoped>
  .button-wrap {
    flex: 1;
    height: 144px;
    align-items: center;
    justify-content: center;
  }

  .border {
    width: 2px;
    height: 72px;
    background-color: rgba(0, 0, 0, 0.1);
  }

  .button-wrap:active {
    background-color: rgba(0, 0, 0, 0.04);
  }

  .button-title {
    font-size: 48px;
    color: #198DED;
    font-weight: 500;
    font-family: sans-serif-medium;
  }
</style>

<script>
import FmFooter from '../fm-footer';
export default {
  name: 'FmTextbar',
  components: { FmFooter },
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
  methods: {
    onClick (index) {
      this.$emit('fmTextbarBtnClicked', { index });
    }
  }
};
</script>
