<!--
 * zz-classify-apple - 分类
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="zz-classify-apple" :class="_classes" :style="_styles" :hover-class="hoverClass">
        <view class="zz-classify-apple__image-box">
            <hi-image class="zz-classify-apple__image" :src="item?.image" :mode="mode"></hi-image>
        </view>
        <view class="zz-classify-apple__content">
            <view class="zz-classify-apple__name" :class="`hi-line-${line}`">{{ item?.name }}</view>
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
</script>

<style lang="scss" scoped>
    .zz-classify-apple {
        position: relative;
        font-size: 24rpx;
        overflow: hidden;
        height: 100%;
        display: flex;
        flex-direction: column;
        text-align: center;
        font-weight: 500;

        &__image-box {
            height: 152rpx;
            border-radius: var(--hi-radius-small);
            display: flex;
            align-items: center;
            justify-content: center;
            background: #ffffff;
            overflow: hidden;
        }

        &__image {
            width: 100%;
            height: 100%;
        }

        &__content {
            padding: 16rpx 0.5em;
            display: flex;
            flex-direction: column;
            flex: 1;
        }
    }
</style>
