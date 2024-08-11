# hi-goods-bamboo

## 介绍

-   hi-goods-bamboo - 商品组件
-   名称取错了，此组件暂时废弃，请使用 hi-classify-aster 组件替代，后续有新的商品列表 ui 后再重新开发此组件

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

-   --hi-goods-bamboo-border-width: 边框宽度，默认 "0"
-   --hi-goods-bamboo-border-style: 边框样式，默认 "solid"
-   --hi-goods-bamboo-border-color: 边框颜色，默认 "var(--hi-border-color-default)"
-   --hi-goods-bamboo-font-size: 内容文字大小
-   --hi-goods-bamboo-overflow: overflow 属性，默认 "hidden"
-   --hi-goods-bamboo-background: 背景，默认 "#ffffff"
-   --hi-goods-bamboo-padding: 内边距，默认 "20rpx"
-   --hi-goods-bamboo-border-radius: 圆角值，默认 "var(--hi-radius-small)"
-   --hi-goods-bamboo-content-gap: 左右内容之间的间距，默认 "20rpx"
-   --hi-goods-bamboo-image-width: 图片宽度，默认 "200rpx"
-   --hi-goods-bamboo-image-height: 图片高度，默认 "200rpx"
-   --hi-goods-bamboo-image-border-radius: 图片圆角值
-   --hi-goods-bamboo-image-background: 图片盒子背景
-   --hi-goods-bamboo-right-padding: 右侧内容内边距
-   --hi-goods-bamboo-head-margin: 右侧内容 head 的外边距
-   --hi-goods-bamboo-head-conetnt-gap: 右侧标题和删除图标之间的间距，默认 "1em"
-   --hi-goods-bamboo-heae-line-height: 右侧 head 内容的行高，默认 "1.36em"
-   --hi-goods-bamboo-title-font-size: 标题文字大小
-   --hi-goods-bamboo-title-font-color: 标题文字颜色
-   --hi-goods-bamboo-title-font-weight: 标题文字粗细，默认 "700"
-   --hi-goods-bamboo-delete-font-size: 删除图标的大小
-   --hi-goods-bamboo-delete-font-color: 删除图标的颜色，默认 "var(--hi-font-color-light)"
-   --hi-goods-bamboo-delete-margin: 删除图标外边距，默认 "0.18em 0 0 0"
-   --hi-goods-bamboo-delete-active-opacity: 删除图标激活时的透明度，默认 "var(--hi-opacity-hover)"
-   --hi-goods-bamboo-body-margin: body 的外边距，默认 "0 0 12rpx 0"
-   --hi-goods-bamboo-body-font-color: body 的文字颜色，默认 "var(--hi-font-color-light)"
-   --hi-goods-bamboo-body-font-size: body 的文字大小，默认 "0.9em"
-   --hi-goods-bamboo-foot-margin: foot 的外边距，默认 "auto 0 0 0"
-   --hi-goods-bamboo-number-margin: number 的外边距，默认 "0 0 0 auto"
-   --hi-goods-bamboo-number-input-width: number 输入框的宽度，默认 "3em"

## 组件事件

-   click(): 点击事件
-   delete(): 点击删除按钮事件
-   change(value): 输入框内容改变事件
