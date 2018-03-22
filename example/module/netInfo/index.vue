<template>
  <div class="flymeui">
    <scroller class="scroller">
      <title link="http://design.flyme.cn/book/book.html?bookId=59df3445a5a0a611eee9f119&doc=59e41a2967e2271c7fc46b4e"></title>
      <div class="list">
        <d-cell title="网络状态" subTitle="检查当前网络状态" @click="demo1"></d-cell>
        <d-cell title="网络类型" subTitle="获取当前网络连接类型" @click="demo2"></d-cell>
        <d-cell title="网络请求" subTitle="请求网络数据" @click="demo3"></d-cell>
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
import { FmText, FmIcon } from '../../../index';
import DCell from '../../_mods/cell.vue';

const netinfo = weex.requireModule('netinfo');

const modal = weex.requireModule('modal');

const stream = weex.requireModule('stream');

export default {
  components: { FmText, FmIcon, DCell, Title },
  methods: {
    back () {
      navigator.pop();
    },
    demo1 () { // 检查网络状态
      netinfo.getIsNetworkConnected(res => {
        modal.toast({ message: res });
      });
    },
    demo2 () { // 获取当前网络链接类型
      netinfo.getNetType(res => {
        modal.toast({ message: res });
      });
    },
    demo3 () { // 获取当前网络链接类型
      stream.fetch({
        method: 'GET',
        type: 'json',
        url: 'https://api.github.com/repos/vuejs/vue?a='
      }, res => {
        modal.toast({ message: res.ok ? res.data.stargazers_count : '(network error)' });
      });
    }
  }
};
</script>
