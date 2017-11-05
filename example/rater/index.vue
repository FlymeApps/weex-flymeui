<template>
    <div class="mzui-demo">
        <scroller class="scroller">
            <title title="fm-input"></title>
            <fm-rater></fm-rater>
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
        background-color: #fff;
    }
</style>

<script>
import { FmRater } from '../../index';
import Title from '../_mods/title.vue';
import Category from '../_mods/category.vue';

export default {
    components: { Title, Category, FmRater }
}
</script>
