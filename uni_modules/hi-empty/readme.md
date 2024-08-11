# hi-empty

## 介绍

-   hi-ui - 内容为空组件

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

-   --hi-empty-color 内容文字颜色，默认 "var(--hi-font-color-middle)"
-   --hi-empty-flex-direction: 布局方向，默认 "row"
-   --hi-empty-padding: 组件内边距，默认 "80rpx 30rpx"
-   --hi-empty-icon-color: 图标的颜色，默认 "var(--hi-empty-color)""
-   --hi-empty-icon-size: 加载图标的大小，默认 "3.5em"
-   --hi-empty-icon-margin: 加载图标的外边距，默认 "0 0 30rpx 0"
-   --hi-empty-text-color: 加载文案的颜色，默认 "var(--hi-empty-color)"
-   --hi-empty-text-size: 加载文案的大小，默认 "0.8em"
-   --hi-empty-button-size: 按钮文字大小，默认 "0.8em"
-   --hi-empty-button-width: 按钮宽度，默认 "68rpx"
-   --hi-empty-button-padding: 按钮内边距，默认 "0 0.8em"
-   --hi-empty-buttom-margin: 按钮外边距，默认 "30rpx auto 0"

## 组件事件

-   click(): 按钮点击事件
