<!-- CopyRight (C) 2018-2022 FlymeApps Group Holding Limited. -->
<!-- Created and Update by Yanjiie on 2018/04/12. -->
<template>
  <div class="wrap">
    <div
      class="indicator"
      ref="indicator"
      :style="indicatorStyle">
      <text class="indicator-text">{{ inValue }}</text>
    </div>
    <div
      ref="bar-wrap"
      class="slider-bar-wrap"
      @touchstart="onPanstart"
      @touchend="onPanEnd"
      @horizontalpan="startHandle"
      :prevent-move-event="true"
      :style="barWrapStyle">
      <div
        class="range-bar"
        :style="rangeBarStyle"
        :prevent-move-event="true">
        <div
          ref="value-bar"
          class="value-bar"
          :style="valueBarStyle">
        </div>
      </div>
      <div
        ref="slide-circle"
        class="slide-circle">
      </div>
    </div>
  </div>
</template>

<style scoped>
  .wrap {
    height: 144px;
    justify-content: flex-end;
    padding: 0 16px;
  }

  .slider-bar {
    justify-content: center;
    align-items: center;
  }

  .slider-bar-wrap {
    height: 46px;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .range-bar {
    background-color: rgba(0, 0, 0, 0.1);
    height: 6px;
    overflow: hidden;
  }

  .value-bar {
    height: 6px;
    overflow: hidden;
  }

  .slide-circle {
    width: 46px;
    height: 46px;
    background-color: #198DED;
    border-radius: 23px;
    position: absolute;
    left: 0px;
    bottom: 0;
  }

  .indicator {
    background-color: #198DED;
    justify-content: center;
    align-items: center;
    width: 78px;
    height: 78px;
    position: absolute;
    border-radius: 39px;
    left: 0px;
    top: 100px;
    opacity: 0;
    transition-property: top, opacity;
    transition-duration: 0.2s;
    transition-timing-function: ease-out;
  }

  .indicator-text {
    font-weight: 700;
    font-size: 42px;
    color: #FFFFFF;
  }
</style>

<script>
import Utils from '../utils';
import BindEnv from '../utils/bind-env';
import Binding from 'weex-bindingx/lib/index.weex.js';

const animation = weex.requireModule('animation');
const dom = weex.requireModule('dom');
const modal = weex.requireModule('modal');

export default {
  name: 'FmSliderBar',
  props: {
    length: {
      type: Number,
      default: 600
    },
    height: {
      type: Number,
      default: 6
    },
    // 最小值
    min: {
      type: Number,
      default: 0
    },
    // 最大值
    max: {
      type: Number,
      default: 999
    },
    disabled: {
      type: Boolean,
      default: false
    },
    invalidColor: {
      type: String,
      default: '#E0E0E0'
    },
    validColor: {
      type: String,
      default: '#198DED'
    },
    disabledColor: {
      type: String,
      default: '#999999'
    }
  },
  data: () => ({
    gesToken: 0,
    minDist: 0,
    circleLeft: 0,
    indicatorShow: false,
    inValue: 0,
    isAndroid: Utils.env.isAndroid(),
    timeout: 100
  }),
  computed: {
    barWrapStyle () {
      return {
        width: `${this.length + 46}px`,
        height: '46px'
      };
    },
    rangeBarStyle () {
      return {
        width: `${this.length}px`,
        height: `${this.height}px`,
        flexDirection: 'row'
      };
    },
    valueBarStyle () {
      return {
        width: this.length + 'px',
        height: this.height + 'px',
        transform: `translateX(${this.circleLeft - this.length}px)`,
        backgroundColor: this.disabled ? this.disabledColor : this.validColor
      };
    },
    indicatorStyle () {
      return this.indicatorShow ? {
        opacity: 1,
        top: 0
      } : {
        opacity: 0,
        top: '100px'
      };
    }
  },
  methods: {
    onPanstart (e) {
      this.circleLeft = this._restrictValue(e.changedTouches[0].pageX);
      animation.transition(this.circleEl, {
        styles: {
          transform: `translateX(${this.circleLeft}px)`
        },
        duration: 0.0001
      });
      animation.transition(this.indicator, {
        styles: {
          transform: `translateX(${this.circleLeft}px)`
        },
        duration: 0.0001
      });
      // 由于 android 端不支持 horizontalpan 的move事件，使用setInterval hack方案
      if (!this.isAndroid) {
        return;
      }
      this.interval = setInterval(() => {
        this.indicatorShow = true;
        dom.getComponentRect(this.circleEl, option => {
          const { left } = option.size;
          this.inValue = this._getValue(left - this.leftDiffX);
        });
      }, this.timeout);
    },
    onPanEnd (e) {
      this.indicatorShow = false;
      if (!this.isAndroid) {
        return;
      }
      this.interval && clearInterval(this.interval);
    },
    startHandle (e) {
      this.bindExp();
      // switch (e.state) {
      //   case 'start':
      //     this.bindExp();
      //     break;
      //   case 'move':
      //     modal.toast({ message: 'asdas' });
      //     dom.getComponentRect(this.circleEl, option => {
      //       const { left } = option.size;
      //       modal.toast({ message: left });
      //       this.inValue = this._getValue(left - this.leftDiffX);
      //     });
      //     break;
      //   case 'end':
      //     break;
      //   default: break;
      // }
    },
    bindExp () {
      if (this.gesToken !== 0) {
        Binding.unbind({
          eventType: 'pan',
          token: this.gesToken
        });
        this.gesToken = 0;
        return;
      }

      const { wrapEl, circleEl, indicator, valueBarEl, circleLeft, length } = this;

      const props = [{
        element: circleEl.ref,
        property: 'transform.translateX',
        expression: `min(${this.length}, max(x + ${this.circleLeft}, 0))`
      }, {
        element: valueBarEl.ref,
        property: 'transform.translateX',
        expression: `min(0, x + ${circleLeft - length})`
      }, {
        element: indicator.ref,
        property: 'transform.translateX',
        expression: `min(${this.length}, max(x + ${this.circleLeft}, 0))`
      }];

      const gesTokenObj = Binding.bind({
        anchor: wrapEl.ref,
        eventType: 'pan',
        props
      }, (e) => {
        if (e.state === 'end' || e.state === 'cancel' || e.state === 'exit') {
          // 限制 circleLeft 范围
          this.circleLeft = this._restrictValue(this.circleLeft + e.deltaX);
          this.indicatorShow = false;
        }
      });

      this.gesToken = gesTokenObj.token;
    },
    _restrictValue (value) {
      const range = this.length;
      if (value >= range) {
        return range;
      } else {
        return value;
      }
    },
    // 根据x方向偏移量计算value
    _getValue (diffX) {
      return Math.round((diffX / this.length) * (this.max - this.min) + this.min);
    }
  },
  mounted () {
    this.wrapEl = this.$refs['bar-wrap'];
    this.circleEl = this.$refs['slide-circle'];
    this.valueBarEl = this.$refs['value-bar'];
    this.indicator = this.$refs['indicator'];

    // 是否支持expresstionBinding
    if (BindEnv.supportsEB() && Binding.prepare) {
      this.wrapEl && Binding.prepare({
        anchor: this.wrapEl.ref,
        eventType: 'pan'
      });
      this.circleEl && Binding.prepare({
        anchor: this.circleEl.ref,
        eventType: 'pan'
      });
      this.valueBarEl && Binding.prepare({
        anchor: this.valueBarEl.ref,
        eventType: 'pan'
      });
      this.indicator && Binding.prepare({
        anchor: this.indicator.ref,
        eventType: 'pan'
      });
    }

    // 由于weex在mounted后渲染是异步的不能确保元素渲染完成，需要异步执行
    setTimeout(() => {
      dom.getComponentRect(this.wrapEl, option => {
        const { left } = option.size;
        this.leftDiffX = left;
      });
    }, 100);
  }
};
</script>
