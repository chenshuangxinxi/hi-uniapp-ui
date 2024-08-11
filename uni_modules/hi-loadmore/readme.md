# hi-loadmore

## 介绍

-   hi-ui - 加载更多组件

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

-   --hi-loadmore-padding: 组件的内边距，默认 "20rpx"
-   --hi-loadmore-size: 内容文字大小，默认 "0.8em"
-   --hi-loadmore-color 内容文字颜色，默认 "var(--hi-font-color-light)"
-   --hi-loadmore-icon-size: 图标大小，默认 "1.3em"
-   --hi-loadmore-icon-color: 图标颜色，默认 "var(--hi-loadmore-color)""
-   --hi-loadmore-duration: 加载图标的旋转一圈的时间，默认 "1500ms"
-   --hi-loadmore-function: 加载图标的动画函数，默认 "linear"
-   --hi-loadmore-text-margin: 文字的外边距，默认 "0 5px"

## 组件事件

-   more(): loadmore 状态时点击文本的事件
