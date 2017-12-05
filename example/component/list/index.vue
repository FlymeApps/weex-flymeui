<template>
  <div class="mzui-demo">
    <scroller class="scroller">
      <title link="http://design.flyme.cn/book/book.html?bookId=59ef0a54a5a0a6738061aeeb&doc=59efee69a5a0a6738061aeff"></title>
      <category title="单行列表"></category>
        <fm-cell title="列表标题"></fm-cell>
        <fm-cell title="列表标题"></fm-cell>
      <category title="双行列表"></category>
        <fm-cell title="列表标题"
                 subTitle="列表描述"></fm-cell>
        <fm-cell title="列表标题"
                 subTitle="列表描述"></fm-cell>
      <category title="文字多行列表"></category>
        <fm-cell title="列表标题"
                 subTitle="辅助信息"
                 description="段落描述"></fm-cell>
        <fm-cell title="列表标题"
                 subTitle="辅助信息"
                 description="段落描述"></fm-cell>
      <category title="头像列表"></category>
        <fm-cell title="列表标题"
                 imgSrc="https://avatars1.githubusercontent.com/u/29728294?s=400&u=9b580990065d9e9e80fb2c7d736f866bf4f3319e&v=4"></fm-cell>
        <fm-cell title="列表标题"
                 description="段落描述"
                 imgSrc="https://avatars1.githubusercontent.com/u/29728294?s=400&u=9b580990065d9e9e80fb2c7d736f866bf4f3319e&v=4"></fm-cell>
        <fm-cell title="列表标题"
                 subTitle="辅助信息"
                 description="段落描述"
                 imgSrc="https://avatars1.githubusercontent.com/u/29728294?s=400&u=9b580990065d9e9e80fb2c7d736f866bf4f3319e&v=4"></fm-cell>
      <category title="图标列表( 标识图标 )"></category>
        <fm-cell title="列表标题"
                 scene="icon"
                 imgSrc="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=995362387,2344079991&fm=27&gp=0.jpg"></fm-cell>
        <fm-cell title="列表标题"
                 scene="icon"
                 description="段落描述"
                 imgSrc="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=995362387,2344079991&fm=27&gp=0.jpg"></fm-cell>
      <category title="图标列表( 应用小图标 )"></category>
        <fm-cell title="微信"
                 scene="app-small"
                 subTitle="4.2 亿人安装"
                 imgSrc="https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=318b6bf6073387449cc5287a6934bec4/d53f8794a4c27d1e15b40e6210d5ad6edcc43881.jpg"></fm-cell>
        <fm-cell title="微信"
                 scene="app-small"
                 subTitle="4.2 亿人安装"
                 imgSrc="https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=318b6bf6073387449cc5287a6934bec4/d53f8794a4c27d1e15b40e6210d5ad6edcc43881.jpg"></fm-cell>
      <category title="图标列表( 应用大图标 )"></category>
        <fm-cell title="微信"
                 scene="app-big"
                 subTitle="4.2 亿人安装"
                 description="时下最火的语音聊天交友软件"
                 imgSrc="https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=318b6bf6073387449cc5287a6934bec4/d53f8794a4c27d1e15b40e6210d5ad6edcc43881.jpg"></fm-cell>
        <fm-cell title="微信"
                 scene="app-big"
                 subTitle="4.2 亿人安装"
                 description="时下最火的语音聊天交友软件"
                 imgSrc="https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=318b6bf6073387449cc5287a6934bec4/d53f8794a4c27d1e15b40e6210d5ad6edcc43881.jpg"></fm-cell>
      <category title="插槽( 内容右侧 )"></category>
        <fm-cell title="微信"
                 scene="app-big"
                 subTitle="4.2 亿人安装"
                 description="时下最火的语音聊天交友软件"
                 imgSrc="https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=318b6bf6073387449cc5287a6934bec4/d53f8794a4c27d1e15b40e6210d5ad6edcc43881.jpg">\
          <fm-button slot="right" text="安装" @click="click" />
        </fm-cell>
      <category title="插槽( 内容左侧 )"></category>
        <fm-cell title="微信"
                 scene="app-big"
                 subTitle="4.2 亿人安装"
                 description="时下最火的语音聊天交友软件"
                 imgSrc="https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=318b6bf6073387449cc5287a6934bec4/d53f8794a4c27d1e15b40e6210d5ad6edcc43881.jpg">\
          <div slot="left" style="justify-content: flex-start;margin-right: 36px">
            <fm-tag value="推荐" size="big" tagType="hollow" color="#f12528" fontColor="#f12528"></fm-tag>
          </div>
        </fm-cell>
      <category title="插槽( 标题 )"></category>
        <fm-cell title="微信"
                 scene="app-big"
                 subTitle="4.2 亿人安装"
                 description="时下最火的语音聊天交友软件"
                 imgSrc="https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=318b6bf6073387449cc5287a6934bec4/d53f8794a4c27d1e15b40e6210d5ad6edcc43881.jpg">\
          <div slot="title" style="justify-content: flex-start;margin-right: 36px">
            <fm-tag value="推荐" size="big" tagType="hollow" color="#f12528" fontColor="#f12528"></fm-tag>
          </div>
        </fm-cell>
    </scroller>
  </div>
</template>

<style lang="sass" scoped>
  @import "../../../packages/style/mixin.scss";
  .mzui-demo {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #fff;
  }
  
  .scroller {
    flex: 1;
  }
</style>

<script>
import { FmCell, FmButton, FmTag } from '../../../index';
import Title from '../../_mods/title.vue';
import Category from '../../_mods/category.vue';
import { setTitle } from '../../_mods/set-nav';

const modal = weex.requireModule('modal');

export default {
    components: { Title, Category, FmCell, FmButton, FmTag },
    methods: {
      click() {
        modal.toast({ message: '点击了安装' })
      }
    }
}
</script>
