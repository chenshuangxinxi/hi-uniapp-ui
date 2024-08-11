# hi-avatar-group

## 介绍

-   hi-ui - 头像组组件

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

-   --hi-avatar-group-avatar-size: 头像宽高，默认 "40rpx"
-   --hi-avatar-group-avatar-border-radius: 头像圆角值，默认 "50%"
-   --hi-avatar-group-avatar-background: 头像背景，默认 "#ffffff"
-   --hi-avatar-group-avatar-offset: 头像偏移值，默认 "15rpx"，会自动计算成负数，设置成整数就可以了
-   --hi-avatar-group-more-background: 更多按钮背景，默认 "#c8c8c8"
-   --hi-avatar-group-animation-duration: 头像动画效果时长，默认 "500ms"

# 组件事件

-   more(): 点击更多按钮事件
