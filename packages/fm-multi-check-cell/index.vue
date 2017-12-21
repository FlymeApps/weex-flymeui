<template>
  <cell class="check-cell-wrap" @longpress="onLongpress" @click="onClick">
    <div class="wrapper">
      <div class="content">
        <text>{{ identity }}</text>
      </div>
    </div>
    <div class="right">
      <check-icon :show="checking" :checked="_selected"></check-icon>
    </div>
  </cell>
</template>

<style scoped>
  .check-cell-wrap {
    height: 200px;
  }

  .wrapper {
    flex-direction: row;
  }

  .check-cell-wrap:active {
    background-color: #eeeeee;
  }

  .right {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 60px;
    justify-content: center;
    align-items: center;
  }
</style>

<script>
  const modal = weex.requireModule('modal')
  import CheckIcon from './check-icon.vue'

  export default {
    components: { CheckIcon },
    props: {
      identity: {
        type: String,
        required: true
      }
    },
    data: () => ({
      value: '初始化'
    }),
    computed: {
      _selected: {
        get() {
          return this.store[this.identity] ? true : false
        },
        set(val) {
          if (val) {
            this.addToStore()
          } else {
            this.deleteFromStore()
          }
        }
      },
      isGroup() {
        let parent = this.$parent
        while (parent) {
          if (parent.$options.componentName !== 'FmMultiCheckGroup') {
            parent = parent.$parent
          } else {
            this._group = parent
            return true
          }
        }
        return false
      },
      checking() {
        return this._group.checking
      },
      store() {
        return this._group.value
      }
    },
    methods: {
      onClick(e) {
        if (this._group.checking) {
          this.toggleSelected()
        }
      },
      toggleSelected() {
        !this.disabled && (this._selected = !this._selected)
      },
      onLongpress(e) {
        !this._group.checking && (this._group.checking = true)
        // setTimeout(() => {
        //   this._group.checking = false
        // }, 2000)
      },
      addToStore() {
        const { identity } = this
        this.$set(this.store, identity, {})
      },
      deleteFromStore() {
        const { identity } = this
        this.store[identity] && this.$delete(this.store, identity)
      }
    },
    created() {
      if (!this.isGroup) {
        throw Error('fm-multi-check-cell must be used in fm-multi-check-group !')
      }
    }
  }
</script>

