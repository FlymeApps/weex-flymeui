<!-- Created by Yanjiie on 18/03/06. -->
<template>
  <div class="fm-tab-page"
       :style="{ height: (tabPageHeight)+'px' }">
    <scroller class="tab-title-list"
              ref="tab-title-list"
              :show-scrollbar="false"
              scroll-direction="horizontal"
              :style="{ height: (tabStyles.height)+'px'}">

      <div class="tab-title-wrap"
           ref="tab-title-wrap">
        <div class="title-item"
             v-for="(item, idx) in tabTitles"
             :key="idx"
             @click="setPage(idx)"
             :ref="'fm-tab-title-'+idx">
          <text class="item-title">{{ item }}</text>
        </div>
        <div class="border-bottom"
             ref="tab-border"
             :style="{ transform: `translateX(${offsetLeft}px)`}"></div>
      </div>
    </scroller>
    <div class="tab-page-wrap"
         ref="tab-page-wrap"
         @panstart="_onTouchStart"
         @panmove="_onTouchMove"
         @panend="_onTouchEnd"
         :style="{ height: (tabPageHeight-tabStyles.height)+'px' }">
      <div class="tab-container"
           ref="tab-container">
        <div class="tab1"></div>
        <div class="tab2"></div>
        <div class="tab3"></div>
        <div class="tab2"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .fm-tab-page {
    width: 1080px;
  }

  .tab-title-list {
    width: 1080px;
    flex-direction: row;
  }

  .tab-title-wrap {
    flex-direction: row;
    justify-content: space-around;
    padding: 0 48px;
  }

  .title-item {
    padding: 27px 18px;
    margin-right: 42px;
  }

  .item-title {
    font-family: sans-serif-medium;
    font-size: 42px;
    color: #198DED;
    line-height: 57px;
  }

  .border-bottom {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 132px;
    background-color: #198DED;
  }

  .tab-page-wrap {
    width: 1080px;
    overflow: hidden;
  }

  .tab-container {
    flex: 1;
    flex-direction: row;
    position: absolute;
  }

  .tab1 {
    width: 1080px;
    height: 1080px;
    background-color: red;
    margin-top: 20px;
  }

  .tab2 {
    width: 1080px;
    height: 1080px;
    background-color: blue;
    margin-top: 20px;
  }

  .tab3 {
    width: 1080px;
    height: 1080px;
    background-color: green;
    margin-top: 20px;
  }
</style>

<script>
import { isWeex } from 'universal-env';
import BindingX from 'weex-bindingx';
const animation = weex.requireModule('animation');
const modal = weex.requireModule('modal');
const dom = weex.requireModule('dom');
const isH5 = weex.config.env.platform === 'Web';

