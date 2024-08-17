<!--
 * 商品
 *
 * @author 济南晨霜信息技术有限公司
 * @mobile 18560000860 / 18754137913
 -->
<template>
    <view class="hi-goods-aster" :class="_classes" :style="_styles" :hover-class="hoverClass">
        <view class="hi-goods-aster__image-box">
            <hi-image class="hi-goods-aster__image" :src="item.image" :mode="mode" :preview="false" v-bind="imageProps"></hi-image>
        </view>
        <view class="hi-goods-aster__content">
            <view class="hi-goods-aster__name" :class="`hi-line-${line}`">{{ item.name }}</view>
            <view class="hi-goods-aster__bottom">
                <hi-price :price="item.price" class="hi-goods-aster__price"></hi-price>
                <view class="hi-goods-aster__shopping-cart">
                    <hi-icon
                        class="hi-goods-aster__shopping-cart__icon"
                        :name="shoppingCartIconName"
                        v-bind="shoppingCartIconProps"
                        @tap.stop="_emits('addCart', item)"
                    ></hi-icon>
                </view>
            </view>
        </view>
        <view class="hi-goods-aster__tags">
            <slot name="tags">
                <view
                    class="hi-goods-aster__tag"
                    :style="`color: ${_tag.color}; background: ${_tag.background}`"
                    v-for="(_tag, _index) in item.tags"
                    :key="_index"
                >
                    <text class="hi-goods-aster__tag__text">{{ _tag.text }}</text>
                </view>
            </slot>
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
    const _emits = defineEmits(["addCart"]);

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
    .hi-goods-aster {
        position: relative;
        border-width: var(--hi-goods-aster-border-width, 0);
        border-style: var(--hi-goods-aster-border-style, solid);
        border-color: var(--hi-goods-aster-border-color, var(--hi-border-color-default));
        font-size: var(--hi-goods-aster-font-size, 26rpx);
        border-radius: var(--hi-goods-aster-border-radius, var(--hi-radius-main));
        overflow: var(--hi-goods-aster-overflow, hidden);
        height: var(--hi-goods-aster-height, 100%);
        display: flex;
        flex-direction: column;

        &__image-box {
            height: var(--hi-goods-aster-image-height, 340rpx);
            display: flex;
            align-items: center;
            justify-content: center;
        }

        &__image {
            --hi-image-width: 100%;
            --hi-image-height: 100%;
        }

        &__content {
            padding: var(--hi-goods-aster-content-padding, 20rpx 24rpx);
            display: flex;
            flex-direction: column;
            flex: 1;
        }

        &__name {
            font-size: var(--hi-goods-aster-name-font-size);
            color: var(--hi-goods-aster-name-font-color);
            font-weight: var(--hi-goods-aster-name-font-weight, 800);
            margin: var(--hi-goods-aster-name-margin, 0 0 1em 0);
        }

        &__bottom {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: auto;
        }

        &__shopping-cart {
            width: var(--hi-goods-aster-cart-width, 2.15em);
            height: var(--hi-goods-aster-cart-height, 2.15em);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: var(--hi-goods-aster-cart-border-radius, 50%);
            background: var(--hi-goods-aster-cart-background, var(--hi-theme-linear-main));
            color: var(--hi-goods-aster-cart-color, #ffffff);
        }

        &__tags {
            position: absolute;
            left: var(--hi-goods-aster-tags-left, 0);
            top: var(--hi-goods-aster-tags-top, 0);
            z-index: 9;
            padding: var(--hi-goods-aster-tags-padding, 18rpx 10rpx);
            display: flex;
            flex-wrap: wrap;
            gap: var(--hi-goods-aster-tags-gap, 10rpx);
            font-size: var(--hi-goods-aster-tags-font-size, 20rpx);
        }

        &__tag {
            padding: var(--hi-goods-aster-tag-padding, 0 0.6em);
            height: var(--hi-goods-aster-tag-height, 1.5em);
            line-height: var(--hi-goods-aster-tag-line-height, 1.5);
            border-radius: var(--hi-goods-aster-tag-border-radius, var(--hi-radius-small));
            position: relative;
            overflow: hidden;

            &__text {
                position: relative;
                z-index: 5;
            }
        }
    }
</style>
