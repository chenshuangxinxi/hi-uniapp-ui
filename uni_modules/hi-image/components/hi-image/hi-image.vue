<!--
 * hi-image - 图片
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="hi-image" :class="_classes" :style="_styles">
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
        <view class="hi-image__status hi-image__status--loading" v-if="status === 'loading' && showLoading">
            <hi-icon class="hi-image__status__icon hi-image__status__icon--loading" :name="loadingIconName"></hi-icon>
            <text class="hi-image__status__text hi-image__status__text--loading">{{ loadingText }}</text>
        </view>
        <view class="hi-image__status hi-image__status--error" v-if="status === 'error' && showError">
            <hi-icon class="hi-image__status__icon hi-image__status__icon--error" :name="errorIconName"></hi-icon>
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
    const _emits = defineEmits(["load", "error"]);

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
</script>

<style lang="scss" scoped>
    .hi-image {
        width: var(--hi-image-width, 360rpx);
        height: var(--hi-image-height, 360rpx);
        position: relative;
        color: var(--hi-color-light);

        &__image {
            width: 100%;
            height: 100%;
            border-radius: inherit;
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
            border-radius: inherit;

            &__icon {
                font-size: 1.8em;

                &--loading {
                    animation-name: hi-ani-spin;
                    animation-duration: 1500ms;
                    animation-iteration-count: infinite;
                    animation-timing-function: linear;
                }
            }

            &__text {
                font-size: 0.75em;
            }
        }
    }
</style>
