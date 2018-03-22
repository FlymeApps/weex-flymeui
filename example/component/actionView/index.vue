<template>
  <div class="mzui-demo">
    <scroller class="scroller">
      <title></title>
      <category title="目前动效器只支持 Android"></category>
      <div class="contanier">
        <fm-action-view class="action" act="http://172.17.21.70/M00/01/D3/rBEVR1ok4vCARtfsAANibqB3eAg003.act"></fm-action-view>
      </div>
      <div class="contanier">
        <fm-action-view class="action" act="http://172.17.21.70/M00/01/C5/rBEVRloOrS2AKnl3AAXoRckLTv0543.act"></fm-action-view>
      </div>
    </scroller>
  </div>
</template>

<style scoped>
  .mzui-demo {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #ffffff;
  }

  .scroller {
    position: absolute;
    top: 66px;
    right: 0;
    left: 0;
    bottom: 0;
  }

  .action {
    width: 984px;
    height: 420px;
  }

  .contanier {
    margin-top: 40px;
    align-items: center;
    justify-content: center;
  }
</style>

<script>
import { FmActionView } from '../../../index';
import Title from '../../_mods/title.vue';
import Category from '../../_mods/category.vue';

export default {
  components: { Title, Category, FmActionView },
  data: () => ({

  }),
  methods: {

  }
};
</script>
