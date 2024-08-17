<!--
 * hi-movable-button - 可拖动按钮
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
                <hi-icon class="hi-movable-button__icon" :name="iconName"></hi-icon>
                <text class="hi-movable-button__text" v-if="text">{{ text }}</text>
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
                <hi-icon class="hi-movable-button__icon" :name="iconName"></hi-icon>
                <text class="hi-movable-button__text" v-if="text">{{ text }}</text>
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
                <hi-icon class="hi-movable-button__icon" :name="iconName"></hi-icon>
                <text class="hi-movable-button__text" v-if="text">{{ text }}</text>
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
                <hi-icon class="hi-movable-button__icon" :name="iconName"></hi-icon>
                <text class="hi-movable-button__text" v-if="text">{{ text }}</text>
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
                <hi-icon class="hi-movable-button__icon" :name="iconName"></hi-icon>
                <text class="hi-movable-button__text" v-if="text">{{ text }}</text>
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

        return classes;
    });

    // 组件样式
    const _styles = computed(() => {
        const styles = [];
        return styles;
    });
</script>

<style lang="scss" scoped>
    .hi-movable-button {
        width: 100%;
        left: 0;
        // #ifdef H5
        height: calc(100% - var(--window-top) - var(--window-bottom));
        top: var(--window-top);
        // #endif
        // #ifndef H5
        height: 100%;
        top: 0;
        // #endif
        position: fixed;
        z-index: var(--hi-index-default);
        pointer-events: none;

        &__movable-view {
            pointer-events: all;
            width: 88rpx;
            height: 88rpx;
            left: 10px;
            right: 10px;
            top: 10px;
            bottom: 10px;
            background: #ffffff;
            border-radius: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            line-height: 1;
        }

        &__icon {
            font-size: 50rpx;
        }

        &__text {
            font-size: 18rpx;
        }

        &--left-top {
            .hi-movable-button__movable-view {
                left: 10px;
                right: auto;
                top: 10px;
                bottom: auto;
            }
        }

        &--left-center {
            .hi-movable-button__movable-view {
                left: 10px;
                right: auto;
                top: 50%;
                bottom: auto;
                margin-top: -44rpx;
            }
        }

        &--left-bottom {
            .hi-movable-button__movable-view {
                left: 10px;
                right: auto;
                top: auto;
                bottom: 10px;
            }
        }

        &--right-top {
            .hi-movable-button__movable-view {
                left: auto;
                right: 10px;
                top: 10px;
                bottom: auto;
            }
        }

        &--right-center {
            .hi-movable-button__movable-view {
                left: auto;
                right: 10px;
                top: 50%;
                bottom: auto;
                margin-top: -44rpx;
            }
        }

        &--right-bottom {
            .hi-movable-button__movable-view {
                left: auto;
                right: 10px;
                top: auto;
                bottom: 10px;
            }
        }

        &--center-top {
            .hi-movable-button__movable-view {
                left: 50%;
                right: auto;
                top: 10px;
                bottom: auto;
                margin-left: -44rpx;
            }
        }

        &--center-center {
            .hi-movable-button__movable-view {
                left: 50%;
                right: auto;
                top: 50%;
                bottom: auto;
                margin-left: -44rpx;
                margin-top: -44rpx;
            }
        }

        &--center-bottom {
            .hi-movable-button__movable-view {
                left: 50%;
                right: auto;
                top: auto;
                bottom: 10px;
                margin-left: -44rpx;
            }
        }
    }
</style>
