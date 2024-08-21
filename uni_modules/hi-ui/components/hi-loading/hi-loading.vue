<!--
 * hi-loading - 加载
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="hi-loading" :class="_classes" :style="_styles">
        <!-- 图标 -->
        <hi-icon class="hi-loading__icon" :name="iconName"></hi-icon>

        <!-- 文字 -->
        <text class="hi-loading__text">{{ text }}</text>
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
        color: var(--hi-color-light);
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 5px;
        font-size: 0.8em;

        // 图标
        &__icon {
            font-size: 1.5em;
            animation-name: hi-loading-ani;
            animation-duration: 1500ms;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
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
