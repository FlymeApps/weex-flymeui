<template>
    <div class="flymeui">
        <scroller class="scroller">
            <title link="http://design.flyme.cn/book/book.html?bookId=59df3445a5a0a611eee9f119&doc=59e0773867e2271c7fc46b40"></title>
            <div class="list">
                <d-cell title="设备信息" subTitle="获取设备相关详情信息" @click="demo1"></d-cell>
                <d-cell title="Mac 地址" subTitle="获取 Mac 地址" @click="demo2"></d-cell>
                <d-cell title="IMEI" subTitle="获取 IMEI" @click="demo3"></d-cell>
                <d-cell title="设备 ID" subTitle="获取设备 ID" @click="demo4"></d-cell>
                <d-cell title="屏幕信息" subTitle="获取设备屏幕信息" @click="demo5"></d-cell>
                <d-cell title="Library 版本信息" subTitle="获取 Librar 版本信息" @click="demo6"></d-cell>
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
        margin-bottom: 103px;
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

const device = weex.requireModule('device')

const modal = weex.requireModule('modal')

export default {
    components: { FmText, FmIcon, DCell, Title },
    methods: {
      back() {
        navigator.pop()
      },
      demo1() {  // 获取设备信息
        modal.toast({ message: device.getDeviceInfo() })
      },
      demo2() {   // 获取 mac 地址
        modal.toast({ message: device.getMacAddress() })
      },
      demo3() {  // 获取 IMEI 地址
        modal.toast({ message: device.getIMEI() })
      },
      demo4() {  // 获取设备 id
        modal.toast({ message: device.getDeviceId() })
      },
      demo5() {  // 获取设备屏幕信息
        modal.toast({ message: device.getScreenInfo() })
      },
      demo6() {  // 获取 Libray 版本信息
        modal.toast({ message: device.getLibVersion() })
      }
    }
}
</script>
