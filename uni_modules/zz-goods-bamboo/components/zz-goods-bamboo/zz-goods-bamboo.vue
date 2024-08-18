<!--
 * zz-goods-bamboo - 商品
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="zz-goods-bamboo" :class="_classes" :style="_styles" :hover-class="hoverClass">
        <!-- 图片 -->
        <view class="zz-goods-bamboo__image-box">
            <hi-image class="zz-goods-bamboo__image" :src="item.image" :mode="mode"></hi-image>
        </view>

        <!-- 内容 -->
        <view class="zz-goods-bamboo__content">
            <view class="zz-goods-bamboo__header">
                <view class="zz-goods-bamboo__title hi-line-2">{{ item?.title }}</view>
                <hi-icon :name="deleteIconName" class="zz-goods-bamboo__delete" @tap.stop="_emits('delete')" v-if="showDelete"></hi-icon>
            </view>
            <view class="zz-goods-bamboo__body">
                <view class="zz-goods-bamboo__spec hi-line-1">{{ item?.spec }}</view>
            </view>
            <view class="zz-goods-bamboo__foot">
                <hi-price :value="item?.price" class="zz-goods-bamboo__price"></hi-price>
                <hi-number-step
                    v-model="item.number"
                    class="zz-goods-bamboo__number"
                    :async="async"
                    :disabledInput="disabledInput"
                    :max="max"
                    :min="min"
                    @change="_emits('change')"
                    @asyncChange="onAsyncChange"
                ></hi-number-step>
            </view>
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
    const _emits = defineEmits(["delete", "change", "asyncChange"]);

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

    function onAsyncChange(value) {
        _emits("asyncChange", value);
    }
</script>

<style lang="scss" scoped>
    .zz-goods-bamboo {
        position: relative;
        border-radius: var(--hi-radius-default);
        overflow: hidden;
        display: flex;
        background: #ffffff;
        padding: 20rpx;
        gap: 20rpx;

        &__image-box {
            width: 200rpx;
            height: 200rpx;
            overflow: hidden;
            flex-shrink: 0;
        }

        &__image {
            width: 100%;
            height: 100%;
        }

        &__content {
            display: flex;
            flex-direction: column;
            flex: 1;
        }

        &__header {
            display: flex;
            gap: 1em;
            line-height: 1.25;
            align-items: flex-start;
        }

        &__title {
            font-weight: 700;
        }

        &__delete {
            color: var(--hi-color-light);
            flex-shrink: 0;
            vertical-align: middle;
        }

        &__body {
            margin: 12rpx 0 0 0;
            color: var(--hi-color-light);
            font-size: 0.9em;
        }

        &__foot {
            display: flex;
            align-items: center;
            margin: auto 0 0 0;
        }

        &__number {
            margin: 0 0 0 auto;
        }
    }
</style>
