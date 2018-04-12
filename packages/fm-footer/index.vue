<!-- CopyRight (C) 2018-2022 FlymeApps Group Holding Limited. -->
<!-- Created by Yanjiie on 2018/03/13. -->
<template>
  <div class="fm-footer" :class="['fm-footer-' + paddingSize]" :style="{ backgroundColor: backgroundColor }">
    <slot></slot>
  </div>
</template>

<style scoped>
  .fm-footer {
    flex-direction: row;
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    height: 144px;
    justify-content: space-between;
    align-items: center;
    border-top-width: 2px;
    border-top-color: rgba(0, 0, 0, 0.1);
  }

  .fm-footer- {
    justify-content: center;
  }

  .fm-footer-small {
    padding: 0 48px;
  }

  .fm-footer-middle {
    padding:  0px 90px
  }

  .fm-footer-large {
    padding: 0 111px;
  }
</style>

<script>
export default {
  name: 'FmFooter',
  props: {
    paddingSize: {
      type: String,
      default: ''
    },
    backgroundColor: {
      type: String,
      default: '#FFFFFF'
    }
  }
};
</script>
