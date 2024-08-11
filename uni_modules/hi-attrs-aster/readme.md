# hi-attrs-aster

## 介绍

-   hi-ui - 商品/物品属性组件

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

-   --hi-attrs-aster-columns: 列数
-   --hi-attrs-aster-grid-gap: item 之间的间距，默认 "40rpx(行与行) 0(列与列)"
-   --hi-attrs-aster-item-content--gap: item 内容之间的间距，默认 "0.45em"
-   --hi-attrs-aster-font-weight: 内容文字粗细，默认 "500"
-   --hi-attrs-aster-label-font-color: label 文字颜色，默认 "var(--hi-font-color-light-aster)"
-   --hi-attrs-aster-label-font-size: label 文字大小
-   --hi-attrs-aster-label-weight: label 文字粗细
-   --hi-attrs-aster-value-font-color: value 文字颜色
-   --hi-attrs-aster-value-font-size: value 文字大小
-   --hi-attrs-aster-value-weight: value 文字粗细
-   --hi-attrs-aster-line-width: 分割线宽度，默认 "2px"
-   --hi-attrs-aster-line-height: 分割线高度，默认 "0.8em"
-   --hi-attrs-aster-line-background: 分割线背景，默认 "var(--hi-font-color-light-3)"
