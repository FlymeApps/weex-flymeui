<template>
    <div class="flymeui">
        <scroller class="scroller">
            <div class="header">
                <fm-image width="655" height="105" :scale="1" src="http://design.flyme.cn/weexui/assets/design_logo.png"/>
                <fm-text class="desc" textValue="为你提供最全面的公共规范内容展示，让你方便调用动画参数、设计参数以及控件代码" 
                                      :text-style="{fontSize: 42, color: 'rgba(0, 0, 0, 0.6)', fontWeight: 400}" />
            </div>
            <div class="list">
                <div v-for="(item, key) in category" class="item" @click="jump(key)">
                    <fm-image :scale="1" class="item-icon" :src="'http://design.flyme.cn/weexui/assets/'+ key +'.png'"/>
                    <div>
                        <fm-text :textValue="item.name" title :text-style="{fontSize: 48, color: '#000', fontWeight: 400}" />
                        <fm-text :textValue="item.componentList.length + ' 个项目'" :text-style="{fontSize: 36, color: 'rgba(0, 0, 0, 0.4)', fontWeight: 400}"/>
                    </div>
                </div>
            </div>
        </scroller>
    </div>
</template>

<style lang="sass" scoped>
    @import "../../../packages/style/mixin.scss";
    .flymeui {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background-color: #fafafa;
    }

    .scroller {
        background-color: #fafafa;
    }

    .header {
        margin-top: size(267);
        margin-bottom: size(93);
        margin-left: size(77);
    }

    .desc {
        width: size(775);
        margin-top: size(54);
    }

    .list {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: size(48);
    }

    .item {
        justify-content: space-between;
        background-color: #fff;
        width: size(480);
        height: size(360);
        margin-bottom: size(20);
        padding: size(50);
    }

</style>

<script>
import { FmText, FmImage } from '../../../index';
import category from '../../category.js'

export default {
    data() {
        return {
            category: category
        }
    },
    components: { FmText, FmImage },
    methods: {
        jump(type) {
            if (this.$router) {
                this.$router.push({ name: 'detail', params: { type: type } })
            }
        }
    }
}
</script>
