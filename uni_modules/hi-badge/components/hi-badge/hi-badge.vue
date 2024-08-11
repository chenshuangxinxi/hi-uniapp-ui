<!--
 * hi-ui - 徽标数组件
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 15275181688 / 19256078701 / 18754137913
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
    const _emits = defineEmits(["click"]);

    // 组件类名
    const _classes = computed(() => {
        const classes = [];

        // 模式
        classes.push(`hi-badge--${_props.mode}`);

        // 主题
        classes.push(`hi-badge--${_props.theme}`);

        return classes;
    });

    // 组件样式
    const _styles = computed(() => {
        const styles = [];

        // 主题
        if (_props.theme) styles.push(`--hi-badge-background: var(--hi-theme-${_props.theme});`);

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
        background: var(--hi-badge-background, var(--hi-theme-main));
        color: var(--hi-badge-font-color, #fff);
        font-size: var(--hi-badge-font-size, 0.7em);
        font-weight: var(--hi-badge-font-weight, 400);
        border-radius: var(--hi-badge-border-radius, 100px);
        padding: var(--hi-badge-padding, 8rpx 16rpx);
        position: var(--hi-badge-position, absolute);
        left: var(--hi-badge-left);
        right: var(--hi-badge-right, 0);
        top: var(--hi-badge-top, 0);
        bottom: var(--hi-badge-bottom);
        z-index: var(--hi-badge-index, 6);
        transform: var(--hi-badge-transform, translate(25%, -25%));

        &--dot {
            width: var(--hi-badge-dot-size, 16rpx);
            height: var(--hi-badge-dot-size, 16rpx);
            border-radius: 50%;
            padding: 0;

            .hi-badge__value {
                display: none;
            }
        }
    }
</style>
