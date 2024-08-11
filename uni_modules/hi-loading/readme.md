# hi-icon

## 介绍

-   hi-ui - 图标组件

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

-   --hi-loading-color: 内容文字颜色，默认 "var(--hi-font-color-middle)"
-   --hi-loading-flex-direction: 布局方向(row | column)，默认 "row"
-   --hi-loading-icon-color: 加载图标的颜色，默认 "var(--hi-loading-color)""
-   --hi-loading-icon-size: 加载图标的大小，默认 "1.3em"
-   --hi-loading-icon-margin: 加载图标的外边距，默认 "5px"
-   --hi-loading-duration: 加载图标转一圈用的时间，默认 "1.5s"
-   --hi-loading-text-color: 加载文案的颜色，默认 "var(--hi-loading-color)"
-   --hi-loading-text-size: 加载文案的大小，默认 "0.8em"
