<!-- CopyRight (C) 2018-2022 FlymeApps Group Holding Limited. -->
<!-- Created and Update by Yanjiie on 2018/04/12. -->
<template>
  <text :class="textClz"><slot></slot><template v-if="!$slots.default">{{ value }}</template></text>
</template>

<style scoped>
	.text {
		font-size: 42px;
		line-height: 63px;
		color: #999999;
		font-family: "Source Han Sans CN", Roboto, sans-serif;
	}
	.medium {
		font-family: sans-serif-medium;
		font-weight: 500;
	}
	.bold {
		font-weight: 700;
	}
	.light {
		font-weight: 400;
	}
	.small {
		font-size: 36px;
	}
	.large {
		font-size: 48px;
		font-weight: 500;
		line-height: 72px;
		color: #000000;
	}
	.huge {
		font-size: 54px;
		line-height: 81px;
		color: #000000;
	}
	.margin-text {
		margin-right: 9px;
	}
</style>

<script>
export default {
  name: 'FmText',
  props: {
    value: String,
    fontWeight: {
      type: String,
      default: 'normal'
    },
    size: {
      type: String,
      default: 'normal'
    },
    hasTextMargin: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    textClz () {
      const clz = ['text'];
      if (this.hasTextMargin) {
        clz.push('margin-text');
      }
      if (this.size !== 'normal') {
        clz.push(`${this.size}`);
      }
      if (this.fontWeight !== 'normal') {
        clz.push(`${this.fontWeight}`);
      }
      return clz;
    }
  },
  created () {
    this.$slots.default && (this.value = this.$slots.default[0].text);
  }
};
</script>
