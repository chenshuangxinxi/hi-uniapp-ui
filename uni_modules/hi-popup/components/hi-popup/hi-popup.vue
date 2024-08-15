<!--
 * HiUi - 弹出层
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="hi-popup" :class="_classes" :style="_styles" v-if="modelValue">
        <view class="hi-popup__mask" @tap="handleMaskClick" v-if="showMask"></view>
        <view class="hi-popup__content">
            <view class="hi-popup__header" v-if="showHeader">
                <slot name="header">
                    <view class="hi-popup__title">
                        <slot name="title">{{ title }}</slot>
                    </view>
                    <view class="hi-popup__close" v-if="showClose" @tap="handleCloseClick" :hover-class="hoverClass">
                        <slot name="close">
                            <hi-icon :name="closeIconName" :size="closeIconSize" :color="closeIconColor" :mode="closeIconMode"></hi-icon>
                        </slot>
                    </view>
                </slot>
            </view>
            <view class="hi-popup__body">
                <scroll-view
                    scroll-y
                    class="hi-popup__body__scroll-view"
                    :upper-threshold="upperThreshold"
                    :lower-threshold="lowerThreshold"
                    :refresher-enabled="refresherEnabled"
                    :refresher-threshold="refresherThreshold"
                    :refresher-default-style="refresherDefaultStyle"
                    :refresher-background="refresherBackground"
                    :scroll-anchoring="scrollAnchoring"
                    :refresher-triggered="refresherTriggered"
                    @scrolltoupper="_emits('scrolltoupper')"
                    @scrolltolower="_emits('scrolltolower')"
                    @scroll="_emits('scroll')"
                    @refresherpulling="_emits('refresherpulling')"
                    @refresherrefresh="_emits('refresherrefresh')"
                    @refresherrestore="_emits('refresherrestore')"
                    @refresherabort="_emits('refresherabort')"
                >
                    <slot></slot>
                </scroll-view>
            </view>
            <view class="hi-popup__footer" v-if="showFooter">
                <slot name="footer"></slot>
            </view>
        </view>
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
    const _emits = defineEmits([
        "close",
        "asyncClose",
        "update:modelValue",
        "scrolltoupper",
        "scrolltolower",
        "scroll",
        "refresherpulling",
        "refresherrefresh",
        "refresherrestore",
        "refresherabort"
    ]);

    // 组件类名
    const _classes = computed(() => {
        const classes = [];

        // 模式
        classes.push(`hi-popup--${_props.mode}`);

        // 是否显示
        if (_props.modelValue) classes.push("hi-popup--show");

        return classes;
    });

    // 组件样式
    const _styles = computed(() => {
        const styles = [];

        // 过渡效果持续时间
        if (_props.duration) styles.push(`--hi-popup-duration: ${_props.duration}`);

        // 标题颜色
        if (_props.titleColor) styles.push(`--hi-popup-title-color: ${_props.titleColor}`);

        // 标题大小
        if (_props.titleSize) styles.push(`--hi-popup-title-font-size: ${_props.titleSize}`);

        // 宽
        if (_props.width) styles.push(`--hi-popup-width: ${_props.width}`);
        if (_props.maxWidth) styles.push(`--hi-popup-max-width: ${_props.maxWidth}`);

        // 高
        if (_props.height) styles.push(`--hi-popup-height: ${_props.height}`);

        // 内容最大高
        if (_props.maxHeight) styles.push(`--hi-popup-max-height: ${_props.maxHeight}`);

        // 圆角
        if (_props.radius) styles.push(`--hi-popup-border-radius: ${_props.radius}`);

        // 背景
        if (_props.bg) styles.push(`--hi-popup-background: ${_props.bg}`);

        // 遮罩背景
        if (_props.maskBg) styles.push(`--hi-popup-mask-background: ${_props.maskBg}`);

        // 边框
        if (_props.showBorder) styles.push(`--hi-popup-body-border-top-width: 0.5px; --hi-popup-body-border-bottom-width: 0.5px`);
        if (_props.showBorderTop) styles.push(`--hi-popup-body-border-top-width: 0.5px`);
        if (_props.showBorderBottom) styles.push(`--hi-popup-body-border-bottom-width: 0.5px`);

        // 边框颜色
        if (_props.borderColor) styles.push(`--hi-popup-body-border-color: ${_props.borderColor}`);

        return styles;
    });

    /**
     * 遮罩点击事件
     */
    function handleMaskClick() {
        // 遮罩可点击
        if (_props.maskClickable) {
            // 开启了异步关闭
            if (_props.async) {
                _emits("asyncClose");
                return;
            }

            // 没开启异步关闭
            _emits("update:modelValue", false);
            _emits("close");
            return;
        }
    }

    /**
     * 关闭按钮点击事件
     */
    function handleCloseClick() {
        // 异步关闭
        if (_props.async) {
            _emits("asyncClose");
            return;
        }

        // 没开启异步关闭
        _emits("update:modelValue", false);
        _emits("close");
        return;
    }
