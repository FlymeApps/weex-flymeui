<template>
    <div class="flymeui">
        <scroller class="scroller">
            <title link="http://design.flyme.cn/book/book.html?bookId=59df3445a5a0a611eee9f119&doc=59df4aa067e2271c7fc46b3a"></title>
            <div class="list">
              <fm-input :value="title" placeholder="分享标题" />
              <fm-input :value="content" placeholder="分享内容" />
              <fm-input :value="contentUrl" placeholder="分享url" />
              <fm-input :value="imageUrl" placeholder="图片url" />
            </div>
            <fm-button class="btn" text="点击分享" @click="share" />
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

    .scroller {
        background-color: #fafafa;
        align-items: center;
    }

    .btn {
      margin-top: 34px;
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
import Title from '../../_mods/title.vue';
import { FmText, FmImage, FmIcon, FmInput, FmButton } from '../../../index';
import DCell from '../../index/components/cell.vue';

const share = weex.requireModule('share')

const modal = weex.requireModule('modal')

export default {
    components: { FmText, FmIcon, DCell, Title, FmInput, FmButton },
    data() {
      return {
        title: 'Flyme Design',
        content: '为你提供最全面的公共规范内容展示，让你方便调用动画参数、设计参数以及控件代码',
        contentUrl: 'http://design.flyme.cn',
        imageUrl: 'http://design.flyme.cn/weexui/assets/design_logo.png'
      }
    },
    methods: {
      back() {
        navigator.pop()
      },
      share() {
        const { title, content, contentUrl, imageUrl } = this
        share.mzShare(title, content, contentUrl, imageUrl, res => {
          modal.toast({ message: res })
        })
      }
    }
}
</script>
