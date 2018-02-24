# fm-icon

## 使用
```html
<fm-icon class="icon" iconStyle='32' value="&##xe6c6;" color='##198ded' />
<fm-icon class="icon" iconStyle='64' value="&##xe6b6;" color='##04c0cf' />
<fm-icon class="icon" iconStyle='128' value="&##xe6a3;" color='##de2a2a' />
<fm-icon class="icon" iconStyle='64' value="&##xe6bb;" color='##7e97ac' />
<fm-icon class="icon" iconStyle='32' value="&##xe6cb;" color='##ffaf00' />
<fm-icon class="icon" value="//gw.alicdn.com/tfs/TB1qygJRXXXXXX2XFXXXXXXXXXX-117-37.png" />
```

## Props
| 属性 | 类型 | 示例 | 说明 |
| -------- | -------- | -------- | -------- | 
| value | String | value="&##xe6b6;"  | icon 的值，可查看 icon 编码表或传入 icon 的图片url
| iconStyle | Number / Object | iconStyle="34" / iconStyle="{ width: 34 }" | 设置大小，默认为 34px
| color | String | color="##000000" | 设置颜色，默认为黑色

## Events
| 事件名 | 事件类型 
| -------- | -------- 
| fmClick | icon 被点击时触发
| fmLongpress | icon 被长按时触发

## icon 编码表

![](http://image.res.meizu.com/image/flyme-icon/ae36ba8ef1464abcb42050e9ea159487z)


## 示例
<div class="img-txt">
![](http://image.res.meizu.com/image/flyme-icon/cdfd55250cd7447bb972c9caf3a4e8b1z)
</div>

