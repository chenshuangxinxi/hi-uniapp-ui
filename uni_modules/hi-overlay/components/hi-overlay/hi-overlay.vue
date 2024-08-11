<!--
 * hi-ui - 遮罩层组件
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 15275181688 / 19256078701 / 18754137913
 -->
<template>
    <view class="hi-overlay" :class="_classes" :style="_styles" @tap="handleClick" v-if="modelValue">
        <slot></slot>
    </view>
</template>

<!-- 由于 HbuilderX 不支持 defineOptions() 写法，故只能在此处进行配置 -->
<script>
    export default { options: uni?.$hi?.config?.componentsOptions ?? {} };
</script>

<script setup>
    import { computed } from "vue";
    import props from "./props.js";

    // 组件属性
    const _props = defineProps(props);

    // 组件事件
    const _emits = defineEmits(["close", "asyncClose", "update:modelValue"]);

    // 组件类名
    const _classes = computed(() => {
        const classes = [];

        // 内容对齐方式
        classes.push(`hi-overlay--${_props.align}`);

        // 是否显示
        if (_props.modelValue) classes.push("hi-overlay--show");

        return classes;
    });

    // 组件样式
    const _styles = computed(() => {
        const styles = [];

        // 过渡效果持续时间
        if (_props.duration) styles.push(`--hi-overlay-duration: ${_props.duration}`);

        return styles;
    });

    /**
     * 点击事件
     */
    function handleClick() {
        // 异步关闭
        if (_props.async) {
            _emits("asyncClose");
            return;
        }

        _emits("update:modelValue", false);
        _emits("close");
    }
</script>

<style lang="scss" scoped>
    .hi-overlay {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: var(--hi-overlay-background, var(--hi-background-overlay));
        opacity: 0;
        z-index: var(--hi-overlay-index, var(--hi-index-big));
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        &--show {
            animation-name: hi-overlay-ani;
            animation-duration: var(--hi-overlay-duration, 300ms);
            animation-timing-function: var(--hi-overlay-function, ease-in-out);
            animation-fill-mode: forwards;
        }

        &--left-top {
            align-items: flex-start;
            justify-content: flex-start;
        }

        &--left-center {
            align-items: flex-start;
            justify-content: center;
        }

        &--left-bottom {
            align-items: flex-start;
            justify-content: flex-end;
        }

        &--center-top {
            align-items: center;
            justify-content: flex-start;
        }

        &--center-center {
            align-items: center;
            justify-content: center;
        }

        &--center-bottom {
            align-items: center;
            justify-content: flex-end;
        }

        &--right-top {
            align-items: flex-end;
            justify-content: flex-start;
        }

        &--right-center {
            align-items: flex-end;
            justify-content: center;
        }

        &--right-bottom {
            align-items: flex-end;
            justify-content: flex-end;
        }

        @keyframes hi-overlay-ani {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
    }
</style>
