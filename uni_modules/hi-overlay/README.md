# hi-overlay

## 介绍

-   hi-ui - 遮罩层组件

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

-   --hi-overlay-background: 背景，默认 "var(--hi-background-overlay)"
-   --hi-overlay-index: 层级，默认 "var(--hi-index-big)"
-   --hi-overlay-duration: 动画时长，默认 "300ms"
-   --hi-overlay-function: 动画函数，默认 "ease-in-out"

## 组件事件

-   close(): 关闭事件
-   asyncClose(): 异步关闭事件
