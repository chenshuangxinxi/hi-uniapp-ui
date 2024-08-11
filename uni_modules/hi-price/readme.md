# hi-price

## 介绍

-   hi-price - 价格组件

## 基础配置

-   此组件依赖 numeral.js，引入此组件后需先 "npm install numeral"

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

-   --hi-price-font-color: 文字颜色，默认 "var(--hi-theme-price-default)"
-   --hi-price-font-weight: 文字粗细，默认 "800"
-   --hi-price-line-height: 内容行高，默认 "1.5"
-   --hi-price-font-color-positive: 显示正负符号时，正数状态时的颜色，默认 "var(--hi-theme-price-positive)"
-   --hi-price-font-color-negative: 显示正负符号时，负数状态时的颜色，默认 "var(--hi-theme-price-negative)"
-   --hi-price-symbol-font-size: 正负号的文字大小
-   --hi-price-symbol-font-color: 正负号的文本颜色
-   --hi-price-symbol-margin: 正负号的外边距，默认 "0 2px 0 0"
-   --hi-price-unit-font-size: 货币单位的文字大小，默认 "24rpx"
-   --hi-price-unit-font-color: 货币单位的文本颜色
-   --hi-price-unit-margin: 货币单位的外边距，默认 "0 2px 0 0"
-   --hi-price-value-font-size: 值的文字大小，默认 "1.45em"
-   --hi-price-font-color-value: 值的颜色
-   --hi-price-delete-line-height: 删除线的高度，默认 "2px"
-   --hi-price-delete-line-color: 删除线的颜色，默认 "currentColor"
-   --hi-price-delete-line-bottom: 删除线距离底部的距离，默认 "50%"
-   --hi-price-delete-line-transform: 删除线的 transform 属性，默认 "translateY(50%)"
