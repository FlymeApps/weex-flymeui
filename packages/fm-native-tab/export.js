import VALUE from 'weex-flymeui/lib/common/variable-type';
export default {
  name: 'FmNativeTab',
  desc: '原生标签页组件',
  props: {
    tabTitles: {
      type: VALUE.ARRAY,
      desc: '导航标签列表',
      props: {
        min: 1,
        inner: {
          text: {
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
      default: 1854
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
    height: 1854
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
  }],
  mockData: {
    tabTitles: [{
      text: '标签1'
    }, {
      text: '标签2'
    }, {
      text: '标签3'
    }],
    tabPageHeight: 1854,
    selectIndex: 0
  },
  thumbnail: 'http://image.res.meizu.com/image/flyme-icon/133b9680fcef447d8b5200ee5fca41e3z'
};
