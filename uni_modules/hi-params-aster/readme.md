# hi-params-aster

## 介绍

-   hi-ui - 商品/物品参数组件

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

-   --hi-params-aster-font-weight: 内容文字粗细，默认 "500"
-   --hi-params-aster-row-padding: 行内边距，默认 "0.3em 0"
-   --hi-params-aster-label-font-color: label 文字颜色， 默认 "var(--hi-font-color-middle)"
-   --hi-params-aster-label-font-size: label 文字大小
-   --hi-params-aster-label-font-weight: label 文字粗细
-   --hi-params-aster-label-width: label 宽度，默认 "8em"
-   --hi-params-aster-value-font-color: value 文字颜色
-   --hi-params-aster-value-font-size: value 文字大小
-   --hi-params-aster-value-font-weight: value 文字粗细
-   --hi-params-aster-value-text-align: value 文字对齐方式，默认 "right"

## 组件事件

-   back(): 返回按钮点击事件
-   leftClick(menu, index): 左侧菜单点击事件
    -   menu: 点击的菜单数据
    -   index: 点击的菜单索引
-   rightClick(menu, index): 右侧菜单点击事件
    -   menu: 点击的菜单数据
    -   index: 点击的菜单索引
