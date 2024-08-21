<!--
 * hi-swiper-indicator - 轮播指示器
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
    import { ref, computed } from "vue";
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
</script>

<style lang="scss" scoped>
    .hi-swiper-indicator {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        z-index: 5;
        bottom: 10px;
        left: 50%;
        transform: translate(-50%, 0);

        &__dots {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10rpx;
            flex-direction: row;

            &__item {
                width: 16rpx;
                height: 8rpx;
                border-radius: 8rpx;
                background: #ffffff;
                transition: 500ms;

                &--active {
                    width: 32rpx;
                    height: 8rpx;
                    border-radius: 8rpx;
                    background: var(--hi-theme-main);
                }
            }
        }

        &__line {
            width: calc(var(--hi-swiper-indicator-count) * 32rpx);
            height: 8rpx;
            border-radius: 8rpx;
            background: #ffffff;
            position: relative;
            overflow: hidden;

            &__bar {
                position: absolute;
                border-radius: inherit;
                background: var(--hi-theme-main);
                transition: 500ms;
            }
        }

        &--bottom-center {
            top: auto;
            bottom: 10px;
            left: 50%;
            right: auto;
            transform: translate(-50%, 0);
        }

        &--bottom-left {
            top: auto;
            bottom: 10px;
            left: 10px;
            right: auto;
            transform: translate(0, 0);
        }

        &--bottom-right {
            top: auto;
            bottom: 10px;
            left: auto;
            right: 10px;
            transform: translate(0, 0);
        }

        &--left-center {
            top: 50%;
            bottom: auto;
            left: 10px;
            right: auto;
            transform: translate(0, -50%);

            .hi-swiper-indicator__dots {
                flex-direction: column;
            }

            .hi-swiper-indicator__dots__item {
                width: 8rpx;
                height: 16rpx;
            }

            .hi-swiper-indicator__dots__item--active {
                width: 8rpx;
                height: 32rpx;
            }

            .hi-swiper-indicator__line {
                width: 8rpx;
                height: calc(var(--hi-swiper-indicator-count) * 32rpx);
            }
        }

        &--left-bottom {
            top: auto;
            bottom: 10px;
            left: 10px;
            right: auto;
            transform: translate(0, 0);

            .hi-swiper-indicator__dots {
                flex-direction: column;
            }

            .hi-swiper-indicator__dots__item {
                width: 8rpx;
                height: 16rpx;
            }

            .hi-swiper-indicator__dots__item--active {
                width: 8rpx;
                height: 32rpx;
            }

            .hi-swiper-indicator__line {
                width: 8rpx;
                height: calc(var(--hi-swiper-indicator-count) * 32rpx);
            }
        }

        &--right-center {
            top: 50%;
            bottom: auto;
            left: auto;
            right: 10px;
            transform: translate(0, -50%);

            .hi-swiper-indicator__dots {
                flex-direction: column;
            }

            .hi-swiper-indicator__dots__item {
                width: 8rpx;
                height: 16rpx;
            }

            .hi-swiper-indicator__dots__item--active {
                width: 8rpx;
                height: 32rpx;
            }

            .hi-swiper-indicator__line {
                width: 8rpx;
                height: calc(var(--hi-swiper-indicator-count) * 32rpx);
            }
        }

        &--right-bottom {
            top: auto;
            bottom: 10px;
            left: auto;
            right: 10px;
            transform: translate(0, 0);

            .hi-swiper-indicator__dots {
                flex-direction: column;
            }

            .hi-swiper-indicator__dots__item {
                width: 8rpx;
                height: 16rpx;
            }

            .hi-swiper-indicator__dots__item--active {
                width: 8rpx;
                height: 32rpx;
            }

            .hi-swiper-indicator__line {
                width: 8rpx;
                height: calc(var(--hi-swiper-indicator-count) * 32rpx);
            }
        }
    }
</style>
