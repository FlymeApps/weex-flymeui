<template>
  <div class="fm-banner-wrap"
       ref="sliderCtn"
       @panstart="onPanStart"
       @panmove="onPanMove"
       @panend="onPanEnd"
       @horizontalpan="startHandle">
    <div class="card-list"
         ref="card-list"
         :style="{ left: -(792 + 792) + 'px' }">
      <div v-for="(item, index) in outOfLeft" class="card-item" :key="index" :ref="`card${index-2}`" :style="index === 1 && { transform: `translateX(-12px)` }">
        <image :style="{ height: cardS.width, height: cardS.height }" :src="item" />
      </div>
      <div v-for="(item, index) in outOfRight" class="card-item" :key="index" :ref="`card${index}`">
        <image :style="{ height: cardS.width, height: cardS.height }" :src="item" />
      </div>
      <!-- <div v-for="(item, index) in [1,2]" class="card-item" :key="index" :ref="`card${5 + index}`">
        <text>这是第 {{ item }} 个</text>
      </div> -->
    </div>
  </div>
</template>

<style scoped>
  .fm-banner-wrap {
    width: 1080px;
    padding: 24px 0 24px 24px;
    flex-direction: row;
    height: 386px;
    overflow: hidden;
  }

  .card-list {
    position: absolute;
    flex-direction: row;
    height: 338px;
  }

  .card-item {
    width: 792px;
    height: 338px;
    margin-right: 12px;
    border-radius: 6px;
    overflow: hidden;
  }
</style>

<script>
const animation = weex.requireModule('animation');
import Utils from '../utils';
import { isWeex } from 'universal-env';
import Binding from 'weex-bindingx';

