<!--
 * HiUi - 徽标数
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="hi-badge" :class="_classes" :style="_styles" v-if="isShow">
        <view class="hi-badge__value">{{ fmtValue }}</view>
    </view>
</template>

<!-- 由于 HbuilderX 不支持 defineOptions() 写法，故只能在此处进行配置 -->
<script>
    export default { options: uni?.$hi?.config?.componentsOptions ?? {} };
</script>

<script setup>
    import { computed } from "vue";
    import props from "./props.js";
    import { formatFloat } from "@/uni_modules/hi-functions";

    // 组件属性
    const _props = defineProps(props);

    // 组件事件
    const _emits = defineEmits([""]);

    // 组件类名
    const _classes = computed(() => {
        const classes = [];

        // 模式
        classes.push(`hi-badge--${_props.mode}`);

        // 主题
        if (_props.theme) classes.push(`hi-badge--theme hi-badge--${_props.theme}`);

        return classes;
    });

    // 组件样式
    const _styles = computed(() => {
        const styles = [];

        // 主题
        if (_props.theme) styles.push(`--hi-badge-theme: var(--hi-theme-${_props.theme});`);

        // 背景
        if (_props.bg) styles.push(`--hi-badge-background: ${_props.bg};`);

        // 文字颜色
        if (_props.color) styles.push(`--hi-badge-color: ${_props.color};`);

        // 文字大小
        if (_props.size) styles.push(`--hi-badge-font-size: ${_props.size}`);

        // 宽
        if (_props.width) styles.push(`--hi-badge-width: ${_props.width}`);

        // 高
        if (_props.height) styles.push(`--hi-badge-height: ${_props.height}`);

        // 圆角
        if (_props.radius) styles.push(`--hi-badge-border-radius: ${_props.radius}`);

        // 上、下、左、右
        if (_props.top) styles.push(`--hi-badge-top: ${_props.top}`);
        if (_props.right) styles.push(`--hi-badge-right: ${_props.right}`);
        if (_props.bottom) styles.push(`--hi-badge-bottom: ${_props.bottom}`);
        if (_props.left) styles.push(`--hi-badge-left: ${_props.left}`);

        // 定位方式
        if (_props.position) styles.push(`--hi-badge-position: ${_props.position}`);

        // 圆点大小
        if (_props.dotSize) styles.push(`--hi-badge-dot-size: ${_props.dotSize}px`);

        return styles;
    });

    // 是否显示
    const isShow = computed(() => {
        if (_props.mode !== "dot" && !_props.showZero && _props.value === 0) return false;
        return true;
    });

    // 格式化后的值
    const fmtValue = computed(() => {
        // 圆点模式
        if (_props.mode === "dot") return "";

        // overflow 模式
        if (_props.mode === "overflow") {
            if (_props.value > _props.max) return `${_props.max}+`;
            return _props.value;
        }

        // ellipsis 模式
        if (_props.mode === "ellipsis") {
            if (_props.value > _props.max) return `${_props.max}...`;
            return _props.value;
        }

        // limit 模式
        if (_props.mode === "limit") {
            if (_props.value > _props.limit) return formatFloat(_props.value / _props.limit, _props.decimals, _props.discardLastZero) + _props.suffix;
            return _props.value;
        }

        // 默认
        return _props.value;
    });
</script>

<style lang="scss" scoped>
    .hi-badge {
        background: var(--hi-badge-background, var(--hi-theme-primary));
        color: var(--hi-badge-color, #ffffff);
        font-size: var(--hi-badge-font-size, 0.7em);
        font-weight: var(--hi-badge-font-weight);
        border-radius: var(--hi-badge-border-radius, 100px);
        padding: var(--hi-badge-padding, 2px 8px);
        position: var(--hi-badge-position, absolute);
        left: var(--hi-badge-left);
        right: var(--hi-badge-right, 0);
        top: var(--hi-badge-top, 0);
        bottom: var(--hi-badge-bottom);
        z-index: var(--hi-badge-index, 6);
        transform: var(--hi-badge-transform, translate(25%, -25%));
        display: inline-flex;
        align-items: center;
        justify-content: center;

        &--dot {
            width: var(--hi-badge-dot-size, 8px);
            height: var(--hi-badge-dot-size, 8px);
            border-radius: 50%;
            padding: 0;

            .hi-badge__value {
                display: none;
            }
        }

        &--theme {
            background: var(--hi-badge-theme);
        }
    }
</style>
