<template>
<div class="fm-image">
    <image :style="getStyle" @load="onLoad" ref="img" :src="src"/>
</div>
</template>

<script>
export default {
    data() {
        return {
            width: 1,
            height: 1
        }
    },
    props: {
        src: {
            type: String,
            default: ''
        },
        imgStyle: {
            type: Object
        },
        scale: {
            type: Number,
            default: 1
        }
    },
    computed: {
        getStyle() {
            return {
                width: this.width,
                height: this.height,
                ...this.imgStyle
            }
        }
    },
    methods: {
        onLoad (e) {
            if (e.success && e.size && e.size.naturalWidth > 0) {
                this.width = e.size.naturalWidth * this.scale
                this.height = e.size.naturalHeight * this.scale
            }
        }
    }
}
</script>