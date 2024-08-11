<!--
 * 商品
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 15275181688 / 19256078701 / 18754137913
 -->
<template>
    <view class="hi-classify-aster" :class="_classes" :style="_styles" :hover-class="hoverClass">
        <view class="hi-classify-aster__image-box">
            <hi-image class="hi-classify-aster__image" :src="item.image" :mode="mode" :preview="false" v-bind="imageProps"></hi-image>
        </view>
        <view class="hi-classify-aster__content">
            <view class="hi-classify-aster__name" :class="`hi-line-${line}`">{{ item.name }}</view>
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
    const _emits = defineEmits([""]);

    // 组件类名
    const _classes = computed(() => {
        const classes = [];
        return classes;
    });

    // 组件样式
    const _styles = computed(() => {
        const styles = [];
        return styles;
    });

    // 组件数据
    // ...

    // 组件函数
    // ...

    // 组件对外暴漏的属性或方法
    defineExpose({});
</script>

<style lang="scss" scoped>
    .hi-classify-aster {
        position: relative;
        border-width: var(--hi-classify-aster-border-width, 0);
        border-style: var(--hi-classify-aster-border-style, solid);
        border-color: var(--hi-classify-aster-border-color, var(--hi-border-color-default));
        font-size: var(--hi-classify-aster-font-size, 24rpx);
        border-radius: var(--hi-classify-aster-border-radius);
        overflow: var(--hi-classify-aster-overflow, hidden);
        height: var(--hi-classify-aster-height, 100%);
        display: flex;
        flex-direction: column;
        text-align: var(--hi-classify-aster-text-align, center);
        font-weight: var(--hi-classify-aster-font-weight, 500);

        &__image-box {
            height: var(--hi-classify-aster-image-height, 152rpx);
            border-radius: var(--hi-classify-aster-image-border-radius, var(--hi-radius-middle));
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--hi-classify-aster-image-background, #ffffff);
            overflow: hidden;
        }

        &__image {
            --hi-image-width: 100%;
            --hi-image-height: 100%;
        }

        &__content {
            padding: var(--hi-classify-aster-content-padding, 16rpx 0.5em);
            display: flex;
            flex-direction: column;
            flex: 1;
        }

        &__name {
            font-size: var(--hi-classify-aster-name-font-size);
            color: var(--hi-classify-aster-name-font-color);
            font-weight: var(--hi-classify-aster-name-font-weight);
            margin: var(--hi-classify-aster-name-margin);
        }
    }
</style>
