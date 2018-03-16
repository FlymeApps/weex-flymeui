<!-- Created by Yanjiie on 18/03/06. -->
<template>
  <div class="fm-tab-page"
       :style="{ height: (tabPageHeight) + 'px' }">
    <scroller class="tab-title-list"
              ref="tab-title-list"
              :show-scrollbar="false"
              scroll-direction="horizontal"
              :style="{ height: (cTabStyles.height) + 'px'}">

      <div class="tab-title-wrap"
           ref="tab-title-wrap">
        <div class="title-item"
             v-for="(v, idx) in tabTitles"
             :key="idx"
             @click="setPage(idx)"
             :ref="'fm-tab-title-'+idx">
          <text class="item-title"
                :style="{ fontSize: cTabStyles.fontSize + 'px', color: currentPage === idx ? cTabStyles.activeTitleColor : cTabStyles.titleColor, paddingLeft: cTabStyles.padding + 'px', paddingRight: cTabStyles.padding + 'px'}">{{ v.title }}</text>
        </div>
        <div class="border-bottom"
              ref="tab-border"
              :style="{ width: bottomInitWidth + 'px', transform: `translateX(${bottomInitOffset}px)`, backgroundColor: cTabStyles.activeBottomColor}"></div>
      </div>
    </scroller>
    <div class="tab-page-wrap"
         ref="tab-page-wrap"
         @panstart="_onTouchStart"
         @panmove="_onTouchMove"
         @panend="_onTouchEnd"
         :style="{ height: (tabPageHeight-cTabStyles.height) + 'px' }">
      <div class="tab-container"
           ref="tab-container">
        <slot></slot>
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
    border-bottom-width: 2px;
    border-color: rgba(0,0,0,0.10);
  }

  .title-item {
    padding: 27px 18px;
    margin-right: 42px;
  }

  .item-title {
    font-family: sans-serif-medium;
    font-weight: 500;
    font-size: 42px;
    line-height: 57px;
  }

  .border-bottom {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 132px;
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
</style>

<script>
import { isWeex } from 'universal-env';
import Binding from 'weex-bindingx';
const animation = weex.requireModule('animation');
const dom = weex.requireModule('dom');
const isH5 = weex.config.env.platform === 'Web';

export default {
  name: 'FmTabPage',
  props: {
    tabTitles: {
      type: Array,
      default: () => ([])
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
      default: () => ({})
    },
    timingFunction: {
      type: String,
      default: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    }
  },
  computed: {
    maxPage () {
      return this.tabTitles.length - 1;
    },
    cTabStyles () {
      const defaultStyle = {
        titleColor: 'rgba(0, 0, 0, 0.6)',
        activeTitleColor: '#198DED',
        height: 102 + 'px',
        padding: 18 + 'px',
        fontSize: 42 + 'px',
        activeBottomColor: '#198DED'
      };
      return Object.assign({}, defaultStyle, this.tabStyles);
    }
  },
  data: () => ({
    currentPage: 0,
    gesToken: null,
    isMoving: false,
    startTime: 0,
    deltaX: 0,
    translateX: 0,
    startPosX: 0,
    startPosY: 0,
    judge: 'INITIAL',
    bottomInitWidth: 0,
    bottomInitOffset: 48,
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
      if (!this.isMoving && element && this.getEl(element)) {
        const tabPageEl = this.getEl(this.$refs['tab-container']);
        const tabBorderEl = this.getEl(this.$refs['tab-border']);
        const tabScrollEl = this.getEl(this.$refs['tab-title-list']);
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
         * 变化描述：
         *  当 currWidth === toWidth 时:
         *    动画公式：currWidth -> toWidth (currWidth 递增至 toWidth)
         *  当 currWidth !== toWidth 时:
         *    动画公式：currWidth -> peakWidth -> toWidth (currWidth 先递增至 peakWidth 然后递减至 toWidth)
         * peakWidth 峰值计算公式：peakWidth = currWidth / 2 + currWidth
         */
        // 滑向下一页的宽度变化动画插值表达式
        const peakValue = currWidth / 2;
        // 滑向下一页的宽度变化动画插值器
        const nextInterpolator = nextWidth === currWidth ? `(abs(x) <= 540 ? (abs(x)/540 * ${peakValue}) : (2-abs(x)/540) * ${peakValue})` : `(abs(x)/1080 * ${nextWidth - currWidth})`;
        // 滑向上一页的宽度变化动画插值器
        const prevInterpolator = prevWidth === currWidth ? `(abs(x) <= 540 ? (abs(x)/540 * ${peakValue}) : (2-abs(x)/540) * ${peakValue})` : `(abs(x)/1080 * ${prevWidth - currWidth})`;
        // bottom border 宽度变化动画插值器
        let borderWidthExp = `${currWidth} + (x > 0 ? ${prevInterpolator} : ${nextInterpolator})`;

        // tab scroller 滑动动画插值表达式
        const tabScrollExp = `${(currOffset - 540 + currWidth / 2)} - x / 1080 * ${(nextOffset - 540 + nextWidth / 2) - (currOffset - 540 + currWidth / 2)} - ${(currOffset - 540) < 0 ? 48 : 0}`;

        // 当页数为 0 或 max 时去除尽头动画
        if (currentPage === 0) {
          tabExp = `x >= 0 ? 0 : x`;
          borderWidthExp = `x >= 0 ? ${currWidth} : ${borderWidthExp}`;
        } else if (currentPage === maxPage) {
          tabExp = `x <= 0 ? ${-maxPage * 1080} : x + ${-dist}`;
          borderWidthExp = `x <= 0 ? ${currWidth} : ${borderWidthExp}`;
        }

        const props = [{
          element: tabPageEl,
          property: 'transform.translateX',
          expression: {
            origin: tabExp
          }
        }, {
          element: tabBorderEl,
          property: 'transform.translateX',
          expression: borderMoveExp
        }, {
          element: tabBorderEl,
          property: 'width',
          expression: borderWidthExp
        }, {
          element: tabScrollEl,
          property: 'scroll.contentOffset',
          expression: tabScrollExp
        }];

        if (this.gesToken) {
          Binding.unbind(this.gesToken);
        }

        this.gesToken = Binding.bind({
          anchor: this.getEl(element),
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
      const currentTabEl = this.$refs[`fm-tab-title-${page}`][0];
      const tabWidth = this.tabPositions[page].width;
      const tabOffset = this.tabPositions[page].offset;

      if (tabOffset >= 1080 / 2) {
        dom.scrollToElement(currentTabEl, {
          offset: -1080 / 2 + tabWidth / 2,
          animated: true
        });
      } else {
        dom.scrollToElement(currentTabEl, {
          offset: -tabOffset,
          animated: true
        });
      }

      this.isMoving = false;
      this.currentPage = page;
      this._animateTransformX(page);
      this._animateBorder(page);
      this.$emit('fmTabPageTabSelected', { page });
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
      });
    },
    _animateBorder (page) {
      const { duration, timingFunction, tabPositions } = this;
      const borderEl = this.$refs[`tab-border`];
      const dist = tabPositions[page].offset;
      animation.transition(borderEl, {
        styles: {
          transform: `translateX(${dist}px)`,
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
      const { tabTitles } = this;
      tabTitles.map((item, i) => {
        dom.getComponentRect(this.$refs['fm-tab-title-' + i][0], rect => {
          this.tabPositions[i] = {
            width: rect.size.width,
            offset: rect.size.left
          };
          i === 0 && (this.bottomInitWidth = rect.size.width);
        });
      });
    }
  },
  mounted () {
    const tabPageEl = this.getEl(this.$refs['tab-page-wrap']);
    Binding.prepare && Binding.prepare({
      anchor: tabPageEl,
      eventType: 'pan'
    });
    setTimeout(() => {
      this._calculatePositions();
    }, 50);
  }
};
</script>
