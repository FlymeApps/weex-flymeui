<template>
    <div class="flymeui">
        <div class="container">
            <div class="logo">
                <fm-image :scale="1/3" src="http://design.flyme.cn/weexui/assets/design_logo.png"/>
                <fm-text class="desc" textValue="为你提供最全面的公共规范内容展示，让你方便调用动画参数、设计参数以及控件代码" 
                                      :style="{fontSize: 14, color: 'rgba(0, 0, 0, 0.6)', fontWeight: 400}" />
            </div>
            <div class="bottom">
                <fm-input />
            </div>
        </div>
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

    .container {
        position: relative;
        flex: 1;
        background-color: #fafafa;
    }
    
    .logo {
        margin-top: 64px;
        align-items: center;
        justify-content: space-between;
    }

    .desc {
        width: 258.3333px;
        margin-top: 18px;
    }

    .bottom {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
    }
</style>

<script>
import { FmText, FmImage, FmIcon, FmInput } from '../../../index';
import DCell from '../../index/components/cell.vue';

const navigator = weex.requireModule('navigator')

let url = weex.config.bundleUrl

export default {
    components: { FmText, FmIcon, FmInput, FmImage, DCell },
    methods: {
      back() {
        navigator.pop()
      },
      demo1() {
        navigator.push({
            url: url,
            animated: true,
            theme: {
              backgroundColor: "#4422CC"  // activity 背景色
            }
        })
      },
      demo2() {
        navigator.push({
            url: url,
            animated: 'true',
            theme: {
              fullScreen: true  // 是否全屏，首先判断，全屏时statusBar、navigationBar、actionBar不起作用
            }
        })
      },
      demo3() {
        navigator.push({
            url: url,
            animated: true,
            theme: {
              immersion: true  // 沉浸式状态栏
            }
        })
      },
      demo4() {
        navigator.push({
            url: url,
            animated: true,
            theme: {
              statusBar: {  // 状态栏 
                color: "#FFB4B4B4", //状态栏颜色,颜色值使用 #AARRGGBB 格式
                alpha: 1, // alpha值 0.0-1.0之间，设置alpha后color 的#AARRGGBB的AA不起作用
                transparent: false, // 设置后color、alpha不起作用，状态栏颜色同actionbar
                darkIcon: false //是否使用深色图标
              }
            }
        })
      },
      damo5() {
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
      damo6() {
        navigator.push({
            url: url,
            animated: true,
            theme: {
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
