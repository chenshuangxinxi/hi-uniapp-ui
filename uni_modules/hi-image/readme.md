# hi-image

## 介绍

-   hi-image - 图片组件

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

-   --hi-image-width: 图片宽度，默认 "360rpx"
-   --hi-image-height: 图片高度，默认 "360rpx"
-   --hi-image-status-icon-margin: 状态图标的外边距，默认 "8px 0"
-   --hi-image-loading-icon-size: 加载图标的大小，默认 "1.5em"
-   --hi-image-loading-icon-color: 加载图标的颜色，默认 "var(--hi-font-color-light)"
-   --hi-image-loading-duration: 加载图标旋转一圈的时长，默认 "1500ms"
-   --hi-image-status-text-font-size: 加载提示文字的大小，默认 "0.75em"
-   --hi-image-status-text-color: 加载提示文字的颜色，默认 "var(--hi-font-color-light)"
-   --hi-image-error-icon-size: 加载失败图标的大小，默认 "1.75em"
-   --hi-image-error-icon-color: 加载失败图标的颜色，默认 "var(--hi-font-color-light)"
-   --hi-image-status-text-font-size: 状态提示文本的大小，默认 "0.75em"
-   --hi-image-status-text-color: 状态提示文本的颜色，默认 "var(--hi-font-color-light)"
-   --hi-image-loading-text-font-size: 加载提示文本的大小，默认 "var(--hi-image-status-text-font-size, 0.75em)"
-   --hi-image-loading-text-color: 加载提示文本的颜色，默认 "var(--hi-image-status-text-color, var(--hi-font-color-light))"
-   --hi-image-error-text-font-size: 加载失败提示文本的大小，默认 "var(--hi-image-status-text-font-size, 0.75em)"
-   --hi-image-error-text-color: 加载失败提示文本的颜色，默认 "var(--hi-image-status-text-color, var(--hi-font-color-light))"
-   --hi-image-loading-function: loading 动画函数，默认 "linear"

## 组件事件

-   click(): 点击事件
-   load(): 图片加载完成事件
-   error(): 图片加载失败事件
