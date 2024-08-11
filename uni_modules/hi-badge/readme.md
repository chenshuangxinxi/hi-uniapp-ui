# hi-badge

## 介绍

-   hi-ui - 徽标数组件

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

-   --hi-badge-background 背景，默认 "var(--hi-theme-main)"
-   --hi-badge-font-color: 内容颜色，默认 "#ffffff"
-   --hi-badge-font-size: 内容文字大小，默认 "0.7em"
-   --hi-badge-font-weight: 内容文字粗细，默认 "400"
-   --hi-badge-border-radius: 圆角值，默认 "100px"
-   --hi-badge-padding: 内边距，默认 "8rpx 16rpx"
-   --hi-badge-position: 组件 position 属性，默认 "absolute"
-   --hi-badge-left: left 值
-   --hi-badge-right: right 值，默认 "0"
-   --hi-badge-top: top 值，默认 "0"
-   --hi-badge-bottom: bottom 值
-   --hi-badge-index: z-index 值，默认 "6"
-   --hi-badge-dot-size: 为圆点时，圆点的宽高尺寸
-   --hi-badge-transform: 位移，默认 "translate(25%, -25%)"
