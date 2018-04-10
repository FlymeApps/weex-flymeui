<template>
  <div class="flymeui">
    <scroller class="scroller">
      <title></title>
      <div class="list">
        <template v-for="(item, key) in category">
          <div class="list-section" :key="key">
            <fm-image :width="42" :height="36" :scale="0.4" :src="`http://weixin-res.flyme.cn/resources/weex-flymeui/assets/${key}.png`"/>
            <text class="list-section--text">{{ item.name }}</text>
          </div>
          <template v-for="(component, idx) in item.componentList">
            <fm-item class="list-item"
                     :key="idx"
                     :title="component.name"
                     :summary="component.subname"
                     type="icon-small"
                     :imgSrc="component.icon"
                     occupying-color="#FFFFFF"
                     @fmItemClicked="jump(component.path)"></fm-item>
          </template>
        </template>
        <!-- <div v-for="(item, key) in category" :key="key" class="item-wrap" @click="jump(key)">
          <div class="item">
            <fm-image width="100" height="100" :scale="1" class="item-icon" :src="'http://weixin-res.flyme.cn/resources/weex-flymeui/assets/'+ key +'.png'"/>
            <div>
              <fm-text :value="item.name" title :style="{fontSize: 48, color: '#000', fontWeight: 400}" />
              <fm-text :value="item.componentList.length + ' 个项目'" :style="{fontSize: 36, color: 'rgba(0, 0, 0, 0.4)', fontWeight: 400}"/>
            </div>
          </div>
        </div> -->
      </div>
    </scroller>
  </div>
</template>

<style scoped>
  .flymeui {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #fafafa;
  }

  .scroller {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #fafafa;
  }

  .header {
    align-items: center;
    margin: 72px 0;
  }

  .desc {
    width: 775px;
    margin-top: 54px;
    text-align: center;
  }

  .list-section {
    flex-direction: row;
    height: 108px;
    width: 1080px;
    padding: 40px 0 0 42px;
    background-color: #F2F2F2;
  }

  .list-section--text {
    margin-left: 10px;
    font-family: sans-serif-medium;
    font-weight: 500;
    font-size: 36px;
    color: rgba(0, 0, 0, 0.4);
    line-height: 42px;
  }

  .list-item {
    background-color: #FFFFFF;
  }
</style>

<script>
import { FmText, FmImage, FmItem } from 'weex-flymeui';
import Title from './_mods/title.vue';
import category from './category.js';
const navigator = weex.requireModule('navigator');
const modal = weex.requireModule('modal');
const env = weex.config.env;
const url = weex.config.bundleUrl;

export default {
  data () {
    return {
      category: category
    };
  },
  components: { FmText, FmImage, FmItem, Title },
  methods: {
    jump (path) {
      if (env.platform === 'Web') {
        window.location.href = window.location.href + path;
      } else {
        let target = url.replace('index.native.js', `${path}/index.native.js`);
        if (path.startsWith('http')) {
          target = path;
        }
        navigator.push({
          url: target,
          animated: 'true'
        });
      }
    }
  }
};
</script>
