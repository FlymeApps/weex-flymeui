<!-- CopyRight (C) 2018-2022 FlymeApps Group Holding Limited. -->
<!-- Created by Yanjiie on 2018/3/9. -->
<template>
  <div class="fm-item" @click="itemClicked" @longpress="itemLongpress">
    <div class="item-wrapper" :style="wrapStyle">
      <div v-if="imgSrc" class="image">
        <fm-image :src="imgSrc"
                  :width="scene.imgWidth || imgWidth"
                  :height="scene.imgHeight || imgHeight"
                  :style="{ borderRadius: scene.imgRadius || imgRadius }"
                  :occupyingColor="occupyingColor"></fm-image>
      </div>
      <div class="content">
        <slot name="left">
        </slot>
        <div class="content-text">
          <slot name="title">
            <text v-if="title" class="text-title" :style="{ color: titleColor }">{{ title }}</text>
          </slot>
          <text v-if="summary" class="text-summary" :style="{ color: summaryColor }">{{ summary }}</text>
          <text v-if="description" class="text-description" :style="{ color: descColor }">{{ description }}</text>
        </div>
        <slot name="right">
        </slot>
      </div>
    </div>
    <div class="item-border" :style="{ marginLeft: imgSrc ? (scene.imgWidth || imgWidth) + 48 : 0 }"></div>
  </div>
</template>

<style scoped>
  .fm-item {
    padding: 0 48px;
  }

  .fm-item:active {
    background-color: rgba(0, 0, 0, 0.05);
  }

  .item-wrapper {
    flex-direction: row;
    align-items: center;
  }

  .item-border {
    background-color: rgba(0, 0, 0, 0.1);
    height: 2px;
  }

  .content {
    flex: 1;
    flex-direction: row;
  }

  .content-text {
    flex: 1;
    justify-content: center;
  }

  .text-title {
    font-size: 48px;
    color: #000000;
    line-height: 57px;
    text-overflow: ellipsis;
    lines: 1;
  }

  .text-summary {
    margin-top: 9px;
    font-size: 36px;
    color: rgba(0, 0, 0, 0.4);
    line-height: 42px;
    text-overflow: ellipsis;
    lines: 1;
  }

  .text-description {
    flex: 1;
    margin-top: 9px;
    font-size: 36px;
    color: rgba(0, 0, 0, 0.4);
    line-height: 42px;
  }

  .image {
    margin-right: 48px;
  }
</style>

<script>
import FmImage from '../fm-image';
import Scene from './scene';

export default {
  name: 'FmItem',
  components: { FmImage },
  props: {
    type: {
      type: String,
      default: 'normal'
    },
    title: String,
    summary: String,
    description: String,
    imgSrc: String,
    titleColor: {
      type: String,
      default: '#000000'
    },
    summaryColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0.4)'
    },
    descColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0.4)'
    },
    imgWidth: {
      type: Number,
      default: 96
    },
    imgHeight: {
      type: Number,
      default: 96
    },
    imgRadius: {
      type: Number,
      default: 0
    },
    imgPosition: {
      type: String,
      default: 'center'
    },
    paddingTop: {
      type: Number,
      default: 54
    },
    paddingBottom: {
      type: Number,
      default: 54
    },
    occupyingColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0.1)'
    }
  },
  data: () => ({
    scene: {}
  }),
  computed: {
    wrapStyle () {
      const { paddingTop, paddingBottom, imgPosition, scene } = this;
      return {
        paddingTop: `${scene.paddingTop || paddingTop}px`,
        paddingBottom: `${scene.paddingBottom || paddingBottom}px`,
        alignItems: (scene.imgPosition || imgPosition) === 'top' ? 'flex-start' : (scene.imgPosition || imgPosition) === 'bottom' ? 'flex-end' : 'center'
      };
    }
  },
  watch: {
    type (val) {
      this.scene = val;
    }
  },
  created () {
    this.scene = Scene[this.type];
  },
  methods: {
    itemClicked (e) {
      this.$emit('fmItemClicked', e);
    },
    itemLongpress (e) {
      this.$emit('fmItemLongpress', e);
    }
  }
};
</script>


