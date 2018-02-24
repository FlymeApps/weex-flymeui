# fm-popup

## 说明
FmPopup 是一款带有手风琴动画效果的侧弹窗口，可以使用在侧弹菜单、侧弹选择、操作提示灯场景中。
<video src="http://baas.dfs.flyme.cn/group3/M09/C3/6B/CgOUhFpLcL-ACLv-ABx2agrnJnw459.mp4" style="width: 375px;" controls="controls"></video>


## 使用
```html
<fm-popup :have-overlay="isTrue"
          popup-color="##FFFFFF"
          :show="isTopShow"
          @fmPopupOverlayClicked="popupOverlayTopClick"
          pos="top"
          height="400">
</fm-popup>
<fm-popup :have-overlay="isTrue"
          ref="popup"
          popup-color="##FFFFFF"
          :show="isBottomShow"
          @fmPopupOverlayClicked="popupOverlayBottomClick"
          pos="bottom"
          height="400">
	<fm-button class="btn" text="主动隐藏" @click="clickHide" />
</fm-popup>
<fm-popup :have-overlay="isTrue"
          popup-color="##FFFFFF"
          :show="isLeftShow"
          @fmPopupOverlayClicked="popupOverlayLeftClick"
          pos="left"
          width="400">
</fm-popup>
<fm-popup :have-overlay="isTrue"
          popup-color="##FFFFFF"
          :show="isRightShow"
          @fmPopupOverlayClicked="popupOverlayRightClick"
          pos="right"
          width="400">
</fm-popup>
```

## Props
| 属性 | 类型 | 示例 | 说明 |
| -------- | -------- | -------- | 
| show | Boolean | show="show"  | 是否显示
| pos | String | pos="bottom"  | 弹出方向，有 top / right / bottom / left 四种方向
| popupColor | String | popupColor="##FFFFFF"  | 弹出窗的颜色
| overlayCfg | Object | overlayCfg=""  | 蒙层的配置，请参照 FmOverlay 的 props 并以对象形式传入
| height | Number | height="300"  | 弹出窗的高度，当弹出方向为上或下时生效，弹出方向为左或右的时候高度为 100%
| width | Number | width="300"  | 弹出窗的宽度，当弹出方向为左或右时生效，弹出方向为上或下的时候宽度为 100%
| animation | Object | animation="{ timingFunction: 'ease-out' }"  | 动画的配置

## Events
| 事件名 | 事件类型 
| -------- | -------- 
| fmPopupOverlayClicked | 蒙层被点击时触发

