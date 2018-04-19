<!-- CopyRight (C) 2018-2022 FlymeApps Group Holding Limited. -->
<!-- Created and Update by Yanjiie on 2018/04/12. Just a beta version! -->
<template>
  <div
    class="container"
    :class="[`container-${(indicator && 'indicator') || (levels.length > 0 && 'haslevels')}`]"
    :style="containerStyle">
    <div
      v-if="indicator"
      class="indicator"
      ref="indicator"
      :style="indicatorStyle">
      <text class="indicator-text">{{ inValue }}</text>
    </div>
    <div
      v-else-if="levels.length > 0"
      class="levels-wrap"
      :style="{ width: length + 64 }">
      <text
        class="level-item"
        v-for="(item, idx) in levels"
        :style="{ color: inLevel === idx ? '#000000' : 'rgba(0, 0, 0, 0.4)' }"
        :key="idx">{{ item.text }}</text>
    </div>
    <div
      ref="bar-wrap"
      class="slider-bar-wrap"
      :style="barWrapStyle">
      <div
        class="range-bar"
        :style="rangeBarStyle">
        <div
          ref="value-bar"
          class="value-bar"
          :style="valueBarStyle">
          <div></div>
        </div>
      </div>
      <div
        ref="slide-circle"
        class="slide-circle"
        :style="circleStyle"
        @touchstart="onPanstart"
        @touchmove="onPanmove"
        @touchend="onPanEnd"
        @horizontalpan="startHandle"
        :prevent-move-event="true">
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import Binding from 'weex-bindingx/lib/index.weex.js';
import STYLE from 'weex-flymeui/lib/theme/default/index.js';
import Utils from '../utils';
import BindEnv from '../utils/bind-env';

const animation = weex.requireModule('animation');
const dom = weex.requireModule('dom');

