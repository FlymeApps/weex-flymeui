<template>
  <cell class="check-cell-wrap" @longpress="onLongpress" @click="onClick" ripple="normal">
    <div class="wrapper" ref="wrapper">
      <slot></slot>
    </div>
    <div class="right">
      <check-icon :show="checking" :checked="_selected" :disabled="disabled"></check-icon>
    </div>
  </cell>
</template>

<style scoped>
  .check-cell-wrap {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }

  .check-cell-wrap:active {
    background-color: #eeeeee;
  }

  .right {
    width: 24px;
    height: 24px;
  }
</style>

<script>
  const dom = weex.requireModule('dom')
  import CheckIcon from './check-icon.vue'

  export default {
    name: 'FmMultiCheckCell',
    components: { CheckIcon },
    props: {
      identity: {
        type: [String, Object, Number, Array],
        required: true
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      _selected: {
        get() {
          return this.store.indexOf(this.identity) !== -1 ? true : false
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
        if (this._group.checking && !this.disabled) {
          this.toggleSelected()
        }
      },
      toggleSelected() {
        !this.disabled && (this._selected = !this._selected)
      },
      onLongpress(e) {
        !this._group.checking &&
          (this._group.checking = true) &&
          !this.disabled &&
          (this._selected = true)
      },
      addToStore() {
        const { identity } = this
        if (Array.isArray(this.store) && this.store.indexOf(identity) === -1) {
          this.store.push(identity)
        }
      },
      deleteFromStore() {
        const { identity } = this
        if (Array.isArray(this.store) && this.store.indexOf(identity) !== -1) {
          this.store.splice(this.store.indexOf(identity), 1)
        }
      }
    },
    created() {
      if (!this.isGroup) {
        throw Error('fm-multi-check-cell must be used in fm-multi-check-group !')
      }
    }
  }
</script>

