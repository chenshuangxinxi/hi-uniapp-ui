# hi-navigation-bar

## 介绍

-   hi-ui - 导航栏组件

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

-   --hi-navigation-bar-height: 导航栏高度，默认 "44px"
-   --hi-navigation-bar-padding: 导航栏内边距，0 8px
-   --hi-navigation-bar-background: 导航栏背景，默认取 pages.json 中对页面单独配置的 `navigationBarBackgroundColor`，如果没有对页面单独配置，再取 pages.json 中全局配置的 `globalStyle.navigationBarBackgroundColor` 值
-   --hi-navigation-bar-color: 导航栏文本色，默认取 pages.json 中对页面单独配置的 `navigationBarTextStyle`，如果没有对页面单独配置，再取 pages.json 中全局配置的 `globalStyle.navigationBarTextStyle` 值
-   --hi-navigation-bar-back-icon-size: 返回按钮图标大小，默认 "22px"
-   --hi-navigation-bar-back-icon-color: 返回图标按钮颜色
-   --hi-navigation-bar-back-text-size: 返回按钮文本大小，默认 "0.625em"
-   --hi-navigation-bar-back-text-color: 返回按钮文本颜色
-   --hi-navigation-bar-back-icon-opacity-hover: 返回按钮点击时的透明度，默认 "var(--hi-opacity-hover, 0.9)"
-   --hi-navigation-bar-title-size: 标题文字大小，默认 "16px"
-   --hi-navigation-bar-title-color: 标题文字颜色
-   --hi-navigation-bar-title-weight: 标题文字粗细，默认 "600"
-   --hi-navigation-bar-title-padding: 标题内边距，默认 "0 5px"
-   --hi-navigation-bar-menu-size: 菜单按钮图标尺寸，默认 "18px"
-   --hi-navigation-bar-menu-color: 菜单按钮内容颜色
-   --hi-navigation-bar-menu-weight: 菜单按钮内容粗细，默认 "500"
-   --hi-navigation-bar-menu-line-height: 菜单按钮内容行高，默认 "1"
-   --hi-navigation-bar-menu-direction: 菜单按钮布局方向，默认 "column"
-   --hi-navigation-bar-menu-margin: 菜单按钮外边距，默认 "0 5px"
-   --hi-navigation-bar-menu-text-size: 菜单按钮文字尺寸，默认 "0.4em | 0.7em(只有文字时)"
-   --hi-navigation-bar-menu-text-color: 菜单按钮文字颜色
-   --hi-navigation-bar-menu-text-weight: 菜单按钮文字粗细
-   --hi-navigation-bar-menu-text-margin: 菜单按钮文字外边距，默认 "2px 0 0 0"
-   --hi-navigation-bar-menu-opacity-hover: 菜单按钮激活时的透明度，默认 "var(--hi-opacity-hover)"

## 组件事件

-   back(): 返回按钮点击事件
-   leftClick(menu, index): 左侧菜单点击事件
    -   menu: 点击的菜单数据
    -   index: 点击的菜单索引
-   rightClick(menu, index): 右侧菜单点击事件
    -   menu: 点击的菜单数据
    -   index: 点击的菜单索引
