<template>
    <div class="mzui-demo">
        <scroller class="scroller">
            <title link="http://design.flyme.cn/book/book.html?bookId=59ef0a54a5a0a6738061aeeb&doc=59effc7867e2274f086396b6"></title>
            <category title="默认的输入框"></category>
                  <input type="text" placeholder="Input Text"  :autofocus=true :nightMode=true  value="test input"/>
     
            <fm-input :nightMode=true  placeholder="默认的输入框" :autofocus=true  />
            <category title="密文模式"></category>
            <fm-input type="password" placeholder="password" :nightMode=true />
            <category title="日期输入"></category>
            <fm-input type="time" placeholder="time" />
            <category title="修改 placeholder"></category>
            <fm-input type="text" placeholder="placeholder" :nightMode=true :autofocus=true />
            <category title="带初始值的输入框"></category>
            <fm-input value="value" />
            <category title="限制最大输入长度"></category>
            <fm-input maxlength="20" placeholder="maxlength:20" />
            <category title="输入校验"></category>
            <fm-input type="text" :inputPattern="/^[0-9]{1,20}$/" inputErrorMessage="请输入数字" />
            <category title="多行Textarea"></category>
            <textarea class="textarea" @input="oninput" @change="onchange" @focus="onfocus" @blur="onblur"></textarea>
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
        margin-top: 60px;
        margin-bottom: 30px;
        color: #aaa;
    }
    .contaniner {
        padding: 30px;
    }
</style>

<script>
import { FmInput } from '../../../index';
import Title from '../../_mods/title.vue';
import Category from '../../_mods/category.vue';
import { setTitle } from '../../_mods/set-nav';

const modal = weex.requireModule('modal');

export default {
    components: { Title, Category, FmInput }
}
</script>
