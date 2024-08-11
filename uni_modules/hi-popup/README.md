# hi-popup

## 介绍

-   hi-ui - 弹出层组件

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

-   --hi-popup-width: 内容宽度，居中时: 默认 "80%"; 顶部、底部时: 默认 "100%"; 居左、居右时: 默认 "无"
-   --hi-popup-max-width: 内容最大宽度，居中、顶部、底部时: 默认 "100%"; 居左、居右时: 默认 "80%"
-   --hi-popup-height: 内容高度，居中、顶部、底部时: 默认 "无"; 居左、居右时: 默认 "100%"
-   --hi-popup-max-height: 内容最大高度，居中、顶部、底部时: 默认 "50%"; 居左、居右时: 默认 "100%"
-   --hi-popup-background: 内容背景，默认 "#ffffff"
-   --hi-popup-border-radius: 内容圆角值，居中时: 默认 "var(--hi-radius-main)"; 顶部时: 默认 "0 0 var(--hi-radius-main) var(--hi-radius-main)"; 底部时: 默认 "var(--hi-radius-main) var(--hi-radius-main) 0 0"; 居左时: 默认 "0 var(--hi-radius-main) var(--hi-radius-main) 0"; 居右时: 默认 "var(--hi-radius-main) 0 0 var(--hi-radius-main)";
-   --hi-popup-padding-top: 内容上内边距值
-   --hi-popup-padding-bottom: 内容下内边距值，居左、居右、底部时: 默认 "env(safe-area-inset-bottom)"; 居中、居上时: 默认 "无"
-   --hi-popup-padding-left: 内容左内边距值
-   --hi-popup-padding-right: 内容右内边距值
-   --hi-popup-overflow: 内容是溢出后的显示方式，默认 "hidden"
-   --hi-popup-head-padding: 头部的内填充，默认 "0.6em 3em"
-   --hi-popup-head-text-align: 头部的文本对齐方式，默认 "center"
-   --hi-popup-head-font-size: 头部的字体大小，默认 "1.25em"
-   --hi-popup-head-font-weight: 头部的字体粗细，默认 "700"
-   --hi-popup-head-font-color: 头部的字体颜色
-   --hi-popup-title-font-size: 标题字体大小
-   --hi-popup-title-font-weight: 标题字体粗细
-   --hi-popup-title-font-color: 标题字体颜色
-   --hi-popup-title-text-align: 标题对齐方式
-   --hi-popup-close-color: 关闭按钮颜色
-   --hi-popup-close-size: 关闭按钮大小
-   --hi-popup-close-background: 关闭按钮背景
-   --hi-popup-close-border-radius: 关闭按钮圆角
-   --hi-popup-close-right: 关闭按钮距离右边距离
-   --hi-popup-close-top: 关闭按钮距离上边距离
-   --hi-popup-close-transform: 关闭按钮位移，默认 "translateY(-50%)"
-   --hi-popup-body-background: body 背景
-   --hi-popup-body-border-style: body 边框样式，默认 "solid"
-   --hi-popup-body-border-color: body 边框颜色，默认 "var(--hi-border-color-default)"
-   --hi-popup-body-border-top-width: body 上边框宽度，默认 "0"
-   --hi-popup-body-border-bottom-width: body 下边框宽度，默认 "0"
-   --hi-popup-body-border-left-width: body 左边框宽度，默认 "0"
-   --hi-popup-body-border-right-width: body 右边框宽度，默认 "0"
-   --hi-popup-duration: 内容动画效果时长，默认 "500ms"
-   --hi-popup-function: 内容动画效果函数，默认 "ease-in-out"

## 组件事件

-   close(): 关闭事件
-   asyncClose(): 异步关闭事件
-   change(index): 切换事件，index: 切换后的下标
-   scrolltoupper(index): 右侧内容滚动到顶部/左边，会触发 scrolltoupper 事件，index: 当前选中项的下标
-   scrolltolower(index): 右侧内容滚动到底部/右边，会触发 scrolltolower 事件，index: 当前选中项的下标
-   scroll(e, index): 右侧内容滚动时触发，event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY}，index: 当前选中项的下标
-   refresherpulling(index): 右侧内容自定义下拉刷新控件被下拉，index: 当前选中项的下标
-   refresherrefresh(index): 右侧内容自定义下拉刷新被触发，index: 当前选中项的下标
-   refresherrestore(index): 右侧内容自定义下拉刷新被复位，index: 当前选中项的下标
-   refresherabort(index): 右侧内容自定义下拉刷新被中止，index: 当前选中项的下标

# 组件插槽

-   head: 头部，包含标题和关闭按钮
-   title: 标题
-   close: 关闭按钮
-   foot: 底部
