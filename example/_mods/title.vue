<template>
  <div class="logo" bubble="true">
      <fm-image :width="655" :height="105" :scale="1" src="http://weixin-res.flyme.cn/resources/weex-flymeui/assets/design_logo.png"/>
      <fm-text class="desc" value="遵循 Flyme 系统设计风格、基于 Weex 的跨平台通用组件库。"
                            :style="{fontSize: 42, color: 'rgba(0, 0, 0, 0.6)', fontWeight: 400}" />
      <!-- <div v-if="link" class="doc" @click="click">
        <fm-text class="link" value="查看使用文档" :style="{fontSize: 36, color: '#198ded', fontWeight: 400, textDecoration: 'underline'}" />
      </div> -->
  </div>
</template>

<style scoped>
  .logo {
    margin: 72px 0;
    align-items: center;
    justify-content: space-between;
  }

  .doc {
    padding-top: 10px;
  }

  .desc {
    width: 774px;
    margin-top: 54px;
    text-align: center;
  }
</style>

<script>
import { FmText, FmImage } from 'weex-flymeui';
const intent = weex.requireModule('intent');
const modal = weex.requireModule('modal');
export default {
  props: {
    link: String
  },
  components: { FmText, FmImage },
  methods: {
    click () {
      if (!this.link) {
        modal.toast({ message: '暂无文档' });
        return;
      }
      if (weex.config.env.platform === 'Web') {
        window.location.href = this.link;
      } else {
        intent.openViewIntent(this.link);
      }
    }
  }
};
</script>
