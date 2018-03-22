<template>
    <div class="flymeui">
        <scroller class="scroller">
            <title link="http://design.flyme.cn/book/book.html?bookId=59df3445a5a0a611eee9f119&doc=59e0773867e2271c7fc46b40"></title>
            <div class="list">
                <d-cell title="获取地理位置信息 (默认调用)" subTitle="高精度获取地理位置信息" @click="demo1"></d-cell>
                <d-cell title="获取地理位置信息 (高精度)" subTitle="高精度获取地理位置信息" @click="demo2"></d-cell>
                <d-cell title="获取详细地址信息" subTitle="获取地理位置和详细地址信息" @click="demo3"></d-cell>
                <d-cell title="监听地理位置变化" subTitle="实时监听地理位置变化，每 2s 刷新一次" @click="demo4"></d-cell>
                <d-cell title="移除地理位置监听" subTitle="移除监听后不再调用" @click="demo5"></d-cell>
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
import { FmText, FmIcon } from '../../../index';
import DCell from '../../_mods/cell.vue';

const location = weex.requireModule('location');

const modal = weex.requireModule('modal');

export default {
  components: { FmText, FmIcon, DCell, Title },
  data () {
    return {
      watchId: ''
    };
  },
  methods: {
    back () {
      navigator.pop();
    },
    demo1 () { // 获取地理位置信息 (默认调用)
      const option = {

      };
      location.getCurrentPosition(res => {
        modal.toast({ message: res });
      }, err => {
        modal.toast({ message: err });
      }, option);
    },
    demo2 () { // 获取地理位置信息 (高精度)
      const option = {
        enableHighAcuracy: true
      };
      location.getCurrentPosition(res => {
        modal.toast({ message: res });
      }, err => {
        modal.toast({ message: err });
      }, option);
    },
    demo3 () { // 获取详细地址信息
      const option = {
        enableHighAcuracy: true,
        address: true
      };
      location.getCurrentPosition(res => {
        modal.toast({ message: res });
      }, err => {
        modal.toast({ message: err });
      }, option);
    },
    demo4 () { // 监听地理位置变化
      const option = {
        enableHighAcuracy: true,
        address: true,
        enableRefresh: true
      };
      location.watchPosition(res => {
        this.watchId = res.watchId;
        modal.toast({ message: res });
      }, err => {
        modal.toast({ message: err });
      }, option);
    },
    demo5 () { // 移除地理位置监听
      if (!this.watchId) {
        modal.toast({ message: '目前没有正在监听' });
      }
      location.clearWatch(this.watchId);
    }
  }
};
</script>
