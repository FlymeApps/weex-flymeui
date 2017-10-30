<template>
    <div class="mzui-demo">
        <scroller class="scroller">
            <title title="fm-input"></title>
            <category title="默认的输入框"></category>
            <fm-input />
            <category title="带初始值的输入框"></category>
            <fm-input type="textarea" placeholder="textarea" />
            <fm-input value="value" />
            <category title="限制最大输入长度"></category>
            <fm-input maxlength="20" placeholder="maxlength:20" />
            <category title="不同的输入类型"></category>
            <fm-input type="time" placeholder="time" />
            <fm-input type="password" placeholder="password" />
            <category title="输入有误"></category>
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
        margin-top: 20px;
        margin-bottom: 10px;
        color: #aaa;
    }
    .contaniner {
        padding: 10px;
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
