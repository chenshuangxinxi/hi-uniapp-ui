<!--
 * hi-ui - 遮罩层组件
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 15275181688 / 19256078701 / 18754137913
 -->
<template>
    <hi-overlay
        class="hi-popup"
        :class="_classes"
        :style="_styles"
        v-model="hiOverlayModelValue"
        :async="async"
        :align="hiOverlayAlign"
        :duration="duration"
        @close="handleOverlayClose"
        @asyncClose="handleOverlayAsyncClose"
    >
        <view class="hi-popup__content" @tap.stop>
            <view class="hi-popup__head" v-if="showHead">
                <slot name="head">
                    <view class="hi-popup__title" v-if="showTitle">
                        <slot name="title">{{ title }}</slot>
                    </view>

                    <view class="hi-popup__close">
                        <slot name="close">
                            <hi-icon :name="closeIconName" :v-bind="closeIconProps" v-if="showClose" @tap.stop="handleCloseClick"></hi-icon>
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
            <view class="hi-popup__foot" v-if="showFoot">
                <slot name="foot"></slot>
            </view>
        </view>
    </hi-overlay>
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

        // 宽
        if (_props.width) styles.push(`--hi-popup-width: ${_props.width}`);

        // 高
        if (_props.height) styles.push(`--hi-popup-height: ${_props.height}`);
        if (_props.maxHeight) styles.push(`--hi-popup-max-height: ${_props.maxHeight}`);

        return styles;
    });

    // 模式
    const hiOverlayAlign = computed(() => {
        if (_props.mode === "top") return "center-top";
        if (_props.mode === "bottom") return "center-bottom";
        if (_props.mode === "center") return "center-center";
        if (_props.mode === "left") return "left-center";
        if (_props.mode === "right") return "right-center";
        return "center-center";
    });

    // hi-overlay v-model 的值
    const hiOverlayModelValue = computed({
        get() {
            return _props.modelValue;
        },
        set(value) {
            // 遮罩可点击
            if (_props.overlayClickable) {
                _emits("update:modelValue", value);
            }
        }
    });

    /**
     * 遮罩关闭事件
     */
    function handleOverlayClose() {
        // 遮罩可点击
        if (_props.overlayClickable) {
            _emits("close");
            return;
        }
    }

    /**
     * 遮罩异步关闭事件
     */
    function handleOverlayAsyncClose() {
        // 遮罩可点击
        if (_props.overlayClickable) {
            _emits("asyncClose");
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

        _emits("update:modelValue", false);
        _emits("close");
    }
</script>

<style lang="scss" scoped>
    .hi-popup {
        &__content {
            width: var(--hi-popup-width, 80%);
            max-width: var(--hi-popup-max-width, 100%);
            height: var(--hi-popup-height);
            max-height: var(--hi-popup-max-height, 50%);
            background-color: var(--hi-popup-background, #ffffff);
            opacity: 0;
            display: flex;
            flex-direction: column;
            border-radius: var(--hi-popup-border-radius, var(--hi-radius-main));
            padding-top: var(--hi-popup-padding-top);
            padding-left: var(--hi-popup-padding-left);
            padding-right: var(--hi-popup-padding-right);
            padding-bottom: var(--hi-popup-padding-bottom);
            overflow: var(--hi-popup-overflow, hidden);
        }

        &__head {
            padding: var(--hi-popup-head-padding, 0.6em 3em);
            text-align: var(--hi-popup-head-text-align, center);
            font-size: var(--hi-popup-head-font-size, 1.25em);
            font-weight: var(--hi-popup-head-font-weight, 700);
            color: var(--hi-popup-head-font-color);
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            min-height: 2.2em;
        }

        &__title {
            font-size: var(--hi-popup-title-font-size);
            font-weight: var(--hi-popup-title-font-weight);
            color: var(--hi-popup-title-font-color);
            text-align: var(--hi-popup-title-text-align);
        }

        &__close {
            position: absolute;
            right: var(--hi-popup-close-right, 0.6em);
            top: var(--hi-popup-close-top, 50%);
            transform: var(--hi-popup-close-transform, translateY(-50%));
            color: var(--hi-popup-close-color);
            font-size: var(--hi-popup-close-size);
            background: var(--hi-popup-close-background);
            border-radius: var(--hi-popup-close-border-radius);
        }

        &__body {
            flex: 1;
            overflow: hidden;
            background: var(--hi-popup-body-background);
            border-style: var(--hi-popup-body-border-style, solid);
            border-color: var(--hi-popup-body-border-color, var(--hi-border-color-default));
            border-top-width: var(--hi-popup-body-border-top-width, 0);
            border-right-width: var(--hi-popup-body-border-right-width, 0);
            border-bottom-width: var(--hi-popup-body-border-bottom-width, 0);
            border-left-width: var(--hi-popup-body-border-left-width, 0);
            display: flex;
            flex-direction: column;

            &__scroll-view {
                height: 100%;
                width: 100%;
            }
        }

        &__foot {
            flex-shrink: 0;
            display: flex;
            align-items: center;
        }

        &--show {
            .hi-popup__content {
                animation-name: hi-popup-body-ani;
                animation-duration: var(--hi-popup-duration, 500ms);
                animation-timing-function: var(--hi-popup-function, ease-in-out);
                animation-fill-mode: forwards;
            }

            &.hi-popup--top .hi-popup__content {
                animation-name: hi-popup-body-ani-top;
            }

            &.hi-popup--bottom .hi-popup__content {
                animation-name: hi-popup-body-ani-bottom;
            }

            &.hi-popup--left .hi-popup__content {
                animation-name: hi-popup-body-ani-left;
            }

            &.hi-popup--right .hi-popup__content {
                animation-name: hi-popup-body-ani-right;
            }
        }

        &--top {
            .hi-popup__content {
                width: var(--hi-popup-width, 100%);
                border-radius: var(--hi-popup-border-radius, 0 0 var(--hi-radius-main) var(--hi-radius-main));
            }
        }

        &--bottom {
            .hi-popup__content {
                width: var(--hi-popup-width, 100%);
                border-radius: var(--hi-popup-border-radius, var(--hi-radius-main) var(--hi-radius-main) 0 0);
                padding-bottom: var(--hi-popup-padding-bottom, env(safe-area-inset-bottom));
            }
        }

        &--left {
            .hi-popup__content {
                width: var(--hi-popup-width, auto);
                max-width: var(--hi-popup-max-width, 80%);
                height: var(--hi-popup-height, 100%);
                max-height: var(--hi-popup-max-height, 100%);
                border-radius: var(--hi-popup-border-radius, 0 var(--hi-radius-main) var(--hi-radius-main) 0);
                padding-bottom: var(--hi-popup-padding-bottom, env(safe-area-inset-bottom));
            }
        }

        &--right {
            .hi-popup__content {
                width: var(--hi-popup-width, auto);
                max-width: var(--hi-popup-max-width, 80%);
                height: var(--hi-popup-height, 100%);
                max-height: var(--hi-popup-max-height, 100%);
                border-radius: var(--hi-popup-border-radius, var(--hi-radius-main) 0 0 var(--hi-radius-main));
                padding-bottom: var(--hi-popup-padding-bottom, env(safe-area-inset-bottom));
            }
        }

        @keyframes hi-popup-body-ani {
            0% {
                opacity: 0;
                transform: scale(0);
            }
            100% {
                opacity: 1;
                transform: scale(1);
            }
        }

        @keyframes hi-popup-body-ani-top {
            0% {
                opacity: 0;
                transform: translateY(-100%);
            }
            100% {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes hi-popup-body-ani-bottom {
            0% {
                opacity: 0;
                transform: translateY(100%);
            }
            100% {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes hi-popup-body-ani-left {
            0% {
                opacity: 0;
                transform: translateX(-100%);
            }
            100% {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes hi-popup-body-ani-right {
            0% {
                opacity: 0;
                transform: translateX(100%);
            }
            100% {
                opacity: 1;
                transform: translateY(0);
            }
        }
    }
</style>
