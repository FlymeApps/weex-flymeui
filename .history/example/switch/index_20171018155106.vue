<template>
  <div class="mzui-demo">
    <scroller class="scroller">
      <title title="fm-switch"></title>
      <category title="基本样式"></category>
      <div class="button-list">
        <text class="button-text">taobao</text>
      </div>
    </scroller>
  </div>
</template>

<style scoped>
  .wxc-demo {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #fff;
  }

  .button-list {
    padding-left: 24px;
  }

  .button-text {
    margin-top: 40px;
    margin-left: 8px;
    margin-bottom: 16px;
  }

  .scroller {
    flex: 1;
  }

  .demo {
    align-items: center;
    margin-top: 40px;
    margin-bottom: 40px;
  }

  .input {
    width: 500px;
    text-align: right;
    font-size: 28px;
  }
</style>

<script>
  import { WxcButton, WxcCell } from '../../index';
  import Title from '../_mods/title.vue';
  import Category from '../_mods/category.vue';
  import { setTitle } from '../_mods/set-nav';

  const modal = weex.requireModule('modal');
  export default {
    components: { Title, Category, WxcButton, WxcCell },
    data: () => ({
      type: 'taobao',
      text: '按钮文字',
      width: '702px',
      height: '88px',
      disabled: false,
      backgroundColor: '#FF5000',
      borderColor: '#FF5000',
      borderRadius: '12px',
      fontSize: '36px',
      color: '#FFFFFF'
    }),
    computed: {
      btnStyle () {
        const { width, height, backgroundColor, borderColor, borderRadius } = this;
        const customStyle = {};

        if (width) {
          customStyle.width = width;
        }

        if (height) {
          customStyle.height = height;
          customStyle.lineHeight = height;
        }

        if (backgroundColor) {
          customStyle.backgroundColor = backgroundColor;
        }

        if (borderColor) {
          customStyle.borderColor = borderColor;
          customStyle.borderWidth = '1px';
          customStyle.borderStyle = 'solid';
        }

        if (borderRadius) {
          customStyle.borderRadius = borderRadius;
        }
        return customStyle;
      },
      textStyle () {
        const { fontSize, color } = this;
        const customStyle = {};
        if (fontSize) {
          customStyle.fontSize = fontSize;
        }
        if (color) {
          customStyle.color = color;
        }
        return {
          fontSize, color
        }
      }
    },
    created () {
      setTitle('Button');
    },
    methods: {
      wxcButtonClicked (e) {
        const { type, disabled } = e;
        modal.toast({
          message: disabled ? `disabled=${disabled}` : `type=${type}`
        })
      }
    }
  }
</script>
