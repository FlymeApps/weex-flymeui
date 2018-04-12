<!-- CopyRight (C) 2018-2022 FlymeApps Group Holding Limited. -->
<!-- Created and Updated by Yanjiie on 2018/04/12. -->
<template>
  <div class="fm-checkbox">
    <div class="checkbox-content" @click="toggleChecked">
      <text class="label"  v-if="$slots.default || value" :style="{ color: _checked ? '#198DED': '#000000' }">
        <slot></slot>
      <template v-if="!$slots.default">{{ value }}</template>
      </text>
      <div class="icon-wrap">
        <fm-icon class="icon" ref="fm-icon" :style="{ width: isChecked ? 72 : 1 }" name="wancheng" :icon-style="48" color="#0A73C9" />
      </div>
    </div>
    <div class="border"></div>
  </div>
</template>

<style scoped>
  .fm-checkbox {
  }

  .border {
    margin: 0 48px;
    background-color: #e6e6e6;
    height: 1px;
  }

  .checkbox-content {
    position: relative;
    flex: 1;
    flex-direction: row;
    padding: 51px 96px;
    align-items: center;
    justify-content: space-between;
  }

  .checkbox-content:active {
    background-color: #eeeeee;
  }

  .label {
    font-family: sans-serif-medium;
    font-weight: 500;
    font-size: 48px;
    line-height: 54px;
    justify-content: center;
  }

  .checked {
    color: #198ded;
  }

  .icon-wrap {
    position: absolute;
    right: 102px;
    top: 0px;
    bottom: 0px;
    opacity: 1;
    overflow: hidden;
    padding: 40px 0;
    width: 72px;
  }

  .icon {
    font-size: 72px;
    color: #198ded;
    font-weight: bold;
    width: 72px;
    height: 64px;
    justify-content: center;
  }
</style>

<script>
const animation = weex.requireModule('animation');
import FmIcon from '../fm-icon';
export default {
  name: 'FmCheckbox',
  components: { FmIcon },
  props: {
    value: {
      type: String,
      default: ''
    },
    checked: Boolean,
    disabled: Boolean
  },
  data: () => ({
    isChecked: false,
    selfChecked: false
  }),
  computed: {
    _checked: {
      get () {
        return this.isGroup
          ? this.store.indexOf(this.value) !== -1
          : this.selfChecked;
      },
      set (val) {
        if (this.isGroup) {
          if (val) {
            this.isLimitExceeded = false;
            this._checkboxGroup.max !== undefined &&
                this.store.length >= this._checkboxGroup.max &&
                (this.isLimitExceeded = true);

            this.isLimitExceeded === false &&
                (this.addToStore() || this.appearIcon(val));
          } else {
            this.isLimitExceeded = false;
            this._checkboxGroup.min !== undefined &&
                this.store.length <= this._checkboxGroup.min &&
                (this.isLimitExceeded = true);

            this.isLimitExceeded === false &&
                (this.deleteFromStore() || this.appearIcon(val));
          }
        } else {
          this.selfChecked = val;
          this.appearIcon(val);
        }
        this.$emit('fmCheckboxChecked', { value: this.value, checked: val });
      }
    },
    isGroup () {
      let parent = this.$parent;
      while (parent) {
        if (parent.$options.componentName !== 'FmCheckListGroup') {
          parent = parent.$parent;
        } else {
          this._checkboxGroup = parent;
          return true;
        }
      }
      return false;
    },
    store () {
      return this._checkboxGroup ? this._checkboxGroup.value : this.value;
    }
  },
  methods: {
    toggleChecked () {
      !this.disabled && (this._checked = !this._checked);
    },
    appearIcon (bool, duration = 150) {
      const iconEl = this.$refs['fm-icon'];
      if (!iconEl) {
        return;
      }
      const style = bool
        ? {
          opacity: 1,
          width: 72
        }
        : {
          opacity: 0
        };
      animation.transition(
        iconEl,
        {
          styles: style,
          duration,
          delay: 0,
          timingFunction: 'ease-out'
        },
        () => {
          this.isChecked = bool;
        }
      );
    },
    addToStore () {
      if (Array.isArray(this.store) && this.store.indexOf(this.value) === -1) {
        this.store.push(this.value);
      }
    },
    deleteFromStore () {
      if (Array.isArray(this.store) && this.store.indexOf(this.value) !== -1) {
        this.store.splice(this.store.indexOf(this.value), 1);
      }
    }
  },
  created () {
    this.isGroup;
    this.$slots.default && (this.value = this.$slots.default[0].text);
    this.checked &&
        (this.addToStore() ||
          ((this.selfChecked = true) && (this.isChecked = true)));
    this._checked && ((this.selfChecked = true) && (this.isChecked = true));
  }
};
</script>
