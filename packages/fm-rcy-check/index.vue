<template>
  <recycle-list 
    ref="rcy"
    template-key="type" 
    alias="item" 
    index="i" 
    append='tree'
    @loadmore="$onLoadMore()" 
    showScrollbar="true" style='width:360px'
    @mlongclick="$onCellLongpress"
    for="(item, i) in dataSource">

    <cell-slot template-type="check-cell" :itemId="item.itemId" @click="$onCellCheck(item, i)" ripple="normal">
      <div>
        <div class="cell">
          <!-- Content start -->
          <div class="content">
            <text>{{ item.itemId }}</text>
            <text v-once :a="i">{{ i }}</text>
          </div>
          <!-- Content end -->

          <!-- Right circle start -->
          <div class="check-wrap" v-if="item.checking">
            <image
              class="unchecked"
              src="http://design.flyme.cn/weexui/assets/mz_btn_check_button_square_off.png" />
            <image 
              class="checked"
              v-if="item.checked"
              :src="item.disabled ? 'http://design.flyme.cn/weexui/assets/mz_btn_check_button_square_on_disable.png' : 'http://design.flyme.cn/weexui/assets/mz_btn_check_button_square_on.png'" 
            />
          </div>
          <!-- Right circle end -->
        </div>
      </div>
    </cell-slot>

    <loading class="loading" @loading="onloading" display="hide">
      <text class="indicator" ref="loadText">正在加载中 ..</text>
    </loading>

  </recycle-list>
</template>

<style scoped>
  .cell {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    width: 360px;
    height: 92px;
  }

  .check-wrap {
    width: 24px;
    height: 24px;
  }

  .unchecked {
    width: 24px;
    height: 24px;
  }

  .checked {
    position: absolute;
    left: 0;
    top: 0;
    width: 24px;
    height: 24px;
    transform: scale(0);
    border-radius: 12px;
  }

  .loading {
    justify-content: center;
  }
</style>

<script>
  const modal = weex.requireModule('modal')
  export default {
    props: {
      // List dataSource
      dataSource: {
        type: Array,
        default: () => []
      },
      // Custom load data function
      loadData: Function
    },
    data () {
      return {
        // Is checkind state
        checking: false,
        // Is load end
        end: false,
      }
    },
    computed: {
      recycleList() {
        return this.$refs.rcy;
      }
    },
    methods: {
      /*
       * InSide Function 
       */
      // Handle cell be longpress
      $onCellLongpress(e) {
        if (!this.checking) {
          const index = e.index
          let tmp = []
          this.recycleList.getListDataSize(res => {
            this.checking = true
            this.recycleList.resetLoadmore()
            this.recycleList.setPullLoadEnable(false)
            for(let i = 0; i < res; i++) {
              this.dataSource[i].checking = this.checking;
              tmp.push(this.dataSource[i])
            }
            tmp[index].checked = true
            this.dataSource = tmp
            this.recycleList.setListData(this.dataSource)
            this.$emit('fmRcyCheckStateChange', true)
          })
        }
      },
      // Handle cell be click
      $onCellCheck(item, i) {
        if (item.checking) {
          item.checked = !item.checked
          this.dataSource[i] = item
          this.recycleList.updateData(this.dataSource[i], i)
          this.$emit('fmRcyCheckValueChange', this.dataSource)
        } else {
          this.$emit('fmRcyCheckCellBeClick', { value: item, index: i })
        }
      },
      // Handle list loadmore, is a js hook
      $onLoadMore() {
        if (!this.checking && !this.end) {
          if (this.loadData && typeof this.loadData === 'function') { this.loadData() }
        } 
        if (!this.checked) {
          this.recycleList.setLoadingDisplay('hide')
          this.recycleList.setPullLoadEnable(false)
        } else if (!this.end) {
          setTimeout(() => {
            this.recycleList.setLoadingDisplay('hide')
            this.recycleList.setPullLoadEnable(true)
            this.recycleList.resetLoadmore()
          }, 400);
        }
      },

      /*
       * OutSide Function 
       */
      // Quit checking model if this.checking is true, will emit @fmRcyCheckFinish Event.
      finish() {
        if (this.checking) {
          this.recycleList.getListDataSize(res => {
            let tmp = []
            let checkList = []
            let checkIndex = []
            this.checking = false
            this.recycleList.setPullLoadEnable(true)
            this.recycleList.resetLoadmore()
            for(let i = 0; i < res; i++) {
              this.dataSource[i].checking = this.checking;
              this.dataSource[i].checked && (checkList.push(this.dataSource[i])) && (checkIndex.push(i))
              tmp.push(this.dataSource[i])
            }
            this.dataSource = tmp
            this.recycleList.setListData(this.dataSource)
            this.$emit('fmRcyCheckFinish', { indexs: checkIndex, values: checkList })
            this.$emit('fmRcyCheckStateChange', false)
          })
        }
      },
      // Toggle all item's checked state when in checking Model, will emit @fmRcyCheckValueChange Event.
      toggleAll(bool) {
        if (this.checking) {
          let tmp = []
          this.recycleList.getListDataSize(res => {
            for(let i = 0; i < res; i++) {
              this.dataSource[i].checked = bool;
              tmp.push(this.dataSource[i])
            }
            this.dataSource = tmp
            this.recycleList.setListData(this.dataSource)
            this.$emit('fmRcyCheckValueChange', this.dataSource)
          })
        }
      },
      // Append data at this.dataSource and append item at recycle-list.
      appendData(data) {
        this.dataSource = this.dataSource.concat(data)
        this.recycleList.appendData(data)
      },
      // Remove data from this.dataSource and remove item from recycle-list.
      removeData(array) {
        this.dataSource = this.dataSource.filter((value, index) => {
          return array.indexOf(index) < 0
        })
        this.recycleList.removeData(array)
        this.$emit('fmRcyCheckValueChange', this.dataSource)
      },
      // When this.loadData function complete, call this function to reset loading state.
      resetLoading() {
        this.recycleList.setLoadingDisplay('hide')
      },
      // Set loading no more data Tip and change loading state.
      loadingEnd(tipStr) {
        this.end = true
        this.$refs.loadText.setAttr('value', tipStr, false)
        setTimeout(() => {
          this.recycleList.setLoadingDisplay('hide')
          this.recycleList.setPullLoadEnable(true)
          this.recycleList.resetLoadmore()
        }, 400);
      },
      // Reset loding, make it can load more again.
      resetLoadMore() {
        this.end = true
        this.recycleList.setPullLoadEnable(true)
        this.recycleList.resetLoadmore()
      }
    }
  }
</script>
