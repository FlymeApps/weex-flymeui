# fm-rater

## 说明
FmRater 是一款显示或者供用户输入的分数显示控件，分数以星星的形式将分数信息传达给用户，提供两种大小和三种模式。

<video src="http://baas.dfs.flyme.cn/group5/M06/7A/A1/CgOUcVpLcPeAH0rFABDl3Vx0gWk045.mp4" style="width: 375px;" controls="controls"></video>

## Native 依赖说明
FmRater 内部图片的显示是使用了 Base64，如 Native 端不支持 Base64，请使用自定义图片传入组件使用。

## 使用
```html
<!-- 默认使用 -->
<fm-rater theme="normal"></fm-rater>
<!-- 不同大小 -->
<fm-rater theme="normal" size='small'></fm-rater>
<!-- 单色模式主题 -->
<fm-rater theme="normal" theme="special"></fm-rater>
<!-- 夜间模式主题 -->
<fm-rater theme="normal" theme="dark"></fm-rater>
<!-- 初始化分数 -->
<fm-rater :score="2" :canChange="false"></fm-rater>
<!-- 分数更改回调 -->
<fm-rater @fmRaterScoreChanged="scoreChanged"></fm-rater>
```

## Props
| 属性 | 类型 | 示例 | 说明 |
| -------- | -------- | -------- | 
| score | Number | score="2"  | 当前分数
| fullScore | Number | fullScore="10"  | 满分的分数，默认为 10
| size | String | size="big"  | 大小，默认为 big
| theme | String | theme="normal"  | 主题，有 normal、special、dark 三种
| canChange | Boolean | canChange="true"  | 是否允许更改分数，当为 true 时，用户可以通过点击或者滑动以 0.5 格步进更改分数值
| canSlide | Boolean | canSlide="true"  | 是否允许滑动更改分数，当为 false 时，用户只能通过点击更改分数值
| starImgs | Array | starImgs="\[\]"  | 自定义 normal 主题的星星图片，应传入长度为 5 的数组
| starSpecialImg | String | starSpecialImg="../../assets/star_special.png"  | 自定义 special 主题的星星图片
| starDarkImg | String | starDarkImg="../../assets/starDarkImg.png"  | 自定义 dark 主题的星星图片
| starBgImg | String | starBgImg="../../assets/starBgImg.png"  | 自定义 normal 和 special 主题的背景星星图片
| starDarkBgImg | String | starDarkBgImg="../../assets/starDarkBgImg.png"  | 自定义 dark 主题的背景星星图片

## Events
| 事件名 | 事件类型 
| -------- | -------- 
| fmRaterScoreChanged | 分数更改时触发，参数值：{ score: curr_score }

