<template>
    <div class="mzui-demo">
        <scroller class="scroller">
            <title link="http://design.flyme.cn/book/book.html?bookId=59ef0a54a5a0a6738061aeeb&doc=59efee69a5a0a6738061aeff"></title>
            <category title="不同大小"></category>
            <div class="container">
                <fm-rater :starImgs="star_normal_urls" :starBgImg="star_bg_url"></fm-rater>
            </div>
            <!-- <div class="container">
                <fm-rater :starImgs="star_normal_urls" :starBgImg="star_bg_url" size="small"></fm-rater>
            </div> -->
            <!-- <category title="不同主题颜色( native 支持 base64 )"></category>
            <div class="container">
                <fm-rater theme="normal"></fm-rater>
            </div>
            <div class="container">
                <fm-rater theme="normal" size='small'></fm-rater>
            </div>
            <div class="container">
                <fm-rater theme="special"></fm-rater>
            </div>
            <div class="container">
                <fm-rater theme="special" size='small'></fm-rater>
            </div>
            <div class="container dark">
                <fm-rater theme="dark"></fm-rater>
            </div>
            <div class="container dark">
                <fm-rater theme="dark" size='small'></fm-rater>
            </div>
            <category title="不同主题颜色( native 不支持 base64情况 )"></category>
            <div class="container">
                <fm-rater theme="normal" :starImgs="star_normal_urls" :starBgImg="star_bg_url"></fm-rater>
            </div>
            <div class="container">
                <fm-rater theme="normal" :starImgs="star_normal_urls" :starBgImg="star_bg_url" size='small'></fm-rater>
            </div>
            <div class="container">
                <fm-rater theme="special" :starSpecialImg="star_special_url" :starBgImg="star_bg_url"></fm-rater>
            </div>
            <div class="container">
                <fm-rater theme="special" :starSpecialImg="star_special_url" :starBgImg="star_bg_url" size='small'></fm-rater>
            </div>
            <div class="container dark">
                <fm-rater theme="dark" :starDarkImg="star_dark_url" :starDarkBgImg="star_dark_bg"></fm-rater>
            </div>
            <div class="container dark">
                <fm-rater theme="dark" :starDarkImg="star_dark_url" :starDarkBgImg="star_dark_bg" size='small'></fm-rater>
            </div>
            <div class="container">
                <fm-rater :starImgs="star_normal_urls" :starBgImg="star_bg_url" size='small'></fm-rater>
            </div>
            <category title="不同的初始化分数"></category>
            <div class="container">
                <fm-rater :score="2" :canChange="false" :starImgs="star_normal_urls" :starBgImg="star_bg_url"></fm-rater>
            </div>
            <div class="container">
                <fm-rater :score="4" :canChange="false" :starImgs="star_normal_urls" :starBgImg="star_bg_url"></fm-rater>
            </div>
            <div class="container">
                <fm-rater :score="6" :canChange="false" :starImgs="star_normal_urls" :starBgImg="star_bg_url"></fm-rater>
            </div>
            <category title="分数更改后回调"></category>
            <div class="container">
                <fm-rater :starImgs="star_normal_urls" :starBgImg="star_bg_url" @fmRaterScoreChanged="scoreChanged"></fm-rater>
            </div> -->
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
    .container {
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-top: 50px;
    }
    .dark {
        background-color: rgb(74, 74, 74);
    }
</style>

<script>
import { FmRater } from '../../../index';
import Title from '../../_mods/title.vue';
import Category from '../../_mods/category.vue';
const modal = weex.requireModule('modal');

export default {
    components: { Title, Category, FmRater },
    data: () => ({
        star_normal_urls: [
            'http://design.flyme.cn/weexui/assets/star_normal.png',
            'http://design.flyme.cn/weexui/assets/star_normal.png',
            'http://design.flyme.cn/weexui/assets/star_normal.png',
            'http://design.flyme.cn/weexui/assets/star_normal.png',
            'http://design.flyme.cn/weexui/assets/star_normal.png',
        ],    
        star_bg_url: 'http://design.flyme.cn/weexui/assets/star_bg.png',
        star_special_url: 'http://design.flyme.cn/weexui/assets/star_special.png',
        star_dark_url: 'http://design.flyme.cn/weexui/assets/star_dark.png',
        star_dark_bg: 'http://design.flyme.cn/weexui/assets/star_dark_bg.png'
    }),
    methods: {
        scoreChanged(e) {
            modal.toast({ message: e })
        }
    }
}
</script>
