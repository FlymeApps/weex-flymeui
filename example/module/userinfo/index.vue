<template>
    <div class="flymeui">
        <scroller class="scroller">
            <title link="http://design.flyme.cn/book/book.html?bookId=59df3445a5a0a611eee9f119&doc=59df4a6267e2271c7fc46b38"></title>
            <div class="list">
                <d-cell title="登录状态" subTitle="检查登录状态" @click="demo1"></d-cell>
                <d-cell title="Token" subTitle="获取用户 Token" @click="demo2"></d-cell>
                <d-cell title="用户信息" subTitle="获取用户信息" @click="demo3"></d-cell>
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

    .scroller {
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
        margin-left: 28px;
        margin-right: 28px;
        padding: 28px;
    }
</style>

<script>
import Title from '../../_mods/title.vue';
import { FmText, FmImage, FmIcon } from '../../../index';
import DCell from '../../index/components/cell.vue';

const userinfo = weex.requireModule('userinfo')

const modal = weex.requireModule('modal')

let url = weex.config.bundleUrl.replace(/navigator\/index.native.js/, 'navigatorTest/index.native.js')

export default {
    components: { FmText, FmIcon, DCell, Title },
    methods: {
      back() {
        navigator.pop()
      },
      demo1() {   // 获取登录状态
        userinfo.getLoginState(res => {
            modal.toast({ message: res })
        })
      },
      demo2() {  // 获取token
        userinfo.getUserToken(res => {
            modal.toast({ message: res })
        })
      },
      demo3() {  // 获取用户信息
        userinfo.getUserToken(res => {
            if (res.result === 'success') {
                let token = res.data
                userinfo.getUserInfo(token, res => {
                    modal.toast({ message: res })
                })
            } else {
                modal.toast({ message: res })
            }
        })
      }
    }
}
</script>
