<!--
 * hi-ui - 可拖动内容组件
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 15275181688 / 19256078701 / 18754137913
 -->
<template>
    <movable-area class="hi-movable" :scale-area="scaleArea" :class="_classes" :style="_styles">
        <!-- #ifndef MP -->
        <movable-view
            class="hi-movable__button"
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
            :style="_buttonStyles"
            @tap="_emits('click')"
            @change="_emits('change')"
            @scale="_emits('scale')"
        >
            <hi-icon class="hi-movable__button__icon" :name="iconName" v-bind="iconProps"></hi-icon>
            <text class="hi-movable__button__text">{{ text }}</text>
            <hi-badge class="hi-movable__button__badge" v-if="showBadge" :value="badgeValue" v-bind="badgeProps"></hi-badge>
        </movable-view>
        <!-- #endif -->

        <!-- 小程序的 direction 属性使用 props 中的值绑定不生效，只能一个一个的判断了，头疼~~~ -->
        <!-- #ifdef MP -->
        <movable-view
            class="hi-movable__button"
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
            :style="_buttonStyles"
            @tap="_emits('click')"
            @change="_emits('change')"
            @scale="_emits('scale')"
            v-if="direction === 'all'"
        >
            <hi-icon class="hi-movable__button__icon" :name="iconName" v-bind="iconProps"></hi-icon>
            <text class="hi-movable__button__text">{{ text }}</text>
            <hi-badge class="hi-movable__button__badge" v-if="showBadge" :value="badgeValue" v-bind="badgeProps"></hi-badge>
        </movable-view>
        <movable-view
            class="hi-movable__button"
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
            :style="_buttonStyles"
            @tap="_emits('click')"
            @change="_emits('change')"
            @scale="_emits('scale')"
            v-else-if="direction === 'vertical'"
        >
            <hi-icon class="hi-movable__button__icon" :name="iconName" v-bind="iconProps"></hi-icon>
            <text class="hi-movable__button__text">{{ text }}</text>
            <hi-badge class="hi-movable__button__badge" v-if="showBadge" :value="badgeValue" v-bind="badgeProps"></hi-badge>
        </movable-view>
        <movable-view
            class="hi-movable__button"
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
            :style="_buttonStyles"
            @tap="_emits('click')"
            @change="_emits('change')"
            @scale="_emits('scale')"
            v-else-if="direction === 'horizontal'"
        >
            <hi-icon class="hi-movable__button__icon" :name="iconName" v-bind="iconProps"></hi-icon>
            <text class="hi-movable__button__text">{{ text }}</text>
            <hi-badge class="hi-movable__button__badge" v-if="showBadge" :value="badgeValue" v-bind="badgeProps"></hi-badge>
        </movable-view>
        <movable-view
            class="hi-movable__button"
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
            :style="_buttonStyles"
            @tap="_emits('click')"
            @change="_emits('change')"
            @scale="_emits('scale')"
            v-else-if="direction === 'none'"
        >
            <hi-icon class="hi-movable__button__icon" :name="iconName" v-bind="iconProps"></hi-icon>
            <text class="hi-movable__button__text">{{ text }}</text>
            <hi-badge class="hi-movable__button__badge" v-if="showBadge" :value="badgeValue" v-bind="badgeProps"></hi-badge>
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
        classes.push("hi-movable--" + _props.position);

        return classes;
    });

    // 组件样式
    const _styles = computed(() => {
        const styles = [];
        return styles;
    });

    // 按钮样式
    const _buttonStyles = computed(() => {
        const styles = [];

        // 宽
        styles.push("width: " + _props.width);
        styles.push("--hi-movable-button-width: " + _props.width);

        // 高
        styles.push("height: " + _props.height);
        styles.push("--hi-movable-button-height: " + _props.height);

        return styles;
    });
</script>