</script>

<style lang="scss" scoped>
    .hi-popup {
        height: 0;

        &__mask {
            position: fixed;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: var(--hi-popup-mask-background, var(--hi-background-overlay));
            opacity: 0;
            z-index: var(--hi-popup-mask-index, var(--hi-index-big));
            overflow: hidden;
        }

        &__content {
            width: var(--hi-popup-width, 80%);
            max-width: var(--hi-popup-max-width, 100%);
            height: var(--hi-popup-height);
            max-height: var(--hi-popup-max-height, 50%);
            background: var(--hi-popup-background, #ffffff);
            opacity: 0;
            display: flex;
            flex-direction: column;
            border-radius: var(--hi-popup-border-radius, var(--hi-radius-default));

            overflow: var(--hi-popup-overflow, hidden);
            position: fixed;
            left: var(--hi-popup-left, 50%);
            top: var(--hi-popup-top, 50%);
            right: var(--hi-popup-right, auto);
            bottom: var(--hi-popup-bottom, auto);
            transform: var(--hi-popup-transform, translate(-50%, -50%));
            z-index: var(--hi-popup-index, var(--hi-index-big));
        }

        &__header {
            padding: var(--hi-popup-header-padding, 6px 15px);
            text-align: var(--hi-popup-header-text-align, center);
            font-size: var(--hi-popup-header-font-size, 1.25em);
            font-weight: var(--hi-popup-header-font-weight, 700);
            color: var(--hi-popup-header-color);
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
        }

        &__title {
            font-size: var(--hi-popup-title-font-size, inherit);
            font-weight: var(--hi-popup-title-font-weight, inherit);
            color: var(--hi-popup-title-color, inherit);
            text-align: var(--hi-popup-title-text-align, inherit);
            flex: 1;
            padding: var(--hi-popup-title-padding);
        }

        &__close {
            width: 0;
            color: var(--hi-popup-close-color);
            font-size: var(--hi-popup-close-size);
            display: flex;
            align-items: center;
            justify-content: center;
        }

        &__body {
            flex: 1;
            background: var(--hi-popup-body-background);
            border-style: var(--hi-popup-body-border-style, solid);
            border-color: var(--hi-popup-body-border-color, var(--hi-border-color));
            border-top-width: var(--hi-popup-body-border-top-width, 0);
            border-right-width: var(--hi-popup-body-border-right-width, 0);
            border-bottom-width: var(--hi-popup-body-border-bottom-width, 0);
            border-left-width: var(--hi-popup-body-border-left-width, 0);
            overflow: hidden;
            display: flex;

            &__scroll-view {
                width: 100%;
                padding: var(--hi-popup-padding);
            }
        }

        &__footer {
            flex-shrink: 0;
            display: flex;
            align-items: center;
        }

        &--show {
            .hi-popup__mask {
                animation-duration: var(--hi-popup-duration, 500ms);
                animation-timing-function: var(--hi-popup-timing-function, linear);
                animation-fill-mode: forwards;
                animation-name: hi-popup-mask-ani;
            }

            .hi-popup__content {
                animation-duration: var(--hi-popup-duration, 500ms);
                animation-timing-function: var(--hi-popup-timing-function, linear);
                animation-fill-mode: forwards;
                animation-name: hi-popup-content-ani;
            }

            &.hi-popup--center .hi-popup__content {
                animation-name: hi-popup-content-ani-center;
            }

            &.hi-popup--top .hi-popup__content {
                animation-name: hi-popup-content-ani-top;
            }

            &.hi-popup--bottom .hi-popup__content {
                animation-name: hi-popup-content-ani-bottom;
            }

            &.hi-popup--left .hi-popup__content {
                animation-name: hi-popup-content-ani-left;
            }

            &.hi-popup--right .hi-popup__content {
                animation-name: hi-popup-content-ani-right;
            }
        }

        &--center {
            .hi-popup__content {
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
            }
        }

        &--top {
            .hi-popup__content {
                left: 50%;
                top: 0;
                transform: translate(-50%, 0);
                width: var(--hi-popup-width, 100%);
                border-radius: var(--hi-popup-border-radius, 0 0 var(--hi-radius-default) var(--hi-radius-default));
            }
        }

        &--bottom {
            .hi-popup__content {
                left: 50%;
                bottom: 0;
                transform: translate(-50%, 0);
                width: var(--hi-popup-width, 100%);
                border-radius: var(--hi-popup-border-radius, var(--hi-radius-default) var(--hi-radius-default) 0 0);
                padding-bottom: var(--hi-popup-padding-bottom, env(safe-area-inset-bottom));
            }
        }

        &--left {
            .hi-popup__content {
                left: 0;
                top: 50%;
                transform: translate(0, -50%);
                width: var(--hi-popup-width, 100%);
                max-width: var(--hi-popup-max-width, 80%);
                height: var(--hi-popup-height, 100%);
                max-height: var(--hi-popup-max-height, 100%);
                border-radius: var(--hi-popup-border-radius, 0 var(--hi-radius-default) var(--hi-radius-default) 0);
                padding-bottom: var(--hi-popup-padding-bottom, env(safe-area-inset-bottom));
            }
        }

        &--right {
            .hi-popup__content {
                left: auto;
                right: 0;
                top: 50%;
                transform: translate(0, -50%);
                width: var(--hi-popup-width, 100%);
                max-width: var(--hi-popup-max-width, 80%);
                height: var(--hi-popup-height, 100%);
                max-height: var(--hi-popup-max-height, 100%);
                border-radius: var(--hi-popup-border-radius, var(--hi-radius-default) 0 0 var(--hi-radius-default));
                padding-bottom: var(--hi-popup-padding-bottom, env(safe-area-inset-bottom));
            }
        }

        @keyframes hi-popup-mask-ani {
            0% {
                opacity: 0;
            }

            100% {
                opacity: 1;
            }
        }

        @keyframes hi-popup-content-ani {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }

        @keyframes hi-popup-content-ani-center {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }

        @keyframes hi-popup-content-ani-top {
            0% {
                opacity: 0;
                transform: translate(-50%, -100%);
            }
            100% {
                opacity: 1;
                transform: translate(-50%, 0);
            }
        }

        @keyframes hi-popup-content-ani-bottom {
            0% {
                opacity: 0;
                transform: translate(-50%, 100%);
            }
            100% {
                opacity: 1;
                transform: translate(-50%, 0);
            }
        }

        @keyframes hi-popup-content-ani-left {
            0% {
                opacity: 0;
                transform: translate(-100%, -50%);
            }
            100% {
                opacity: 1;
                transform: translate(0, -50%);
            }
        }

        @keyframes hi-popup-content-ani-right {
            0% {
                opacity: 0;
                transform: translate(100%, -50%);
            }
            100% {
                opacity: 1;
                transform: translate(0, -50%);
            }
        }
    }
</style>
