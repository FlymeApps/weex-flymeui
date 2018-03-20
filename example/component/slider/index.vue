<template>
  <scroller class="wrap">
    <fm-slider :items="items" :auto-play="true"></fm-slider>
    <fm-footer padding-size="large">
      <fm-button @buttonClicked="prev" size="large">上一页</fm-button>
      <fm-button @buttonClicked="next" theme="firebrick" size="large">下一页</fm-button>
    </fm-footer>
  </scroller>
</template>

<style scoped>
  .wrap {
    flex: 1;
    width: 1080px;
    overflow: hidden;
  }
</style>

<script>
import { FmSlider, FmButton, FmText, FmFooter } from '../../../index';
export default {
  components: { FmSlider, FmButton, FmText, FmFooter },
  data: () => ({
    page: 0,
    items: [
      '//gw.alicdn.com/imgextra/i4/169/TB2TlW1aLuSBuNkHFqDXXXfhVXa_!!169-0-lubanu.jpg_q50.jpg',
      '//gw.alicdn.com/imgextra/TB2nu8oev5TBuNjSspcXXbnGFXa_!!103-0-lubanu.jpg_q50.jpg',
      '//gw.alicdn.com/imgextra/TB2dprKdFuWBuNjSszbXXcS7FXa_!!124-0-luban.jpg_q50.jpg',
      '//img.alicdn.com/imgextra/i4/18/TB28vYEdL9TBuNjy0FcXXbeiFXa_!!18-0-luban.jpg_q50.jpg',
      '//aecpm.alicdn.com/simba/img/TB14ab1KpXXXXclXFXXSutbFXXX.jpg_q50.jpg'
    ]
  }),
  methods: {
    prev () {
      this.$refs.banner.prev();
    },
    next () {
      this.$refs.banner.next();
    }
  }
};
</script>
