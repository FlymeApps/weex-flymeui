<template>
  <image :style="getStyle" @load="onLoad" ref="img" :src="src"/>
</template>

<script>
export default {
  name: 'FmImage',
  data: () => ({
    loaded: false
  }),
  props: {
    src: {
      type: String,
      default: ''
    },
    scale: {
      type: Number,
      default: 0
    },
    width: {
      type: Number,
      default: 1
    },
    height: {
      type: Number,
      default: 1
    },
    occupyingColor: {
      type: Number,
      default: 'transparent'
    },
    imgStyle: {
      type: Object
    }
  },
  computed: {
    getStyle () {
      return {
        width: this.width,
        height: this.height,
        backgroundColor: this.loaded ? 'transparent' : this.occupyingColor,
        ...this.imgStyle
      };
    }
  },
  methods: {
    onLoad (e) {
      e.success && (this.loaded = true);
      if (e.success && e.size && e.size.naturalWidth > 0 && this.scale) {
        this.width = e.size.naturalWidth * this.scale;
        this.height = e.size.naturalHeight * this.scale;
      }
    }
  }
};
</script>
