<!--
 * HiUi - 标签
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="hi-tag" :class="_classes" :style="_styles" :hover-class="hoverClass" @tap="_emits('click')">
        <hi-icon class="hi-tag__icon" :name="iconName" :size="iconSize" :color="iconColor" :mode="iconMode" v-if="iconName"></hi-icon>
        <text class="hi-tag__text">{{ text }}</text>
        <view class="hi-tag__close" v-if="closable" @tap.stop="_emits('close')" :hover-class="closeHoverClass">
            <hi-icon class="hi-tag__close__icon" :name="closeIconName" :size="closeIconSize" :color="closeIconColor" :mode="closeIconMode"></hi-icon>
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
    const _emits = defineEmits(["click", "close"]);

    // 组件类名
    const _classes = computed(() => {
        const classes = [];

        // 主题
        if (_props.theme) classes.push(`hi-tag--theme hi-tag--theme--${_props.theme}`);

        // 镂空
        if (_props.plain) classes.push(`hi-tag--plain hi-tag--border`);

        // 是否圆角
        if (_props.round) classes.push(`hi-tag--round`);

        // 关闭按钮是否相对定位
        if (_props.closeAbsolute) classes.push(`hi-tag--close-absolute`);

        // 是否显示边框
        if (_props.border) classes.push(`hi-tag--border`);

        return classes;
    });

    // 组件样式
    const _styles = computed(() => {
        const styles = [];

        // 主题
        if (_props.theme) styles.push(`--hi-tag-theme: var(--hi-theme-${_props.theme})`);

        // 宽
        if (_props.width) styles.push(`--hi-tag-width: ${_props.width}`);

        // 高
        if (_props.height) styles.push(`--hi-tag-height: ${_props.height}`);

        // 文字大小
        if (_props.size) styles.push(`--hi-tag-font-size: ${_props.size}`);

        // 文字颜色
        if (_props.color) styles.push(`--hi-tag-color: ${_props.color}`);

        // 边框颜色
        if (_props.borderColor) styles.push(`--hi-tag-border-color: ${_props.borderColor}`);

        // 圆角大小
        if (_props.radius) styles.push(`--hi-tag-border-radius: ${_props.radius}`);

        // 背景
        if (_props.bg) styles.push(`--hi-tag-background: ${_props.bg}`);

        // 关闭按钮的背景
        if (_props.closeBg) styles.push(`--hi-tag-close-background: ${_props.closeBg}`);

        // 关闭按钮的边框颜色
        if (_props.closeBorderColor) styles.push(`--hi-tag-close-border-color: ${_props.closeBorderColor}`);

        // 关闭按钮的上
        if (_props.closeTop) styles.push(`--hi-tag-close-top: ${_props.closeTop}`);

        // 关闭按钮的右
        if (_props.closeRight) styles.push(`--hi-tag-close-right: ${_props.closeRight}`);

        // 关闭按钮的宽
        if (_props.closeWidth) styles.push(`--hi-tag-close-width: ${_props.closeWidth}`);

        // 关闭按钮的高
        if (_props.closeHeight) styles.push(`--hi-tag-close-height: ${_props.closeHeight}`);

        return styles;
    });
</script>

<style lang="scss" scoped>
    .hi-tag {
        display: inline-flex;
        align-items: center;
        background: var(--hi-tag-background, var(--hi-theme-primary));
        width: var(--hi-tag-width);
        height: var(--hi-tag-height);
        color: var(--hi-tag-color, #ffffff);
        padding: var(--hi-tag-padding, 2px 6px);
        font-size: var(--hi-tag-font-size, 0.8em);
        border-radius: var(--hi-tag-border-radius, var(--hi-radius-small));
        gap: var(--hi-tag-content-gap, 2px);
        border-width: var(--hi-tag-border-width, 0);
        border-style: var(--hi-tag-border-style, solid);
        border-color: var(--hi-tag-border-color, var(--hi-border-color));
        position: relative;

        &__icon {
            --hi-icon-color: var(--hi-tag-icon-color);
            --hi-icon-size: var(--hi-tag-icon-size);
            --hi-icon-image-width: var(--hi-tag-icon-image-width);
            --hi-icon-image-height: var(--hi-tag-icon-image-height);
        }

        &__close {
            &__icon {
                --hi-icon-color: var(--hi-tag-close-icon-color);
                --hi-icon-size: var(--hi-tag-close-icon-size);
                --hi-icon-image-width: var(--hi-tag-close-icon-image-width);
                --hi-icon-image-height: var(--hi-tag-close-icon-image-height);
            }
        }

        &--theme {
            background: var(--hi-tag-theme);
            border-color: var(--hi-tag-border-color, var(--hi-tag-theme));
            color: var(--hi-tag-color, #ffffff);
        }

        &--border {
            border-width: var(--hi-tag-border-width, 0.5px);
        }

        &--plain {
            background: transparent;
            color: var(--hi-tag-theme);
        }

        &--round {
            border-radius: 1000px;
        }

        &--close-absolute {
            .hi-tag__close {
                position: absolute;
                top: var(--hi-tag-close-top, -0.7em);
                right: var(--hi-tag-close-right, -0.7em);
                width: var(--hi-tag-close-width, 1.4em);
                height: var(--hi-tag-close-height, 1.4em);
                background: var(--hi-tag-close-background, var(--hi-theme-error));
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                overflow: hidden;
                border-color: var(--hi-tag-close-border-color, var(--hi-border-color));
                border-width: var(--hi-tag-close-border-width, 0);
                border-style: var(--hi-tag-close-border-style, solid);

                &__icon {
                    --hi-icon-color: var(--hi-tag-close-icon-color, #ffffff);
                    --hi-icon-size: var(--hi-tag-close-icon-font-size, 0.7em);
                }
            }
        }
    }
</style>
