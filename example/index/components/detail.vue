<template>
    <div class="flymeui">
        <div class="actionBar">
            <fm-icon class="actionIcon" @click="back" value="&#xe6b5;" icon-style="24" color="#999"/>
        </div>
        <scroller class="scroller">
            <div class="header">
                <fm-image :scale="1/2" :src="'http://design.flyme.cn/weexui/assets/'+ type +'.png'"/>
                <div style="margin-left: 16.667px;">
                    <fm-text class="title" :textValue="category.name" medium
                                      :text-style="{fontSize: 21, color: '#000', fontWeight: 500, lineHeight: 23}" />
                    <fm-text class="subTitle" :textValue="category.subname" 
                                      :text-style="{fontSize: 12, color: '#000', fontWeight: 300, lineHeight: 14, marginTop: 2}" />
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

<style scoped>
    .actionBar {
        height: 64px;
        padding-top: 20px;
    }

    .actionIcon {
        margin-top: 10px;
        margin-right: 15px;
        margin-left: 17px;
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
        margin-top: 23.6667px;
        margin-bottom: 34.6667px;
        margin-left: 24px;
    }

    .list {
        margin-left: 9.333px;
        margin-right: 9.333px;
        padding: 9.333px;
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
