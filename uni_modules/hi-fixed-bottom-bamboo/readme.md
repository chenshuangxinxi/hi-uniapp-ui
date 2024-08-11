# hi-fixed-bottom-bamboo

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

-   --hi-fixed-bottom-bamboo-width: 组件宽度，默认 "100%"
-   --hi-fixed-bottom-bamboo-left: left 值，默认 "0"
-   --hi-fixed-bottom-bamboo-bottom: bottom 值，默认 "0"
-   --hi-fixed-bottom-bamboo-padding: 内边距，默认 "1em"
-   --hi-fixed-bottom-bamboo-gap: 按钮之间的间距，默认 "0.85em"
-   --hi-fixed-bottom-bamboo-background: 背景，默认 "#ffffff"
-   --hi-fixed-bottom-bamboo-padding: 按钮内边距， 默认 "0 1em"
-   --hi-fixed-bamboo-bottom-padding: 按钮内边距，默认 "0 2.5em"
-   --hi-fixed-bottom-bamboo-button-width: 右侧按钮的宽度，默认 "auto"

## 组件事件

-   click(): 按钮点击事件
-   [xxxxx]: xxxx 为 unia-app 按钮组件自带的事件名称，比如：getphonenumber
