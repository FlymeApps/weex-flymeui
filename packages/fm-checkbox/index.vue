<!-- CopyRight (C) 2018-2022 FlymeApps Team Holding Limited. -->
<!-- Created and Updated by Yanjiie on 2018/04/12. -->
<template>
  <fm-item
    v-bind="Object.assign({}, model)"
    @fmItemClicked="itemClicked"
    :border="border"
    :titleColor="innerChecked ? !disabled ? STYLE.primaryColor : STYLE.lightColor : '#000000'">
    <div class="icon-wrap" slot="right">
      <div
        class="icon-outer"
        ref="icon"
        :style="{ width: (isChecked ? 72 : 1) + 'px' }">
        <image class="icon"
               :style="{ width: '72px', height: '72px' }"
               resize="cover"
               :src="!disabled ? checkedIcon : disabledIcon" />
      </div>
    </div>
  </fm-item>
</template>

<script>
import STYLE from 'weex-flymeui/lib/theme/default/fm-checkbox.js';
import FmItem from '../fm-item';

const animation = weex.requireModule('animation');
export default {
  name: 'FmCheckbox',
  components: { FmItem },
  props: {
    model: {
      type: Object,
      default: () => ({})
    },
    value: {
      type: [String, Number, Object],
      require: true
    },
    checked: Boolean,
    disabled: Boolean,
    checkedIcon: {
      type: String,
      default: STYLE.CHECKED
    },
    disabledIcon: {
      type: String,
      default: STYLE.CHECKED_DISABLED
    },
    listModel: Boolean,
    border: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    isChecked: false,
    innerChecked: false
  }),
  watch: {
    checked (val) {
      this.innerChecked = val;
      this.appearIcon(this.innerChecked);
    }
  },
  methods: {
    itemClicked () {
      if (this.listModel) {
        this.$emit('fmCheckBoxItemChecked', { value, checked: this.innerChecked });
        return;
      }
      const { disabled, innerChecked, value } = this;
      if (!disabled) {
        this.innerChecked = !innerChecked;
        this.appearIcon(this.innerChecked);
        this.$emit('fmCheckBoxItemChecked', { value, checked: this.innerChecked });
      }
    },
    appearIcon (bool, duration = 150) {
      const iconEl = this.$refs['icon'];
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
    }
  },
  created () {
    this.checked && (this.innerChecked = true) && (this.isChecked = true);
    this.STYLE = STYLE;
  }
};
</script>

<style scoped>
  .icon-wrap {
    opacity: 1;
    overflow: hidden;
    height: 72px;
    width: 72px;
  }

  .icon-outer {
    width: 72px;
    height: 72px;
    overflow: hidden;
  }
</style>
