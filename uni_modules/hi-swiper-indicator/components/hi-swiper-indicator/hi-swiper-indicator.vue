<!--
 * HiUi - 轮播指示器
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="hi-swiper-indicator" :class="_classes" :style="_styles">
        <!-- dots -->
        <view class="hi-swiper-indicator__dots" v-if="mode === 'dots'">
            <view
                class="hi-swiper-indicator__dots__item"
                v-for="_i in count"
                :key="_i"
                :class="{ 'hi-swiper-indicator__dots__item--active': _i === current + 1 }"
                :tap="_emits('click', _i - 1)"
            ></view>
        </view>

        <!-- line -->
        <view class="hi-swiper-indicator__line" v-else-if="mode === 'line'">
            <view class="hi-swiper-indicator__line__bar" :style="_lineBarStyles"></view>
        </view>
    </view>
</template>

<!-- 由于 HbuilderX 不支持 defineOptions() 写法，故只能在此处进行配置 -->
<script>
    export default { options: uni?.$hi?.config?.componentsOptions ?? {} };
</script>

<script setup>
    import { ref, computed, onMounted } from "vue";
    import props from "./props.js";

    // 组件属性
    const _props = defineProps(props);

    // 组件事件
    const _emits = defineEmits(["click"]);

    // 组件类名
    const _classes = computed(() => {
        const classes = [];

        // 指示器位置
        if (_props.position) classes.push(`hi-swiper-indicator--${_props.position}`);

        return classes;
    });

    // 组件样式
    const _styles = computed(() => {
        const styles = [];

        // 数量
        styles.push(`--hi-swiper-indicator-count: ${_props.count};`);

        // 点指示器
        if (_props.dotColor) styles.push(`--hi-swiper-indicator-dot-color: ${_props.dotColor};`);
        if (_props.activeDotColor) styles.push(`--hi-swiper-indicator-active-dot-color: ${_props.activeDotColor};`);
        if (_props.dotWidth) styles.push(`--hi-swiper-indicator-dot-width: ${_props.dotWidth};`);
        if (_props.activeDotWidth) styles.push(`--hi-swiper-indicator-active-dot-width: ${_props.activeDotWidth};`);
        if (_props.dotHeight) styles.push(`--hi-swiper-indicator-dot-height: ${_props.dotHeight};`);
        if (_props.activeDotHeight) styles.push(`--hi-swiper-indicator-active-dot-height: ${_props.activeDotHeight};`);
        if (_props.dotRedius) styles.push(`--hi-swiper-indicator-dot-border-redius: ${_props.dotRedius};`);
        if (_props.activeDotRedius) styles.push(`--hi-swiper-indicator-active-dot-border-redius: ${_props.activeDotRedius};`);
        if (_props.dotGap) styles.push(`--hi-swiper-indicator-dot-gap: ${_props.dotGap};`);

        return styles;
    });

    // line 指示器的 bar 样式
    const _lineBarStyles = computed(() => {
        const styles = [];
        if (["bottom-center", "bottom-left", "bottom-right"].includes(_props.position)) {
            styles.push(`width: ${(1 / (_props.count ?? 1)) * 100}%`);
            styles.push(`height: 100%`);
            styles.push(`left: ${(_props.current / (_props.count ?? 1)) * 100}%`);
            styles.push(`top: 0`);
        } else if (["left-center", "left-bottom", "right-center", "right-bottom"].includes(_props.position)) {
            styles.push(`width: 100%`);
            styles.push(`height: ${(1 / (_props.count ?? 1)) * 100}%`);
            styles.push(`left: 0`);
            styles.push(`top: ${(_props.current / (_props.count ?? 1)) * 100}%`);
        }
        return styles;
    });

    // 激活项的下标
    const index = ref(0);

    /**
     * 切换事件
     * @param {Object} event event.detail.current 切换后的下标
     */
    function onChange(event) {
        index.value = event.detail.current;
        _emits("change", event);
    }

    // 设置默认激活项
    onMounted(() => {
        index.value = _props.current;
    });

    // 组件对外暴漏的属性或方法
    defineExpose({});
</script>

