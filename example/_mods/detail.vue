<template>
  <div class="flymeui">
    <scroller class="scroller">
      <div class="header">
        <fm-image width="130" height="130" :scale="3/2" :src="'http://weixin-res.flyme.cn/resources/weex-flymeui/assets/'+ type +'.png'"/>
        <div style="margin-left: 50px;">
            <fm-text class="title" :value="category.name" medium
                                   :style="{fontSize: 63, color: '#000', fontWeight: 500, lineHeight: 69}" />
            <fm-text class="subTitle" :value="category.subname"
                                      :style="{fontSize: 36, color: '#000', fontWeight: 300, lineHeight: 42, marginTop: 6}" />
        </div>
      </div>
      <div class="list">
        <template v-for="(item, idx) in category.componentList" >
          <d-cell :title="item.name" :subTitle="item.subname" @click="jump(item.path)" :key="idx"></d-cell>
        </template>
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
  }

  .header {
    flex-direction: row;
    align-items: flex-end;
    margin-top: 71px;
    margin-bottom: 104px;
    margin-left: 72px;
  }

  .list {
    margin-left: 27px;
    margin-right: 27px;
    padding: 27px;
  }
</style>

<script>
import { FmText, FmImage, FmIcon } from 'weex-flymeui';
import DCell from './cell.vue';
import category from '../category';
const navigator = weex.requireModule('navigator');
const env = weex.config.env;
const url = weex.config.bundleUrl;

export default {
  props: {
    type: String,
    category: {
      type: Object,
      default: () => ({})
    }
  },
  components: { FmText, FmImage, FmIcon, DCell },
  created () {
    this.category = category[this.type];
  },
  methods: {
    jump (path) {
      if (env.platform === 'Web') {
        window.location.href = '/' + path;
      } else {
        let target = url.replace(`categories/${this.type}`, path);
        if (path.startsWith('http')) {
          target = path;
        }
        navigator.push({
          url: target,
          animated: 'true',
          theme: {
            immersion: true, // 沉浸式状态栏
            softmode: 'adjustResize',
            theme: {
              statusBar: { // 状态栏
                transparent: true, // 设置后color、alpha不起作用，状态栏颜色同actionbar
                darkIcon: false // 是否使用深色图标
              }
            }
          }
        });
      }
    }
  }
};
</script>
