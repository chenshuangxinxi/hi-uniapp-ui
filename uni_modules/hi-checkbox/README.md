# hi-checkbox

## 介绍

-   hi-ui - 复选框组件

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

-   --hi-checkbox-border-width: 组件边框宽度，默认 "1px"
-   --hi-checkbox-border-style: 组件边框样式，默认 "solid"
-   --hi-checkbox-border-color: 组件边框颜色，默认 "var(--hi-checkbox-theme-color, var(--hi-border-color-default))"
-   --hi-checkbox-border-radius: 组件圆角值，默认 "var(--hi-radius-middle)"
-   --hi-checkbox-size: 组件宽高，默认 "1.5em"
-   --hi-checkbox-icon-color: 图标颜色，有主题且为镂空时主题颜色，其他状态为 "#ffffff"
-   --hi-checkbox-icon-size: 图标大小
-   --hi-checkbox-background: 选中时的背景，有主题先应用主题颜色，镂空时为 "transparent"，未设置主题和镂空时默认为 "#999999"

## 组件事件

-   change(checked: boolean): 开启异步变更后，值改变时触发，参数为当前选中状态
