# hi-goods-aster

## 介绍

-   hi-goods-aster - 商品组件

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

-   --hi-goods-aster-border-width: 边框宽度，默认 "0"
-   --hi-goods-aster-border-style: 边框样式，默认 "solid"
-   --hi-goods-aster-border-color: 边框颜色，默认 "var(--hi-border-color-default)"
-   --hi-goods-aster-border-radius: 圆角值，默认 "var(--hi-radius-main)"
-   --hi-goods-aster-font-size: 内容文字大小，默认 "26rpx"
-   --hi-goods-aster-overflow: overflow 属性，默认 "hidden"
-   --hi-goods-aster-height: 高度，默认 "100%"
-   --hi-goods-aster-image-height: 图片高度，默认 "340rpx"
-   --hi-goods-aster-content-padding: 内容(不包括图片)的内容边距，默认 "20rpx 24rpx"
-   --hi-goods-aster-name-font-size: 商品名称的文字大小
-   --hi-goods-aster-name-font-color: 商品名称的文字颜色
-   --hi-goods-aster-name-font-weight: 商品名称的文字粗细，默认 "800"
-   --hi-goods-aster-name-margin: 商品名称的外边距，默认 "0 0 1em 0"
-   --hi-goods-aster-cart-width: 购物车按钮的宽度，默认 "2.15em"
-   --hi-goods-aster-cart-height: 购物车按钮的高度，默认 "2.15em"
-   --hi-goods-aster-cart-border-radius: 购物车按钮的圆角值，默认 "50%"
-   --hi-goods-aster-cart-background: 购物车按钮的背景，默认 "var(--hi-theme-linear-main)"
-   --hi-goods-aster-cart-color: 购物车按钮的文字颜色，默认 "#ffffff"
-   --hi-goods-aster-tags-left: 标签组距离左边的距离，默认 "0"
-   --hi-goods-aster-tags-top: 标签组距离顶部的距离，默认 "0"
-   --hi-goods-aster-tags-padding: 标签组的内边距，默认 "18rpx 10rpx"
-   --hi-goods-aster-tags-gap: 标签之间的间距，默认 "10rpx"
-   --hi-goods-aster-tags-font-size: 标签的文字大小，默认 "20rpx"
-   --hi-goods-aster-tag-padding: 标签的内边距，默认 "0 0.6em"
-   --hi-goods-aster-tag-border-radius: 标签的圆角值，默认 "var(--hi-radius-small)"
-   --hi-goods-aster-tag-height: 标签高度，默认 "1.5em"
-   --hi-goods-aster-tag-line-height: 标签内容行高，默认 "1.5"

## 组件事件

-   addCart(item): 添加到购物车事件

## 组件插槽

-   default: 默认插槽
