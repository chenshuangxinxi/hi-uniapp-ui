<!--
 * hi-ui 价格组件
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 15275181688 / 19256078701 / 18754137913
 -->
<template>
    <view class="hi-price" :class="_classes" :style="_styles">
        <text class="hi-price__symbol" v-if="symbol" :class="price > 0 ? 'hi-price__symbol--positive' : 'hi-price__symbol--negative'">
            {{ price > 0 ? "+" : "-" }}
        </text>
        <text class="hi-price__unit">{{ unit }}</text>
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
        if (_props.delete) classes.push("hi-price--delete");

        // 进账/出账
        if (_props.symbol && _props.price > 0) classes.push("hi-price--positive");
        if (_props.symbol && _props.price < 0) classes.push("hi-price--negative");

        return classes;
    });

    // 组件样式
    const _styles = computed(() => {
        const styles = [];
        return styles;
    });

    // 格式化
    const fmtPrice = computed(() => {
        // 固定长度的小数位数
        if (_props.fixed) return numeral(Math.abs(_props.price)).format(`0${_props.thousands}0.${_props.decimals}`);
        // 自动舍弃默认为0的小数位
        return numeral(Math.abs(_props.price)).format(`0${_props.thousands}0.[${_props.decimals}]`);
    });

    // 组件对外暴漏的属性或方法
    defineExpose({});
</script>

<style lang="scss" scoped>
    .hi-price {
        display: inline-block;
        font-weight: var(--hi-price-font-weight, 800);
        position: relative;
        line-height: var(--hi-price-line-height, 1);
        color: var(--hi-price-font-color, var(--hi-theme-price-default));

        &--positive {
            color: var(--hi-price-font-color-positive, var(--hi-theme-price-positive));
        }

        &--negative {
            color: var(--hi-price-font-color-negative, var(--hi-theme-price-negative));
        }

        &__symbol {
            font-size: var(--hi-price-symbol-font-size);
            color: var(--hi-price-symbol-font-color);
            margin: var(--hi-price-symbol-margin, 0 2px 0 0);
            display: inline-block;
        }

        &__unit {
            font-size: var(--hi-price-unit-font-size, 24rpx);
            color: var(--hi-price-unit-font-color);
            margin: var(--hi-price-unit-margin, 0 2px 0 0);
            display: inline-block;
        }

        &__value {
            font-size: var(--hi-price-value-font-size, 1.45em);
            color: var(--hi-price-font-color-value);
            display: inline-block;
        }

        &--delete {
            &::before {
                content: "";
                position: absolute;
                width: 100%;
                height: var(--hi-price-delete-line-height, 2px);
                background: var(--hi-price-delete-line-color, currentColor);
                left: 0;
                bottom: var(--hi-price-delete-line-bottom, 50%);
                transform: var(--hi-price-delete-line-transform, translateY(50%));
                z-index: 6;
            }
        }
    }
</style>
