# hi-styles

-   hi-ui 样式，所有 hi-ui 组件都依赖此样式文件

## 开始

-   在 App.vue 文件中引入

```vue
<!-- App.vue -->
<style lang="scss">
    // 引入 hi-ui 样式
    @import "@/uni_modules/hi-styles/index.scss";
</style>
```

## 文件介绍

-   assist.scss - 辅助类
-   reset.scss - 统一标签表现形式
-   variables.scss - CSS 变量

### 辅助类样式文件

-   .hi-hover-class: 默认 hover-class;
-   .hi-disabled: 默认禁用样式;
-   .hi-line-{1-10}: 超出行数显示省略号，支持 1-10 行

### 样式变量文件

```scss
// variables.scss
// TODO: 待整理
```
