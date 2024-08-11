<!--
 * hi-ui - loading 组件
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 15275181688 / 19256078701 / 18754137913
 -->
<template>
    <view class="hi-loading" :class="_classes" :style="_styles">
        <!-- 图标 -->
        <hi-icon class="hi-loading__icon" :name="name" v-bind="iconProps"></hi-icon>

        <!-- 文字 -->
        <text class="hi-loading__text" v-if="text">{{ text }}</text>
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

    // 组件类名
    const _classes = computed(() => {
        const classes = [];

        // 方向
        classes.push(`hi-loading--${_props.direction}`);

        return classes;
    });

    // 组件样式
    const _styles = computed(() => {
        const styles = [];
        return styles;
    });
</script>

<style lang="scss" scoped>
    .hi-loading {
        color: var(--hi-loading-color, var(--hi-font-color-middle));
        display: inline-flex;
        flex-direction: var(--hi-loading-flex-direction, row);
        align-items: center;
        justify-content: center;

        &--column {
            flex-direction: var(--hi-loading-flex-direction, column);
        }

        // 图标
        &__icon {
            --hi-icon-color: var(--hi-loading-icon-color, var(--hi-loading-color));
            --hi-icon-size: var(--hi-loading-icon-size, 1.3em);
            margin: var(--hi-loading-icon-margin, 5px);
            animation-name: hi-loading-ani;
            animation-duration: var(--hi-loading-duration, 1.5s);
            animation-iteration-count: infinite;
            animation-timing-function: var(--hi-loading-function, linear);
        }

        // 文字
        &__text {
            color: var(--hi-loading-text-color, var(--hi-loading-color));
            font-size: var(--hi-loading-text-size, 0.8em);
        }

        // 动画
        @keyframes hi-loading-ani {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
    }
</style>
