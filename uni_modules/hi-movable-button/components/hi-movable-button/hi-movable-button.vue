<!--
 * HiUi - 可拖动按钮
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <movable-area class="hi-movable-button" :scale-area="scaleArea" :class="_classes" :style="_styles">
        <!-- #ifndef MP -->
        <movable-view
            class="hi-movable-button__movable-view"
            :direction="direction"
            :inertia="inertia"
            :out-of-bounds="outOfBounds"
            :damping="damping"
            :friction="friction"
            :disabled="disabled"
            :scale="scale"
            :scale-min="scaleMin"
            :scale-max="scaleMax"
            :scale-value="scaleValue"
            :animation="animation"
            :hover-class="hoverClass"
            @tap="_emits('click')"
            @change="_emits('change')"
            @scale="_emits('scale')"
        >
            <slot>
                <hi-icon class="hi-movable-button__icon" :name="iconName" :size="iconSize" :color="iconColor" :mode="iconMode"></hi-icon>
                <text class="hi-movable-button__text">{{ text }}</text>
            </slot>
            <slot name="other"></slot>
        </movable-view>
        <!-- #endif -->

        <!-- 小程序的 direction 属性使用 props 中的值绑定不生效，只能一个一个的判断了，头疼~~~ -->
        <!-- #ifdef MP -->
        <movable-view
            class="hi-movable-button__movable-view"
            direction="all"
            :inertia="inertia"
            :out-of-bounds="outOfBounds"
            :damping="damping"
            :friction="friction"
            :disabled="disabled"
            :scale="scale"
            :scale-min="scaleMin"
            :scale-max="scaleMax"
            :scale-value="scaleValue"
            :animation="animation"
            :hover-class="hoverClass"
            @tap="_emits('click')"
            @change="_emits('change')"
            @scale="_emits('scale')"
            v-if="direction === 'all'"
        >
            <slot>
                <hi-icon class="hi-movable-button__icon" :name="iconName" :size="iconSize" :color="iconColor" :mode="iconMode"></hi-icon>
                <text class="hi-movable-button__text">{{ text }}</text>
            </slot>
            <slot name="other"></slot>
        </movable-view>
        <movable-view
            class="hi-movable-button__movable-view"
            direction="vertical"
            :inertia="inertia"
            :out-of-bounds="outOfBounds"
            :damping="damping"
            :friction="friction"
            :disabled="disabled"
            :scale="scale"
            :scale-min="scaleMin"
            :scale-max="scaleMax"
            :scale-value="scaleValue"
            :animation="animation"
            :hover-class="hoverClass"
            @tap="_emits('click')"
            @change="_emits('change')"
            @scale="_emits('scale')"
            v-else-if="direction === 'vertical'"
        >
            <slot>
                <hi-icon class="hi-movable-button__icon" :name="iconName" :size="iconSize" :color="iconColor" :mode="iconMode"></hi-icon>
                <text class="hi-movable-button__text">{{ text }}</text>
            </slot>
            <slot name="other"></slot>
        </movable-view>
        <movable-view
            class="hi-movable-button__movable-view"
            direction="horizontal"
            :inertia="inertia"
            :out-of-bounds="outOfBounds"
            :damping="damping"
            :friction="friction"
            :disabled="disabled"
            :scale="scale"
            :scale-min="scaleMin"
            :scale-max="scaleMax"
            :scale-value="scaleValue"
            :animation="animation"
            :hover-class="hoverClass"
            @tap="_emits('click')"
            @change="_emits('change')"
            @scale="_emits('scale')"
            v-else-if="direction === 'horizontal'"
        >
            <slot>
                <hi-icon class="hi-movable-button__icon" :name="iconName" :size="iconSize" :color="iconColor" :mode="iconMode"></hi-icon>
                <text class="hi-movable-button__text">{{ text }}</text>
            </slot>
            <slot name="other"></slot>
        </movable-view>
        <movable-view
            class="hi-movable-button__movable-view"
            direction="none"
            :inertia="inertia"
            :out-of-bounds="outOfBounds"
            :damping="damping"
            :friction="friction"
            :disabled="disabled"
            :scale="scale"
            :scale-min="scaleMin"
            :scale-max="scaleMax"
            :scale-value="scaleValue"
            :animation="animation"
            :hover-class="hoverClass"
            @tap="_emits('click')"
            @change="_emits('change')"
            @scale="_emits('scale')"
            v-else-if="direction === 'none'"
        >
            <slot>
                <hi-icon class="hi-movable-button__icon" :name="iconName" :size="iconSize" :color="iconColor" :mode="iconMode"></hi-icon>
                <text class="hi-movable-button__text">{{ text }}</text>
            </slot>
            <slot name="other"></slot>
        </movable-view>
        <!-- #endif -->
    </movable-area>
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

    // 组件事件
    const _emits = defineEmits(["click", "change", "scale"]);

    // 组件类名
    const _classes = computed(() => {
        const classes = [];

        // 初始位置
        if (_props.position) classes.push("hi-movable-button--" + _props.position);

        // 边框
        if (_props.showBorder) classes.push("hi-movable-button--border");

        return classes;
    });

    // 组件样式
    const _styles = computed(() => {
        const styles = [];

        // 文字大小
        if (_props.size) styles.push("--hi-movable-button-font-size: " + _props.size);

        // 文字颜色
        if (_props.color) styles.push("--hi-movable-button-color: " + _props.color);

        // 宽和高
        if (_props.btnSize) {
            styles.push("--hi-movable-button-width: " + _props.btnSize);
            styles.push("--hi-movable-button-height: " + _props.btnSize);
        }

        // 宽
        if (_props.width) styles.push("--hi-movable-button-width: " + _props.width);

        // 高
        if (_props.height) styles.push("--hi-movable-button-height: " + _props.height);

        // 阴影
        if (_props.shadow) styles.push("--hi-movable-button-box-shadow: " + _props.shadow);

        // 背景
        if (_props.bg) styles.push("--hi-movable-button-background: " + _props.bg);

        // 圆角
        if (_props.radius) styles.push("--hi-movable-button-border-radius: " + _props.radius);

        // 边框颜色
        if (_props.borderColor) styles.push("--hi-movable-button-border-color: " + _props.borderColor);

        // 上下左右
        if (_props.top) styles.push("--hi-movable-button-top: " + _props.top);
        if (_props.right) styles.push("--hi-movable-button-right: " + _props.right);
        if (_props.bottom) styles.push("--hi-movable-button-bottom: " + _props.bottom);
        if (_props.left) styles.push("--hi-movable-button-left: " + _props.left);

        // 文字颜色
        if (_props.textColor) styles.push("--hi-movable-button-text-color: " + _props.textColor);

        // 文字大小
        if (_props.textSize) styles.push("--hi-movable-button-text-font-size: " + _props.textSize);

        return styles;
    });
