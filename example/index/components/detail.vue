<template>
    <div class="flymeui">
        <div class="actionBar">
            <fm-icon class="actionIcon" @fmIconClicked="back" name="fanhui" :icon-style="72" color="#999"/>
        </div>
        <scroller class="scroller">
            <div class="header">
                <fm-image :scale="3/2" :src="'http://design.flyme.cn/weexui/assets/'+ type +'.png'"/>
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
    .actionBar {
        height: 192px;
        padding-top: 60px;
    }

    .actionIcon {
        margin-top: 30px;
        margin-right: 45px;
        margin-left: 51px;
    }

    .flymeui {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background-color: #fafafa;
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
import { FmText, FmImage, FmIcon } from '../../../index';
import DCell from './cell.vue';
import category from '../../category.js';
const navigator = weex.requireModule('navigator');
const env = weex.config.env;
const url = weex.config.bundleUrl;

export default {
  props: {
    type: String,
    category: Object
  },
  components: { FmText, FmImage, FmIcon, DCell },
  created () {
    this.$route.params.type ? this.type = this.$route.params.type : this.$router.go(-1);
    this.category = category[this.type];
  },
  methods: {
    back () {
      this.$router.go(-1);
      var globalEvent = weex.requireModule('globalEvent');
      globalEvent.removeEventListener('clickbackitem');
    },
    jump (path) {
      if (env.platform === 'Web') {
        window.location.href = path;
      } else {
        let target = url.replace(/index.native.js/, path + '/index.native.js');
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
