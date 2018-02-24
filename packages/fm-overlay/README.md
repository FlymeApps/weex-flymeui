# fm-overlay

## 说明
FmOverlay 是一个占满 viewport 的半透明覆盖层，可以使用在提示型组件或场景中。
<video src="http://baas.dfs.flyme.cn/group3/M05/B5/B1/CgOUhlpLcCyAGgXDABMiUByYU7s066.mp4" style="width: 375px;" controls="controls"></video>

## 使用
```html
<fm-overlay :show="show"
            duration="300"
            :hasAnimation="hasAnimation"
            :timingFunction="timingFunction"
            @fmOverlayBodyClicked="fmOverlayBodyClicked"
            opacity="0.5"></fm-overlay>
```

## Props
| 属性 | 类型 | 示例 | 说明 |
| -------- | -------- | -------- | 
| show | Boolean | show="show"  | 蒙层是否显示，单项数据流从父组件传入
| duration | Number | duration="300"  | 动画过渡时间。默认为 300
| hasAnimation | Boolean | hasAnimation="true"  | 是否使用动画过渡，默认为使用动画过渡
| timingFunction | Array | :timingFunction="\['ease-in', 'ease-out'\]"  | 自定义动画过渡形式，数组下标 0 为进入动画，下标 1 为退出动画
| opacity | Number | opacity="0.5"  | 蒙层的透明度，默认为 0.5
| canAutoClose | Boolean | canAutoClose="true"  | 点击蒙层时是否可以触发关闭，默认为 true

## Events
| 事件名 | 事件类型 
| -------- | -------- 
| fmOverlayBodyClicked | 蒙层被点击时触发

