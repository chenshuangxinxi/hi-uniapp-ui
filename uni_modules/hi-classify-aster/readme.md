# hi-classify-aster

## 介绍

-   hi-classify-aster - 分类组件

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

-   --hi-classify-aster-border-width: 边框宽度，默认 "0"
-   --hi-classify-aster-border-style: 边框样式，默认 "solid"
-   --hi-classify-aster-border-color: 边框颜色，默认 "var(--hi-border-color-default)"
-   --hi-classify-aster-font-size: 内容文字大小，默认 "24rpx"
-   --hi-classify-aster-overflow: overflow 属性，默认 "hidden"
-   --hi-classify-aster-height: 高度，默认 "100%"
-   --hi-classify-aster-text-align: 文字对齐方式，默认 "center"
-   --hi-classify-aster-font-weight: 字体粗细，默认 "500"
-   --hi-classify-aster-image-height: 图片高度，默认 "152rpx"
-   --hi-classify-aster-image-border-radius: 图片圆角值，默认 "var(--hi-radius-middle)"
-   --hi-classify-aster-image-background: 图片盒子背景，默认 "#ffffff"
-   --hi-classify-aster-content-padding: 内容(不包括图片)的内容边距，默认 "16rpx 0.5em"
-   --hi-classify-aster-name-font-size: 分类名称的文字大小
-   --hi-classify-aster-name-font-color: 分类名称的文字颜色
-   --hi-classify-aster-name-font-weight: 分类名称的文字粗细
-   --hi-classify-aster-name-margin: 分类名称的外边距
