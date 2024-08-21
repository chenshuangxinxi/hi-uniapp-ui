<!--
 * hi-tag - 标签
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="hi-tag" :class="_classes" :style="_styles" :hover-class="hoverClass">
        <hi-icon class="hi-tag__icon" :name="iconName" v-if="iconName"></hi-icon>
        <view class="hi-tag__text">{{ text }}</view>
        <view class="hi-tag__close" v-if="showClose" @tap.stop="_emits('close')" :hover-class="hoverClass">
            <hi-icon class="hi-tag__close__icon" :name="closeIconName"></hi-icon>
        </view>
    </view>
</template>

<!-- 由于 HbuilderX 不支持 defineOptions() 写法，故只能在此处进行配置 -->
<script>
    export default { options: uni?.$hi?.config?.componentsOptions ?? {} };
</script>

<script setup>
    import { ref, computed } from "vue";
    import props from "./props.js";

    // 组件属性
    const _props = defineProps(props);

    // 事件
    const _emits = defineEmits(["close"]);

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
    .hi-tag {
        display: inline-flex;
        align-items: center;
        background: var(--hi-theme-main);
        color: #ffffff;
        padding: 0 0.6em;
        gap: 3px;
        position: relative;
        font-size: 0.8em;
        height: 1.5em;
        line-height: 1;

        &__icon {
            font-size: 1.15em;
        }

        &__close {
            position: absolute;
            top: -0.6em;
            right: -0.6em;
            width: 1.2em;
            height: 1.2em;
            background: var(--hi-theme-error);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            overflow: hidden;

            &__icon {
                color: #ffffff;
                font-size: 0.7em;
            }
        }
    }
</style>
