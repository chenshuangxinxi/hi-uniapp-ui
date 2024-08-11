# hi-swiper

## 介绍

-   hi-ui - 轮播组件

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

-   --hi-swiper-height: 组件高度，默认 "280rpx"
-   --hi-swiper-width: 组件宽度，默认 "100%"
-   --hi-swiper-border-radius: 组件圆角
-   --hi-swiper-content-background: 内容背景
-   --hi-swiper-dots-flex-direction: 指示器的布局方向，默认 "row"
-   --hi-swiper-dots-top: 指示器距离顶部的距离
-   --hi-swiper-dots-bottom: 指示器距离底部的距离，默认 "20rpx"
-   --hi-swiper-dots-left: 指示器距离左侧的距离，默认 "50%"
-   --hi-swiper-dots-right: 指示器距离右侧的距离
-   --hi-swiper-dots-transform: 指示器的 transform 属性的值，默认 "translateX(-50%)"
-   --hi-swiper-dot-border-radius: 指示器点未激活时的圆角值，默认 "var(--hi-radius-small)"
-   --hi-swiper-dot-border-radius-active: 指示器点激活时的圆角值，默认 "var(--hi-radius-small)"
-   --hi-swiper-dot-color: 指示器点未激活时的颜色，默认 "#FFFFFF"
-   --hi-swiper-dot-color-active: 指示器点激活时的颜色，默认 "var(--hi-theme-primary)"
-   --hi-swiper-dot-width: 指示器点未激活时的宽度，默认 "16rpx"
-   --hi-swiper-dot-width-active: 指示器点激活时的宽度，默认 "32rpx"
-   --hi-swiper-dot-height: 指示器点未激活时的高度，默认 "8rpx"
-   --hi-swiper-dot-height-active: 指示器点激活时的高度，默认 "8rpx"
-   --hi-swiper-dot-margin: 指示器点未激活时的外边距，默认 "8rpx"
-   --hi-swiper-dot-margin-active: 指示器点激活时的外边距，默认 "8rpx"

## 组件事件

-   click(item, index): swiper item 点击事件
    -   item: 被点击 item 的数据对象
    -   index: 被点击 item 的下标
-   change(event): current 改变时会触发 change 事件，event.detail = {current: current, source: source}
-   transition(event): swiper-item 的位置发生改变时会触发 transition 事件，event.detail = {dx: dx, dy: dy}，支付宝小程序暂不支持 dx, dy
-   animationfinish(event): 动画结束时会触发 animationfinish 事件，event.detail = {current: current, source: source}
