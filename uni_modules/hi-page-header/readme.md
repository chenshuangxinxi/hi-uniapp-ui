# hi-page-header

## 介绍

-   hi-ui - 页面头部组件

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

-   --hi-page-header-status-bar-background: 状态栏背景，默认 "transparent"
-   --hi-page-header-navigation-bar-background: 导航栏背景，默认 "transparent"
-   --hi-page-header-background: 组件整体背景，默认取 pages.json 中对页面单独配置的 `navigationBarBackgroundColor`，如果没有对页面单独配置，再取 pages.json 中全局配置的 `globalStyle.navigationBarBackgroundColor` 值
-   --hi-page-header-color: : 组件整体文本色，默认取 pages.json 中对页面单独配置的 `navigationBarTextStyle`，如果没有对页面单独配置，再取 pages.json 中全局配置的 `globalStyle.navigationBarTextStyle` 值
-   --hi-page-header-position: 组件的 position 属性值，默认 "sticky"
-   --hi-page-header-top: 组件的 top 属性值，默认 "0px"
-   --hi-page-header-index: 组件的层级，默认 "var(--hi-index-middle, 1688)"

## 组件事件

-   back(): 返回按钮点击事件
-   leftClick(menu, index): 左侧菜单点击事件
    -   menu: 点击的菜单数据
    -   index: 点击的菜单索引
-   rightClick(menu, index): 右侧菜单点击事件
    -   menu: 点击的菜单数据
    -   index: 点击的菜单索引
