<!-- CopyRight (C) 2018-2022 FlymeApps Team Holding Limited. -->
<!-- Created by Yanjiie on 2018/03/13. -->
<template>
  <div class="fm-footer--wrap">
    <div class="fm-footer" :style="footerStyle">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
  .fm-footer--wrap {
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

  .fm-footer {
    flex-direction: row;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    justify-content: space-between;
    align-items: center;
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
  },
  computed: {
    footerStyle() {
      let style = { backgroundColor: this.backgroundColor };
      let typeStyle;
      switch (this.paddingSize) {
        case 'small':
          typeStyle = {
            'padding': '0 48px',
            'justify-content': 'space-between'
          }
          break;
        case 'middle':
          typeStyle = {
            'padding': '0 90px',
            'justify-content': 'space-between'
          }
          break;
        case 'large':
          typeStyle = {
            'padding': '0 111px',
            'justify-content': 'space-between'
          }
          break;
        default:
          typeStyle = {
            'justify-content': 'center'
          }
      }
      return Object.assign({}, style, typeStyle);
    }
  }
};
</script>
