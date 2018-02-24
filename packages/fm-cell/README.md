# fm-cell

## 列表项
列表项提供了多种列表项情况的场景，包括单双多行的带主次信息描述的列表项，以及带主次信息描述的头像列表项和两种大小的应用图标列表项，并提供各种插槽供使用者自定义部分内部部件。

## 使用场景说明
因为考虑到 FmCell 的使用场景不一定是在 List 组件中使用，所以列表项的实现并不依赖于 Weex 的内建组件 -- Cell，如果想在 List 中使用 FmCell 组件，请在外层包裹 Cell 标签。

## 单双多行的列表项
#### 使用
```html
<!-- 单行 -->
<fm-cell title="列表标题"></fm-cell>
<!-- 双行 -->
<fm-cell title="列表标题"
         subTitle="列表描述"></fm-cell>
<!-- 多行 -->
<fm-cell title="列表标题"
         subTitle="辅助信息"
         description="段落描述"></fm-cell>
```
![](http://image.res.meizu.com/image/flyme-icon/47ad61ce2f4242e880e48655c9239e81z)

## 头像列表项
#### 使用
```html
<!-- 单行 -->
<fm-cell title="列表标题"
         imgSrc="https://avatars1.githubusercontent.com/u/29728294?s=400&u=9b580990065d9e9e80fb2c7d736f866bf4f3319e&v=4"></fm-cell>
<!-- 双行 -->
<fm-cell title="列表标题"
         description="段落描述"
         imgSrc="https://avatars1.githubusercontent.com/u/29728294?s=400&u=9b580990065d9e9e80fb2c7d736f866bf4f3319e&v=4"></fm-cell>
<!-- 多行 -->
<fm-cell title="列表标题"
         subTitle="辅助信息"
         description="段落描述"
         imgSrc="https://avatars1.githubusercontent.com/u/29728294?s=400&u=9b580990065d9e9e80fb2c7d736f866bf4f3319e&v=4"></fm-cell>
```
![](http://image.res.meizu.com/image/flyme-icon/befaaf3291b343f0aa753c89ee943deez)

## 应用列表项
```html
<!-- 标识图标 -->
<fm-cell title="列表标题"
         scene="icon"
         imgSrc="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=995362387,2344079991&fm=27&gp=0.jpg"></fm-cell>
<!-- 应用小图标 -->
<fm-cell title="微信"
         scene="app-small"
         subTitle="4.2 亿人安装"
         imgSrc="https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=318b6bf6073387449cc5287a6934bec4/d53f8794a4c27d1e15b40e6210d5ad6edcc43881.jpg"></fm-cell>
<!-- 应用大图标 -->
<fm-cell title="微信"
         scene="app-big"
         subTitle="4.2 亿人安装"
         description="时下最火的语音聊天交友软件"
         imgSrc="https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=318b6bf6073387449cc5287a6934bec4/d53f8794a4c27d1e15b40e6210d5ad6edcc43881.jpg"></fm-cell>
```
![](http://image.res.meizu.com/image/flyme-icon/5265ee24140048979aedf001f7e4b269z)

## 插槽自定义部件
```html
<!-- 插槽( 内容右侧 ) -->
<fm-cell title="微信"
         scene="app-big"
         subTitle="4.2 亿人安装"
         description="时下最火的语音聊天交友软件"
         imgSrc="https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=318b6bf6073387449cc5287a6934bec4/d53f8794a4c27d1e15b40e6210d5ad6edcc43881.jpg">\
	<fm-button slot="right" text="安装" @click="click" />
</fm-cell>
<!-- 插槽( 内容左侧 ) -->
<fm-cell title="微信"
         scene="app-big"
         subTitle="4.2 亿人安装"
         description="时下最火的语音聊天交友软件"
         imgSrc="https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=318b6bf6073387449cc5287a6934bec4/d53f8794a4c27d1e15b40e6210d5ad6edcc43881.jpg">\
	<div slot="left" style="justify-content: flex-start;margin-right: 36px">
		<fm-tag value="推荐" size="small" tagType="hollow" color="##f12528" fontColor="##f12528"></fm-tag>
	</div>
</fm-cell>
```
![](http://image.res.meizu.com/image/flyme-icon/6aa46e7166d44932a85c333074445aa0z)


## Props
| 属性 | 类型 | 示例 | 说明 |
| -------- | -------- | -------- | 
| title | String | title="标题"  | 标题
| subTitle | String | subTitle="副标题"  | 副标题
| description | String | description="描述"  | 描述
| scene | String | scene="icon"  | 使用场景
| imgSrc | String | imgSrc="url"  | 图片地址
| occupyingColor | String | occupyingColor="##EEEEEE"  | 图片加载时的占位背景颜色，默认为 ##EEEEEE

## Scene 场景可选值
| 场景 | 属性值 |
| -------- | -------- | 
| 圆形头像列表项 | avatar |
| 方形图标列表项 | icon |
| 小应用图标列表项 | app-small |
| 大应用图标列表项 | app-big |

