# hi-notice-bar

## 介绍

-   hi-ui - 滚动通知组件

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

-   --hi-notice-bar-background: 组件背景
-   --hi-notice-bar-color: 组件文本色
-   --hi-notice-bar-padding: 组件内间距
-   --hi-notice-bar-size: 组件文本尺寸
-   --hi-notice-line-height: 组件内容行高，默认 "1.5"
-   --hi-notice-bar-text-height: 滚动文本内容的可视区域高度，默认 "1.5em"
-   --hi-notice-bar-text-margin: 滚动文本内容的外边距，默认 "0 0.5em"
-   --hi-notice-bar-notice-icon-size: 通知图标的大小，默认 "1.15em"
-   --hi-notice-bar-notice-icon-color: 通知图标的颜色
