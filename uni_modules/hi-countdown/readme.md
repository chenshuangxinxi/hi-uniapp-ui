# hi-countdown

## 介绍

-   hi-ui - 倒计时组件

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

-   --hi-countdown-font-color: 倒计时字体颜色
-   --hi-countdown-items-gap: 内容之间的间距，默认 "2px"，block 时默认 "5px"
-   --hi-countdown-block-height: block 的高度，默认 "2em"
-   --hi-countdown-block-width: block 的宽度
-   --hi-countdown-block-padding: block 的内填充，默认 "0 0.4em"
-   --hi-countdown-block-background: block 的背景
-   --hi-countdown-block-border-width: block 的边框宽度，默认 "0.5px"
-   --hi-countdown-block-border-style: block 的边框样式，默认 "solid"
-   --hi-countdown-block-border-color: block 的边框颜色，默认 "var(--hi-border-color-default)"
-   --hi-countdown-block-border-radius: block 的边框圆角，默认 "var(--hi-radius-middle)"
-   --hi-countdown-block-color: block 的字体颜色，默认 "#ffffff"
-   --hi-countdown-block-font-size: block 的字体大小
-   --hi-countdown-block-font-weight: block 的字体粗细
-   --hi-countdown-plain-background: 镂空时背景，默认 "transparent""
-   --hi-countdown-plain-color: 镂空时字体颜色，默认 "currentColor"
-   --hi-countdown-plain-border-color: 镂空时边框颜色，默认 "currentColor"

## 组件事件

-   change(countdown): countdown 包含当前的倒计时各个信息，具体的信息参考 hi-functions 中 date 的 formatCountdown 函数的返回值
-   end(): 倒计时结束事件

# 组件插槽

-   default(countdown): 默认自定义内容插槽，countdown 包含当前的倒计时各个信息，具体的信息参考 hi-functions 中 date 的 formatCountdown 函数的返回值
-   end(countdown): 倒计时结束提示内容插槽，countdown 包含当前的倒计时各个信息，具体的信息参考 hi-functions 中 date 的 formatCountdown 函数的返回值
