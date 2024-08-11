# hi-status-bar

## 介绍

-   hi-ui - 状态栏组件

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

-   --hi-status-bar-height: 状态栏高度，默认 `${uni.getSystemInfoSync().statusBarHeight}px`
-   --hi-status-bar-background: 状态栏背景，默认取 pages.json 中对页面单独配置的 `navigationBarBackgroundColor`，如果没有对页面单独配置，再取 pages.json 中全局配置的 `globalStyle.navigationBarBackgroundColor` 值
