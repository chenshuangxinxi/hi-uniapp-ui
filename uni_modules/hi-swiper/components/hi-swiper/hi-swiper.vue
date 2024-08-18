<!--
 * hi-swiper - 轮播
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="hi-swiper" :class="_classes" :style="_styles">
        <swiper
            class="hi-swiper__swiper"
            :indicator-dots="indicatorDots"
            :indicator-color="indicatorColor"
            :indicator-active-color="indicatorActiveColor"
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
            <swiper-item
                class="hi-swiper__item"
                v-for="(_item, _index) in list"
                :key="_index"
                @tap="_emits('click', _item, _index)"
                :hover-class="hoverClass"
            >
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
                    <slot :item="_item" :index="_index"></slot>
                </view>
            </swiper-item>
        </swiper>
        <slot name="indicator" :current="index"></slot>
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
    .hi-swiper {
        height: 280rpx;
        width: 100%;
        position: relative;
        display: flex;

        &__swiper {
            width: 100%;
            height: 100%;
            border-radius: inherit;
        }

        &__item {
            width: 100%;
            height: 100%;
            border-radius: inherit;
            overflow: hidden;
            position: relative;

            &__image {
                width: 100%;
                height: 100%;
                border-radius: inherit;
            }

            &__content {
                border-radius: inherit;
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                z-index: 2;
            }
        }
    }
</style>
