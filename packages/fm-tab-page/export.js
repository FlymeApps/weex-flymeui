import VALUE from 'weex-flymeui/lib/common/variable-type';
export default {
  name: 'FmTabPage',
  desc: '标签页组件',
  props: {
    tabTitles: {
      type: VALUE.ARRAY,
      desc: '导航标签列表',
      props: {
        min: 1,
        inner: {
          title: {
            type: VALUE.STRING,
            desc: '标题'
          }
        }
      },
      default: []
    },
    tabPageHeight: {
      type: VALUE.NUMBER,
      desc: '页面高度',
      default: 1920
    },
    selectIndex: {
      type: VALUE.NUMBER,
      desc: '当前选中',
      default: 0
    }
  },
  events: {
    fmTabPageTabSelected: {
      desc: '页数切换'
    }
  },
  size: {
    width: 1080,
    height: 1920
  },
  slots: [{
    dynamicSlots (tabTitles = []) {
      return tabTitles.map((v, i) => ({
        name: `tab-item-${i}`, desc: `子页面${i + 1}`
      }));
    },
    dynamicParams: ['tabTitles'],
    template (tabTitlesFiled) {
      return `<template v-for="(item, idx) in ${tabTitlesFiled}" :slot="\`tab-item-\$\{idx\}\`">
        <component v-for="s in allPages" :item="item" :is="s.name" v-if="item.type === s.type"></component>
      </template>`;
    },
    templateParams: ['tabTitles']
  }]
};
