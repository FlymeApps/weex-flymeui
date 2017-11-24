<template>
  <div class="mzui-demo">
    <scroller class="scroller">
      <title link="http://design.flyme.cn/book/book.html?bookId=59ef0a54a5a0a6738061aeeb&doc=59ef0ed6a5a0a6738061aefb"></title>
      <category title="基本样式"></category>
        <div class="container">
            <FmText class="text" textValue="nomal基本样式" />
            <FmText class="text" medium textValue="medium样式 ( Android不支持 )"/>
            <FmText class="text" bold textValue="bold样式"/>
            <FmText class="text" light textValue="light样式"/>
            <FmText class="text" :textStyle="{color: '#198ded'}" textValue="自定义样式"/>
        </div>
      <category title="标题文本"></category>
        <div class="container">
            <FmText class="text" title textValue="标题"/>
        </div>
      <category title="加粗标题"></category>
        <div class="container">
            <FmText class="text" title bold textValue="标题"/>
        </div>
      <category title="小号段落"></category>
        <div class="container">
            <FmText small textValue="Weex 是一套简单易用的跨平台开发方案，能以 web 的开发体验构建高性能、可扩展的 native 应用，为了做到这些，Weex 与 Vue 合作，使用 Vue 作为上层框架，并遵循 W3C 标准实现了统一的 JSEngine 和 DOM API，这样一来，你甚至可以使用其他框架驱动 Weex，打造三端一致的 native 应用。" />
        </div>
      <category title="大号段落"></category>
        <div class="container">
            <FmText large textValue="Weex 是一套简单易用的跨平台开发方案，能以 web 的开发体验构建高性能、可扩展的 native 应用，为了做到这些，Weex 与 Vue 合作，使用 Vue 作为上层框架，并遵循 W3C 标准实现了统一的 JSEngine 和 DOM API，这样一来，你甚至可以使用其他框架驱动 Weex，打造三端一致的 native 应用。" />
        </div>
      <category title="超大号段落"></category>
        <div class="container">
            <FmText huge textValue="Weex 是一套简单易用的跨平台开发方案，能以 web 的开发体验构建高性能、可扩展的 native 应用，为了做到这些，Weex 与 Vue 合作，使用 Vue 作为上层框架，并遵循 W3C 标准实现了统一的 JSEngine 和 DOM API，这样一来，你甚至可以使用其他框架驱动 Weex，打造三端一致的 native 应用。" />
        </div>
    </scroller>
  </div>
</template>

<style lang="sass" scoped>
  @import "../../../packages/style/mixin.scss";
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
      margin-bottom: size(60);
  }

  .container {
      padding: size(60);
      padding-bottom: 0px;
  }
</style>

<script>
import { FmText } from '../../../index';
import Title from '../../_mods/title.vue';
import Category from '../../_mods/category.vue';
import { setTitle } from '../../_mods/set-nav';

const modal = weex.requireModule('modal');

export default {
    components: { Title, Category, FmText },
}
</script>
