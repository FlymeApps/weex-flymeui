<template>
  <div class="flymeui">
    <scroller class="scroller">
      <div class="header">
        <fm-image width="655" height="105" :scale="1" src="http://weixin-res.flyme.cn/resources/weex-flymeui/assets/design_logo.png"/>
        <fm-text class="desc" value="为你提供最全面的公共规范内容展示，让你方便调用动画参数、设计参数以及控件代码"
                              :style="{fontSize: 42, color: 'rgba(0, 0, 0, 0.6)', fontWeight: 400}" />
      </div>
      <div class="list">
        <div v-for="(item, key) in category" :key="key" class="item-wrap" @click="jump(key)">
          <div class="item">
            <fm-image :scale="1" class="item-icon" :src="'http://weixin-res.flyme.cn/resources/weex-flymeui/assets/'+ key +'.png'"/>
            <div>
              <fm-text :value="item.name" title :style="{fontSize: 48, color: '#000', fontWeight: 400}" />
              <fm-text :value="item.componentList.length + ' 个项目'" :style="{fontSize: 36, color: 'rgba(0, 0, 0, 0.4)', fontWeight: 400}"/>
            </div>
          </div>
        </div>
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
    background-color: #fafafa;
  }

  .header {
    margin-top: 267px;
    margin-bottom: 93px;
    margin-left: 77px;
  }

  .desc {
    width: 775px;
    margin-top: 54px;
  }

  .list {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 48px;
  }

  .item-wrap {
    justify-content: space-between;
    background-color: #ffffff;
    width: 480px;
    height: 360px;
    margin-bottom: 20px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.04);
  }

  .item {
    padding: 50px;
  }
</style>

<script>
import { FmText, FmImage } from '../index';
import category from './category.js';
const navigator = weex.requireModule('navigator');
const env = weex.config.env;
const url = weex.config.bundleUrl;

export default {
  data () {
    return {
      category: category
    };
  },
  components: { FmText, FmImage },
  methods: {
    jump (type) {
      if (env.platform === 'Web') {
        window.location.href = `/categories/${type}`;
      } else {
        let target = url.replace('index.native.js', `categories/${type}/index.native.js`);
        if (type.startsWith('http')) {
          target = type;
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
