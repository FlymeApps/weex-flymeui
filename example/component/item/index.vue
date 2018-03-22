<template>
  <div class="mzui-demo">
    <scroller class="scroller">
      <title link="https://yanjiie.github.io/weex-flymeui/#/packages/fm-item/"></title>
      <category title="单行列表"></category>
        <fm-item type="single" title="列表标题"></fm-item>
        <fm-item type="single" title="列表标题"></fm-item>
      <category title="双行列表"></category>
        <fm-item title="列表标题"
                 summary="列表描述"></fm-item>
        <fm-item title="列表标题"
                 summary="列表描述"></fm-item>
      <category title="文字多行列表"></category>
        <fm-item title="列表标题"
                 summary="辅助信息"
                 description="段落描述"></fm-item>
        <fm-item title="列表标题"
                 summary="辅助信息"
                 description="段落描述"></fm-item>
      <category title="头像列表"></category>
        <fm-item title="列表标题"
                 type="avatar-single"
                 imgSrc="https://avatars1.githubusercontent.com/u/29728294?s=400&u=9b580990065d9e9e80fb2c7d736f866bf4f3319e&v=4"></fm-item>
        <fm-item title="列表标题"
                 description="段落描述"
                 type="avatar-normal"
                 imgSrc="https://avatars1.githubusercontent.com/u/29728294?s=400&u=9b580990065d9e9e80fb2c7d736f866bf4f3319e&v=4"></fm-item>
        <fm-item title="列表标题"
                 summary="辅助信息"
                 description="段落描述"
                 type="avatar-normal"
                 imgSrc="https://avatars1.githubusercontent.com/u/29728294?s=400&u=9b580990065d9e9e80fb2c7d736f866bf4f3319e&v=4"></fm-item>
      <category title="图标列表( 标识图标 )"></category>
        <fm-item title="列表标题"
                 type="icon-small"
                 imgSrc="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=995362387,2344079991&fm=27&gp=0.jpg"></fm-item>
        <fm-item type="icon-small"
                 title="列表标题"
                 description="段落描述"
                 imgSrc="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=995362387,2344079991&fm=27&gp=0.jpg"></fm-item>
      <category title="图标列表( 应用小图标 )"></category>
        <fm-item type="icon-middle"
                 title="微信"
                 summary="4.2 亿人安装"
                 imgSrc="https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=318b6bf6073387449cc5287a6934bec4/d53f8794a4c27d1e15b40e6210d5ad6edcc43881.jpg"></fm-item>
        <fm-item type="icon-middle"
                 title="微信"
                 summary="4.2 亿人安装"
                 imgSrc="https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=318b6bf6073387449cc5287a6934bec4/d53f8794a4c27d1e15b40e6210d5ad6edcc43881.jpg"></fm-item>
      <category title="图标列表( 应用大图标 )"></category>
        <fm-item type="icon-large"
                 title="微信"
                 summary="4.2 亿人安装"
                 description="时下最火的语音聊天交友软件"
                 imgSrc="https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=318b6bf6073387449cc5287a6934bec4/d53f8794a4c27d1e15b40e6210d5ad6edcc43881.jpg"></fm-item>
        <fm-item type="icon-large"
                 title="微信"
                 summary="4.2 亿人安装"
                 description="时下最火的语音聊天交友软件"
                 imgSrc="https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=318b6bf6073387449cc5287a6934bec4/d53f8794a4c27d1e15b40e6210d5ad6edcc43881.jpg"></fm-item>
      <category title="插槽( 内容右侧 )"></category>
        <fm-item type="icon-large"
                 title="微信"
                 summary="4.2 亿人安装"
                 description="时下最火的语音聊天交友软件"
                 imgSrc="https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=318b6bf6073387449cc5287a6934bec4/d53f8794a4c27d1e15b40e6210d5ad6edcc43881.jpg">\
          <fm-button slot="right" @buttonClicked="click">安装</fm-button>
        </fm-item>
      <category title="插槽( 内容左侧 )"></category>
        <fm-item type="icon-large"
                 title="微信"
                 summary="4.2 亿人安装"
                 description="时下最火的语音聊天交友软件"
                 imgSrc="https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=318b6bf6073387449cc5287a6934bec4/d53f8794a4c27d1e15b40e6210d5ad6edcc43881.jpg">\
          <div slot="left" style="justify-content: flex-start;margin-right: 36px">
            <fm-tag value="推荐" size="small" type="hollow" color="#f12528" fontColor="#f12528"></fm-tag>
          </div>
        </fm-item>
      <category title="插槽( 标题 )"></category>
        <fm-item type="icon-large"
                 title="微信"
                 summary="4.2 亿人安装"
                 description="时下最火的语音聊天交友软件"
                 imgSrc="https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=318b6bf6073387449cc5287a6934bec4/d53f8794a4c27d1e15b40e6210d5ad6edcc43881.jpg">\
          <div slot="title" style="justify-content: flex-start;margin-right: 36px">
            <fm-tag value="推荐" size="big" type="hollow" color="#f12528" fontColor="#f12528"></fm-tag>
          </div>
        </fm-item>
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
    background-color: #ffffff;
  }

  .scroller {
    position: absolute;
    top: 66px;
    right: 0;
    left: 0;
    bottom: 0;
  }
</style>

<script>
import { FmItem, FmButton, FmTag } from '../../../index';
import Title from '../../_mods/title.vue';
import Category from '../../_mods/category.vue';

export default {
  components: { Title, Category, FmItem, FmButton, FmTag },
  methods: {
    click () {
      modal.toast({ message: '点击了安装' });
    }
  }
};
</script>
