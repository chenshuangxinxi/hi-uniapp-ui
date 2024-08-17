<!--
 * 商品
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="hi-goods-bamboo" :class="_classes" :style="_styles" :hover-class="hoverClass" @tap="_emits('click')">
        <view class="hi-goods-bamboo__image-box">
            <hi-image class="hi-goods-bamboo__image" :src="item.image" :mode="mode" v-bind="imageProps"></hi-image>
        </view>
        <view class="hi-goods-bamboo__content">
            <view class="hi-goods-bamboo__head">
                <view class="hi-goods-bamboo__title hi-line-2">{{ item.title }}</view>
                <hi-icon
                    :name="deleteIconName"
                    v-bind="deleteIconProps"
                    class="hi-goods-bamboo__delete"
                    @tap.stop="_emits('delete')"
                    v-if="showDelete"
                ></hi-icon>
            </view>
            <view class="hi-goods-bamboo__body">
                <view class="hi-goods-bamboo__spec hi-line-1">{{ item.spec }}</view>
            </view>
            <view class="hi-goods-bamboo__foot">
                <hi-price :price="item.price" class="hi-goods-bamboo__price"></hi-price>
                <hi-number-step v-model="item.number" class="hi-goods-bamboo__number" @change="_emits('change')" v-bind="numberStepProps"></hi-number-step>
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
    const _emits = defineEmits(["delete", "click", "change"]);

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
    .hi-goods-bamboo {
        position: relative;
        border-width: var(--hi-goods-bamboo-border-width, 0);
        border-style: var(--hi-goods-bamboo-border-style, solid);
        border-color: var(--hi-goods-bamboo-border-color, var(--hi-border-color-default));
        border-radius: var(--hi-goods-bamboo-border-radius, var(--hi-radius-small));
        overflow: var(--hi-goods-bamboo-overflow, hidden);
        display: flex;
        background: var(--hi-goods-bamboo-background, #ffffff);
        padding: var(--hi-goods-bamboo-padding, 20rpx);
        gap: var(--hi-goods-bamboo-content-gap, 20rpx);

        &__image-box {
            width: var(--hi-goods-bamboo-image-width, 200rpx);
            height: var(--hi-goods-bamboo-image-height, 200rpx);
            border-radius: var(--hi-goods-bamboo-image-border-radius);
            background: var(--hi-goods-bamboo-image-background);
            overflow: hidden;
            flex-shrink: 0;
        }

        &__image {
            --hi-image-width: 100%;
            --hi-image-height: 100%;
        }

        &__content {
            padding: var(--hi-goods-bamboo-right-padding);
            display: flex;
            flex-direction: column;
            flex: 1;
        }

        &__head {
            margin: var(--hi-goods-bamboo-head-margin);
            display: flex;
            gap: var(--hi-goods-bamboo-head-conetnt-gap, 1em);
            line-height: var(--hi-goods-bamboo-heae-line-height, 1.36);
        }

        &__title {
            font-size: var(--hi-goods-bamboo-title-font-size);
            color: var(--hi-goods-bamboo-title-font-color);
            font-weight: var(--hi-goods-bamboo-title-font-weight, 700);
        }

        &__delete {
            --hi-icon-size: var(--hi-goods-bamboo-delete-font-size);
            --hi-icon-color: var(--hi-goods-bamboo-delete-font-color, var(--hi-font-color-light));
            margin: var(--hi-goods-bamboo-delete-margin, 0.18em 0 0 0);
            flex-shrink: 0;
            vertical-align: middle;

            &:active {
                opacity: var(--hi-goods-bamboo-delete-active-opacity, var(--hi-opacity-hover));
            }
        }

        &__body {
            margin: var(--hi-goods-bamboo-body-margin, 12rpx 0 0 0);
            color: var(--hi-goods-bamboo-body-font-color, var(--hi-font-color-light));
            font-size: var(--hi-goods-bamboo-body-font-size, 0.9em);
        }

        &__foot {
            display: flex;
            align-items: center;
            margin: var(--hi-goods-bamboo-foot-margin, auto 0 0 0);
        }

        &__number {
            margin: var(--hi-goods-bamboo-number-margin, 0 0 0 auto);
            --hi-number-step-input-width: var(--hi-goods-bamboo-number-input-width, 3em);
        }
    }
</style>
