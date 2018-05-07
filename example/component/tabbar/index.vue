<template>
  <div class="mzui-demo">
    <scroller class="scroller">
      <title link="https://yanjiie.github.io/weex-flymeui/#/packages/fm-tabbar/"></title>

      <div class="btn-wrap">
        <fm-button size="huge" @buttonClicked="onChange('demo1')">基本使用</fm-button>
        <fm-button size="huge" @buttonClicked="onChange('demo2')" color="#3bc06b">active 状态</fm-button>
        <fm-button size="huge" @buttonClicked="onChange('demo3')" color="#04c0cf">徽章与新消息提醒</fm-button>
        <fm-button size="huge" @buttonClicked="onChange('demo4')" color="#dc2a2a">自定义样式</fm-button>
        <fm-button size="huge" @buttonClicked="onChange('demo5')" color="#ffaf00">高级使用</fm-button>
      </div>

      <template v-if="type === 'demo1'">
        <fm-tabbar :items="items1"
                   :auto-active="false"></fm-tabbar>
      </template>

      <template v-if="type === 'demo2'">
        <fm-tabbar :items="items2"
                   :active-index="activeIndex"
                   @fmTabbarSelected="fmTabbarSelected"></fm-tabbar>
      </template>

      <template v-if="type === 'demo3'">
        <fm-tabbar :items="items4"
                   :auto-active="false"></fm-tabbar>
      </template>

      <template v-if="type === 'demo4'">
        <fm-tabbar :items="items2"
                   :active-index="activeIndex"
                   @fmTabbarSelected="fmTabbarSelected"
                   background-color="#2F2E34"
                   :custom-styles="customStyles"></fm-tabbar>
      </template>

      <template v-if="type === 'demo5'">
        <fm-tabbar :active-index="activeIndex"
                   @fmTabbarSelected="fmTabbarSelected">
          <fm-tabbar-item class="item" icon="zhuye">
            <image class="icon" slot="icon" slot-scope="props" :src="props.active ? icon.normal : icon.active" />
            <text class="txt" slot="title" slot-scope="props">{{ props.active ? 'Vue.js' : 'BindingX' }}</text>
          </fm-tabbar-item>
          <fm-tabbar-item class="item" icon="xinxi1">点这试试</fm-tabbar-item>
          <fm-tabbar-item class="item" icon="shezhi1">设置</fm-tabbar-item>
          <fm-tabbar-item class="item" icon="yonghu">用户</fm-tabbar-item>
        </fm-tabbar>
      </template>

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

  .btn-wrap {
    margin-top: 30px;
    height: 800px;
    justify-content: space-between;
    align-items: center;
  }

  .scroller {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }

  .title {
    margin-bottom: 30px;
  }

  .item {
    flex: 1;
  }

  .icon {
    width: 72px;
    height: 72px;
  }

  .txt {
    font-size: 30px;
    line-height: 36px;
  }
</style>

<script>
import { FmTabbar, FmTabbarItem, FmButton } from 'weex-flymeui';
import Title from '../../_mods/title.vue';

export default {
  components: { FmTabbar, FmTabbarItem, FmButton, Title },
  data () {
    return {
      type: 'demo1',
      items1: [{
        title: '信息',
        icon: 'xinxi1'
      }, {
        title: '下载',
        icon: 'xiazai'
      }, {
        title: '删除',
        icon: 'shanchu'
      }],
      items2: [{
        title: '编辑',
        icon: 'bianji',
        normalIcon: 'https://cn.vuejs.org/images/logo.png',
        activeIcon: 'https://gw.alicdn.com/tfs/TB1_V1wbbSYBuNjSspiXXXNzpXa-349-288.png'
      }, {
        title: '收藏',
        icon: 'xingxing'
      }, {
        title: '分享',
        icon: 'fenxiang'
      }, {
        title: '删除',
        icon: 'shanchu'
      }, {
        title: '更多',
        icon: 'gengduo'
      }],
      items4: [{
        title: '信息',
        icon: 'xinxi1',
        badge: 99
      }, {
        title: '下载',
        icon: 'xiazai',
        dot: true
      }, {
        title: '删除',
        icon: 'shanchu',
        badge: 999
      }],
      activeIndex: 0,
      customStyles: {
        titleColor: '#999999',
        iconColor: '#999999',
        activeColor: '#FFFFFF'
      },
      icon: {
        normal: 'https://cn.vuejs.org/images/logo.png',
        active: 'https://gw.alicdn.com/tfs/TB1_V1wbbSYBuNjSspiXXXNzpXa-349-288.png'
      }
    };
  },
  methods: {
    fmTabbarSelected ({ index }) {
      this.activeIndex = index;
    },
    onChange (type) {
      this.type = type;
    }
  }
};
</script>
