# hi-button

## 介绍

-   hi-ui - 按钮组件

## 基础配置

### main.js

```javascript
// 引入 hi-ui 配置文件
import "@/uni_modules/hi-config";
```

### App.vue

```vue
<style lang="scss">
    /* 引入 hi-ui 样式  */
    @import "@/uni_modules/hi-styles/index.scss";
</style>
```

## 组件属性

-   请自行查看组件目录中的 props.js 文件中的对应注释~~~

## 组件样式变量

-   --hi-button-display: 按钮布局模式，默认 "inline-flex"
-   --hi-button-size: 按钮文本尺寸，默认 "1em"
-   --hi-button-color: 按钮文本颜色，默认 "inherit"
-   --hi-button-width: 按钮宽度，默认 "auto"，图标按钮时，默认 "var(--hi-button-height, 88rpx)"
-   --hi-button-height: 按钮高度，默认 "88rpx"， 图标按钮时，默认 "var(--hi-button-height, 88rpx)"
-   --hi-button-border-wdith: 按钮边框粗细，默认 "1px"
-   --hi-button-border-style: 按钮边框类型，默认 "solid"
-   --hi-button-border-color: 按钮边框颜色，默认 "var(--hi-border-color-default)"
-   --hi-button-border-radius: 按钮圆角，默认 "var(--hi-radius-small)"
-   --hi-button-background: 按钮背景，默认 "#ffffff"
-   --hi-button-padding: 按钮内边距，默认 "0 2.5em"，图标按钮时，默认 "0"
-   --hi-button-margin: 按钮外边距，默认 "0"
-   --hi-button-text-margin: 按钮文字的外边距，默认 "0 3px"
-   --hi-button-icon-size: 按钮图标的大小，默认 "1.1em"
-   --hi-button-opacity-disabled: 按钮禁用状态时的透明度，默认 "var(--hi-opacity-disabled, 0.5)"
-   --hi-button-loading-duration: 按钮 loading 按钮的旋转一圈需要的时长，默认 "1500ms"
-   --hi-button-loading-function: loading 动画函数，默认 "linear"
-   --hi-button-text-conent-gap: 按钮主文本和副文本之间的间距，默认 "5px"
-   --hi-button-line-height: 按钮内容行高，默认 "1"
-   --hi-button-text-sub-font-size: 按钮副文本的字体大小，默认 "0.7"
-   --hi-button-text-sub-font-color: 按钮副文本的颜色

## 组件事件

-   [组件事件](https://uniapp.dcloud.net.cn/component/button.html)
