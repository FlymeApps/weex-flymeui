<!-- CopyRight (C) 2018-2022 FlymeApps Team Holding Limited. -->
<!-- Created by Yanjiie on 2018/3/5. -->
<template>
  <div class="list-wrap">
    <div class="title-wrap">
      <slot name="left">
        <text class="title-text" :style="{ color: titleColor }">{{ title }}</text>
      </slot>
      <slot name="right">
        <text class="title-rightBtn" :style="{ color: rightColor }" @click="btnClicked">{{ rightText }}</text>
      </slot>
    </div>
    <div class="item-wrap">
      <item v-for="(item, index) in list"
            v-bind="Object.assign({}, customStyles, item)"
            :key="index"
            :index="index"
            @select="onSelect(index)"
            @leftClicked="leftIconClicked(index)"
            @rightClicked="rightIconClicked(index)" />
    </div>
  </div>
</template>

<style scoped>
  .list-wrap {
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
</style>

<script>
import Item from './item.vue';
import Locale from 'weex-flymeui/lib/mixins/locale';
import { t } from 'weex-flymeui/lib/locale';

export default {
  name: 'FmSimpleList',
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
      default: ''
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
      this.$emit('fmSimpleListSelected', { model: this.list[index], index });
    },
    btnClicked () {
      this.$emit('fmSimpleListRightBtnClicked');
    },
    leftIconClicked (index) {
      this.$emit('fmSimpleListLeftIconClicked', { model: this.list[index], index });
    },
    rightIconClicked (index) {
      this.$emit('fmSimpleListRightIconClicked', { model: this.list[index], index });
    }
  }
};
</script>
