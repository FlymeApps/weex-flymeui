<template>
  <div class="mzui-demo">
    <scroller class="scroller">
      <title title="fm-text"></title>
      <category title="基本样式"></category>
        <div class="container">
            <FmText class="text" text="nomal基本样式" />
            <FmText class="text" medium text="medium样式 ( Android不支持 )"/>
            <FmText class="text" bold text="bold样式"/>
            <FmText class="text" light text="light样式"/>
        </div>
      <category title="标题文本"></category>
        <div class="container">
            <FmText class="text" title text="标题"/>
        </div>
      <category title="加粗标题"></category>
        <div class="container">
            <FmText class="text" title bold text="标题"/>
        </div>
      <category title="小号段落"></category>
        <div class="container">
            <FmText small text="Weex 是一套简单易用的跨平台开发方案，能以 web 的开发体验构建高性能、可扩展的 native 应用，为了做到这些，Weex 与 Vue 合作，使用 Vue 作为上层框架，并遵循 W3C 标准实现了统一的 JSEngine 和 DOM API，这样一来，你甚至可以使用其他框架驱动 Weex，打造三端一致的 native 应用。" />
        </div>
      <category title="大号段落"></category>
        <div class="container">
            <FmText large text="Weex 是一套简单易用的跨平台开发方案，能以 web 的开发体验构建高性能、可扩展的 native 应用，为了做到这些，Weex 与 Vue 合作，使用 Vue 作为上层框架，并遵循 W3C 标准实现了统一的 JSEngine 和 DOM API，这样一来，你甚至可以使用其他框架驱动 Weex，打造三端一致的 native 应用。" />
        </div>
      <category title="超大号段落"></category>
        <div class="container">
            <FmText huge text="Weex 是一套简单易用的跨平台开发方案，能以 web 的开发体验构建高性能、可扩展的 native 应用，为了做到这些，Weex 与 Vue 合作，使用 Vue 作为上层框架，并遵循 W3C 标准实现了统一的 JSEngine 和 DOM API，这样一来，你甚至可以使用其他框架驱动 Weex，打造三端一致的 native 应用。" />
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
    background-color: #fff;
  }
  
  .scroller {
    flex: 1;
  }

  .text {
      margin-bottom: 20px;
  }

  .container {
      padding: 20px;
      padding-bottom: 0px;
  }
</style>

<script>
import { FmText } from '../../index';
import Title from '../_mods/title.vue';
import Category from '../_mods/category.vue';
import { setTitle } from '../_mods/set-nav';

const modal = weex.requireModule('modal');

export default {
    components: { Title, Category, FmText },
}
</script>
