# hi-filter

## 介绍

-   hi-ui - 过滤器组件

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

-   --hi-filter-items-gap: items 之间的间距，默认 "1em"
-   --hi-filter-items-font-size: items 字体大小
-   --hi-filter-items-color: items 字体颜色
-   --hi-filter-items-background: items 背景
-   --hi-filter-item-content-gap: item 图标和文字的间距，默认 "2px"
-   --hi-filter-item-icon-font-size: item 图标大小
-   --hi-filter-item-icon-font-color: item 图标颜色
-   --hi-filter-item-label-font-size: item 文字大小
-   --hi-filter-item-label-font-color: item 文字颜色
-   --hi-filter-item-active-font-color: item 选中时的文字颜色
-   --hi-filter-item-active-font-size: item 选中时的文字大小
-   --hi-filter-item-active-font-weight: item 选中时的文字粗细
-   --hi-filter-item-active-icon-font-color: item 选中时的图标颜色
-   --hi-filter-item-active-icon-font-size: item 选中时的图标大小
-   --hi-filter-item-active-icon-font-weight: item 选中时的图标粗细
-   --hi-filter-item-active-label-font-color: item 选中时的文字颜色
-   --hi-filter-item-active-label-font-size: item 选中时的文字大小
-   --hi-filter-item-active-label-font-weight: item 选中时的文字粗细
-   --hi-filter-item-disabled-opacity: item 禁用时的透明度，默认 "var(--hi-opacity-disabled)"
-   --hi-filter-right-content-gap: 右侧图标与文字的间距，默认 "2px"
-   --hi-filter-right-margin: 右侧容器的外边距，默认 "0 0 0 1em"
-   --hi-filter-right-color: 右侧内容颜色
-   --hi-filter-right-font-size:右侧内容字体大小
-   --hi-filter-right-font-weight: 右侧内容字体粗细
-   --hi-filter-right-text-font-size: 右侧内容文字大小
-   --hi-filter-right-text-font-weight: 右侧内容文字粗细
-   --hi-filter-right-text-color: 右侧内容文字颜色
-   --hi-filter-right-icon-font-size: 右侧内容图标大小
-   --hi-filter-right-icon-font-color: 右侧内容图标颜色
-   --hi-filter-right-icon-font-weight: 右侧内容图标粗细

## 组件事件

-   itemClick(item, index): 左侧 item 点击事件
-   rightClick(): 右侧点击事件
