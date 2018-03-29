<template>
    <div class="flymeui">
        <scroller class="scroller">
            <title link="http://design.flyme.cn/book/book.html?bookId=59ef0a54a5a0a6738061aeeb&doc=59ef0ed6a5a0a6738061aefb"></title>
            <div class="list">
                <d-cell title="默认状态栏" subTitle="使用默认状态栏,白色背景" @click="demo1"></d-cell>
                <d-cell title="全屏模式" subTitle="配置跳转后的界面是否全屏" @click="demo2"></d-cell>
                <d-cell title="输入框" subTitle="配置SoftInputMode" @click="demo3"></d-cell>
                <d-cell title="沉浸式状态栏" subTitle="配置使用沉浸式状态栏" @click="demo4"></d-cell>
                <d-cell title="状态栏 ( StatusBar )" subTitle="自定义状态栏" @click="demo5"></d-cell>
                <d-cell title="标题栏 ( ActionBar )" subTitle="自定义标题栏" @click="demo6"></d-cell>
                <d-cell title="底部导航 ( NavigationBar )" subTitle="自定义底部导航" @click="demo7"></d-cell>
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
    top: 66px;
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
    margin-left: 28px;
    margin-right: 28px;
    padding: 28px;
  }
</style>

<script>
import Title from '../../_mods/title.vue';
import { FmText, FmIcon } from 'weex-flymeui';
import DCell from '../../_mods/cell.vue';
const eventTrack = weex.requireModule('eventReport');
var modal = weex.requireModule('modal');
const navigator = weex.requireModule('navigator');

const url = weex.config.bundleUrl.replace(/navigator\/index.native.js/, 'navigatorTest/index.native.js');

export default {
  components: { FmText, FmIcon, DCell, Title },
  methods: {
    back () {
      navigator.pop();
    },
    demo1 () { // 默认状态栏
      eventTrack.eventReport('click_navigator', { appname: 'creatorsdkdemo', method: 'demo1' });
      navigator.push({
        url: url,
        animated: true
      });
    },
    demo2 () { // 全屏
      navigator.push({
        url: url,
        animated: 'true',
        theme: {
          fullScreen: true, // 是否全屏，首先判断，全屏时statusBar、navigationBar、actionBar不起作用
          softmode: 'adjustResize'
        }
      });
      eventTrack.eventReport('click_navigator', { appname: 'creatorsdkdemo', method: 'demo2' });
    },
    demo3 () { // softmode
      navigator.push({
        url: url,
        animated: true,
        theme: {
          immersion: false, // 沉浸式状态栏
          softmode: 'adjustResize'
        }
      });
      eventTrack.eventReport('click_navigator', { appname: 'creatorsdkdemo', method: 'demo3' });
    },
    demo4 () { // 沉浸式状态栏
      navigator.push({
        url: url,
        animated: true,
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
      eventTrack.eventReport('click_navigator', { appname: 'creatorsdkdemo', method: 'demo4' });
    },
    demo5 () {
      navigator.push({
        url: url,
        animated: true,
        theme: {
          statusBar: { // 状态栏
            color: '#FFB4B4B4', // 状态栏颜色,颜色值使用 #AARRGGBB 格式
            alpha: 1.0, // alpha值 0.0-1.0之间，设置alpha后color 的#AARRGGBB的AA不起作用
            transparent: false, // 设置后color、alpha不起作用，状态栏颜色同actionbar
            darkIcon: false // 是否使用深色图标
          }
        }
      });
      eventTrack.eventReport('click_navigator', { appname: 'creatorsdkdemo', method: 'demo5' });
    },
    demo6 () {
      navigator.push({
        url: url,
        animated: true,
        theme: {
          actionBar: { // ActionBar
            hide: false, // 是否隐藏ActionBar
            back: true, // 是否显示回退键
            logo: '', // 占位
            backgroundColor: '#FF88CCEE', // 颜色值使用 #AARRGGBB 格式
            textColor: '#FFFFFFFF', // 颜色值使用 #AARRGGBB 格式
            text: '自定义标题栏' // 文本
          }
        }
      });
      eventTrack.eventReport('click_navigator', { appname: 'creatorsdkdemo', method: 'demo6' });
    },
    demo7 () {
      navigator.push({
        url: url,
        animated: true,
        theme: {
          statusBar: { // 状态栏
            darkIcon: true // 是否使用深色图标
          },
          naviBar: { // NavigationBar
            color: '#6600FF00', // 颜色值使用 #AARRGGBB 格式
            darkIcon: true // 是否使用深色图标
          }
        }
      });

      const naviBar = { // NavigationBar
        transparent: true, // 颜色值使用 #AARRGGBB 格式
        darkIcon: true // 是否使用深色图标
      };
      navigator.setNavigationBar(JSON.stringify(naviBar));

      eventTrack.eventReport('click_navigator', { appname: 'creatorsdkdemo', method: 'demo7' });
    }
  },
  beforeCreate: function () {
    // `this` 指向 vm 实例
    console.log('navigator_beforeCreat');
    eventTrack.eventReport('navigator_beforeCreat', { appname: 'creatorsdkdemo', method: 'destroyed' });
  },
  created: function () {
    // `this` 指向 vm 实例
    console.log('navigator_created');
    eventTrack.eventReport('navigator_created', { appname: 'creatorsdkdemo', method: 'destroyed' });
  },
  mounted: function () {
    // `this` 指向 vm 实例
    const naviBar = { // NavigationBar
      color: '#00FF00', // 颜色值使用 #AARRGGBB 格式
      darkIcon: true // 是否使用深色图标
    };
    // navigator.setNavigationBar(JSON.stringify(naviBar));
    eventTrack.onPageCreate();
  },
  beforeDestroy: function () {
    // `this` 指向 vm 实例
    console.log('navigator_beforeDestroy');
    modal.toast({
      message: 'beforeDestroy',
      duration: 0.3
    });
    eventTrack.eventReport('navigator_beforeDestroy', { appname: 'creatorsdkdemo', method: 'destroyed' });
  },
  destroyed: function () {
    // `this` 指向 vm 实例
    modal.toast({
      message: 'destroyed',
      duration: 0.3
    });
    console.log('navigator_destroyed');
    eventTrack.eventReport('navigator_destroyed', { appname: 'creatorsdkdemo', method: 'destroyed' });
  }
};
</script>
