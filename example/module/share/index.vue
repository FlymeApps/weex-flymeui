<template>
    <div class="flymeui">
        <scroller class="scroller">
            <title link="http://design.flyme.cn/book/book.html?bookId=59df3445a5a0a611eee9f119&doc=59df4aa067e2271c7fc46b3a"></title>
            <div class="list">
              <fm-input :value="title" placeholder="分享标题" />
              <fm-input :value="content" placeholder="分享内容" />
              <fm-input :value="contentUrl" placeholder="分享url" />
              <fm-input :value="imageUrl" placeholder="图片url" />
              <fm-input :value="imagePath" placeholder="图片path" />
            </div>
            <fm-button class="btn" @buttonClicked="shareText">分享文本内容</fm-button>
            <fm-button class="btn" @buttonClicked="shareImageByUrl">分享图片(URL)</fm-button>
            <fm-button class="btn" @buttonClicked="shareImageByPath">分享图片(Native 路径)</fm-button>
            <fm-button class="btn" @buttonClicked="shareImagesByPath">分享多张图片(Native 路径,最多9张)</fm-button>
        </scroller>
    </div>
</template>

<style scoped>
    .actionBar {
        height: 192px;
        padding-top: 60px;
    }

    .actionIcon {
        margin-top: 30px;
        margin-right: 45px;
        margin-left: 51px;
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
      margin-top: 102px;
    }

    .header {
        flex-direction: row;
        align-items: flex-end;
        margin-top: 71px;
        margin-bottom: 104px;
        margin-left: 72px;
    }

    .list {
        margin-left: 28px;
        margin-right: 28px;
        padding: 28px;
    }
</style>

<script>
import Title from '../../_mods/title.vue';
import { FmText, FmIcon, FmInput, FmButton } from '../../../index';
import DCell from '../../_mods/cell.vue';

const share = weex.requireModule('share');

const modal = weex.requireModule('modal');

export default {
  components: { FmText, FmIcon, DCell, Title, FmInput, FmButton },
  data () {
    return {
      title: 'Flyme Design',
      content: '为你提供最全面的公共规范内容展示，让你方便调用动画参数、设计参数以及控件代码',
      contentUrl: 'http://design.flyme.cn',
      imageUrl: 'http://img1.3lian.com/2015/a1/84/d/94.jpg',
      imagePath: '/storage/emulated/0/Android/data/com.meizu.creator.sdkdemo/cache/755d52355e227a2fa63dcf5082106079.png',
      imagesPath: ['/storage/emulated/0/Android/data/com.meizu.creator.sdkdemo/cache/755d52355e227a2fa63dcf5082106079.png', '/storage/emulated/0/Android/data/com.meizu.creator.sdkdemo/cache/755d52355e227a2fa63dcf5082106079.png']
    };
  },
  methods: {
    back () {
      navigator.pop();
    },
    shareText () {
      const { title, content } = this;
      share.shareText(title, content, res => {
        modal.toast({ message: res });
      });
    },
    shareImageByUrl () {
      const { imageUrl, content } = this;
      share.shareImageByUrl(imageUrl, content, res => {
        modal.toast({ message: res });
      });
    },
    shareImageByPath () {
      const { imagePath, content } = this;
      share.shareImageByPath(imagePath, content, res => {
        modal.toast({ message: res });
      });
    },
    shareImagesByPath () {
      const { imagesPath, content } = this;
      share.shareImagesByPath(imagesPath, content, res => {
        modal.toast({ message: res });
      });
    }
  }
};
</script>