</script>

<style lang="scss" scoped>
    .hi-movable-button {
        width: var(--hi-movable-button-container-width, 100%);
        // #ifdef H5
        height: var(--hi-movable-button-container-height, calc(100% - var(--window-top) - var(--window-bottom)));
        left: var(--hi-movable-button-container-left, 0);
        top: var(--hi-movable-button-container-top, var(--window-top));
        // #endif
        // #ifndef H5
        height: var(--hi-movable-button-container-height, 100%);
        left: var(--hi-movable-button-container-left, 0);
        top: var(--hi-movable-button-container-top, 0);
        // #endif
        position: fixed;
        z-index: var(--hi-movable-button-index, var(--hi-index-default));
        pointer-events: none;

        &__movable-view {
            pointer-events: all;
            width: var(--hi-movable-button-width, 88rpx);
            height: var(--hi-movable-button-height, 88rpx);
            left: var(--hi-movable-button-left, 10px);
            right: var(--hi-movable-button-right, 10px);
            top: var(--hi-movable-button-top, 10px);
            bottom: var(--hi-movable-button-bottom, 10px);
            margin: var(--hi-movable-button-margin);
            padding: var(--hi-movable-button-padding);
            background: var(--hi-movable-button-background, #ffffff);
            border-radius: var(--hi-movable-button-border-radius, 50%);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: var(--hi-movable-button-color);
            font-size: var(--hi-movable-button-font-size);
            box-shadow: var(--hi-movable-button-box-shadow, 0 0 10px 10px rgba(0, 0, 0, 0.1));
            border-width: var(--hi-movable-button-border-width, 0);
            border-style: var(--hi-movable-button-border-style, solid);
            border-color: var(--hi-movable-button-border-color, var(--hi-border-color));
            line-height: var(--hi-movable-button-line-height, 1);
        }

        &__icon {
            --hi-icon-color: var(--hi-movable-button-icon-color);
            --hi-icon-size: var(--hi-movable-button-icon-size, 48rpx);
        }

        &__text {
            color: var(--hi-movable-button-text-color);
            font-size: var(--hi-movable-button-text-font-size, 18rpx);
        }

        &--border {
            .hi-movable-button__movable-view {
                border-width: var(--hi-movable-button-border-width, 0.5px);
            }
        }

        &--left-top {
            .hi-movable-button__movable-view {
                left: var(--hi-movable-button-left, 10px);
                right: var(--hi-movable-button-right, auto);
                top: var(--hi-movable-button-top, 10px);
                bottom: var(--hi-movable-button-bottom, auto);
            }
        }

        &--left-center {
            .hi-movable-button__movable-view {
                left: var(--hi-movable-button-left, 10px);
                right: var(--hi-movable-button-right, auto);
                top: var(--hi-movable-button-top, 50%);
                bottom: var(--hi-movable-button-bottom, auto);
                margin: var(--hi-movable-button-margin, calc(-1 * var(--hi-movable-button-height, 88rpx) / 2) 0 0 0);
            }
        }

        &--left-bottom {
            .hi-movable-button__movable-view {
                left: var(--hi-movable-button-left, 10px);
                right: var(--hi-movable-button-right, auto);
                top: var(--hi-movable-button-top, auto);
                bottom: var(--hi-movable-button-bottom, 10px);
            }
        }

        &--right-top {
            .hi-movable-button__movable-view {
                left: var(--hi-movable-button-left, auto);
                right: var(--hi-movable-button-right, 10px);
                top: var(--hi-movable-button-top, 10px);
                bottom: var(--hi-movable-button-bottom, auto);
            }
        }

        &--right-center {
            .hi-movable-button__movable-view {
                left: var(--hi-movable-button-left, auto);
                right: var(--hi-movable-button-right, 10px);
                top: var(--hi-movable-button-top, 50%);
                bottom: var(--hi-movable-button-bottom, auto);
                margin: var(--hi-movable-button-margin, calc(-1 * var(--hi-movable-button-height, 88rpx) / 2) 0 0 0);
            }
        }

        &--right-bottom {
            .hi-movable-button__movable-view {
                left: var(--hi-movable-button-left, auto);
                right: var(--hi-movable-button-right, 10px);
                top: var(--hi-movable-button-top, auto);
                bottom: var(--hi-movable-button-bottom, 10px);
            }
        }

        &--center-top {
            .hi-movable-button__movable-view {
                left: var(--hi-movable-button-left, 50%);
                right: var(--hi-movable-button-right, auto);
                top: var(--hi-movable-button-top, 10px);
                bottom: var(--hi-movable-button-bottom, auto);
                margin: var(--hi-movable-button-margin, 0 0 0 calc(-1 * var(--hi-movable-button-width, 88rpx) / 2));
            }
        }

        &--center-center {
            .hi-movable-button__movable-view {
                left: var(--hi-movable-button-left, 50%);
                right: var(--hi-movable-button-right, auto);
                top: var(--hi-movable-button-top, 50%);
                bottom: var(--hi-movable-button-bottom, auto);
                margin: var(
                    --hi-movable-button-margin,
                    calc(-1 * var(--hi-movable-button-height, 88rpx) / 2) 0 0 calc(-1 * var(--hi-movable-button-width, 88rpx) / 2)
                );
            }
        }

        &--center-bottom {
            .hi-movable-button__movable-view {
                left: var(--hi-movable-button-left, 50%);
                right: var(--hi-movable-button-right, auto);
                top: var(--hi-movable-button-top, auto);
                bottom: var(--hi-movable-button-bottom, 10px);
                margin: var(--hi-movable-button-margin, 0 0 0 calc(-1 * var(--hi-movable-button-width, 88rpx) / 2));
            }
        }
    }
</style>