export default {
  props: {
    cardLength: {
      type: Number,
      default: 5
    },
    items: {
      type: Array,
      default: () => ([])
    },
    panOffset: {
      type: Number,
      default: 80
    },
    selectIndex: {
      type: Number,
      default: 0
    },
    cardS: {
      type: Object,
      default: () => ({
        width: 792,
        height: 338
      })
    },
    autoPlay: {
      type: Boolean,
      default: false
    },
    interval: {
      type: [Number, String],
      default: 4000
    },
    timingFunction: {
      type: String,
      default: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    }
  },
  data: () => ({
    selectIndex: 0,
    currentPage: 0,
    gesToken: 0,
    isMoving: false,
    startX: 0,
    startTime: 0,
    currentIndex: 0,
    autoPlayTimer: null
  }),
  computed: {
    outOfLeft () {
      const { items } = this;
      let lItems = [];
      if (items.length >= 2) {
        lItems = items.slice(-2);
      }
      return lItems;
    },
    outOfRight () {
      const { items } = this;
      let cItems = items;
      if (items.length >= 2) {
        cItems = cItems.concat(items.slice(0, 2));
      }
      return cItems;
    }
  },
  methods: {
    startHandle (e) {
      if (Utils.env.supportsEB() && e.state === 'start') {
        this.clearAutoPlay();
        setTimeout(() => {
          const sliderCtn = this.$refs[`sliderCtn`];
          this.bindExp(sliderCtn);
        }, 0);
      }
    },
    onPanStart (e) {
      if (Utils.env.supportsEB()) {
        return;
      }
      this.clearAutoPlay();
      this.startX = e.changedTouches[0].clientX;
      this.startTime = Date.now();
    },
    onPanMove (e) {
      if (Utils.env.supportsEB() || this.isMoving) {
        return;
      }
      const moveX = e.changedTouches[0].clientX - this.startX;
      const currentCardLeft = this.currentIndex * (this.cardS.width + 12);

      const listEl = this.$refs['card-list'];
      listEl && animation.transition(listEl, {
        styles: {
          transform: `translateX(${moveX - currentCardLeft}px)`
        },
        timingFunction: 'ease',
        delay: 0,
        duration: 0
      }, () => {
      });
    },
    onPanEnd (e) {
      if (Utils.env.supportsEB()) {
        return;
      }
      this.panEnd(e);
    },
    panEnd (e) {
      this.isMoving = true;
      let moveX = e.deltaX;

      if (Utils.env.isWeb()) {
        moveX = e.changedTouches[0].clientX - this.startX;
      }

      const originIndex = this.currentIndex;
      let selectIndex = originIndex;
      const duration = Date.now() - this.startTime;
      const panOffset = this.panOffset || (this.cardS.width / 2);

      if (moveX < -panOffset || (moveX < -10 && duration < 200)) {
        // 允许向右越界
        if (selectIndex !== this.cardLength) {
          selectIndex++;
        }
      } else if (moveX > panOffset || (moveX > 10 && duration < 500)) {
        // 允许向左越界
        if (selectIndex !== -2) {
          selectIndex--;
        }
      }

      this.slideTo(originIndex, selectIndex);
      setTimeout(() => { this.checkNeedAutoPlay(); }, 4000);
    },
    bindExp (element) {
      if (element && element.ref) {
        if (this.isMoving && this.gesToken !== 0) {
          Binding.unbind({
            eventType: 'pan',
            token: this.gesToken
          });
          this.gesToken = 0;
          return;
        }

        const { currentIndex, cardS } = this;
        const dist = currentIndex * (cardS.width + 12);
        const listEl = this.getEl(this.$refs['card-list']);

        // 卡片容器
        const props = [{
          element: listEl,
          property: 'transform.translateX',
          expression: `${-dist}+x`
        }];

        // 当前卡片
        const currCardEl = this.getEl(this.$refs[`card${currentIndex}`][0]);
        props.push({
          element: currCardEl,
          property: 'transform.translateX',
          expression: `x <= 0 ? (x / 792 * 12) : 0`
        });
        // 上一张卡片
        const lastCardEl = this.getEl(this.$refs[`card${currentIndex - 1}`][0]);
        props.push({
          element: lastCardEl,
          property: 'transform.translateX',
          expression: `x > 0 ? (1 - (x / 792)) * -12 : -12`
        });

        const gesTokenObj = Binding.bind({
          eventType: 'pan',
          anchor: this.getEl(element),
          props
        }, (e) => {
          if (!this.isMoving && (e.state === 'end' || e.state === 'cancel' || e.state === 'exit')) {
            this.panEnd(e);
          }
        });

        this.gesToken = gesTokenObj.token;
      }
    },
    slideTo (originIndex, selectIndex) {
      const { cardS, timingFunction } = this;
      const listEl = this.$refs['card-list'];
      const dist = selectIndex * (cardS.width + 12);
      // 卡片容器
      listEl && animation.transition(listEl, {
        styles: {
          transform: `translateX(${-dist}px)`
        },
        duration: 500,
        timingFunction
      }, (e) => {
        this.isMoving = false;
        if (originIndex !== selectIndex) {
          this.currentIndex = selectIndex;
        }
        this.checkNeedReset();
      });

      // 下一页
      if (originIndex < selectIndex) {
        // 当前卡片
        const currCard = this.$refs[`card${this.currentIndex}`];
        currCard && animation.transition(currCard[0], {
          styles: {
            transform: `translateX(-12px)`
          },
          duration: 500,
          timingFunction
        });
        // 上一张卡片
        const lastCard = this.$refs[`card${this.currentIndex - 1}`];
        lastCard && animation.transition(lastCard[0], {
          styles: {
            transform: `translateX(0px)`
          },
          duration: 500,
          timingFunction
        });
      // 上一页
      } else if (originIndex > selectIndex) {
        // 上一张卡片
        const lastCard = this.$refs[`card${this.currentIndex - 1}`];
        lastCard && animation.transition(lastCard[0], {
          styles: {
            transform: `translateX(0px)`
          },
          duration: 500,
          timingFunction
        });
        // 上上张卡片
        console.log(this.currentIndex - 2);
        const llastCard = this.$refs[`card${this.currentIndex - 2}`];
        llastCard && animation.transition(llastCard[0], {
          styles: {
            transform: `translateX(-12px)`
          },
          duration: 500,
          timingFunction
        });
      }
    },
    // 检查页数是否达到临界条件进行重置处理，临界值 -2 ~ cardLength
    checkNeedReset () {
      const { cardS, timingFunction } = this;
      const listEl = this.$refs['card-list'];
      // 向右越界 重置为第一页
      if (this.currentIndex >= this.cardLength) {
        this.currentIndex = 0;
        animation.transition(this.$refs[`card${this.cardLength - 1}`][0], {
          styles: {
            transform: `translateX(0px)`
          },
          duration: 0.00001,
          timingFunction
        });
        animation.transition(this.$refs[`card-1`][0], {
          styles: {
            transform: `translateX(-12px)`
          },
          duration: 0.00001,
          timingFunction
        });
      // 向左越界 重置为倒数第二页
      } else if (this.currentIndex === -2) {
        this.currentIndex = this.cardLength - 2;
        animation.transition(this.$refs[`card${this.cardLength - 3}`][0], {
          styles: {
            transform: `translateX(-12px)`
          },
          duration: 0.00001,
          timingFunction
        });
      } else {
        return;
      }
      listEl && animation.transition(listEl, {
        styles: {
          transform: `translateX(${-this.currentIndex * (cardS.width + 12)}px)`
        },
        duration: 0.00001,
        timingFunction
      });
    },
    checkNeedAutoPlay () {
      if (this.autoPlay) {
        this.clearAutoPlay();
        this.autoPlayTimer = setInterval(() => {
          this.slideTo(this.currentIndex, this.currentIndex + 1);
        }, parseInt(this.interval));
      }
    },
    clearAutoPlay () {
      this.autoPlayTimer && clearInterval(this.autoPlayTimer);
    },
    getEl (el) {
      if (typeof el === 'string' || typeof el === 'number') return el;
      return isWeex ? el.ref : el instanceof HTMLElement ? el : el.$el;
    }
  },
  mounted () {
    // console.log(this.outOfLeft);
    // console.log(this.outOfRight);
    setTimeout(() => {
      const sliderCtn = this.$refs[`sliderCtn`];
      if (Utils.env.supportsEB() && sliderCtn && sliderCtn.ref) {
        Binding.prepare && Binding.prepare({
          anchor: sliderCtn.ref,
          eventType: 'pan'
        });
      }
    }, 20);
    this.checkNeedAutoPlay();
  }
};
</script>
