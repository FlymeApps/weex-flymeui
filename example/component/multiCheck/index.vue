<template>
  <div>
    <div class="header">
      <text class="headerText" @click="cancel">取消</text>
      <text class="headerText">已选择 {{ checkData.length }} 个</text>
      <text class="headerText" @click="toggalAll">全选</text>
    </div>
    <fm-multi-check-group
      :value="checkData"
      ref="multiSelect"
      @fmMultiCheckGroupSelected="selecting">
      <fm-multi-check-cell v-for="(item, index) in dataSource" :key="index" :identity="item.name" :disabled="item.disabled">
        <div class="test" bubble="true">
          <div class="click-test" @click="beClick" @longpress="longpress"></div>
          <text class="cell-text">{{ item.name }}</text>
        </div>
      </fm-multi-check-cell>
    </fm-multi-check-group>
  </div>
</template>

<style scoped>
  .header {
    height: 64px;
    border-bottom-style: solid;
    border-bottom-width: 0.3px;
    border-bottom-color: #e6e6e6;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  .headerText {
    font-size: 16px;
    color: #198ded;
    font-weight: 500;
    font-family: sans-serif-medium;
  }

  .cell-text {
    font-size: 14px;
  }

  .test {
    height: 100px;
    border-bottom-style: solid;
    border-bottom-width: 0.3px;
    border-bottom-color: #e6e6e6;
  }

  .click-test {
    width: 100px;
    height: 100px;
    background-color: #0000FF;
  }
</style>

<script>
import { FmMultiCheckGroup, FmMultiCheckCell } from 'weex-flymeui';
import Title from '../../_mods/title.vue';
import Category from '../../_mods/category.vue';

const modal = weex.requireModule('modal');

export default {
  components: { Title, Category, FmMultiCheckGroup, FmMultiCheckCell },
  methods: {
    click () {
      modal.toast({ message: '点击了安装' });
    }
  },
  data: () => ({
    dataSource: [
      {
        name: '第一条数据',
        disabled: true
      },
      {
        name: '第二条数据',
        disabled: false
      },
      {
        name: '第三条数据',
        disabled: false
      },
      {
        name: '第四条数据',
        disabled: true
      },
      {
        name: '第五条数据',
        disabled: false
      },
      {
        name: '第六条数据',
        disabled: false
      },
      {
        name: '第七条数据',
        disabled: false
      },
      {
        name: '第八条数据',
        disabled: false
      },
      {
        name: '第九条数据',
        disabled: false
      }
    ],
    checkData: ['第一条数据', '第三条数据']
  }),
  methods: {
    cancel () {
      this.$refs.multiSelect.finish();
    },
    selecting (value) {
      this.checkData = value;
    },
    toggalAll () {
      if (this.checkData.length < 9) {
        this.checkData = [
          '第一条数据',
          '第二条数据',
          '第三条数据',
          '第四条数据',
          '第五条数据',
          '第六条数据',
          '第七条数据',
          '第八条数据',
          '第九条数据'
        ];
      } else {
        this.checkData = [];
      }
    },
    beClick (e) {
      modal.toast({ message: 'childClick' });
    },
    longpress (e) {
      this.$refs.multiSelect.active();
      modal.toast({ message: 'longpress' });
    }
  }
};
</script>
