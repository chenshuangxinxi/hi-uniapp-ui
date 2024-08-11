<!--
 * hi-ui - 轮播组件
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 15275181688 / 19256078701 / 18754137913
 -->
<template>
    <view class="hi-swiper" :class="_classes" :style="_styles">
        <swiper
            class="hi-swiper__swiper"
            :active-class="activeClass"
            :changing-class="changingClass"
            :autoplay="autoplay"
            :current-item-id="currentItemId"
            :interval="interval"
            :duration="duration"
            :circular="circular"
            :vertical="vertical"
            :previous-margin="previousMargin"
            :next-margin="nextMargin"
            :acceleration="acceleration"
            :disable-programmatic-animation="disableProgrammaticAnimation"
            :display-multiple-items="displayMultipleItems"
            :skip-hidden-item-layout="skipHiddenItemLayout"
            :disable-touch="disableTouch"
            :touchable="touchable"
            :easing-function="easingFunction"
            @change="onChange"
            @transition="_emits('transition')"
            @animationfinish="_emits('animationfinish')"
        >
            <swiper-item class="hi-swiper__item" v-for="(_item, _index) in list" :key="_index" @tap="_emits('click', _item, _index)">
                <image
                    class="hi-swiper__item__image"
                    :src="_item[keyName]"
                    :mode="_item?.mode ?? mode"
                    :lazy-load="_item?.lazyLoad ?? lazyLoad"
                    :fade-show="_item?.fadeShow ?? fadeShow"
                    :webp="_item?.webp ?? webp"
                    :show-menu-by-longpress="_item?.showMenuByLongpress ?? showMenuByLongpress"
                    :draggable="_item?.draggable ?? draggable"
                    @error="_emits('error', _item, _index)"
                    @load="_emits('load', _item, _index)"
                />
                <view class="hi-swiper__item__content">
                    <!-- #ifndef MP -->
                    <!-- optimization： 微信小程序会疯狂的报More than one slot named "cell" are found inside a single component instance，但是不影响使用，不过会导致页面卡顿 -->
                    <slot name="default"></slot>
                    <!-- #endif -->
                </view>
            </swiper-item>
        </swiper>
        <view class="hi-swiper__indicator-dots" v-if="dots">
            <view
                class="hi-swiper__indicator-dot"
                v-for="(_, _index) in list"
                :key="_index"
                :class="{ 'hi-swiper__indicator-dot--active': _index === index }"
            ></view>
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
    const _emits = defineEmits(["click", "change", "transition", "animationfinish", "error", "load"]);

    // 组件类名
    const _classes = computed(() => {
        const classes = [];
        return classes;
    });

    // 组件样式
    const _styles = computed(() => {
        const styles = [];

        // 宽
        if (_props.width) styles.push(`--hi-swiper-width: ${_props.width};`);

        // 高
        if (_props.height) styles.push(`--hi-swiper-height: ${_props.height};`);

        return styles;
    });

    /**
     * 切换事件
     * @param {Object} event event.detail.current 切换后的下标
     */
    function onChange(event) {
        index.value = event.detail.current;
        _emits("change", event);
    }

    // 激活项的下标
    const index = ref(0);

    // 设置默认激活项
    onMounted(() => {
        index.value = _props.current;
    });

    // 组件对外暴漏的属性或方法
    defineExpose({});
</script>

<style lang="scss" scoped>
    .hi-swiper {
        height: var(--hi-swiper-height, 280rpx);
        width: var(--hi-swiper-width, 100%);
        position: relative;
        display: flex;

        &__swiper {
            width: 100%;
            height: 100%;
        }

        &__item {
            width: 100%;
            height: 100%;
            border-radius: var(--hi-swiper-border-radius);
            overflow: hidden;
            position: relative;

            &__image {
                width: 100%;
                height: 100%;
            }

            &__content {
                background: var(--hi-swiper-content-background);
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                z-index: 2;
            }
        }

        &__indicator-dots {
            display: flex;
            flex-direction: var(--hi-swiper-dots-flex-direction, row);
            align-items: center;
            justify-content: center;
            position: absolute;
            z-index: 5;
            top: var(--hi-swiper-dots-top);
            bottom: var(--hi-swiper-dots-bottom, 20rpx);
            left: var(--hi-swiper-dots-left, 50%);
            right: var(--hi-swiper-dots-right);
            transform: var(--hi-swiper-dots-transform, translateX(-50%));
        }

        &__indicator-dot {
            border-radius: var(--hi-swiper-dot-border-radius, var(--hi-radius-small));
            background: var(--hi-swiper-dot-color, #ffffff);
            transition: var(--hi-swiper-dot-transition, 500ms);
            width: var(--hi-swiper-dot-width, 16rpx);
            height: var(--hi-swiper-dot-height, 8rpx);
            margin: var(--hi-swiper-dot-margin, 0 8rpx);

            &--active {
                background: var(--hi-swiper-dot-color-active, var(--hi-theme-primary));
                border-radius: var(--hi-swiper-dot-border-radius-active, var(--hi-radius-small));
                width: var(--hi-swiper-dot-width-active, 32rpx);
                height: var(--hi-swiper-dot-height-active, 8rpx);
                margin: var(--hi-swiper-dot-margin-active, 0 8rpx);
            }
        }
    }
</style>
