<!--
 * hi-ui 图片组件
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 15275181688 / 19256078701 / 18754137913
 -->
<template>
    <view class="hi-image" :class="_classes" :style="_styles" :hover-class="hoverClass" @tap="handleClick">
        <image
            class="hi-image__image"
            :src="src"
            :mode="mode"
            :lazy-load="lazyLoad"
            :fade-show="fadeShow"
            :webp="webp"
            :draggable="draggable"
            :show-menu-by-longpress="showMenuByLongpress"
            @load="onLoad"
            @error="onError"
        />
        <view class="hi-image__status hi-image__status--loading" v-if="status === 'loading' && loading">
            <hi-icon class="hi-image__status__icon hi-image__status__icon--loading" :name="loadingIconName" v-bind="loadingIconProps"></hi-icon>
            <text class="hi-image__status__text hi-image__status__text--loading">{{ loadingText }}</text>
        </view>
        <view class="hi-image__status hi-image__status--error" v-if="status === 'error' && error">
            <hi-icon class="hi-image__status__icon hi-image__status__icon--error" :name="errorIconName" v-bind="errorIconProps"></hi-icon>
            <text class="hi-image__status__text hi-image__status__text--error">{{ errorText }}</text>
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
    const _emits = defineEmits(["load", "error", "click"]);

    // 组件类名
    const _classes = computed(() => {
        const classes = [];
        return classes;
    });

    // 组件样式
    const _styles = computed(() => {
        const styles = [];

        // 宽
        if (_props.width) styles.push(`--hi-image-width: ${_props.width}`);

        // 高
        if (_props.height) styles.push(`--hi-image-height: ${_props.height}`);

        return styles;
    });

    // 图片加载状态
    const status = ref("loading");

    /**
     * 图片加载完成
     */
    function onLoad() {
        status.value = "loaded";
        _emits("load");
    }

    /**
     * 图片加载失败
     */
    function onError() {
        status.value = "error";
        _emits("error");
    }

    /**
     * 点击事件
     */
    function handleClick() {
        _emits("click");

        // 开启了预览
        if (_props.preview) {
            uni.previewImage({
                urls: [_props.src],
                current: 0
            });
        }
    }

    // 组件对外暴漏的属性或方法
    defineExpose({});
</script>

<style lang="scss" scoped>
    .hi-image {
        width: var(--hi-image-width, 360rpx);
        height: var(--hi-image-height, 360rpx);
        position: relative;

        &__image {
            width: 100%;
            height: 100%;
        }

        &__status {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            z-index: 9;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            &__icon {
                margin: var(--hi-image-status-icon-margin, 8px 0);

                &--loading {
                    --hi-icon-size: var(--hi-image-loading-icon-size, 1.5em);
                    --hi-icon-color: var(--hi-image-loading-icon-color, var(--hi-font-color-light));
                    animation-name: hi-ani-apin;
                    animation-duration: var(--hi-image-loading-duration, 1500ms);
                    animation-iteration-count: infinite;
                    animation-timing-function: var(--hi-image-loading-function, linear);
                }

                &--error {
                    --hi-icon-size: var(--hi-image-error-icon-size, 1.75em);
                    --hi-icon-color: var(--hi-image-error-icon-color, var(--hi-font-color-light));
                }
            }

            &__text {
                font-size: var(--hi-image-status-text-font-size, 0.75em);
                color: var(--hi-image-status-text-color, var(--hi-font-color-light));

                &--loading {
                    --hi-loading-text-size: var(--hi-image-loading-text-font-size, var(--hi-image-status-text-font-size, 0.75em));
                    --hi-loading-text-color: var(--hi-image-loading-text-color, var(--hi-image-status-text-color, var(--hi-font-color-light)));
                }

                &--error {
                    font-size: var(--hi-image-error-text-font-size, var(--hi-image-status-text-font-size, 0.75em));
                    color: var(--hi-image-error-text-color, var(--hi-image-status-text-color, var(--hi-font-color-light)));
                }
            }
        }
    }
</style>