export default {
  props: {
    tabTitles: {
      type: Array,
      default: () => (['选项', '选项选项选项选项', '选项', '选项'])
    },
    panDist: {
      type: Number,
      default: 200
    },
    duration: {
      type: [Number, String],
      default: 300
    },
    tabPageHeight: {
      type: [String, Number],
      default: 1920
    },
    tabStyles: {
      type: Object,
      default: () => ({
        height: 102,
        padding: 18,
        fontSize: 42
      })
    },
    timingFunction: {
      type: String,
      default: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    }
  },
  computed: {
    maxPage () {
      return this.tabTitles.length - 1;
    }
  },
  data: () => ({
    currentPage: 0,
    x: 0,
    gesToken: null,
    isMoving: false,
    startTime: 0,
    deltaX: 0,
    translateX: 0,
    startPosX: 0,
    startPosY: 0,
    judge: 'INITIAL',
    offsetLeft: 48,
    tabPositions: []
  }),
  methods: {
    next () {
      let page = this.currentPage;
      if (page < this.maxPage) {
        page++;
      }
      this.setPage(page);
    },
    prev () {
      let page = this.currentPage;
      if (page > 0) {
        page--;
      }
      this.setPage(page);
    },
    _onTouchStart (e) {
      if (isH5) {
        this.startPosX = this._getTouchXPos(e);
        this.startPosY = this._getTouchYPos(e);
        this.deltaX = 0;
        this.startTime = new Date().getTime();
      } else {
        this.bindExp(this.$refs['tab-page-wrap']);
      }
    },
    _onTouchMove (e) {
      if (isH5) {
        this.deltaX = this._getTouchXPos(e) - this.startPosX;
        this.deltaY = Math.abs(this._getTouchYPos(e) - this.startPosY + 1);
        if (this.judge === 'INITIAL' && Math.abs(this.deltaX) / this.deltaY > 1.73) {
          this.judge = 'SLIDE_ING';
        }
      }
    },
    _onTouchEnd (e) {
      if (isH5) {
        if (this.judge === 'SLIDE_ING') {
          if (this.deltaX < -50) {
            this.next();
          } else if (this.deltaX > 50) {
            this.prev();
          }
        }
        this.judge = 'INITIAL';
      }
    },
    bindExp (element) {
      if (!this.isMoving && element && element.ref) {
        const tabPageEl = this.$refs['tab-container'];
        const tabBorderEl = this.$refs['tab-border'];
        const { currentPage, panDist, maxPage } = this;
        const dist = currentPage * 1080; // tab 页偏移距离

        const currOffset = this.tabPositions[currentPage].offset; // 当前 title 偏移量
        const currWidth = this.tabPositions[currentPage].width; // 当前 title 宽度
        const prevOffset = this.tabPositions[currentPage <= 0 ? 0 : currentPage - 1].offset; // 上一页 title 偏移量
        const prevWidth = this.tabPositions[currentPage <= 0 ? 0 : currentPage - 1].width; // 上一页 title 宽度
        const nextOffset = this.tabPositions[currentPage >= maxPage ? maxPage : currentPage + 1].offset; // 下一页 title 偏移量
        const nextWidth = this.tabPositions[currentPage >= maxPage ? maxPage : currentPage + 1].width; // 上一页 title 宽度

        // binding props
        let tabExp = `x + ${-dist}`; // tab 页插值表达式

        // bottom border 偏移动画插值表达式
        const borderMoveExp = `x / 1080 * (x > 0 ? -${currOffset - prevOffset} : -${nextOffset - currOffset}) + ${currOffset}`;

        /**
         * bottom border 宽度动画变化规则描述
         * @param currWidth 当前 tab 宽度(起始宽度)
         * @param peakWidth 峰值宽度
         * @param toWidth 最终宽度
         * 变化描述：currWidth -> peakWidth -> toWidth (currWidth 先递增至 peakWidth，然后递减至 toWidth)
         * 峰值宽度计算公式：peakWidth = (toWidth - currWidth) + currWidth / 2 + currWidth
         */
        // 滑向下一页的宽度变化动画插值表达式
        const nextInterpolator = `(abs(x) <= 540 ? (abs(x)/540 * ${(nextWidth - currWidth) + currWidth / 2}) : ((abs(x)-540)/540 * ${nextWidth - currWidth - ((nextWidth - currWidth) + currWidth / 2)} + ${(nextWidth - currWidth) + currWidth / 2}))`;
        // 滑向上一页的宽度变化动画插值器
        const prevInterpolator = `(abs(x) <= 540 ? (abs(x)/540 * ${(prevWidth - currWidth) + currWidth / 2}) : ((abs(x)-540)/540 * ${prevWidth - currWidth - ((prevWidth - currWidth) + currWidth / 2)} + ${(prevWidth - currWidth) + currWidth / 2}))`;
        // bottom border 宽度变化动画插值器
        let borderWidthExp = `${currWidth} + (x > 0 ? ${prevInterpolator} : ${nextInterpolator})`;

        // 当页数为 0 或 max 时去除尽头动画
        if (currentPage === 0) {
          tabExp = `x >= 0 ? 0 : x`;
          // borderMoveExp = `x >= 0 ? ${this.offsetLeft} : (x / 1080 * -${nextOffset - prevOffset})`; // 边框移动距离 = width(title-item) + marginRight(title-item) + paddingLeft(tab-title-list)
          borderWidthExp = `x >= 0 ? ${currWidth} : ${borderWidthExp}`;
        } else if (currentPage === maxPage) {
          tabExp = `x <= 0 ? ${-maxPage * 1080} : x + ${-dist}`;
          // borderMoveExp = `x <= 0 ? ${2 * 174} : ${borderCurrX} + x / 1080 * -174`;
          // borderWidthExp = `x <= 0 ? ${currWidth} : ${borderWidthExp}`;
        }
        const props = [{
          element: tabPageEl.ref,
          property: 'transform.translateX',
          expression: {
            origin: tabExp
          }
        }, {
          element: tabBorderEl.ref,
          property: 'transform.translateX',
          expression: borderMoveExp
        }, {
          element: tabBorderEl.ref,
          property: 'width',
          expression: borderWidthExp,
          config: {
            perspective: 1000,
            transformOrigin: 'left'
          }
        }];

        if (this.gesToken) {
          BindingX.unbind(this.gesToken);
        }

        this.gesToken = BindingX.bind({
          anchor: element.ref,
          eventType: 'pan',
          props
        }, (e) => {
          const { deltaX, state } = e;
          if (state === 'end') {
            if (deltaX < -panDist) {
              this.next();
            } else if (deltaX > panDist) {
              this.prev();
            } else {
              this.setPage(currentPage);
            }
          }
        });
      }
    },
    setPage (page, url = null) {
      if (this.isMoving === true) {
        return;
      }
      this.isMoving = true;
      this.currentPage = page;
      this._animateTransformX(page);
      this._animateBorder(page);
      // this.isMoving = false;
    },
    _animateTransformX (page) {
      const { duration, timingFunction } = this;
      const containerEl = this.$refs[`tab-container`];
      const dist = page * 1080;
      this.x = -dist;
      animation.transition(containerEl, {
        styles: {
          transform: `translateX(${-dist}px)`
        },
        duration: duration,
        timingFunction,
        delay: 0
      }, () => {
        this.isMoving = false;
      });
    },
    _animateBorder (page) {
      const { duration, timingFunction, tabPositions } = this;
      const borderEl = this.$refs[`tab-border`];
      const dist = tabPositions[page].offset; // 边框移动距离 = width(title-item) + marginRight(title-item) + paddingLeft(tab-title-list)
      modal.toast({ message: dist });
      animation.transition(borderEl, {
        styles: {
          transform: ` translateX(${dist}px)`,
          width: tabPositions[page].width
        },
        duration: duration,
        timingFunction,
        needLayout: false
      }, () => {
      });
    },
    _getTouchXPos (e) {
      return e.changedTouches[0]['pageX'];
    },
    _getTouchYPos (e) {
      return e.changedTouches[0]['pageY'];
    },
    getEl (el) {
      if (typeof el === 'string' || typeof el === 'number') return el;
      return isWeex ? el.ref : el instanceof HTMLElement ? el : el.$el;
    },
    _calculatePositions () {
      const { tabTitles, tabStyles } = this;
      let currPosition = 48;
      tabTitles.map((item, i) => {
        const tabWidth = tabStyles.padding * 2 + tabStyles.fontSize * item.length;
        this.tabPositions[i] = {
          width: tabWidth,
          offset: currPosition
        };
        currPosition += (tabWidth + 42);
      });
    }
  },
  mounted () {
    const tabPageEl = this.$refs['tab-page-wrap'];
    BindingX.prepare && BindingX.prepare({
      anchor: tabPageEl.ref,
      eventType: 'pan'
    });
    this._calculatePositions();
    console.log(this.tabPositions);
  }
};
</script>
