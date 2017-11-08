<template>
    <div class="flymeui">
        <scroller class="scroller">
            <div class="header">
                <div style="margin-left: 16.667px;">
                    <fm-text class="title" textValue="Navigator" medium
                                      :text-style="{fontSize: 21, color: '#000', fontWeight: 500, lineHeight: 23}" />
                    <fm-text class="subTitle" textValue="页面导航" 
                                      :text-style="{fontSize: 12, color: '#000', fontWeight: 300, lineHeight: 14, marginTop: 2}" />
                </div>
            </div>
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
    .actionBar {
        height: 64px;
        padding-top: 20px;
    }

    .actionIcon {
        margin-top: 10px;
        margin-right: 15px;
        margin-left: 17px;
    }

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
        flex-direction: row;
        align-items: flex-end;
        margin-top: 23.6667px;
        margin-bottom: 34.6667px;
        margin-left: 24px;
    }

    .list {
        margin-left: 9.333px;
        margin-right: 9.333px;
        padding: 9.333px;
    }
</style>

<script>
import { FmText, FmImage, FmIcon } from '../../../index';
import DCell from '../../index/components/cell.vue';

const navigator = weex.requireModule('navigator')

let url = weex.config.bundleUrl.replace(/navigator\/index.native.js/, 'navigatorTest/index.native.js')

export default {
    components: { FmText, FmIcon, DCell },
    methods: {
      back() {
        navigator.pop()
      },
      demo1() {   // 默认状态栏
        navigator.push({
            url: url,
            animated: true   
        })
      },
      demo2() {  // 全屏
        navigator.push({
            url: url,
            animated: 'true',
            theme: {
              fullScreen: true  ,// 是否全屏，首先判断，全屏时statusBar、navigationBar、actionBar不起作用
              softmode: "adjustResize"
            }
        })
      },
      demo3() {  //softmode
        navigator.push({
            url: url,
            animated: true,
            theme: {
              immersion: false , // 沉浸式状态栏
              softmode: "adjustResize"
            }
        })
      },
      demo4() {  //沉浸式状态栏
        navigator.push({
            url: url,
            animated: true,
            theme: {
              immersion: true , // 沉浸式状态栏
              softmode: "adjustResize",
              theme: {
              statusBar: {  // 状态栏 
                transparent: true, // 设置后color、alpha不起作用，状态栏颜色同actionbar
                darkIcon: false //是否使用深色图标
              }
            }
            }
        })
      },
      demo5() {
        navigator.push({
            url: url,
            animated: true,
            theme: {
              statusBar: {  // 状态栏 
                color: "#FFB4B4B4", //状态栏颜色,颜色值使用 #AARRGGBB 格式
                alpha: 1.0, // alpha值 0.0-1.0之间，设置alpha后color 的#AARRGGBB的AA不起作用
                transparent: false, // 设置后color、alpha不起作用，状态栏颜色同actionbar
                darkIcon: false //是否使用深色图标
              }
            }
        })
      },
      demo6() {
        navigator.push({
            url: url,
            animated: true,
            theme: {
              actionBar: {  // ActionBar
                hide: false,  // 是否隐藏ActionBar
                back: true,  //是否显示回退键
                logo: "",  //占位
                backgroundColor: "#FF88CCEE", //颜色值使用 #AARRGGBB 格式
                textColor: "#FFFFFFFF", //颜色值使用 #AARRGGBB 格式
                text: "自定义标题栏"  // 文本
              }
            }
        })
      },
      demo7() {
        navigator.push({
            url: url,
            animated: true,
            theme: {
              statusBar: {  // 状态栏 
                darkIcon: true //是否使用深色图标
              },
              naviBar: { // NavigationBar 
                hide: true,  // 是否隐藏
                color: "#FFFFFFFF",   // 颜色值使用 #AARRGGBB 格式
                alpha: 0.3 , // alpha值 0.0-1.0之间 设置alpha后color 的#AARRGGBB的AA不起作用
                transparent: true, 
                darkIcon: true // 是否使用深色图标
              }
            }
        })
      }
    }
}
</script>
