<!-- CopyRight (C) 2018-2022 FlymeApps Team Holding Limited. -->
<!-- Created by Yanjiie on 18/04/03. -->
<template>
  <div v-if="!isCreator" class="fm-tab-page"
       :style="{ height: (tabPageHeight) + 'px', opacity: loaded ? 1 : 0}">
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
             :ref="'fm-tab-title-'+idx"
             :style="{ borderBottomWidth: currentPage === idx ? '3px' : '0px' }">
          <text class="item-title"
                :style="{ fontSize: cTabStyles.fontSize + 'px',
                          color: currentPage === idx ? cTabStyles.activeTitleColor : cTabStyles.titleColor,
                          paddingLeft: cTabStyles.padding + 'px',
                          paddingRight: cTabStyles.padding + 'px' }">{{ v.text }}</text>
        </div>
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
        <div class="tab-item"
             v-for="(v, idx) in tabTitles"
             :key="idx"
             :style="{ height: (tabPageHeight-cTabStyles.height) + 'px' }">
          <slot :name="`tab-item-${idx}`"></slot>
        </div>
      </div>
    </div>
  </div>

  <FmTab v-else
         :style="{ height: (tabPageHeight) + 'px' }"
         :container="{
            viewpagepaddingLeft: 0,
            viewpagepaddingRight: 0,
            viewpagepaddingTop: cTabStyles.height + 12,
            viewpagepaddingBottom: 0,
            tabpaddingLeft: 48,
            tabpaddingRight: 48,
            tabpaddingTop: 0,
            tabpaddingBottom: 0
         }"
         :tab="cTabTitles"
         @tabPosition="nativeTabSlided">
    <div class="tab-item"
         v-for="(v, idx) in tabTitles"
         :key="idx"
         :style="{ height: (tabPageHeight-cTabStyles.height-12) + 'px' }">
      <slot :name="`tab-item-${idx}`"></slot>
    </div>
  </FmTab>
</template>

<style scoped>
  .fm-tab-page {
    width: 1080px;
  }

  .tab-title-list {
    width: 1080px;
    flex-direction: row;
    border-bottom-width: 2px;
    border-color: rgba(0,0,0,0.10);
  }

  .tab-title-wrap {
    flex-direction: row;
    justify-content: space-around;
    padding: 0 48px;
  }

  .title-item {
    border-color: #198DED;
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

  .tab-item {
    width: 1080px;
  }
</style>

<script>
const animation = weex.requireModule('animation');
const dom = weex.requireModule('dom');
const isH5 = weex.config.env.platform === 'Web';

export default {
  name: 'FmNativeTab',
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
      default: 1854
    },
    tabStyles: {
      type: Object,
      default: () => ({})
    },
    timingFunction: {
      type: String,
      default: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    },
    selectIndex: {
      type: Number,
      default: 0
    }
  },
  watch: {
    selectIndex (val) {
      if (this.loaded) {
        this.setPage(this.selectIndex, false);
      }
    }
  },
  computed: {
    isCreator () {
      return weex.supports && weex.supports('@component/FmTab');
    },
    maxPage () {
      return this.tabTitles.length - 1;
    },
    cTabTitles () {
      const { tabStyles } = this;
      const def = {
        paddingStart: 18,
        paddingEnd: 18,
        minWidth: 120,
        textunSelectColor: tabStyles.activeTitleColor || '#99000000',
        textSelectColor: tabStyles.titleColor || '#198DED'
      };
      return this.tabTitles.map(item => {
        return Object.assign({}, def, item);
      });
    },
    cTabStyles () {
      const defaultStyle = {
        titleColor: 'rgba(0, 0, 0, 0.6)',
        activeTitleColor: '#198DED',
        height: 102,
        padding: 18,
        fontSize: 42,
        activeBottomColor: '#198DED'
      };
      return Object.assign({}, defaultStyle, this.tabStyles);
    }
  },
  data: () => ({
    loaded: false,
    currentPage: 0,
    gesToken: 0,
    isMoving: false,
    startTime: 0,
    deltaX: 0,
    translateX: 0,
    startPosX: 0,
    startPosY: 0,
    judge: 'INITIAL'
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
    setPage (page, animated = true) {
      if (this.isMoving === true || this.tabTitles.length <= 0) {
        return;
      }
      this.isMoving = true;
      const currentTabEl = this.$refs[`fm-tab-title-${page}`][0];
      const tabWidth = this.$refs[`fm-tab-title-${page}`][0].$el.clientWidth;
      const tabOffset = this.$refs[`fm-tab-title-${page}`][0].$el.offsetLeft;

      if (tabOffset >= 1080 / 2) {
        dom.scrollToElement(currentTabEl, {
          offset: -1080 / 2 + tabWidth / 2,
          animated
        });
      } else {
        dom.scrollToElement(currentTabEl, {
          offset: -tabOffset,
          animated
        });
      }

      this.currentPage = page;
      this._animateTransformX(page, animated);
      this.$emit('fmTabPageTabSelected', { page });
    },
    nativeTabSlided (e) {
      this.$emit('fmTabPageTabSelected', { page: e.position });
    },
    _animateTransformX (page, animated = true) {
      const { duration, timingFunction } = this;
      const containerEl = this.$refs[`tab-container`];
      const dist = page * 1080;
      animation.transition(containerEl, {
        styles: {
          transform: `translateX(${-dist}px)`
        },
        duration: animated ? duration : 0.00001,
        timingFunction,
        delay: 0
      }, () => {
        this.isMoving = false;
      });
    },
    _getTouchXPos (e) {
      return e.changedTouches[0]['pageX'];
    },
    _getTouchYPos (e) {
      return e.changedTouches[0]['pageY'];
    }
  },
  mounted () {
    if (this.isCreator) { return; }
    this.setPage(this.selectIndex, false);
    setTimeout(() => {
      this.loaded = true;
    }, 50);
  }
};
</script>
