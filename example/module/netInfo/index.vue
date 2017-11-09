<template>
    <div class="flymeui">
        <scroller class="scroller">
            <title link="http://design.flyme.cn/book/book.html?bookId=59df3445a5a0a611eee9f119&doc=59e41a2967e2271c7fc46b4e"></title>
            <div class="list">
                <d-cell title="网络状态" subTitle="检查当前网络状态" @click="demo1"></d-cell>
                <d-cell title="网络类型" subTitle="获取当前网络连接类型" @click="demo2"></d-cell>
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
import Title from '../../_mods/title.vue';
import { FmText, FmImage, FmIcon } from '../../../index';
import DCell from '../../index/components/cell.vue';

const netinfo = weex.requireModule('netinfo')

const modal = weex.requireModule('modal')

export default {
    components: { FmText, FmIcon, DCell, Title },
    methods: {
      back() {
        navigator.pop()
      },
      demo1() {   // 检查网络状态
        netinfo.getIsNetworkConnected(res => {
          modal.toast({ message: res })
        })
      },
      demo2() {  // 获取当前网络链接类型
        netinfo.getNetType(res => {
          modal.toast({ message: res })
        })
      }
    }
}
</script>
