# hi-number-step

## 介绍

-   hi-ui - 步进器组件

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

-   --hi-number-step-border-width: 组件边框宽度，默认 "1px"
-   --hi-number-step-border-style: 组件边框样式，默认 "solid"
-   --hi-number-step-border-color: 组件边框颜色，默认 "var(--hi-border-color-default)"
-   --hi-number-step-border-radius: 组件圆角值，默认 "var(--hi-radius-small)"
-   --hi-number-step-height: 组件高度，默认 "2.5em"
-   --hi-number-step-button-width: 按钮宽度，默认 "2.5em"
-   --hi-number-step-button-background: 按钮背景
-   --hi-number-step-button-font-color: 按钮字体颜色
-   --hi-number-step-button-font-size: 按钮字体大小
-   --hi-number-step-minus-button-background: 减号按钮的背景
-   --hi-number-step-minus-button-font-color: 减号按钮的字体颜色
-   --hi-number-step-minus-button-font-size: 减号按钮的字体大小
-   --hi-number-step-plus-button-background: 加号按钮的背景
-   --hi-number-step-plus-button-font-color: 加号按钮的字体颜色
-   --hi-number-step-plus-button-font-size: 加号按钮的字体大小
-   --hi-number-step-button-active-opacity: 按钮激活时的透明度，默认 "var(--hi-opacity-hover)"
-   --hi-number-step-input-border-style: 输入框边框样式，默认 "solid"
-   --hi-number-step-input-border-color: 输入框边框颜色，默认 "var(--hi-border-color-default)"
-   --hi-number-step-input-border-left-width: 输入框左边框宽度，默认 "1px"
-   --hi-number-step-input-border-right-width: 输入框右边框宽度，默认 "1px"
-   --hi-number-step-input-border-top-width: 输入框上边框宽度，默认 "0"
-   --hi-number-step-input-border-bottom-width: 输入框下边框宽度，默认 "0"
-   --hi-number-step-input-height: 输入框高度，默认 "100%"
-   --hi-number-step-input-text-align: 输入框文本对齐方式，默认 "center"
-   --hi-number-step-input-padding: 输入框内边距
-   --hi-number-step-input-margin: 输入框外边距
-   --hi-number-step-input-width: 输入框宽度，默认 "5em"
-   --hi-number-step-input-font-size: 输入框字体大小，默认 "inherit"
-   --hi-number-step-input-font-color: 输入框字体颜色，默认 "inherit"
-   --hi-number-step-input-border-radius: 输入框圆角值，默认 "0"
-   --hi-number-step-input-background: 输入框背景
-   --hi-number-step-focus-border-color: 输入框聚焦时组件的边框颜色

## 组件事件

-   change(value): 开启异步变更后，值改变时触发
