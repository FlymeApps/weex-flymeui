<template>
  <div class="mzui-demo">
    <scroller class="scroller">
      <title title="fm-foldable-text"></title>
      <category title="可折叠文本"></category>
      <div class="container">
        <fm-foldable-text :text="text" width="730"></fm-foldable-text>
      </div>
      <category title="不同大小"></category>
      <div class="container">
        <fm-foldable-text :text="text" width="730"></fm-foldable-text>
      </div>
      <div class="container">
        <fm-foldable-text :text="text" large width="730"></fm-foldable-text>
      </div>
      <div class="container">
        <fm-foldable-text :text="text" huge width="730"></fm-foldable-text>
      </div>
      <category title="限制不同行数"></category>
      <div class="container">
        <fm-foldable-text :text="text" width="730" lines="3"></fm-foldable-text>
      </div>
      <category title="默认不折叠状态"></category>
      <div class="container">
        <fm-foldable-text :text="text" width="730" :folded="false"></fm-foldable-text>
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
  .container {
      padding: 10px;
  }
</style>

<script>
import { FmFoldableText } from '../../index';
import Title from '../_mods/title.vue';
import Category from '../_mods/category.vue';
import { setTitle } from '../_mods/set-nav';

console.log(weex.config.env.weexVersion)

const modal = weex.requireModule('modal');

export default {
    components: { Title, Category, FmFoldableText },
    data: () => ({
        text: '该标准从一开始就是针对 JavaScript 语言制定的，但是之所以不叫 JavaScript，有两个原因。一是商标，Java 是 Sun 公司的商标，根据授权协议，只有 Netscape 公司可以合法地使用 JavaScript 这个名字，且 JavaScript 本身也已经被 Netscape 公司注册为商标。二是想体现这门语言的制定者是 ECMA，不是 Netscape，这样有利于保证这门语言的开放性和中立性。'
    })
}
</script>
