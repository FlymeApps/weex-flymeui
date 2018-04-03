<template>
  <fm-native-tab :tab-titles="tabTitles"
                ref="fm-tab-page"
                :tabPageHeight="1600">
    <list v-for="(v, index) in tabTitles" :key="index"
          :slot="`tab-item-${index}`"
          class="item-container">
      <cell v-for="(item, idx) in listData" :key="idx">
        <text class="cell">{{ item }}</text>
      </cell>
    </list>
  </fm-native-tab>
</template>

<style scoped>
  .item-container {
    flex: 1;
    width: 1080px;
  }

  .cell {
    border-bottom-width: 1px;
    height: 144px;
  }
</style>

<script>
import { FmNativeTab, Utils } from 'weex-flymeui';

export default {
  components: { FmNativeTab },
  data () {
    return {
      tabTitles: [{
        text: '标签1'
      }, {
        text: '标签标签',
        selected: false
      }, {
        text: 'NBA'
      }, {
        text: '超长的标签啊啊啊'
      }, {
        text: '标签'
      }],
      listData: ['哈哈哈', '哈哈', '哈哈', '哈哈', '哈哈', '哈哈', '哈哈', '哈哈', '哈哈', '哈哈', '哈哈', '哈哈', '哈哈', '哈哈', '哈哈', '哈哈', '哈哈', '哈哈', '哈哈', '哈哈', '哈哈', '哈哈', '哈哈', '哈哈', '哈哈', '哈哈', '哈哈', '哈哈', '哈哈', '哈哈', '哈哈', '哈哈', '哈哈', '哈哈', '哈哈'],
      select: 1
    };
  },
  methods: {
    fmPanItemPan (e) {
      if (Utils.env.supportsEBForAndroid()) {
        this.$refs['fm-tab-page'].bindExp(e.element);
      }
    }
  }
};
</script>
