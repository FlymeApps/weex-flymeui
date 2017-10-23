<template>
    <div class="mzui-demo">
        <scroller class="scroller">
            <fm-input placeholder="placeholder" ref="test"/>
            <fm-input type="textarea" placeholder="textarea" />
            <fm-input value="value" />
            <fm-input maxlength="20" placeholder="maxlength:20" />
            <fm-input type="time" placeholder="time" />
            <fm-input type="password" placeholder="password" />
            <fm-input hasError value="hasError" />
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
    .title {
        margin-top: 40px;
        margin-bottom: 20px;
        color: #aaa;
    }
    .contaniner {
        padding: 20px;
    }
</style>

<script>
import { FmInput } from '../../index';
import Title from '../_mods/title.vue';
import Category from '../_mods/category.vue';
import { setTitle } from '../_mods/set-nav';

const modal = weex.requireModule('modal');

export default {
    components: { Title, Category, FmInput }
}
</script>
