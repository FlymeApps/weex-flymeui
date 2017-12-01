<template>
    <div class="flymeui">
        <div class="actionBar">
            <fm-icon class="actionIcon" @fmClick="back" value="&#xe6b5;" icon-style="72" color="#999"/>
        </div>
        <scroller class="scroller">
            <div class="header">
                <fm-image :scale="3/2" :src="'http://design.flyme.cn/weexui/assets/'+ type +'.png'"/>
                <div style="margin-left: 50px;">
                    <fm-text class="title" :textValue="category.name" medium
                                      :text-style="{fontSize: 63, color: '#000', fontWeight: 500, lineHeight: 69}" />
                    <fm-text class="subTitle" :textValue="category.subname" 
                                      :text-style="{fontSize: 36, color: '#000', fontWeight: 300, lineHeight: 42, marginTop: 6}" />
                </div>
            </div>
            <div class="list">
                <template v-for="item in category.componentList" >
                    <d-cell :title="item.name" :subTitle="item.subname" @click="jump(item.path)"></d-cell>
                </template>
            </div>
        </scroller>
    </div>
</template>

<style lang="sass" scoped>
    @import "../../../packages/style/mixin.scss";
    .actionBar {
        height: size(192);
        padding-top: size(60);
    }

    .actionIcon {
        margin-top: size(30);
        margin-right: size(45);
        margin-left: size(51);
    }

    .flymeui {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background-color: #fafafa;
    }

    .header {
        flex-direction: row;
        align-items: flex-end;
        margin-top: size(71);
        margin-bottom: size(104);
        margin-left: size(72);
    }

    .list {
        margin-left: size(27);
        margin-right: size(27);
        padding: size(27);
    }

</style>

<script>
import { FmText, FmImage, FmIcon } from '../../../index';
import DCell from './cell.vue';
import category from '../../category.js'
const navigator = weex.requireModule('navigator')
let env = weex.config.env
let url = weex.config.bundleUrl

export default {
    props: {
        type: String,
        category: Object
    },
    components: { FmText, FmImage, FmIcon, DCell },
    created() {
        this.$route.params.type ? this.type = this.$route.params.type : this.$router.go(-1)
        this.category = category[this.type]
    },
    methods: {
        back() {
            this.$router.go(-1)
        },
        jump(path) {
            if (env.platform === 'Web') {
                window.location.href = path
            } else {
                let target = url.replace(/index.native.js/, path + '/index.native.js')
                navigator.push({
                    url: target,
                    animated: "true"
                })
            }
        }
    }
}
</script>
