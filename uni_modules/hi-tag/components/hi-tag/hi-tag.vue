<!--
 * hi-ui - 标签组件
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 15275181688 / 19256078701 / 18754137913
 -->
<template>
    <view class="hi-tag" :class="_classes" :style="_styles">
        <hi-icon class="hi-tag__icon" :name="iconName" v-bind="iconProps" v-if="iconName || iconProps?.name"></hi-icon>
        <text class="hi-tag__text">{{ text }}</text>
        <hi-icon class="hi-tag__close" :name="closeIconName" v-bind="closeIconProps" v-if="closable" @tap.stop="_emits('close')"></hi-icon>
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

        // 是否镂空
        if (_props.plain) classes.push(`hi-tag--plain`);

        // 是否圆角
        if (_props.round) classes.push(`hi-tag--round`);

        return classes;
    });

    // 组件样式
    const _styles = computed(() => {
        const styles = [];

        // 主题
        if (_props.theme) {
            styles.push(`--hi-tag-background: var(--hi-theme-${_props.theme})`);
            styles.push(`--hi-tag-border-color: var(--hi-theme-${_props.theme})`);
            styles.push(`--hi-tag-font-color: #ffffff`);

            // 主题还镂空
            if (_props.plain) styles.push(`--hi-tag-font-color: var(--hi-theme-${_props.theme})`);
        }

        return styles;
    });
</script>

<style lang="scss" scoped>
    .hi-tag {
        display: inline-flex;
        align-items: center;
        background: var(--hi-tag-background, #ffffff);
        height: var(--hi-tag-height, 2em);
        line-height: var(--hi-tag-line-height, 1);
        color: var(--hi-tag-font-color);
        padding: var(--hi-tag-padding, 0 0.6em);
        font-size: var(--hi-tag-font-size, 0.8em);
        border-radius: var(--hi-tag-border-radius, var(--hi-radius-small));
        gap: var(--hi-tag-content-gap, 3px);
        border-width: var(--hi-tag-border-width, 0);
        border-style: var(--hi-tag-border-style, solid);
        border-color: var(--hi-tag-border-color);

        &__icon {
            --hi-icon-color: var(--hi-tag-icon-font-color);
            --hi-icon-size: var(--hi-tag-icon-font-size);
            --hi-icon-image-width: var(--hi-tag-icon-image-width);
            --hi-icon-image-height: var(--hi-tag-icon-image-height);
        }

        &__text {
            font-size: var(--hi-tag-text-font-size);
            color: var(--hi-tag-text-font-color);
        }

        &__close {
            --hi-icon-color: var(--hi-tag-close-font-color);
            --hi-icon-size: var(--hi-tag-close-font-size);

            &:active {
                opacity: var(--hi-tag-active-opacity, var(--hi-opacity-hover));
            }
        }

        &--plain {
            border-width: var(--hi-tag-border-width, 1px);
            background: transparent;
        }

        &--round {
            border-radius: var(--hi-tag-border-radius, 1000px);
        }
    }
</style>
