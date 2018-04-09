<template>
  <div>
    <gcanvas v-if="isWeex" ref="canvas_holder" v-bind:style="{width:width,height:height,backgroundColor:'rgba(255,255,255,1)'}"></gcanvas>
    <canvas v-if="!isWeex" ref="canvas_holder" v-bind:style="{width:width+'px',height:height+'px',backgroundColor:'rgba(255,255,255,1)'}"></canvas>
  </div>
</template>

<script>
const modal = weex.requireModule('modal');
// import { isWeex } from 'universal-env';

const isWeex = true;

modal.alert({ message: isWeex });

const dom = weex.requireModule('dom');
import { enable, WeexBridge, Image as GImage } from 'weex-gcanvas/gcanvas.js';
const EnvImage = isWeex ? GImage : Image;

function run (canvas, { requestAnimationFrame }) {
  var img = new EnvImage();
  const cxt = canvas.getContext('2d');
  img.onload = function () {
    cxt.drawImage(img, 0, 0, img.width, img.height);
  };
  img.src = 'https://c1.staticflickr.com/3/2388/5800134409_83345951ed_b.jpg';
}

export default {
  data () {
    return {
      isWeex,
      width: 750,
      height: 980
    };
  },

  mounted: function () {
    const start = () => {
      var ref = this.$refs.canvas_holder;

      var size = isWeex
        ? {
          width: parseInt(this.width),
          height: parseInt(this.height)
        }
        : {
          width: parseInt(ref.clientWidth),
          height: parseInt(ref.clientHeight)
        };

      if (isWeex) {
        ref = enable(ref, { debug: true, bridge: WeexBridge });
      }

      ref.width = size.width;
      ref.height = size.height;

      run(ref, {
        requestAnimationFrame: isWeex ? setTimeout : requestAnimationFrame
      });
    };

    setTimeout(function () {
      dom.getComponentRect('viewport', e => {
        this.height = e.size.height;

        this.isReady = true;

        setTimeout(start, 1000);
      });
    }, 50);
  }
};
</script>
