<template>
  <div :class="wrapperClz">
    <div v-if="imgSrc" :class="imgClz">
      <fm-image v-if="scene === 'avatar'" class="img-avatar"
                :src="imgSrc"
                width="120"
                height="120"
                :occupyingColor="occupyingColor"></fm-image>
      <fm-image v-else-if="scene === 'icon'" class="img-icon"
                :src="imgSrc"
                width="96"
                height="96"
                :occupyingColor="occupyingColor"></fm-image>
      <fm-image v-else-if="scene === 'app-small'" class="img-app-small"
                :src="imgSrc"
                width="135"
                height="135"
                :occupyingColor="occupyingColor"></fm-image>
      <fm-image v-else-if="scene === 'app-big'" class="img-app-big"
                :src="imgSrc"
                width="192"
                height="192"
                :occupyingColor="occupyingColor"></fm-image>
    </div>
    <div :class="contentClz">
      <slot name="left">
      </slot>
      <div class="text">
        <slot name="title">
          <fm-text v-if="title" class="title" medium title :text-style="{lineHeight: 50}">{{ title }}</fm-text>
        </slot>
        <fm-text v-if="subTitle" class="subTitle" small>{{ subTitle }}</fm-text>
        <fm-text v-if="description" class="description">{{ description }}</fm-text>
      </div>
      <slot name="right">
      </slot>
    </div>
  </div>
</template>

<style scoped>
  .cell-wrapper {
    flex-direction: row;
    min-height: 192px;
    padding: 0 48px;
  }

  .cell-wrapper-center {
    align-items: center;
  }

  .content {
    flex: 1;
    flex-direction: row;
    padding: 51px 0;
		border-bottom-style: solid;
		border-bottom-width: 1px;
		border-bottom-color: #E6E6E6;
  }

  .text {
    justify-content: center;
  }

  .content-min {
    height: 192px;
  }

  .subTitle {
    line-height: 34px;
    margin-top: 18px;
  }

  .description {
    line-height: 48px;
    margin-top: 12px;
  }

  .cell-image {
    margin-top: 48px;
    margin-right: 48px;
  }

  .cell-image-center {
    margin-top: 0;
  }
  
  .img-avatar {
    border-radius: 60px;
  }

</style>

<script>
import FmText from '../fm-text';
import FmImage from '../fm-image';

const SCENE_AVATAR = 'avatar';
const SCENE_ICON = 'icon';
const SCENE_SMALL = 'app-small';
const SCENE_BIG = 'app-big';

export default {
  name: 'FmCell',
  components: { FmText, FmImage },
  props: {
    title: String,
    subTitle: String,
    description: String,
    scene: {
      type: String,
      default: SCENE_AVATAR
    },
    imgSrc: String,
    occupyingColor: {
      type: String,
      default: '#EEEEEE'
    }
  },
  computed: {
    wrapperClz () {
      const clz = ['cell-wrapper'];
      const { subTitle, description, scene } = this;
      if ((scene === SCENE_AVATAR && !subTitle && !description) || scene === SCENE_ICON || scene === SCENE_SMALL || scene === SCENE_BIG) {
        clz.push('cell-wrapper-center');
      }
      return clz;
    },
    imgClz () {
      const clz = ['cell-image'];
      const { subTitle, description, scene } = this;
      if ((!subTitle && !description) || scene === SCENE_ICON || scene === SCENE_SMALL || scene === SCENE_BIG) {
        clz.push('cell-image-center');
      }
      return clz;
    },
    contentClz () {
      const clz = ['content'];
      const { subTitle, description } = this;
      if (!subTitle && !description) {
        clz.push('content-min');
      }
      return clz;
    }
  }
};
</script>


