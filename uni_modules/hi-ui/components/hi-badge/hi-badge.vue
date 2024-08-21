<!--
 * hi-badge - 徽标数
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

        // 静态布局
        if (_props.static) classes.push("hi-badge--static");

        return classes;
    });

    // 组件样式
    const _styles = computed(() => {
        const styles = [];
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
        background: var(--hi-theme-main);
        color: #ffffff;
        border-radius: 100px;
        padding: 0 0.7em;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 6;
        transform: translate(25%, -25%);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 0.8em;
        line-height: 1;
        height: 2em;
        min-width: 2em;

        &--dot {
            width: 0.6em;
            height: 0.6em;
            border-radius: 50%;
            padding: 0;
            min-width: 0;

            .hi-badge__value {
                display: none;
            }
        }

        &--static {
            position: static;
            transform: translate(0, 0);
        }
    }
</style>
