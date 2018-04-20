<!-- CopyRight (C) 2018-2022 FlymeApps Group Holding Limited. -->
<!-- Created by Yanjiie on 2018/03/12. -->
<template>
  <div class="fm-tabbar-item" @click="onClick">
    <div class="icon-wrap">
      <slot name="icon" :active="active">
        <text class="item-icon"
              :style="{ color: !active ? iconColor : (activeIconColor || activeColor)}">{{ getIcon }}</text>
      </slot>
      <div class="dot" v-if="dot"></div>
      <div class="badge" v-if="!dot && badge">
        <text class="badge-msg">{{ badge }}</text>
      </div>
    </div>
    <slot name="title" :active="active">
      <text class="item-title" :style="{ color: !active ? titleColor : activeColor }"><slot></slot><template v-if="!$slots.default">{{ title }}</template></text>
    </slot>
  </div>
</template>

<style scoped>
  .fm-tabbar-item {
    height: 144px;
    align-items: center;
    justify-content: center;
  }

  .fm-tabbar-item:active {
    background-color: rgba(0, 0, 0, 0.04);
  }

  .icon-wrap {
    padding-top: 8px;
    padding-left: 30px;
    padding-right: 30px;
    margin-top: -8px;
  }

  .item-icon {
    margin-bottom: 6px;
    font-size: 72px;
    height: 72px;
    font-family: flymeicon;
  }

  .item-title {
    font-size: 30px;
    line-height: 36px;
  }

  .dot {
    position: absolute;
    top: 8px;
    right: 30px;
    width: 18px;
    height: 18px;
    border-radius: 9px;
    background-color: #EF2828;
    box-shadow: 0 0 0 3px #FFFFFF;
  }

  .badge {
    position: absolute;
    justify-content: center;
    top: 0;
    left: 69px;
    border-width: 3px;
    border-color: #FFFFFF;
    border-radius: 24px;
  }

  .badge-msg {
    line-height: 36px;
    padding: 0 6px;
    font-size: 24px;
    color: #FFFFFF;
    background-color: #EF2828;
    border-radius: 24px;
  }
</style>

<script>
const he = require('he');
const dom = weex.requireModule('dom');
import Icon from '../fm-icon/map';
import FmIcon from '../fm-icon';
export default {
  name: 'FmTabbarItem',
  components: { FmIcon },
  props: {
    title: {
      type: String,
      default: ''
    },
    titleColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0.75)'
    },
    activeColor: {
      type: String,
      default: '#198DED'
    },
    icon: {
      type: String,
      default: ''
    },
    iconColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0.6)'
    },
    activeIconColor: {
      type: String,
      default: ''
    },
    badge: {
      type: [Number, String],
      default: ''
    },
    dot: Boolean
  },
  computed: {
    getIcon () {
      const { Icon, icon } = this;
      return he.decode(Icon[icon] || Icon['wancheng']);
    }
  },
  data: () => ({
    active: false,
    Icon
  }),
  beforeCreate () {
    dom.addRule('fontFace', {
      'fontFamily': 'flymeicon',
      'src': "url('http://design.flyme.cn/weexui/assets/iconfont.ttf')"
    });

    let parent = this.$parent;
    while (parent) {
      if (parent.$options.name !== 'FmTabbar') {
        parent = parent.$parent;
      } else {
        this._parent = parent;
        break;
      }
    }
    this._parent.renderItems.push(this);
  },
  created () {
    this.$slots.default && (this.title = this.$slots.default[0].text);
  },
  destroyed () {
    this._parent.renderItems.splice(this._parent.items.indexOf(this), 1);
  },
  methods: {
    onClick (e) {
      this._parent.onChange(this._parent.renderItems.indexOf(this));
      this.$emit('select', this.index);
    }
  }
};
</script>