<style lang="scss" scoped>
    .hi-swiper-indicator {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        z-index: 5;
        top: var(--hi-swiper-indicator-top);
        bottom: var(--hi-swiper-indicator-bottom, 10px);
        left: var(--hi-swiper-indicator-left, 50%);
        right: var(--hi-swiper-indicator-right);
        transform: var(--hi-swiper-indicator-transform, translate(-50%, 0));

        &__dots {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: var(--hi-swiper-indicator-dot-gap, 10rpx);

            &__item {
                width: var(--hi-swiper-indicator-dot-width, 16rpx);
                height: var(--hi-swiper-indicator-dot-height, 8rpx);
                border-radius: var(--hi-swiper-indicator-dot-border-redius, 8rpx);
                background: var(--hi-swiper-indicator-dot-color, #ffffff);
                transition: var(--hi-swiper-indicator-transition, 500ms);

                &--active {
                    width: var(--hi-swiper-indicator-active-dot-width, 32rpx);
                    height: var(--hi-swiper-indicator-active-dot-height, 8rpx);
                    border-radius: var(--hi-swiper-indicator-active-dot-border-redius, 8rpx);
                    background: var(--hi-swiper-indicator-active-dot-color, var(--hi-theme-primary));
                }
            }
        }

        &__line {
            width: var(--hi-swiper-indicator-line-width, calc(var(--hi-swiper-indicator-count) * 32rpx));
            height: var(--hi-swiper-indicator-line-height, 8rpx);
            border-radius: var(--hi-swiper-indicator-line-border-redius, 8rpx);
            background: var(--hi-swiper-indicator-line-color, #ffffff);
            position: relative;
            overflow: hidden;

            &__bar {
                position: absolute;
                border-radius: inherit;
                background: var(--hi-swiper-indicator-line-bar-color, var(--hi-theme-primary));
                transition: var(--hi-swiper-indicator-transition, 500ms);
            }
        }

        &--bottom-center {
            top: var(--hi-swiper-indicator-top);
            bottom: var(--hi-swiper-indicator-bottom, 10px);
            left: var(--hi-swiper-indicator-left, 50%);
            right: var(--hi-swiper-indicator-right);
            transform: var(--hi-swiper-indicator-transform, translate(-50%, 0));

            &.hi-swiper-indicator__dots {
                flex-direction: row;
            }

            .hi-swiper-indicator__dots__item {
                width: var(--hi-swiper-indicator-dot-width, 16rpx);
                height: var(--hi-swiper-indicator-dot-height, 8rpx);
                border-radius: var(--hi-swiper-indicator-dot-border-redius, 8rpx);
                background: var(--hi-swiper-indicator-dot-color, #ffffff);
                transition: var(--hi-swiper-indicator-transition, 500ms);
            }

            .hi-swiper-indicator__dots__item--active {
                width: var(--hi-swiper-indicator-active-dot-width, 32rpx);
                height: var(--hi-swiper-indicator-active-dot-height, 8rpx);
                border-radius: var(--hi-swiper-indicator-active-dot-border-redius, 8rpx);
                background: var(--hi-swiper-indicator-active-dot-color, var(--hi-theme-primary));
            }

            .hi-swiper-indicator__line {
                width: var(--hi-swiper-indicator-line-width, calc(var(--hi-swiper-indicator-count) * 32rpx));
                height: var(--hi-swiper-indicator-line-height, 8rpx);
            }
        }

        &--bottom-left {
            top: var(--hi-swiper-indicator-top);
            bottom: var(--hi-swiper-indicator-bottom, 10px);
            left: var(--hi-swiper-indicator-left, 10px);
            right: var(--hi-swiper-indicator-right);
            transform: var(--hi-swiper-indicator-transform, translate(0, 0));

            &.hi-swiper-indicator__dots {
                flex-direction: row;
            }

            .hi-swiper-indicator__dots__item {
                width: var(--hi-swiper-indicator-dot-width, 16rpx);
                height: var(--hi-swiper-indicator-dot-height, 8rpx);
                border-radius: var(--hi-swiper-indicator-dot-border-redius, 8rpx);
                background: var(--hi-swiper-indicator-dot-color, #ffffff);
                transition: var(--hi-swiper-indicator-transition, 500ms);
            }

            .hi-swiper-indicator__dots__item--active {
                width: var(--hi-swiper-indicator-active-dot-width, 32rpx);
                height: var(--hi-swiper-indicator-active-dot-height, 8rpx);
                border-radius: var(--hi-swiper-indicator-active-dot-border-redius, 8rpx);
                background: var(--hi-swiper-indicator-active-dot-color, var(--hi-theme-primary));
            }

            .hi-swiper-indicator__line {
                width: var(--hi-swiper-indicator-line-width, calc(var(--hi-swiper-indicator-count) * 32rpx));
                height: var(--hi-swiper-indicator-line-height, 8rpx);
            }
        }

        &--bottom-right {
            top: var(--hi-swiper-indicator-top);
            bottom: var(--hi-swiper-indicator-bottom, 10px);
            left: var(--hi-swiper-indicator-left, auto);
            right: var(--hi-swiper-indicator-right, 10px);
            transform: var(--hi-swiper-indicator-transform, translate(0, 0));

            &.hi-swiper-indicator__dots {
                flex-direction: row;
            }

            .hi-swiper-indicator__dots__item {
                width: var(--hi-swiper-indicator-dot-width, 16rpx);
                height: var(--hi-swiper-indicator-dot-height, 8rpx);
                border-radius: var(--hi-swiper-indicator-dot-border-redius, 8rpx);
                background: var(--hi-swiper-indicator-dot-color, #ffffff);
                transition: var(--hi-swiper-indicator-transition, 500ms);
            }

            .hi-swiper-indicator__dots__item--active {
                width: var(--hi-swiper-indicator-active-dot-width, 32rpx);
                height: var(--hi-swiper-indicator-active-dot-height, 8rpx);
                border-radius: var(--hi-swiper-indicator-active-dot-border-redius, 8rpx);
                background: var(--hi-swiper-indicator-active-dot-color, var(--hi-theme-primary));
            }

            .hi-swiper-indicator__line {
                width: var(--hi-swiper-indicator-line-width, calc(var(--hi-swiper-indicator-count) * 32rpx));
                height: var(--hi-swiper-indicator-line-height, 8rpx);
            }
        }

        &--left-center {
            top: var(--hi-swiper-indicator-top, 50%);
            bottom: var(--hi-swiper-indicator-bottom, auto);
            left: var(--hi-swiper-indicator-left, 10px);
            right: var(--hi-swiper-indicator-right, auto);
            transform: var(--hi-swiper-indicator-transform, translate(0, -50%));

            .hi-swiper-indicator__dots {
                flex-direction: column;
            }

            .hi-swiper-indicator__dots__item {
                width: var(--hi-swiper-indicator-dot-width, 8rpx);
                height: var(--hi-swiper-indicator-dot-height, 16rpx);
                border-radius: var(--hi-swiper-indicator-dot-border-redius, 8rpx);
                background: var(--hi-swiper-indicator-dot-color, #ffffff);
                transition: var(--hi-swiper-indicator-transition, 500ms);
            }

            .hi-swiper-indicator__dots__item--active {
                width: var(--hi-swiper-indicator-active-dot-width, 8rpx);
                height: var(--hi-swiper-indicator-active-dot-height, 32rpx);
                border-radius: var(--hi-swiper-indicator-active-dot-border-redius, 8rpx);
                background: var(--hi-swiper-indicator-active-dot-color, var(--hi-theme-primary));
            }

            .hi-swiper-indicator__line {
                width: var(--hi-swiper-indicator-line-width, 8rpx);
                height: var(--hi-swiper-indicator-line-height, calc(var(--hi-swiper-indicator-count) * 32rpx));
            }
        }

        &--left-bottom {
            top: var(--hi-swiper-indicator-top, auto);
            bottom: var(--hi-swiper-indicator-bottom, 10px);
            left: var(--hi-swiper-indicator-left, 10px);
            right: var(--hi-swiper-indicator-right, auto);
            transform: var(--hi-swiper-indicator-transform, translate(0, 0));

            .hi-swiper-indicator__dots {
                flex-direction: column;
            }

            .hi-swiper-indicator__dots__item {
                width: var(--hi-swiper-indicator-dot-width, 8rpx);
                height: var(--hi-swiper-indicator-dot-height, 16rpx);
                border-radius: var(--hi-swiper-indicator-dot-border-redius, 8rpx);
                background: var(--hi-swiper-indicator-dot-color, #ffffff);
                transition: var(--hi-swiper-indicator-transition, 500ms);
            }

            .hi-swiper-indicator__dots__item--active {
                width: var(--hi-swiper-indicator-active-dot-width, 8rpx);
                height: var(--hi-swiper-indicator-active-dot-height, 32rpx);
                border-radius: var(--hi-swiper-indicator-active-dot-border-redius, 8rpx);
                background: var(--hi-swiper-indicator-active-dot-color, var(--hi-theme-primary));
            }

            .hi-swiper-indicator__line {
                width: var(--hi-swiper-indicator-line-width, 8rpx);
                height: var(--hi-swiper-indicator-line-height, calc(var(--hi-swiper-indicator-count) * 32rpx));
            }
        }

        &--right-center {
            top: var(--hi-swiper-indicator-top, 50%);
            bottom: var(--hi-swiper-indicator-bottom, auto);
            left: var(--hi-swiper-indicator-left, auto);
            right: var(--hi-swiper-indicator-right, 10px);
            transform: var(--hi-swiper-indicator-transform, translate(0, -50%));

            .hi-swiper-indicator__dots {
                flex-direction: column;
            }

            .hi-swiper-indicator__dots__item {
                width: var(--hi-swiper-indicator-dot-width, 8rpx);
                height: var(--hi-swiper-indicator-dot-height, 16rpx);
                border-radius: var(--hi-swiper-indicator-dot-border-redius, 8rpx);
                background: var(--hi-swiper-indicator-dot-color, #ffffff);
                transition: var(--hi-swiper-indicator-transition, 500ms);
            }

            .hi-swiper-indicator__dots__item--active {
                width: var(--hi-swiper-indicator-active-dot-width, 8rpx);
                height: var(--hi-swiper-indicator-active-dot-height, 32rpx);
                border-radius: var(--hi-swiper-indicator-active-dot-border-redius, 8rpx);
                background: var(--hi-swiper-indicator-active-dot-color, var(--hi-theme-primary));
            }

            .hi-swiper-indicator__line {
                width: var(--hi-swiper-indicator-line-width, 8rpx);
                height: var(--hi-swiper-indicator-line-height, calc(var(--hi-swiper-indicator-count) * 32rpx));
            }
        }

        &--right-bottom {
            top: var(--hi-swiper-indicator-top, auto);
            bottom: var(--hi-swiper-indicator-bottom, 10px);
            left: var(--hi-swiper-indicator-left, auto);
            right: var(--hi-swiper-indicator-right, 10px);
            transform: var(--hi-swiper-indicator-transform, translate(0, 0));

            .hi-swiper-indicator__dots {
                flex-direction: column;
            }

            .hi-swiper-indicator__dots__item {
                width: var(--hi-swiper-indicator-dot-width, 8rpx);
                height: var(--hi-swiper-indicator-dot-height, 16rpx);
                border-radius: var(--hi-swiper-indicator-dot-border-redius, 8rpx);
                background: var(--hi-swiper-indicator-dot-color, #ffffff);
                transition: var(--hi-swiper-indicator-transition, 500ms);
            }

            .hi-swiper-indicator__dots__item--active {
                width: var(--hi-swiper-indicator-active-dot-width, 8rpx);
                height: var(--hi-swiper-indicator-active-dot-height, 32rpx);
                border-radius: var(--hi-swiper-indicator-active-dot-border-redius, 8rpx);
                background: var(--hi-swiper-indicator-active-dot-color, var(--hi-theme-primary));
            }

            .hi-swiper-indicator__line {
                width: var(--hi-swiper-indicator-line-width, 8rpx);
                height: var(--hi-swiper-indicator-line-height, calc(var(--hi-swiper-indicator-count) * 32rpx));
            }
        }
    }
</style>