<style lang="scss" scoped>
    .hi-movable {
        width: var(--hi-movable-width, 100%);
        // #ifdef H5
        height: var(--hi-movable-height, calc(100% - var(--window-top) - var(--window-bottom)));
        left: var(--hi-movable-left, 0);
        top: var(--hi-movable-top, var(--window-top));
        // #endif
        // #ifndef H5
        height: var(--hi-movable-height, 100%);
        left: 0;
        top: var(--hi-movable-top, 0);
        // #endif
        position: fixed;
        z-index: var(--hi-movable-index, var(--hi-index-middle));
        pointer-events: none;

        &__button {
            pointer-events: all;
            width: var(--hi-movable-button-width, 88rpx);
            height: var(--hi-movable-button-height, 88rpx);
            left: var(--hi-movable-button-left, 20rpx);
            right: var(--hi-movable-button-right, 20rpx);
            top: var(--hi-movable-button-top, 20rpx);
            bottom: var(--hi-movable-button-bottom, 20rpx);
            margin-left: var(--hi-movable-button-margin-left);
            margin-top: var(--hi-movable-button-margin-top);
            background: var(--hi-movable-button-background, #ffffff);
            border-radius: var(--hi-movable-button-border-radius, 50%);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: var(--hi-movable-button-font-color);
            font-size: var(--hi-movable-button-font-size);
            box-shadow: var(--hi-movable-button-shadow, var(--hi-shadow-main));

            &__icon {
                --hi-icon-color: var(--hi-movable-button-icon-color, var(--hi-movable-button-font-color));
                --hi-icon-size: var(--hi-movable-button-icon-size, 1.5em);
            }

            &__text {
                color: var(--hi-movable-button-text-color, var(--hi-movable-button-font-color));
                font-size: var(--hi-movable-button-text-size, 0.6em);
            }
        }

        &--left-top {
            .hi-movable__button {
                left: var(--hi-movable-button-left, 20rpx);
                right: var(--hi-movable-button-right, auto);
                top: var(--hi-movable-button-top, 20rpx);
                bottom: var(--hi-movable-button-bottom, auto);
            }
        }

        &--left-center {
            .hi-movable__button {
                left: var(--hi-movable-button-left, 20rpx);
                right: var(--hi-movable-button-right, auto);
                top: var(--hi-movable-button-top, 50%);
                bottom: var(--hi-movable-button-bottom, auto);
                margin-top: var(--hi-movable-button-margin-top, calc(-1 * var(--hi-movable-button-height, 100rpx) / 2));
            }
        }

        &--left-bottom {
            .hi-movable__button {
                left: var(--hi-movable-button-left, 20rpx);
                right: var(--hi-movable-button-right, auto);
                top: var(--hi-movable-button-top, auto);
                bottom: var(--hi-movable-button-bottom, 20rpx);
            }
        }

        &--right-top {
            .hi-movable__button {
                left: var(--hi-movable-button-left, auto);
                right: var(--hi-movable-button-right, 20rpx);
                top: var(--hi-movable-button-top, 20rpx);
                bottom: var(--hi-movable-button-bottom, auto);
            }
        }

        &--right-center {
            .hi-movable__button {
                left: var(--hi-movable-button-left, auto);
                right: var(--hi-movable-button-right, 20rpx);
                top: var(--hi-movable-button-top, 50%);
                bottom: var(--hi-movable-button-bottom, auto);
                margin-top: var(--hi-movable-button-margin-top, calc(-1 * var(--hi-movable-button-height, 100rpx) / 2));
            }
        }

        &--right-bottom {
            .hi-movable__button {
                left: var(--hi-movable-button-left, auto);
                right: var(--hi-movable-button-right, 20rpx);
                top: var(--hi-movable-button-top, auto);
                bottom: var(--hi-movable-button-bottom, 20rpx);
            }
        }

        &--center-top {
            .hi-movable__button {
                left: var(--hi-movable-button-left, 50%);
                right: var(--hi-movable-button-right, auto);
                top: var(--hi-movable-button-top, 20rpx);
                bottom: var(--hi-movable-button-bottom, auto);
                margin-left: var(--hi-movable-button-margin-left, calc(-1 * var(--hi-movable-button-width, 100rpx) / 2));
            }
        }

        &--center-center {
            .hi-movable__button {
                left: var(--hi-movable-button-left, 50%);
                right: var(--hi-movable-button-right, auto);
                top: var(--hi-movable-button-top, 50%);
                bottom: var(--hi-movable-button-bottom, auto);
                margin-left: var(--hi-movable-button-margin-left, calc(-1 * var(--hi-movable-button-width, 100rpx) / 2));
                margin-top: calc(-1 * var(--hi-movable-button-height, 100rpx) / 2);
            }
        }

        &--center-bottom {
            .hi-movable__button {
                left: var(--hi-movable-button-left, 50%);
                right: var(--hi-movable-button-right, auto);
                top: var(--hi-movable-button-top, auto);
                bottom: var(--hi-movable-button-bottom, 20rpx);
                margin-left: var(--hi-movable-button-margin-left, calc(-1 * var(--hi-movable-button-width, 100rpx) / 2));
            }
        }
    }
</style>
