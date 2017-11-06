<template>
    <div class="flymeui">
        <scroller class="scroller">
            <div class="header">
                <fm-image :scale="1/3" src="http://design.flyme.cn/weexui/assets/design_logo.png"/>
                <fm-text class="desc" textValue="为你提供最全面的公共规范内容展示，让你方便调用动画参数、设计参数以及控件代码" 
                                      :style="{fontSize: 14, color: 'rgba(0, 0, 0, 0.6)', fontWeight: 400}" />
            </div>
            <div class="list">
                <div v-for="(item, key) in category" class="item" @click="jump(key)">
                    <fm-image :scale="1/3" class="item-icon" :src="'http://design.flyme.cn/weexui/assets/'+ key +'.png'"/>
                    <div>
                        <fm-text :textValue="item.name" title :style="{fontSize: 16, color: '#000', fontWeight: 400}" />
                        <fm-text :textValue="item.componentList.length + ' 个项目'" :style="{fontSize: 12, color: 'rgba(0, 0, 0, 0.4)', fontWeight: 400}"/>
                    </div>
                </div>
            </div>
        </scroller>
    </div>
</template>

<style scoped>
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
        margin-top: 89px;
        margin-bottom: 31px;
        margin-left: 25.6666px;
    }

    .desc {
        width: 258.3333px;
        margin-top: 18px;
    }

    .list {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 16px;
    }

    .item {
        justify-content: space-between;
        background-color: #fff;
        width: 160px;
        height: 120px;
        margin-bottom: 6.66666;
        padding: 16.6667px;
        box-shadow: 0 0 6.6667px 0 rgba(0, 0, 0, 0.04);
    }

    .item-icon {
        
    }

</style>

<script>
import { FmText, FmImage } from '../../../index';
import Title from '../../_mods/title.vue';
import Category from '../../_mods/category.vue';
import { setTitle } from '../../_mods/set-nav';
import category from './category.js'

export default {
    data() {
        return {
            category: category
        }
    },
    components: { Title, Category, FmText, FmImage },
    methods: {
        jump(type) {
            if (this.$router) {
                this.$router.push({ name: 'detail', params: { type: type } })
            }
        }
    }
}
</script>
