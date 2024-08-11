# HiUi - 图标

[文档]()

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

-   --hi-icon-color: 图标颜色
-   --hi-icon-size: 图标大小
-   --hi-icon-image-width: 图片图标宽度，默认 "1em"
-   --hi-icon-image-height: 图片图标高度，默认 "1em"
-   --hi-icon-disabled-opacity: 图标禁用状态时的透明度，默认 "var(--hi-opacity-disabled, 0.5)"
-   --hi-icon-opacity-hover: 图标点击状态时的透明度，默认 "var(--hi-opacity-hover)"
