<template>
  <div class="flymeui">
    <scroller class="scroller">
      <title link="http://design.flyme.cn/book/book.html?bookId=59df3445a5a0a611eee9f119&doc=59e41a2967e2271c7fc46b4e"></title>
      <div class="list">
        <d-cell title="扫码" subTitle="主动调起扫码行为" @click="demo1"></d-cell>
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
import DCell from '../../_mods/cell.vue';

const scanCode = weex.requireModule('scanCode');

const modal = weex.requireModule('modal');

export default {
  components: { DCell, Title },
  methods: {
    back () {
      navigator.pop();
    },
    demo1 () { // 调起扫码
      scanCode.scanCode(res => {
        modal.toast({ message: res });
      });
    }
  }
};
</script>
