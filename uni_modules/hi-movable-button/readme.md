# hi-movable-button

## 介绍

-   hi-ui - 可拖动按钮组件

## 基础配置

### main.js

```javascript
// 引入 hi-ui 配置文件
import "@/uni_modules/hi-config";

// 配置扩展图标库前缀，支持扩展多个图标库
uni.$hi.config.icon.prefix = ["app-iconfont"];
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

-   --hi-movable-width: movable-area 的宽度，默认 "100%"
-   --hi-movable-height: movable-area 的高度，默认 "100%"，H5 端默认为 "calc(100% - var(--window-top) - var(--window-bottom))"
-   --hi-movable-left: movable-area 距离 left 值，默认 "0"
-   --hi-movable-top: movable-area 距离 top 值，默认 "0"，H5 端默认为 "var(--window-top)"
-   --hi-movable-index: 整体层级，默认 "var(--hi-index-middle)"
-   --hi-movable-button-left: 按钮 left 值， 默认 "20rpx"
-   --hi-movable-button-right: 按钮 right 值， 默认 "20rpx"
-   --hi-movable-button-top: 按钮 top 值
-   --hi-movable-button-bottom: 按钮 bottom 值
-   --hi-movable-button-background: 按钮背景，默认 "#ffffff"
-   --hi-movable-button-border-radius: 按钮圆角，默认 "50%"
-   --hi-movable-button-font-color: 按钮内容颜色
-   --hi-movable-button-shadow: 按钮阴影，默认 "var(--hi-shadow-main)"
-   --hi-movable-button-icon-color: 按钮图标颜色，默认 "var(--hi-movable-button-font-color)"
-   --hi-movable-button-icon-size: 按钮图标大小，默认 "1.5em"
-   --hi-movable-button-text-color: 按钮文字颜色，默认 "var(--hi-movable-button-font-color)"
-   --hi-movable-button-text-size: 按钮文字大小，默认 "0.6em"

## 组件事件

-   click(): 按钮点击事件
-   change(): 拖动过程中触发的事件，event.detail = {x: x, y: y, source: source}，其中 source 表示产生移动的原因，值可为 touch（拖动）、touch-out-of-bounds（超出移动范围）、out-of-bounds（超出移动范围后的回弹）、friction（惯性）和空字符串（setData）
-   scale(): 缩放过程中触发的事件，event.detail = {x: x, y: y, scale: scale}