export default {
  name: 'FmSliderBar',
  props: {
    length: {
      type: Number,
      default: 800
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
      default: 100
    },
    indicator: {
      type: Boolean,
      default: false
    },
    levels: {
      type: Array,
      default: () => ([])
    },
    defaultValue: {
      type: Number,
      default: 0
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
      default: STYLE.primaryColor
    },
    disabledColor: {
      type: String,
      default: STYLE.disabledColor
    }
  },
  data: () => ({
    env: 'weex',
    gesToken: 0,
    scaleValue: 0,
    circleLeft: 0,
    indicatorShow: false,
    inValue: 0,
    isAndroid: Utils.env.isAndroid(),
    timeout: 100,
    inLevel: 0,
    lock: false,
    loaded: false
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
    containerStyle () {
      const { indicator, levels, length, loaded } = this;
      const baseWidth = length + 46;
      const styles = {
        width: (indicator && baseWidth + 32) || (levels.length > 0 && baseWidth + 32) || baseWidth,
        justifyContent: (indicator || levels.length > 0) ? 'flex-end' : 'center',
        opacity: loaded ? 1 : 0
      };
      return styles;
    },
    circleStyle () {
      return {
        backgroundColor: this.disabled ? this.disabledColor : this.validColor,
        transform: `translateX(${this.circleLeft}px)`
      };
    },
    indicatorStyle () {
      const defaultStyle = {
        backgroundColor: this.validColor,
        transform: `translateX(${this.circleLeft}px)`
      };
      return this.indicatorShow ? {
        opacity: 1,
        top: 0,
        ...defaultStyle
      } : {
        opacity: 0,
        top: '100px',
        ...defaultStyle
      };
    }
  },
  methods: {
    onWrapPanstart (e) {
      if (this.lock || this.env === 'web') { return; }
      this.circleLeft = this._restrictValue(e.changedTouches[0].pageX);
      animation.transition(this.circleEl, {
        styles: {
          transform: `translateX(${this.circleLeft}px)`
        },
        duration: 0.0001
      });
      this.indicatorEl && animation.transition(this.indicatorEl, {
        styles: {
          transform: `translateX(${this.circleLeft}px)`
        },
        duration: 0.0001
      });
    },
    onPanstart (e) {
      if (this.lock || this.disabled) { return; }
      this.lock = true;

      if (this.env === 'web') {
        this.indicatorShow = true;
        this.startX = e.changedTouches[0].pageX;
        this.startLeft = this.circleLeft;
        return;
      } else if (!this.isAndroid) {
        return;
      }

      // 由于 android 端不支持 horizontalpan 的move事件，使用setInterval hack方案
      this.interval = setInterval(() => {
        this.indicatorShow = true;
        dom.getComponentRect(this.circleEl, option => {
          const { left } = option.size;
          this.inValue = this._getValue(left - this.leftDiffX);
          this.$emit('updateValue', this.inValue);
        });
      }, this.timeout);
    },
    onPanmove (e) {
      if (this.env === 'weex' || this.disabled) {
        return;
      }

      const deltaX = (e.changedTouches[0].pageX - this.startX) * this.DPR;
      const diffX = Math.min(this.length, Math.max(this.startLeft + deltaX, 0));
      const diff = Math.floor(diffX / this.scaleValue) * this.scaleValue;
      const max = this.length;

      if (diff >= 0 && diff <= max) {
        this.circleLeft = diff;
        animation.transition(this.circleEl, {
          styles: {
            transform: `translateX(${this.circleLeft}px)`
          }
        }, () => {});
        this.indicatorEl && animation.transition(this.indicatorEl, {
          styles: {
            transform: `translateX(${this.circleLeft}px)`
          }
        }, () => {});
        this.inValue = this._getValue(this.circleLeft);
        this.$emit('updateValue', this.inValue);
      }
    },
    onPanEnd (e) {
      setTimeout(() => { this.indicatorShow = false; }, 40);
      this.lock = false;
      if (!this.isAndroid) {
        return;
      }
      this.interval && clearInterval(this.interval);
    },
    startHandle (e) {
      this.bindExp();
    },
    bindExp () {
      if (this.gesToken || this.disabled) {
        Binding.unbind({
          eventType: 'pan',
          token: this.gesToken
        });
        this.gesToken = 0;
        return;
      }

      const { circleEl, indicatorEl, valueBarEl, circleLeft, length, scaleValue } = this;

      const props = [{
        element: circleEl.ref,
        property: 'transform.translateX',
        expression: `min(${this.length}, floor(max(x + ${this.circleLeft}, 0) / ${scaleValue}) * ${scaleValue})`
      }, {
        element: valueBarEl.ref,
        property: 'transform.translateX',
        expression: `min(0, x + floor(${circleLeft - length} / ${scaleValue}) * ${scaleValue})`
      }];

      if (indicatorEl) {
        props.push({
          element: indicatorEl.ref,
          property: 'transform.translateX',
          expression: `min(${this.length}, floor(max(x + ${this.circleLeft}, 0) / ${scaleValue}) * ${scaleValue})`
        });
      }

      const gesTokenObj = Binding.bind({
        anchor: circleEl.ref,
        eventType: 'pan',
        props
      }, (e) => {
        if (e.state === 'end' || e.state === 'cancel' || e.state === 'exit') {
          this.lock = false;
          // 限制 circleLeft 范围
          this.circleLeft = this._restrictValue(Math.max(0, Math.floor((this.circleLeft + e.deltaX) / this.scaleValue) * this.scaleValue));
          setTimeout(() => { this.indicatorShow = false; }, 40);
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
    },
    // 根据 value 和 length 计算 x 方向偏移值
    _getLeftDiff (value) {
      return ((value - this.min) / (this.max - this.min)) * this.length;
    }
  },
  created () {
    if (Utils.env.isWeb()) {
      this.env = 'web';
      this.DPR = window.devicePixelRatio ? window.devicePixelRatio : 1;
    } else {
      this.DPR = weex.config.env.scale;
    }
  },
  mounted () {
    this.wrapEl = this.$refs['bar-wrap'];
    this.circleEl = this.$refs['slide-circle'];
    this.valueBarEl = this.$refs['value-bar'];
    this.indicatorEl = this.$refs['indicator'];

    this.circleLeft = this._getLeftDiff(this.inValue || this.defaultValue);
    this.indicatorEl && animation.transition(this.indicatorEl, {
      styles: {
        transform: `translateX(${this.circleLeft}px)`
      },
      duration: 0.0001
    });

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
      this.indicatorEl && Binding.prepare({
        anchor: this.indicatorEl.ref,
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

    // 算出刻度值，手指移动时会以刻度值整数移动
    this.scaleValue = this.length / (this.max - this.min);

    this.$nextTick(() => {
      this.loaded = true;
    });
  }
};
</script>

<style scoped>
  .container {
    height: 46px;
  }

  .container-indicator {
    height: 144px;
    padding: 0 16px;
    justify-content: flex-end;
  }

  .container-haslevels {
    height: 144px;
    align-items: center;
    justify-content: flex-end;
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
    position: absolute;
    left: 0;
    top: 0;
    /* overflow: hidden; */
  }

  .slide-circle {
    width: 46px;
    height: 46px;
    border-radius: 23px;
    position: absolute;
    left: 0px;
    bottom: 0;
  }

  .indicator {
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

  .levels-wrap {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 15px;
  }

  .level-item {
    width: 72px;
    text-align: center;
    color: rgba(0, 0, 0, 0.4);
    font-size: 36px;
  }
</style>
