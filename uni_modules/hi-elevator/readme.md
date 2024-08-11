# hi-elevator

## 介绍

-   hi-ui - 电梯导航组件

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

-   --hi-elevator-width: 组件整体宽度，默认 "100%"
-   --hi-elevator-height: 组件整体高度，默认 "100%"
-   --hi-elevator-floors-width: 左侧宽度，默认 "180rpx"
-   --hi-elevator-floors-height: 左侧高度
-   --hi-elevator-floors-background: 左侧背景，默认 #f1f3f4"
-   --hi-elevator-floors-active-background: 左侧 item 盒子激活时的背景，默认 "#ffffff"
-   --hi-elevator-floors-font-size: 左侧内容文字大小
-   --hi-elevator-floors-active-font-size: 左侧 item 盒子激活时的文字大小
-   --hi-elevator-floors-font-color: 左侧内容文字颜色
-   --hi-elevator-floors-active-font-color: 左侧 item 盒子激活时的文字颜色，默认 "var(--hi-theme-main)"
-   --hi-elevator-floors-text-align: 左侧内容文字对齐方式，默认 "center"
-   --hi-elevator-floors-font-weight: 左侧内容文字粗细，默认 "400"
-   --hi-elevator-floors-active-font-weight: 左侧 item 盒子激活时的文字粗细，默认 "800"
-   --hi-elevator-floor-padding: 左侧 item 盒子内边距，默认 "1em 0.5em"
-   --hi-elevator-floors-bar-transition: 左侧 item 切换时的过渡效果
-   --hi-elevator-floors-bar-width: 左侧指示条的宽度，默认 "6rpx"
-   --hi-elevator-floors-bar-height: 左侧指示条的高度，默认 "1em"
-   --hi-elevator-floors-bar-border-radius: 左侧指示条的圆角值，默认 "var(--hi-radius-small)"
-   --hi-elevator-floors-bar-background: 左侧指示条的背景，默认 "var(--hi-theme-main)"
-   --hi-elevator-floors-bar-left: 左侧指示条的 top 值，默认 "0"
-   --hi-elevator-floors-bar-top: 左侧指示条的 left 值，默认 "50%"
-   --hi-elevator-floors-bar-right: 左侧指示条的 right 值，默认 "auto"
-   --hi-elevator-floors-bar-bottom: 左侧指示条的 bottom 值，默认 "auto"
-   --hi-elevator-floors-disabled-opacity: 左侧 item 盒子禁用时的透明度，默认 "var(--hi-opacity-disabled)"
-   --hi-elevator-rooms-height: 右侧内容的高度

## 组件事件

-   change(index): 切换事件，index: 切换后的下标
-   scrolltoupper(index): 右侧内容滚动到顶部/左边，会触发 scrolltoupper 事件，index: 当前选中项的下标
-   scrolltolower(index): 右侧内容滚动到底部/右边，会触发 scrolltolower 事件，index: 当前选中项的下标
-   scroll(e, index): 右侧内容滚动时触发，event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY}，index: 当前选中项的下标
-   refresherpulling(index): 右侧内容自定义下拉刷新控件被下拉，index: 当前选中项的下标
-   refresherrefresh(index): 右侧内容自定义下拉刷新被触发，index: 当前选中项的下标
-   refresherrestore(index): 右侧内容自定义下拉刷新被复位，index: 当前选中项的下标
-   refresherabort(index): 右侧内容自定义下拉刷新被中止，index: 当前选中项的下标

# 组件插槽

-   leftItem: 左侧内容插槽，提供了 item: 左侧 item 数据； index: 左/右侧 item 下标
-   rightItem: 右侧内容插槽，提供了 item: 左侧 item 数据； index: 左/右侧 item 下标
