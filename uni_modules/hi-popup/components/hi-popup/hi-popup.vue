<!--
 * hi-popup - 弹出层
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="hi-popup" :class="_classes" :style="_styles" v-if="show">
        <view class="hi-popup__mask" @tap="handleMaskClick" v-if="showMask"></view>
        <view class="hi-popup__content">
            <view class="hi-popup__header" v-if="showHeader">
                <slot name="header">
                    <view class="hi-popup__title">
                        <slot name="title">{{ title }}</slot>
                    </view>
                    <view class="hi-popup__close" v-if="showClose" @tap="handleCloseClick" :hover-class="hoverClass">
                        <slot name="close">
                            <hi-icon class="hi-popup__close__icon" :name="closeIconName"></hi-icon>
                        </slot>
                    </view>
                </slot>
            </view>
            <view class="hi-popup__body">
                <scroll-view scroll-y class="hi-popup__body__scroll-view" @scrolltolower="_emits('scrolltolower')" @scroll="_emits('scroll')">
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
    const _emits = defineEmits(["close", "scrolltolower", "scroll"]);

    // 组件类名
    const _classes = computed(() => {
        const classes = [];

        // 模式
        classes.push(`hi-popup--${_props.mode}`);

        // 是否显示
        if (_props.show) classes.push("hi-popup--show");

        return classes;
    });

    // 组件样式
    const _styles = computed(() => {
        const styles = [];

        // 宽
        if (_props.width) styles.push(`--hi-popup-width: ${_props.width}`);
        if (_props.maxWidth) styles.push(`--hi-popup-max-width: ${_props.maxWidth}`);

        // 高
        if (_props.height) styles.push(`--hi-popup-height: ${_props.height}`);
        if (_props.maxHeight) styles.push(`--hi-popup-max-height: ${_props.maxHeight}`);

        return styles;
    });

    /**
     * 遮罩点击事件
     */
    function handleMaskClick() {
        // 遮罩可点击
        if (_props.maskClickable) {
            _emits("close");
        }
    }

    /**
     * 关闭按钮点击事件
     */
    function handleCloseClick() {
        _emits("close");
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
            background: var(--hi-background-overlay);
            opacity: 0;
            z-index: var(--hi-index-big);
            overflow: hidden;
        }

        &__content {
            width: 80%;
            max-width: 100%;
            max-height: 50%;
            background: #ffffff;
            opacity: 0;
            display: flex;
            flex-direction: column;
            overflow: hidden;
            position: fixed;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            z-index: var(--hi-index-big);
        }

        &__header {
            padding: 6px 15px;
            text-align: center;
            font-size: 1.25em;
            font-weight: 700;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
        }

        &__title {
            flex: 1;
        }

        &__close {
            width: 0;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        &__body {
            flex: 1;
            border-style: solid;
            border-color: var(--hi-border-color);
            border-top-width: 0.5px;
            border-right-width: 0;
            border-bottom-width: 0.5px;
            border-left-width: 0;
            overflow: hidden;
            display: flex;

            &__scroll-view {
                width: 100%;
            }
        }

        &__footer {
            flex-shrink: 0;
            display: flex;
            align-items: center;
        }

        &--show {
            .hi-popup__mask {
                animation-duration: 300ms;
                animation-timing-function: linear;
                animation-fill-mode: forwards;
                animation-name: hi-popup-mask-ani;
            }

            .hi-popup__content {
                animation-duration: 300ms;
                animation-timing-function: linear;
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
                width: 100%;
            }
        }

        &--bottom {
            .hi-popup__content {
                left: 50%;
                bottom: 0;
                transform: translate(-50%, 0);
                width: 100%;
                padding-bottom: env(safe-area-inset-bottom);
            }
        }

        &--left {
            .hi-popup__content {
                left: 0;
                top: 50%;
                transform: translate(0, -50%);
                width: 100%;
                max-width: 80%;
                height: 100%;
                max-height: 100%;
                padding-bottom: env(safe-area-inset-bottom);
            }
        }

        &--right {
            .hi-popup__content {
                left: auto;
                right: 0;
                top: 50%;
                transform: translate(0, -50%);
                width: 100%;
                max-width: 80%;
                height: 100%;
                max-height: 100%;
                padding-bottom: env(safe-area-inset-bottom);
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
