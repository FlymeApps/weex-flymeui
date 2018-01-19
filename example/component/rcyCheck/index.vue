<template>
  <div>
    <div class="header">
      <text class="headerText" @click="cancel">取消</text>
      <text class="headerText">已选择 {{ count }} 个</text>
      <text class="headerText" @click="toggalAll">{{ checkAll ? '全不选' : '全选' }}</text>
    </div>
    <fm-rcy-check class="rcy-check" 
      ref="list"
      :loadData="loadData"
      @fmRcyCheckValueChange="valueChange"
      @fmRcyCheckFinish="checkFinish"
      @fmRcyCheckCellBeClick="cellBeClick"
      >
    </fm-rcy-check>
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
    background-color: blue;
  }

  .rcy-check {
    position: absolute;
    top: 64px;
    bottom: 0;
    width: 360px;
  }
</style>

<script>
  import { FmRcyCheck } from '../../../index'
  const modal = weex.requireModule('modal')
  export default {
    components: { FmRcyCheck },
    data() {
      return {
        dataSource: [
          { type: 'check-cell', checking: false, checked: false, disabled: false, area: '珠海', itemId: 1 },
          { type: 'check-cell', checking: false, checked: false, disabled: false, area: '广州', itemId: 2 },
          { type: 'check-cell', checking: false, checked: false, disabled: false, area: '湛江', itemId: 3 },
          { type: 'check-cell', checking: false, checked: false, disabled: false, area: '深圳', itemId: 4 },
          { type: 'check-cell', checking: false, checked: false, disabled: false, area: '汕头', itemId: 5 },
          { type: 'check-cell', checking: false, checked: false, disabled: false, area: '潮州', itemId: 6 },
          { type: 'check-cell', checking: false, checked: false, disabled: false, area: '佛山', itemId: 7 },
          { type: 'check-cell', checking: false, checked: false, disabled: false, area: '中山', itemId: 8 },
        ],
        checkAll: false,
        count: 0
      }
    },
    methods: {
      cancel() {
        this.$refs.list.finish()
      },
      loadData() {
        let moreData = [
          { type: 'check-cell', checking: false, checked: false, disabled: false, area: '江门', itemId: Math.random().toString(36).substr(2)},
          { type: 'check-cell', checking: false, checked: false, disabled: false, area: '阳江', itemId: Math.random().toString(36).substr(2)},
          { type: 'check-cell', checking: false, checked: false, disabled: false, area: '云浮', itemId: Math.random().toString(36).substr(2)},
          { type: 'check-cell', checking: false, checked: false, disabled: false, area: '揭阳', itemId: Math.random().toString(36).substr(2)},
          { type: 'check-cell', checking: false, checked: false, disabled: false, area: '河源', itemId: Math.random().toString(36).substr(2)},
          { type: 'check-cell', checking: false, checked: false, disabled: false, area: '韶关', itemId: Math.random().toString(36).substr(2)},
        ]
        this.dataSource = this.dataSource.concat(moreData);
        // modal.alert({ message: this.dataSource })
        if (this.$refs.list !== undefined) {
          this.$refs.list.appendData(moreData);
          setTimeout(() => {
            // 重置recycle-list 的加载状态
            // this.$refs.list.resetLoading()
            // 没有更多了，可以通过这个方法去设置禁用加载
            // this.$refs.list.loadingEnd('没有更多数据了')
            // 可用这个方法重置加载
            // this.$refs.list.resetLoadMore()
          }, 400);
        }
      },
      toggalAll() {
        this.checkAll = !this.checkAll
        this.$refs.list.toggleAll(this.checkAll)
      },
      valueChange(newData) {
        this.dataSource = newData
        this.calculate()
      },
      checkFinish(e) {
        this.$refs.list.removeData(e.indexs)
      },
      cellBeClick(e) {
        modal.alert({ message: e.value })
      },
      calculate() {
        let count = 0
        const { dataSource } = this
        for (let item of dataSource.values()) {
          if (item.checked) { count ++ }
        }
        this.count = count
      }
    },
    mounted() {
      let moreData = [
        { type: 'check-cell', checking: false, checked: false, disabled: false, area: '江门', itemId: Math.random().toString(36).substr(2)},
        { type: 'check-cell', checking: false, checked: false, disabled: false, area: '阳江', itemId: Math.random().toString(36).substr(2)},
        { type: 'check-cell', checking: false, checked: false, disabled: false, area: '云浮', itemId: Math.random().toString(36).substr(2)},
        { type: 'check-cell', checking: false, checked: false, disabled: false, area: '揭阳', itemId: Math.random().toString(36).substr(2)},
        { type: 'check-cell', checking: false, checked: false, disabled: false, area: '河源', itemId: Math.random().toString(36).substr(2)},
        { type: 'check-cell', checking: false, checked: false, disabled: false, area: '韶关', itemId: Math.random().toString(36).substr(2)},
        { type: 'check-cell', checking: false, checked: false, disabled: false, area: '云浮', itemId: Math.random().toString(36).substr(2)},
        { type: 'check-cell', checking: false, checked: false, disabled: false, area: '揭阳', itemId: Math.random().toString(36).substr(2)},
        { type: 'check-cell', checking: false, checked: false, disabled: false, area: '河源', itemId: Math.random().toString(36).substr(2)},
        { type: 'check-cell', checking: false, checked: false, disabled: false, area: '韶关', itemId: Math.random().toString(36).substr(2)},
        { type: 'check-cell', checking: false, checked: false, disabled: false, area: '云浮', itemId: Math.random().toString(36).substr(2)},
        { type: 'check-cell', checking: false, checked: false, disabled: false, area: '揭阳', itemId: Math.random().toString(36).substr(2)},
        { type: 'check-cell', checking: false, checked: false, disabled: false, area: '河源', itemId: Math.random().toString(36).substr(2)},
        { type: 'check-cell', checking: false, checked: false, disabled: false, area: '韶关', itemId: Math.random().toString(36).substr(2)},
        { type: 'check-cell', checking: false, checked: false, disabled: false, area: '云浮', itemId: Math.random().toString(36).substr(2)},
        { type: 'check-cell', checking: false, checked: false, disabled: false, area: '揭阳', itemId: Math.random().toString(36).substr(2)},
        { type: 'check-cell', checking: false, checked: false, disabled: false, area: '河源', itemId: Math.random().toString(36).substr(2)},
        { type: 'check-cell', checking: false, checked: false, disabled: false, area: '韶关', itemId: Math.random().toString(36).substr(2)},
      ]
      this.$refs.list.appendData(moreData)
    }
  }
</script>
