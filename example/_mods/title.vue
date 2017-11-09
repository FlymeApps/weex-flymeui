<template>
  <div class="logo" bubble="true">
      <fm-image :scale="1/3" src="http://design.flyme.cn/weexui/assets/design_logo.png"/>
      <fm-text class="desc" textValue="为你提供最全面的公共规范内容展示，让你方便调用动画参数、设计参数以及控件代码" 
                            :style="{fontSize: 14, color: 'rgba(0, 0, 0, 0.6)', fontWeight: 400}" />
      <div class="doc">
        <fm-text :fmClick="click" class="link" textValue="查看使用文档" :style="{fontSize: 12, color: 'rgba(0, 0, 0, 0.6)', fontWeight: 400, textDecoration: 'underline'}" />
      </div>
  </div>
</template>

<style scoped>
    .logo {
      padding-top: 44px;
      padding-bottom: 20px;
      align-items: center;
      justify-content: space-between;
    }

    .doc {
      padding-top: 10px;
    }

    .desc {
        width: 258.3333px;
        margin-top: 18px;
    }
</style>

<script>
  import { FmText, FmImage } from '../../index';
  let intent = weex.requireModule('intent');
  export default {
    props: {
      link: String
    },
    components: { FmText, FmImage },
    methods: {
      click() {
        if (weex.config.env.platform === 'Web') {
          window.location.href = this.link
        } else {
          intent.openViewIntent(this.link)
        }
      }
    }
  }
</script>
