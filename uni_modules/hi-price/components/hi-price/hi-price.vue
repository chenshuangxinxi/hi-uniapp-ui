<!--
 * HiUi - 价格
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="hi-price" :class="_classes" :style="_styles">
        <!-- 单位 -->
        <text class="hi-price__unit">{{ unit }}</text>

        <!-- 值 -->
        <text class="hi-price__value">{{ fmtPrice }}</text>
    </view>
</template>

<!-- 由于 HbuilderX 不支持 defineOptions() 写法，故只能在此处进行配置 -->
<script>
    export default { options: uni?.$hi?.config?.componentsOptions ?? {} };
</script>

<script setup>
    import { ref, computed } from "vue";
    import props from "./props.js";
    import numeral from "numeral";

    // 组件属性
    const _props = defineProps(props);

    // 组件事件
    const _emits = defineEmits([]);

    // 组件类名
    const _classes = computed(() => {
        const classes = [];

        // 删除线
        if (_props.showDelete) classes.push("hi-price--delete");

        return classes;
    });

    // 组件样式
    const _styles = computed(() => {
        const styles = [];

        // 文字大小
        if (_props.size) styles.push(`--hi-price-font-size: ${_props.size};`);

        // 文字颜色
        if (_props.color) styles.push(`--hi-price-color: ${_props.color};`);

        // 文字粗细
        if (_props.weight) styles.push(`--hi-price-font-weight: ${_props.weight};`);

        // 单位大小
        if (_props.unitSize) styles.push(`--hi-price-unit-font-size: ${_props.unitSize};`);

        // 单位颜色
        if (_props.unitColor) styles.push(`--hi-price-unit-color: ${_props.unitColor};`);

        // 单位粗细
        if (_props.unitWeight) styles.push(`--hi-price-unit-font-weight: ${_props.unitWeight};`);

        // 值大小
        if (_props.valueSize) styles.push(`--hi-price-value-font-size: ${_props.valueSize};`);

        // 值颜色
        if (_props.valueColor) styles.push(`--hi-price-value-color: ${_props.valueColor};`);

        // 值粗细
        if (_props.valueWeight) styles.push(`--hi-price-value-font-weight: ${_props.valueWeight};`);

        // 删除线宽度
        if (_props.deleteWidth) styles.push(`--hi-price-delete-width: ${_props.deleteWidth};`);

        // 删除线高度
        if (_props.deleteHeight) styles.push(`--hi-price-delete--height: ${_props.deleteHeight};`);

        // 删除线颜色
        if (_props.deleteColor) styles.push(`--hi-price-delete-color: ${_props.deleteColor};`);

        return styles;
    });

    // 格式化
    const fmtPrice = computed(() => {
        // 固定长度的小数位数
        if (_props.fixed) return numeral(_props.value).format(`0${_props.thousands}0.${_props.decimals}`);
        // 自动舍弃默认为0的小数位
        return numeral(_props.value).format(`0${_props.thousands}0.[${_props.decimals}]`);
    });

    // 组件对外暴漏的属性或方法
    defineExpose({});
</script>

<style lang="scss" scoped>
    .hi-price {
        display: inline-block;
        font-weight: var(--hi-price-font-weight, 700);
        position: relative;
        line-height: var(--hi-price-line-height, 1);
        color: var(--hi-price-color);
        font-size: var(--hi-price-font-size);

        &__unit {
            font-size: var(--hi-price-unit-font-size);
            color: var(--hi-price-unit-color);
            font-weight: var(--hi-price-unit-font-weight);
            margin: var(--hi-price-unit-margin, 0);
            display: inline-block;
        }

        &__value {
            font-size: var(--hi-price-value-font-size);
            color: var(--hi-price-value-color);
            font-weight: var(--hi-price-value-font-weight);
            display: inline-block;
        }

        &--delete {
            &::before {
                content: "";
                position: absolute;
                width: var(--hi-price-delete-width, 100%);
                height: var(--hi-price-delete-height, 2px);
                background: var(--hi-price-delete-color, currentColor);
                left: var(--hi-price-delete-left, 0);
                bottom: var(--hi-price-delete-bottom, 50%);
                transform: var(--hi-price-delete-transform, translateY(50%));
                z-index: 6;
            }
        }
    }
</style>
