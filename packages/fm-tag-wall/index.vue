<!-- Created by Yanjiie on 2018/3/2. -->
<template>
  <div class="wall-wrap">
    <div class="title-wrap">
      <slot name="left">
        <text class="title-text" :style="{ color: titleColor }">{{ title }}</text>
      </slot>
      <slot name="right">
        <text class="title-rightBtn" :style="{ color: rightColor }" @click="btnClicked">{{ rightText }}</text>
      </slot>
    </div>
    <div class="tags-wrap">
      <item v-for="(item, index) in list"
            v-bind="Object.assign({}, customStyles, item)"
            :key="index"
            @select="onSelect(index)" />
    </div>
  </div>
</template>

<style scoped>
  .wall-wrap {
    width: 1080px;
  }

  .title-wrap {
    flex-direction: row;
    padding: 27px 49px;
    justify-content: space-between;
  }

  .title-text {
    font-family: sans-serif-medium;
    font-weight: 500;
    font-size: 36px;
    line-height: 54px;
  }

  .title-rightBtn {
    font-family: sans-serif-medium;
    font-weight: 500;
    font-size: 36px;
    line-height: 54px;
  }

  .tags-wrap {
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0 24px 0 48px;
  }
</style>

<script>
import Item from './item.vue';
import Locale from 'weex-flymeui/lib/mixins/locale';
import { t } from 'weex-flymeui/lib/locale';

export default {
  name: 'FmTagWall',
  mixins: [Locale],
  components: { Item },
  props: {
    list: {
      type: Array,
      default: () => ([])
    },
    title: {
      type: String,
      default () {
        return t('el.common.title');
      }
    },
    titleColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0.4)'
    },
    rightText: {
      type: String,
      default () {
        return t('el.common.more');
      }
    },
    rightColor: {
      type: String,
      default: '#198DED'
    },
    customStyles: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    onSelect (index) {
      this.$emit('fmTagWallSelected', { title: this.dataSource[index].title, index });
    },
    btnClicked () {
      this.$emit('fmTagWallRightBtnClicked');
    }
  }
};
</script>
