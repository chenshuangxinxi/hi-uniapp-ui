# hi-tag

## 介绍

-   hi-ui - 标签组件

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

-   --hi-tag-background: 标签背景，默认 "#f8f8f8"
-   --hi-tag-height: 标签高度，默认 "2em"
-   --hi-tag-line-height: 标签内容行高，默认 "1em"
-   --hi-tag-font-color: 标签内容文字颜色
-   --hi-tag-font-size: 标签内容文字尺寸，默认 "0.8em"
-   --hi-tag-padding: 标签内容内边距，默认 "0 0.6em"
-   --hi-tag-border-radius: 标签组件圆角值，默认 "var(--hi-radius-small)"
-   --hi-tag-content-gap: 标签内容之间的间距，默认 "3px"
-   --hi-tag-border-width: 组件边框宽度，默认 "0"
-   --hi-tag-border-style: 组件边框类型，默认 "solid"
-   --hi-tag-border-color: 组件边框颜色，默认 "currentColor"
-   --hi-tag-icon-font-color: 标签图标颜色
-   --hi-tag-icon-font-size: 标签图标尺寸
-   --hi-tag-icon-image-width: 标签图片图标的宽度
-   --hi-tag-icon-image-height: 标签图片图标的高度
-   --hi-tag-text-font-size: 标签文字单独的尺寸
-   --hi-tag-text-font-color: 标签文字单独的文字颜色
-   --hi-tag-close-font-color: 关闭图标的颜色
-   --hi-tag-close-font-size: 关闭图标的尺寸
-   --hi-tag-close-active-opacity: 关闭图标激活时的透明度，默认 "var(--hi-opacity-hover)"

## 组件事件

-   close(): 点击关闭按钮时触发
