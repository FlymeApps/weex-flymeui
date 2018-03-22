<template>
  <div class="mzui-demo">
    <scroller class="scroller">
      <title link="https://yanjiie.github.io/weex-flymeui/#/packages/fm-text/"></title>
      <category title="基本样式"></category>
        <div class="container">
            <FmText class="text" value="nomal基本样式" />
            <FmText class="text" font-weight="medium" value="medium样式"/>
            <FmText class="text" font-weight="bold" value="bold样式"/>
            <FmText class="text" font-weight="light" value="light样式"/>
            <FmText class="text customStyle" value="自定义样式"/>
        </div>
      <category title="小号段落"></category>
        <div class="container">
            <FmText size="small" value="Weex 是一套简单易用的跨平台开发方案，能以 web 的开发体验构建高性能、可扩展的 native 应用，为了做到这些，Weex 与 Vue 合作，使用 Vue 作为上层框架，并遵循 W3C 标准实现了统一的 JSEngine 和 DOM API，这样一来，你甚至可以使用其他框架驱动 Weex，打造三端一致的 native 应用。" />
        </div>
      <category title="大号段落"></category>
        <div class="container">
            <FmText size="large" value="Weex 是一套简单易用的跨平台开发方案，能以 web 的开发体验构建高性能、可扩展的 native 应用，为了做到这些，Weex 与 Vue 合作，使用 Vue 作为上层框架，并遵循 W3C 标准实现了统一的 JSEngine 和 DOM API，这样一来，你甚至可以使用其他框架驱动 Weex，打造三端一致的 native 应用。" />
        </div>
      <category title="超大号段落"></category>
        <div class="container">
            <FmText size="huge" value="Weex 是一套简单易用的跨平台开发方案，能以 web 的开发体验构建高性能、可扩展的 native 应用，为了做到这些，Weex 与 Vue 合作，使用 Vue 作为上层框架，并遵循 W3C 标准实现了统一的 JSEngine 和 DOM API，这样一来，你甚至可以使用其他框架驱动 Weex，打造三端一致的 native 应用。" />
        </div>
    </scroller>
  </div>
</template>

<style scoped>
  .mzui-demo {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #ffffff;
  }

  .scroller {
    position: absolute;
    top: 66px;
    right: 0;
    left: 0;
    bottom: 0;
  }

  .text {
    margin-bottom: 60px;
  }

  .container {
    padding: 60px;
    padding-bottom: 0px;
  }

  .customStyle {
    color: #198DED;
  }
</style>

<script>
import { FmText } from '../../../index';
import Title from '../../_mods/title.vue';
import Category from '../../_mods/category.vue';

export default {
  components: { Title, Category, FmText }
};
</script>
