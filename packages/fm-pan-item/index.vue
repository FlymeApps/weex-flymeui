<!-- CopyRight (C) 2018-2022 FlymeApps Group Holding Limited. -->
<!-- Created by Yanjiie on 18/03/08. Inspired by https://github.com/alibaba/weex-ui -->
<!-- 处理android上面有点击时候事件不传递问题! -->
<!-- 需要是 滑动组件中接受 fmPanItemPan，事件同时判断是 android 下调用 bindExp -->

<template>
  <div>
    <div v-if="supportAndroid"
         ref="fm-pan-item"
         @horizontalpan="dispatchPan"
         @appear="onItemAppear"
         @disappear="onItemDisAppear"
         @click="itemClicked">
      <slot></slot>
    </div>
    <div v-else
         ref="fm-pan-item"
         @click="itemClicked">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Binding from 'weex-bindingx/lib/index.weex.js';
import Utils from '../utils';
import BindEnv from '../utils/bind-env';

export default {
  props: {
    url: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    isPanning: false,
    appearMap: [],
    supportAndroid: BindEnv.supportsEBForAndroid()
  }),
  mounted () {
    setTimeout(() => {
      if (this.supportAndroid) {
        const element = this.$refs['fm-pan-item'];
        Binding.prepare && Binding.prepare({
          anchor: element.ref,
          eventType: 'pan'
        });
      }
    }, 300);
  },
  methods: {
    itemClicked () {
      if (this.isPanning) {
        return;
      }
      this.url && Utils.goToH5Page(this.url, true);
      this.$emit('fmPanItemClicked', { extId: this.extId });
    },

    dispatchPan (e) {
      if (this.supportAndroid) {
        if (e.state === 'start') {
          this.isPanning = true;
          const element = this.$refs['fm-pan-item'];
          element && this.$emit('fmPanItemPan', { element });
        } else if (e.state === 'end') {
          setTimeout(() => {
            this.isPanning = false;
          }, 50);
        }
      }
    }
  }
};
</script>
